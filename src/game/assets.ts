import type { GameArt, SpriteId, TerrainId } from "./types";

const TILES: TerrainId[] = ["plains", "woods", "ruins", "water", "ember", "hill", "flame", "column", "nave", "barricade", "highwood", "highruin"];
const SPRITES: SpriteId[] = ["kael", "nira", "voss", "salazar", "soldier", "brigand", "captain", "sorcerer", "horror", "pikeman", "wardog", "troll"];

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    const fail = () => reject(new Error(`Falha ao carregar ${src}`));
    const t = window.setTimeout(fail, 8000);
    img.onload = () => {
      window.clearTimeout(t);
      resolve(img);
    };
    img.onerror = () => {
      window.clearTimeout(t);
      fail();
    };
    img.src = src;
  });
}

const HERO_IDLE = new Set<SpriteId>(["kael", "nira", "voss", "salazar", "horror"]);

export async function loadGameArt(): Promise<GameArt> {
  const tiles = {} as Record<TerrainId, HTMLImageElement>;
  await Promise.all(
    TILES.map(async (id) => {
      tiles[id] = await loadImage(`/game/tiles/${id}.png?v=3`);
    }),
  );
  const sprites = {} as Record<SpriteId, HTMLImageElement[]>;
  const attacks: Partial<Record<SpriteId, HTMLImageElement[]>> = {};
  await Promise.all(
    SPRITES.map(async (id) => {
      const n = HERO_IDLE.has(id) ? 12 : 4;
      sprites[id] = await Promise.all(Array.from({ length: n }, (_, i) => loadImage(`/game/sprites/${id}/${i + 1}.png${id === "troll" ? "?v=11" : ""}`)));
    }),
  );
  await Promise.all(
    (["kael", "nira", "voss", "salazar"] as SpriteId[]).map(async (id) => {
      const n = id === "kael" ? 12 : 4;
      attacks[id] = await Promise.all(Array.from({ length: n }, (_, i) => loadImage(`/game/sprites/${id}/atk-${i + 1}.png${id === "kael" ? "?v=2" : ""}`)));
    }),
  );
  const impact = await Promise.all([1, 2, 3, 4].map((n) => loadImage(`/game/fx/impact-${n}.png`)));
  const idles: Partial<Record<SpriteId, HTMLImageElement[]>> = {
    kael: await Promise.all(Array.from({ length: 36 }, (_, i) => loadImage(`/game/sprites/kael/stand-${i + 1}.png?v=2`))),
  };
  return { tiles, sprites, attacks, idles, impact };
}