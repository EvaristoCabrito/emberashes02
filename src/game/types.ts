export type PotionId = "mid" | "weak" | "potent" | "disease";

export interface Bag {
  mid: number;
  weak: number;
  potent: number;
  disease: number;
}

export interface Spells {
  tier1: number;
  tier2: number;
  tier3: number;
  tier4: number;
  tier5: number;
  tier6: number;
  tier7: number;
  tier8: number;
  tier9: number;
  tier10: number;
}

export type TerrainId = "plains" | "woods" | "ruins" | "water" | "ember" | "hill" | "flame" | "column" | "nave" | "barricade" | "highwood" | "highruin";
export type Side = "player" | "enemy";
export type ClassId =
  | "swordsman"
  | "archer"
  | "mage"
  | "healer"
  | "soldier"
  | "brigand"
  | "captain"
  | "sorcerer"
  | "horror"
  | "pikeman"
  | "wardog"
  | "troll"
  | "assassin"
  | "rogue"
  | "lancer"
  | "conjurer"
  | "paladin"
  | "heavyKnight";
export type SpriteId = "kael" | "nira" | "voss" | "salazar" | "soldier" | "brigand" | "captain" | "sorcerer" | "horror" | "pikeman" | "wardog" | "troll";
export type HealId = "cureMinor" | "cureWounds";
export type SpellKind = "fireball" | HealId | "longShot" | "piercing" | "lightning" | "doubleStrike" | "cleave" | "cureDisease";
export type ScreenId = "boot" | "title" | "campaign" | "briefing" | "cutscene" | "epilogue" | "battle" | "victory" | "defeat" | "inn";
export type Phase = "player" | "enemy";
export type InputMode = "idle" | "selected" | "awaitAction" | "awaitAttack" | "awaitSpell" | "locked";

export interface Point {
  x: number;
  y: number;
}

export interface TerrainDef {
  id: TerrainId;
  name: string;
  moveCost: number;
  def: number;
  atk: number;
  passable: boolean;
  hazardDice?: number;
  hazardFaces?: number;
  height?: number;
  blocksShot?: boolean;
  cover?: number;
}

export interface ClassDef {
  id: ClassId;
  name: string;
  role: string;
  hp: number;
  atk: number;
  mag: number;
  def: number;
  res: number;
  mov: number;
  minRange: number;
  maxRange: number;
  sprite: SpriteId;
  size: number;
  /** Turn-order priority: lower acts first. Only set for player classes so far. */
  init?: number;
}

export interface Spawn {
  name: string;
  classId: ClassId;
  x: number;
  y: number;
}

export type WinCondition = "rout" | "boss";

export interface Mission {
  id: string;
  index: number;
  title: string;
  place: string;
  briefing: string;
  objective: string;
  win: WinCondition;
  cols: number;
  rows: number;
  layout: string[];
  playerSpawns: Spawn[];
  enemySpawns: Spawn[];
  hub?: boolean;
}

export interface Unit {
  id: string;
  name: string;
  classId: ClassId;
  className: string;
  role: string;
  side: Side;
  sprite: SpriteId;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  atk: number;
  mag: number;
  def: number;
  res: number;
  mov: number;
  minRange: number;
  maxRange: number;
  moved: boolean;
  facing: 1 | -1;
  walkPose: "front" | "back" | "side";
  alive: boolean;
  drawX: number;
  drawY: number;
  flash: number;
  fade: number;
  bob: number;
  level: number;
  bag: Bag;
  spells: Spells;
  size: number;
  shock: { dice: number; faces: number; bonus: number } | null;
  diseased: boolean;
  diseaseBase: { atk: number; mag: number; def: number; res: number; mov: number } | null;
}

export interface UnitPublic {
  id: string;
  name: string;
  classId: ClassId;
  className: string;
  role: string;
  side: Side;
  sprite: SpriteId;
  hp: number;
  maxHp: number;
  atk: number;
  mag: number;
  def: number;
  res: number;
  mov: number;
  minRange: number;
  maxRange: number;
  moved: boolean;
  x: number;
  y: number;
  level: number;
  bag: Bag;
  spells: Spells;
  size: number;
  diseased: boolean;
}

export interface Forecast {
  attacker: string;
  defender: string;
  dmgOut: number;
  dmgBack: number;
  canCounter: boolean;
  critOut: boolean;
  kill: boolean;
}

export interface TerrainHover {
  id: TerrainId;
  name: string;
  def: number;
  atk: number;
  passable: boolean;
  hazard?: string;
  note?: string;
}

export interface HudSnapshot {
  phase: Phase;
  banner: string | null;
  selected: UnitPublic | null;
  hoveredUnit: UnitPublic | null;
  terrain: TerrainHover | null;
  mode: InputMode;
  canAttack: boolean;
  forecast: Forecast | null;
  turn: number;
  objective: string;
  missionTitle: string;
  playerAlive: number;
  enemyAlive: number;
  busy: boolean;
  result: "victory" | "defeat" | null;
  zoom: number;
  tip: string | null;
  inspected: UnitPublic | null;
  pendingFoe: UnitPublic | null;
  spellReady: boolean;
  spellKind: SpellKind | null;
  /** This round's turn order (both sides mixed), lowest initiative first. */
  turnQueue: { id: string; name: string; side: Side; acted: boolean; active: boolean }[];
}

export interface WalkDirs {
  front: HTMLImageElement;
  back: HTMLImageElement;
  side: HTMLImageElement;
}

export interface GameArt {
  tiles: Record<TerrainId, HTMLImageElement>;
  sprites: Record<SpriteId, HTMLImageElement[]>;
  attacks: Partial<Record<SpriteId, HTMLImageElement[]>>;
  idles: Partial<Record<SpriteId, HTMLImageElement[]>>;
  walkDirs: Partial<Record<SpriteId, WalkDirs>>;
  impact: HTMLImageElement[];
}

export interface BattleUnitSnap {
  id: string;
  name: string;
  classId: ClassId;
  side: Side;
  x: number;
  y: number;
  hp: number;
  moved: boolean;
  facing: 1 | -1;
  alive: boolean;
  level: number;
  bag: Bag;
  spells: Spells;
}

export interface BattleSnapshot {
  missionId: string;
  turn: number;
  phase: Phase;
  units: BattleUnitSnap[];
}

export interface SaveData {
  version: number;
  completed: string[];
  unitHp: Record<string, number>;
  levels: Record<string, number>;
  xp: Record<string, number>;
  bags: Record<string, Bag>;
  ember: number;
  emberSeeded: boolean;
  muted: boolean;
  updatedAt: number;
  pendingMission: string | null;
}

export interface SaveBank {
  version: number;
  lastSlot: number;
  muted: boolean;
  slots: Array<SaveData | null>;
}

export interface GrowthLine {
  name: string;
  from: number;
  to: number;
  hpBattle: number;
  maxFrom: number;
  restHp: number;
  levelHp: number;
  hpCamp: number;
  maxTo: number;
  powerFrom: number;
  powerTo: number;
  powerKind: "AT" | "MAG";
  atkFrom: number;
  atkTo: number;
  magFrom: number;
  magTo: number;
  defFrom: number;
  defTo: number;
  resFrom: number;
  resTo: number;
  fallen: boolean;
  starsFrom: number;
  starsTo: number;
  starsNeed: number;
  starReasons: string[];
}
