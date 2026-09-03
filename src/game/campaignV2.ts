import { DECORATIONS, MISSIONS, TERRAIN, TILE_CHAR } from "./data";
import { hexNeighbors } from "./pathfinding";
import type { DecorationPlacement, Mission, TerrainId } from "./types";

/**
 * Campaign V2: the same 11 battle missions (the Inn hub has no real layout, so it's
 * skipped), with "funky" single-hex clutter tiles — woods ("w") and ruins ("r"), whose
 * baked-in tree/house art tiles awkwardly at hex scale — stripped back to plain ground and
 * replaced with a modest sprinkling of the multi-hex decoration objects instead. Elevation
 * (hill, "h"), fire (flame, "f") and ember ("e") are untouched, per direct instruction.
 *
 * This runs once at module load over the real, already-expanded MISSIONS data (not the
 * pre-expandMaps authoring layout), so coordinates and dimensions always match what the
 * game actually renders. Every candidate decoration placement is verified with a BFS
 * connectivity check — dropped if it would cut any spawn off from the rest of the board —
 * so no V2 map can end up unwinnable. The legacy MISSIONS array is never touched.
 */

const CONVERT = new Set(["w", "r"]);
const KEEP_HOST = new Set([".", "h", "f", "n"]);
const CHAR_TO_TERRAIN: Record<string, TerrainId> = Object.fromEntries(
  Object.entries(TILE_CHAR).map(([id, ch]) => [ch, id as TerrainId]),
);

const TREE_DECOS = ["dense-forest", "dead-tree-large"];
const RUIN_DECOS = ["ruined-cottage", "broken-tower", "ruined-chapel", "broken-wall-segment", "boulder-cluster", "abandoned-mansion"];

type Cell = [number, number];

function inBounds(x: number, y: number, cols: number, rows: number): boolean {
  return x >= 0 && x < cols && y >= 0 && y < rows;
}

function floodClusters(grid: string[][], cols: number, rows: number, chars: Set<string>): Cell[][] {
  const seen = new Set<string>();
  const clusters: Cell[][] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const key = `${x},${y}`;
      if (seen.has(key) || !chars.has(grid[y][x])) continue;
      const stack: Cell[] = [[x, y]];
      seen.add(key);
      const comp: Cell[] = [[x, y]];
      while (stack.length) {
        const [cx, cy] = stack.pop()!;
        for (const n of hexNeighbors(cx, cy)) {
          const k = `${n.x},${n.y}`;
          if (inBounds(n.x, n.y, cols, rows) && !seen.has(k) && chars.has(grid[n.y]?.[n.x] ?? "")) {
            seen.add(k);
            stack.push([n.x, n.y]);
            comp.push([n.x, n.y]);
          }
        }
      }
      clusters.push(comp);
    }
  }
  return clusters;
}

function connectivityOk(grid: string[][], cols: number, rows: number, blockedExtra: Set<string>, spawns: Cell[]): boolean {
  if (spawns.length === 0) return true;
  const passable = (x: number, y: number): boolean => {
    if (blockedExtra.has(`${x},${y}`)) return false;
    const id = CHAR_TO_TERRAIN[grid[y][x]] ?? "plains";
    return TERRAIN[id]?.passable !== false;
  };
  const [sx, sy] = spawns[0]!;
  const seen = new Set([`${sx},${sy}`]);
  const stack: Cell[] = [[sx, sy]];
  while (stack.length) {
    const [cx, cy] = stack.pop()!;
    for (const n of hexNeighbors(cx, cy)) {
      const k = `${n.x},${n.y}`;
      if (inBounds(n.x, n.y, cols, rows) && !seen.has(k) && passable(n.x, n.y)) {
        seen.add(k);
        stack.push([n.x, n.y]);
      }
    }
  }
  return spawns.every(([x, y]) => seen.has(`${x},${y}`));
}

function stripFunkyTerrain(mission: Mission): Mission {
  const { cols, rows } = mission;
  const grid: string[][] = mission.layout.map((row) => row.split(""));
  const spawns: Cell[] = [
    ...mission.playerSpawns.map((s): Cell => [s.x, s.y]),
    ...mission.enemySpawns.map((s): Cell => [s.x, s.y]),
  ];
  const spawnSet = new Set(spawns.map(([x, y]) => `${x},${y}`));

  const woodClusters = floodClusters(grid, cols, rows, new Set(["w"])).sort((a, b) => b.length - a.length);
  const ruinClusters = floodClusters(grid, cols, rows, new Set(["r"])).sort((a, b) => b.length - a.length);
  const totalWr = woodClusters.reduce((n, c) => n + c.length, 0) + ruinClusters.reduce((n, c) => n + c.length, 0);

  const decorations: DecorationPlacement[] = [];
  const blockedExtra = new Set<string>();

  function tryPlaceOne(anchor: Cell, pool: string[]): boolean {
    const [ax, ay] = anchor;
    for (const name of pool) {
      const def = DECORATIONS[name];
      if (!def) continue;
      const cells: Cell[] = def.footprint.map((f) => [ax + f.dx, ay + f.dy]);
      if (!cells.every(([cx, cy]) => inBounds(cx, cy, cols, rows))) continue;
      if (cells.some(([cx, cy]) => spawnSet.has(`${cx},${cy}`))) continue;
      if (!cells.every(([cx, cy]) => CONVERT.has(grid[cy][cx]) || KEEP_HOST.has(grid[cy][cx]))) continue;
      if (cells.some(([cx, cy]) => blockedExtra.has(`${cx},${cy}`))) continue;
      const candidate = new Set(blockedExtra);
      for (const [cx, cy] of cells) candidate.add(`${cx},${cy}`);
      if (connectivityOk(grid, cols, rows, candidate, spawns)) {
        for (const [cx, cy] of cells) blockedExtra.add(`${cx},${cy}`);
        decorations.push({ id: name, x: ax, y: ay });
        return true;
      }
    }
    return false;
  }

  function placeInClusters(clusters: Cell[][], pool: string[], budget: number): number {
    let placed = 0;
    let di = 0;
    for (const cluster of clusters) {
      if (placed >= budget) break;
      if (cluster.length < 2) continue;
      const perClusterBudget = Math.max(1, Math.floor(cluster.length / 5));
      let got = 0;
      for (const anchor of cluster) {
        if (placed >= budget || got >= perClusterBudget) break;
        const [ax, ay] = anchor;
        if (spawnSet.has(`${ax},${ay}`)) continue;
        const offset = di % pool.length;
        const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];
        if (tryPlaceOne(anchor, rotated)) {
          di += 1;
          got += 1;
          placed += 1;
        }
      }
    }
    return placed;
  }

  const cap = totalWr > 0 ? Math.min(8, Math.max(2, Math.floor(totalWr / 6))) : 0;
  const placedTrees = placeInClusters(woodClusters, TREE_DECOS, cap);
  placeInClusters(ruinClusters, RUIN_DECOS, Math.max(0, cap - placedTrees) + (placedTrees < cap ? 2 : 0));

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (CONVERT.has(grid[y][x])) grid[y][x] = ".";
    }
  }

  return {
    ...mission,
    id: `${mission.id}-v2`,
    layout: grid.map((row) => row.join("")),
    decorations: [...(mission.decorations ?? []), ...decorations],
  };
}

export const MISSIONS_V2: Mission[] = MISSIONS.filter((m) => !m.hub).map(stripFunkyTerrain);
