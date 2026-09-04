import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Volume2, c as RotateCcw, d as Lock, f as ChevronLeft, i as VolumeX, l as Pencil, n as ZoomOut, p as Check, r as X, s as Swords, t as ZoomIn, u as MapPin } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DyFE0lyf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[opacity,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 select-none", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "bg-transparent text-fg border border-border hover:bg-surface-2",
			quiet: "bg-surface-2 text-fg border border-border hover:opacity-90"
		},
		size: {
			sm: "h-9 px-3 text-xs rounded-xs min-w-9",
			md: "h-11 px-5 text-sm rounded-sm min-w-11",
			lg: "h-12 px-6 text-base rounded-md min-w-11",
			xl: "h-14 px-8 text-base rounded-lg min-w-11"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var TIER_KEYS = [
	"tier1",
	"tier2",
	"tier3",
	"tier4",
	"tier5",
	"tier6",
	"tier7",
	"tier8",
	"tier9",
	"tier10"
];
var TERRAIN = {
	plains: {
		id: "plains",
		name: "Planície",
		moveCost: 1,
		def: 0,
		atk: 0,
		passable: true
	},
	woods: {
		id: "woods",
		name: "Bosque",
		moveCost: 2,
		def: 1,
		atk: 0,
		passable: true
	},
	ruins: {
		id: "ruins",
		name: "Ruínas",
		moveCost: 1,
		def: 2,
		atk: 0,
		passable: true
	},
	water: {
		id: "water",
		name: "Água",
		moveCost: 99,
		def: 0,
		atk: 0,
		passable: false
	},
	ember: {
		id: "ember",
		name: "Brasa",
		moveCost: 99,
		def: 0,
		atk: 0,
		passable: false
	},
	hill: {
		id: "hill",
		name: "Barranco",
		moveCost: 2,
		def: 1,
		atk: 2,
		passable: true,
		height: 1
	},
	flame: {
		id: "flame",
		name: "Chama",
		moveCost: 3,
		def: 0,
		atk: 0,
		passable: true,
		hazardDice: 1,
		hazardFaces: 8
	},
	column: {
		id: "column",
		name: "Coluna",
		moveCost: 99,
		def: 0,
		atk: 0,
		passable: false,
		blocksShot: true
	},
	nave: {
		id: "nave",
		name: "Laje negra",
		moveCost: 1,
		def: 0,
		atk: 0,
		passable: true
	},
	barricade: {
		id: "barricade",
		name: "Barricada",
		moveCost: 99,
		def: 0,
		atk: 0,
		passable: false,
		blocksShot: true
	},
	highwood: {
		id: "highwood",
		name: "Tronco morto",
		moveCost: 2,
		def: 1,
		atk: 2,
		passable: true,
		height: 1
	},
	highruin: {
		id: "highruin",
		name: "Casa abandonada",
		moveCost: 2,
		def: 1,
		atk: 2,
		passable: true,
		height: 1
	},
	chest: {
		id: "chest",
		name: "Baú trancado",
		moveCost: 99,
		def: 0,
		atk: 0,
		passable: false
	},
	door: {
		id: "door",
		name: "Porta trancada",
		moveCost: 99,
		def: 0,
		atk: 0,
		passable: false,
		blocksShot: true
	},
	deadtree: {
		id: "deadtree",
		name: "Tronco caído",
		moveCost: 2,
		def: 1,
		atk: 2,
		passable: true,
		height: 1
	},
	/** Pure void — a building block for closed/indoor maps: apaga o terreno e nem se atravessa, nem se vê através. */
	void: {
		id: "void",
		name: "Vazio",
		moveCost: 99,
		def: 0,
		atk: 0,
		passable: false,
		blocksShot: true
	}
};
/** Tipo 3 — a normal side-by-side pair plus one hex behind, on the creature's back (e.g. o Cão de guerra). */
var FOOTPRINT_TYPE_3 = [
	{
		dx: 0,
		dy: 0
	},
	{
		dx: 1,
		dy: 0
	},
	{
		dx: 0,
		dy: -1
	}
];
/** Tipo 8 — a 2-wide/3-tall block plus one hex above the head and one at the arms row (Troll, Asherah).
* Exported so the renderer can key its "big creature" draw-size correction off the footprint
* shape itself (reference equality) instead of a hardcoded classId, the same size correction
* applying to every Type 8 creature by default rather than needing a one-off per class. */
var FOOTPRINT_TYPE_8 = [
	{
		dx: 0,
		dy: 0
	},
	{
		dx: 1,
		dy: 0
	},
	{
		dx: -1,
		dy: -1
	},
	{
		dx: 0,
		dy: -1
	},
	{
		dx: 1,
		dy: -1
	},
	{
		dx: 0,
		dy: -2
	},
	{
		dx: 1,
		dy: -2
	},
	{
		dx: 0,
		dy: -3
	}
];
var DECO_PAIR = [{
	dx: 0,
	dy: 0
}, {
	dx: 1,
	dy: 0
}];
var DECO_TRIO = [
	{
		dx: 0,
		dy: 0
	},
	{
		dx: 1,
		dy: 0
	},
	{
		dx: 0,
		dy: -1
	}
];
var DECORATIONS = {
	"mountain-ridge": {
		id: "mountain-ridge",
		name: "Cordilheira",
		footprint: DECO_PAIR
	},
	"spike-rocks": {
		id: "spike-rocks",
		name: "Agulhas de Pedra",
		footprint: DECO_PAIR
	},
	"dead-tree-large": {
		id: "dead-tree-large",
		name: "Árvore Morta Grande",
		footprint: DECO_PAIR
	},
	"dense-forest": {
		id: "dense-forest",
		name: "Bosque Denso",
		footprint: DECO_PAIR
	},
	"broken-cliff-wall": {
		id: "broken-cliff-wall",
		name: "Muralha Rochosa Partida",
		footprint: DECO_PAIR
	},
	"boulder-cluster": {
		id: "boulder-cluster",
		name: "Amontoado de Pedras",
		footprint: DECO_TRIO
	},
	"ruined-cottage": {
		id: "ruined-cottage",
		name: "Casa em Ruínas",
		footprint: DECO_PAIR
	},
	"broken-tower": {
		id: "broken-tower",
		name: "Torre Derrubada",
		footprint: DECO_PAIR
	},
	"ruined-chapel": {
		id: "ruined-chapel",
		name: "Capela em Ruínas",
		footprint: DECO_PAIR
	},
	"abandoned-mansion": {
		id: "abandoned-mansion",
		name: "Mansão Abandonada",
		footprint: DECO_TRIO
	},
	"stone-bridge": {
		id: "stone-bridge",
		name: "Ponte de Pedra",
		footprint: DECO_PAIR
	},
	"broken-wall-segment": {
		id: "broken-wall-segment",
		name: "Muralha em Ruínas",
		footprint: DECO_PAIR
	},
	gatehouse: {
		id: "gatehouse",
		name: "Portão Fortificado",
		footprint: DECO_PAIR
	},
	watchtower: {
		id: "watchtower",
		name: "Torre de Vigia",
		footprint: DECO_PAIR
	},
	"ancient-shrine": {
		id: "ancient-shrine",
		name: "Santuário Antigo",
		footprint: DECO_PAIR
	}
};
function decorationImage(id) {
	return `/game/decorations/${id}.png`;
}
/** Every hex a placed decoration's footprint covers — impassable and blocks line of
* sight, independent of the terrain tile underneath (per user: "half covered is not a
* walking path"). */
function decorationCells(placements) {
	const out = /* @__PURE__ */ new Set();
	for (const p of placements) {
		const def = DECORATIONS[p.id];
		if (!def) continue;
		for (const { dx, dy } of def.footprint) out.add(`${p.x + dx},${p.y + dy}`);
	}
	return out;
}
var CLASSES = {
	swordsman: {
		id: "swordsman",
		name: "Guerreiro",
		role: "Linha de frente",
		hp: 34,
		atk: 9,
		mag: 0,
		def: 6,
		res: 3,
		mov: 5,
		minRange: 1,
		maxRange: 1,
		sprite: "kael",
		size: 1,
		init: 7
	},
	archer: {
		id: "archer",
		name: "Arqueira",
		role: "Alcance",
		hp: 24,
		atk: 8,
		mag: 0,
		def: 3,
		res: 4,
		mov: 6,
		minRange: 2,
		maxRange: 3,
		sprite: "nira",
		size: 1,
		init: 3
	},
	mage: {
		id: "mage",
		name: "Mago Negro",
		role: "Magia",
		hp: 22,
		atk: 3,
		mag: 10,
		def: 2,
		res: 6,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "voss",
		size: 1,
		init: 5
	},
	healer: {
		id: "healer",
		name: "Curandeiro",
		role: "Cura",
		hp: 26,
		atk: 4,
		mag: 8,
		def: 3,
		res: 6,
		mov: 5,
		minRange: 1,
		maxRange: 1,
		sprite: "salazar",
		size: 1,
		init: 8
	},
	soldier: {
		id: "soldier",
		name: "Soldado",
		role: "Milícia",
		hp: 31,
		atk: 8,
		mag: 0,
		def: 4,
		res: 2,
		mov: 3,
		minRange: 1,
		maxRange: 1,
		sprite: "soldier",
		size: 1,
		init: 2
	},
	pikeman: {
		id: "pikeman",
		name: "Piqueiro",
		role: "Pique",
		hp: 33,
		atk: 8,
		mag: 0,
		def: 5,
		res: 2,
		mov: 3,
		minRange: 1,
		maxRange: 2,
		sprite: "pikeman",
		size: 1,
		init: 3
	},
	brigand: {
		id: "brigand",
		name: "Besteiro",
		role: "Emboscada",
		hp: 25,
		atk: 7,
		mag: 0,
		def: 2,
		res: 3,
		mov: 3,
		minRange: 2,
		maxRange: 3,
		sprite: "brigand",
		size: 1,
		init: 4
	},
	captain: {
		id: "captain",
		name: "Capitão",
		role: "Comando",
		hp: 60,
		atk: 11,
		mag: 0,
		def: 7,
		res: 4,
		mov: 4,
		minRange: 1,
		maxRange: 1,
		sprite: "captain",
		size: 1,
		init: 1
	},
	wardog: {
		id: "wardog",
		name: "Cão de guerra",
		role: "Profano",
		hp: 40,
		atk: 9,
		mag: 0,
		def: 3,
		res: 1,
		mov: 5,
		minRange: 1,
		maxRange: 1,
		sprite: "wardog",
		size: 2,
		footprintOffsets: FOOTPRINT_TYPE_3,
		init: 6
	},
	cultist: {
		id: "cultist",
		name: "Feiticeiro",
		role: "Rito",
		hp: 23,
		atk: 2,
		mag: 9,
		def: 2,
		res: 5,
		mov: 3,
		minRange: 1,
		maxRange: 2,
		sprite: "sorcerer",
		size: 1,
		init: 5
	},
	horror: {
		id: "horror",
		name: "Asherah",
		role: "Pesadelo",
		hp: 120,
		atk: 13,
		mag: 0,
		def: 6,
		res: 4,
		mov: 2,
		minRange: 1,
		maxRange: 1,
		sprite: "horror",
		size: 4,
		footprintOffsets: FOOTPRINT_TYPE_8,
		init: 7
	},
	troll: {
		id: "troll",
		name: "Troll da caverna",
		role: "Bruto",
		hp: 88,
		atk: 12,
		mag: 0,
		def: 9,
		res: 3,
		mov: 2,
		minRange: 1,
		maxRange: 1,
		sprite: "troll",
		size: 4,
		footprintOffsets: FOOTPRINT_TYPE_8,
		init: 8
	},
	assassin: {
		id: "assassin",
		name: "Assassino",
		role: "Emboscada",
		hp: 20,
		atk: 9,
		mag: 0,
		def: 2,
		res: 3,
		mov: 6,
		minRange: 1,
		maxRange: 1,
		sprite: "brigand",
		size: 1,
		init: 1
	},
	rogue: {
		id: "rogue",
		name: "Ladino",
		role: "Infiltração",
		hp: 22,
		atk: 7,
		mag: 0,
		def: 2,
		res: 3,
		mov: 6,
		minRange: 1,
		maxRange: 2,
		sprite: "brigand",
		size: 1,
		init: 2
	},
	lancer: {
		id: "lancer",
		name: "Lanceiro",
		role: "Pique",
		hp: 26,
		atk: 8,
		mag: 0,
		def: 4,
		res: 3,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "aldric",
		size: 1,
		init: 4
	},
	conjurer: {
		id: "conjurer",
		name: "Conjurador",
		role: "Suporte arcano",
		hp: 18,
		atk: 3,
		mag: 10,
		def: 2,
		res: 9,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "malrec",
		size: 1,
		init: 6
	},
	familiar: {
		id: "familiar",
		name: "Familiar",
		role: "Invocação",
		hp: 10,
		atk: 3,
		mag: 3,
		def: 1,
		res: 1,
		mov: 5,
		minRange: 1,
		maxRange: 1,
		sprite: "familiar",
		size: 1,
		init: 5
	},
	paladin: {
		id: "paladin",
		name: "Paladino",
		role: "Guardião",
		hp: 30,
		atk: 6,
		mag: 4,
		def: 7,
		res: 5,
		mov: 5,
		minRange: 1,
		maxRange: 1,
		sprite: "captain",
		size: 1,
		init: 9
	},
	heavyKnight: {
		id: "heavyKnight",
		name: "Cavaleiro Pesado",
		role: "Muralha",
		hp: 32,
		atk: 7,
		mag: 0,
		def: 9,
		res: 3,
		mov: 4,
		minRange: 1,
		maxRange: 1,
		sprite: "troll",
		size: 1,
		init: 10
	},
	elementalist: {
		id: "elementalist",
		name: "Elementalista",
		role: "Promovido — Mago Negro",
		hp: 22,
		atk: 3,
		mag: 10,
		def: 2,
		res: 6,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "voss",
		size: 1,
		init: 5
	},
	warlock: {
		id: "warlock",
		name: "Bruxo",
		role: "Promovido — Mago Negro",
		hp: 22,
		atk: 3,
		mag: 10,
		def: 2,
		res: 6,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "voss",
		size: 1,
		init: 5
	},
	sorcerer: {
		id: "sorcerer",
		name: "Arcanista",
		role: "Promovido — Conjurador",
		hp: 18,
		atk: 3,
		mag: 10,
		def: 2,
		res: 9,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "sorcerer",
		size: 1,
		init: 6
	},
	necromancer: {
		id: "necromancer",
		name: "Necromante",
		role: "Promovido — Conjurador",
		hp: 18,
		atk: 3,
		mag: 10,
		def: 2,
		res: 9,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "sorcerer",
		size: 1,
		init: 6
	},
	cleric: {
		id: "cleric",
		name: "Clérigo",
		role: "Promovido — Curandeiro",
		hp: 26,
		atk: 4,
		mag: 8,
		def: 3,
		res: 6,
		mov: 5,
		minRange: 1,
		maxRange: 1,
		sprite: "salazar",
		size: 1,
		init: 8
	},
	bishop: {
		id: "bishop",
		name: "Bispo",
		role: "Promovido — Curandeiro",
		hp: 26,
		atk: 4,
		mag: 8,
		def: 3,
		res: 6,
		mov: 5,
		minRange: 1,
		maxRange: 1,
		sprite: "salazar",
		size: 1,
		init: 8
	},
	ranger: {
		id: "ranger",
		name: "Patrulheiro",
		role: "Promovido — Arqueira",
		hp: 24,
		atk: 8,
		mag: 0,
		def: 3,
		res: 4,
		mov: 6,
		minRange: 2,
		maxRange: 3,
		sprite: "nira",
		size: 1,
		init: 3
	},
	sentinel: {
		id: "sentinel",
		name: "Sentinela",
		role: "Promovido — Lanceiro",
		hp: 26,
		atk: 8,
		mag: 0,
		def: 4,
		res: 3,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "pikeman",
		size: 1,
		init: 4
	},
	templar: {
		id: "templar",
		name: "Templário",
		role: "Promovido — Lanceiro",
		hp: 26,
		atk: 8,
		mag: 0,
		def: 4,
		res: 3,
		mov: 5,
		minRange: 1,
		maxRange: 2,
		sprite: "pikeman",
		size: 1,
		init: 4
	}
};
var HERO_NAMES = [
	"Kael",
	"Neera",
	"Voss",
	"Salazar"
];
var GROWTH = {
	swordsman: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	},
	archer: {
		hp: 3,
		atk: 2,
		mag: 0,
		def: 1,
		res: 1
	},
	mage: {
		hp: 3,
		atk: 0,
		mag: 3,
		def: 1,
		res: 3
	},
	healer: {
		hp: 3,
		atk: 0,
		mag: 1,
		def: 2,
		res: 2
	},
	soldier: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	},
	pikeman: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	},
	brigand: {
		hp: 3,
		atk: 2,
		mag: 0,
		def: 1,
		res: 1
	},
	captain: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	},
	wardog: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	},
	cultist: {
		hp: 3,
		atk: 0,
		mag: 2,
		def: 1,
		res: 2
	},
	horror: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 2
	},
	troll: {
		hp: 5,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	},
	assassin: {
		hp: 3,
		atk: 3,
		mag: 0,
		def: 1,
		res: 1
	},
	rogue: {
		hp: 3,
		atk: 2,
		mag: 0,
		def: 1,
		res: 1
	},
	lancer: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	},
	conjurer: {
		hp: 2,
		atk: 0,
		mag: 3,
		def: 1,
		res: 4
	},
	familiar: {
		hp: 0,
		atk: 0,
		mag: 0,
		def: 0,
		res: 0
	},
	paladin: {
		hp: 5,
		atk: 1,
		mag: 1,
		def: 3,
		res: 2
	},
	heavyKnight: {
		hp: 5,
		atk: 1,
		mag: 0,
		def: 3,
		res: 1
	},
	elementalist: {
		hp: 3,
		atk: 0,
		mag: 3,
		def: 1,
		res: 3
	},
	warlock: {
		hp: 3,
		atk: 0,
		mag: 3,
		def: 1,
		res: 3
	},
	sorcerer: {
		hp: 2,
		atk: 0,
		mag: 3,
		def: 1,
		res: 4
	},
	necromancer: {
		hp: 2,
		atk: 0,
		mag: 3,
		def: 1,
		res: 4
	},
	cleric: {
		hp: 3,
		atk: 0,
		mag: 1,
		def: 2,
		res: 2
	},
	bishop: {
		hp: 3,
		atk: 0,
		mag: 1,
		def: 2,
		res: 2
	},
	ranger: {
		hp: 3,
		atk: 2,
		mag: 0,
		def: 1,
		res: 1
	},
	sentinel: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	},
	templar: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 2,
		res: 1
	}
};
/** Level gap at which XP falls all the way to its floor (see expForHit) — beyond this,
* still worth something, just never less. */
var EXP_FALLOFF_LEVELS = 10;
/**
* XP granted for a single qualifying action (a damaging hit, a heal, a potion — anything
* that calls gainExp). Fighting your own level or below always pays the full
* BASE_EXP_PER_HIT; fighting below your weight class tapers that off linearly down to a
* floor of 1 once the level gap reaches EXP_FALLOFF_LEVELS — e.g. a level 15 attacking a
* level 5 (a 10-level gap) gains 1, a level 1 attacking a level 1 gains the full 20. Never
* drops to 0: a hit always earns something, however outmatched the target.
*/
function expForHit(attackerLevel, defenderLevel) {
	const gap = Math.max(0, attackerLevel - defenderLevel);
	if (gap >= EXP_FALLOFF_LEVELS) return 1;
	const t = gap / EXP_FALLOFF_LEVELS;
	return Math.round(20 - 19 * t);
}
function statsFor(classId, level) {
	const cls = CLASSES[classId];
	const g = GROWTH[classId];
	const n = Math.max(0, Math.min(30, level) - 1);
	return {
		hp: cls.hp + g.hp * n,
		atk: cls.atk + g.atk * n,
		mag: cls.mag + g.mag * n,
		def: cls.def + g.def * n,
		res: cls.res + g.res * n,
		mov: cls.mov,
		minRange: cls.minRange,
		maxRange: cls.maxRange,
		level: Math.max(1, Math.min(30, level))
	};
}
function rangeLabel(min, max) {
	return min === max ? `${min}` : `${min}–${max}`;
}
function sheetLine(u) {
	return `AT ${u.atk} · MAG ${u.mag} · DF ${u.def} · RES ${u.res} · Mov ${u.mov} · Alc ${rangeLabel(u.minRange, u.maxRange)}`;
}
var POTIONS$1 = {
	mid: {
		id: "mid",
		name: "Poção Média",
		dice: 2,
		faces: 8,
		bonus: 4,
		effect: "heal"
	},
	weak: {
		id: "weak",
		name: "Poção Fraca",
		dice: 1,
		faces: 8,
		bonus: 2,
		effect: "heal"
	},
	potent: {
		id: "potent",
		name: "Poção De Cura Potente",
		dice: 2,
		faces: 12,
		bonus: 6,
		effect: "heal"
	},
	disease: {
		id: "disease",
		name: "Poção De Curar Doenças",
		dice: 0,
		faces: 0,
		bonus: 0,
		effect: "disease"
	},
	manaSmall: {
		id: "manaSmall",
		name: "Poção De Mana Pequena",
		dice: 0,
		faces: 0,
		bonus: 0,
		effect: "mana",
		manaRestore: 1
	},
	manaMid: {
		id: "manaMid",
		name: "Poção De Mana Média",
		dice: 0,
		faces: 0,
		bonus: 0,
		effect: "mana",
		manaRestore: 2
	},
	manaLarge: {
		id: "manaLarge",
		name: "Poção De Mana Grande",
		dice: 0,
		faces: 0,
		bonus: 0,
		effect: "mana",
		manaRestore: 3
	}
};
var STARTING_BAG = {
	mid: 2,
	weak: 2,
	potent: 1,
	disease: 1,
	manaSmall: 1,
	manaMid: 0,
	manaLarge: 0,
	lockpick: 3
};
var EMPTY_BAG = {
	mid: 0,
	weak: 0,
	potent: 0,
	disease: 0,
	manaSmall: 0,
	manaMid: 0,
	manaLarge: 0,
	lockpick: 0
};
/** Rarity weights for loot rolls: weaker/cheaper potions and gear come up far more often
* than the strongest ones — "the strongest is harder to come out". */
var POTION_LOOT_WEIGHT = {
	weak: 50,
	mid: 30,
	potent: 12,
	disease: 8,
	manaSmall: 25,
	manaMid: 15,
	manaLarge: 6
};
function weightedPick(rng, entries) {
	const total = entries.reduce((n, [, w]) => n + w, 0);
	let roll = rng() * total;
	for (const [item, w] of entries) {
		roll -= w;
		if (roll <= 0) return item;
	}
	return entries[entries.length - 1][0];
}
function weightedPotionPick(rng) {
	return weightedPick(rng, Object.entries(POTION_LOOT_WEIGHT));
}
/** Loot-table weight for a priced item — inversely proportional to price (sqrt-tempered so
* top-tier gear is meaningfully rarer without being nearly unobtainable from chest luck). */
function priceWeight(price) {
	return 1 / Math.sqrt(Math.max(1, price));
}
/** Lowest/highest price across every lootable item (every weapon, every offHand
* EquipmentDef) — the endpoints of the 1-MAX_LEVEL power-level scale below. Recomputed
* from whatever WEAPONS/EQUIPMENT currently contain rather than hardcoded, so adding a new
* weapon or piece of gear (with a price, same as every existing one) automatically finds
* its place on the scale — nothing else to update by hand. */
function lootPriceRange() {
	const prices = [...Object.values(WEAPONS).map((w) => w.price), ...Object.values(EQUIPMENT).map((e) => e.price ?? 60)];
	return {
		min: Math.min(...prices),
		max: Math.max(...prices)
	};
}
/** Maps any lootable item's price onto the same 1-MAX_LEVEL scale player levels run —
* log-scaled, since price itself climbs roughly exponentially from rung to rung (see
* WEAPON_RUNGS). A level-1 dagger and a level-30 endgame greataxe read the same way loot
* power reads everywhere else in the game. */
function gearPowerLevel(price) {
	const { min, max } = lootPriceRange();
	if (max <= min) return 1;
	const t = Math.log(Math.max(min, price) / min) / Math.log(max / min);
	return Math.max(1, Math.min(30, Math.round(1 + t * 29)));
}
/** How strong loot on a mission is allowed to roll, on that same 1-MAX_LEVEL scale —
* matched to that mission's own enemies (enemyLevelFor), scaled up from its 1-4 range to
* the full MAX_LEVEL so loot keeps pace with the whole campaign, not just its first
* quarter. An early mission's enemies are weak, so its loot table only reaches low power
* levels; missions near the end open up the full range. */
function missionGearLevel(missionIndex) {
	return Math.max(1, Math.min(30, Math.round(enemyLevelFor(missionIndex) / 4 * 30)));
}
/** Weighted random pick across every weapon and every offHand EquipmentDef, rarer as price
* climbs, capped to maxLevel on the gearPowerLevel scale (see missionGearLevel) and — for
* weapons — excluding anything in ownedWeaponIds so a drop never announces a weapon the
* recipient already has. Used for chest loot and enemy kill drops alike. */
function weightedLootPick(rng, maxLevel = 30, ownedWeaponIds = /* @__PURE__ */ new Set()) {
	const build = (level) => [...Object.values(WEAPONS).filter((w) => gearPowerLevel(w.price) <= level && !ownedWeaponIds.has(w.id)).map((w) => [{
		kind: "weapon",
		id: w.id
	}, priceWeight(w.price)]), ...Object.values(EQUIPMENT).filter((e) => gearPowerLevel(e.price ?? 60) <= level).map((e) => [{
		kind: "equipment",
		id: e.id
	}, priceWeight(e.price ?? 60)])];
	const entries = build(maxLevel);
	return weightedPick(rng, entries.length > 0 ? entries : build(30));
}
/** Weighted random pick across a given set of weapon ids, capped to maxLevel on the
* gearPowerLevel scale — for drop sources that only ever granted a weapon before (e.g.
* enemy kill drops), optionally restricted to a pool (e.g. "not already owned"). Defaults
* to every weapon in the game. */
function weightedWeaponPick(rng, ids = Object.keys(WEAPONS), maxLevel = 30) {
	const capped = ids.filter((id) => gearPowerLevel(WEAPONS[id]?.price ?? 100) <= maxLevel);
	return weightedPick(rng, (capped.length > 0 ? capped : ids).map((id) => [id, priceWeight(WEAPONS[id]?.price ?? 100)]));
}
/** How many of each potion a single hero can carry at once — a "goes to whoever has room
* next" chest-loot overflow (see BattleEngine.useLockpick) keeps a full-up party from
* losing drops outright. */
var POTION_CARRY_MAX = {
	weak: 5,
	mid: 5,
	potent: 5,
	disease: 4,
	manaSmall: 2,
	manaMid: 2,
	manaLarge: 2
};
var POTION_PRICE = {
	weak: 4,
	mid: 8,
	potent: 14,
	disease: 10,
	manaSmall: 5,
	manaMid: 10,
	manaLarge: 18
};
/** Chest-loot odds (BattleEngine.useLockpick): Ember gain is emberBase + 1..emberDice, and
* gearChance is an independent roll for one extra weapon/equipment drop on top of the
* guaranteed potion. The "better" numbers are for a chest listed in Mission.betterChests
* (currently unused by any mission, kept for a future locked-loot-room) — same pool and
* price range as a normal chest, just better odds. */
var CHEST_LOOT = {
	emberBase: 3,
	emberDice: 6,
	gearChance: .4,
	betterEmberBase: 5,
	betterEmberDice: 8,
	betterGearChance: .55
};
/** Chance a regular (non-boss) enemy drops a weapon on death — see BattleEngine.markDead.
* Named unique bosses (Spawn.guaranteedDrop) skip this roll entirely. */
var KILL_DROP_CHANCE = .01;
var WEAPON_RUNGS = [
	{
		dice: 1,
		faces: 4,
		bonus: 0,
		price: 40
	},
	{
		dice: 1,
		faces: 6,
		bonus: 0,
		price: 90
	},
	{
		dice: 1,
		faces: 8,
		bonus: 0,
		price: 180
	},
	{
		dice: 1,
		faces: 10,
		bonus: 0,
		price: 320
	},
	{
		dice: 1,
		faces: 12,
		bonus: 0,
		price: 520
	},
	{
		dice: 2,
		faces: 6,
		bonus: 0,
		price: 800
	},
	{
		dice: 2,
		faces: 8,
		bonus: 0,
		price: 1200
	},
	{
		dice: 2,
		faces: 10,
		bonus: 0,
		price: 1800
	},
	{
		dice: 2,
		faces: 12,
		bonus: 0,
		price: 2600
	}
];
var MELEE = {
	minRange: 1,
	maxRange: 1
};
var REACH = {
	minRange: 1,
	maxRange: 2
};
var RANGED = {
	minRange: 2,
	maxRange: 3,
	ranged: true
};
function wpn(id, name, usableBy, rung, range = MELEE, bonusClass) {
	const r = WEAPON_RUNGS[rung - 1];
	return {
		id,
		name,
		usableBy,
		dice: r.dice,
		faces: r.faces,
		bonus: r.bonus,
		price: r.price,
		minRange: range.minRange,
		maxRange: range.maxRange,
		ranged: range.ranged,
		bonusClass
	};
}
var ARCANE_MAGE_TRIO = [
	"mage",
	"elementalist",
	"warlock"
];
var ARCANE_CONJURER_TRIO = [
	"conjurer",
	"sorcerer",
	"necromancer"
];
var ARCANE_ALL = [...ARCANE_MAGE_TRIO, ...ARCANE_CONJURER_TRIO];
var HEAL_TRIO = [
	"healer",
	"bishop",
	"cleric"
];
var WARRIOR_TRIO = [
	"swordsman",
	"paladin",
	"heavyKnight"
];
var ARCHER_TRIO = [
	"archer",
	"ranger",
	"assassin"
];
var LANCER_TRIO = [
	"lancer",
	"sentinel",
	"templar"
];
var WEAPONS = {
	"cajado-de-osso": wpn("cajado-de-osso", "Cajado de Osso", ARCANE_ALL, 1, REACH, "mage"),
	"cajado-abissal": wpn("cajado-abissal", "Cajado Abissal", ARCANE_ALL, 2, REACH, "warlock"),
	"cajado-de-ebano": wpn("cajado-de-ebano", "Cajado de Ébano", ARCANE_ALL, 3, REACH, "mage"),
	"cajado-igneo": wpn("cajado-igneo", "Cajado Ígneo", ARCANE_ALL, 4, REACH, "elementalist"),
	"bastao-do-pacto": wpn("bastao-do-pacto", "Bastão do Pacto", ARCANE_ALL, 5, REACH, "warlock"),
	"cajado-tempestuoso": wpn("cajado-tempestuoso", "Cajado Tempestuoso", ARCANE_ALL, 6, REACH, "elementalist"),
	"cetro-da-corrupcao": wpn("cetro-da-corrupcao", "Cetro da Corrupção", ARCANE_ALL, 7, REACH, "warlock"),
	"cajado-terrano": wpn("cajado-terrano", "Cajado Terrano", ARCANE_ALL, 8, REACH, "elementalist"),
	"bastao-do-vacuo": wpn("bastao-do-vacuo", "Bastão do Vácuo", ARCANE_ALL, 9, REACH, "mage"),
	"cajado-arcano": wpn("cajado-arcano", "Cajado Arcano", ARCANE_ALL, 1, REACH, "sorcerer"),
	"cajado-etereo": wpn("cajado-etereo", "Cajado Etéreo", ARCANE_ALL, 2, REACH, "conjurer"),
	"cajado-da-luz-sombria": wpn("cajado-da-luz-sombria", "Cajado da Luz Sombria", ARCANE_ALL, 3, REACH, "conjurer"),
	"cajado-da-chama-purpura": wpn("cajado-da-chama-purpura", "Cajado da Chama Púrpura", ARCANE_ALL, 4, REACH, "sorcerer"),
	"cajado-funebre": wpn("cajado-funebre", "Cajado Fúnebre", ARCANE_ALL, 5, REACH, "necromancer"),
	"bastao-do-caos": wpn("bastao-do-caos", "Bastão do Caos", ARCANE_ALL, 6, REACH, "conjurer"),
	"bastao-dos-restos": wpn("bastao-dos-restos", "Bastão dos Restos", ARCANE_ALL, 7, REACH, "necromancer"),
	"cajado-do-arcano-puro": wpn("cajado-do-arcano-puro", "Cajado do Arcano Puro", ARCANE_ALL, 8, REACH, "sorcerer"),
	"cajado-da-praga": wpn("cajado-da-praga", "Cajado da Praga", ARCANE_ALL, 9, REACH, "necromancer"),
	"cajado-da-renovacao": wpn("cajado-da-renovacao", "Cajado da Renovação", HEAL_TRIO, 1),
	"cajado-da-esperanca": wpn("cajado-da-esperanca", "Cajado da Esperança", HEAL_TRIO, 2),
	"cajado-da-graca": wpn("cajado-da-graca", "Cajado da Graça", HEAL_TRIO, 3),
	"cetro-da-luz": wpn("cetro-da-luz", "Cetro da Luz", HEAL_TRIO, 4),
	"bastao-da-purificacao": wpn("bastao-da-purificacao", "Bastão da Purificação", HEAL_TRIO, 5),
	"cajado-do-bispo": wpn("cajado-do-bispo", "Cajado do Bispo", HEAL_TRIO, 6),
	"cajado-da-comunhao": wpn("cajado-da-comunhao", "Cajado da Comunhão", HEAL_TRIO, 7),
	"cajado-da-fe": wpn("cajado-da-fe", "Cajado da Fé", HEAL_TRIO, 8),
	"cajado-da-justica": wpn("cajado-da-justica", "Cajado da Justiça", HEAL_TRIO, 9),
	"espada-larga": wpn("espada-larga", "Espada Larga", WARRIOR_TRIO, 1),
	"espadao": wpn("espadao", "Espadão", WARRIOR_TRIO, 2),
	"machado-de-guerra": wpn("machado-de-guerra", "Machado de Guerra", WARRIOR_TRIO, 3),
	"espada-da-lealdade": wpn("espada-da-lealdade", "Espada da Lealdade", WARRIOR_TRIO, 4),
	"espadao-pesado": wpn("espadao-pesado", "Espadão Pesado", WARRIOR_TRIO, 5),
	"lamina-sagrada": wpn("lamina-sagrada", "Lâmina Sagrada", WARRIOR_TRIO, 6),
	"martelo-de-guerra": wpn("martelo-de-guerra", "Martelo de Guerra", [...WARRIOR_TRIO, "cleric"], 7),
	"martelo-da-justica": wpn("martelo-da-justica", "Martelo da Justiça", [...WARRIOR_TRIO, "cleric"], 8),
	"machado-barbaro": wpn("machado-barbaro", "Machado Bárbaro", WARRIOR_TRIO, 9),
	"arco-composto": wpn("arco-composto", "Arco Composto", ARCHER_TRIO, 1, RANGED),
	"arco-longo": wpn("arco-longo", "Arco Longo", ARCHER_TRIO, 2, RANGED),
	"arco-elfico": wpn("arco-elfico", "Arco Élfico", ARCHER_TRIO, 3, RANGED),
	"arco-do-cacador": wpn("arco-do-cacador", "Arco do Caçador", ARCHER_TRIO, 4, RANGED),
	"besta-leve": wpn("besta-leve", "Besta Leve", ARCHER_TRIO, 5, {
		minRange: 1,
		maxRange: 3,
		ranged: true
	}),
	"punhal-curvo": wpn("punhal-curvo", "Punhal Curvo", ARCHER_TRIO, 6),
	"katar": wpn("katar", "Katar", ARCHER_TRIO, 7),
	"adaga-sombria": wpn("adaga-sombria", "Adaga Sombria", ARCHER_TRIO, 8),
	"adaga-de-veneno": wpn("adaga-de-veneno", "Adaga de Veneno", ARCHER_TRIO, 9),
	"lanca": wpn("lanca", "Lança", LANCER_TRIO, 1, REACH),
	"partisan": wpn("partisan", "Partisan", LANCER_TRIO, 2, REACH),
	"guisarme": wpn("guisarme", "Guisarme", LANCER_TRIO, 3, REACH),
	"lanca-de-defesa": wpn("lanca-de-defesa", "Lança de Defesa", LANCER_TRIO, 4, REACH),
	"espada-e-escudo": wpn("espada-e-escudo", "Espada e Escudo", LANCER_TRIO, 5),
	"maca-e-escudo-sentinel": wpn("maca-e-escudo-sentinel", "Maça e Escudo", LANCER_TRIO, 6),
	"maca-e-escudo-templar": wpn("maca-e-escudo-templar", "Maça e Escudo", LANCER_TRIO, 7),
	"lanca-e-escudo-sentinel": wpn("lanca-e-escudo-sentinel", "Lança e Escudo", LANCER_TRIO, 8, REACH),
	"lanca-e-escudo-templar": wpn("lanca-e-escudo-templar", "Lança e Escudo", LANCER_TRIO, 9, REACH)
};
function weaponIcon(id) {
	return `/game/icons/weapons/${id}.png`;
}
function weaponsForClass(classId) {
	return Object.values(WEAPONS).filter((w) => w.usableBy.includes(classId));
}
function weaponPower(w) {
	return w.dice * (w.faces + 1) / 2 + w.bonus;
}
/** Cheapest/weakest weapon a class can use — auto-equipped for free until the player picks another. */
function starterWeaponFor(classId) {
	const list = weaponsForClass(classId);
	if (list.length === 0) return null;
	return list.reduce((a, b) => weaponPower(a) <= weaponPower(b) ? a : b).id;
}
function weaponRoll(weaponId, enh, rng) {
	if (!weaponId) return 0;
	const w = WEAPONS[weaponId];
	if (!w) return 0;
	return rollDice(w.dice, w.faces, w.bonus, rng) + enh;
}
function weaponPreview(weaponId, enh) {
	if (!weaponId) return 0;
	const w = WEAPONS[weaponId];
	if (!w) return 0;
	return Math.round(weaponPower(w) + enh);
}
function weaponDiceLabel(weaponId) {
	const w = WEAPONS[weaponId];
	return w ? diceFormula(w.dice, w.faces, w.bonus) : "";
}
function weaponRangeLabel(weaponId) {
	const w = WEAPONS[weaponId];
	return w ? `Alc ${rangeLabel(w.minRange, w.maxRange)}` : "";
}
/** Ember cost of the Ferreiro's enhancement ranks +1..+5 (index 0 = cost of the first rank). */
var WEAPON_ENH_COST = [
	25,
	50,
	80,
	150,
	300
];
var WEAPON_MAX_ENH = WEAPON_ENH_COST.length;
/** Sell price: half of the weapon's base price plus half of every enhancement Ember sunk into it. */
function weaponSellValue(weaponId, enh) {
	const w = WEAPONS[weaponId];
	if (!w) return 0;
	const enhSpent = WEAPON_ENH_COST.slice(0, enh).reduce((a, b) => a + b, 0);
	return Math.floor((w.price + enhSpent) / 2);
}
function weaponEnhCost(nextRank) {
	return WEAPON_ENH_COST[nextRank - 1] ?? Infinity;
}
var EQUIPMENT_SLOTS = [
	{
		id: "head",
		label: "Cabeça"
	},
	{
		id: "neck",
		label: "Pescoço"
	},
	{
		id: "shoulders",
		label: "Ombros"
	},
	{
		id: "back",
		label: "Costas"
	},
	{
		id: "chest",
		label: "Peito"
	},
	{
		id: "hands",
		label: "Mãos"
	},
	{
		id: "waist",
		label: "Cintura"
	},
	{
		id: "legs",
		label: "Pernas"
	},
	{
		id: "feet",
		label: "Pés"
	},
	{
		id: "ring1",
		label: "Anel"
	},
	{
		id: "ring2",
		label: "Anel"
	},
	{
		id: "offHand",
		label: "Mão Secundária"
	}
];
var EQUIPMENT = {
	broquel: {
		id: "broquel",
		name: "Broquel",
		slot: "offHand",
		kind: "shield",
		usableBy: [
			"swordsman",
			"heavyKnight",
			"paladin"
		],
		def: 1,
		dmgMul: .5,
		price: 60
	},
	"shield-buckler": {
		id: "shield-buckler",
		name: "Broquel de Aço",
		slot: "offHand",
		kind: "shield",
		usableBy: [
			"swordsman",
			"heavyKnight",
			"paladin"
		],
		def: 1,
		dmgMul: .6,
		price: 90
	},
	"shield-round": {
		id: "shield-round",
		name: "Escudo Redondo",
		slot: "offHand",
		kind: "shield",
		usableBy: [
			"swordsman",
			"heavyKnight",
			"paladin"
		],
		def: 2,
		dmgMul: .7,
		price: 150
	},
	"shield-heater": {
		id: "shield-heater",
		name: "Escudo em Coração",
		slot: "offHand",
		kind: "shield",
		usableBy: [
			"swordsman",
			"heavyKnight",
			"paladin"
		],
		def: 2,
		dmgMul: .8,
		price: 220
	},
	"shield-kite": {
		id: "shield-kite",
		name: "Escudo em Pipa",
		slot: "offHand",
		kind: "shield",
		usableBy: [
			"swordsman",
			"heavyKnight",
			"paladin"
		],
		def: 3,
		dmgMul: .9,
		price: 320
	},
	"shield-tower": {
		id: "shield-tower",
		name: "Escudo Torre",
		slot: "offHand",
		kind: "shield",
		usableBy: [
			"swordsman",
			"heavyKnight",
			"paladin"
		],
		def: 4,
		dmgMul: 1,
		price: 450
	},
	"cross-kite-shield": {
		id: "cross-kite-shield",
		name: "Escudo em Cunha com Cruz",
		slot: "offHand",
		kind: "shield",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 3,
		dmgMul: .85,
		price: 380
	},
	"ancient-round-shield": {
		id: "ancient-round-shield",
		name: "Escudo Redondo Ancestral",
		slot: "offHand",
		kind: "shield",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 2,
		dmgMul: .7,
		price: 260
	},
	"adaga-secundaria": {
		id: "adaga-secundaria",
		name: "Adaga Secundária",
		slot: "offHand",
		kind: "weapon",
		usableBy: ARCHER_TRIO,
		dice: 1,
		faces: 4,
		bonus: 0,
		minRange: 1,
		maxRange: 1,
		price: 70
	},
	hood: {
		id: "hood",
		name: "Capuz",
		slot: "head",
		usableBy: [...ARCANE_ALL, ...ARCHER_TRIO],
		res: 1,
		price: 40
	},
	cowl: {
		id: "cowl",
		name: "Cogula Reforçada",
		slot: "head",
		usableBy: [...ARCANE_ALL, ...ARCHER_TRIO],
		def: 1,
		res: 1,
		price: 55
	},
	barbute: {
		id: "barbute",
		name: "Barbuta",
		slot: "head",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 2,
		price: 90
	},
	sallet: {
		id: "sallet",
		name: "Elmo Salade",
		slot: "head",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 3,
		price: 140
	},
	"heavy-war-helmet": {
		id: "heavy-war-helmet",
		name: "Elmo de Guerra Pesado",
		slot: "head",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 4,
		price: 200
	},
	"great-helm": {
		id: "great-helm",
		name: "Elmo de Grande Porte",
		slot: "head",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 5,
		price: 260
	},
	"full-helm": {
		id: "full-helm",
		name: "Elmo Completo Gótico",
		slot: "head",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 4,
		price: 210
	},
	"worn-woolen-hood": {
		id: "worn-woolen-hood",
		name: "Capuz de Lã Gasto",
		slot: "head",
		usableBy: [...ARCANE_ALL, ...ARCHER_TRIO],
		res: 1,
		price: 35
	},
	"leather-steel-cuirass": {
		id: "leather-steel-cuirass",
		name: "Couraça de Couro e Aço",
		slot: "chest",
		usableBy: [...ARCHER_TRIO, "rogue"],
		def: 2,
		mov: 1,
		price: 140
	},
	"chainmail-hauberk": {
		id: "chainmail-hauberk",
		name: "Cota de Malha",
		slot: "chest",
		usableBy: [
			...WARRIOR_TRIO,
			...LANCER_TRIO,
			...HEAL_TRIO
		],
		def: 2,
		price: 150
	},
	"heavy-brigandine": {
		id: "heavy-brigandine",
		name: "Brigantina Pesada",
		slot: "chest",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 3,
		price: 200
	},
	"scale-armor": {
		id: "scale-armor",
		name: "Armadura Escamada Medieval",
		slot: "chest",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 3,
		res: 1,
		price: 220
	},
	"plate-cuirass": {
		id: "plate-cuirass",
		name: "Couraça de Placas",
		slot: "chest",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 4,
		price: 260
	},
	"gothic-plate-cuirass": {
		id: "gothic-plate-cuirass",
		name: "Couraça Gótica",
		slot: "chest",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 4,
		res: 1,
		price: 280
	},
	"knights-cuirass": {
		id: "knights-cuirass",
		name: "Couraça de Cavaleiro",
		slot: "chest",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 4,
		price: 270
	},
	"dark-scale-cuirass": {
		id: "dark-scale-cuirass",
		name: "Couraça Escamada Sombria",
		slot: "chest",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 4,
		res: 1,
		price: 300
	},
	"brutal-knight-cuirass": {
		id: "brutal-knight-cuirass",
		name: "Couraça Brutal de Cavaleiro Pesado",
		slot: "chest",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 5,
		price: 340
	},
	"leather-shoulder-guards": {
		id: "leather-shoulder-guards",
		name: "Protetores de Ombro de Couro",
		slot: "shoulders",
		usableBy: [...ARCHER_TRIO, "rogue"],
		def: 1,
		mov: 1,
		price: 90
	},
	"chainmail-mantle": {
		id: "chainmail-mantle",
		name: "Manto de Malha",
		slot: "shoulders",
		usableBy: [
			...WARRIOR_TRIO,
			...LANCER_TRIO,
			...HEAL_TRIO
		],
		def: 1,
		res: 1,
		price: 120
	},
	"armored-shoulder-mantle": {
		id: "armored-shoulder-mantle",
		name: "Manto de Ombro Blindado",
		slot: "shoulders",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 2,
		price: 150
	},
	"massive-pauldrons": {
		id: "massive-pauldrons",
		name: "Ombreiras Maciças",
		slot: "shoulders",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 2,
		price: 150
	},
	"spiked-shoulder-armor": {
		id: "spiked-shoulder-armor",
		name: "Ombreira Pesada Assimétrica",
		slot: "shoulders",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 1,
		atk: 1,
		price: 160
	},
	"gothic-shoulder-plates": {
		id: "gothic-shoulder-plates",
		name: "Placas de Ombro Góticas",
		slot: "shoulders",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 3,
		price: 210
	},
	"gothic-pauldrons-exceptional": {
		id: "gothic-pauldrons-exceptional",
		name: "Ombreiras Góticas Excepcionais",
		slot: "shoulders",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 3,
		price: 230
	},
	"studded-leather-pants": {
		id: "studded-leather-pants",
		name: "Calças de Couro Cravejado",
		slot: "legs",
		usableBy: ARCHER_TRIO,
		def: 1,
		mov: 1,
		price: 60
	},
	"chainmail-leggings": {
		id: "chainmail-leggings",
		name: "Grevas de Malha",
		slot: "legs",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 2,
		price: 110
	},
	"plate-greaves": {
		id: "plate-greaves",
		name: "Grevas de Placas",
		slot: "legs",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 3,
		price: 170
	},
	"plate-legs": {
		id: "plate-legs",
		name: "Perneiras de Placas Completas",
		slot: "legs",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 4,
		mov: -1,
		price: 230
	},
	"worn-leather-boots": {
		id: "worn-leather-boots",
		name: "Botas de Couro Gastas",
		slot: "feet",
		usableBy: ARCHER_TRIO,
		mov: 1,
		price: 35
	},
	"worn-mud-boots": {
		id: "worn-mud-boots",
		name: "Botas Enlameadas",
		slot: "feet",
		usableBy: ARCHER_TRIO,
		def: 1,
		price: 45
	},
	"buckled-leather-boots": {
		id: "buckled-leather-boots",
		name: "Botas de Fivela",
		slot: "feet",
		usableBy: ARCHER_TRIO,
		def: 1,
		mov: 1,
		price: 70
	},
	"steel-sabatons": {
		id: "steel-sabatons",
		name: "Solerets de Aço",
		slot: "feet",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 2,
		price: 110
	},
	"studded-gauntlets": {
		id: "studded-gauntlets",
		name: "Manoplas Cravejadas",
		slot: "hands",
		usableBy: [
			...WARRIOR_TRIO,
			...LANCER_TRIO,
			...HEAL_TRIO
		],
		atk: 1,
		price: 90
	},
	"chainmail-gloves": {
		id: "chainmail-gloves",
		name: "Luvas de Malha",
		slot: "hands",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 1,
		mag: 1,
		price: 65
	},
	"plate-gauntlets": {
		id: "plate-gauntlets",
		name: "Manoplas de Placas",
		slot: "hands",
		usableBy: [
			...WARRIOR_TRIO,
			...LANCER_TRIO,
			...HEAL_TRIO
		],
		atk: 1,
		def: 2,
		price: 150
	},
	"spiked-gauntlet": {
		id: "spiked-gauntlet",
		name: "Manopla Cravada Brutal",
		slot: "hands",
		usableBy: [
			...WARRIOR_TRIO,
			...LANCER_TRIO,
			...HEAL_TRIO
		],
		atk: 3,
		def: 1,
		price: 220
	},
	"dark-steel-gauntlets": {
		id: "dark-steel-gauntlets",
		name: "Manoplas de Aço Sombrio",
		slot: "hands",
		usableBy: [
			...WARRIOR_TRIO,
			...LANCER_TRIO,
			...HEAL_TRIO
		],
		atk: 1,
		def: 1,
		price: 170
	},
	"engraved-vambrace": {
		id: "engraved-vambrace",
		name: "Braçadeira de Aço Gravada",
		slot: "hands",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 2,
		price: 140
	},
	"heavy-armored-boots": {
		id: "heavy-armored-boots",
		name: "Botas Blindadas Pesadas",
		slot: "feet",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 3,
		mov: -1,
		price: 160
	},
	"ornamental-cloak-clasp": {
		id: "ornamental-cloak-clasp",
		name: "Fivela de Capa Ornamentada",
		slot: "back",
		mov: 1,
		res: 1,
		price: 90
	},
	"travelers-cloak": {
		id: "travelers-cloak",
		name: "Capa de Viajante",
		slot: "back",
		usableBy: [...ARCANE_ALL, ...ARCHER_TRIO],
		res: 1,
		price: 60
	},
	"leather-cape": {
		id: "leather-cape",
		name: "Capa Curta de Couro",
		slot: "back",
		usableBy: [...ARCHER_TRIO, "rogue"],
		res: 1,
		price: 70
	},
	"wine-cloak": {
		id: "wine-cloak",
		name: "Capa Tingida de Vinho",
		slot: "back",
		usableBy: [...ARCANE_ALL, ...ARCHER_TRIO],
		res: 1,
		mov: 1,
		price: 80
	},
	"tattered-war-cloak": {
		id: "tattered-war-cloak",
		name: "Capa de Guerra Esfarrapada",
		slot: "back",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 1,
		res: 1,
		price: 110
	},
	"noble-war-cloak": {
		id: "noble-war-cloak",
		name: "Capa Nobre de Guerra Esfarrapada",
		slot: "back",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 1,
		atk: 1,
		price: 180
	},
	"fur-trimmed-cloak": {
		id: "fur-trimmed-cloak",
		name: "Capa de Inverno com Pele",
		slot: "back",
		res: 2,
		price: 130
	},
	"ornate-noble-cloak": {
		id: "ornate-noble-cloak",
		name: "Capa Nobre Ornamentada",
		slot: "back",
		usableBy: ARCANE_ALL,
		mag: 2,
		price: 200
	},
	"plain-leather-belt": {
		id: "plain-leather-belt",
		name: "Cinto de Couro Simples",
		slot: "waist",
		hp: 2,
		price: 30
	},
	"heavy-iron-buckle": {
		id: "heavy-iron-buckle",
		name: "Fivela de Ferro Pesada",
		slot: "waist",
		def: 1,
		price: 45
	},
	"small-leather-pouch": {
		id: "small-leather-pouch",
		name: "Bolsa de Couro Pequena",
		slot: "waist",
		hp: 3,
		price: 50
	},
	"double-buckle-belt": {
		id: "double-buckle-belt",
		name: "Cinto de Fivela Dupla",
		slot: "waist",
		def: 1,
		hp: 2,
		price: 70
	},
	"ornate-dagger-belt": {
		id: "ornate-dagger-belt",
		name: "Cinturão Ornamentado com Bainha",
		slot: "waist",
		atk: 1,
		price: 90
	},
	"utility-pouch-belt": {
		id: "utility-pouch-belt",
		name: "Cinturão de Utilidades",
		slot: "waist",
		atk: 1,
		hp: 2,
		price: 120
	},
	amulet: {
		id: "amulet",
		name: "Amuleto de Cordão de Couro",
		slot: "neck",
		mag: 1,
		price: 70
	},
	"weathered-medallion": {
		id: "weathered-medallion",
		name: "Medalhão Desgastado",
		slot: "neck",
		res: 2,
		price: 80
	},
	"heavy-metal-pendant": {
		id: "heavy-metal-pendant",
		name: "Pingente de Metal Pesado",
		slot: "neck",
		def: 1,
		res: 1,
		price: 100
	},
	"silver-necklace": {
		id: "silver-necklace",
		name: "Colar de Prata Simples",
		slot: "neck",
		res: 1,
		price: 55
	},
	"runic-amulet": {
		id: "runic-amulet",
		name: "Amuleto Rúnico",
		slot: "neck",
		mag: 1,
		price: 65
	},
	"leather-gorget": {
		id: "leather-gorget",
		name: "Goguete de Couro Pesado",
		slot: "neck",
		usableBy: [
			...ARCHER_TRIO,
			...WARRIOR_TRIO,
			"rogue"
		],
		def: 1,
		price: 70
	},
	"iron-talisman": {
		id: "iron-talisman",
		name: "Talismã de Ferro Pesado",
		slot: "neck",
		def: 1,
		price: 95
	},
	"steel-gorget": {
		id: "steel-gorget",
		name: "Goguete de Aço Medieval",
		slot: "neck",
		usableBy: [...WARRIOR_TRIO, ...LANCER_TRIO],
		def: 2,
		price: 110
	},
	"ornate-pendant": {
		id: "ornate-pendant",
		name: "Pingente Medieval Ornamentado",
		slot: "neck",
		res: 1,
		mag: 1,
		price: 130
	},
	"ancient-pendant": {
		id: "ancient-pendant",
		name: "Pingente Ancestral",
		slot: "neck",
		mag: 2,
		price: 240
	},
	"plain-iron-ring": {
		id: "plain-iron-ring",
		name: "Anel de Ferro Simples",
		slot: "ring1",
		hp: 3,
		price: 40
	},
	"silver-signet-ring": {
		id: "silver-signet-ring",
		name: "Anel de Sinete de Prata",
		slot: "ring1",
		atk: 1,
		price: 90
	},
	"heavy-steel-ring": {
		id: "heavy-steel-ring",
		name: "Anel de Aço Pesado",
		slot: "ring1",
		def: 1,
		res: 1,
		price: 150
	},
	"blackened-iron-ring": {
		id: "blackened-iron-ring",
		name: "Anel de Ferro Enegrecido",
		slot: "ring1",
		mag: 2,
		price: 220
	},
	"ancient-gold-ring": {
		id: "ancient-gold-ring",
		name: "Anel de Ouro Ancestral",
		slot: "ring1",
		atk: 1,
		mag: 1,
		def: 1,
		price: 320
	},
	"black-metal-ring": {
		id: "black-metal-ring",
		name: "Anel de Metal Negro Ornamentado",
		slot: "ring1",
		atk: 1,
		def: 1,
		price: 280
	}
};
/** Whether a class's main-hand weapon choice blocks the offHand slot — true when it's a
* two-handed weapon (lances and the like: both hands are already full). */
function offHandBlocked(mainHandWeaponId) {
	return !!(mainHandWeaponId ? WEAPONS[mainHandWeaponId] : null)?.twoHanded;
}
/** Short "+N STAT" summary line for a passive-stat EquipmentDef, classic-RPG-tooltip style. */
function equipmentStatSummary(it) {
	const parts = [];
	if (it.hp) parts.push(`${it.hp > 0 ? "+" : ""}${it.hp} HP`);
	if (it.atk) parts.push(`${it.atk > 0 ? "+" : ""}${it.atk} AT`);
	if (it.mag) parts.push(`${it.mag > 0 ? "+" : ""}${it.mag} MAG`);
	if (it.def) parts.push(`${it.def > 0 ? "+" : ""}${it.def} DF`);
	if (it.res) parts.push(`${it.res > 0 ? "+" : ""}${it.res} RES`);
	if (it.mov) parts.push(`${it.mov > 0 ? "+" : ""}${it.mov} Mov`);
	return parts.join(" · ");
}
function equipmentIcon(id) {
	return `/game/icons/equipment/${id}.png`;
}
var EMBER_DROP = {
	soldier: 2,
	brigand: 2,
	pikeman: 3,
	wardog: 2,
	cultist: 4,
	captain: 6,
	horror: 10,
	troll: 8
};
function emberForKill(classId) {
	return EMBER_DROP[classId] ?? 2;
}
function emberFromCompleted(completed) {
	let n = 0;
	for (const id of completed) {
		const m = missionById(id);
		if (!m || m.hub) continue;
		for (const e of m.enemySpawns) n += emberForKill(e.classId);
	}
	return n;
}
var CURES = {
	cureMinor: {
		name: "Cura Menor",
		dice: 1,
		faces: 8,
		bonus: 3,
		range: 1
	},
	cureWounds: {
		name: "Cura Média",
		dice: 3,
		faces: 8,
		bonus: 3,
		range: 2
	}
};
function rollDice(dice, faces, bonus, rng) {
	let total = bonus;
	for (let i = 0; i < dice; i++) total += 1 + Math.floor(rng() * faces);
	return total;
}
function rollCure(kind, rng) {
	const p = CURES[kind];
	return rollDice(p.dice, p.faces, p.bonus, rng);
}
function diceFormula(dice, faces, bonus) {
	if (dice <= 0) return "";
	const core = `${dice}D${faces}`;
	return bonus ? `${core}+${bonus}` : core;
}
function rollPotion(kind, rng) {
	const p = POTIONS$1[kind];
	return rollDice(p.dice, p.faces, p.bonus, rng);
}
function potionLabel(kind) {
	const p = POTIONS$1[kind];
	const formula = diceFormula(p.dice, p.faces, p.bonus);
	return formula ? `${p.name} ${formula}` : p.name;
}
function cureSpan(kind) {
	const p = CURES[kind];
	return diceFormula(p.dice, p.faces, p.bonus);
}
var FIREBALL = {
	name: "Bola De Fogo",
	size: 2,
	range: 4,
	dice: 2,
	faces: 8,
	bonus: 4
};
var CAUSTIC_VENOM = {
	name: "Veneno Cáustico",
	size: 2,
	range: 4,
	centerDice: 4,
	centerFaces: 8,
	centerBonus: 0,
	splashDice: 2,
	splashFaces: 8,
	splashBonus: 0
};
var LONG_SHOT = {
	name: "Tiro Longo",
	rangeMul: 2,
	rangeBonus: 1,
	bonusDice: 1,
	bonusFaces: 8,
	bonus: 1
};
var PIERCING = {
	name: "Tiro Perfurante",
	dmgMul: 2
};
/** Lancer tier 1: a short-reach line thrust (weapon range + 1 hex) that ignores a slice of
* the target's armor and hits everyone caught in the line — 1st target full damage, every
* one behind it half. */
var PIERCING_THRUST = {
	name: "Investida Perfurante",
	armorIgnore: .2
};
/** Lancer tier 2: an instant, unaimed swing that hits every enemy on an adjacent hex for
* plain weapon damage and shoves each one back a hex to reopen reach. */
var SWEEP = {
	name: "Varredura",
	knockback: 1
};
/** Lancer tier 3: a single-target hook-the-legs strike — weapon damage + 1D8, stuns for 2 of
* the target's own turns, and knocks 10% off every stat for the rest of the battle (not
* cured by anything, unlike Doente). */
var TRIP = {
	name: "Rasteira",
	bonusFaces: 8,
	bonusBonus: 0,
	stunRounds: 2,
	statPenalty: .1
};
var DOUBLE_STRIKE = { name: "Corte Duplo" };
var CLEAVE = {
	name: "Cleave",
	hexes: 3,
	bonusDice: 1,
	bonusFaces: 8,
	bonusBonus: 2
};
var MAGIC_MISSILE = {
	name: "Míssil Mágico",
	range: 4,
	dice: 3,
	faces: 4,
	bonus: 3
};
/** Conjurer tier 1: summons a controllable ally at half the conjurer's current stats
* (recomputed from the conjurer at cast time, so a later-battle or higher-level cast comes
* in stronger) anywhere within range, passable and unoccupied. Stays until the battle ends —
* no duration to track, no re-cast limit beyond the tier's own uses per scenario. */
var SUMMON_FAMILIAR = {
	name: "Invocar Familiar",
	range: 6,
	statScale: .5
};
/** Conjurer tier 2: drops a sticky patch of webbing centered on the target cell. Every unit
* (either side) standing in it at cast time rolls sleepChance to fall asleep for 1D4 of its
* own turns (early wake + sleepBonusDamage on the hit that wakes it). While the zone lasts,
* anyone whose current cell is inside it — caught at cast time or wandered in after — has
* their movement clamped to 1 hex for the turn (see BattleEngine.effectiveUnitForReach): the
* "difficult terrain / restrained" part of the spell, folded into one mechanic. */
var WEB_OF_DREAMS = {
	name: "Teia dos Sonhos",
	range: 5,
	size: 1,
	durationRounds: 3,
	sleepChance: .25,
	sleepDice: 1,
	sleepFaces: 4,
	sleepBonusDamage: .25
};
var LIGHTNING = {
	name: "Relâmpago",
	range: 4,
	dice: 4,
	faces: 12,
	bonus: 6,
	echoDice: 1,
	echoFaces: 12,
	echoBonus: 2
};
var DISEASE = {
	biteChance: .2,
	statPenalty: .1
};
var CURE_DISEASE = {
	name: "Curar Doença Leve",
	range: 1
};
function lightningDice(level) {
	return LIGHTNING.dice + (level >= 8 ? 2 : 0);
}
function lightningFormula(level) {
	return diceFormula(lightningDice(level), LIGHTNING.faces, LIGHTNING.bonus);
}
function fireballPower(level) {
	if (level >= 9) return {
		dice: 6,
		faces: 6,
		bonus: 10
	};
	if (level >= 5) return {
		dice: 4,
		faces: 6,
		bonus: 6
	};
	return {
		dice: FIREBALL.dice,
		faces: FIREBALL.faces,
		bonus: FIREBALL.bonus
	};
}
function fireballFormula(level) {
	const p = fireballPower(level);
	return diceFormula(p.dice, p.faces, p.bonus);
}
var TIER_SPEED = { rogue: "slow" };
/** Levels needed to go from one tier's unlock to the next, for that casting speed. */
var TIER_SPEED_STEP = {
	full: 3,
	half: 4,
	slow: 5
};
/**
* Explicit level×tier slot tables. These don't follow the TIER_SPEED_STEP formula
* above — they're the exact numbers validated by hand: "quarto" (6 tiers), "meio"
* (8 tiers) and "pleno"/maxed (10 tiers), every tier reaching 5 slots by level 30,
* total never dropping between levels.
*/
var QUARTER_TABLE = [
	[
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		2,
		1,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		2,
		1,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		2,
		1,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		3,
		2,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		3,
		2,
		1,
		0,
		0,
		0,
		0,
		0
	],
	[
		3,
		2,
		1,
		0,
		0,
		0,
		0,
		0
	],
	[
		4,
		3,
		1,
		0,
		0,
		0,
		0,
		0
	],
	[
		4,
		3,
		2,
		1,
		0,
		0,
		0,
		0
	],
	[
		4,
		3,
		2,
		1,
		0,
		0,
		0,
		0
	],
	[
		5,
		4,
		2,
		1,
		0,
		0,
		0,
		0
	],
	[
		5,
		4,
		3,
		2,
		0,
		0,
		0,
		0
	],
	[
		5,
		4,
		3,
		2,
		1,
		0,
		0,
		0
	],
	[
		5,
		5,
		3,
		2,
		1,
		0,
		0,
		0
	],
	[
		5,
		5,
		4,
		3,
		1,
		0,
		0,
		0
	],
	[
		5,
		5,
		4,
		3,
		2,
		1,
		0,
		0
	],
	[
		5,
		5,
		4,
		3,
		2,
		1,
		0,
		0
	],
	[
		5,
		5,
		5,
		4,
		2,
		1,
		0,
		0
	],
	[
		5,
		5,
		5,
		4,
		3,
		2,
		0,
		0
	],
	[
		5,
		5,
		5,
		4,
		3,
		2,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		3,
		2,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		4,
		3,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		4,
		3,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		4,
		3,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		4,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		4,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		4,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		0,
		0
	]
];
var HALF_TABLE = [
	[
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		2,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		2,
		1,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		3,
		1,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		3,
		2,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		4,
		2,
		1,
		0,
		0,
		0,
		0,
		0
	],
	[
		4,
		3,
		1,
		0,
		0,
		0,
		0,
		0
	],
	[
		5,
		3,
		2,
		0,
		0,
		0,
		0,
		0
	],
	[
		5,
		4,
		2,
		1,
		0,
		0,
		0,
		0
	],
	[
		5,
		4,
		3,
		1,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		3,
		2,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		4,
		2,
		1,
		0,
		0,
		0
	],
	[
		5,
		5,
		4,
		3,
		1,
		0,
		0,
		0
	],
	[
		5,
		5,
		5,
		3,
		2,
		0,
		0,
		0
	],
	[
		5,
		5,
		5,
		4,
		2,
		1,
		0,
		0
	],
	[
		5,
		5,
		5,
		4,
		3,
		1,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		3,
		2,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		4,
		2,
		1,
		0
	],
	[
		5,
		5,
		5,
		5,
		4,
		3,
		1,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		3,
		2,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		4,
		2,
		1
	],
	[
		5,
		5,
		5,
		5,
		5,
		4,
		3,
		1
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		3,
		2
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		4,
		2
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		4,
		3
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		3
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		4
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		4
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5
	]
];
var FULL_TABLE = [
	[
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		2,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		2,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		3,
		2,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		3,
		2,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		4,
		3,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		4,
		3,
		2,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		5,
		4,
		2,
		1,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		5,
		4,
		3,
		2,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		3,
		2,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		4,
		3,
		1,
		0,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		4,
		3,
		2,
		0,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		5,
		4,
		2,
		1,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		5,
		4,
		3,
		2,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		3,
		2,
		0,
		0,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		4,
		3,
		1,
		0,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		4,
		3,
		2,
		0,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		4,
		2,
		1,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		4,
		3,
		2,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		3,
		2,
		0,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		4,
		3,
		1,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		4,
		3,
		2,
		0
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		4,
		2,
		1
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		4,
		3,
		2
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		3,
		2
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		4,
		3
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		4,
		3
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		4
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		4
	],
	[
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5
	]
];
/** Every class's slot table, base and promoted alike. Promotion (level 15) doesn't
* change the slot table on its own — it only unlocks the promoted class's spell list
* on top of the base class's (hybrid, nothing lost). Base tier and each promotion:
*   Black Mage  ALTA  — Elementalist ALTA (pleno) · Warlock MEIA
*   Conjurer    ALTA  — Sorcerer ALTA (pleno)     · Necromancer MEIA
*   Healer      ALTA  — Bishop ALTA (pleno)       · Cleric MEIA
*   Warrior     QUARTA — Paladin MEIA              · Heavy Knight QUARTA
*   Archer      MEIA  — Ranger QUARTA             · Assassin MEIA
*   Lancer      QUARTA — Sentinel QUARTA           · Templar MEIA
*/
var CLASS_TIER_TABLE = {
	mage: FULL_TABLE,
	conjurer: FULL_TABLE,
	healer: FULL_TABLE,
	swordsman: QUARTER_TABLE,
	archer: HALF_TABLE,
	lancer: QUARTER_TABLE,
	elementalist: FULL_TABLE,
	warlock: HALF_TABLE,
	sorcerer: FULL_TABLE,
	necromancer: HALF_TABLE,
	bishop: FULL_TABLE,
	cleric: HALF_TABLE,
	paladin: HALF_TABLE,
	heavyKnight: QUARTER_TABLE,
	ranger: QUARTER_TABLE,
	assassin: HALF_TABLE,
	sentinel: QUARTER_TABLE,
	templar: HALF_TABLE
};
/** Base class → the two classes it can promote into at PROMOTE_LEVEL. Player picks one;
* the base class's own spell list stays available afterward (hybrid, nothing lost). */
var PROMOTIONS = {
	mage: ["elementalist", "warlock"],
	conjurer: ["sorcerer", "necromancer"],
	healer: ["cleric", "bishop"],
	swordsman: ["paladin", "heavyKnight"],
	archer: ["ranger", "assassin"],
	lancer: ["sentinel", "templar"]
};
/** Reverse of PROMOTIONS: promoted ClassId → its base ClassId. Lets anything keyed on
* the base class (spell lists today; combat stats/sprites later) resolve for a promoted
* unit too, so promotion only adds — it never drops what the base class already granted. */
var PROMOTED_BASE = Object.fromEntries(Object.entries(PROMOTIONS).flatMap(([base, options]) => options.map((o) => [o, base])));
function tierUses(classId, tier, level) {
	const table = CLASS_TIER_TABLE[classId];
	if (table) return table[Math.max(0, Math.min(29, level - 1))][tier - 1] ?? 0;
	const speed = TIER_SPEED[classId];
	if (!speed) return 0;
	const step = TIER_SPEED_STEP[speed];
	return Math.max(0, Math.min(5, Math.floor(level / step) - tier + 2));
}
var SPELL_TIER = {
	magicMissile: 1,
	longShot: 1,
	cureMinor: 1,
	doubleStrike: 1,
	piercingThrust: 1,
	lightning: 2,
	piercing: 2,
	cureWounds: 2,
	cleave: 2,
	sweep: 2,
	trip: 3,
	summonFamiliar: 1,
	webOfDreams: 2,
	fireball: 3,
	cureDisease: 3,
	causticVenom: 4
};
function spellTier(kind) {
	return SPELL_TIER[kind] ?? null;
}
function tierKey(tier) {
	return TIER_KEYS[tier - 1];
}
function enemyLevelFor(missionIndex) {
	if (missionIndex >= 9) return 4;
	if (missionIndex >= 5) return 3;
	if (missionIndex >= 2) return 2;
	return 1;
}
function fireballOrigin(click, _cols, _rows) {
	return {
		x: click.x,
		y: click.y
	};
}
function fireballTiles(origin, cols, rows) {
	const out = [];
	const radius = FIREBALL.size;
	for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
		const Aq = x - (y - (y & 1)) / 2;
		const Ar = y;
		const As = -Aq - Ar;
		const Bq = origin.x - (origin.y - (origin.y & 1)) / 2;
		const Br = origin.y;
		const Bs = -Bq - Br;
		if ((Math.abs(Aq - Bq) + Math.abs(Ar - Br) + Math.abs(As - Bs)) / 2 <= radius) out.push({
			x,
			y
		});
	}
	return out;
}
/** Generic hex-radius area, same cube-distance math as fireballTiles but parameterized —
* used by Web of Dreams (and anything else with its own AoE size) instead of FIREBALL.size. */
function hexAreaTiles(origin, radius, cols, rows) {
	const out = [];
	for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
		const Aq = x - (y - (y & 1)) / 2;
		const Ar = y;
		const As = -Aq - Ar;
		const Bq = origin.x - (origin.y - (origin.y & 1)) / 2;
		const Br = origin.y;
		const Bs = -Bq - Br;
		if ((Math.abs(Aq - Bq) + Math.abs(Ar - Br) + Math.abs(As - Bs)) / 2 <= radius) out.push({
			x,
			y
		});
	}
	return out;
}
function fireballRangeTiles(from, cols, rows) {
	const out = [];
	for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
		const Aq = x - (y - (y & 1)) / 2;
		const Ar = y;
		const As = -Aq - Ar;
		const Bq = from.x - (from.y - (from.y & 1)) / 2;
		const Br = from.y;
		const Bs = -Bq - Br;
		if ((Math.abs(Aq - Bq) + Math.abs(Ar - Br) + Math.abs(As - Bs)) / 2 <= FIREBALL.range) out.push({
			x,
			y
		});
	}
	return out;
}
function startingBags() {
	return {
		Kael: { ...STARTING_BAG },
		Neera: { ...STARTING_BAG },
		Voss: { ...STARTING_BAG },
		Salazar: {
			...EMPTY_BAG,
			lockpick: 3
		}
	};
}
var CHAR = {
	".": "plains",
	w: "woods",
	r: "ruins",
	a: "water",
	e: "ember",
	h: "hill",
	f: "flame",
	c: "column",
	n: "nave",
	b: "barricade",
	d: "highwood",
	s: "highruin",
	k: "chest",
	o: "door",
	t: "deadtree",
	v: "void"
};
function parseLayout(layout) {
	const tiles = [];
	for (const row of layout) for (const ch of row) tiles.push(CHAR[ch] ?? "plains");
	return tiles;
}
var TILE_CHAR = {
	plains: ".",
	woods: "w",
	ruins: "r",
	water: "a",
	ember: "e",
	hill: "h",
	flame: "f",
	column: "c",
	nave: "n",
	barricade: "b",
	highwood: "d",
	highruin: "s",
	chest: "k",
	door: "o",
	deadtree: "t",
	void: "v"
};
function isRangedWeapon(unit) {
	return unit.maxRange > 1 && unit.mag === 0;
}
function isProjectile(unit) {
	return unit.maxRange > 1;
}
function effectiveMaxRange(unit, tile) {
	const high = TERRAIN[tile].height ? 1 : 0;
	const ranged = unit.weaponId ? !!WEAPONS[unit.weaponId]?.ranged : false;
	return unit.maxRange + (ranged ? high : 0);
}
function terrainNote(id) {
	const t = TERRAIN[id];
	if (t.height) return `${t.name} · +2 dano · arqueira +1 alcance`;
	if (t.id === "barricade") return "não se atravessa · 3 hexes · de trás você atira · quem está atrás não é acertado";
	if (t.id === "chest") return "trancado · precisa de Gazua para abrir · pode conter Ember";
	if (t.id === "door") return "trancada · precisa de Gazua para abrir";
	if (t.id === "void") return "vazio · não se atravessa, não se vê através · apaga o terreno pra fechar áreas indoor";
}
var RAW_MISSIONS = [
	{
		id: "vau",
		index: 0,
		title: "O Vau",
		place: "Rio de cinza",
		briefing: "O rio ainda corta a planície queimada. Três sobreviventes. Do outro lado, a milícia que os persegue. Atravessem o vau e abram caminho.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 8,
		rows: 7,
		layout: [
			"..ww..h.",
			"...ww.h.",
			"aaa.aaaa",
			"aaa.aaah",
			".h......",
			"w......w",
			"ww....ww"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 2,
				y: 6
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 6
			},
			{
				name: "Voss",
				classId: "mage",
				x: 4,
				y: 6
			}
		],
		enemySpawns: [
			{
				name: "Soldado",
				classId: "soldier",
				x: 1,
				y: 0
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 6,
				y: 0
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 4,
				y: 1
			}
		]
	},
	{
		id: "bosque",
		index: 1,
		title: "Bosque Morto",
		place: "Troncos secos",
		briefing: "As árvores não têm folhas há duas estações. O bosque aperta o passo e esconde besteiros. Não deixem Kael sozinho na frente.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 9,
		rows: 8,
		layout: [
			"w.w...w.w",
			".www.www.",
			"w..w.w..w",
			"ww.....ww",
			"w..hhh..w",
			".w.....w.",
			"w.......w",
			"ww.....ww"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 4,
				y: 7
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 7
			},
			{
				name: "Voss",
				classId: "mage",
				x: 5,
				y: 7
			}
		],
		enemySpawns: [
			{
				name: "Soldado",
				classId: "soldier",
				x: 1,
				y: 0
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 7,
				y: 0
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 4,
				y: 1
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 2,
				y: 2
			}
		]
	},
	{
		id: "aldeia",
		index: 2,
		title: "Aldeia Queimada",
		place: "Casario em ruína",
		briefing: "A aldeia ainda fumega. Casas em chama custam o passo e queimam quem atravessa — 1d8. Piqueiros alcançam duas casas. Não corram pelo fogo.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 10,
		rows: 8,
		layout: [
			"eewrr.wree",
			"ew.fff...e",
			"w.rrr.rr.w",
			".fff..fff.",
			"ww.rr.rr.w",
			".f.h..h.f.",
			"w...ff...w",
			"www....www"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 4,
				y: 7
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 7
			},
			{
				name: "Voss",
				classId: "mage",
				x: 5,
				y: 7
			}
		],
		enemySpawns: [
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 3,
				y: 2
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 7,
				y: 2
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 5,
				y: 2
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 2,
				y: 5
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 6,
				y: 5
			}
		]
	},
	{
		id: "muralha",
		index: 3,
		title: "Muralha Rasa",
		place: "Porta da fortaleza",
		briefing: "A muralha baixa ainda segura o caminho. Besteiros no adarve, soldados no vão do portão. Três cães de guerra — carne de rito, ferro uruk no focinho — tomam duas casas cada. Não deixem cercar Kael.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 11,
		rows: 8,
		layout: [
			"rrrr.e.rrrr",
			"r.........r",
			"rrr.....rrr",
			"r.........r",
			"....hhh....",
			"h.........h",
			"...........",
			"www.....www"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 5,
				y: 7
			},
			{
				name: "Neera",
				classId: "archer",
				x: 4,
				y: 7
			},
			{
				name: "Voss",
				classId: "mage",
				x: 6,
				y: 7
			}
		],
		enemySpawns: [
			{
				name: "Soldado",
				classId: "soldier",
				x: 4,
				y: 1
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 6,
				y: 1
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 5,
				y: 2
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 1,
				y: 3
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 9,
				y: 3
			},
			{
				name: "Cão de guerra",
				classId: "wardog",
				x: 3,
				y: 5
			},
			{
				name: "Cão de guerra",
				classId: "wardog",
				x: 7,
				y: 5
			},
			{
				name: "Cão de guerra",
				classId: "wardog",
				x: 5,
				y: 4
			}
		]
	},
	{
		id: "fortaleza",
		index: 4,
		title: "Fortaleza de Cinzas",
		place: "Pátio interior",
		briefing: "O capitão espera no pátio. Derrubem ele — a guarda se dispersa. Voss e Neera acertam de longe, sem contra-ataque. Não encostem no chefe. Usem bosque e ruína.",
		objective: "Derrube o capitão",
		win: "boss",
		cols: 10,
		rows: 8,
		layout: [
			"rrr.ee.rrr",
			"r........r",
			"r........r",
			"r........r",
			"r..rrrr..r",
			"r.ww..ww.r",
			"e........e",
			"ee......ee"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 4,
				y: 7
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 7
			},
			{
				name: "Voss",
				classId: "mage",
				x: 5,
				y: 7
			}
		],
		enemySpawns: [
			{
				name: "Capitão",
				classId: "captain",
				x: 4,
				y: 1
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 2,
				y: 2
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 7,
				y: 2
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 8,
				y: 3
			}
		]
	},
	{
		id: "templo",
		index: 5,
		title: "As Jaulas da Lua Carmim",
		place: "Nave enforcada",
		briefing: "A lua de sangue pende sobre a nave. Gaiolas de ferro e carne. O rito já acabou — Asherah ocupa o altar. Matem todos. Se ela alcançar Voss, ele cai.",
		objective: "Derrote Asherah e os feiticeiros",
		win: "rout",
		cols: 13,
		rows: 12,
		layout: [
			"rrrrreeerrrrr",
			"rcnhhhnnnncrr",
			"rnnhhhhnnnncr",
			"rcnnfnnnnfncr",
			"rnncnnrnncnnr",
			"rcnnnnnnnnncr",
			"rnncnnnrrcnnr",
			"rcnnnnnnnncnr",
			"rnnrnnnnnrnnr",
			"rcnncnnncncnr",
			"rnnnnnnnnnnnr",
			"rrrnnnnnnnrrr"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 5,
				y: 11
			},
			{
				name: "Neera",
				classId: "archer",
				x: 6,
				y: 11
			},
			{
				name: "Voss",
				classId: "mage",
				x: 7,
				y: 11
			}
		],
		enemySpawns: [
			{
				name: "Asherah",
				classId: "horror",
				x: 6,
				y: 2
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 2,
				y: 4
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 10,
				y: 4
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 2,
				y: 8
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 10,
				y: 8
			}
		]
	},
	{
		id: "cripta",
		index: 6,
		title: "Cripta de Cinzas",
		place: "Sob o templo",
		briefing: "Asherah caiu. O prisioneiro do rito anda — Salazar, clérigo sem poções. Duas curas menores e uma cura simples por combate. A cripta ainda tem culto. Não deixem cercá-lo.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 11,
		rows: 10,
		layout: [
			"rrrrrrrrrrr",
			"rcncnnncncr",
			"nnnnnnnnnnn",
			"rcncnnncncr",
			"nnnnnnnnnnn",
			"rcncnnncncr",
			"nnnnnnnnnnn",
			"rcncnnncncr",
			"nnnnnnnnnnn",
			"rrrnnnnnrrr"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 4,
				y: 9
			},
			{
				name: "Neera",
				classId: "archer",
				x: 5,
				y: 9
			},
			{
				name: "Voss",
				classId: "mage",
				x: 6,
				y: 9
			},
			{
				name: "Salazar",
				classId: "healer",
				x: 7,
				y: 9
			}
		],
		enemySpawns: [
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 2,
				y: 1
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 8,
				y: 1
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 5,
				y: 2
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 1,
				y: 4
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 9,
				y: 4
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 5,
				y: 5
			}
		]
	},
	{
		id: "estalagem",
		index: 7,
		title: "A Estalagem do Osso Seco",
		place: "Pousada à margem da cinza",
		briefing: "A estrada acaba num copo. O Osso Seco ainda serve, se Ember pagar. Brue vende o que restou da adega. O mudo escreve. A hóspede do porão só fala. Ninguém ataca aqui.",
		objective: "Descanso, conversa e troca",
		win: "rout",
		hub: true,
		cols: 8,
		rows: 6,
		layout: [
			"rrrrrrrr",
			"r......r",
			"r......r",
			"r......r",
			"r......r",
			"rrrrrrrr"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 2,
				y: 4
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 4
			},
			{
				name: "Voss",
				classId: "mage",
				x: 4,
				y: 4
			},
			{
				name: "Salazar",
				classId: "healer",
				x: 5,
				y: 4
			}
		],
		enemySpawns: []
	},
	{
		id: "colina",
		index: 8,
		title: "A Colina Morta",
		place: "Encosta seca",
		briefing: "Uma colina ampla, coberta de vegetação morta. Árvores retorcidas, capim amarelado, pedras antigas. O caminho sobe. Quanto mais alto, mais a encosta vira paredão. No cume, a silhueta de uma construção fortificada. A superfície acaba.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 11,
		rows: 9,
		layout: [
			"ccc...ccccc",
			"chhhhhhhhcc",
			"h.w.h.w.h.h",
			".w...h...w.",
			"wh.......hw",
			".h..hhh..h.",
			"w.w.....w.w",
			"...........",
			"www.....www"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 4,
				y: 8
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 8
			},
			{
				name: "Voss",
				classId: "mage",
				x: 6,
				y: 8
			},
			{
				name: "Salazar",
				classId: "healer",
				x: 7,
				y: 8
			}
		],
		enemySpawns: [
			{
				name: "Besteiro",
				classId: "brigand",
				x: 2,
				y: 2
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 8,
				y: 2
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 5,
				y: 3
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 4,
				y: 5
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 6,
				y: 5
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 1,
				y: 6
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 9,
				y: 6
			}
		]
	},
	{
		id: "passagem",
		index: 9,
		title: "A Passagem Antiga",
		place: "Caverna talhada",
		briefing: "A única passagem pelo paredão é uma caverna escavada há muito tempo. Paredes talhadas, blocos de pedra, nichos e plataformas sem função. Raízes no teto. No escuro vive um troll da caverna, em armadura grosseira. Ele parte barricadas. Desce e sobe através da montanha.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 11,
		rows: 10,
		layout: [
			"ccccccccccc",
			"cnnnnnnnnnc",
			"cnnncnnncnn",
			"cnnnnnnnnnc",
			"cnncccccnnc",
			"cnnnnnnnnnc",
			"cnnncnnncnn",
			"cnnnnnnnnnc",
			"cnnnnnnnnnc",
			"cccnnnnnccc"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 4,
				y: 9
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 9
			},
			{
				name: "Voss",
				classId: "mage",
				x: 6,
				y: 9
			},
			{
				name: "Salazar",
				classId: "healer",
				x: 7,
				y: 9
			}
		],
		enemySpawns: [
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 2,
				y: 1
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 8,
				y: 1
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 5,
				y: 2
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 1,
				y: 5
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 9,
				y: 5
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 5,
				y: 6
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 5,
				y: 3
			},
			{
				name: "Troll da caverna",
				classId: "troll",
				x: 6,
				y: 6
			}
		]
	},
	{
		id: "profundezas",
		index: 10,
		title: "As Profundezas Famintas",
		place: "Câmaras mais fundas da caverna",
		briefing: "A passagem continua abaixo, mais funda que qualquer mapa registrado. O ar cheira a cinza fria. Pilares talhados sustentam um teto que não deveria existir a essa profundidade. Algo aqui não come há muito tempo — e não é comida que procura.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 13,
		rows: 9,
		layout: [
			"ccccccccccccc",
			"cnnnnnnnnnnnc",
			"cnncnnnnncnnc",
			"cnnnnnnnnnnnc",
			"cncnnncnnncnc",
			"cnnnnnnnnnnnc",
			"cnnncnnncnnnc",
			"nnnnnnnnnnnnc",
			"cnnnnnnnnnnnc"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 5,
				y: 7
			},
			{
				name: "Neera",
				classId: "archer",
				x: 4,
				y: 7
			},
			{
				name: "Voss",
				classId: "mage",
				x: 6,
				y: 7
			},
			{
				name: "Salazar",
				classId: "healer",
				x: 7,
				y: 7
			}
		],
		enemySpawns: [
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 3,
				y: 1
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 9,
				y: 1
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 8,
				y: 2
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 2,
				y: 3
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 10,
				y: 3
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 7,
				y: 4
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 6,
				y: 5
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 3,
				y: 5
			},
			{
				name: "Troll da caverna",
				classId: "troll",
				x: 2,
				y: 6
			},
			{
				name: "Troll da caverna",
				classId: "troll",
				x: 10,
				y: 7
			},
			{
				name: "Ember Starved",
				classId: "horror",
				x: 6,
				y: 3,
				guaranteedDrop: true
			}
		]
	},
	{
		id: "vertente",
		index: 11,
		title: "R1",
		place: "Face norte da colina",
		briefing: "A passagem desemboca na outra face. Pouco muda no chão. Muda a vista: a elevação inteira acima, e no topo o Templo Fortificado, nítido pela primeira vez. Não parece abandonado. A encosta é pior deste lado.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 11,
		rows: 9,
		layout: [
			"rrrr.e.rrrr",
			"r.........r",
			"hhh.....hhh",
			".w.h...h.w.",
			"h.........h",
			".w..hhh..w.",
			"w.........w",
			"...........",
			"www.....www"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 4,
				y: 8
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 8
			},
			{
				name: "Voss",
				classId: "mage",
				x: 6,
				y: 8
			},
			{
				name: "Salazar",
				classId: "healer",
				x: 7,
				y: 8
			}
		],
		enemySpawns: [
			{
				name: "Besteiro",
				classId: "brigand",
				x: 2,
				y: 1
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 8,
				y: 1
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 5,
				y: 2
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 3,
				y: 4
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 7,
				y: 4
			},
			{
				name: "Cão de guerra",
				classId: "wardog",
				x: 1,
				y: 6
			},
			{
				name: "Cão de guerra",
				classId: "wardog",
				x: 9,
				y: 6
			}
		]
	},
	{
		id: "portao",
		index: 12,
		title: "R2",
		place: "Portões do cume",
		briefing: "O caminho acaba diante da entrada. Muralhas espessas, torres no corpo da igreja, portão monumental. Antigo e preservado. A escadaria sobe até as portas. O interior fica para depois.",
		objective: "Derrote todos os inimigos",
		win: "rout",
		cols: 11,
		rows: 8,
		layout: [
			"rrr.....rrr",
			"r.........r",
			"rrr.....rrr",
			"....hhh....",
			"...........",
			"h.........h",
			"...........",
			"www.....www"
		],
		playerSpawns: [
			{
				name: "Kael",
				classId: "swordsman",
				x: 4,
				y: 7
			},
			{
				name: "Neera",
				classId: "archer",
				x: 3,
				y: 7
			},
			{
				name: "Voss",
				classId: "mage",
				x: 6,
				y: 7
			},
			{
				name: "Salazar",
				classId: "healer",
				x: 7,
				y: 7
			}
		],
		enemySpawns: [
			{
				name: "Capitão",
				classId: "captain",
				x: 5,
				y: 1
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 2,
				y: 1
			},
			{
				name: "Soldado",
				classId: "soldier",
				x: 8,
				y: 1
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 1,
				y: 2
			},
			{
				name: "Besteiro",
				classId: "brigand",
				x: 9,
				y: 2
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 4,
				y: 3
			},
			{
				name: "Piqueiro",
				classId: "pikeman",
				x: 6,
				y: 3
			},
			{
				name: "Feiticeiro",
				classId: "cultist",
				x: 5,
				y: 0
			},
			{
				name: "Cão de guerra",
				classId: "wardog",
				x: 2,
				y: 5
			},
			{
				name: "Cão de guerra",
				classId: "wardog",
				x: 8,
				y: 5
			}
		]
	}
];
function expandMaps(missions) {
	return missions.map((m) => {
		if (m.hub) return m;
		const layout = [];
		for (const row of m.layout) {
			const wide = Array.from(row, (ch) => ch + ch).join("");
			layout.push(wide, wide);
		}
		const place = (s) => ({
			...s,
			x: s.x * 2,
			y: s.y * 2
		});
		return stampTactics({
			...m,
			cols: m.cols * 2,
			rows: m.rows * 2,
			layout,
			playerSpawns: m.playerSpawns.map(place),
			enemySpawns: m.enemySpawns.map(place)
		});
	});
}
/** The six neighbor cells of an odd-r offset hex grid coordinate, as absolute [x, y] pairs
* — the one copy of this offset table for the whole file (it was previously re-declared
* three separate times: twice inline in stampTactics, once more for decorateOpenTerrain's
* flood-fill/connectivity checks below). */
function hexAdj(x, y) {
	return (y & 1 ? [
		[1, 0],
		[1, -1],
		[0, -1],
		[-1, 0],
		[0, 1],
		[1, 1]
	] : [
		[1, 0],
		[0, -1],
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, 1]
	]).map(([dx, dy]) => [x + dx, y + dy]);
}
function oddrDist(ax, ay, bx, by) {
	const aq = ax - (ay - (ay & 1)) / 2;
	const bq = bx - (by - (by & 1)) / 2;
	const ar = ay;
	const br = by;
	return (Math.abs(aq - bq) + Math.abs(ar - br) + Math.abs(-aq - ar - (-bq - br))) / 2;
}
function stampTactics(m) {
	const tiles = parseLayout(m.layout);
	const blocked = /* @__PURE__ */ new Set();
	const mark = (x, y) => blocked.add(`${x},${y}`);
	for (const s of [...m.playerSpawns, ...m.enemySpawns]) {
		mark(s.x, s.y);
		for (const [nx, ny] of hexAdj(s.x, s.y)) mark(nx, ny);
	}
	const cand = [];
	for (let y = 1; y < m.rows - 1; y++) for (let x = 1; x < m.cols - 1; x++) {
		const t = tiles[y * m.cols + x];
		if ((t === "plains" || t === "nave" || t === "woods") && !blocked.has(`${x},${y}`)) cand.push({
			x,
			y
		});
	}
	let seed = (m.index + 1) * 9973;
	const rnd = () => {
		seed = Math.imul(seed, 1664525) + 1013904223 | 0;
		return (seed >>> 0) / 4294967296;
	};
	for (let i = cand.length - 1; i > 0; i--) {
		const j = Math.floor(rnd() * (i + 1));
		const tmp = cand[i];
		cand[i] = cand[j];
		cand[j] = tmp;
	}
	const taken = [];
	const walkable = (t) => !!t && TERRAIN[t].passable;
	const canWalk = (tilesNow) => {
		const from = m.playerSpawns[0];
		const to = m.enemySpawns[0];
		if (!from || !to) return true;
		const seen = /* @__PURE__ */ new Set([`${from.x},${from.y}`]);
		const q = [{
			x: from.x,
			y: from.y
		}];
		while (q.length) {
			const p = q.pop();
			if (oddrDist(p.x, p.y, to.x, to.y) <= 1) return true;
			for (const [nx, ny] of hexAdj(p.x, p.y)) {
				if (nx < 0 || ny < 0 || nx >= m.cols || ny >= m.rows) continue;
				const k = `${nx},${ny}`;
				if (seen.has(k)) continue;
				if (!walkable(tilesNow[ny * m.cols + nx])) continue;
				seen.add(k);
				q.push({
					x: nx,
					y: ny
				});
			}
		}
		return false;
	};
	const okBase = (x, y) => {
		if (x < 1 || y < 1 || x >= m.cols - 1 || y >= m.rows - 1) return false;
		if (blocked.has(`${x},${y}`)) return false;
		const t = tiles[y * m.cols + x];
		return t === "plains" || t === "nave" || t === "woods";
	};
	const cubeOf = (col, row) => {
		return {
			q: col - (row - (row & 1)) / 2,
			r: row
		};
	};
	const oddrOf = (q, r) => ({
		x: q + (r - (r & 1)) / 2,
		y: r
	});
	const cubeDirs = [
		[1, 0],
		[1, -1],
		[0, -1],
		[-1, 0],
		[-1, 1],
		[0, 1]
	];
	const avg = (list) => ({
		x: list.reduce((s, p) => s + p.x, 0) / Math.max(1, list.length),
		y: list.reduce((s, p) => s + p.y, 0) / Math.max(1, list.length)
	});
	const P = avg(m.playerSpawns);
	const E = avg(m.enemySpawns);
	const frontX = (P.x + E.x) / 2;
	const frontY = (P.y + E.y) / 2;
	const minY = Math.min(P.y, E.y);
	const maxY = Math.max(P.y, E.y);
	const walls = [];
	for (const p of cand) {
		if (!okBase(p.x, p.y)) continue;
		const A = cubeOf(p.x, p.y);
		for (const [dq, dr] of cubeDirs) {
			const cells = [p];
			let q = A.q;
			let r = A.r;
			let good = true;
			for (let k = 0; k < 2; k++) {
				q += dq;
				r += dr;
				const n = oddrOf(q, r);
				n.x = Math.round(n.x);
				n.y = Math.round(n.y);
				if (!okBase(n.x, n.y)) {
					good = false;
					break;
				}
				cells.push(n);
			}
			if (!good) continue;
			const mx = cells.reduce((s, c) => s + c.x, 0) / 3;
			const my = cells.reduce((s, c) => s + c.y, 0) / 3;
			const between = my > minY + 1.2 && my < maxY - 1.2;
			const sameRow = cells.every((c) => c.y === cells[0].y) ? 3 : 0;
			const dFront = Math.abs(mx - frontX) * .3 + Math.abs(my - frontY);
			const central = 1 - Math.abs(mx - (m.cols - 1) / 2) / (m.cols / 2);
			walls.push({
				cells,
				score: (between ? 12 : 0) + sameRow + central * 4 - dFront
			});
		}
	}
	walls.sort((a, b) => b.score - a.score);
	let placed = 0;
	for (const wall of walls) {
		if (placed >= 2) break;
		if (wall.cells.some((c) => taken.some((q) => oddrDist(c.x, c.y, q.x, q.y) < 3))) continue;
		const prev = wall.cells.map((c) => tiles[c.y * m.cols + c.x]);
		for (const c of wall.cells) tiles[c.y * m.cols + c.x] = "barricade";
		if (!canWalk(tiles)) {
			wall.cells.forEach((c, i) => {
				tiles[c.y * m.cols + c.x] = prev[i];
			});
			continue;
		}
		taken.push(...wall.cells);
		placed += 1;
	}
	const pick = (n, kind) => {
		let got = 0;
		for (const p of cand) {
			if (got >= n) break;
			const i = p.y * m.cols + p.x;
			if (tiles[i] === "hill" || tiles[i] === "highwood" || tiles[i] === "highruin" || tiles[i] === "deadtree" || tiles[i] === "barricade") continue;
			if (taken.some((q) => oddrDist(p.x, p.y, q.x, q.y) < 3)) continue;
			tiles[i] = kind;
			taken.push(p);
			got += 1;
		}
	};
	pick(3, "hill");
	const highKinds = [
		"hill",
		"highwood",
		"highruin",
		"deadtree"
	];
	for (let y = 0; y < m.rows; y++) for (let x = 0; x < m.cols; x++) {
		const i = y * m.cols + x;
		if (tiles[i] !== "hill") continue;
		tiles[i] = highKinds[(x * 17 + y * 31 + m.index * 9) % highKinds.length] ?? "hill";
	}
	const layout = [];
	for (let y = 0; y < m.rows; y++) {
		let row = "";
		for (let x = 0; x < m.cols; x++) row += TILE_CHAR[tiles[y * m.cols + x] ?? "plains"] ?? ".";
		layout.push(row);
	}
	return {
		...m,
		layout
	};
}
var ROCK_IDS = [
	"mountain-ridge",
	"spike-rocks",
	"broken-cliff-wall"
];
/** Replaces every "column" tile (a marble pillar rendered on its own patch of grass —
* looks absurd indoors, and doubly so on a plains/cave map that has no grass anywhere
* else) with rock-formation decorations instead, on every mission that uses columns at
* all, not just the worst offenders. Runs after expandMaps() specifically because a raw
* mission's single hex always doubles into a horizontally-adjacent PAIR of the same tile
* (expandMaps does `ch + ch` per character) — so working at the expanded grid means every
* column, however isolated it looked in the original hand-authored layout, already has a
* same-row neighbor to pair with here. That's what makes plain adjacent-pair matching
* enough: no leftover singles to fall back on, no footprint mismatch to design around.
* (An earlier pass tried placing decorations directly on the raw pre-expansion missions —
* their coordinates don't survive expandMaps(), which scales spawns but not decorations,
* so anything placed that way renders in the wrong spot. Doing it here, post-expansion,
* on real rendered coordinates, sidesteps that entirely.) */
function rockifyColumns(mission) {
	if (mission.hub) return mission;
	const grid = mission.layout.map((row) => row.split(""));
	const fallbackFloor = mission.layout.some((row) => row.includes("n")) ? "n" : ".";
	const decorations = [...mission.decorations ?? []];
	const claimed = /* @__PURE__ */ new Set();
	let next = 0;
	for (let y = 0; y < mission.rows; y++) for (let x = 0; x < mission.cols - 1; x++) {
		const key = `${x},${y}`;
		if (grid[y][x] !== "c" || claimed.has(key)) continue;
		const rightKey = `${x + 1},${y}`;
		if (grid[y][x + 1] !== "c" || claimed.has(rightKey)) continue;
		claimed.add(key);
		claimed.add(rightKey);
		decorations.push({
			id: ROCK_IDS[next % ROCK_IDS.length],
			x,
			y
		});
		next += 1;
	}
	for (let y = 0; y < mission.rows; y++) for (let x = 0; x < mission.cols; x++) if (grid[y][x] === "c" && !claimed.has(`${x},${y}`)) grid[y][x] = fallbackFloor;
	return {
		...mission,
		layout: grid.map((row) => row.join("")),
		decorations
	};
}
function mulberry32Local(seed) {
	let a = seed | 0;
	return () => {
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function seedFromId(id) {
	let h = 2166136261;
	for (let i = 0; i < id.length; i++) {
		h ^= id.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
var TREE_DECOS = ["dense-forest", "dead-tree-large"];
var RUIN_DECOS = [
	"ruined-cottage",
	"broken-tower",
	"ruined-chapel",
	"broken-wall-segment",
	"boulder-cluster",
	"abandoned-mansion"
];
var INDOOR_DECOS = ["boulder-cluster"];
var CONVERT_TO_OPEN = /* @__PURE__ */ new Set(["w", "r"]);
var KEEP_HOST = /* @__PURE__ */ new Set([
	".",
	"h",
	"f",
	"n"
]);
function inBoundsCell(x, y, cols, rows) {
	return x >= 0 && x < cols && y >= 0 && y < rows;
}
function floodClusters(grid, cols, rows, chars) {
	const seen = /* @__PURE__ */ new Set();
	const clusters = [];
	for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
		const key = `${x},${y}`;
		if (seen.has(key) || !chars.has(grid[y][x])) continue;
		const stack = [[x, y]];
		seen.add(key);
		const comp = [[x, y]];
		while (stack.length) {
			const [cx, cy] = stack.pop();
			for (const [nx, ny] of hexAdj(cx, cy)) {
				const k = `${nx},${ny}`;
				if (inBoundsCell(nx, ny, cols, rows) && !seen.has(k) && chars.has(grid[ny]?.[nx] ?? "")) {
					seen.add(k);
					stack.push([nx, ny]);
					comp.push([nx, ny]);
				}
			}
		}
		clusters.push(comp);
	}
	return clusters;
}
function connectivityOk(grid, cols, rows, blockedExtra, spawns) {
	if (spawns.length === 0) return true;
	const passable = (x, y) => {
		if (blockedExtra.has(`${x},${y}`)) return false;
		return TERRAIN[CHAR[grid[y][x]] ?? "plains"]?.passable !== false;
	};
	const [sx, sy] = spawns[0];
	const seen = /* @__PURE__ */ new Set([`${sx},${sy}`]);
	const stack = [[sx, sy]];
	while (stack.length) {
		const [cx, cy] = stack.pop();
		for (const [nx, ny] of hexAdj(cx, cy)) {
			const k = `${nx},${ny}`;
			if (inBoundsCell(nx, ny, cols, rows) && !seen.has(k) && passable(nx, ny)) {
				seen.add(k);
				stack.push([nx, ny]);
			}
		}
	}
	return spawns.every(([x, y]) => seen.has(`${x},${y}`));
}
function chebyshev(a, b) {
	return Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]));
}
function minDist(cell, pts) {
	return pts.length ? Math.min(...pts.map((p) => chebyshev(cell, p))) : Infinity;
}
/** Sprinkles a handful of lockable chests ("here and there", not blanket coverage) onto
* open ground — spaced apart, never where they'd cut off a spawn (same BFS check as
* decoration placement, since a chest is impassable terrain until picked), and biased
* toward enemy territory: candidates are ranked by (distance from the nearest player
* spawn) minus (distance from the nearest enemy spawn), so a chest is worth fighting
* through the enemy line for, not a freebie sitting next to the party's own spawn. */
function placeChests(grid, cols, rows, playerSpawns, enemySpawns, spawnSet, blockedExtra, seed, floorChar) {
	const rng = mulberry32Local(seed);
	const spawns = [...playerSpawns, ...enemySpawns];
	const candidates = [];
	for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
		const k = `${x},${y}`;
		if (spawnSet.has(k) || blockedExtra.has(k) || grid[y][x] !== floorChar) continue;
		candidates.push([x, y]);
	}
	candidates.sort((a, b) => {
		const scoreA = minDist(a, playerSpawns) - minDist(a, enemySpawns);
		return minDist(b, playerSpawns) - minDist(b, enemySpawns) - scoreA;
	});
	const pool = candidates.slice(0, Math.max(1, Math.ceil(candidates.length / 2)));
	for (let i = pool.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[pool[i], pool[j]] = [pool[j], pool[i]];
	}
	const budget = Math.min(3, Math.max(1, Math.floor(cols * rows / 150)));
	const placed = [];
	for (const [cx, cy] of pool) {
		if (placed.length >= budget) break;
		if (placed.some(([px, py]) => Math.max(Math.abs(px - cx), Math.abs(py - cy)) < 3)) continue;
		const candidate = new Set(blockedExtra);
		candidate.add(`${cx},${cy}`);
		if (connectivityOk(grid, cols, rows, candidate, spawns)) {
			grid[cy][cx] = "k";
			blockedExtra.add(`${cx},${cy}`);
			placed.push([cx, cy]);
		}
	}
}
/** Strips "funky" single-hex clutter tiles — woods ("w") and ruins ("r"), whose baked-in
* tree/house art tiles awkwardly at hex scale (and reads as grass/greenery even indoors,
* e.g. a temple nave) — back to plain ground, replaced with a modest sprinkling of the
* multi-hex decoration objects instead. Elevation (hill), fire (flame) and ember are
* untouched. Also sprinkles 1-3 lockable chests per map onto open ground, deterministically
* seeded by mission id so they don't reshuffle on reload. Every placement is verified with a
* BFS connectivity check — dropped if it would cut any spawn off from the rest of the board —
* so this can never produce an unwinnable map. Runs last, after rockifyColumns, on the same
* real expanded coordinates the game actually renders. */
function decorateOpenTerrain(mission) {
	if (mission.hub) return mission;
	const { cols, rows } = mission;
	const grid = mission.layout.map((row) => row.split(""));
	const playerSpawns = mission.playerSpawns.map((s) => [s.x, s.y]);
	const enemySpawns = mission.enemySpawns.map((s) => [s.x, s.y]);
	const spawns = [...playerSpawns, ...enemySpawns];
	const spawnSet = new Set(spawns.map(([x, y]) => `${x},${y}`));
	const spawnClearance = new Set(spawnSet);
	for (const [sx, sy] of spawns) for (const [nx, ny] of hexAdj(sx, sy)) spawnClearance.add(`${nx},${ny}`);
	const floorChar = mission.layout.some((row) => row.includes("n")) ? "n" : ".";
	const woodClusters = floodClusters(grid, cols, rows, /* @__PURE__ */ new Set(["w"])).sort((a, b) => b.length - a.length);
	const ruinClusters = floodClusters(grid, cols, rows, /* @__PURE__ */ new Set(["r"])).sort((a, b) => b.length - a.length);
	const totalWr = woodClusters.reduce((n, c) => n + c.length, 0) + ruinClusters.reduce((n, c) => n + c.length, 0);
	const decorations = [];
	const blockedExtra = /* @__PURE__ */ new Set();
	function tryPlaceOne(anchor, pool) {
		const [ax, ay] = anchor;
		for (const name of pool) {
			const def = DECORATIONS[name];
			if (!def) continue;
			const cells = def.footprint.map((f) => [ax + f.dx, ay + f.dy]);
			if (!cells.every(([cx, cy]) => inBoundsCell(cx, cy, cols, rows))) continue;
			if (cells.some(([cx, cy]) => spawnClearance.has(`${cx},${cy}`))) continue;
			if (!cells.every(([cx, cy]) => CONVERT_TO_OPEN.has(grid[cy][cx]) || KEEP_HOST.has(grid[cy][cx]))) continue;
			if (cells.some(([cx, cy]) => blockedExtra.has(`${cx},${cy}`))) continue;
			const candidate = new Set(blockedExtra);
			for (const [cx, cy] of cells) candidate.add(`${cx},${cy}`);
			if (connectivityOk(grid, cols, rows, candidate, spawns)) {
				for (const [cx, cy] of cells) blockedExtra.add(`${cx},${cy}`);
				decorations.push({
					id: name,
					x: ax,
					y: ay
				});
				return true;
			}
		}
		return false;
	}
	function placeInClusters(clusters, pool, budget) {
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
				if (spawnClearance.has(`${ax},${ay}`)) continue;
				const offset = di % pool.length;
				if (tryPlaceOne(anchor, [...pool.slice(offset), ...pool.slice(0, offset)])) {
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
	if (placedTrees + placeInClusters(ruinClusters, RUIN_DECOS, Math.max(0, cap - placedTrees) + (placedTrees < cap ? 2 : 0)) < 3) {
		const openGround = [];
		for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
			const k = `${x},${y}`;
			if (grid[y][x] === floorChar && !spawnClearance.has(k) && !blockedExtra.has(k)) openGround.push([x, y]);
		}
		const rng = mulberry32Local(seedFromId(`${mission.id}-deco`));
		for (let i = openGround.length - 1; i > 0; i--) {
			const j = Math.floor(rng() * (i + 1));
			[openGround[i], openGround[j]] = [openGround[j], openGround[i]];
		}
		const pool = floorChar === "n" ? INDOOR_DECOS : [...TREE_DECOS, ...RUIN_DECOS];
		let placed = 0;
		const budget = 4;
		for (const anchor of openGround) {
			if (placed >= budget) break;
			const offset = placed % pool.length;
			if (tryPlaceOne(anchor, [...pool.slice(offset), ...pool.slice(0, offset)])) placed += 1;
		}
	}
	for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) if (CONVERT_TO_OPEN.has(grid[y][x])) grid[y][x] = floorChar;
	if (!mission.layout.some((row) => row.includes("k"))) placeChests(grid, cols, rows, playerSpawns, enemySpawns, spawnSet, blockedExtra, seedFromId(mission.id), floorChar);
	return {
		...mission,
		layout: grid.map((row) => row.join("")),
		decorations: [...mission.decorations ?? [], ...decorations]
	};
}
/** Missions whose open ground is meant to read as dead/scorched, not living grass — the
* plains tile's default art is lush green, wrong for a place whose own briefing describes
* it as ash-choked. Swaps every plains cell to the desaturated third art variant
* (plains03.png) instead. Add a mission id here rather than touching its terrain type: it's
* still mechanically plains (same move cost, same defense), just dressed differently. */
var DEAD_GROUND_MISSIONS = /* @__PURE__ */ new Set(["portao"]);
var DEAD_GROUND_VARIANT = 2;
function applyDeadGround(mission) {
	if (!DEAD_GROUND_MISSIONS.has(mission.id)) return mission;
	const tiles = parseLayout(mission.layout);
	const variants = mission.tileVariants ? [...mission.tileVariants] : new Array(tiles.length).fill(0);
	for (let i = 0; i < tiles.length; i++) if (tiles[i] === "plains") variants[i] = DEAD_GROUND_VARIANT;
	return {
		...mission,
		tileVariants: variants
	};
}
var MISSIONS = expandMaps(RAW_MISSIONS).map(rockifyColumns).map(decorateOpenTerrain).map(applyDeadGround);
function missionById(id) {
	return MISSIONS.find((m) => m.id === id);
}
/** Campaign world map markers, positioned (percent x/y, 0-100) against the real map art
* at public/game/assets/world-map.jpg, pinned to that art's own labels per direct instruction:
* Stone Bridge (missions 1-3: O Vau, Bosque Morto, Aldeia Queimada), the first of the two
* "Ruins" (missions 4-6 plus Cripta de Cinzas, mission 7 — it's set under the temple ruins
* above it, so it joins them as that location's 4th fight instead of Cemetery), the Inn
* (mission 8), Dungeon (Colina Morta and Passagem Antiga, missions 9-10 — moved here from
* Cemetery, which sits locked with no missions until more content backfills it), and the
* Dungeon also picked up a third mission, "As Profundezas Famintas" (mission 11 —
* deeper still, a new unique boss). The Fortified Temple Complex's own two missions
* ("vertente"/"portao", titled R1/R2 as placeholders) are locked out of the map entirely
* for now — pushed later in the story than mission 12, not ready for a real pass yet — same
* "no missionIds" treatment as every other undeveloped location below. Those (Village,
* Farm, the second Ruins, Cemetery, Frozen Swamp, Forest, Misty Cave — the last reserved
* for a future troll encounter arc, City — reserved for the second Ferreiro) render
* permanently locked until missions are written for them — "we'll open up more as we make
* more missions." */
var WORLD_LOCATIONS = [
	{
		id: "stonebridge",
		name: "Stone Bridge",
		x: 14,
		y: 71,
		missionIds: [
			"vau",
			"bosque",
			"aldeia"
		]
	},
	{
		id: "ruins",
		name: "Ruins",
		x: 8,
		y: 56,
		missionIds: [
			"muralha",
			"fortaleza",
			"templo",
			"cripta"
		]
	},
	{
		id: "estalagem",
		name: "Inn",
		x: 48,
		y: 39,
		missionIds: ["estalagem"]
	},
	{
		id: "dungeon",
		name: "Dungeon",
		x: 60,
		y: 64,
		missionIds: [
			"colina",
			"passagem",
			"profundezas"
		]
	},
	{
		id: "vertente",
		name: "Fortified Temple Complex",
		x: 78,
		y: 7,
		missionIds: []
	},
	{
		id: "village",
		name: "Village",
		x: 17,
		y: 27,
		missionIds: []
	},
	{
		id: "farm",
		name: "Farm",
		x: 89,
		y: 46,
		missionIds: []
	},
	{
		id: "ruins2",
		name: "Ruins",
		x: 12,
		y: 43,
		missionIds: []
	},
	{
		id: "cemetery",
		name: "Cemetery",
		x: 46,
		y: 69,
		missionIds: []
	},
	{
		id: "frozen-swamp",
		name: "Frozen Swamp",
		x: 20,
		y: 86,
		missionIds: []
	},
	{
		id: "forest",
		name: "Forest",
		x: 85,
		y: 79,
		missionIds: []
	},
	{
		id: "misty-cave",
		name: "Misty Cave",
		x: 63,
		y: 19,
		missionIds: []
	},
	{
		id: "city",
		name: "City",
		x: 35,
		y: 50,
		missionIds: []
	}
];
function locationForMission(missionId) {
	return WORLD_LOCATIONS.find((l) => l.missionIds.includes(missionId));
}
function missionsForLocation(loc) {
	return loc.missionIds.map((id) => missionById(id)).filter((m) => !!m);
}
/** Mission index at which a hero first appears as a player spawn — computed from
* MISSIONS itself, not hardcoded, so a newly added hero (e.g. the next two joining the
* roster) gets gated automatically the moment their first mission is authored. */
var HERO_JOIN_INDEX = (() => {
	const out = {};
	for (const m of MISSIONS) {
		if (m.hub) continue;
		for (const s of m.playerSpawns) if (out[s.name] == null || m.index < out[s.name]) out[s.name] = m.index;
	}
	return out;
})();
/** Whether a hero has joined the party yet — false before the mission they first appear
* in has been reached, so their gear doesn't show up in party-wide UI (Ferreiro,
* Mochila) before the story actually recruits them. Recruited once the PRECEDING mission
* is completed, since that's the one whose briefing/outcome frees them — e.g. Salazar
* (first playerSpawn in "cripta", index 6) becomes recruited on completing mission 06,
* "Nave Enforcada" (index 5), where Asherah falls and he's found as her prisoner. */
function heroRecruited(name, completed) {
	const joinIndex = HERO_JOIN_INDEX[name] ?? 0;
	if (joinIndex <= 0) return true;
	return completed.some((id) => (missionById(id)?.index ?? -1) >= joinIndex - 1);
}
var TILE_VARIANT_COUNT = {
	plains: 3,
	woods: 2,
	ruins: 2,
	water: 2,
	ember: 2,
	hill: 2,
	flame: 2,
	column: 2,
	nave: 2,
	barricade: 2,
	highwood: 2,
	highruin: 2,
	chest: 2,
	door: 2,
	deadtree: 1,
	void: 1
};
var TILES = Object.keys(TILE_VARIANT_COUNT);
var SPRITES = [
	"kael",
	"nira",
	"voss",
	"salazar",
	"malrec",
	"aldric",
	"soldier",
	"brigand",
	"captain",
	"sorcerer",
	"horror",
	"pikeman",
	"wardog",
	"troll",
	"familiar"
];
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		const fail = () => reject(/* @__PURE__ */ new Error(`Falha ao carregar ${src}`));
		const t = window.setTimeout(fail, 8e3);
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
var HERO_IDLE = /* @__PURE__ */ new Set([
	"kael",
	"nira",
	"voss",
	"salazar",
	"horror"
]);
async function loadGameArt() {
	const tiles = {};
	await Promise.all(TILES.map(async (id) => {
		const n = TILE_VARIANT_COUNT[id];
		tiles[id] = await Promise.all(Array.from({ length: n }, (_, i) => loadImage(`/game/tiles/${id}${String(i + 1).padStart(2, "0")}.png?v=6`)));
	}));
	const decorations = {};
	await Promise.all(Object.keys(DECORATIONS).map(async (id) => {
		decorations[id] = await loadImage(decorationImage(id));
	}));
	const sprites = {};
	const attacks = {};
	await Promise.all(SPRITES.map(async (id) => {
		const n = HERO_IDLE.has(id) ? 12 : 4;
		const cacheBust = id === "troll" ? "?v=11" : id === "horror" ? "?v=2" : "";
		sprites[id] = await Promise.all(Array.from({ length: n }, (_, i) => loadImage(`/game/sprites/${id}/${i + 1}.png${cacheBust}`)));
	}));
	await Promise.all([
		"kael",
		"nira",
		"voss",
		"salazar",
		"malrec",
		"aldric"
	].map(async (id) => {
		const n = id === "kael" ? 12 : 4;
		attacks[id] = await Promise.all(Array.from({ length: n }, (_, i) => loadImage(`/game/sprites/${id}/atk-${i + 1}.png${id === "kael" ? "?v=2" : ""}`)));
	}));
	const impact = await Promise.all([
		1,
		2,
		3,
		4
	].map((n) => loadImage(`/game/fx/impact-${n}.png`)));
	return {
		tiles,
		decorations,
		sprites,
		attacks,
		idles: { kael: await Promise.all(Array.from({ length: 36 }, (_, i) => loadImage(`/game/sprites/kael/stand-${i + 1}.png?v=2`))) },
		walkDirs: { kael: {
			front: await loadImage("/game/sprites/kael/walk-front.png"),
			back: await loadImage("/game/sprites/kael/walk-back.png"),
			side: await loadImage("/game/sprites/kael/walk-side.png")
		} },
		impact
	};
}
var ctx = null;
var master = null;
var sfx = null;
var music = null;
var muted = false;
var musicTimer = 0;
var htmlPrime = null;
var retryTimer = 0;
var htmlUrls = {};
if (typeof window !== "undefined") {
	const g = window;
	if (g.__brasaMusic) {
		clearInterval(g.__brasaMusic);
		g.__brasaMusic = 0;
	}
}
function wavTone(freq, dur, volume, kind = "sine") {
	const key = `${kind}:${freq}:${dur}:${volume}`;
	if (htmlUrls[key]) return htmlUrls[key];
	const sr = 22050;
	const n = Math.max(2, Math.floor(sr * dur));
	const pcm = new Int16Array(n);
	for (let i = 0; i < n; i++) {
		const env = Math.min(1, i / (sr * .012)) * Math.min(1, (n - i) / (sr * .05));
		let s;
		if (kind === "noise") s = Math.random() * 2 - 1;
		else if (kind === "square") s = Math.sin(2 * Math.PI * freq * i / sr) > 0 ? 1 : -1;
		else s = Math.sin(2 * Math.PI * freq * i / sr);
		pcm[i] = s * env * volume * 32767 | 0;
	}
	const bytes = /* @__PURE__ */ new ArrayBuffer(44 + n * 2);
	const v = new DataView(bytes);
	const ascii = (o, t) => {
		for (let i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i));
	};
	ascii(0, "RIFF");
	v.setUint32(4, 36 + n * 2, true);
	ascii(8, "WAVE");
	ascii(12, "fmt ");
	v.setUint32(16, 16, true);
	v.setUint16(20, 1, true);
	v.setUint16(22, 1, true);
	v.setUint32(24, sr, true);
	v.setUint32(28, sr * 2, true);
	v.setUint16(32, 2, true);
	v.setUint16(34, 16, true);
	ascii(36, "data");
	v.setUint32(40, n * 2, true);
	new Uint8Array(bytes, 44).set(new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength));
	const url = URL.createObjectURL(new Blob([bytes], { type: "audio/wav" }));
	htmlUrls[key] = url;
	return url;
}
function playHtml(url, volume = .7) {
	if (muted || typeof Audio === "undefined") return;
	const a = new Audio(url);
	a.volume = Math.min(1, volume);
	a.play().catch(() => {});
}
function ac() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const C = window.AudioContext || window.webkitAudioContext;
		if (!C) return null;
		ctx = new C({ latencyHint: "interactive" });
		master = ctx.createGain();
		sfx = ctx.createGain();
		music = ctx.createGain();
		sfx.gain.value = 1;
		music.gain.value = .35;
		sfx.connect(master);
		music.connect(master);
		master.connect(ctx.destination);
		master.gain.value = muted ? 0 : 1;
	}
	return ctx;
}
function silentTick(c) {
	const buf = c.createBuffer(1, 1, c.sampleRate);
	const src = c.createBufferSource();
	src.buffer = buf;
	src.connect(c.destination);
	try {
		src.start(0);
	} catch {}
}
function htmlUnlock() {
	if (typeof Audio === "undefined") return;
	if (!htmlPrime) {
		htmlPrime = new Audio(wavTone(440, .04, 8e-4));
		htmlPrime.volume = .01;
	}
	htmlPrime.currentTime = 0;
	htmlPrime.play().catch(() => {});
}
function unlockAudio() {
	htmlUnlock();
	const c = ac();
	if (!c) return;
	if (c.state === "suspended") c.resume().then(() => {
		if (ctx && ctx.state === "running") silentTick(ctx);
	});
	silentTick(c);
}
function setMuted(next) {
	muted = next;
	if (master && ctx) master.gain.setTargetAtTime(next ? 0 : 1, ctx.currentTime, .02);
	if (!next) unlockAudio();
	else stopMusic();
}
function beep(freq, dur, type, gain = .22, slide = 0) {
	if (muted) return;
	const c = ac();
	if (!c || c.state !== "running") {
		playHtml(wavTone(freq, dur, Math.min(.9, gain * 2.4), type === "square" ? "square" : "sine"), Math.min(1, gain * 3));
		if (c && c.state === "suspended") c.resume();
		return;
	}
	if (!sfx) return;
	const t0 = c.currentTime;
	const osc = c.createOscillator();
	const g = c.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, t0);
	if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t0 + dur);
	g.gain.setValueAtTime(1e-4, t0);
	g.gain.exponentialRampToValueAtTime(gain, t0 + .01);
	g.gain.exponentialRampToValueAtTime(1e-4, t0 + dur);
	osc.connect(g);
	g.connect(sfx);
	osc.start(t0);
	osc.stop(t0 + dur + .02);
}
function noise(dur, gain = .22) {
	if (muted) return;
	const c = ac();
	if (!c || c.state !== "running") {
		playHtml(wavTone(180, dur, Math.min(.8, gain * 2), "noise"), Math.min(1, gain * 2.5));
		if (c && c.state === "suspended") c.resume();
		return;
	}
	if (!sfx) return;
	const n = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate);
	const data = n.getChannelData(0);
	for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
	const src = c.createBufferSource();
	src.buffer = n;
	const g = c.createGain();
	const t0 = c.currentTime;
	g.gain.setValueAtTime(gain, t0);
	g.gain.exponentialRampToValueAtTime(1e-4, t0 + dur);
	const f = c.createBiquadFilter();
	f.type = "bandpass";
	f.frequency.value = 1800;
	src.connect(f);
	f.connect(g);
	g.connect(sfx);
	src.start(t0);
	src.stop(t0 + dur + .02);
}
var sfxPlay = {
	select: () => beep(520, .08, "triangle", .22),
	move: () => beep(180, .1, "sine", .2, -40),
	ui: () => beep(640, .07, "square", .18),
	hit: () => {
		noise(.1, .28);
		beep(140, .14, "sawtooth", .22, -80);
	},
	crit: () => {
		noise(.14, .32);
		beep(320, .18, "square", .22, 80);
	},
	death: () => beep(90, .4, "sawtooth", .24, -50),
	turn: () => beep(300, .2, "triangle", .2, 120),
	win: () => {
		beep(392, .18, "triangle", .22);
		setTimeout(() => beep(523, .22, "triangle", .22), 140);
		setTimeout(() => beep(659, .4, "triangle", .24), 280);
	},
	lose: () => beep(196, .5, "sine", .24, -80),
	spell: () => {
		beep(440, .14, "sine", .18, 220);
		beep(660, .18, "triangle", .14, 300);
	},
	heal: () => {
		beep(523, .14, "sine", .16, 90);
		setTimeout(() => beep(784, .2, "sine", .15, 60), 90);
	},
	stun: () => {
		noise(.07, .2);
		beep(210, .24, "square", .18, -160);
	},
	chest: () => {
		beep(700, .05, "square", .14);
		setTimeout(() => beep(920, .09, "triangle", .18, 220), 60);
	},
	loot: () => {
		beep(880, .06, "triangle", .2);
		setTimeout(() => beep(1180, .09, "triangle", .18), 70);
	},
	thrust: () => {
		noise(.05, .16);
		beep(260, .09, "sawtooth", .2, 260);
	},
	sweep: () => {
		beep(180, .16, "sawtooth", .2, 90);
		noise(.12, .22);
	},
	trip: () => {
		noise(.09, .24);
		beep(160, .2, "square", .2, -140);
		setTimeout(() => beep(90, .18, "sawtooth", .18, -60), 90);
	}
};
var introEl = null;
var battleEl = null;
var earlyEl = null;
var templeEl = null;
var aldeiaEl = null;
var siegeEl = null;
var innEl = null;
var hillEl = null;
var portaoEl = null;
var worldMapEl = null;
var currentTheme = "intro";
if (typeof window !== "undefined") {
	const g = window;
	if (g.__emberIntro) introEl = g.__emberIntro;
}
function attachTrack(el, volume) {
	el.loop = true;
	el.preload = "auto";
	el.volume = volume;
	if (typeof document !== "undefined" && document.body && !el.isConnected) {
		el.setAttribute("playsinline", "");
		document.body.appendChild(el);
	}
	return el;
}
function getTrack(theme) {
	if (typeof Audio === "undefined") return null;
	if (theme === "intro") return menuElement();
	if (theme === "temple") {
		if (!templeEl) templeEl = attachTrack(new Audio("/game/music/temple.mp3"), .42);
		return templeEl;
	}
	if (theme === "aldeia") {
		if (!aldeiaEl) aldeiaEl = attachTrack(new Audio("/game/music/aldeia.mp3?v=2"), .4);
		return aldeiaEl;
	}
	if (theme === "siege") {
		if (!siegeEl) siegeEl = attachTrack(new Audio("/game/music/siege.mp3"), .4);
		return siegeEl;
	}
	if (theme === "inn") {
		if (!innEl) innEl = attachTrack(new Audio("/game/music/inn.mp3"), .4);
		return innEl;
	}
	if (theme === "hill") {
		if (!hillEl) hillEl = attachTrack(new Audio("/game/music/hill.mp3"), .4);
		return hillEl;
	}
	if (theme === "portao") {
		if (!portaoEl) portaoEl = attachTrack(new Audio("/game/music/portao.mp3"), .4);
		return portaoEl;
	}
	if (theme === "early") {
		if (!earlyEl) earlyEl = attachTrack(new Audio("/game/music/early.mp3"), .4);
		return earlyEl;
	}
	if (theme === "worldMap") {
		if (!worldMapEl) worldMapEl = attachTrack(new Audio("/game/music/worldmap.mp3"), .4);
		return worldMapEl;
	}
	if (!battleEl) battleEl = attachTrack(new Audio("/game/music/music.mp3"), .4);
	return battleEl;
}
function menuElement() {
	if (typeof Audio === "undefined") return null;
	if (typeof document !== "undefined") document.querySelectorAll("audio").forEach((node) => {
		if (node === introEl) return;
		if (node.id === "ember-intro" || /\/game\/music\/intro\.(wav|mp3)/.test(node.src)) {
			node.pause();
			node.remove();
		}
	});
	if (introEl) return introEl;
	const node = new Audio("/game/music/intro.wav");
	node.id = "ember-intro";
	node.loop = true;
	node.preload = "auto";
	node.volume = .7;
	if (typeof document !== "undefined" && document.body) {
		node.setAttribute("playsinline", "");
		document.body.appendChild(node);
	}
	introEl = node;
	if (typeof window !== "undefined") window.__emberIntro = node;
	return node;
}
function kickPlay(el) {
	if (muted) return;
	if (!el.paused && !el.ended) return;
	el.muted = false;
	el.defaultMuted = false;
	el.volume = el === introEl ? .7 : el === templeEl ? .42 : .4;
	const tryOnce = () => {
		if (muted) return;
		if (!el.paused && !el.ended) {
			if (retryTimer) {
				clearInterval(retryTimer);
				retryTimer = 0;
			}
			return;
		}
		el.play().then(() => {
			if (retryTimer) {
				clearInterval(retryTimer);
				retryTimer = 0;
			}
		}).catch(() => {
			if (muted || retryTimer) return;
			retryTimer = window.setInterval(() => {
				if (muted) return;
				const want = currentTheme === "intro" ? menuElement() : getTrack(currentTheme);
				if (!want || !want.paused && !want.ended) {
					if (retryTimer) {
						clearInterval(retryTimer);
						retryTimer = 0;
					}
					return;
				}
				want.play().then(() => {
					if (retryTimer) {
						clearInterval(retryTimer);
						retryTimer = 0;
					}
				}).catch(() => {});
			}, 400);
		});
	};
	tryOnce();
}
function playTheme(theme) {
	currentTheme = theme;
	if (muted) return;
	const want = getTrack(theme);
	if (introEl && introEl !== want) introEl.pause();
	if (battleEl && battleEl !== want) {
		battleEl.pause();
		battleEl.currentTime = 0;
	}
	if (earlyEl && earlyEl !== want) {
		earlyEl.pause();
		earlyEl.currentTime = 0;
	}
	if (templeEl && templeEl !== want) {
		templeEl.pause();
		templeEl.currentTime = 0;
	}
	if (aldeiaEl && aldeiaEl !== want) {
		aldeiaEl.pause();
		aldeiaEl.currentTime = 0;
	}
	if (siegeEl && siegeEl !== want) {
		siegeEl.pause();
		siegeEl.currentTime = 0;
	}
	if (innEl && innEl !== want) {
		innEl.pause();
		innEl.currentTime = 0;
	}
	if (hillEl && hillEl !== want) {
		hillEl.pause();
		hillEl.currentTime = 0;
	}
	if (portaoEl && portaoEl !== want) {
		portaoEl.pause();
		portaoEl.currentTime = 0;
	}
	if (worldMapEl && worldMapEl !== want) {
		worldMapEl.pause();
		worldMapEl.currentTime = 0;
	}
	if (!want) return;
	kickPlay(want);
}
function playMenuMusic() {
	currentTheme = "intro";
	if (muted) return;
	battleEl?.pause();
	earlyEl?.pause();
	templeEl?.pause();
	aldeiaEl?.pause();
	siegeEl?.pause();
	innEl?.pause();
	hillEl?.pause();
	portaoEl?.pause();
	worldMapEl?.pause();
	const el = menuElement();
	if (!el) return;
	kickPlay(el);
}
function startMusic() {
	playTheme(currentTheme);
}
function stopMusic() {
	if (musicTimer) {
		clearInterval(musicTimer);
		musicTimer = 0;
	}
	if (retryTimer) {
		clearInterval(retryTimer);
		retryTimer = 0;
	}
	if (typeof window !== "undefined") {
		const g = window;
		if (g.__brasaMusic) {
			clearInterval(g.__brasaMusic);
			g.__brasaMusic = 0;
		}
	}
	introEl?.pause();
	battleEl?.pause();
	earlyEl?.pause();
	templeEl?.pause();
	aldeiaEl?.pause();
	siegeEl?.pause();
	innEl?.pause();
	hillEl?.pause();
	portaoEl?.pause();
	worldMapEl?.pause();
}
function resumeAudio() {
	unlockAudio();
}
function installAudioUnlock() {
	if (typeof window === "undefined") return () => {};
	const arm = () => {
		unlockAudio();
		if (currentTheme === "intro") playMenuMusic();
		else startMusic();
	};
	const opts = { capture: true };
	window.addEventListener("pointerdown", arm, opts);
	window.addEventListener("keydown", arm, opts);
	return () => {
		window.removeEventListener("pointerdown", arm, opts);
		window.removeEventListener("keydown", arm, opts);
	};
}
function BattleCanvas({ engine, onHud, paused = false }) {
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const hudKey = (0, import_react.useRef)("");
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let last = performance.now();
		let running = true;
		let dragging = false;
		let dragged = false;
		let mouseDown = false;
		let lastX = 0;
		let lastY = 0;
		const held = /* @__PURE__ */ new Set();
		const pointers = /* @__PURE__ */ new Map();
		let pinchDist = 0;
		let pinched = false;
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const w = wrap.clientWidth;
			const h = wrap.clientHeight;
			canvas.width = Math.max(1, Math.floor(w * dpr));
			canvas.height = Math.max(1, Math.floor(h * dpr));
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(wrap);
		const loop = (now) => {
			if (!running) return;
			const dt = Math.min(.05, (now - last) / 1e3);
			last = now;
			if (!paused) {
				const speed = 520;
				let px = 0;
				let py = 0;
				if (held.has("ArrowLeft") || held.has("KeyA")) px -= 1;
				if (held.has("ArrowRight") || held.has("KeyD")) px += 1;
				if (held.has("ArrowUp") || held.has("KeyW")) py -= 1;
				if (held.has("ArrowDown") || held.has("KeyS")) py += 1;
				if (px || py) {
					const mag = Math.hypot(px, py) || 1;
					engine.panBy(px / mag * speed * dt, py / mag * speed * dt);
				}
				engine.tick(dt);
			}
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			engine.render(ctx, wrap.clientWidth, wrap.clientHeight, dpr);
			const hud = engine.getHud();
			const k = [
				hud.mode,
				hud.phase,
				hud.selected?.id,
				hud.canAttack,
				hud.banner,
				hud.result,
				hud.turn,
				hud.playerAlive,
				hud.enemyAlive,
				hud.forecast?.defender,
				hud.forecast?.dmgOut,
				hud.inspected?.id,
				hud.pendingFoe?.id,
				hud.selected?.hp,
				hud.inspected?.hp,
				hud.selected?.bag.mid,
				hud.selected?.bag.weak,
				hud.selected?.bag.potent,
				hud.selected?.bag.disease,
				hud.tip,
				hud.zoom,
				hud.speedMode,
				hud.winAvailable,
				hud.spellReady,
				hud.turnQueue.find((q) => q.active)?.id,
				hud.turnQueue.map((q) => q.acted ? "1" : "0").join("")
			].join("|");
			if (k !== hudKey.current) {
				hudKey.current = k;
				onHud(hud);
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		const pos = (e) => {
			const r = canvas.getBoundingClientRect();
			return {
				x: e.clientX - r.left,
				y: e.clientY - r.top
			};
		};
		const onDown = (e) => {
			if (paused) return;
			if (e.pointerType === "mouse" && e.button !== 0) return;
			const p = pos(e);
			if (e.pointerType === "mouse") {
				if (engine.getHud().mode === "awaitSpell") {
					engine.pointerDown(p.x, p.y, "click");
					return;
				}
				mouseDown = true;
				dragging = true;
				dragged = false;
				lastX = e.clientX;
				lastY = e.clientY;
				canvas.setPointerCapture(e.pointerId);
				canvas.style.cursor = "grabbing";
				return;
			}
			pointers.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY
			});
			canvas.setPointerCapture(e.pointerId);
			if (pointers.size >= 2) {
				const pts = [...pointers.values()];
				pinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
				pinched = true;
				dragging = false;
				dragged = true;
				return;
			}
			dragging = true;
			dragged = false;
			lastX = e.clientX;
			lastY = e.clientY;
			if (engine.getHud().mode === "awaitSpell") engine.pointerMove(p.x, p.y);
		};
		const onMove = (e) => {
			if (pointers.has(e.pointerId)) pointers.set(e.pointerId, {
				x: e.clientX,
				y: e.clientY
			});
			if (pointers.size >= 2 && pinchDist > 0) {
				const pts = [...pointers.values()];
				const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
				if (d > pinchDist * 1.22) {
					engine.cycleZoom(1);
					pinchDist = d;
				} else if (d < pinchDist * .82) {
					engine.cycleZoom(-1);
					pinchDist = d;
				}
				return;
			}
			const p = pos(e);
			const spell = engine.getHud().mode === "awaitSpell";
			if (e.pointerType === "mouse" && mouseDown) {
				const dx = e.clientX - lastX;
				const dy = e.clientY - lastY;
				if (Math.abs(dx) + Math.abs(dy) > 3) dragged = true;
				if (dragged) {
					engine.panBy(-dx, -dy);
					lastX = e.clientX;
					lastY = e.clientY;
				}
				return;
			}
			if (dragging && e.pointerType !== "mouse" && !spell) {
				const dx = e.clientX - lastX;
				const dy = e.clientY - lastY;
				if (Math.abs(dx) + Math.abs(dy) > 3) dragged = true;
				if (dragged) {
					engine.panBy(-dx, -dy);
					lastX = e.clientX;
					lastY = e.clientY;
				}
			} else {
				if (dragging && e.pointerType !== "mouse" && spell) {
					const dx = e.clientX - lastX;
					const dy = e.clientY - lastY;
					if (Math.abs(dx) + Math.abs(dy) > 10) dragged = true;
				}
				engine.pointerMove(p.x, p.y);
			}
		};
		const onUp = (e) => {
			if (e.pointerType === "mouse") {
				canvas.style.cursor = "";
				if (!mouseDown) return;
				mouseDown = false;
				dragging = false;
				if (!dragged && !paused) {
					const p = pos(e);
					engine.pointerDown(p.x, p.y, "click");
				}
				dragged = false;
				return;
			}
			pointers.delete(e.pointerId);
			if (pointers.size < 2) pinchDist = 0;
			if (pinched) {
				if (pointers.size === 0) pinched = false;
				dragging = false;
				return;
			}
			if (!dragging) return;
			dragging = false;
			if (!dragged && !paused) {
				const p = pos(e);
				engine.pointerDown(p.x, p.y, "tap");
			}
		};
		const onWheel = (e) => {
			e.preventDefault();
			engine.cycleZoom(e.deltaY > 0 ? -1 : 1);
		};
		const onKey = (e) => {
			if (paused) return;
			if ([
				"ArrowLeft",
				"ArrowRight",
				"ArrowUp",
				"ArrowDown",
				"Space",
				"Enter",
				"Escape",
				"KeyE",
				"KeyZ",
				"KeyW",
				"KeyA",
				"KeyS",
				"KeyD"
			].includes(e.code)) e.preventDefault();
			held.add(e.code);
			if (e.code === "ArrowLeft" || e.code === "ArrowRight" || e.code === "ArrowUp" || e.code === "ArrowDown" || e.code === "KeyW" || e.code === "KeyA" || e.code === "KeyS" || e.code === "KeyD") return;
			engine.keyDown(e.code);
		};
		const onKeyUp = (e) => {
			held.delete(e.code);
		};
		const onMenu = (e) => {
			e.preventDefault();
			if (paused) return;
			const hud = engine.getHud();
			if (!(hud.mode === "awaitAction" || hud.mode === "awaitAttack" || hud.mode === "selected" || hud.mode === "awaitSpell") || hud.busy) return;
			engine.cancel();
		};
		canvas.addEventListener("pointerdown", onDown);
		canvas.addEventListener("pointermove", onMove);
		canvas.addEventListener("pointerup", onUp);
		canvas.addEventListener("pointercancel", onUp);
		canvas.addEventListener("wheel", onWheel, { passive: false });
		canvas.addEventListener("contextmenu", onMenu);
		window.addEventListener("keydown", onKey);
		window.addEventListener("keyup", onKeyUp);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			ro.disconnect();
			canvas.removeEventListener("pointerdown", onDown);
			canvas.removeEventListener("pointermove", onMove);
			canvas.removeEventListener("pointerup", onUp);
			canvas.removeEventListener("pointercancel", onUp);
			canvas.removeEventListener("wheel", onWheel);
			canvas.removeEventListener("contextmenu", onMenu);
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("keyup", onKeyUp);
		};
	}, [
		engine,
		onHud,
		paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: "relative h-full w-full min-h-0 touch-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "block h-full w-full touch-none"
		})
	});
}
var POTIONS = [
	"weak",
	"mid",
	"potent",
	"disease",
	"manaSmall",
	"manaMid",
	"manaLarge"
];
/** Paper-doll equipment view for one hero. Clicking a slot opens a picker of compatible
* OWNED items — Mão Principal lists owned weapons for this class (save.weapons), other
* slots list owned EQUIPMENT of that slot type from the party's shared, unassigned stash
* (save.looseEquipment) — gear found in chests lands there, never auto-equipped onto
* whoever opened the chest, so it shows up here for the player to assign wherever they
* want. */
function PaperDollScreen({ heroName, classId, save, onClose, onSwitchToBackpack, onEquipWeapon, onEquipItem }) {
	const [picker, setPicker] = (0, import_react.useState)(null);
	const weaponId = save.equipped[heroName];
	const weapon = weaponId ? WEAPONS[weaponId] : null;
	const enh = weaponId ? save.weapons[weaponId] ?? 0 : 0;
	const equip = save.equipment[heroName] ?? {};
	const ownedWeapons = [...weaponsForClass(classId)].filter((w) => save.weapons[w.id] != null).sort((a, b) => weaponPower(a) - weaponPower(b));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-40 bg-bg/85 flex items-center justify-center p-4",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md max-h-[88dvh] overflow-y-auto bg-surface border border-border rounded-xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl leading-tight",
						children: heroName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: CLASSES[classId].name
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [onSwitchToBackpack && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onSwitchToBackpack,
							className: "h-8 px-2.5 rounded-md border border-border text-xs",
							children: "Mochila"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "size-8 grid place-items-center rounded-md border border-border",
							"aria-label": "Fechar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted mb-2",
					children: "Mão Principal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !onEquipWeapon,
					onClick: () => setPicker("mainHand"),
					className: "w-full flex items-center gap-2 bg-bg border border-border rounded-md px-2 py-1.5 mb-4 text-left disabled:cursor-default",
					children: weapon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: weaponIcon(weapon.id),
						alt: "",
						className: "size-9 rounded-sm object-cover shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex-1 text-sm min-w-0",
						children: [
							weapon.name,
							" ",
							enh > 0 ? `+${enh}` : "",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-[11px] text-muted tabular-nums",
								children: [
									weaponDiceLabel(weapon.id),
									" · ",
									weaponRangeLabel(weapon.id)
								]
							}),
							weapon.bonusClass && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `block text-[11px] tabular-nums ${weapon.bonusClass === classId ? "text-accent" : "text-muted"}`,
								title: `+10% de dano para a classe ${CLASSES[weapon.bonusClass].name}`,
								children: ["+10% dano · ", CLASSES[weapon.bonusClass].name]
							})
						]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Vazia · equipe com o Ferreiro na Estalagem"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted mb-2",
					children: "Equipamento"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-1.5",
					children: EQUIPMENT_SLOTS.map((s) => {
						const itemId = equip[s.id];
						const item = itemId ? EQUIPMENT[itemId] : null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPicker(s.id),
							className: "bg-bg border border-border rounded-md px-2 py-1.5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-wide text-muted",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs truncate text-fg/90",
								children: item ? item.name : "Vazio"
							})]
						}, s.id);
					})
				})
			]
		}), picker != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-50 bg-bg/85 flex items-center justify-center p-4",
			onClick: (e) => {
				if (e.target === e.currentTarget) setPicker(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm max-h-[80dvh] overflow-y-auto bg-surface border border-border rounded-xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-tight",
						children: picker === "mainHand" ? "Mão Principal" : EQUIPMENT_SLOTS.find((s) => s.id === picker)?.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPicker(null),
						className: "size-8 grid place-items-center rounded-md border border-border",
						"aria-label": "Fechar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}), picker === "mainHand" ? ownedWeapons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-1.5",
					children: ownedWeapons.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onEquipWeapon?.(heroName, w.id);
							setPicker(null);
						},
						disabled: w.id === weaponId,
						className: "flex items-center gap-2 bg-bg border border-border rounded-md px-2 py-1.5 text-left disabled:opacity-50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: weaponIcon(w.id),
								alt: "",
								className: "size-9 rounded-sm object-cover shrink-0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex-1 text-sm min-w-0",
								children: [
									w.name,
									" ",
									save.weapons[w.id] ? `+${save.weapons[w.id]}` : "",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-[11px] text-muted tabular-nums",
										children: [
											weaponDiceLabel(w.id),
											" · ",
											weaponRangeLabel(w.id)
										]
									}),
									w.bonusClass && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `block text-[11px] tabular-nums ${w.bonusClass === classId ? "text-accent" : "text-muted"}`,
										title: `+10% de dano para a classe ${CLASSES[w.bonusClass].name}`,
										children: ["+10% dano · ", CLASSES[w.bonusClass].name]
									})
								]
							}),
							w.id === weaponId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted shrink-0",
								children: "Equipada"
							})
						]
					}, w.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Nenhuma arma no saco ainda. Compre uma com o Ferreiro."
				}) : picker === "offHand" && offHandBlocked(weaponId ?? null) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Arma principal de duas mãos — sem mão livre para a secundária."
				}) : (() => {
					const slotKey = picker === "ring2" ? "ring1" : picker;
					const options = Object.values(EQUIPMENT).filter((it) => it.slot === slotKey && (save.looseEquipment[it.id] ?? 0) > 0 && (!it.usableBy || it.usableBy.includes(classId)));
					return options.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-1.5",
						children: options.map((it) => {
							const equipped = equip[picker] === it.id;
							const owned = save.looseEquipment[it.id] ?? 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: equipped || !onEquipItem,
								onClick: () => {
									onEquipItem?.(heroName, picker, it.id);
									setPicker(null);
								},
								className: "w-full flex items-center gap-2 bg-bg border border-border rounded-md px-2 py-1.5 text-left disabled:opacity-50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: equipmentIcon(it.id),
										alt: "",
										className: "size-9 rounded-sm object-cover shrink-0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1 text-sm min-w-0",
										children: [
											it.name,
											" ",
											owned > 1 ? `×${owned}` : "",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[11px] text-muted",
												children: it.kind === "shield" ? `Investida de Escudo · ${Math.round((it.dmgMul ?? .75) * 100)}% dano · 70% atordoa` : it.kind === "weapon" ? `${it.dice}D${it.faces} · Mão secundária` : equipmentStatSummary(it)
											})
										]
									}),
									equipped && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted shrink-0",
										children: "Equipado"
									})
								]
							}, it.id);
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Nenhum item no baú do grupo pra esse espaço ainda."
					});
				})()]
			})
		})]
	});
}
/** Backpack overview: this hero's potions/gazuas plus the party's shared weapon and equipment stash. */
function BackpackScreen({ heroName, save, onClose, onSwitchToDoll }) {
	const bag = save.bags[heroName] ?? EMPTY_BAG;
	const bagCount = POTIONS.reduce((n, kind) => n + (bag[kind] ?? 0), 0);
	const bagCapacity = 30;
	const weaponEntries = Object.entries(save.weapons).filter(([id]) => {
		const wielder = Object.entries(save.equipped).find(([, v]) => v === id)?.[0];
		return !wielder || heroRecruited(wielder, save.completed);
	});
	const wearerOf = (id) => Object.entries(save.equipment).find(([, slots]) => Object.values(slots).includes(id))?.[0];
	const equipmentEntries = Object.entries(save.looseEquipment).filter(([id]) => {
		const wearer = wearerOf(id);
		return !wearer || heroRecruited(wearer, save.completed);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 bg-bg/85 flex items-center justify-center p-4",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md max-h-[88dvh] overflow-y-auto border border-border rounded-xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/game/assets/backpack-bg.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover rounded-xl blur-[5px] scale-110 -z-10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/55 rounded-xl -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]",
							children: "Mochila"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-fg/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
							children: heroName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `text-[11px] tabular-nums mt-0.5 ${bagCount >= bagCapacity ? "text-danger" : "text-fg/70"} drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]`,
							children: [
								bagCount,
								" / ",
								bagCapacity,
								" itens"
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [onSwitchToDoll && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onSwitchToDoll,
							className: "h-8 px-2.5 rounded-md border border-border bg-bg/80 text-xs",
							children: "Equipamento"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "size-8 grid place-items-center rounded-md border border-border bg-bg/80",
							"aria-label": "Fechar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between bg-bg border border-border rounded-md px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "Ember"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm tabular-nums text-muted",
								children: ["×", save.ember ?? 0]
							})]
						}),
						POTIONS.map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/game/icons/potion-${kind}.png`,
									alt: "",
									className: "size-6 rounded-sm object-cover shrink-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex-1 text-sm truncate",
									children: potionLabel(kind)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm tabular-nums text-muted",
									children: ["×", bag[kind] ?? 0]
								})
							]
						}, kind)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/lockpick.png",
									alt: "",
									className: "size-6 rounded-sm object-cover shrink-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex-1 text-sm truncate",
									children: "Gazua"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm tabular-nums text-muted",
									children: ["×", bag.lockpick ?? 0]
								})
							]
						})
					]
				}),
				weaponEntries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted mt-4 mb-2",
					children: "Armas do grupo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-1.5",
					children: weaponEntries.map(([id, enh]) => {
						const w = WEAPONS[id];
						if (!w) return null;
						const wielder = Object.entries(save.equipped).find(([, v]) => v === id)?.[0];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: weaponIcon(id),
									alt: "",
									className: "size-6 rounded-sm object-cover shrink-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex-1 text-sm truncate",
									children: [
										w.name,
										" ",
										enh > 0 ? `+${enh}` : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted shrink-0",
									children: wielder ? `em ${wielder}` : "reserva"
								})
							]
						}, id);
					})
				})] }),
				equipmentEntries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted mt-4 mb-2",
					children: "Equipamento do grupo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-1.5",
					children: equipmentEntries.map(([id, count]) => {
						const it = EQUIPMENT[id];
						if (!it) return null;
						const wearer = wearerOf(id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: equipmentIcon(id),
									alt: "",
									className: "size-6 rounded-sm object-cover shrink-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex-1 text-sm truncate",
									children: [
										it.name,
										" ",
										count > 1 ? `×${count}` : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted shrink-0",
									children: wearer ? `em ${wearer}` : "reserva"
								})
							]
						}, id);
					})
				})] })
			]
		})
	});
}
var BAG_ICON$1 = "/game/icons/equipment/small-leather-pouch.png";
var NPCS = [
	{
		id: "brue",
		name: "Brue",
		role: "Estalajadeiro",
		portrait: "/game/portraits/brue.png",
		talk: "O fogo ainda pega. As camas, não. Ember compra o que sobrou da adega. Salazar pode levar frasco — não precisa, mas o copo não recusa.",
		shop: true
	},
	{
		id: "mudo",
		name: "O Mudo",
		role: "Viajante",
		portrait: "/game/portraits/mudo.png",
		talk: "Ele não fala. Nunca. Carrega uma pequena tábua de madeira e um pedaço de giz, e usa-a para responder quando não pode simplesmente apontar ou ir embora. Na tábua, uma frase aparece repetidamente: “Não fique parado por muito tempo.” Ninguém sabe de onde ele veio. Conhece estradas que não aparecem em mapa algum e parece sempre estar a caminho de algum lugar. Quando perguntam quanto custa uma bebida na velha adega, ele escreve apenas: “Ainda tem preço.”",
		shop: false
	},
	{
		id: "porao",
		name: "A Hóspede",
		role: "Porão",
		portrait: "/game/portraits/porao.png",
		talk: "Não subo. O chão me conhece. Tragam histórias, não luz. Se Brue ainda mede Ember, o mundo não acabou.",
		shop: false
	}
];
var POTION_ORDER = [
	"weak",
	"mid",
	"potent",
	"disease",
	"manaSmall",
	"manaMid",
	"manaLarge"
];
var ICONS = {
	weak: "/game/icons/potion-weak.png",
	mid: "/game/icons/potion-mid.png",
	potent: "/game/icons/potion-potent.png",
	disease: "/game/icons/potion-disease.png",
	manaSmall: "/game/icons/potion-manaSmall.png",
	manaMid: "/game/icons/potion-manaMid.png",
	manaLarge: "/game/icons/potion-manaLarge.png"
};
var EMPTY_CART = {
	weak: 0,
	mid: 0,
	potent: 0,
	disease: 0,
	manaSmall: 0,
	manaMid: 0,
	manaLarge: 0
};
function InnScreen({ bags, ember, muted, weapons, equipped, heroClass, save, onMute, onLeave, onPay, onBuyWeapon, onEquipWeapon, onEquipItem, onUpgradeWeapon, onSellWeapon }) {
	const [view, setView] = (0, import_react.useState)("npc");
	const [npc, setNpc] = (0, import_react.useState)(NPCS[0]);
	const [hero, setHero] = (0, import_react.useState)("Kael");
	const [cart, setCart] = (0, import_react.useState)({ ...EMPTY_CART });
	const [lockpickQty, setLockpickQty] = (0, import_react.useState)(0);
	const [note, setNote] = (0, import_react.useState)(null);
	const [invView, setInvView] = (0, import_react.useState)(null);
	const bag = bags[hero] ?? {
		mid: 0,
		weak: 0,
		potent: 0,
		disease: 0,
		manaSmall: 0,
		manaMid: 0,
		manaLarge: 0,
		lockpick: 0
	};
	const total = (0, import_react.useMemo)(() => POTION_ORDER.reduce((n, kind) => n + cart[kind] * POTION_PRICE[kind], 0) + lockpickQty * 6, [cart, lockpickQty]);
	const items = POTION_ORDER.reduce((n, kind) => n + cart[kind], 0) + lockpickQty;
	const remain = ember - total;
	const add = (kind, delta) => {
		setNote(null);
		setCart((prev) => {
			const next = Math.max(0, (prev[kind] ?? 0) + delta);
			const have = bag[kind] ?? 0;
			const cap = Math.max(0, POTION_CARRY_MAX[kind] - have);
			return {
				...prev,
				[kind]: Math.min(next, cap)
			};
		});
	};
	const addLockpick = (delta) => {
		setNote(null);
		setLockpickQty((prev) => {
			const next = Math.max(0, prev + delta);
			const cap = Math.max(0, 9 - (bag.lockpick ?? 0));
			return Math.min(next, cap);
		});
	};
	const pay = () => {
		if (items <= 0) {
			setNote("Nada no copo.");
			return;
		}
		if (remain < 0) {
			setNote(`Faltam ${-remain} Ember.`);
			return;
		}
		if (!onPay(hero, cart, lockpickQty)) {
			setNote("Brue recusou. Ember ou espaço.");
			return;
		}
		setCart({ ...EMPTY_CART });
		setLockpickQty(0);
		setNote("Pago. Os frascos foram para o saco.");
	};
	if (view === "smith") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmithPanel, {
		ember,
		muted,
		weapons,
		equipped,
		heroClass,
		save,
		onMute,
		onBack: () => setView("npc"),
		onBuyWeapon,
		onEquipWeapon,
		onEquipItem,
		onUpgradeWeapon,
		onSellWeapon
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/game/assets/brief-estalagem.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onLeave,
						className: "h-10 px-3 rounded-md border border-border bg-bg/70 text-xs uppercase tracking-[0.14em]",
						children: "Sair"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-muted",
							children: "Pousada à margem da cinza"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl leading-none",
							children: "A Estalagem do Osso Seco"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setInvView("pack"),
						className: "h-10 px-3 rounded-md border border-border bg-bg/70 text-xs uppercase tracking-[0.14em] flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: BAG_ICON$1,
							alt: "",
							className: "size-5 rounded-sm object-contain"
						}), "Mochila"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setView("smith"),
						className: "h-10 px-3 rounded-md border border-border bg-bg/70 text-xs uppercase tracking-[0.14em]",
						children: "Ferreiro"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm tabular-nums border border-border bg-bg/70 rounded-md px-2 py-1",
						children: ["Ember ", ember]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onMute,
						className: "size-10 grid place-items-center rounded-md border border-border bg-bg/70",
						"aria-label": "Som",
						children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-3 max-w-lg mx-auto w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: NPCS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setNpc(n),
							className: `rounded-xl border overflow-hidden text-left ${npc.id === n.id ? "border-accent" : "border-border"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: n.portrait,
								alt: "",
								className: "w-full aspect-[2/3] object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-2 py-1 text-xs font-medium truncate bg-surface/90",
								children: n.name
							})]
						}, n.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface/90 p-3 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: npc.portrait,
							alt: "",
							className: "h-24 w-16 object-cover rounded-md shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium",
								children: [
									npc.name,
									" · ",
									npc.role
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-fg/90",
								children: npc.talk
							})]
						})]
					}),
					npc.shop && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface/90 p-3 flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-muted",
								children: "Adega · quem leva"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1",
								children: HERO_NAMES.filter((name) => heroRecruited(name, save.completed)).map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: hero === name ? void 0 : "quiet",
									onClick: () => {
										setHero(name);
										setCart({ ...EMPTY_CART });
										setLockpickQty(0);
										setNote(null);
									},
									children: name
								}, name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [POTION_ORDER.map((kind) => {
									const price = POTION_PRICE[kind];
									const have = bag[kind] ?? 0;
									const qty = cart[kind] ?? 0;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 rounded-md border border-border px-2 py-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: ICONS[kind],
												alt: "",
												className: "size-6 rounded-sm object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex-1 text-sm min-w-0",
												children: [potionLabel(kind), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "block text-[11px] text-muted tabular-nums",
													children: [
														"saco ×",
														have,
														" · ",
														price,
														" Ember"
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "size-8 grid place-items-center rounded-md border border-border",
												onClick: () => add(kind, -1),
												disabled: qty <= 0,
												children: "−"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-6 text-center text-sm tabular-nums",
												children: qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "size-8 grid place-items-center rounded-md border border-border",
												onClick: () => add(kind, 1),
												disabled: have + qty >= POTION_CARRY_MAX[kind],
												children: "+"
											})
										]
									}, kind);
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-md border border-border px-2 py-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/game/icons/lockpick.png",
											alt: "",
											className: "size-6 rounded-sm object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex-1 text-sm min-w-0",
											children: ["Gazua", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block text-[11px] text-muted tabular-nums",
												children: [
													"saco ×",
													bag.lockpick ?? 0,
													" · ",
													6,
													" Ember"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "size-8 grid place-items-center rounded-md border border-border",
											onClick: () => addLockpick(-1),
											disabled: lockpickQty <= 0,
											children: "−"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-6 text-center text-sm tabular-nums",
											children: lockpickQty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "size-8 grid place-items-center rounded-md border border-border",
											onClick: () => addLockpick(1),
											disabled: (bag.lockpick ?? 0) + lockpickQty >= 9,
											children: "+"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `text-sm tabular-nums ${remain < 0 ? "text-danger" : "text-muted"}`,
								children: [
									"Conta ",
									total,
									" Ember · restam ",
									remain
								]
							}),
							note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-accent",
								children: note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "flex-1",
									disabled: items <= 0,
									onClick: pay,
									children: "Pagar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "quiet",
									onClick: () => {
										setCart({ ...EMPTY_CART });
										setNote(null);
									},
									children: "Limpar"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 p-4 pt-0 pb-[max(1rem,env(safe-area-inset-bottom))] max-w-lg mx-auto w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "w-full",
					onClick: onLeave,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Sair da estalagem"]
				})
			}),
			invView === "pack" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackpackScreen, {
				heroName: hero,
				save,
				onClose: () => setInvView(null),
				onSwitchToDoll: () => setInvView("doll")
			}),
			invView === "doll" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperDollScreen, {
				heroName: hero,
				classId: heroClass[hero] ?? "swordsman",
				save,
				onClose: () => setInvView(null),
				onSwitchToBackpack: () => setInvView("pack"),
				onEquipWeapon,
				onEquipItem
			})
		]
	});
}
function SmithPanel({ ember, muted, weapons, equipped, heroClass, save, onMute, onBack, onBuyWeapon, onEquipWeapon, onEquipItem, onUpgradeWeapon, onSellWeapon }) {
	const [hero, setHero] = (0, import_react.useState)("Kael");
	const [note, setNote] = (0, import_react.useState)(null);
	const [invView, setInvView] = (0, import_react.useState)(null);
	const classId = heroClass[hero];
	const pool = (0, import_react.useMemo)(() => [...weaponsForClass(classId)].sort((a, b) => weaponPower(a) - weaponPower(b)), [classId]);
	const equippedId = equipped[hero];
	const equippedWeapon = equippedId ? WEAPONS[equippedId] : null;
	const equippedEnh = equippedId ? weapons[equippedId] ?? 0 : 0;
	const owned = pool.filter((w) => weapons[w.id] != null && w.id !== equippedId);
	const notOwned = pool.filter((w) => weapons[w.id] == null);
	const buy = (weaponId) => {
		setNote(null);
		if (!onBuyWeapon(hero, weaponId)) {
			setNote("Vargan recusou. Falta Ember.");
			return;
		}
		setNote(`${WEAPONS[weaponId].name} comprada. Equipe no saco quando quiser.`);
	};
	const equip = (weaponId) => {
		setNote(null);
		onEquipWeapon(hero, weaponId);
	};
	const upgrade = () => {
		if (!equippedId) return;
		setNote(null);
		if (!onUpgradeWeapon(equippedId)) {
			setNote("Vargan recusou. Falta Ember ou já está no máximo.");
			return;
		}
		setNote(`${equippedWeapon?.name} aprimorada.`);
	};
	const sell = (weaponId) => {
		setNote(null);
		const value = onSellWeapon(weaponId);
		if (value === false) return;
		setNote(`${WEAPONS[weaponId].name} vendida por ${value} Ember.`);
	};
	const nextEnhCost = equippedEnh < WEAPON_MAX_ENH ? weaponEnhCost(equippedEnh + 1) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/game/portraits/vargan.png",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover",
				style: { objectPosition: "34% 42%" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bg/90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onBack,
						className: "h-10 px-3 rounded-md border border-border bg-bg/70 text-xs uppercase tracking-[0.14em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4 inline -mt-0.5" }), " Voltar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-muted",
							children: "A forja no porão"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl leading-none",
							children: "Vargan, o Ferreiro"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setInvView("pack"),
						className: "h-10 px-3 rounded-md border border-border bg-bg/70 text-xs uppercase tracking-[0.14em] flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: BAG_ICON$1,
							alt: "",
							className: "size-5 rounded-sm object-contain"
						}), "Mochila"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm tabular-nums border border-border bg-bg/70 rounded-md px-2 py-1",
						children: ["Ember ", ember]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onMute,
						className: "size-10 grid place-items-center rounded-md border border-border bg-bg/70",
						"aria-label": "Som",
						children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-3 max-w-lg ml-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-border bg-surface/90 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-fg/90",
						children: "“Aço, sangue, alma — tudo é forjado.” Ele não fala mais que isso. Aponta pra bigorna e espera você escolher."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface/90 p-3 flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: "Quem empunha"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: HERO_NAMES.filter((name) => heroRecruited(name, save.completed)).map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: hero === name ? void 0 : "quiet",
								onClick: () => {
									setHero(name);
									setNote(null);
								},
								children: name
							}, name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted mt-2",
							children: "Equipada"
						}),
						equippedWeapon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-md border border-accent px-2 py-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: weaponIcon(equippedWeapon.id),
									alt: "",
									className: "size-10 rounded-sm object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex-1 text-sm min-w-0",
									children: [
										equippedWeapon.name,
										" ",
										equippedEnh > 0 ? `+${equippedEnh}` : "",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block text-[11px] text-muted tabular-nums",
											children: [
												weaponDiceLabel(equippedWeapon.id),
												" ",
												equippedEnh > 0 ? `+ ${equippedEnh} aprimoro` : "",
												" · ",
												weaponRangeLabel(equippedWeapon.id)
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										disabled: nextEnhCost == null || ember < nextEnhCost,
										onClick: upgrade,
										children: nextEnhCost == null ? "Máx." : `+1 · ${nextEnhCost} Ember`
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "quiet",
										onClick: () => sell(equippedWeapon.id),
										children: [
											"Vender · ",
											weaponSellValue(equippedWeapon.id, equippedEnh),
											" Ember"
										]
									})]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Nenhuma arma equipada ainda."
						}),
						owned.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted mt-2",
							children: "No saco"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-1",
							children: owned.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-md border border-border px-2 py-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: weaponIcon(w.id),
										alt: "",
										className: "size-8 rounded-sm object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1 text-sm min-w-0",
										children: [
											w.name,
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block text-[11px] text-muted tabular-nums",
												children: [
													weaponDiceLabel(w.id),
													" · ",
													weaponRangeLabel(w.id)
												]
											}),
											w.bonusClass && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `block text-[11px] tabular-nums ${w.bonusClass === classId ? "text-accent" : "text-muted"}`,
												title: `+10% de dano para a classe ${CLASSES[w.bonusClass].name}`,
												children: ["+10% dano · ", CLASSES[w.bonusClass].name]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "quiet",
										onClick: () => equip(w.id),
										children: "Equipar"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "quiet",
										onClick: () => sell(w.id),
										children: [
											"Vender · ",
											weaponSellValue(w.id, weapons[w.id] ?? 0),
											" Ember"
										]
									})
								]
							}, w.id))
						})] }),
						notOwned.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted mt-2",
							children: "Na bancada"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-1",
							children: notOwned.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-md border border-border px-2 py-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: weaponIcon(w.id),
										alt: "",
										className: "size-8 rounded-sm object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1 text-sm min-w-0",
										children: [
											w.name,
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block text-[11px] text-muted tabular-nums",
												children: [
													weaponDiceLabel(w.id),
													" · ",
													weaponRangeLabel(w.id),
													" · ",
													w.price,
													" Ember"
												]
											}),
											w.bonusClass && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: `block text-[11px] tabular-nums ${w.bonusClass === classId ? "text-accent" : "text-muted"}`,
												title: `+10% de dano para a classe ${CLASSES[w.bonusClass].name}`,
												children: ["+10% dano · ", CLASSES[w.bonusClass].name]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										disabled: ember < w.price,
										onClick: () => buy(w.id),
										children: "Comprar"
									})
								]
							}, w.id))
						})] }),
						note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-accent",
							children: note
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 p-4 pt-0 pb-[max(1rem,env(safe-area-inset-bottom))] max-w-lg mx-auto w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "w-full",
					onClick: onBack,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Voltar à estalagem"]
				})
			}),
			invView === "pack" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackpackScreen, {
				heroName: hero,
				save,
				onClose: () => setInvView(null),
				onSwitchToDoll: () => setInvView("doll")
			}),
			invView === "doll" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperDollScreen, {
				heroName: hero,
				classId: heroClass[hero] ?? "swordsman",
				save,
				onClose: () => setInvView(null),
				onSwitchToBackpack: () => setInvView("pack"),
				onEquipWeapon,
				onEquipItem
			})
		]
	});
}
function key(x, y) {
	return `${x},${y}`;
}
function inBounds(x, y, cols, rows) {
	return x >= 0 && y >= 0 && x < cols && y < rows;
}
function tileAt(tiles, cols, x, y) {
	return tiles[y * cols + x] ?? "plains";
}
function oddrToCube(col, row) {
	const q = col - (row - (row & 1)) / 2;
	const r = row;
	return {
		q,
		r,
		s: -q - r
	};
}
function cubeToOddr(q, r) {
	return {
		x: q + (r - (r & 1)) / 2,
		y: r
	};
}
function cubeRound(q, r, s) {
	let rq = Math.round(q);
	let rr = Math.round(r);
	let rs = Math.round(s);
	const dq = Math.abs(rq - q);
	const dr = Math.abs(rr - r);
	const ds = Math.abs(rs - s);
	if (dq > dr && dq > ds) rq = -rr - rs;
	else if (dr > ds) rr = -rq - rs;
	else rs = -rq - rr;
	return {
		q: rq,
		r: rr,
		s: rs
	};
}
function hexLine(a, b) {
	const n = hexDist(a, b);
	if (n === 0) return [{
		x: a.x,
		y: a.y
	}];
	const A = oddrToCube(a.x, a.y);
	const B = oddrToCube(b.x, b.y);
	const out = [];
	let prev = "";
	for (let i = 0; i <= n; i++) {
		const t = i / n;
		const c = cubeRound(A.q + (B.q - A.q) * t, A.r + (B.r - A.r) * t, A.s + (B.s - A.s) * t);
		const p = cubeToOddr(c.q, c.r);
		const k = key(p.x, p.y);
		if (k === prev) continue;
		prev = k;
		out.push(p);
	}
	return out;
}
function clearShot(from, to, tiles, cols, kind) {
	const fromHigh = !!TERRAIN[tileAt(tiles, cols, from.x, from.y)].height;
	const line = hexLine(from, to);
	for (let i = 1; i < line.length; i++) {
		const p = line[i];
		const end = i === line.length - 1;
		const t = TERRAIN[tileAt(tiles, cols, p.x, p.y)];
		if (t.id === "barricade") {
			if (end) return false;
			const shooterBehind = hexDist(from, p) <= 1;
			if (hexDist(to, p) <= 1) return false;
			if (!shooterBehind) return false;
			continue;
		}
		if (t.blocksShot && !end) return false;
		if (!end && kind === "arrow" && t.height && !fromHigh) return false;
	}
	return true;
}
function shotKind(unit) {
	if (isRangedWeapon(unit)) return "arrow";
	if (isProjectile(unit)) return "bolt";
	return null;
}
function hexDist(a, b) {
	const A = oddrToCube(a.x, a.y);
	const B = oddrToCube(b.x, b.y);
	return (Math.abs(A.q - B.q) + Math.abs(A.r - B.r) + Math.abs(A.s - B.s)) / 2;
}
function manhattan(a, b) {
	return hexDist(a, b);
}
var CUBE_DIRS = [
	{
		q: 1,
		r: 0,
		s: -1
	},
	{
		q: 1,
		r: -1,
		s: 0
	},
	{
		q: 0,
		r: -1,
		s: 1
	},
	{
		q: -1,
		r: 0,
		s: 1
	},
	{
		q: -1,
		r: 1,
		s: 0
	},
	{
		q: 0,
		r: 1,
		s: -1
	}
];
function cubeAdd(a, b) {
	return {
		q: a.q + b.q,
		r: a.r + b.r,
		s: a.s + b.s
	};
}
function hexRay(from, dir, cols, rows) {
	const out = [];
	let c = cubeAdd(oddrToCube(from.x, from.y), dir);
	for (let i = 0; i < cols + rows + 4; i++) {
		const p = cubeToOddr(c.q, c.r);
		if (!inBounds(p.x, p.y, cols, rows)) break;
		out.push(p);
		c = cubeAdd(c, dir);
	}
	return out;
}
function allAxisRays(from, cols, rows) {
	const out = [];
	for (const d of CUBE_DIRS) out.push(...hexRay(from, d, cols, rows));
	return out;
}
/**
* Ray from `from` through `through`, continuing straight to the map edge.
* Unlike `axisDir` this isn't limited to the 6 exact hex axes — it points at
* `through` from any angle (snapping each step to the nearest hex, same
* technique as `hexLine`), so any target hex gives a usable line, not just
* ones perfectly aligned with a hex direction.
*/
function piercingLine(from, through, cols, rows) {
	const n = hexDist(from, through);
	if (n <= 0) return null;
	const A = oddrToCube(from.x, from.y);
	const B = oddrToCube(through.x, through.y);
	const stepQ = (B.q - A.q) / n;
	const stepR = (B.r - A.r) / n;
	const stepS = (B.s - A.s) / n;
	const out = [];
	let prevKey = "";
	const maxSteps = cols + rows + 4;
	for (let i = 1; i <= maxSteps; i++) {
		const c = cubeRound(A.q + stepQ * i, A.r + stepR * i, A.s + stepS * i);
		const p = cubeToOddr(c.q, c.r);
		const k = key(p.x, p.y);
		if (k === prevKey) continue;
		prevKey = k;
		if (!inBounds(p.x, p.y, cols, rows)) break;
		out.push(p);
	}
	return out.length ? out : null;
}
function hexNeighbors(col, row) {
	return (row & 1 ? [
		[1, 0],
		[1, -1],
		[0, -1],
		[-1, 0],
		[0, 1],
		[1, 1]
	] : [
		[1, 0],
		[0, -1],
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, 1]
	]).map(([dx, dy]) => ({
		x: col + dx,
		y: row + dy
	}));
}
function cleaveHexes(from, start, count, cols, rows) {
	const ring = hexNeighbors(from.x, from.y);
	const i = ring.findIndex((p) => p.x === start.x && p.y === start.y);
	if (i < 0) return [];
	const n = Math.max(1, Math.min(6, count));
	const out = [];
	for (let k = 0; k < n; k++) {
		const p = ring[(i + k) % ring.length];
		if (p && inBounds(p.x, p.y, cols, rows)) out.push(p);
	}
	return out;
}
function unitSize(unit) {
	return Math.max(1, unit.size || 1);
}
/** The front row of a big creature's footprint — closest to the player, where the feet render (see footprint() below). */
function footprintFrontRow(unit, width = 2) {
	if (unit.footprintOffsets) return unit.footprintOffsets.filter((o) => o.dy === 0).map((o) => ({
		x: unit.x + o.dx,
		y: unit.y
	}));
	const start = unit.x - Math.floor((width - 1) / 2);
	const out = [];
	for (let i = 0; i < width; i++) out.push({
		x: start + i,
		y: unit.y
	});
	return out;
}
function footprint(unit) {
	const s = unitSize(unit);
	if (s <= 1) return [{
		x: unit.x,
		y: unit.y
	}];
	if (unit.footprintOffsets) return unit.footprintOffsets.map((o) => ({
		x: unit.x + o.dx,
		y: unit.y + o.dy
	}));
	if (s >= 4) {
		const width = unit.footprintW ?? 2;
		const height = unit.footprintH ?? 4;
		const out = [];
		for (let dy = 0; dy > -height; dy--) {
			const rowX = dy % 2 !== 0 ? unit.x - 1 : unit.x;
			out.push(...footprintFrontRow({
				x: rowX,
				y: unit.y + dy
			}, width));
		}
		return out;
	}
	const out = [{
		x: unit.x,
		y: unit.y
	}];
	const want = s <= 2 ? 2 : Math.min(4, s);
	for (const n of hexNeighbors(unit.x, unit.y)) {
		out.push(n);
		if (out.length >= want) break;
	}
	return out;
}
function occupies(unit, x, y) {
	if (!unit.alive) return false;
	return footprint(unit).some((p) => p.x === x && p.y === y);
}
function occupancy(units) {
	const map = /* @__PURE__ */ new Map();
	for (const u of units) {
		if (!u.alive) continue;
		for (const p of footprint(u)) map.set(key(p.x, p.y), u);
	}
	return map;
}
function minRangeTo(ax, ay, unit) {
	let best = 999;
	for (const p of footprint(unit)) {
		const d = hexDist({
			x: ax,
			y: ay
		}, p);
		if (d < best) best = d;
	}
	return best;
}
function inRangeOf(ax, ay, unit, min, max) {
	const m = minRangeTo(ax, ay, unit);
	return m >= min && m <= max;
}
function footprintCost(x, y, size, tiles, cols, rows, occ, self, stop) {
	const cells = footprint({
		x,
		y,
		size
	});
	let cost = 1;
	for (const p of cells) {
		if (!inBounds(p.x, p.y, cols, rows)) return null;
		const terr = TERRAIN[tileAt(tiles, cols, p.x, p.y)];
		if (!terr.passable) {
			if (!(terr.id === "barricade" && self.classId === "troll")) return null;
		}
		const costHere = terr.id === "barricade" && self.classId === "troll" ? 2 : terr.moveCost;
		if (costHere > cost) cost = costHere;
		const who = occ.get(key(p.x, p.y));
		if (!who || who.id === self.id) continue;
		if (who.side !== self.side) return null;
		if (stop) return null;
	}
	return cost;
}
function computeReachable(unit, tiles, cols, rows, units) {
	const occ = occupancy(units);
	const size = unitSize(unit);
	const result = /* @__PURE__ */ new Map();
	const start = {
		x: unit.x,
		y: unit.y,
		cost: 0,
		parent: null
	};
	result.set(key(unit.x, unit.y), start);
	const queue = [start];
	while (queue.length) {
		queue.sort((a, b) => a.cost - b.cost);
		const cur = queue.shift();
		if (cur.cost >= unit.mov) continue;
		for (const n of hexNeighbors(cur.x, cur.y)) {
			const step = footprintCost(n.x, n.y, size, tiles, cols, rows, occ, unit, false);
			if (step == null) continue;
			const nextCost = cur.cost + step;
			if (nextCost > unit.mov) continue;
			const nk = key(n.x, n.y);
			const prev = result.get(nk);
			if (prev && prev.cost <= nextCost) continue;
			const cell = {
				x: n.x,
				y: n.y,
				cost: nextCost,
				parent: key(cur.x, cur.y)
			};
			result.set(nk, cell);
			queue.push(cell);
		}
	}
	for (const [k, cell] of result) {
		if (k === key(unit.x, unit.y)) continue;
		if (footprintCost(cell.x, cell.y, size, tiles, cols, rows, occ, unit, true) == null) result.delete(k);
	}
	return result;
}
/** True path-cost distance from `from` to every tile on the map, ignoring who's standing
* where and ignoring the mover's own mov stat (ie. a Dijkstra over terrain alone, ceiling
* cols+rows deep, more than enough for any map this game builds). Used by AI targeting so
* "which reachable cell gets me closer to the player" is judged by real path distance, not
* straight-line hex distance — plain hexDist can't see walls/pillars, so an enemy on the far
* side of an obstacle can end up with every hex-closer cell actually a dead end, greedily
* "closest by hexDist" then never picks a move at all (every real step reads as moving away)
* and the enemy freezes in place turn after turn even though a real route exists. */
function terrainDistanceField(from, tiles, cols, rows) {
	const dist = /* @__PURE__ */ new Map();
	const startKey = key(from.x, from.y);
	dist.set(startKey, 0);
	const queue = [{
		x: from.x,
		y: from.y,
		cost: 0
	}];
	while (queue.length) {
		queue.sort((a, b) => a.cost - b.cost);
		const cur = queue.shift();
		const ck = key(cur.x, cur.y);
		if ((dist.get(ck) ?? Infinity) < cur.cost) continue;
		for (const n of hexNeighbors(cur.x, cur.y)) {
			if (!inBounds(n.x, n.y, cols, rows)) continue;
			const terr = TERRAIN[tileAt(tiles, cols, n.x, n.y)];
			if (!terr.passable) continue;
			const nextCost = cur.cost + terr.moveCost;
			const nk = key(n.x, n.y);
			if ((dist.get(nk) ?? Infinity) <= nextCost) continue;
			dist.set(nk, nextCost);
			queue.push({
				x: n.x,
				y: n.y,
				cost: nextCost
			});
		}
	}
	return dist;
}
function reconstructPath(reach, to) {
	const path = [];
	let cur = reach.get(key(to.x, to.y));
	while (cur) {
		path.push({
			x: cur.x,
			y: cur.y
		});
		cur = cur.parent ? reach.get(cur.parent) : void 0;
	}
	path.reverse();
	return path;
}
function attackCellsFrom(x, y, minRange, maxRange, cols, rows) {
	const out = [];
	for (let gy = 0; gy < rows; gy++) for (let gx = 0; gx < cols; gx++) {
		const m = hexDist({
			x,
			y
		}, {
			x: gx,
			y: gy
		});
		if (m >= minRange && m <= maxRange) out.push({
			x: gx,
			y: gy
		});
	}
	return out;
}
function inWeaponRange(ax, ay, bx, by, min, max) {
	const m = hexDist({
		x: ax,
		y: ay
	}, {
		x: bx,
		y: by
	});
	return m >= min && m <= max;
}
function canHitFrom(unit, from, foe, tiles, cols) {
	const placed = {
		...unit,
		x: from.x,
		y: from.y
	};
	const max = effectiveMaxRange(unit, tileAt(tiles, cols, from.x, from.y));
	let ok = false;
	for (const p of footprint(placed)) if (inRangeOf(p.x, p.y, foe, unit.minRange, max)) {
		ok = true;
		break;
	}
	if (!ok) return false;
	const kind = shotKind(unit);
	if (!kind) return true;
	return clearShot(from, {
		x: foe.x,
		y: foe.y
	}, tiles, cols, kind);
}
function attackableEnemies(unit, reach, units, tiles, cols) {
	const best = /* @__PURE__ */ new Map();
	for (const cell of reach.values()) for (const foe of units) {
		if (!foe.alive || foe.side === unit.side) continue;
		if (!canHitFrom(unit, cell, foe, tiles, cols)) continue;
		if (!best.has(foe.id)) best.set(foe.id, {
			x: cell.x,
			y: cell.y
		});
	}
	return best;
}
function computeThreat(unit, tiles, cols, rows, units) {
	const reach = computeReachable(unit, tiles, cols, rows, units);
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const cell of reach.values()) {
		const max = effectiveMaxRange(unit, tileAt(tiles, cols, cell.x, cell.y));
		const kind = shotKind(unit);
		for (const p of attackCellsFrom(cell.x, cell.y, unit.minRange, max, cols, rows)) {
			if (kind && !clearShot(cell, p, tiles, cols, kind)) continue;
			const k = key(p.x, p.y);
			if (seen.has(k)) continue;
			seen.add(k);
			out.push(p);
		}
	}
	return out;
}
function powerOf(unit) {
	return unit.mag > 0 ? unit.mag : unit.atk;
}
function protOf(attacker, defender) {
	return attacker.mag > 0 ? defender.res : defender.def;
}
function terrainBonus(attacker, defender, attTile, defTile) {
	const attT = TERRAIN[attTile];
	const defT = TERRAIN[defTile];
	let def = defT.def;
	if (isProjectile(attacker) && defT.cover) def += defT.cover;
	return {
		atk: attT.atk,
		def
	};
}
/** A weapon tuned for one specific class (a staff named after a school of magic, say) hits
* 10% harder in that class's own hands — everyone else in its usableBy pool can still wield
* it at no penalty, just without this. */
var WEAPON_CLASS_BONUS_MUL = 1.1;
function weaponClassBonusMul(attacker) {
	return (attacker.weaponId ? WEAPONS[attacker.weaponId] : null)?.bonusClass === attacker.classId ? WEAPON_CLASS_BONUS_MUL : 1;
}
function rollDamage(attacker, defender, attTile, defTile, rng) {
	const b = terrainBonus(attacker, defender, attTile, defTile);
	const weapon = weaponRoll(attacker.weaponId, attacker.weaponEnh, rng);
	const raw = powerOf(attacker) + weapon + b.atk - protOf(attacker, defender) - b.def;
	let dmg = Math.max(1, Math.round(Math.max(1, raw) * weaponClassBonusMul(attacker)));
	const crit = rng() < .08;
	if (crit) dmg = Math.max(1, Math.floor(dmg * 1.5));
	return {
		dmg,
		crit
	};
}
/** Same formula as rollDamage, but rolling explicit dice instead of the attacker's
* equipped main-hand weapon — for an off-hand weapon attack, whose dice come from the
* EquipmentDef in the offHand slot rather than WEAPONS[attacker.weaponId]. */
function rollDamageCustom(attacker, defender, attTile, defTile, dice, faces, bonus, rng) {
	const b = terrainBonus(attacker, defender, attTile, defTile);
	const weapon = rollDice(dice, faces, bonus, rng);
	const raw = powerOf(attacker) + weapon + b.atk - protOf(attacker, defender) - b.def;
	let dmg = Math.max(1, raw);
	const crit = rng() < .08;
	if (crit) dmg = Math.max(1, Math.floor(dmg * 1.5));
	return {
		dmg,
		crit
	};
}
function previewDamage(attacker, defender, attTile, defTile) {
	const b = terrainBonus(attacker, defender, attTile, defTile);
	const weapon = weaponPreview(attacker.weaponId, attacker.weaponEnh);
	const raw = powerOf(attacker) + weapon + b.atk - protOf(attacker, defender) - b.def;
	return Math.max(1, Math.round(Math.max(1, raw) * weaponClassBonusMul(attacker)));
}
function canCounter(attacker, defender, from, tiles, cols) {
	if (!defender.alive) return false;
	return canHitFrom(defender, {
		x: defender.x,
		y: defender.y
	}, {
		...attacker,
		x: from.x,
		y: from.y
	}, tiles, cols);
}
function makeForecast(attacker, defender, attTile, defTile, tiles, cols) {
	const dmgOut = previewDamage(attacker, defender, attTile, defTile);
	const counter = canCounter(attacker, defender, {
		x: attacker.x,
		y: attacker.y
	}, tiles, cols);
	const dmgBack = counter ? previewDamage(defender, attacker, defTile, attTile) : 0;
	return {
		attacker: attacker.id,
		defender: defender.id,
		dmgOut,
		dmgBack,
		canCounter: counter,
		critOut: false,
		kill: dmgOut >= defender.hp
	};
}
function mulberry32(seed) {
	let a = seed | 0;
	return () => {
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
var PARTICLE_CAP = 32;
var ZOOM_RADII = [
	22,
	34,
	50,
	72
];
function blankParticle() {
	return {
		live: false,
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		life: 0,
		max: 1,
		size: 1,
		color: "#fff",
		kind: "spark",
		frame: 0
	};
}
function pub(u, restrained) {
	return {
		id: u.id,
		name: u.name,
		classId: u.classId,
		className: u.className,
		role: u.role,
		side: u.side,
		sprite: u.sprite,
		hp: u.hp,
		maxHp: u.maxHp,
		atk: u.atk,
		mag: u.mag,
		def: u.def,
		res: u.res,
		mov: u.mov,
		minRange: u.minRange,
		maxRange: u.maxRange,
		moved: u.moved,
		acted: u.acted,
		x: u.x,
		y: u.y,
		level: u.level,
		xp: u.xp,
		bag: { ...u.bag },
		spells: { ...u.spells },
		weaponId: u.weaponId,
		weaponEnh: u.weaponEnh,
		size: u.size,
		diseased: u.diseased,
		poisoned: u.poisoned,
		stunned: u.stunned,
		crippled: u.crippled,
		offHandId: u.offHandId,
		summoned: u.summoned,
		asleep: u.asleep,
		restrained
	};
}
/** Remaining uses for one spell tier at spawn — the class/level cap minus whatever the
* roster says this hero already spent so far this scenario (see Roster.spellSpent), never
* below 0. Always 0 for enemies, matching the previous unconditional side-check inline. */
function remainingTier(classId, tier, key, level, side, roster, name) {
	if (side !== "player") return 0;
	const cap = tierUses(classId, tier, level);
	const spent = roster?.spellSpent?.[name]?.[key] ?? 0;
	return Math.max(0, cap - spent);
}
function spawnUnit(spawn, side, i, roster, enemyLevel = 1) {
	const classId = (side === "player" ? roster?.promotions?.[spawn.name] : void 0) ?? spawn.classId;
	const cls = CLASSES[classId];
	const level = side === "enemy" ? roster?.enemyLevels?.[spawn.name] ?? enemyLevel : roster?.levels[spawn.name] ?? 1;
	const st = statsFor(classId, level);
	const hpCap = roster?.hp[spawn.name];
	const hp = hpCap != null && hpCap > 0 ? Math.min(st.hp, hpCap) : st.hp;
	const weapon = side === "player" ? roster?.weapons?.[spawn.name] ?? {
		id: starterWeaponFor(classId),
		enh: 0
	} : null;
	const weaponDef = weapon?.id ? WEAPONS[weapon.id] : null;
	const minRange = weaponDef?.minRange ?? st.minRange;
	const maxRange = weaponDef?.maxRange ?? st.maxRange;
	const offHandId = side === "player" && !weaponDef?.twoHanded ? roster?.offHand?.[spawn.name] ?? null : null;
	return {
		id: `${side}-${spawn.name}-${i}`,
		name: spawn.name,
		classId: cls.id,
		className: cls.name,
		role: cls.role,
		side,
		sprite: cls.sprite,
		x: spawn.x,
		y: spawn.y,
		hp,
		maxHp: st.hp,
		atk: st.atk,
		mag: st.mag,
		def: st.def,
		res: st.res,
		mov: st.mov,
		minRange,
		maxRange,
		moved: false,
		acted: false,
		facing: side === "player" ? 1 : -1,
		walkPose: "front",
		alive: true,
		drawX: spawn.x,
		drawY: spawn.y,
		flash: 0,
		fade: 1,
		bob: 0,
		level,
		xp: side === "player" ? roster?.xp?.[spawn.name] ?? 0 : 0,
		bag: side === "player" ? { ...roster?.bags?.[spawn.name] ?? (cls.id === "healer" ? EMPTY_BAG : STARTING_BAG) } : { ...EMPTY_BAG },
		spells: {
			tier1: remainingTier(cls.id, 1, "tier1", level, side, roster, spawn.name),
			tier2: remainingTier(cls.id, 2, "tier2", level, side, roster, spawn.name),
			tier3: remainingTier(cls.id, 3, "tier3", level, side, roster, spawn.name),
			tier4: remainingTier(cls.id, 4, "tier4", level, side, roster, spawn.name),
			tier5: remainingTier(cls.id, 5, "tier5", level, side, roster, spawn.name),
			tier6: remainingTier(cls.id, 6, "tier6", level, side, roster, spawn.name),
			tier7: remainingTier(cls.id, 7, "tier7", level, side, roster, spawn.name),
			tier8: remainingTier(cls.id, 8, "tier8", level, side, roster, spawn.name),
			tier9: remainingTier(cls.id, 9, "tier9", level, side, roster, spawn.name),
			tier10: remainingTier(cls.id, 10, "tier10", level, side, roster, spawn.name)
		},
		weaponId: weapon?.id ?? null,
		weaponEnh: weapon?.enh ?? 0,
		size: cls.size,
		footprintW: cls.footprintW,
		footprintH: cls.footprintH,
		footprintOffsets: cls.footprintOffsets,
		shock: null,
		diseased: false,
		diseaseBase: null,
		poisoned: false,
		stunned: false,
		stunTurns: 0,
		crippled: false,
		offHandId,
		summoned: false,
		asleep: false,
		sleepTurns: 0,
		guaranteedDrop: side === "enemy" && !!spawn.guaranteedDrop,
		moveBudgetUsed: 0
	};
}
function easeOut(t) {
	return 1 - (1 - t) * (1 - t);
}
var BattleEngine = class {
	mission;
	tiles;
	/** Art variant index per tile, same indexing as tiles. Undefined/missing = variant 0. */
	tileVariants;
	decorations;
	cols;
	rows;
	units = [];
	art;
	phase = "player";
	mode = "locked";
	turn = 1;
	selectedId = null;
	inspectedId = null;
	pendingFoeId = null;
	threat = [];
	cursor = {
		x: 0,
		y: 0
	};
	reach = /* @__PURE__ */ new Map();
	attackFrom = /* @__PURE__ */ new Map();
	/** Active Web of Dreams patches (Conjurer tier 2) — cast, not terrain, so they live here
	* rather than on the map. Ticks down by one every startNewRound and is dropped at 0. */
	webZones = [];
	/** Whether the unit whose turn is currently active was standing in a web zone at the
	* START of that turn — decided once in beginUnitTurn and left alone for the rest of it
	* (see effectiveUnitForReach). */
	turnRestrained = false;
	/** All alive units for this round, sorted by CLASSES[classId].init (lower first, ties favor the player). */
	turnOrder = [];
	/** id of the unit whose turn we've already dispatched — lets the tick loop react only on change. */
	activeUnitId = null;
	orig = null;
	hover = null;
	lastClickAt = 0;
	lastClickCell = null;
	result = null;
	/** True once every enemy the win condition cares about is dead — the battle CAN end, but
	* doesn't until the player confirms (see confirmFinish). Lets them keep playing to loot
	* remaining chests, and flips back to false on its own if a trap/trigger spawns a fresh
	* enemy after the field first looked clear. */
	winAvailable = false;
	banner = null;
	/** Ember found in chests opened mid-battle; folded into the save's Ember total on victory. */
	lootEmber = 0;
	/** Weapon ids found in chests or off an enemy kill mid-battle; folded into the save's
	* weapon stash on victory. */
	lootWeapons = [];
	/** EquipmentDef ids found in chests mid-battle; folded into the save's shared gear stash
	* on victory (save.looseEquipment) — never auto-equipped onto whoever opened the chest,
	* the player assigns it to a hero afterward from the Paperdoll picker. */
	lootEquipment = [];
	/** Every weapon id the player already owns, plus anything granted mid-battle the moment
	* it's granted — checked before every loot roll so a chest or kill drop never announces
	* a weapon the player already has (it used to: the roll didn't know about ownership at
	* all, so a "found" weapon could silently vanish once persistVictory deduped it against
	* the save, with nothing to show for the mid-battle "you found X" message). */
	ownedWeapons;
	/** Rolling combat log — attacks, spells, heals, kills, and loot, newest last. Capped so
	* a long battle doesn't grow it without bound; read via getHud() for the in-battle log
	* view. */
	log = [];
	tip;
	lastTipSeen = null;
	tipSetAt = 0;
	time = 0;
	trauma = 0;
	hitstop = 0;
	zoom = 1;
	/** How long a unit takes to glide across one hex — "normal" is the default, readable
	* pace; "fast" is the old, snappier speed for players who prefer it. Toggled from the
	* pause menu, applies to the very next step (mid-step changes aren't jarring since a
	* step is at most a quarter second). */
	speedMode = "normal";
	camX = 0;
	camY = 0;
	viewW = 1;
	viewH = 1;
	camReady = false;
	queue = [];
	active = null;
	particles = Array.from({ length: PARTICLE_CAP }, blankParticle);
	particleLive = 0;
	onNextIdle = null;
	rng;
	listeners = /* @__PURE__ */ new Set();
	reducedMotion = false;
	layout = {
		ox: 0,
		oy: 0,
		tile: 48,
		cols: 8,
		rows: 7
	};
	spellArmed = false;
	spellAim = null;
	spellKind = null;
	constructor(mission, art, roster, seed = 1) {
		this.mission = mission;
		this.art = art;
		this.ownedWeapons = new Set(roster.ownedWeaponIds ?? []);
		this.cols = mission.cols;
		this.rows = mission.rows;
		this.tiles = parseLayout(mission.layout);
		this.tileVariants = mission.tileVariants ?? [];
		this.decorations = mission.decorations ?? [];
		for (const cellKey of decorationCells(this.decorations)) {
			const [xs, ys] = cellKey.split(",");
			const x = Number(xs);
			const y = Number(ys);
			if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) this.tiles[y * this.cols + x] = "column";
		}
		this.rng = mulberry32(seed + mission.index * 97);
		this.units = [...mission.playerSpawns.map((s, i) => spawnUnit(s, "player", i, roster)), ...mission.enemySpawns.map((s, i) => spawnUnit(s, "enemy", i, roster, enemyLevelFor(mission.index)))];
		for (const u of this.units) {
			this.nudgeOffHazard(u);
			u.bob = this.rng() * 16;
		}
		this.turnOrder = this.sortByInitiative(this.units.filter((u) => u.alive));
		const first = this.units.find((u) => u.side === "player");
		if (first) this.cursor = {
			x: first.x,
			y: first.y
		};
		this.tip = mission.index === 0 ? "Toque numa aliada para mover. Toque num inimigo para ver HP e alcance." : mission.win === "boss" ? "Objetivo: o capitão. Toque nele para ver a área de perigo." : "Toque num inimigo para ver HP, alcance e onde ele pode atacar.";
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) this.reducedMotion = true;
	}
	/** Sorts by CLASSES[classId].init ascending; equal init favors the player side. */
	sortByInitiative(units) {
		return [...units].sort((a, b) => {
			const ia = CLASSES[a.classId].init ?? 999;
			const ib = CLASSES[b.classId].init ?? 999;
			if (ia !== ib) return ia - ib;
			if (a.side !== b.side) return a.side === "player" ? -1 : 1;
			return 0;
		}).map((u) => u.id);
	}
	subscribe(fn) {
		this.listeners.add(fn);
		return () => this.listeners.delete(fn);
	}
	emit() {
		for (const fn of this.listeners) fn();
	}
	getHud() {
		const selected = this.units.find((u) => u.id === this.selectedId) ?? null;
		const hoverCell = this.hover ?? this.cursor;
		const hoverUnit = hoverCell ? this.units.find((u) => u.alive && occupies(u, hoverCell.x, hoverCell.y)) : void 0;
		const terr = hoverCell ? TERRAIN[tileAt(this.tiles, this.cols, hoverCell.x, hoverCell.y)] : null;
		const inspected = this.units.find((u) => u.id === this.inspectedId) ?? null;
		const pendingFoe = this.units.find((u) => u.id === this.pendingFoeId) ?? null;
		const foeForForecast = pendingFoe ?? (inspected && inspected.side === "enemy" ? inspected : null);
		let forecast = null;
		if (selected && foeForForecast && selected.side === "player") {
			const from = this.attackFrom.get(foeForForecast.id);
			const fx = from?.x ?? selected.x;
			const fy = from?.y ?? selected.y;
			forecast = makeForecast({
				...selected,
				x: fx,
				y: fy
			}, foeForForecast, tileAt(this.tiles, this.cols, fx, fy), tileAt(this.tiles, this.cols, foeForForecast.x, foeForForecast.y), this.tiles, this.cols);
		}
		const canAttack = !!selected && !selected.acted && (this.attackFrom.size > 0 || this.units.some((u) => u.alive && u.side !== selected.side && canHitFrom(selected, selected, u, this.tiles, this.cols)));
		const canLockpick = !!selected && !selected.acted && selected.bag.lockpick > 0 && !!this.adjacentLock(selected);
		const offHandKind = selected && !selected.acted && selected.offHandId ? EQUIPMENT[selected.offHandId]?.kind ?? null : null;
		return {
			phase: this.phase,
			banner: this.banner,
			selected: selected ? pub(selected, this.isWebCell(selected.x, selected.y)) : null,
			hoveredUnit: hoverUnit ? pub(hoverUnit, this.isWebCell(hoverUnit.x, hoverUnit.y)) : null,
			terrain: terr ? {
				id: terr.id,
				name: terr.name,
				def: terr.def,
				atk: terr.atk,
				passable: terr.passable,
				hazard: terr.hazardDice ? `${terr.hazardDice}d${terr.hazardFaces ?? 8}` : void 0,
				note: terrainNote(terr.id)
			} : null,
			mode: this.mode,
			canAttack,
			offHandKind,
			canLockpick,
			forecast,
			turn: this.turn,
			objective: this.mission.objective,
			missionTitle: this.mission.title,
			playerAlive: this.units.filter((u) => u.side === "player" && u.alive && !u.summoned).length,
			enemyAlive: this.units.filter((u) => u.side === "enemy" && u.alive).length,
			busy: this.mode === "locked" || !!this.active || this.queue.length > 0,
			result: this.result,
			winAvailable: this.winAvailable,
			zoom: this.zoom,
			speedMode: this.speedMode,
			tip: this.tip,
			inspected: inspected ? pub(inspected, this.isWebCell(inspected.x, inspected.y)) : pendingFoe ? pub(pendingFoe, this.isWebCell(pendingFoe.x, pendingFoe.y)) : null,
			pendingFoe: pendingFoe ? pub(pendingFoe, this.isWebCell(pendingFoe.x, pendingFoe.y)) : null,
			spellReady: this.mode === "awaitSpell" && !!selected && !!this.hover && this.spellAimValid(selected, this.hover),
			spellKind: this.mode === "awaitSpell" ? this.spellKind : null,
			turnQueue: (() => {
				const active = this.activeTurnUnit();
				return this.turnOrder.map((id) => this.units.find((u) => u.id === id)).filter((u) => !!u && u.alive).map((u) => ({
					id: u.id,
					name: u.name,
					side: u.side,
					acted: u.moved,
					active: u.id === active?.id
				}));
			})(),
			log: this.log
		};
	}
	battlePlayerHp() {
		const out = {};
		for (const u of this.units) {
			if (u.side !== "player") continue;
			out[u.name] = u.alive ? u.hp : 0;
		}
		return out;
	}
	remainingPlayerHp() {
		const out = {};
		for (const u of this.units) {
			if (u.side !== "player") continue;
			if (!u.alive) out[u.name] = Math.max(1, Math.ceil(u.maxHp * .5));
			else out[u.name] = Math.min(u.maxHp, u.hp + Math.ceil((u.maxHp - u.hp) * .5));
		}
		return out;
	}
	remainingBags() {
		const out = {};
		for (const u of this.units) {
			if (u.side !== "player") continue;
			out[u.name] = { ...u.bag };
		}
		return out;
	}
	/** Hands a found potion to `starter` (the one who opened the chest), or — if their bag for
	* that kind is already full — to the next alive party member in line with room. Returns
	* false only if the whole party is capped out on that potion, so the drop is lost. */
	givePotion(starter, kind) {
		const cap = POTION_CARRY_MAX[kind];
		const order = [starter, ...this.units.filter((x) => x !== starter)];
		for (const target of order) {
			if (target.side !== "player" || !target.alive) continue;
			const have = target.bag[kind] ?? 0;
			if (have < cap) {
				target.bag[kind] = have + 1;
				return true;
			}
		}
		return false;
	}
	/** Hero name → tier key → spell uses spent so far this scenario, for persisting into
	* save.spellUses (see Roster.spellSpent) — recomputed as the current class/level cap
	* minus whatever's left, so a level-up mid-battle naturally reflects the bigger cap
	* instead of needing its own bookkeeping. */
	spentTiers() {
		const out = {};
		for (const u of this.units) {
			if (u.side !== "player") continue;
			const perTier = {};
			for (let t = 1; t <= 10; t++) {
				const key = tierKey(t);
				const cap = tierUses(u.classId, t, u.level);
				perTier[key] = Math.max(0, cap - u.spells[key]);
			}
			out[u.name] = perTier;
		}
		return out;
	}
	tick(dt) {
		const cap = Math.min(.05, dt);
		this.time += cap;
		if (this.tip !== this.lastTipSeen) {
			this.lastTipSeen = this.tip;
			this.tipSetAt = this.time;
		} else if (this.tip !== null && this.time - this.tipSetAt >= 5) {
			this.tip = null;
			this.lastTipSeen = null;
		}
		if (this.onNextIdle && !this.active && this.queue.length === 0) {
			const fn = this.onNextIdle;
			this.onNextIdle = null;
			fn();
		}
		if (this.trauma > 0) this.trauma = Math.max(0, this.trauma - cap * 2.2);
		for (const u of this.units) {
			if (u.flash > 0) u.flash = Math.max(0, u.flash - cap * 4);
			if (!u.alive && u.fade > 0) u.fade = Math.max(0, u.fade - cap * 2.4);
			if (u.alive) {
				const haste = u.classId === "wardog" ? 1.4 : u.size >= 4 ? .58 : u.classId === "mage" || u.classId === "cultist" ? .8 : 1;
				u.bob += cap * haste;
			}
		}
		if (this.particleLive) {
			let live = 0;
			for (const p of this.particles) {
				if (!p.live) continue;
				p.life += cap;
				if (p.life >= p.max) {
					p.live = false;
					continue;
				}
				p.x += p.vx * cap;
				p.y += p.vy * cap;
				if (p.kind === "impact") p.frame += cap * 12;
				live += 1;
			}
			this.particleLive = live;
		}
		if (this.hitstop > 0) {
			this.hitstop -= cap;
			this.emit();
			return;
		}
		if (!this.active && this.queue.length) this.startSeq(this.queue.shift());
		if (this.active) this.stepActive(cap);
		if (!this.result && !this.active && this.queue.length === 0) {
			const active = this.activeTurnUnit();
			const activeId = active?.id ?? null;
			if (activeId !== this.activeUnitId) {
				this.activeUnitId = activeId;
				if (active) this.beginUnitTurn(active);
				else this.startNewRound();
			}
		}
		this.emit();
	}
	startSeq(step) {
		if (step.type === "move") {
			this.active = {
				type: "move",
				id: step.id,
				path: step.path,
				i: 0,
				t: 0
			};
			sfxPlay.move();
		} else if (step.type === "combat") {
			const target = this.units.find((u) => u.id === step.def);
			if (!target || !target.alive) return;
			this.active = {
				type: "combat",
				att: step.att,
				def: step.def,
				stage: "lunge",
				t: 0,
				swapped: false,
				bonusDice: step.bonusDice ?? 0,
				bonusFlat: step.bonusFlat ?? 0,
				noCounter: step.noCounter ?? false,
				spellKind: step.spellKind ?? null,
				customDice: step.customDice ?? null,
				dmgMul: step.dmgMul ?? 1,
				stunChance: step.stunChance ?? 0
			};
		} else if (step.type === "spell") {
			this.active = {
				type: "spell",
				att: step.att,
				tiles: step.tiles,
				ids: step.ids,
				t: 0,
				hit: false,
				extraDice: step.dice ?? 0,
				extraFaces: step.faces ?? 8,
				extraBonus: step.bonus ?? 0,
				moreDice: step.moreDice ?? 0,
				moreFaces: step.moreFaces ?? 6,
				echo: step.echo ?? null,
				dmgMul: step.dmgMul ?? 1,
				weaponBonusDice: step.weaponBonusDice ?? 0,
				weaponBonusFaces: step.weaponBonusFaces ?? 8,
				weaponBonusBonus: step.weaponBonusBonus ?? 0,
				spellKind: step.spellKind ?? null,
				centerId: step.centerId ?? null,
				centerDice: step.centerDice ?? 0,
				centerFaces: step.centerFaces ?? 8,
				centerBonus: step.centerBonus ?? 0,
				poison: step.poison ?? false
			};
			this.banner = step.label ?? "";
			sfxPlay.crit();
		} else if (step.type === "heal") {
			this.active = {
				type: "heal",
				att: step.att,
				def: step.def,
				kind: step.kind,
				t: 0,
				applied: false
			};
			this.banner = CURES[step.kind].name;
			sfxPlay.ui();
		} else if (step.type === "cureDisease") {
			this.active = {
				type: "cureDisease",
				att: step.att,
				def: step.def,
				t: 0,
				applied: false
			};
			this.banner = CURE_DISEASE.name;
			sfxPlay.ui();
		} else if (step.type === "banner") {
			this.banner = step.text;
			this.active = {
				type: "banner",
				text: step.text,
				t: 0,
				dur: step.dur
			};
			sfxPlay.turn();
		} else if (step.type === "delay") this.active = {
			type: "delay",
			t: 0,
			dur: step.dur
		};
		else if (step.type === "checkEnd") this.evaluateEnd();
	}
	stepActive(dt) {
		const a = this.active;
		if (!a) return;
		if (a.type === "delay" || a.type === "banner") {
			a.t += dt;
			if (a.type === "banner" && a.t >= a.dur) this.banner = null;
			if (a.t >= a.dur) {
				this.active = null;
				if (a.type === "banner" && a.text === "Fase do jogador") this.mode = "idle";
			}
			return;
		}
		if (a.type === "move") {
			const unit = this.units.find((u) => u.id === a.id);
			if (!unit || a.path.length < 2) {
				this.active = null;
				return;
			}
			const from = a.path[a.i];
			const to = a.path[a.i + 1];
			if (!to) {
				unit.x = from.x;
				unit.y = from.y;
				unit.drawX = from.x;
				unit.drawY = from.y;
				this.active = null;
				return;
			}
			if (to.x !== from.x) unit.facing = to.x > from.x ? 1 : -1;
			unit.walkPose = to.y < from.y ? "back" : to.y > from.y ? "front" : "side";
			a.t += dt;
			const dur = this.speedMode === "fast" ? .12 : .22;
			const k = easeOut(Math.min(1, a.t / dur));
			unit.drawX = from.x + (to.x - from.x) * k;
			unit.drawY = from.y + (to.y - from.y) * k;
			if (a.t >= dur) {
				a.i += 1;
				a.t = 0;
				unit.x = to.x;
				unit.y = to.y;
				unit.drawX = to.x;
				unit.drawY = to.y;
				this.ensureVisible(unit.x, unit.y);
				this.smashBarricades(unit);
				this.applyTileHazard(unit, to);
				if (!unit.alive) {
					this.active = null;
					this.selectedId = null;
					this.pendingFoeId = null;
					this.evaluateEnd();
					if (!this.result && this.phase === "player") this.mode = "idle";
				}
			}
			return;
		}
		if (a.type === "combat") this.stepCombat(a, dt);
		if (a.type === "spell") this.stepSpell(a, dt);
		if (a.type === "heal") this.stepHeal(a, dt);
		if (a.type === "cureDisease") this.stepCureDisease(a, dt);
	}
	stepCombat(a, dt) {
		const att = this.units.find((u) => u.id === a.att);
		const def = this.units.find((u) => u.id === a.def);
		if (!att || !def) {
			this.active = null;
			return;
		}
		a.t += dt;
		const lunge = .2;
		if (a.stage === "lunge" || a.stage === "counterLunge") {
			const actor = a.stage === "lunge" ? att : def;
			const target = a.stage === "lunge" ? def : att;
			const k = Math.min(1, a.t / lunge);
			actor.drawX = actor.x + (target.x - actor.x) * .28 * k;
			actor.drawY = actor.y + (target.y - actor.y) * .28 * k;
			if (a.t >= lunge) {
				a.t = 0;
				a.stage = a.stage === "lunge" ? "hit" : "counterHit";
			}
			return;
		}
		if (a.stage === "hit" || a.stage === "counterHit") {
			if (a.t < .02) {
				const actor = a.stage === "hit" ? att : def;
				const target = a.stage === "hit" ? def : att;
				const attTile = tileAt(this.tiles, this.cols, actor.x, actor.y);
				const defTile = tileAt(this.tiles, this.cols, target.x, target.y);
				const hit = a.stage === "hit" && a.customDice ? rollDamageCustom(actor, target, attTile, defTile, a.customDice.dice, a.customDice.faces, a.customDice.bonus, this.rng) : rollDamage(actor, target, attTile, defTile, this.rng);
				if (a.stage === "hit" && a.bonusDice > 0) hit.dmg += rollDice(1, a.bonusDice, a.bonusFlat, this.rng);
				if (a.stage === "hit" && a.dmgMul !== 1) hit.dmg = Math.max(1, Math.floor(hit.dmg * a.dmgMul));
				if (a.stage === "hit" && a.stunChance > 0 && this.rng() < a.stunChance) {
					target.stunned = true;
					target.stunTurns = 1;
					sfxPlay.stun();
				}
				if (target.asleep) {
					hit.dmg = Math.max(1, Math.round(hit.dmg * (1 + WEB_OF_DREAMS.sleepBonusDamage)));
					target.asleep = false;
					target.sleepTurns = 0;
				}
				target.hp = Math.max(0, target.hp - hit.dmg);
				target.flash = 1;
				if (target.side !== actor.side && a.stage === "hit") {
					const killBonus = target.hp <= 0 && a.spellKind === "longShot" ? 2 : 1;
					this.gainExp(actor, target.level, hit.dmg, killBonus);
				}
				this.spawnHit(target, hit.dmg, hit.crit);
				this.pushLog(`${actor.name} atacou ${target.name}: ${hit.dmg} dano${hit.crit ? " (crítico)" : ""}`);
				if (target.hp <= 0) this.markDead(target);
				else {
					sfxPlay.hit();
					if (a.stage === "hit") this.maybeInflictDisease(actor, target);
					if (a.stage === "hit" && a.spellKind === "trip") {
						target.stunned = true;
						target.stunTurns = TRIP.stunRounds;
						if (!target.crippled) {
							target.crippled = true;
							const keep = 1 - TRIP.statPenalty;
							target.atk = Math.round(target.atk * keep);
							target.mag = Math.round(target.mag * keep);
							target.def = Math.round(target.def * keep);
							target.res = Math.round(target.res * keep);
							target.mov = Math.max(1, Math.round(target.mov * keep));
						}
						sfxPlay.trip();
					}
				}
				if (!this.reducedMotion) this.trauma = Math.min(1, this.trauma + .28);
				this.hitstop = .06;
			}
			if (a.t >= .18) {
				a.t = 0;
				a.stage = a.stage === "hit" ? "recover" : "counterRecover";
			}
			return;
		}
		if (a.stage === "recover" || a.stage === "counterRecover") {
			const actor = a.stage === "recover" ? att : def;
			const k = Math.min(1, a.t / .16);
			actor.drawX = actor.drawX + (actor.x - actor.drawX) * k;
			actor.drawY = actor.drawY + (actor.y - actor.drawY) * k;
			if (a.t >= .16) {
				actor.drawX = actor.x;
				actor.drawY = actor.y;
				a.t = 0;
				if (a.stage === "recover") {
					if (!a.noCounter && !def.stunned && def.alive && canCounter(att, def, {
						x: att.x,
						y: att.y
					}, this.tiles, this.cols)) a.stage = "counterLunge";
					else if (!def.alive) a.stage = "fade";
					else this.finishCombat(att);
				} else if (!att.alive) a.stage = "fade";
				else this.finishCombat(att);
			}
			return;
		}
		if (a.stage === "fade") {
			for (const u of this.units) if (!u.alive && u.fade > 0) u.fade = Math.max(0, u.fade - dt * 2.4);
			if (a.t >= .4) this.finishCombat(att);
		}
	}
	stepSpell(a, dt) {
		const att = this.units.find((u) => u.id === a.att);
		if (!att) {
			this.active = null;
			return;
		}
		a.t += dt;
		if (!a.hit && a.t >= .18) {
			a.hit = true;
			sfxPlay.spell();
			let firstAoeEnemyHit = true;
			let thrustHitIndex = 0;
			for (const id of a.ids) {
				const foe = this.units.find((u) => u.id === id && u.alive);
				if (!foe) continue;
				if (TERRAIN[tileAt(this.tiles, this.cols, foe.x, foe.y)].id === "barricade") {
					this.emitParticle({
						x: foe.drawX,
						y: foe.drawY - .35,
						vx: 0,
						vy: -.18,
						life: 0,
						max: 1.6,
						size: 1,
						color: "#e0b48a",
						text: "bloqueado",
						kind: "text",
						frame: 0
					});
					continue;
				}
				let dmg;
				let crit = false;
				if (a.centerId && foe.id === a.centerId) {
					const attTile = TERRAIN[tileAt(this.tiles, this.cols, att.x, att.y)];
					const defTile = TERRAIN[tileAt(this.tiles, this.cols, foe.x, foe.y)];
					dmg = rollDice(a.centerDice, a.centerFaces, a.centerBonus, this.rng);
					dmg = Math.max(1, dmg - foe.res + attTile.atk - (defTile.cover ?? 0));
				} else if (a.extraDice > 0) {
					const attTile = TERRAIN[tileAt(this.tiles, this.cols, att.x, att.y)];
					const defTile = TERRAIN[tileAt(this.tiles, this.cols, foe.x, foe.y)];
					dmg = rollDice(a.extraDice, a.extraFaces, a.extraBonus, this.rng);
					if (a.moreDice > 0) dmg += rollDice(a.moreDice, a.moreFaces, 0, this.rng);
					dmg = Math.max(1, dmg - foe.res + attTile.atk - (defTile.cover ?? 0));
				} else if (a.spellKind === "piercingThrust") {
					const hit = rollDamage(att, {
						...foe,
						def: Math.max(0, Math.floor(foe.def * (1 - PIERCING_THRUST.armorIgnore)))
					}, tileAt(this.tiles, this.cols, att.x, att.y), tileAt(this.tiles, this.cols, foe.x, foe.y), this.rng);
					dmg = thrustHitIndex === 0 ? hit.dmg : Math.max(1, Math.floor(hit.dmg * .5));
					crit = hit.crit;
					thrustHitIndex++;
				} else {
					const hit = rollDamage(att, foe, tileAt(this.tiles, this.cols, att.x, att.y), tileAt(this.tiles, this.cols, foe.x, foe.y), this.rng);
					dmg = hit.dmg;
					crit = hit.crit;
					if (a.weaponBonusDice > 0) dmg += rollDice(a.weaponBonusDice, a.weaponBonusFaces, a.weaponBonusBonus, this.rng);
				}
				if (a.dmgMul > 1) dmg = Math.max(1, dmg * a.dmgMul);
				if (foe.asleep) {
					dmg = Math.max(1, Math.round(dmg * (1 + WEB_OF_DREAMS.sleepBonusDamage)));
					foe.asleep = false;
					foe.sleepTurns = 0;
				}
				foe.hp = Math.max(0, foe.hp - dmg);
				foe.flash = 1;
				if (a.poison) foe.poisoned = true;
				if (foe.side !== att.side) {
					const isAoeSpell = a.spellKind === "fireball" || a.spellKind === "cleave" || a.spellKind === "piercing" || a.spellKind === "causticVenom" || a.spellKind === "piercingThrust" || a.spellKind === "sweep";
					const xpMul = foe.hp <= 0 && !isAoeSpell && (att.classId === "mage" || att.classId === "conjurer") ? 2 : isAoeSpell && !firstAoeEnemyHit ? .5 : 1;
					if (isAoeSpell) firstAoeEnemyHit = false;
					this.gainExp(att, foe.level, dmg, xpMul);
				}
				this.spawnHit(foe, dmg, crit);
				this.pushLog(`${att.name} atingiu ${foe.name} com magia: ${dmg} dano${crit ? " (crítico)" : ""}`);
				if (foe.hp <= 0) this.markDead(foe);
				else {
					sfxPlay.hit();
					if (a.echo) foe.shock = { ...a.echo };
					if (a.spellKind === "sweep") this.knockBack(att, foe);
				}
			}
			if (!this.reducedMotion) this.trauma = Math.min(1, this.trauma + .45);
			this.emitParticle({
				x: att.x,
				y: att.y,
				vx: 0,
				vy: -.4,
				life: 0,
				max: .45,
				size: 1,
				color: "#c45a32",
				kind: "impact",
				frame: 0
			});
		}
		if (a.t >= .55) this.finishCombat(att);
	}
	stepHeal(a, dt) {
		const att = this.units.find((u) => u.id === a.att);
		const target = this.units.find((u) => u.id === a.def);
		if (!att || !target) {
			this.active = null;
			return;
		}
		a.t += dt;
		if (!a.applied && a.t >= .2) {
			a.applied = true;
			const heal = rollCure(a.kind, this.rng);
			const gained = Math.min(heal, target.maxHp - target.hp);
			target.hp += gained;
			this.gainExp(att, target.level, gained);
			this.emitParticle({
				x: target.drawX,
				y: target.drawY - .35,
				vx: 0,
				vy: -.18,
				life: 0,
				max: 2,
				size: 1,
				color: "#d8ead2",
				text: `+${gained}`,
				kind: "text",
				frame: 0
			});
			this.tip = `${CURES[a.kind].name} · +${gained} HP`;
			this.pushLog(`${att.name} curou ${target.name}: +${gained} HP`);
			sfxPlay.heal();
		}
		if (a.t >= .5) this.finishCombat(att);
	}
	stepCureDisease(a, dt) {
		const att = this.units.find((u) => u.id === a.att);
		const target = this.units.find((u) => u.id === a.def);
		if (!att || !target) {
			this.active = null;
			return;
		}
		a.t += dt;
		if (!a.applied && a.t >= .2) {
			a.applied = true;
			this.curePlayerDisease(target);
			this.emitParticle({
				x: target.drawX,
				y: target.drawY - .35,
				vx: 0,
				vy: -.18,
				life: 0,
				max: 2,
				size: 1,
				color: "#d8ead2",
				text: "curado",
				kind: "text",
				frame: 0
			});
			this.tip = `${CURE_DISEASE.name} · ${target.name} está curado.`;
			sfxPlay.heal();
		}
		if (a.t >= .5) this.finishCombat(att);
	}
	/** 20% chance for a wardog's bite to inflict disease on a surviving target. */
	maybeInflictDisease(actor, target) {
		if (actor.classId !== "wardog" || !target.alive || target.diseased) return;
		if (this.rng() >= DISEASE.biteChance) return;
		target.diseased = true;
		target.diseaseBase = {
			atk: target.atk,
			mag: target.mag,
			def: target.def,
			res: target.res,
			mov: target.mov
		};
		const pen = (n) => Math.round(n * (1 - DISEASE.statPenalty));
		target.atk = pen(target.atk);
		target.mag = pen(target.mag);
		target.def = pen(target.def);
		target.res = pen(target.res);
		target.mov = Math.max(1, pen(target.mov));
		this.tip = `${target.name} não se sente muito bem.`;
	}
	/**
	* Grants XP for an action with a measurable, real effect — damage on a hit, HP restored by
	* a heal or potion — and applies any level-ups on the spot, mid-battle. Multi-target
	* abilities (fireball, cleave, piercing...) call this once per unit actually hit, so every
	* landed hit counts on its own. Side-eligibility (don't gain XP for friendly fire) is the
	* caller's job, since the same helper also grants XP for healing your own side.
	*/
	pushLog(line) {
		this.log.push(line);
		if (this.log.length > 200) this.log.shift();
	}
	/** Single choke point for a unit's death: sfx, the log line, and — for an enemy — the
	* kill-drop roll, so every death path (melee, counter, spell, lightning echo, tile
	* hazard) behaves identically instead of four separate copies of the same logic. */
	markDead(u) {
		u.alive = false;
		sfxPlay.death();
		this.pushLog(`${u.name} foi derrotado.`);
		if (u.side === "enemy" && u.guaranteedDrop) {
			const drop = weightedLootPick(this.rng, missionGearLevel(this.mission.index), this.ownedWeapons);
			if (drop.kind === "weapon") {
				if (this.ownedWeapons.has(drop.id)) this.lootEmber += 15;
				else {
					this.ownedWeapons.add(drop.id);
					this.lootWeapons.push(drop.id);
					this.pushLog(`Loot: ${WEAPONS[drop.id]?.name ?? drop.id}`);
				}
			} else {
				this.lootEquipment.push(drop.id);
				this.pushLog(`Loot: ${EQUIPMENT[drop.id]?.name ?? drop.id}`);
			}
		} else if (u.side === "enemy" && this.rng() < .01) {
			const id = weightedWeaponPick(this.rng, Object.keys(WEAPONS), missionGearLevel(this.mission.index));
			if (this.ownedWeapons.has(id)) this.lootEmber += 15;
			else {
				this.ownedWeapons.add(id);
				this.lootWeapons.push(id);
				this.pushLog(`Loot: ${WEAPONS[id]?.name ?? id}`);
			}
		}
	}
	gainExp(attacker, targetLevel, amount, multiplier = 1) {
		if (amount <= 0 || attacker.side !== "player" || !attacker.alive) return;
		if (attacker.level >= 30) return;
		const gained = Math.round(expForHit(attacker.level, targetLevel) * multiplier);
		if (gained <= 0) return;
		attacker.xp += gained;
		while (attacker.xp >= 100 && attacker.level < 30) {
			attacker.xp -= 100;
			this.levelUpUnit(attacker);
		}
		if (attacker.level >= 30) attacker.xp = 0;
	}
	/** Bumps a unit by one level: stat growth, the level's HP gain added to current HP (not a full heal), and any newly-unlocked tier uses granted right away. */
	levelUpUnit(u) {
		const from = u.level;
		const to = from + 1;
		const before = statsFor(u.classId, from);
		const after = statsFor(u.classId, to);
		u.level = to;
		u.maxHp = after.hp;
		u.atk = after.atk;
		u.mag = after.mag;
		u.def = after.def;
		u.res = after.res;
		u.hp = Math.min(u.maxHp, u.hp + (after.hp - before.hp));
		for (let t = 1; t <= 10; t++) {
			const tier = t;
			const key = tierKey(tier);
			const gain = tierUses(u.classId, tier, to) - tierUses(u.classId, tier, from);
			if (gain > 0) u.spells[key] += gain;
		}
		this.tip = `${u.name} subiu para o nível ${to}!`;
	}
	curePlayerDisease(u) {
		u.poisoned = false;
		if (!u.diseaseBase) {
			u.diseased = false;
			return;
		}
		u.atk = u.diseaseBase.atk;
		u.mag = u.diseaseBase.mag;
		u.def = u.diseaseBase.def;
		u.res = u.diseaseBase.res;
		u.mov = u.diseaseBase.mov;
		u.diseaseBase = null;
		u.diseased = false;
	}
	/**
	* Marks a unit as having acted this turn. A player unit that hasn't moved yet this turn
	* stays selected so it can still use its one move (order-independent move+attack); a unit
	* that already moved, is dead, or belongs to the enemy ends its turn immediately instead —
	* leaving an enemy "selected" here would expose it to player input (move/attack picks).
	*/
	finishAction(u) {
		u.acted = true;
		this.pendingFoeId = null;
		this.inspectedId = null;
		this.threat = [];
		this.attackFrom.clear();
		if (!u.alive || u.side !== "player" || !this.orig || u.x !== this.orig.x || u.y !== this.orig.y) {
			u.moved = true;
			this.selectedId = null;
			this.reach.clear();
			this.orig = null;
			this.mode = this.phase === "player" ? "idle" : "locked";
			return;
		}
		this.selectedId = u.id;
		this.orig = {
			x: u.x,
			y: u.y
		};
		this.reach = computeReachable(this.effectiveUnitForReach(u), this.tiles, this.cols, this.rows, this.units);
		this.mode = "selected";
	}
	finishCombat(att) {
		att.drawX = att.x;
		att.drawY = att.y;
		this.active = null;
		this.spellKind = null;
		this.banner = null;
		this.evaluateEnd();
		if (this.result) {
			this.selectedId = null;
			this.pendingFoeId = null;
			this.inspectedId = null;
			this.threat = [];
			this.reach.clear();
			this.attackFrom.clear();
			this.orig = null;
			this.mode = "idle";
			return;
		}
		this.finishAction(att);
	}
	smashBarricades(unit) {
		if (unit.classId !== "troll" || !unit.alive) return;
		const fill = this.tiles.includes("nave") ? "nave" : "plains";
		const seen = /* @__PURE__ */ new Set();
		let n = 0;
		for (const p of footprint(unit)) for (const c of [p, ...hexNeighbors(p.x, p.y)]) {
			if (!inBounds(c.x, c.y, this.cols, this.rows)) continue;
			const k = key(c.x, c.y);
			if (seen.has(k)) continue;
			seen.add(k);
			const i = c.y * this.cols + c.x;
			if (this.tiles[i] !== "barricade") continue;
			this.tiles[i] = fill;
			n += 1;
			this.emitParticle({
				x: c.x,
				y: c.y,
				vx: 0,
				vy: -.2,
				life: 0,
				max: .45,
				size: 1,
				color: "#c4a07a",
				kind: "impact",
				frame: 0
			});
		}
		if (n) {
			this.tip = "O troll parte a barricada.";
			this.trauma = Math.min(1, this.trauma + .35);
			sfxPlay.hit();
		}
	}
	nudgeOffHazard(unit) {
		const here = TERRAIN[tileAt(this.tiles, this.cols, unit.x, unit.y)];
		if (here.passable && !here.hazardDice) return;
		const occ = occupancy(this.units);
		const seen = /* @__PURE__ */ new Set([key(unit.x, unit.y)]);
		const q = [{
			x: unit.x,
			y: unit.y
		}];
		while (q.length) {
			const cur = q.shift();
			for (const n of hexNeighbors(cur.x, cur.y)) {
				if (n.x < 0 || n.y < 0 || n.x >= this.cols || n.y >= this.rows) continue;
				const k = key(n.x, n.y);
				if (seen.has(k)) continue;
				seen.add(k);
				const terr = TERRAIN[tileAt(this.tiles, this.cols, n.x, n.y)];
				const who = occ.get(k);
				if (terr.passable && !terr.hazardDice && (!who || who.id === unit.id)) {
					unit.x = n.x;
					unit.y = n.y;
					unit.drawX = n.x;
					unit.drawY = n.y;
					return;
				}
				q.push(n);
			}
		}
	}
	/** Lightning echo + standing-hazard damage, applied once when this unit's own turn begins. */
	startOfTurnEffects(u) {
		if (!u.alive) return;
		if (u.shock) {
			const echo = u.shock;
			u.shock = null;
			const dmg = Math.max(1, rollDice(echo.dice, echo.faces, echo.bonus, this.rng) - u.res);
			u.hp = Math.max(0, u.hp - dmg);
			u.flash = 1;
			this.spawnHit(u, dmg, false);
			this.tip = `Relâmpago · ${diceFormula(echo.dice, echo.faces, echo.bonus)} − RES`;
			this.pushLog(`Eco de relâmpago em ${u.name}: ${dmg} dano`);
			sfxPlay.hit();
			if (u.hp <= 0) this.markDead(u);
		}
		if (u.alive && u.poisoned) {
			const dmg = rollDice(1, 4, 0, this.rng);
			u.hp = Math.max(0, u.hp - dmg);
			u.flash = 1;
			this.spawnHit(u, dmg, false);
			this.tip = `Veneno · 1D4 dano`;
			this.pushLog(`Veneno consome ${u.name}: ${dmg} dano`);
			sfxPlay.hit();
			if (u.hp <= 0) this.markDead(u);
		}
		if (u.alive) this.applyTileHazard(u, {
			x: u.x,
			y: u.y
		});
		this.evaluateEnd();
	}
	applyTileHazard(unit, cell) {
		const terr = TERRAIN[tileAt(this.tiles, this.cols, cell.x, cell.y)];
		if (!terr.hazardDice || !unit.alive) return;
		const faces = terr.hazardFaces ?? 8;
		let dmg = 0;
		for (let i = 0; i < terr.hazardDice; i++) dmg += 1 + Math.floor(this.rng() * faces);
		unit.hp = Math.max(0, unit.hp - dmg);
		unit.flash = 1;
		this.spawnHit(unit, dmg, false);
		this.pushLog(`${terr.name} feriu ${unit.name}: ${dmg} dano`);
		sfxPlay.hit();
		if (unit.hp <= 0) {
			this.markDead(unit);
			this.onNextIdle = null;
		}
	}
	emitParticle(init) {
		if (this.reducedMotion && init.kind === "spark") return;
		let slot;
		for (const p of this.particles) if (!p.live) {
			slot = p;
			break;
		}
		if (!slot) {
			slot = this.particles.find((p) => p.kind !== "text") ?? this.particles[0];
			let oldest = 0;
			for (const p of this.particles) {
				if (p.kind === "text") continue;
				if (p.life / p.max > oldest) {
					oldest = p.life / p.max;
					slot = p;
				}
			}
		} else this.particleLive += 1;
		slot.live = true;
		slot.x = init.x;
		slot.y = init.y;
		slot.vx = init.vx;
		slot.vy = init.vy;
		slot.life = init.life;
		slot.max = init.max;
		slot.size = init.size;
		slot.color = init.color;
		slot.text = init.text;
		slot.kind = init.kind;
		slot.frame = init.frame;
	}
	spawnHit(target, dmg, crit) {
		const cx = target.drawX;
		const cy = target.drawY;
		this.emitParticle({
			x: cx,
			y: cy - .35,
			vx: 0,
			vy: -.18,
			life: 0,
			max: 2,
			size: 1,
			color: crit ? "#f0ebe3" : "#f2d2c6",
			text: crit ? `CRÍTICO  −${dmg}` : `−${dmg}`,
			kind: "text",
			frame: 0
		});
		this.emitParticle({
			x: cx,
			y: cy - .15,
			vx: 0,
			vy: 0,
			life: 0,
			max: .32,
			size: 1,
			color: "#fff",
			kind: "impact",
			frame: 0
		});
		if (this.reducedMotion) return;
		const n = 3;
		for (let i = 0; i < n; i++) {
			const ang = Math.PI * 2 * i / n + this.rng();
			this.emitParticle({
				x: cx,
				y: cy,
				vx: Math.cos(ang) * (1.4 + this.rng()),
				vy: Math.sin(ang) * (1.4 + this.rng()) - .4,
				life: 0,
				max: .28 + this.rng() * .12,
				size: 2 + this.rng() * 2,
				color: i % 2 ? "#b54a32" : "#f0ebe3",
				kind: "spark",
				frame: 0
			});
		}
	}
	evaluateEnd() {
		if (this.result) return;
		const p = this.units.some((u) => u.side === "player" && u.alive && !u.summoned);
		const bossAlive = this.units.some((u) => u.side === "enemy" && u.alive && u.classId === "captain");
		const anyEnemy = this.units.some((u) => u.side === "enemy" && u.alive);
		const won = this.mission.win === "boss" ? !bossAlive : !anyEnemy;
		this.winAvailable = won;
		if (!p) this.result = "defeat";
	}
	/** Player-confirmed "yes, end the mission now" — only takes effect while winAvailable
	* (the field is actually clear); a beat too late (a fresh spawn just made it false again)
	* is simply ignored rather than ending the battle out from under a live fight. */
	confirmFinish() {
		if (this.winAvailable && !this.result) this.result = "victory";
	}
	/** First not-yet-acted unit in this round's initiative order, or null if everyone has gone. */
	activeTurnUnit() {
		for (const id of this.turnOrder) {
			const u = this.units.find((x) => x.id === id);
			if (u && u.alive && !u.moved) return u;
		}
		return null;
	}
	select(unit) {
		if (unit.side !== "player" || !unit.alive || unit.moved || this.phase !== "player") {
			this.inspect(unit);
			return;
		}
		const active = this.activeTurnUnit();
		if (active && active.id !== unit.id) {
			this.inspect(unit);
			this.tip = `Ainda não é a vez de ${unit.name} — espere ${active.name} agir.`;
			return;
		}
		if (this.selectedId === unit.id && this.mode === "awaitAction") return;
		this.selectedId = unit.id;
		this.pendingFoeId = null;
		this.inspectedId = null;
		this.orig = {
			x: unit.x,
			y: unit.y
		};
		this.reach = computeReachable(this.effectiveUnitForReach(unit), this.tiles, this.cols, this.rows, this.units);
		this.attackFrom = unit.acted ? /* @__PURE__ */ new Map() : attackableEnemies(unit, this.reach, this.units, this.tiles, this.cols);
		this.threat = [];
		this.mode = "selected";
		this.tip = null;
		this.ensureVisible(unit.x, unit.y);
		sfxPlay.select();
	}
	inspect(unit) {
		this.inspectedId = unit.id;
		this.threat = computeThreat(unit, this.tiles, this.cols, this.rows, this.units);
		const max = effectiveMaxRange(unit, tileAt(this.tiles, this.cols, unit.x, unit.y));
		const tile = TERRAIN[tileAt(this.tiles, this.cols, unit.x, unit.y)];
		this.tip = `${unit.name} · HP ${unit.hp}/${unit.maxHp} · Alc ${unit.minRange === max ? max : `${unit.minRange}–${max}`}${tile.height ? " · alto +2" : ""}${tile.id === "barricade" ? " · barricada bloqueia projéteis" : ""}${unit.classId === "troll" ? " · parte barricadas" : ""}${unit.shock ? ` · Relâmpago ${diceFormula(unit.shock.dice, unit.shock.faces, unit.shock.bonus)} − RES no turno` : ""}${unit.diseased ? " · Doente (−10% em todos os stats)" : ""}${unit.poisoned ? " · Envenenado (1D4 dano por turno)" : ""}`;
		this.ensureVisible(unit.x, unit.y);
		sfxPlay.ui();
	}
	deselect(commit = false) {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!commit && u && this.orig && (u.x !== this.orig.x || u.y !== this.orig.y) && (this.mode === "awaitAction" || this.mode === "selected")) {
			u.x = this.orig.x;
			u.y = this.orig.y;
			u.drawX = u.x;
			u.drawY = u.y;
		}
		this.selectedId = null;
		this.pendingFoeId = null;
		this.inspectedId = null;
		this.threat = [];
		this.reach.clear();
		this.attackFrom.clear();
		this.orig = null;
		this.mode = "idle";
	}
	cancel() {
		if (this.mode === "awaitSpell") {
			this.mode = "awaitAction";
			this.spellArmed = false;
			this.spellAim = null;
			this.spellKind = null;
			this.tip = null;
			return;
		}
		this.deselect();
		sfxPlay.ui();
	}
	wait() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || this.phase !== "player") return;
		u.moved = true;
		u.x = Math.round(u.drawX);
		u.y = Math.round(u.drawY);
		u.drawX = u.x;
		u.drawY = u.y;
		this.deselect(true);
		sfxPlay.ui();
	}
	startAttack() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted) return;
		this.mode = "awaitAttack";
		this.tip = "Toque no alvo.";
		sfxPlay.ui();
	}
	startOffHand() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || !u.offHandId) return;
		this.mode = "awaitOffHand";
		this.tip = "Toque no alvo.";
		sfxPlay.ui();
	}
	startFireball() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "fireball") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "fireball";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${FIREBALL.name}: alcance ${FIREBALL.range}, ${fireballFormula(u.level)} − RES em área. Toque para mirar, toque de novo para lançar.`;
		sfxPlay.ui();
	}
	startCausticVenom() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "causticVenom") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "causticVenom";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${CAUSTIC_VENOM.name}: alcance ${CAUSTIC_VENOM.range}, alvo ${diceFormula(CAUSTIC_VENOM.centerDice, CAUSTIC_VENOM.centerFaces, CAUSTIC_VENOM.centerBonus)} − RES, respingo ${diceFormula(CAUSTIC_VENOM.splashDice, CAUSTIC_VENOM.splashFaces, CAUSTIC_VENOM.splashBonus)} − RES em área — envenena todos atingidos, até aliados. Toque para mirar, toque de novo para lançar.`;
		sfxPlay.ui();
	}
	startLongShot() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "longShot") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "longShot";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${LONG_SHOT.name}: alcance ${u.minRange}–${this.longMax(u)}, AT − DF + ${diceFormula(LONG_SHOT.bonusDice, LONG_SHOT.bonusFaces, LONG_SHOT.bonus)}. Toque no inimigo.`;
		sfxPlay.ui();
	}
	startPiercing() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "piercing") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "piercing";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${PIERCING.name}: reta da colmeia. Dobro do AT − DF em cada um na linha, aliado ou inimigo.`;
		sfxPlay.ui();
	}
	startLightning() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "lightning") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "lightning";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `Relâmpago: alcance ${LIGHTNING.range}, ${lightningFormula(u.level)} − RES. No turno seguinte ${diceFormula(LIGHTNING.echoDice, LIGHTNING.echoFaces, LIGHTNING.echoBonus)} − RES. Toque no inimigo.`;
		sfxPlay.ui();
	}
	startMagicMissile() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "magicMissile") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "magicMissile";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${MAGIC_MISSILE.name}: alcance ${MAGIC_MISSILE.range}, ${diceFormula(MAGIC_MISSILE.dice, MAGIC_MISSILE.faces, MAGIC_MISSILE.bonus)} − RES. Acerto garantido. Toque no inimigo.`;
		sfxPlay.ui();
	}
	startDoubleStrike() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "doubleStrike") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "doubleStrike";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${DOUBLE_STRIKE.name}: ataca duas vezes com o dano normal da arma. Toque no inimigo.`;
		sfxPlay.ui();
	}
	startCleave() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "cleave") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "cleave";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${CLEAVE.name}: ${CLEAVE.hexes} hexes adjacentes, dano da arma + ${diceFormula(CLEAVE.bonusDice, CLEAVE.bonusFaces, CLEAVE.bonusBonus)}. Toque num hex vizinho.`;
		sfxPlay.ui();
	}
	startPiercingThrust() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "piercingThrust") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "piercingThrust";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${PIERCING_THRUST.name}: reta curta, ignora ${Math.round(PIERCING_THRUST.armorIgnore * 100)}% da defesa. 1º alvo dano cheio, os demais metade.`;
		sfxPlay.ui();
	}
	/** Sweep (Lancer tier 2) needs no target — it always hits every enemy on an adjacent hex
	* and resolves immediately, same as Esperar/Arrombar rather than the aim-then-Lançar flow
	* every other spell uses. */
	startSweep() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "sweep") <= 0) return;
		const tiles = hexNeighbors(u.x, u.y);
		const ids = [];
		for (const t of tiles) {
			const who = this.units.find((x) => x.alive && occupies(x, t.x, t.y));
			if (who && who.id !== u.id && who.side !== u.side && !ids.includes(who.id)) ids.push(who.id);
		}
		this.spendTier(u, "sweep");
		this.spellKind = null;
		this.spellArmed = false;
		this.spellAim = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "spell",
			att: u.id,
			tiles,
			ids,
			label: SWEEP.name,
			spellKind: "sweep"
		});
		sfxPlay.sweep();
	}
	startTrip() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "trip") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "trip";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${TRIP.name}: dano da arma + ${diceFormula(1, TRIP.bonusFaces, TRIP.bonusBonus)}, atordoa por ${TRIP.stunRounds} turnos e reduz stats em ${Math.round(TRIP.statPenalty * 100)}% até o fim do combate. Toque no inimigo.`;
		sfxPlay.ui();
	}
	startSummonFamiliar() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "summonFamiliar") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "summonFamiliar";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${SUMMON_FAMILIAR.name}: convoca um aliado com metade dos seus atributos atuais, até ${SUMMON_FAMILIAR.range} hexes. Toque num espaço livre.`;
		sfxPlay.ui();
	}
	startWebOfDreams() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "webOfDreams") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "webOfDreams";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${WEB_OF_DREAMS.name}: cria uma teia grudenta por ${WEB_OF_DREAMS.durationRounds} rodadas — quem estiver dentro fica com movimento reduzido a 1 hex, e testa ${Math.round(WEB_OF_DREAMS.sleepChance * 100)}% de chance de adormecer por ${diceFormula(WEB_OF_DREAMS.sleepDice, WEB_OF_DREAMS.sleepFaces, 0)} turnos a cada turno que permanecer lá dentro (cumulativo). Alcance ${WEB_OF_DREAMS.range}. Toque para mirar.`;
		sfxPlay.ui();
	}
	confirmSpell() {
		const u = this.units.find((x) => x.id === this.selectedId);
		const cell = this.hover;
		if (!u || this.mode !== "awaitSpell" || !cell || !this.spellKind) return;
		if (this.spellKind === "fireball") {
			this.confirmFireball();
			return;
		}
		if (this.spellKind === "causticVenom") {
			this.confirmCausticVenom();
			return;
		}
		if (this.spellKind === "longShot") {
			this.castLongShot(u, cell);
			return;
		}
		if (this.spellKind === "piercing") {
			this.castPiercing(u, cell);
			return;
		}
		if (this.spellKind === "piercingThrust") {
			this.castPiercingThrust(u, cell);
			return;
		}
		if (this.spellKind === "trip") {
			this.castTrip(u, cell);
			return;
		}
		if (this.spellKind === "summonFamiliar") {
			this.castSummonFamiliar(u, cell);
			return;
		}
		if (this.spellKind === "webOfDreams") {
			this.castWebOfDreams(u, cell);
			return;
		}
		if (this.spellKind === "lightning") {
			this.castLightning(u, cell);
			return;
		}
		if (this.spellKind === "magicMissile") {
			this.castMagicMissile(u, cell);
			return;
		}
		if (this.spellKind === "doubleStrike") {
			this.castDoubleStrike(u, cell);
			return;
		}
		if (this.spellKind === "cleave") {
			this.castCleave(u, cell);
			return;
		}
		if (this.spellKind === "cureDisease") {
			this.castCureDisease(u, cell);
			return;
		}
		if (this.spellKind === "sweep") return;
		this.castHeal(u, cell, this.spellKind);
	}
	startCure(kind) {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, kind) <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = kind;
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${CURES[kind].name}: ${cureSpan(kind)} HP, alcance ${CURES[kind].range}. Toque num aliado ferido.`;
		sfxPlay.ui();
	}
	startCureDisease() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.acted || this.tierRemaining(u, "cureDisease") <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "cureDisease";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${CURE_DISEASE.name}: cura doença, alcance ${CURE_DISEASE.range}. Toque num aliado doente.`;
		sfxPlay.ui();
	}
	confirmHeal() {
		const u = this.units.find((x) => x.id === this.selectedId);
		const cell = this.hover;
		if (!u || this.mode !== "awaitSpell" || !cell || !this.isHeal(this.spellKind)) return;
		this.castHeal(u, cell, this.spellKind);
	}
	isHeal(kind) {
		return kind === "cureMinor" || kind === "cureWounds";
	}
	tierRemaining(u, kind) {
		const tier = spellTier(kind);
		return tier ? u.spells[tierKey(tier)] : 0;
	}
	spendTier(u, kind) {
		const tier = spellTier(kind);
		if (!tier) return;
		u.spells[tierKey(tier)] -= 1;
	}
	longMax(u) {
		const extra = (u.weaponId ? !!WEAPONS[u.weaponId]?.ranged : false) && TERRAIN[tileAt(this.tiles, this.cols, u.x, u.y)].height ? 1 : 0;
		return u.maxRange * LONG_SHOT.rangeMul + LONG_SHOT.rangeBonus + extra;
	}
	/** True while (x,y) sits inside any still-active Web of Dreams patch. */
	isWebCell(x, y) {
		return this.webZones.some((z) => z.cells.has(key(x, y)));
	}
	/** Every reach computation for a unit's own turn — including every re-derive free
	* repositioning does after each move — funnels through here, so both of its clamps stay
	* correct no matter how many times the player changes their mind about where to end up:
	*
	* 1. Web of Dreams' "restrained / difficult terrain" clause: a unit whose current cell was
	*    webbed at the START of its turn (this.turnRestrained, decided once in beginUnitTurn,
	*    not re-checked live — see the old note this replaced) gets mov clamped to 1.
	* 2. moveBudgetUsed: free repositioning recomputes reach fresh from wherever the unit
	*    currently stands, which — with the unit's real, full mov every time — would hand back
	*    a fresh movement budget on every single move and let a unit hop across the whole map
	*    in one turn. Subtracting what's already been spent (see commitMove) caps the turn's
	*    real total distance at mov, same as it's always meant to be; the player still gets to
	*    freely change their mind about WHERE within that budget to land, no clunky cancel/
	*    reselect needed — that part is the actual point of free repositioning and stays.
	*
	* Both clamps use the same "shallow clone with one derived stat overridden" trick Piercing
	* Thrust's armor-ignore calc uses — the real Unit's own mov is never touched. */
	effectiveUnitForReach(u) {
		const remaining = Math.max(0, u.mov - u.moveBudgetUsed);
		const cap = this.turnRestrained ? Math.min(remaining, 1) : remaining;
		return cap === u.mov ? u : {
			...u,
			mov: cap
		};
	}
	spellAimValid(caster, cell) {
		if (!this.spellKind) return false;
		if (this.spellKind === "fireball") {
			if (manhattan(caster, cell) > FIREBALL.range) return false;
			return clearShot(caster, fireballOrigin(cell, this.cols, this.rows), this.tiles, this.cols, "bolt");
		}
		if (this.spellKind === "causticVenom") {
			if (manhattan(caster, cell) > CAUSTIC_VENOM.range) return false;
			return clearShot(caster, fireballOrigin(cell, this.cols, this.rows), this.tiles, this.cols, "bolt");
		}
		if (this.spellKind === "longShot") {
			const d = manhattan(caster, cell);
			const here = occupancy(this.units).get(key(cell.x, cell.y));
			if (!here || !here.alive || here.side !== "enemy" || d < caster.minRange || d > this.longMax(caster)) return false;
			return clearShot(caster, cell, this.tiles, this.cols, "arrow");
		}
		if (this.spellKind === "piercing") return this.piercingRay(caster, cell) !== null;
		if (this.spellKind === "piercingThrust") return this.piercingThrustRay(caster, cell) !== null;
		if (this.spellKind === "lightning") {
			const here = occupancy(this.units).get(key(cell.x, cell.y));
			if (!here || !here.alive || here.side !== "enemy" || manhattan(caster, cell) > LIGHTNING.range) return false;
			return clearShot(caster, cell, this.tiles, this.cols, "bolt");
		}
		if (this.spellKind === "magicMissile") {
			const here = occupancy(this.units).get(key(cell.x, cell.y));
			if (!here || !here.alive || here.side !== "enemy" || manhattan(caster, cell) > MAGIC_MISSILE.range) return false;
			return clearShot(caster, cell, this.tiles, this.cols, "bolt");
		}
		if (this.spellKind === "summonFamiliar") {
			if (manhattan(caster, cell) > SUMMON_FAMILIAR.range) return false;
			if (!inBounds(cell.x, cell.y, this.cols, this.rows)) return false;
			if (!TERRAIN[tileAt(this.tiles, this.cols, cell.x, cell.y)].passable) return false;
			return !occupancy(this.units).get(key(cell.x, cell.y));
		}
		if (this.spellKind === "webOfDreams") {
			if (manhattan(caster, cell) > WEB_OF_DREAMS.range) return false;
			return clearShot(caster, fireballOrigin(cell, this.cols, this.rows), this.tiles, this.cols, "bolt");
		}
		if (this.spellKind === "doubleStrike" || this.spellKind === "trip") {
			const here = occupancy(this.units).get(key(cell.x, cell.y));
			return !!here && here.alive && here.side !== caster.side && canHitFrom(caster, caster, here, this.tiles, this.cols);
		}
		if (this.spellKind === "cleave") return hexNeighbors(caster.x, caster.y).some((p) => p.x === cell.x && p.y === cell.y);
		if (this.spellKind === "cureDisease") return this.validCureDiseaseTarget(caster, cell);
		return this.validHealTarget(caster, cell);
	}
	piercingRay(from, through) {
		const raw = piercingLine(from, through, this.cols, this.rows);
		if (!raw) return null;
		const fromHigh = !!TERRAIN[tileAt(this.tiles, this.cols, from.x, from.y)].height;
		const out = [];
		for (const p of raw) {
			const t = TERRAIN[tileAt(this.tiles, this.cols, p.x, p.y)];
			if (t.id === "barricade" || t.blocksShot) break;
			if (t.height && !fromHigh) break;
			out.push(p);
		}
		return out.length ? out : null;
	}
	/** Piercing Thrust (Lancer tier 1): the same straight-line traversal as Piercing, capped
	* to the caster's own weapon reach + 1 hex — a short lunge, not an arrow flying the length
	* of the board. */
	piercingThrustRay(caster, through) {
		const raw = this.piercingRay(caster, through);
		if (!raw) return null;
		const capped = raw.slice(0, caster.maxRange + 1);
		return capped.length ? capped : null;
	}
	/** Sweep (Lancer tier 2): shoves `foe` one hex further along the line from `att` through
	* `foe`, silently doing nothing if that hex is off the board, impassable, or already
	* occupied — a blocked shove just fails, it never displaces someone else instead. */
	knockBack(att, foe) {
		const from = oddrToCube(att.x, att.y);
		const at = oddrToCube(foe.x, foe.y);
		const pushed = cubeAdd(at, {
			q: at.q - from.q,
			r: at.r - from.r,
			s: at.s - from.s
		});
		const dest = cubeToOddr(pushed.q, pushed.r);
		if (!inBounds(dest.x, dest.y, this.cols, this.rows)) return;
		if (!TERRAIN[tileAt(this.tiles, this.cols, dest.x, dest.y)].passable) return;
		if (this.units.some((u) => u.alive && occupies(u, dest.x, dest.y))) return;
		foe.x = dest.x;
		foe.y = dest.y;
		foe.drawX = dest.x;
		foe.drawY = dest.y;
		this.emitParticle({
			x: foe.drawX,
			y: foe.drawY + .3,
			vx: 0,
			vy: 0,
			life: 0,
			max: .35,
			size: 1,
			color: "#c9b28a",
			kind: "impact",
			frame: 0
		});
	}
	validHealTarget(caster, cell) {
		if (!this.isHeal(this.spellKind)) return false;
		const range = CURES[this.spellKind].range;
		if (manhattan(caster, cell) > range) return false;
		const who = occupancy(this.units).get(key(cell.x, cell.y));
		return !!who && who.side === "player" && who.alive && who.hp < who.maxHp;
	}
	validCureDiseaseTarget(caster, cell) {
		if (manhattan(caster, cell) > CURE_DISEASE.range) return false;
		const who = occupancy(this.units).get(key(cell.x, cell.y));
		return !!who && who.side === "player" && who.alive && (who.diseased || who.poisoned);
	}
	healRangeTiles(from, range) {
		const out = [];
		for (let y = 0; y < this.rows; y++) for (let x = 0; x < this.cols; x++) if (manhattan(from, {
			x,
			y
		}) <= range) out.push({
			x,
			y
		});
		return out;
	}
	castHeal(unit, cell, kind) {
		if (!this.validHealTarget(unit, cell)) {
			this.tip = "Alvo inválido.";
			sfxPlay.ui();
			return;
		}
		const target = occupancy(this.units).get(key(cell.x, cell.y));
		if (!target) return;
		this.spendTier(unit, kind);
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "heal",
			att: unit.id,
			def: target.id,
			kind
		});
	}
	castCureDisease(unit, cell) {
		if (!this.validCureDiseaseTarget(unit, cell)) {
			this.tip = "Alvo inválido.";
			sfxPlay.ui();
			return;
		}
		const target = occupancy(this.units).get(key(cell.x, cell.y));
		if (!target) return;
		this.spendTier(unit, "cureDisease");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "cureDisease",
			att: unit.id,
			def: target.id
		});
	}
	confirmFireball() {
		const u = this.units.find((x) => x.id === this.selectedId);
		const cell = this.hover;
		if (!u || this.mode !== "awaitSpell" || !cell) return;
		if (manhattan(u, cell) > FIREBALL.range) {
			this.tip = "Fora de alcance.";
			sfxPlay.ui();
			return;
		}
		this.castFireball(u, cell);
	}
	confirmCausticVenom() {
		const u = this.units.find((x) => x.id === this.selectedId);
		const cell = this.hover;
		if (!u || this.mode !== "awaitSpell" || !cell) return;
		if (manhattan(u, cell) > CAUSTIC_VENOM.range) {
			this.tip = "Fora de alcance.";
			sfxPlay.ui();
			return;
		}
		this.castCausticVenom(u, cell);
	}
	castLongShot(unit, cell) {
		if (!this.spellAimValid(unit, cell)) {
			this.tip = "Alvo fora de alcance.";
			sfxPlay.ui();
			return;
		}
		const foe = occupancy(this.units).get(key(cell.x, cell.y));
		if (!foe) return;
		this.spendTier(unit, "longShot");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "combat",
			att: unit.id,
			def: foe.id,
			bonusDice: LONG_SHOT.bonusFaces,
			bonusFlat: LONG_SHOT.bonus,
			spellKind: "longShot"
		});
	}
	castPiercing(unit, cell) {
		const line = this.piercingRay(unit, cell);
		if (!line) {
			this.tip = "Escolha uma reta da colmeia.";
			sfxPlay.ui();
			return;
		}
		const ids = [];
		for (const t of line) {
			const who = this.units.find((x) => x.alive && occupies(x, t.x, t.y));
			if (who && who.id !== unit.id && !ids.includes(who.id)) ids.push(who.id);
		}
		this.spendTier(unit, "piercing");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles: line,
			ids,
			label: PIERCING.name,
			dmgMul: PIERCING.dmgMul,
			spellKind: "piercing"
		});
	}
	castPiercingThrust(unit, cell) {
		const line = this.piercingThrustRay(unit, cell);
		if (!line) {
			this.tip = "Escolha uma reta na frente.";
			sfxPlay.ui();
			return;
		}
		const ids = [];
		for (const t of line) {
			const who = this.units.find((x) => x.alive && occupies(x, t.x, t.y));
			if (who && who.id !== unit.id && !ids.includes(who.id)) ids.push(who.id);
		}
		this.spendTier(unit, "piercingThrust");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		sfxPlay.thrust();
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles: line,
			ids,
			label: PIERCING_THRUST.name,
			spellKind: "piercingThrust"
		});
	}
	castLightning(unit, cell) {
		if (!this.spellAimValid(unit, cell)) {
			this.tip = "Alvo fora de alcance.";
			sfxPlay.ui();
			return;
		}
		const foe = occupancy(this.units).get(key(cell.x, cell.y));
		if (!foe) return;
		this.spendTier(unit, "lightning");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles: [cell],
			ids: [foe.id],
			dice: lightningDice(unit.level),
			faces: LIGHTNING.faces,
			bonus: LIGHTNING.bonus,
			label: LIGHTNING.name,
			echo: {
				dice: LIGHTNING.echoDice,
				faces: LIGHTNING.echoFaces,
				bonus: LIGHTNING.echoBonus
			},
			spellKind: "lightning"
		});
	}
	castMagicMissile(unit, cell) {
		if (!this.spellAimValid(unit, cell)) {
			this.tip = "Alvo fora de alcance.";
			sfxPlay.ui();
			return;
		}
		const foe = occupancy(this.units).get(key(cell.x, cell.y));
		if (!foe) return;
		this.spendTier(unit, "magicMissile");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles: [cell],
			ids: [foe.id],
			dice: MAGIC_MISSILE.dice,
			faces: MAGIC_MISSILE.faces,
			bonus: MAGIC_MISSILE.bonus,
			label: MAGIC_MISSILE.name,
			spellKind: "magicMissile"
		});
	}
	castDoubleStrike(unit, cell) {
		if (!this.spellAimValid(unit, cell)) {
			this.tip = "Toque no inimigo.";
			sfxPlay.ui();
			return;
		}
		const foe = occupancy(this.units).get(key(cell.x, cell.y));
		if (!foe) return;
		this.spendTier(unit, "doubleStrike");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "combat",
			att: unit.id,
			def: foe.id,
			noCounter: true
		});
		this.queue.push({
			type: "combat",
			att: unit.id,
			def: foe.id
		});
	}
	castTrip(unit, cell) {
		if (!this.spellAimValid(unit, cell)) {
			this.tip = "Toque no inimigo.";
			sfxPlay.ui();
			return;
		}
		const foe = occupancy(this.units).get(key(cell.x, cell.y));
		if (!foe) return;
		this.spendTier(unit, "trip");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "combat",
			att: unit.id,
			def: foe.id,
			noCounter: true,
			bonusDice: TRIP.bonusFaces,
			bonusFlat: TRIP.bonusBonus,
			spellKind: "trip"
		});
	}
	/** Summon Familiar (Conjurer tier 1): spawns a new player-side unit directly into
	* `this.units` — no queued animation step, it just appears. It has no slot in this round's
	* `turnOrder` (that's rebuilt from `this.units` fresh every round in startNewRound), so it
	* waits for the round after this one to act, same as any other reinforcement would. */
	castSummonFamiliar(unit, cell) {
		if (!this.spellAimValid(unit, cell)) {
			this.tip = "Escolha um espaço livre ao alcance.";
			sfxPlay.ui();
			return;
		}
		const cls = CLASSES.familiar;
		const scale = SUMMON_FAMILIAR.statScale;
		const maxHp = Math.max(1, Math.round(unit.maxHp * scale));
		const familiar = {
			id: `player-familiar-${this.units.length}`,
			name: `Familiar de ${unit.name}`,
			classId: "familiar",
			className: cls.name,
			role: cls.role,
			side: "player",
			sprite: cls.sprite,
			x: cell.x,
			y: cell.y,
			hp: maxHp,
			maxHp,
			atk: Math.round(unit.atk * scale),
			mag: Math.round(unit.mag * scale),
			def: Math.round(unit.def * scale),
			res: Math.round(unit.res * scale),
			mov: cls.mov,
			minRange: cls.minRange,
			maxRange: cls.maxRange,
			moved: false,
			acted: false,
			facing: 1,
			walkPose: "front",
			alive: true,
			drawX: cell.x,
			drawY: cell.y,
			flash: 0,
			fade: 1,
			bob: 0,
			level: unit.level,
			xp: 0,
			bag: { ...EMPTY_BAG },
			spells: {
				tier1: 0,
				tier2: 0,
				tier3: 0,
				tier4: 0,
				tier5: 0,
				tier6: 0,
				tier7: 0,
				tier8: 0,
				tier9: 0,
				tier10: 0
			},
			weaponId: null,
			weaponEnh: 0,
			size: cls.size,
			footprintW: cls.footprintW,
			footprintH: cls.footprintH,
			footprintOffsets: cls.footprintOffsets,
			shock: null,
			diseased: false,
			diseaseBase: null,
			poisoned: false,
			stunned: false,
			stunTurns: 0,
			crippled: false,
			offHandId: null,
			summoned: true,
			asleep: false,
			sleepTurns: 0,
			guaranteedDrop: false,
			moveBudgetUsed: 0
		};
		this.units.push(familiar);
		this.spendTier(unit, "summonFamiliar");
		this.spellKind = null;
		this.emitParticle({
			x: cell.x,
			y: cell.y - .2,
			vx: 0,
			vy: -.3,
			life: 0,
			max: .5,
			size: 1.4,
			color: "#8c6cd8",
			kind: "impact",
			frame: 0
		});
		this.tip = `${unit.name} invocou ${familiar.name}.`;
		sfxPlay.spell();
		this.finishAction(unit);
	}
	castWebOfDreams(unit, click) {
		if (!this.spellAimValid(unit, click)) {
			this.tip = "Escolha um espaço ao alcance.";
			sfxPlay.ui();
			return;
		}
		const cells = hexAreaTiles(click, WEB_OF_DREAMS.size, this.cols, this.rows);
		const cellKeys = new Set(cells.map((p) => key(p.x, p.y)));
		this.webZones.push({
			cells: cellKeys,
			roundsLeft: WEB_OF_DREAMS.durationRounds
		});
		let asleepCount = 0;
		for (const u of this.units) {
			if (!u.alive || !cellKeys.has(key(u.x, u.y))) continue;
			if (this.rng() < WEB_OF_DREAMS.sleepChance) {
				u.asleep = true;
				u.sleepTurns = rollDice(WEB_OF_DREAMS.sleepDice, WEB_OF_DREAMS.sleepFaces, 0, this.rng);
				asleepCount++;
			}
		}
		this.spendTier(unit, "webOfDreams");
		this.spellKind = null;
		this.emitParticle({
			x: click.x,
			y: click.y - .2,
			vx: 0,
			vy: -.3,
			life: 0,
			max: .5,
			size: 1.4,
			color: "#8c6cd8",
			kind: "impact",
			frame: 0
		});
		this.tip = `${unit.name} conjurou ${WEB_OF_DREAMS.name}${asleepCount > 0 ? ` — ${asleepCount} adormeceu(ram)` : ""}.`;
		this.pushLog(`${unit.name} conjura ${WEB_OF_DREAMS.name}.`);
		sfxPlay.spell();
		this.finishAction(unit);
	}
	castCleave(unit, cell) {
		if (!this.spellAimValid(unit, cell)) {
			this.tip = "Toque num hex vizinho.";
			sfxPlay.ui();
			return;
		}
		const tiles = cleaveHexes(unit, cell, CLEAVE.hexes, this.cols, this.rows);
		if (tiles.length === 0) {
			this.tip = "Toque num hex vizinho.";
			sfxPlay.ui();
			return;
		}
		const ids = [];
		for (const t of tiles) {
			const who = this.units.find((x) => x.alive && occupies(x, t.x, t.y));
			if (who && who.id !== unit.id && who.side !== unit.side && !ids.includes(who.id)) ids.push(who.id);
		}
		this.spendTier(unit, "cleave");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles,
			ids,
			label: CLEAVE.name,
			weaponBonusDice: CLEAVE.bonusDice,
			weaponBonusFaces: CLEAVE.bonusFaces,
			weaponBonusBonus: CLEAVE.bonusBonus,
			spellKind: "cleave"
		});
	}
	usePotion(kind) {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.side !== "player" || !u.alive || u.acted) return;
		if (this.mode !== "awaitAction" && this.mode !== "selected" && this.mode !== "awaitAttack" && this.mode !== "awaitSpell") return;
		if (this.phase !== "player" || this.result) return;
		if (u.bag[kind] <= 0) return;
		const def = POTIONS$1[kind];
		if (def.effect === "disease") {
			if (!u.diseased && !u.poisoned) {
				this.tip = `${def.name} · ${u.name} não está doente.`;
				sfxPlay.ui();
				return;
			}
			u.bag[kind] -= 1;
			this.curePlayerDisease(u);
			u.x = Math.round(u.drawX);
			u.y = Math.round(u.drawY);
			this.tip = `${def.name} · doença curada.`;
			this.finishAction(u);
			sfxPlay.ui();
			return;
		}
		if (def.effect === "mana") {
			const restore = def.manaRestore ?? 0;
			let restored = 0;
			for (let t = 1; t <= 10; t++) {
				const tk = tierKey(t);
				const cap = tierUses(u.classId, t, u.level);
				if (cap <= 0) continue;
				const next = Math.min(cap, u.spells[tk] + restore);
				restored += next - u.spells[tk];
				u.spells[tk] = next;
			}
			if (restored <= 0) {
				this.tip = `${def.name} · magias já estão no máximo.`;
				sfxPlay.ui();
				return;
			}
			u.bag[kind] -= 1;
			u.x = Math.round(u.drawX);
			u.y = Math.round(u.drawY);
			this.emitParticle({
				x: u.drawX,
				y: u.drawY - .35,
				vx: 0,
				vy: -.18,
				life: 0,
				max: 2,
				size: 1,
				color: "#a08cd8",
				text: `+${restored}`,
				kind: "text",
				frame: 0
			});
			this.tip = `${def.name} · +${restored} usos de magia`;
			this.finishAction(u);
			sfxPlay.ui();
			return;
		}
		if (u.hp >= u.maxHp) return;
		const heal = rollPotion(kind, this.rng);
		const gained = Math.min(heal, u.maxHp - u.hp);
		u.hp += gained;
		this.gainExp(u, u.level, gained);
		u.bag[kind] -= 1;
		u.x = Math.round(u.drawX);
		u.y = Math.round(u.drawY);
		this.emitParticle({
			x: u.drawX,
			y: u.drawY - .35,
			vx: 0,
			vy: -.18,
			life: 0,
			max: 2,
			size: 1,
			color: "#d8ead2",
			text: `+${gained}`,
			kind: "text",
			frame: 0
		});
		this.tip = `${potionLabel(kind)} · +${gained} HP`;
		this.finishAction(u);
		sfxPlay.ui();
	}
	/** First adjacent locked chest/door around a unit's own tile, or null if none. */
	adjacentLock(u) {
		for (const p of hexNeighbors(u.x, u.y)) {
			if (!inBounds(p.x, p.y, this.cols, this.rows)) continue;
			const t = tileAt(this.tiles, this.cols, p.x, p.y);
			if (t === "chest" || t === "door") return p;
		}
		return null;
	}
	/** "Arrombar": spends a Gazua to open an adjacent locked chest/door. */
	useLockpick() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.side !== "player" || !u.alive || u.acted) return;
		if (this.mode !== "awaitAction" && this.mode !== "selected" && this.mode !== "awaitAttack" && this.mode !== "awaitSpell") return;
		if (this.phase !== "player" || this.result) return;
		if (u.bag.lockpick <= 0) return;
		const target = this.adjacentLock(u);
		if (!target) return;
		const i = target.y * this.cols + target.x;
		const wasChest = this.tiles[i] === "chest";
		this.tiles[i] = "plains";
		u.bag.lockpick -= 1;
		u.x = Math.round(u.drawX);
		u.y = Math.round(u.drawY);
		this.emitParticle({
			x: target.x,
			y: target.y,
			vx: 0,
			vy: -.2,
			life: 0,
			max: .45,
			size: 1,
			color: "#d8b862",
			kind: "impact",
			frame: 0
		});
		const found = [];
		if (wasChest) {
			const better = this.mission.betterChests?.some((c) => c.x === target.x && c.y === target.y) ?? false;
			const gain = (better ? CHEST_LOOT.betterEmberBase : CHEST_LOOT.emberBase) + Math.floor(this.rng() * (better ? CHEST_LOOT.betterEmberDice : CHEST_LOOT.emberDice));
			this.lootEmber += gain;
			const potionKind = weightedPotionPick(this.rng);
			if (this.givePotion(u, potionKind)) found.push(POTIONS$1[potionKind].name);
			if (this.rng() < (better ? CHEST_LOOT.betterGearChance : CHEST_LOOT.gearChance)) {
				const drop = weightedLootPick(this.rng, missionGearLevel(this.mission.index), this.ownedWeapons);
				if (drop.kind === "weapon") {
					this.ownedWeapons.add(drop.id);
					this.lootWeapons.push(drop.id);
					found.push(WEAPONS[drop.id].name);
				} else {
					this.lootEquipment.push(drop.id);
					found.push(EQUIPMENT[drop.id].name);
				}
			}
			this.tip = `${u.name} arrombou o baú · +${gain} Ember · achou ${found.join(", ")}.`;
			this.pushLog(this.tip);
		} else {
			this.tip = `${u.name} arrombou a porta.`;
			this.pushLog(this.tip);
		}
		this.finishAction(u);
		if (wasChest) {
			sfxPlay.chest();
			if (found.length > 0) setTimeout(() => sfxPlay.loot(), 130);
		} else sfxPlay.ui();
	}
	/** "Fim do turno": passes whoever's turn it currently is (same as Esperar). */
	endTurn() {
		const active = this.activeTurnUnit();
		if (!active || active.side !== "player" || this.result) return;
		active.moved = true;
		active.x = Math.round(active.drawX);
		active.y = Math.round(active.drawY);
		active.drawX = active.x;
		active.drawY = active.y;
		this.deselect(true);
		sfxPlay.ui();
	}
	/** Dispatches control for whoever is next in this round's initiative order. */
	beginUnitTurn(u) {
		this.phase = u.side;
		u.moveBudgetUsed = 0;
		this.startOfTurnEffects(u);
		if (!u.alive) {
			this.activeUnitId = null;
			return;
		}
		if (u.stunned) {
			u.stunTurns = Math.max(0, u.stunTurns - 1);
			u.stunned = u.stunTurns > 0;
			u.moved = true;
			u.acted = true;
			this.tip = `${u.name} está atordoado(a) — perde o turno.`;
			this.activeUnitId = null;
			return;
		}
		if (this.isWebCell(u.x, u.y) && this.rng() < WEB_OF_DREAMS.sleepChance) {
			const wasAsleep = u.asleep;
			const extra = rollDice(WEB_OF_DREAMS.sleepDice, WEB_OF_DREAMS.sleepFaces, 0, this.rng);
			u.asleep = true;
			u.sleepTurns += extra;
			this.pushLog(wasAsleep ? `${u.name} afunda mais fundo na teia (+${extra} turnos).` : `${u.name} adormece na teia.`);
		}
		if (u.asleep) {
			u.sleepTurns = Math.max(0, u.sleepTurns - 1);
			u.asleep = u.sleepTurns > 0;
			u.moved = true;
			u.acted = true;
			this.tip = `${u.name} está adormecido(a) — perde o turno.`;
			this.activeUnitId = null;
			return;
		}
		this.turnRestrained = this.isWebCell(u.x, u.y);
		if (u.side === "player") {
			u.acted = false;
			this.selectedId = u.id;
			this.pendingFoeId = null;
			this.inspectedId = null;
			this.orig = {
				x: u.x,
				y: u.y
			};
			this.reach = computeReachable(this.effectiveUnitForReach(u), this.tiles, this.cols, this.rows, this.units);
			this.attackFrom = attackableEnemies(u, this.reach, this.units, this.tiles, this.cols);
			this.threat = [];
			this.mode = "selected";
			this.tip = null;
			this.centerOn(u.x, u.y);
		} else {
			this.mode = "locked";
			this.runAiFor(u);
		}
	}
	/** Everyone has had their turn this round — reset and re-roll the initiative order. */
	startNewRound() {
		this.mode = "locked";
		this.selectedId = null;
		this.pendingFoeId = null;
		this.inspectedId = null;
		this.reach.clear();
		this.attackFrom.clear();
		this.threat = [];
		for (const u of this.units) {
			u.moved = false;
			u.acted = false;
		}
		for (const z of this.webZones) z.roundsLeft -= 1;
		this.webZones = this.webZones.filter((z) => z.roundsLeft > 0);
		this.turnOrder = this.sortByInitiative(this.units.filter((u) => u.alive));
		this.turn += 1;
		this.activeUnitId = null;
	}
	runAiFor(next) {
		this.smashBarricades(next);
		const reach = computeReachable(this.effectiveUnitForReach(next), this.tiles, this.cols, this.rows, this.units);
		const players = this.units.filter((u) => u.side === "player" && u.alive);
		let best = null;
		for (const cell of reach.values()) for (const foe of players) {
			if (!canHitFrom(next, cell, foe, this.tiles, this.cols)) continue;
			const terr = TERRAIN[tileAt(this.tiles, this.cols, cell.x, cell.y)];
			const score = (foe.maxHp - foe.hp) * 3 + terr.def * 2 + (foe.hp <= 8 ? 20 : 0);
			if (!best || score > best.score) best = {
				foe,
				from: {
					x: cell.x,
					y: cell.y
				},
				score
			};
		}
		if (best) {
			if (best.from.x !== next.x || best.from.y !== next.y) this.queue.push({
				type: "move",
				id: next.id,
				path: reconstructPath(reach, best.from)
			});
			this.queue.push({
				type: "combat",
				att: next.id,
				def: best.foe.id
			});
			this.queue.push({
				type: "delay",
				dur: .12
			});
			return;
		}
		if (players.length === 0) {
			next.moved = true;
			return;
		}
		const fields = players.map((p) => ({
			p,
			field: terrainDistanceField(p, this.tiles, this.cols, this.rows)
		}));
		let nearest = fields[0];
		for (const f of fields) if ((f.field.get(key(next.x, next.y)) ?? Infinity) < (nearest.field.get(key(next.x, next.y)) ?? Infinity)) nearest = f;
		let closest = null;
		let dist = Infinity;
		for (const cell of reach.values()) {
			const d = nearest.field.get(key(cell.x, cell.y)) ?? Infinity;
			if (d < dist) {
				dist = d;
				closest = {
					x: cell.x,
					y: cell.y
				};
			}
		}
		if (closest && (closest.x !== next.x || closest.y !== next.y)) this.queue.push({
			type: "move",
			id: next.id,
			path: reconstructPath(reach, closest)
		});
		next.moved = true;
		this.queue.push({
			type: "delay",
			dur: .08
		});
	}
	pointerMove(cssX, cssY) {
		const cell = this.hitCell(cssX, cssY);
		this.hover = cell;
	}
	pointerDown(cssX, cssY, via = "click") {
		if (this.result || this.mode === "locked") return;
		const cell = this.hitCell(cssX, cssY);
		if (!cell) {
			if (this.mode === "selected" || this.mode === "awaitAction") this.deselect();
			return;
		}
		const now = typeof performance !== "undefined" ? performance.now() : Date.now();
		const selected = this.units.find((u) => u.id === this.selectedId);
		const same = this.lastClickCell && this.lastClickCell.x === cell.x && this.lastClickCell.y === cell.y && now - this.lastClickAt < 340;
		this.lastClickAt = now;
		this.lastClickCell = cell;
		if (same && (this.mode === "awaitAction" || this.mode === "selected") && selected && occupies(selected, cell.x, cell.y)) {
			this.wait();
			const next = this.units.find((u) => u.side === "player" && u.alive && !u.moved);
			if (next) this.select(next);
			return;
		}
		this.cursor = cell;
		this.ensureVisible(cell.x, cell.y);
		this.handleCell(cell, via);
	}
	keyDown(code) {
		if (this.result || this.mode === "locked") {
			if (code === "KeyE") this.endTurn();
			return;
		}
		if (code === "Enter" || code === "Space") this.handleCell(this.cursor, "click");
		if (code === "Escape") this.cancel();
		if (code === "KeyE") this.endTurn();
		if (code === "KeyZ") this.wait();
	}
	handleCell(cell, via = "click") {
		const here = occupancy(this.units).get(key(cell.x, cell.y));
		const selected = this.units.find((u) => u.id === this.selectedId);
		if (this.mode === "awaitSpell" && selected) {
			this.hover = cell;
			if (!this.spellAimValid(selected, cell)) {
				this.tip = this.spellKind === "piercing" ? "Escolha uma reta da colmeia." : this.spellKind === "cleave" ? "Toque num hex vizinho." : this.spellKind === "longShot" ? "Alvo fora de alcance." : "Alvo inválido.";
				this.spellArmed = false;
				sfxPlay.ui();
				return;
			}
			if (via === "tap" && (!this.spellArmed || !this.spellAim || this.spellAim.x !== cell.x || this.spellAim.y !== cell.y)) {
				this.spellArmed = true;
				this.spellAim = cell;
				this.tip = "Toque de novo ou Lançar.";
				sfxPlay.ui();
				return;
			}
			this.confirmSpell();
			return;
		}
		if (here && here.side === "player" && here.alive && !here.moved && this.phase === "player") {
			if (selected && this.mode === "awaitAction") {
				if (here.id === selected.id) return;
				this.deselect();
			}
			this.select(here);
			return;
		}
		if (here && here.side === "enemy" && here.alive) {
			if (selected && !selected.acted && this.mode === "awaitOffHand") {
				if (canHitFrom(selected, selected, here, this.tiles, this.cols)) {
					this.commitOffHandAction(selected, here, {
						x: selected.x,
						y: selected.y
					});
					return;
				}
				this.tip = "Fora de alcance.";
				sfxPlay.ui();
				this.inspect(here);
				return;
			}
			if (selected && !selected.acted && (this.mode === "awaitAttack" || this.mode === "awaitAction" || this.mode === "selected")) {
				if (this.mode === "selected") {
					const from = this.attackFrom.get(here.id);
					if (from && (from.x !== selected.x || from.y !== selected.y)) {
						this.commitMove(selected, from, () => {
							const u = this.units.find((x) => x.id === selected.id);
							const f = this.units.find((x) => x.id === here.id);
							if (u && f && u.alive && f.alive && canHitFrom(u, u, f, this.tiles, this.cols)) this.commitAttack(u, f, {
								x: u.x,
								y: u.y
							});
						});
						return;
					}
				}
				if (canHitFrom(selected, selected, here, this.tiles, this.cols)) {
					this.commitAttack(selected, here, {
						x: selected.x,
						y: selected.y
					});
					return;
				}
				if (shotKind(selected) && inWeaponRange(selected.x, selected.y, here.x, here.y, selected.minRange, effectiveMaxRange(selected, tileAt(this.tiles, this.cols, selected.x, selected.y)))) {
					this.tip = TERRAIN[tileAt(this.tiles, this.cols, here.x, here.y)].id === "barricade" ? "Barricada bloqueia o projétil." : "O terreno alto corta a flecha.";
					sfxPlay.ui();
					this.inspect(here);
					return;
				}
			}
			if (this.inspectedId === here.id && !selected) {
				this.inspectedId = null;
				this.threat = [];
				this.tip = null;
				return;
			}
			this.inspect(here);
			return;
		}
		if (selected && this.mode === "selected") {
			if (this.reach.has(key(cell.x, cell.y)) && !here) {
				this.commitMove(selected, cell);
				return;
			}
		}
		if (selected && this.mode === "awaitAction" && !here) this.deselect();
		if (!here && this.inspectedId && !selected) {
			this.inspectedId = null;
			this.threat = [];
			this.tip = null;
		}
	}
	commitMove(unit, to, after) {
		const path = reconstructPath(this.reach, to);
		if (path.length === 0) path.push({
			x: unit.x,
			y: unit.y
		}, to);
		const stepCost = this.reach.get(key(to.x, to.y))?.cost ?? 0;
		this.mode = "locked";
		this.queue.push({
			type: "move",
			id: unit.id,
			path
		});
		this.queue.push({
			type: "delay",
			dur: .02
		});
		this.onNextIdle = () => {
			unit.x = Math.round(to.x);
			unit.y = Math.round(to.y);
			unit.drawX = unit.x;
			unit.drawY = unit.y;
			unit.moveBudgetUsed += stepCost;
			if (unit.acted) {
				unit.moved = true;
				this.selectedId = null;
				this.pendingFoeId = null;
				this.inspectedId = null;
				this.threat = [];
				this.reach.clear();
				this.attackFrom.clear();
				this.orig = null;
				this.mode = "idle";
				return;
			}
			this.selectedId = unit.id;
			this.mode = "selected";
			this.reach = computeReachable(this.effectiveUnitForReach(unit), this.tiles, this.cols, this.rows, this.units);
			this.attackFrom = attackableEnemies(unit, this.reach, this.units, this.tiles, this.cols);
			after?.();
		};
	}
	commitAttack(unit, foe, from) {
		const at = {
			x: Math.round(from.x),
			y: Math.round(from.y)
		};
		if (!canHitFrom(unit, at, foe, this.tiles, this.cols)) {
			this.mode = "awaitAction";
			this.tip = "Fora de alcance.";
			return;
		}
		this.mode = "locked";
		if (at.x !== unit.x || at.y !== unit.y) {
			const path = reconstructPath(this.reach, at);
			if (path.length > 1) this.queue.push({
				type: "move",
				id: unit.id,
				path
			});
		}
		this.queue.push({
			type: "combat",
			att: unit.id,
			def: foe.id
		});
	}
	/** Off-hand attack (a light weapon in the offHand slot) or Shield Bash (a shield
	* there) — whichever EQUIPMENT[unit.offHandId].kind resolves to. Reuses the same
	* "already in range from here" check as a normal Atacar; no move-then-act chaining. */
	commitOffHandAction(unit, foe, from) {
		const item = unit.offHandId ? EQUIPMENT[unit.offHandId] : null;
		if (!item || !canHitFrom(unit, from, foe, this.tiles, this.cols)) {
			this.mode = "awaitAction";
			this.tip = "Fora de alcance.";
			return;
		}
		this.mode = "locked";
		if (item.kind === "shield") this.queue.push({
			type: "combat",
			att: unit.id,
			def: foe.id,
			dmgMul: item.dmgMul ?? .75,
			stunChance: .7
		});
		else this.queue.push({
			type: "combat",
			att: unit.id,
			def: foe.id,
			customDice: {
				dice: item.dice ?? 1,
				faces: item.faces ?? 4,
				bonus: item.bonus ?? 0
			}
		});
	}
	castFireball(unit, click) {
		const tiles = fireballTiles(fireballOrigin(click, this.cols, this.rows), this.cols, this.rows);
		const ids = [];
		for (const t of tiles) {
			const u = this.units.find((x) => x.alive && occupies(x, t.x, t.y));
			if (u && !ids.includes(u.id)) ids.push(u.id);
		}
		this.spendTier(unit, "fireball");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		const power = fireballPower(unit.level);
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles,
			ids,
			dice: power.dice,
			faces: power.faces,
			bonus: power.bonus,
			label: FIREBALL.name,
			spellKind: "fireball"
		});
	}
	castCausticVenom(unit, click) {
		const origin = fireballOrigin(click, this.cols, this.rows);
		const tiles = fireballTiles(origin, this.cols, this.rows);
		const ids = [];
		for (const t of tiles) {
			const u = this.units.find((x) => x.alive && occupies(x, t.x, t.y));
			if (u && !ids.includes(u.id)) ids.push(u.id);
		}
		const center = this.units.find((x) => x.alive && occupies(x, origin.x, origin.y));
		this.spendTier(unit, "causticVenom");
		this.spellKind = null;
		this.tip = null;
		this.mode = "locked";
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles,
			ids,
			dice: CAUSTIC_VENOM.splashDice,
			faces: CAUSTIC_VENOM.splashFaces,
			bonus: CAUSTIC_VENOM.splashBonus,
			centerId: center?.id,
			centerDice: CAUSTIC_VENOM.centerDice,
			centerFaces: CAUSTIC_VENOM.centerFaces,
			centerBonus: CAUSTIC_VENOM.centerBonus,
			poison: true,
			label: CAUSTIC_VENOM.name,
			spellKind: "causticVenom"
		});
	}
	panBy(dx, dy) {
		this.camX += dx;
		this.camY += dy;
		this.clampCam();
	}
	setZoom(level) {
		const next = Math.max(0, Math.min(ZOOM_RADII.length - 1, Math.round(level)));
		if (next === this.zoom) return;
		const old = ZOOM_RADII[this.zoom];
		const k = ZOOM_RADII[next] / old;
		this.camX = (this.camX + this.viewW / 2) * k - this.viewW / 2;
		this.camY = (this.camY + this.viewH / 2) * k - this.viewH / 2;
		this.zoom = next;
		this.clampCam();
		this.emit();
	}
	setSpeed(mode) {
		this.speedMode = mode;
		this.emit();
	}
	cycleZoom(dir) {
		this.setZoom(this.zoom + (dir < 0 ? -1 : 1));
	}
	boardPad(tile) {
		return tile * 2.4;
	}
	boardSize(tile) {
		return {
			w: tile * Math.sqrt(3) * (this.cols + .5),
			h: tile * (1.5 * (this.rows - 1) + 2) + this.boardPad(tile)
		};
	}
	clampCam() {
		const tile = ZOOM_RADII[this.zoom];
		const { w, h } = this.boardSize(tile);
		const maxX = Math.max(0, w - this.viewW);
		const maxY = Math.max(0, h - this.viewH);
		this.camX = Math.min(maxX, Math.max(0, this.camX));
		this.camY = Math.min(maxY, Math.max(0, this.camY));
	}
	ensureVisible(col, row) {
		const { cx, cy } = this.hexCenter(col, row);
		const tile = ZOOM_RADII[this.zoom];
		const m = 64;
		const top = this.boardPad(tile);
		if (cx < m) this.camX += cx - m;
		if (cy < top) this.camY += cy - top;
		if (cx > this.viewW - m) this.camX += cx - (this.viewW - m);
		if (cy > this.viewH - m) this.camY += cy - (this.viewH - m);
		this.clampCam();
	}
	focusPlayers() {
		const u = this.units.find((x) => x.side === "player" && x.alive) ?? this.units[0];
		if (!u) return;
		this.centerOn(u.x, u.y);
	}
	centerOn(col, row) {
		const { cx, cy } = this.hexCenter(col, row);
		this.camX += cx - this.viewW / 2;
		this.camY += cy - this.viewH / 2;
		this.clampCam();
	}
	hitCell(cssX, cssY) {
		const { ox, oy, tile } = this.layout;
		const sqrt3 = Math.sqrt(3);
		const x = cssX - ox - tile * sqrt3 * .5;
		const y = cssY - oy - this.boardPad(tile) - tile;
		const q = (sqrt3 / 3 * x - 1 / 3 * y) / tile;
		const r = 2 / 3 * y / tile;
		const c = cubeRound(q, r, -q - r);
		const col = c.q + (c.r - (c.r & 1)) / 2;
		const row = c.r;
		if (col < 0 || row < 0 || col >= this.cols || row >= this.rows) return null;
		return {
			x: col,
			y: row
		};
	}
	hexCenter(col, row) {
		const { ox, oy, tile } = this.layout;
		return {
			cx: ox + tile * Math.sqrt(3) * (col + .5 * (row & 1) + .5),
			cy: oy + this.boardPad(tile) + tile * (1.5 * row + 1)
		};
	}
	hexPath(ctx, cx, cy, size) {
		ctx.beginPath();
		for (let i = 0; i < 6; i++) {
			const a = Math.PI / 180 * (60 * i - 30);
			const x = cx + size * Math.cos(a);
			const y = cy + size * Math.sin(a);
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.closePath();
	}
	/** Multi-hex terrain props draw as one image over their whole footprint's bounding box,
	* not hex-clipped like regular tiles — they don't need to fill the exact hex shape. */
	drawDecorations(ctx, tile, cssW, cssH) {
		const SQRT3 = Math.sqrt(3);
		for (const p of this.decorations) {
			const def = DECORATIONS[p.id];
			const img = this.art.decorations[p.id];
			if (!def || !img) continue;
			let minDx = 0;
			let maxDx = 0;
			let minDy = 0;
			let maxDy = 0;
			let sumCx = 0;
			let sumCy = 0;
			for (const { dx, dy } of def.footprint) {
				minDx = Math.min(minDx, dx);
				maxDx = Math.max(maxDx, dx);
				minDy = Math.min(minDy, dy);
				maxDy = Math.max(maxDy, dy);
				const c = this.hexCenter(p.x + dx, p.y + dy);
				sumCx += c.cx;
				sumCy += c.cy;
			}
			const n = def.footprint.length;
			const cx = sumCx / n;
			const cy = sumCy / n;
			if (cx < -tile * 4 || cy < -tile * 4 || cx > cssW + tile * 4 || cy > cssH + tile * 4) continue;
			const w = tile * SQRT3 * (maxDx - minDx + 1.7);
			const h = tile * (1.5 * (maxDy - minDy) + 2.3);
			ctx.drawImage(img, cx - w / 2, cy - h / 2, w, h);
		}
	}
	drawBarricadeMark(ctx, cx, cy, tile) {
		ctx.save();
		ctx.fillStyle = "rgba(58, 32, 18, 0.38)";
		this.hexPath(ctx, cx, cy, tile * .9);
		ctx.fill();
		ctx.strokeStyle = "rgba(196, 148, 96, 0.95)";
		ctx.lineWidth = Math.max(2, tile * .08);
		this.hexPath(ctx, cx, cy, tile * .82);
		ctx.stroke();
		const w = tile * .08;
		ctx.strokeStyle = "#d4b08a";
		ctx.lineWidth = Math.max(2.2, w);
		ctx.lineCap = "round";
		for (let i = -2; i <= 2; i++) {
			const sx = cx + i * tile * .16;
			ctx.beginPath();
			ctx.moveTo(sx, cy + tile * .3);
			ctx.lineTo(sx, cy - tile * .34);
			ctx.stroke();
		}
		ctx.strokeStyle = "#8a5230";
		ctx.lineWidth = Math.max(2.4, tile * .07);
		ctx.beginPath();
		ctx.moveTo(cx - tile * .4, cy - tile * .04);
		ctx.lineTo(cx + tile * .4, cy - tile * .04);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(cx - tile * .38, cy + tile * .12);
		ctx.lineTo(cx + tile * .38, cy + tile * .12);
		ctx.stroke();
		ctx.restore();
	}
	footprintCentroid(x, y, size, footprintW, footprintOffsets) {
		const cells = size >= 4 || footprintOffsets ? footprintFrontRow({
			x,
			y,
			footprintOffsets
		}, footprintW ?? 2) : footprint({
			x,
			y,
			size
		});
		let cx = 0;
		let cy = 0;
		for (const p of cells) {
			const c = this.hexCenter(p.x, p.y);
			cx += c.cx;
			cy += c.cy;
		}
		const n = Math.max(1, cells.length);
		return {
			cx: cx / n,
			cy: cy / n
		};
	}
	unitPixel(u) {
		if (this.active && this.active.type === "move" && this.active.id === u.id) {
			const a = this.active;
			const from = a.path[a.i];
			const to = a.path[a.i + 1];
			if (from && to) {
				const k = easeOut(Math.min(1, a.t / .12));
				const A = this.footprintCentroid(from.x, from.y, u.size, u.footprintW, u.footprintOffsets);
				const B = this.footprintCentroid(to.x, to.y, u.size, u.footprintW, u.footprintOffsets);
				return {
					cx: A.cx + (B.cx - A.cx) * k,
					cy: A.cy + (B.cy - A.cy) * k
				};
			}
		}
		return this.footprintCentroid(u.x, u.y, u.size, u.footprintW, u.footprintOffsets);
	}
	idleFrame(u, n) {
		if (n <= 1) return 0;
		const moving = this.active?.type === "move" && this.active.id === u.id;
		if (u.classId === "wardog") {
			const rate = moving ? 4.2 : 2.6;
			return Math.floor(u.bob * rate) % n;
		}
		const rate = (u.classId === "horror" || u.classId === "troll" ? 2 : u.sprite === "kael" || u.classId === "mage" || u.classId === "cultist" || u.classId === "healer" ? 1.7 : u.classId === "captain" ? 1.75 : 1.85) * (moving ? 2.2 : 1);
		if (moving || this.reducedMotion) return Math.floor(u.bob * rate) % n;
		const cycle = Math.max(2, n * 2 - 2);
		const pace = cycle / 2.6;
		const x = Math.floor(u.bob * pace) % cycle;
		return x < n ? x : cycle - x;
	}
	attackPose(u) {
		const frames = this.art.attacks[u.sprite];
		if (!frames || frames.length < 4) return null;
		const a = this.active;
		if (!a) return null;
		const n = frames.length;
		const long = n >= 12;
		if (a.type === "combat") {
			const actor = a.stage.startsWith("counter") ? a.def : a.att;
			if (u.id !== actor) return null;
			if (long) {
				if (a.stage === "lunge" || a.stage === "counterLunge") return Math.min(5, Math.floor(a.t / .2 * 6));
				if (a.stage === "hit" || a.stage === "counterHit") return Math.min(8, 6 + Math.floor(a.t / .18 * 3));
				if (a.stage === "recover" || a.stage === "counterRecover") return Math.min(11, 9 + Math.floor(a.t / .16 * 3));
				return 11;
			}
			if (a.stage === "lunge" || a.stage === "counterLunge") return a.t < .1 ? 0 : 1;
			if (a.stage === "hit" || a.stage === "counterHit") return 2;
			if (a.stage === "recover" || a.stage === "counterRecover") return 3;
			return 3;
		}
		if ((a.type === "spell" || a.type === "heal") && a.att === u.id) {
			if (long) return Math.min(n - 1, Math.floor(Math.min(.99, a.t / .4) * n));
			if (a.t < .12) return 0;
			if (a.t < .22) return 1;
			if (a.t < .4) return 2;
			return 3;
		}
		return null;
	}
	liveMotion(u, cell) {
		if (!u.alive || this.reducedMotion) return {
			bob: 0,
			sway: 0,
			breath: 0
		};
		const t = u.bob;
		if (u.classId === "wardog") return {
			bob: Math.sin(t * 2.2) * 1.15,
			sway: 0,
			breath: .014 + Math.sin(t * 2.2) * .018
		};
		const heavy = u.size >= 4 ? 1.4 : u.size === 2 ? 1.12 : 1;
		if (u.sprite === "kael" || u.size >= 4) return {
			bob: 0,
			sway: 0,
			breath: 0
		};
		return {
			bob: Math.sin(t * 1.55) * (1.15 * heavy),
			sway: Math.sin(t * .85 + .3) * (cell * .008 * heavy),
			breath: .012 + Math.sin(t * 1.55) * .014
		};
	}
	render(ctx, cssW, cssH, dpr) {
		const sqrt3 = Math.sqrt(3);
		const tile = ZOOM_RADII[this.zoom];
		const { w: boardW, h: boardH } = this.boardSize(tile);
		this.viewW = cssW;
		this.viewH = cssH;
		if (!this.camReady) {
			this.layout = {
				ox: 0,
				oy: 0,
				tile,
				cols: this.cols,
				rows: this.rows
			};
			this.camReady = true;
			this.focusPlayers();
		}
		this.clampCam();
		const ox = boardW < cssW ? (cssW - boardW) / 2 : -this.camX;
		const oy = boardH < cssH ? (cssH - boardH) / 2 : -this.camY;
		this.layout = {
			ox,
			oy,
			tile,
			cols: this.cols,
			rows: this.rows
		};
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, cssW, cssH);
		ctx.fillStyle = "#0c0b0a";
		ctx.fillRect(0, 0, cssW, cssH);
		const shake = this.reducedMotion ? 0 : this.trauma * this.trauma;
		if (shake) {
			ctx.save();
			ctx.translate((Math.random() - .5) * 10 * shake, (Math.random() - .5) * 10 * shake);
		}
		const barricades = [];
		for (let y = 0; y < this.rows; y++) for (let x = 0; x < this.cols; x++) {
			const { cx, cy } = this.hexCenter(x, y);
			if (cx < -tile * 2 || cy < -tile * 2 || cx > cssW + tile * 2 || cy > cssH + tile * 2) continue;
			const id = tileAt(this.tiles, this.cols, x, y);
			const variants = this.art.tiles[id];
			const img = variants[this.tileVariants[y * this.cols + x] ?? 0] ?? variants[0];
			ctx.save();
			this.hexPath(ctx, cx, cy, tile * .98);
			ctx.clip();
			if (img) ctx.drawImage(img, cx - tile, cy - tile, tile * 2, tile * 2);
			else {
				ctx.fillStyle = "#1e1b18";
				ctx.fill();
			}
			ctx.restore();
			ctx.strokeStyle = "rgba(240,235,227,0.14)";
			ctx.lineWidth = 1;
			this.hexPath(ctx, cx, cy, tile * .98);
			ctx.stroke();
			if (id === "barricade") barricades.push({
				cx,
				cy
			});
		}
		this.drawDecorations(ctx, tile, cssW, cssH);
		for (const { cx, cy } of barricades) this.drawBarricadeMark(ctx, cx, cy, tile);
		const glowPulse = this.reducedMotion ? 1 : .72 + Math.sin(this.time * 3.2) * .28;
		const overlay = (cells, fill) => {
			const rgb = /rgba?\(([^),]+),([^),]+),([^),]+)/.exec(fill);
			const [r, g, b] = rgb ? [
				rgb[1].trim(),
				rgb[2].trim(),
				rgb[3].trim()
			] : [
				"255",
				"255",
				"255"
			];
			ctx.save();
			ctx.shadowColor = `rgba(${r},${g},${b},${(.9 * glowPulse).toFixed(3)})`;
			ctx.shadowBlur = tile * (.32 + .34 * glowPulse);
			ctx.fillStyle = fill;
			ctx.strokeStyle = `rgba(${r},${g},${b},${Math.min(1, .7 + .3 * glowPulse).toFixed(3)})`;
			ctx.lineWidth = Math.max(1.5, tile * (.05 + .03 * glowPulse));
			for (const c of cells) {
				const { cx, cy } = this.hexCenter(c.x, c.y);
				this.hexPath(ctx, cx, cy, tile * .92);
				ctx.fill();
				ctx.stroke();
			}
			ctx.restore();
		};
		for (const zone of this.webZones) overlay([...zone.cells].map((k) => {
			const [x, y] = k.split(",").map(Number);
			return {
				x,
				y
			};
		}), "rgba(130,100,190,0.3)");
		if (this.mode === "idle" && this.threat.length) overlay(this.threat, "rgba(163,90,74,0.44)");
		if (this.mode === "awaitSpell") {
			const selected = this.units.find((u) => u.id === this.selectedId);
			if (selected && this.spellKind === "fireball") {
				overlay(fireballRangeTiles(selected, this.cols, this.rows), "rgba(196,90,50,0.3)");
				const cell = this.hover ?? this.spellAim;
				if (cell && manhattan(selected, cell) <= FIREBALL.range) overlay(fireballTiles(fireballOrigin(cell, this.cols, this.rows), this.cols, this.rows), "rgba(196,90,50,0.5)");
			} else if (selected && this.spellKind === "causticVenom") {
				overlay(fireballRangeTiles(selected, this.cols, this.rows), "rgba(110,150,60,0.3)");
				const cell = this.hover ?? this.spellAim;
				if (cell && manhattan(selected, cell) <= CAUSTIC_VENOM.range) overlay(fireballTiles(fireballOrigin(cell, this.cols, this.rows), this.cols, this.rows), "rgba(140,190,70,0.5)");
			} else if (selected && this.spellKind === "longShot") {
				const reach = [];
				const max = this.longMax(selected);
				for (let y = 0; y < this.rows; y++) for (let x = 0; x < this.cols; x++) {
					const d = manhattan(selected, {
						x,
						y
					});
					if (d >= selected.minRange && d <= max) reach.push({
						x,
						y
					});
				}
				overlay(reach, "rgba(90,120,70,0.3)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.spellAimValid(selected, cell)) overlay([cell], "rgba(140,170,80,0.55)");
			} else if (selected && this.spellKind === "piercing") {
				overlay(allAxisRays(selected, this.cols, this.rows), "rgba(120,90,50,0.28)");
				const cell = this.hover ?? this.spellAim;
				const line = cell ? this.piercingRay(selected, cell) : null;
				if (line) overlay(line, "rgba(196,120,50,0.55)");
			} else if (selected && this.spellKind === "piercingThrust") {
				overlay(this.healRangeTiles(selected, selected.maxRange + 1), "rgba(180,120,60,0.28)");
				const cell = this.hover ?? this.spellAim;
				const line = cell ? this.piercingThrustRay(selected, cell) : null;
				if (line) overlay(line, "rgba(220,150,70,0.55)");
			} else if (selected && (this.spellKind === "doubleStrike" || this.spellKind === "trip")) {
				overlay(this.healRangeTiles(selected, selected.maxRange), "rgba(160,90,50,0.3)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.spellAimValid(selected, cell)) overlay([cell], "rgba(196,90,50,0.55)");
			} else if (selected && this.spellKind === "cleave") {
				overlay(hexNeighbors(selected.x, selected.y), "rgba(160,90,50,0.3)");
				const cell = this.hover ?? this.spellAim;
				const arc = cell ? cleaveHexes(selected, cell, CLEAVE.hexes, this.cols, this.rows) : [];
				if (arc.length) overlay(arc, "rgba(196,90,50,0.55)");
			} else if (selected && this.spellKind === "summonFamiliar") {
				overlay(this.healRangeTiles(selected, SUMMON_FAMILIAR.range), "rgba(140,110,200,0.28)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.spellAimValid(selected, cell)) overlay([cell], "rgba(180,150,230,0.55)");
			} else if (selected && this.spellKind === "webOfDreams") {
				overlay(this.healRangeTiles(selected, WEB_OF_DREAMS.range), "rgba(120,90,170,0.28)");
				const cell = this.hover ?? this.spellAim;
				if (cell && manhattan(selected, cell) <= WEB_OF_DREAMS.range) overlay(hexAreaTiles(cell, WEB_OF_DREAMS.size, this.cols, this.rows), "rgba(150,110,210,0.5)");
			} else if (selected && this.spellKind === "lightning") {
				overlay(this.healRangeTiles(selected, LIGHTNING.range), "rgba(80,120,170,0.3)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.spellAimValid(selected, cell)) overlay([cell], "rgba(120,170,220,0.55)");
			} else if (selected && this.spellKind === "magicMissile") {
				overlay(this.healRangeTiles(selected, MAGIC_MISSILE.range), "rgba(130,90,170,0.3)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.spellAimValid(selected, cell)) overlay([cell], "rgba(180,140,220,0.55)");
			} else if (selected && this.isHeal(this.spellKind)) {
				overlay(this.healRangeTiles(selected, CURES[this.spellKind].range), "rgba(90,140,100,0.34)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.validHealTarget(selected, cell)) overlay([cell], "rgba(120,180,120,0.55)");
			} else if (selected && this.spellKind === "cureDisease") {
				overlay(this.healRangeTiles(selected, CURE_DISEASE.range), "rgba(90,140,100,0.34)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.validCureDiseaseTarget(selected, cell)) overlay([cell], "rgba(120,180,120,0.55)");
			}
		}
		if (this.mode === "selected" || this.mode === "awaitAttack" || this.mode === "awaitAction") {
			if (this.mode === "selected") overlay(this.reach.values(), "rgba(61,106,138,0.5)");
			const selected = this.units.find((u) => u.id === this.selectedId);
			const atkTiles = [];
			for (const foe of this.units) {
				if (!foe.alive || foe.side === "player") continue;
				if (this.mode === "selected" && this.attackFrom.has(foe.id)) atkTiles.push(...footprint(foe));
				if ((this.mode === "awaitAttack" || this.mode === "awaitAction") && selected && canHitFrom(selected, selected, foe, this.tiles, this.cols)) atkTiles.push(...footprint(foe));
			}
			overlay(atkTiles, "rgba(163,90,74,0.55)");
			if (this.pendingFoeId) {
				const foe = this.units.find((u) => u.id === this.pendingFoeId);
				if (foe) overlay(footprint(foe), "rgba(181,74,50,0.55)");
			}
		}
		const active = this.activeTurnUnit();
		if (active) {
			const { cx, cy } = this.hexCenter(active.x, active.y);
			const pulse = .75 + Math.sin(this.time * 4) * .25;
			const glowColor = active.side === "enemy" ? "230,120,90" : "255,215,140";
			ctx.save();
			ctx.shadowColor = `rgba(${glowColor},${.9 * pulse})`;
			ctx.shadowBlur = tile * .7 * pulse;
			ctx.fillStyle = `rgba(${glowColor},${(.34 + .18 * pulse).toFixed(3)})`;
			ctx.strokeStyle = `rgba(${glowColor},${.95 * pulse})`;
			ctx.lineWidth = Math.max(2, tile * .09);
			this.hexPath(ctx, cx, cy, tile * .94);
			ctx.fill();
			ctx.stroke();
			ctx.restore();
		}
		const cur = this.hover ?? this.cursor;
		{
			const { cx, cy } = this.hexCenter(cur.x, cur.y);
			const ht = TERRAIN[tileAt(this.tiles, this.cols, cur.x, cur.y)];
			const blocked = !ht.passable;
			if (blocked) {
				ctx.save();
				ctx.shadowColor = "rgba(219,58,44,0.95)";
				ctx.shadowBlur = tile * .55;
				ctx.strokeStyle = "rgba(255,90,72,0.95)";
				ctx.lineWidth = 3;
				this.hexPath(ctx, cx, cy, tile * .9);
				ctx.stroke();
				ctx.restore();
			} else {
				ctx.strokeStyle = "rgba(240,235,227,0.9)";
				ctx.lineWidth = 2;
				this.hexPath(ctx, cx, cy, tile * .9);
				ctx.stroke();
			}
			if (blocked || ht.height) {
				const label = blocked ? ht.name.toUpperCase() : "ALTO +2";
				const fontPx = Math.max(11, Math.round(tile * .32));
				ctx.font = `700 ${fontPx}px Figtree, sans-serif`;
				ctx.textAlign = "center";
				ctx.textBaseline = "top";
				ctx.lineJoin = "round";
				ctx.lineWidth = Math.max(3, fontPx * .22);
				ctx.strokeStyle = "rgba(12,11,10,0.88)";
				ctx.fillStyle = blocked ? "#ff7a68" : "#efe4c4";
				ctx.strokeText(label, cx, cy + tile * .38);
				ctx.fillText(label, cx, cy + tile * .38);
			}
		}
		const cell = tile * sqrt3;
		const sorted = [...this.units].sort((a, b) => a.drawY - b.drawY || a.drawX - b.drawX);
		for (const u of sorted) {
			if (u.fade <= 0) continue;
			const s = unitSize(u);
			const boss = u.classId === "captain";
			const { cx: px, cy: py } = this.unitPixel(u);
			const foot = s >= 4 ? 2.15 : s === 2 ? 1.5 : boss ? 1.12 : 1;
			const { bob, sway, breath } = this.liveMotion(u, cell);
			ctx.save();
			ctx.globalAlpha = u.fade * (u.moved && u.side === "player" && this.phase === "player" ? .55 : 1);
			ctx.fillStyle = "rgba(0,0,0,0.4)";
			ctx.beginPath();
			ctx.ellipse(px + sway, py + cell * .22, cell * .22 * foot * (1 + breath * .4), cell * .1 * Math.min(2.2, foot) * (1 - breath * .3), 0, 0, Math.PI * 2);
			ctx.fill();
			const atk = this.attackPose(u);
			const moving = this.active?.type === "move" && this.active.id === u.id;
			const idle = !atk && !moving ? this.art.idles[u.sprite] : void 0;
			const frames = atk != null ? this.art.attacks[u.sprite] : idle ?? this.art.sprites[u.sprite];
			const n = frames?.length ?? 0;
			const fi = atk != null ? atk : this.idleFrame(u, n || 4);
			const walkDirs = moving ? this.art.walkDirs[u.sprite] : void 0;
			const img = (walkDirs ? walkDirs[u.walkPose] : void 0) ?? frames?.[fi] ?? frames?.[0];
			const isType8 = u.footprintOffsets === FOOTPRINT_TYPE_8;
			const h = cell * (s >= 4 ? 3.35 : s === 2 ? 1.72 : boss ? 1.44 : 1.42) * 1.2 * (isType8 ? .75 : 1);
			const w = cell * (s >= 4 ? 2.85 : s === 2 ? 1.85 : boss ? 1.12 : 1.11) * 1.2 * (isType8 ? .75 : 1);
			const footY = s >= 4 ? tile * .9 : cell * .42;
			ctx.translate(px + sway, py + footY + bob);
			if (u.sprite === "kael") ctx.scale(u.facing, 1);
			else ctx.scale(u.facing * (1 - breath * .22), 1 + breath);
			if (u.flash > 0) ctx.filter = `brightness(${1.8 + u.flash})`;
			if (img) ctx.drawImage(img, -w / 2, -h, w, h);
			else {
				ctx.fillStyle = u.side === "player" ? "#8a97a1" : "#a35a4a";
				ctx.fillRect(-w / 2, -h, w, h);
			}
			ctx.filter = "none";
			ctx.restore();
			if (u.alive) {
				const bw = cell * (s >= 4 ? 1.35 : s === 2 ? .9 : boss ? .68 : .62);
				const bh = Math.max(4, cell * .07);
				const bx = px - bw / 2;
				const by = py - h + cell * .42 + bob - Math.max(8, cell * .12);
				ctx.fillStyle = "rgba(12,11,10,0.82)";
				ctx.fillRect(bx - 1, by - 1, bw + 2, bh + 2);
				ctx.fillStyle = "#2c2824";
				ctx.fillRect(bx, by, bw, bh);
				ctx.fillStyle = u.side === "player" ? "#c8c4bc" : "#b54a32";
				ctx.fillRect(bx, by, bw * Math.max(0, u.hp / u.maxHp), bh);
				if (cell >= 32) {
					ctx.font = `600 ${Math.round(cell * .22)}px Figtree, sans-serif`;
					ctx.textAlign = "center";
					ctx.textBaseline = "bottom";
					ctx.lineJoin = "round";
					ctx.lineWidth = 3;
					ctx.strokeStyle = "rgba(12,11,10,0.9)";
					ctx.fillStyle = "#f0ebe3";
					ctx.strokeText(`${u.hp}`, px, by - 1);
					ctx.fillText(`${u.hp}`, px, by - 1);
				}
				if (u.stunned) {
					const gx = px;
					const gy = by - bh - cell * .16;
					const r = cell * .13;
					const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, r);
					glow.addColorStop(0, "rgba(255,90,70,0.95)");
					glow.addColorStop(.6, "rgba(255,60,50,0.55)");
					glow.addColorStop(1, "rgba(255,60,50,0)");
					ctx.fillStyle = glow;
					ctx.beginPath();
					ctx.arc(gx, gy, r, 0, Math.PI * 2);
					ctx.fill();
				}
			}
			if (u.id === this.selectedId) {
				ctx.strokeStyle = "#d8d3cc";
				ctx.lineWidth = 1.5;
				ctx.beginPath();
				ctx.ellipse(px + sway, py + cell * .22, cell * .32 * foot, cell * .12 * Math.min(2.2, foot), 0, 0, Math.PI * 2);
				ctx.stroke();
			}
		}
		if (this.particleLive) {
			const dmgCell = tile * Math.sqrt(3);
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			for (const p of this.particles) {
				if (!p.live || p.kind === "text") continue;
				const { cx, cy } = this.hexCenter(Math.round(p.x), Math.round(p.y));
				const px = cx;
				const py = cy - tile * .2;
				ctx.globalAlpha = 1 - p.life / p.max;
				if (p.kind === "impact") {
					const img = this.art.impact[Math.min(3, Math.floor(p.frame))];
					if (img) ctx.drawImage(img, px - tile * .45, py - tile * .45, tile * .9, tile * .9);
				} else {
					ctx.fillStyle = p.color;
					ctx.fillRect(px, py, p.size, p.size);
				}
			}
			for (const p of this.particles) {
				if (!p.live || p.kind !== "text" || !p.text) continue;
				const { cx, cy } = this.hexCenter(Math.round(p.x), Math.round(p.y));
				const fade = .4;
				ctx.globalAlpha = p.life < p.max - fade ? 1 : Math.max(0, 1 - (p.life - (p.max - fade)) / fade);
				const fontPx = Math.max(16, Math.round(dmgCell * .42));
				ctx.font = `800 ${fontPx}px Figtree, sans-serif`;
				ctx.lineJoin = "round";
				ctx.lineWidth = Math.max(4, fontPx * .22);
				ctx.strokeStyle = "rgba(12,11,10,0.92)";
				ctx.fillStyle = p.color;
				ctx.strokeText(p.text, cx, cy - dmgCell * .85 - p.life * 16);
				ctx.fillText(p.text, cx, cy - dmgCell * .85 - p.life * 16);
			}
			ctx.globalAlpha = 1;
		}
		if (shake) ctx.restore();
	}
};
/** Three zoom stops, as a percent width of the scroll viewport, ascending from most
* zoomed-out to most zoomed-in. The map opens at the LAST (biggest) stop — that's as
* close as it should ever get — and the zoom control only zooms OUT from there to show
* more of the surrounding map, never further in. */
var ZOOM_STOPS = [
	90,
	110,
	130
];
/** Campaign world map: one marker per WorldLocation, positioned by its x/y percent over
* the map art. A single-mission location jumps straight to its briefing on click; a
* multi-mission location (e.g. an approach, an encounter, and its aftermath sharing one
* marker) opens a small chapter list instead. Background art is optional — until the real
* map lands the screen falls back to a plain ashen backdrop so it never looks broken. */
function WorldMapScreen({ locations, status, missionStatus, ember, test, muted, onMute, autoOpenLocationId, centerLocationId, onBack, onPick, onOpenList }) {
	const [open, setOpen] = (0, import_react.useState)(null);
	const [artOk, setArtOk] = (0, import_react.useState)(true);
	const [flashId, setFlashId] = (0, import_react.useState)(null);
	const [zoomIdx, setZoomIdx] = (0, import_react.useState)(ZOOM_STOPS.length - 1);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const viewportRef = (0, import_react.useRef)(null);
	const dragRef = (0, import_react.useRef)(null);
	const centerFracRef = (0, import_react.useRef)({
		x: .5,
		y: .5
	});
	const recenterOn = (fx, fy) => {
		const el = viewportRef.current;
		if (!el) return;
		el.scrollLeft = Math.max(0, Math.min(el.scrollWidth - el.clientWidth, fx * el.scrollWidth - el.clientWidth / 2));
		el.scrollTop = Math.max(0, Math.min(el.scrollHeight - el.clientHeight, fy * el.scrollHeight - el.clientHeight / 2));
	};
	const captureCenterFrac = () => {
		const el = viewportRef.current;
		if (!el || el.scrollWidth === 0 || el.scrollHeight === 0) return;
		centerFracRef.current = {
			x: (el.scrollLeft + el.clientWidth / 2) / el.scrollWidth,
			y: (el.scrollTop + el.clientHeight / 2) / el.scrollHeight
		};
	};
	const mounted = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!mounted.current) return;
		recenterOn(centerFracRef.current.x, centerFracRef.current.y);
	}, [zoomIdx]);
	(0, import_react.useEffect)(() => {
		const loc = centerLocationId ? locations.find((l) => l.id === centerLocationId) : null;
		if (loc) {
			centerFracRef.current = {
				x: loc.x / 100,
				y: loc.y / 100
			};
			recenterOn(centerFracRef.current.x, centerFracRef.current.y);
		}
		mounted.current = true;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!autoOpenLocationId) return;
		const loc = locations.find((l) => l.id === autoOpenLocationId);
		if (loc) setOpen(loc);
	}, [autoOpenLocationId, locations]);
	const onPointerDown = (e) => {
		if (e.pointerType === "touch") return;
		const el = viewportRef.current;
		if (!el) return;
		dragRef.current = {
			x: e.clientX,
			y: e.clientY,
			scrollLeft: el.scrollLeft,
			scrollTop: el.scrollTop,
			moved: false
		};
		setDragging(true);
	};
	const onPointerMove = (e) => {
		const d = dragRef.current;
		const el = viewportRef.current;
		if (!d || !el) return;
		if (e.pointerType === "mouse" && e.buttons === 0) {
			dragRef.current = null;
			setDragging(false);
			return;
		}
		const dx = e.clientX - d.x;
		const dy = e.clientY - d.y;
		if (!d.moved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
			d.moved = true;
			el.setPointerCapture(e.pointerId);
		}
		if (!d.moved) return;
		el.scrollLeft = d.scrollLeft - dx;
		el.scrollTop = d.scrollTop - dy;
	};
	const endDrag = (e) => {
		const el = viewportRef.current;
		if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
		setDragging(false);
	};
	const onClickCapture = (e) => {
		if (dragRef.current?.moved) {
			e.preventDefault();
			e.stopPropagation();
			dragRef.current = null;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse at 30% 20%, #241f19 0%, #0c0b0a 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onBack,
						className: "size-10 grid place-items-center rounded-md border border-border bg-bg/70",
						"aria-label": "Voltar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm uppercase tracking-[0.18em] text-muted",
							children: test ? "Modo teste" : "Campanha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl leading-none",
							children: "Mapa"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onOpenList,
						className: "h-9 px-3 rounded-md border border-border bg-bg/70 text-xs uppercase tracking-[0.14em]",
						children: "Lista"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onMute,
						className: "size-9 grid place-items-center rounded-md border border-border bg-bg/70",
						"aria-label": "Som",
						children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm tabular-nums text-muted border border-border rounded-md px-2 py-1 bg-bg/70",
						children: ["Ember ", ember]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: viewportRef,
				className: `relative z-10 flex-1 min-h-0 overflow-auto overscroll-contain touch-pan-x touch-pan-y select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`,
				style: { WebkitOverflowScrolling: "touch" },
				onPointerDown,
				onPointerMove,
				onPointerUp: endDrag,
				onPointerCancel: endDrag,
				onPointerLeave: endDrag,
				onClickCapture,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative inline-block m-2",
					style: { width: artOk ? `${ZOOM_STOPS[zoomIdx]}%` : void 0 },
					children: [artOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/game/assets/world-map.jpg",
						alt: "",
						className: "block w-full h-auto rounded-lg select-none",
						draggable: false,
						onError: () => setArtOk(false),
						onLoad: () => recenterOn(centerFracRef.current.x, centerFracRef.current.y)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[70dvw] h-[70dvh] max-w-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						children: locations.map((loc) => {
							const st = status(loc);
							const missions = missionsForLocation(loc);
							const multi = missions.length > 1;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									if (st === "locked") {
										setFlashId(loc.id);
										window.setTimeout(() => setFlashId((f) => f === loc.id ? null : f), 500);
										return;
									}
									if (multi) {
										setOpen(loc);
										return;
									}
									if (missions[0]) onPick(missions[0].id);
								},
								className: "group absolute -translate-x-1/2 -translate-y-1/2",
								style: {
									left: `${loc.x}%`,
									top: `${loc.y}%`
								},
								"aria-label": st === "locked" ? `${loc.name} (bloqueado)` : loc.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `relative size-10 rounded-full border-2 grid place-items-center bg-bg/80 transition-transform group-hover:scale-110 group-active:scale-95 ${st === "locked" ? `border-border opacity-50 ${loc.id === flashId ? "locked-flash" : ""}` : st === "done" ? "border-accent" : missions.some((m) => m.hub) ? "inn-open" : "border-accent"}`,
									children: [st === "locked" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 text-muted" }) : st === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-accent" }), multi && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -top-1.5 -right-1.5 size-4 rounded-full bg-bg border border-border text-[10px] leading-none grid place-items-center text-fg/90",
										children: missions.length
									})]
								})
							}, loc.id);
						})
					})]
				})
			}),
			artOk && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute z-20 bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 flex flex-col gap-1 bg-bg/85 border border-border rounded-lg p-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							captureCenterFrac();
							setZoomIdx((i) => Math.min(ZOOM_STOPS.length - 1, i + 1));
						},
						disabled: zoomIdx >= ZOOM_STOPS.length - 1,
						className: "size-11 grid place-items-center rounded-md disabled:opacity-30 active:bg-surface-2",
						"aria-label": "Aproximar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center text-[10px] tabular-nums text-muted py-0.5",
						children: [
							zoomIdx + 1,
							"/",
							ZOOM_STOPS.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							captureCenterFrac();
							setZoomIdx((i) => Math.max(0, i - 1));
						},
						disabled: zoomIdx <= 0,
						className: "size-11 grid place-items-center rounded-md disabled:opacity-30 active:bg-surface-2",
						"aria-label": "Afastar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { className: "size-5" })
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationPanel, {
				location: open,
				missions: missionsForLocation(open),
				missionStatus,
				test,
				onPick: (id) => {
					setOpen(null);
					onPick(id);
				},
				onClose: () => setOpen(null)
			})
		]
	});
}
function LocationPanel({ location, missions, missionStatus, test, onPick, onClose }) {
	const [flashId, setFlashId] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 bg-bg/45 backdrop-blur-[3px] flex items-center justify-center p-4",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md max-h-[80dvh] overflow-y-auto bg-surface/95 border border-border rounded-xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl leading-tight",
						children: location.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "size-8 grid place-items-center rounded-md border border-border",
						"aria-label": "Fechar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-2",
					children: missions.map((m, i) => {
						const st = missionStatus(m.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								if (st === "locked") {
									setFlashId(m.id);
									window.setTimeout(() => setFlashId((f) => f === m.id ? null : f), 500);
									return;
								}
								onPick(m.id);
							},
							"aria-label": st === "locked" ? `${m.title} (bloqueado)` : void 0,
							className: `w-full text-left rounded-xl border bg-surface px-4 py-3 ${st === "locked" ? `opacity-40 border-border ${m.id === flashId ? "locked-flash" : ""}` : "border-border"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm uppercase tracking-[0.16em] text-muted flex items-center gap-1.5",
									children: [
										st === "locked" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }),
										st === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-accent" }),
										String(m.index + 1).padStart(2, "0"),
										" · ",
										m.place,
										st === "done" ? " · feito" : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl",
									children: m.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base text-muted",
									children: m.objective
								})
							]
						}) }, m.id);
					})
				}),
				test && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted",
					children: "Modo teste: todos os capítulos estão abertos."
				})
			]
		})
	});
}
var BANK_KEY = "ember-save-bank";
var SAVE_KEY = "ember-save";
var SAVE_BAK_KEY = "ember-save.bak";
var LEGACY_KEY = "brasa-save";
var DEFAULT_LEVELS = {
	Kael: 1,
	Neera: 1,
	Voss: 1,
	Salazar: 1
};
var DEFAULT_XP = {
	Kael: 0,
	Neera: 0,
	Voss: 0,
	Salazar: 0
};
var HEROES = [
	"Kael",
	"Neera",
	"Voss",
	"Salazar"
];
var MISSION_IDS = new Set(MISSIONS.map((m) => m.id));
var HERO_BASE_CLASS = {
	Kael: "swordsman",
	Neera: "archer",
	Voss: "mage",
	Salazar: "healer"
};
function clampInt(value, min, max) {
	const n = Math.floor(Number(value));
	if (!Number.isFinite(n)) return min;
	return Math.min(max, Math.max(min, n));
}
function cloneBags(src) {
	const base = startingBags();
	if (!src) return base;
	for (const name of Object.keys(base)) {
		const b = src[name];
		if (!b) continue;
		base[name] = {
			mid: clampInt(b.mid, 0, POTION_CARRY_MAX.mid),
			weak: clampInt(b.weak ?? b.high, 0, POTION_CARRY_MAX.weak),
			potent: clampInt(b.potent, 0, POTION_CARRY_MAX.potent),
			disease: clampInt(b.disease, 0, POTION_CARRY_MAX.disease),
			manaSmall: clampInt(b.manaSmall, 0, POTION_CARRY_MAX.manaSmall),
			manaMid: clampInt(b.manaMid, 0, POTION_CARRY_MAX.manaMid),
			manaLarge: clampInt(b.manaLarge, 0, POTION_CARRY_MAX.manaLarge),
			lockpick: clampInt(b.lockpick, 0, 9)
		};
	}
	return base;
}
function renameHero(map, from, to) {
	if (!map) return;
	if (map[from] != null && map[to] == null) {
		map[to] = map[from];
		delete map[from];
	}
}
function cleanStringList(value, allowed) {
	if (!Array.isArray(value)) return [];
	const out = [];
	for (const item of value) {
		if (typeof item !== "string" || !item) continue;
		if (allowed && !allowed.has(item)) continue;
		if (!out.includes(item)) out.push(item);
	}
	return out;
}
function cleanLevels(raw) {
	const levels = { ...DEFAULT_LEVELS };
	if (!raw || typeof raw !== "object") return levels;
	for (const [k, v] of Object.entries(raw)) {
		if (!HEROES.includes(k)) continue;
		levels[k] = clampInt(v, 1, 30);
	}
	return levels;
}
function cleanXp(raw) {
	const xp = { ...DEFAULT_XP };
	if (!raw || typeof raw !== "object") return xp;
	for (const [k, v] of Object.entries(raw)) {
		if (!HEROES.includes(k)) continue;
		xp[k] = clampInt(v, 0, 99);
	}
	return xp;
}
function cleanPromotions(raw) {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const [k, v] of Object.entries(raw)) {
		if (!HEROES.includes(k)) continue;
		const options = PROMOTIONS[HERO_BASE_CLASS[k]];
		if (options && typeof v === "string" && options.includes(v)) out[k] = v;
	}
	return out;
}
function cleanWeapons(raw) {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const [id, v] of Object.entries(raw)) {
		if (!WEAPONS[id]) continue;
		out[id] = clampInt(v, 0, 5);
	}
	return out;
}
function cleanEquipped(raw, owned) {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const [hero, v] of Object.entries(raw)) {
		if (!HEROES.includes(hero)) continue;
		if (typeof v === "string" && WEAPONS[v] && owned[v] != null) out[hero] = v;
	}
	return out;
}
function cleanEquipment(raw) {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const [hero, slots] of Object.entries(raw)) {
		if (!HEROES.includes(hero) || !slots || typeof slots !== "object") continue;
		const cleanSlots = {};
		for (const [slot, itemId] of Object.entries(slots)) {
			const def = typeof itemId === "string" ? EQUIPMENT[itemId] : void 0;
			if (def && def.slot === slot) cleanSlots[slot] = itemId;
		}
		if (Object.keys(cleanSlots).length > 0) out[hero] = cleanSlots;
	}
	return out;
}
function cleanLooseEquipment(raw) {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const [id, v] of Object.entries(raw)) {
		if (!EQUIPMENT[id]) continue;
		const n = clampInt(v, 0, 99);
		if (n > 0) out[id] = n;
	}
	return out;
}
function cleanSpellUses(raw) {
	const out = {};
	if (!raw || typeof raw !== "object") return out;
	for (const [hero, tiers] of Object.entries(raw)) {
		if (!HEROES.includes(hero) || !tiers || typeof tiers !== "object") continue;
		const cleanTiers = {};
		for (const [key, v] of Object.entries(tiers)) {
			if (!TIER_KEYS.includes(key)) continue;
			const n = clampInt(v, 0, 99);
			if (n > 0) cleanTiers[key] = n;
		}
		if (Object.keys(cleanTiers).length > 0) out[hero] = cleanTiers;
	}
	return out;
}
function cleanHp(raw) {
	if (!raw || typeof raw !== "object") return {};
	const out = {};
	for (const [k, v] of Object.entries(raw)) {
		if (!HEROES.includes(k)) continue;
		const n = Math.floor(Number(v));
		if (!Number.isFinite(n) || n < 0) continue;
		out[k] = n;
	}
	return out;
}
/** Every hero starts equipped with their class's cheapest weapon — free, already owned. */
function starterEquipment() {
	const weapons = {};
	const equipped = {};
	for (const hero of HEROES) {
		const id = starterWeaponFor(HERO_BASE_CLASS[hero]);
		if (!id) continue;
		weapons[id] = 0;
		equipped[hero] = id;
	}
	return {
		weapons,
		equipped
	};
}
function emptySave(muted = false) {
	return {
		version: 10,
		completed: [],
		unitHp: {},
		levels: { ...DEFAULT_LEVELS },
		xp: { ...DEFAULT_XP },
		bags: startingBags(),
		promotions: {},
		...starterEquipment(),
		equipment: {},
		looseEquipment: {},
		spellUses: {},
		ember: 0,
		emberSeeded: true,
		muted,
		updatedAt: Date.now(),
		pendingMission: null
	};
}
function emptyBank() {
	return {
		version: 10,
		lastSlot: 0,
		muted: false,
		slots: Array.from({ length: 5 }, () => null)
	};
}
function migrateRecord(raw, muted) {
	renameHero(raw.levels, "Nira", "Neera");
	renameHero(raw.unitHp, "Nira", "Neera");
	renameHero(raw.bags, "Nira", "Neera");
	renameHero(raw.xp, "Nira", "Neera");
	renameHero(raw.levels, "Silas", "Salazar");
	renameHero(raw.unitHp, "Silas", "Salazar");
	renameHero(raw.bags, "Silas", "Salazar");
	renameHero(raw.xp, "Silas", "Salazar");
	const version = clampInt(raw.version, 0, 10);
	const levels = cleanLevels(raw.levels);
	if (!raw.levels || typeof raw.levels !== "object") {
		const n = 1 + cleanStringList(raw.completed).length;
		for (const k of Object.keys(levels)) levels[k] = Math.min(30, n);
	}
	let pending = null;
	if (typeof raw.pendingMission === "string" && MISSION_IDS.has(raw.pendingMission)) pending = raw.pendingMission;
	else if (raw.battle && typeof raw.battle === "object") {
		const id = raw.battle.missionId;
		if (typeof id === "string" && MISSION_IDS.has(id)) pending = id;
	}
	const completed = cleanStringList(raw.completed, MISSION_IDS);
	const weapons = cleanWeapons(raw.weapons);
	const equipped = cleanEquipped(raw.equipped, weapons);
	for (const hero of HEROES) {
		if (equipped[hero]) continue;
		const id = starterWeaponFor(HERO_BASE_CLASS[hero]);
		if (!id) continue;
		weapons[id] = weapons[id] ?? 0;
		equipped[hero] = id;
	}
	let ember = clampInt(raw.ember, 0, 9999);
	let emberSeeded = raw.emberSeeded === true;
	if (!emberSeeded) {
		ember += emberFromCompleted(completed);
		emberSeeded = true;
	}
	return {
		version: 10,
		completed,
		unitHp: cleanHp(raw.unitHp),
		levels,
		xp: cleanXp(raw.xp),
		bags: version < 4 ? startingBags() : cloneBags(raw.bags),
		promotions: cleanPromotions(raw.promotions),
		weapons,
		equipped,
		equipment: cleanEquipment(raw.equipment),
		looseEquipment: cleanLooseEquipment(raw.looseEquipment),
		spellUses: cleanSpellUses(raw.spellUses),
		ember,
		emberSeeded,
		muted: raw.muted === true || muted,
		updatedAt: typeof raw.updatedAt === "number" && raw.updatedAt > 0 ? raw.updatedAt : Date.now(),
		pendingMission: pending
	};
}
function parseRecord(text) {
	if (!text) return null;
	try {
		const parsed = JSON.parse(text);
		if (!parsed || typeof parsed !== "object") return null;
		return migrateRecord(parsed, false);
	} catch {
		return null;
	}
}
function readKey(key) {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}
function writeKey(key, value) {
	try {
		localStorage.setItem(key, value);
		return true;
	} catch {
		return false;
	}
}
function slotOccupied(s) {
	if (!s) return false;
	return s.completed.length > 0 || Object.keys(s.unitHp).length > 0 || !!s.pendingMission;
}
function migrateLegacyIntoBank() {
	const bank = emptyBank();
	const legacy = parseRecord(readKey(BANK_KEY) ? null : readKey(SAVE_KEY)) ?? parseRecord(readKey(SAVE_BAK_KEY)) ?? parseRecord(readKey(LEGACY_KEY));
	if (legacy && slotOccupied(legacy)) {
		bank.slots[0] = legacy;
		bank.lastSlot = 0;
		bank.muted = legacy.muted;
	}
	return bank;
}
function parseBank(text) {
	if (!text) return null;
	try {
		const parsed = JSON.parse(text);
		if (!parsed || typeof parsed !== "object") return null;
		const raw = parsed;
		const rawSlots = Array.isArray(raw.slots) ? raw.slots : [];
		const muted = raw.muted === true;
		const slots = Array.from({ length: 5 }, (_, i) => {
			const item = rawSlots[i];
			if (!item || typeof item !== "object") return null;
			const rec = migrateRecord(item, muted);
			return slotOccupied(rec) ? rec : null;
		});
		const lastSlot = clampInt(raw.lastSlot, 0, 4);
		return {
			version: 10,
			lastSlot: slots[lastSlot] ? lastSlot : slots.findIndex(Boolean) === -1 ? 0 : Math.max(0, slots.findIndex(Boolean)),
			muted,
			slots
		};
	} catch {
		return null;
	}
}
function loadBank() {
	const bank = parseBank(readKey(BANK_KEY));
	if (bank) return bank;
	const migrated = migrateLegacyIntoBank();
	persistBank(migrated);
	return migrated;
}
function persistBank(bank) {
	writeKey(BANK_KEY, JSON.stringify({
		...bank,
		version: 10
	}));
}
function writeBank(bank) {
	const next = {
		version: 10,
		lastSlot: clampInt(bank.lastSlot, 0, 4),
		muted: bank.muted === true,
		slots: Array.from({ length: 5 }, (_, i) => bank.slots[i] ?? null)
	};
	persistBank(next);
	return next;
}
function activeSave(bank) {
	return bank.slots[bank.lastSlot] ?? emptySave(bank.muted);
}
function writeSlot(bank, index, data) {
	const i = clampInt(index, 0, 4);
	const slots = [...bank.slots];
	slots[i] = {
		...data,
		version: 10,
		muted: bank.muted,
		updatedAt: Date.now()
	};
	return writeBank({
		...bank,
		lastSlot: i,
		slots
	});
}
function selectSlot(bank, index) {
	const i = clampInt(index, 0, 4);
	return writeBank({
		...bank,
		lastSlot: i
	});
}
function setMutedBank(bank, muted) {
	return writeBank({
		...bank,
		muted
	});
}
function formatStamp(ts) {
	try {
		return new Intl.DateTimeFormat("pt-BR", {
			timeZone: "America/Sao_Paulo",
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		}).format(new Date(ts));
	} catch {
		return "";
	}
}
function slotProgress(slot) {
	if (!slot || !slotOccupied(slot)) return {
		title: "Vazio",
		detail: "Nenhuma campanha"
	};
	if (slot.pendingMission) {
		const m = MISSIONS.find((x) => x.id === slot.pendingMission);
		return {
			title: m ? m.title : slot.pendingMission,
			detail: "Início do combate"
		};
	}
	if (slot.completed.length === 0) return {
		title: "Campanha nova",
		detail: "Mapa de cenários"
	};
	const lastId = slot.completed[slot.completed.length - 1];
	const last = MISSIONS.find((x) => x.id === lastId);
	const next = MISSIONS.find((x) => last && x.index === last.index + 1);
	if (next) return {
		title: next.title,
		detail: `Após ${last?.title ?? lastId}`
	};
	return {
		title: last?.title ?? lastId,
		detail: "Campanha concluída"
	};
}
function hasAnySave(bank) {
	return bank.slots.some(slotOccupied);
}
function isSlotEmpty(slot) {
	return !slotOccupied(slot);
}
function hudBlank() {
	return {
		phase: "player",
		banner: null,
		selected: null,
		hoveredUnit: null,
		terrain: null,
		mode: "idle",
		canAttack: false,
		offHandKind: null,
		canLockpick: false,
		forecast: null,
		turn: 1,
		objective: "",
		missionTitle: "",
		playerAlive: 0,
		enemyAlive: 0,
		busy: false,
		result: null,
		winAvailable: false,
		zoom: 1,
		speedMode: "normal",
		tip: null,
		inspected: null,
		pendingFoe: null,
		spellReady: false,
		spellKind: null,
		turnQueue: [],
		log: []
	};
}
function innUnlocked(completed) {
	return completed.includes("estalagem");
}
function lockedMission(id, completed, test) {
	if (test) return false;
	const m = missionById(id);
	if (!m) return true;
	if (m.hub) return !innUnlocked(completed) && !MISSIONS.some((x) => x.index === m.index - 1 && completed.includes(x.id));
	if (completed.includes(id)) return true;
	if (m.index === 0) return false;
	const prev = MISSIONS.find((x) => x.index === m.index - 1);
	return prev ? !completed.includes(prev.id) : false;
}
/** Per-mission status for the world map's location chapter list — "done" once completed,
* else whatever lockedMission says, so chapters within a multi-mission location open one
* at a time in the same order the flat campaign list already enforces. */
function missionStatus(id, completed, test) {
	if (completed.includes(id)) return "done";
	return lockedMission(id, completed, test) ? "locked" : "available";
}
/** A world map location is "done" once every mission it covers is completed, "available"
* once its next not-yet-completed mission is reachable, else "locked". */
function locationStatus(loc, completed, test) {
	const missions = missionsForLocation(loc);
	const next = missions.find((m) => !completed.includes(m.id));
	if (!next) return missions.length > 0 ? "done" : "locked";
	return missionStatus(next.id, completed, test) === "locked" ? "locked" : "available";
}
var BRIEF_ART = {
	vau: "/game/assets/brief-vau.jpg",
	bosque: "/game/assets/brief-bosque.jpg?v=2",
	aldeia: "/game/assets/brief-aldeia.jpg",
	muralha: "/game/assets/brief-muralha.jpg",
	fortaleza: "/game/assets/brief-fortaleza.jpg",
	templo: "/game/assets/brief-templo.jpg",
	cripta: "/game/assets/brief-cripta.jpg",
	estalagem: "/game/assets/brief-estalagem.jpg",
	colina: "/game/assets/brief-colina.jpg",
	passagem: "/game/assets/brief-passagem.jpg?v=2",
	vertente: "/game/assets/brief-vertente.jpg?v=2",
	portao: "/game/assets/brief-portao.jpg"
};
function briefArt(id) {
	return BRIEF_ART[id] ?? null;
}
var HERO_PORTRAIT = {
	kael: "/game/portraits/kael.png?v=2",
	nira: "/game/portraits/nira.png",
	voss: "/game/portraits/voss.png",
	salazar: "/game/portraits/salazar.png",
	malrec: "/game/portraits/malrec.png",
	aldric: "/game/portraits/aldric.png"
};
var BAG_ICON = "/game/icons/equipment/small-leather-pouch.png";
var HOTBAR_SLOTS = 12;
/** Modo teste: Ember "infinito" pra testar compras/upgrades sem travar em custo. */
var TEST_EMBER = 9e5;
var ALL_POTIONS = [
	"weak",
	"mid",
	"potent",
	"disease",
	"manaSmall",
	"manaMid",
	"manaLarge"
];
var HOTBAR_KEY = "ember-hotbar-v1";
function classSpells(classId) {
	switch (PROMOTED_BASE[classId] ?? classId) {
		case "swordsman": return ["doubleStrike", "cleave"];
		case "mage": return [
			"magicMissile",
			"lightning",
			"fireball",
			"causticVenom"
		];
		case "conjurer": return ["summonFamiliar", "webOfDreams"];
		case "archer": return ["longShot", "piercing"];
		case "healer": return [
			"cureMinor",
			"cureWounds",
			"cureDisease"
		];
		case "lancer": return [
			"piercingThrust",
			"sweep",
			"trip"
		];
		default: return [];
	}
}
function defaultSlots(classId) {
	const slots = [...classSpells(classId).map((spell) => ({
		kind: "spell",
		spell
	})), ...ALL_POTIONS.map((potion) => ({
		kind: "potion",
		potion
	}))].slice(0, HOTBAR_SLOTS);
	while (slots.length < HOTBAR_SLOTS) slots.push(null);
	return slots;
}
function loadHotbars() {
	try {
		const raw = window.localStorage.getItem(HOTBAR_KEY);
		return raw ? JSON.parse(raw) : {};
	} catch {
		return {};
	}
}
function saveHotbars(bars) {
	try {
		window.localStorage.setItem(HOTBAR_KEY, JSON.stringify(bars));
	} catch {}
}
function slotIcon(action) {
	if (action.kind === "potion") return `/game/icons/potion-${action.potion}.png`;
	switch (action.spell) {
		case "doubleStrike": return "/game/icons/cleave.png";
		case "cleave": return "/game/icons/cleave-crossed-blades.png";
		case "fireball": return "/game/icons/fireball.png";
		case "causticVenom": return "/game/icons/caustic-venom.png";
		case "lightning": return "/game/icons/lightning.png?v=4";
		case "magicMissile": return "/game/icons/magic-missile.png";
		case "longShot": return "/game/icons/long-shot.png?v=3";
		case "piercing": return "/game/icons/piercing.png?v=3";
		case "cureMinor": return "/game/icons/cure-minor.png?v=5";
		case "cureWounds": return "/game/icons/cure-wounds.png?v=5";
		case "cureDisease": return "/game/icons/cure-minor.png?v=5";
		case "piercingThrust": return "/game/icons/piercing.png?v=3";
		case "sweep": return "/game/icons/cleave-crossed-blades.png";
		case "trip": return "/game/icons/cleave.png";
		case "summonFamiliar": return "/game/icons/magic-missile.png";
		case "webOfDreams": return "/game/icons/caustic-venom.png";
	}
}
function slotLabel(action) {
	if (action.kind === "potion") return potionLabel(action.potion);
	switch (action.spell) {
		case "doubleStrike": return DOUBLE_STRIKE.name;
		case "cleave": return CLEAVE.name;
		case "fireball": return FIREBALL.name;
		case "causticVenom": return CAUSTIC_VENOM.name;
		case "lightning": return LIGHTNING.name;
		case "magicMissile": return MAGIC_MISSILE.name;
		case "longShot": return LONG_SHOT.name;
		case "piercing": return PIERCING.name;
		case "cureMinor": return CURES.cureMinor.name;
		case "cureWounds": return CURES.cureWounds.name;
		case "cureDisease": return CURE_DISEASE.name;
		case "piercingThrust": return PIERCING_THRUST.name;
		case "sweep": return SWEEP.name;
		case "trip": return TRIP.name;
		case "summonFamiliar": return SUMMON_FAMILIAR.name;
		case "webOfDreams": return WEB_OF_DREAMS.name;
	}
}
function slotTooltip(action) {
	const label = slotLabel(action);
	if (action.kind === "potion") {
		const def = POTIONS$1[action.potion];
		if (def.effect === "mana") {
			const restore = def.manaRestore ?? 0;
			return `${label} · restaura ${restore} uso${restore === 1 ? "" : "s"} de cada magia que ainda tem carga disponível, sem passar do máximo de cada nível.`;
		}
	}
	return label;
}
function slotCount(action, unit) {
	if (action.kind === "potion") return unit.bag[action.potion];
	const tier = spellTier(action.spell);
	return tier ? unit.spells[tierKey(tier)] : 0;
}
function GameApp() {
	const [screen, setScreen] = (0, import_react.useState)("title");
	const [bank, setBank] = (0, import_react.useState)(() => typeof window === "undefined" ? {
		version: 7,
		lastSlot: 0,
		muted: false,
		slots: [
			null,
			null,
			null,
			null,
			null
		]
	} : loadBank());
	const save = activeSave(bank);
	const [art, setArt] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	const [missionId, setMissionId] = (0, import_react.useState)(null);
	const [engine, setEngine] = (0, import_react.useState)(null);
	const [hud, setHud] = (0, import_react.useState)(hudBlank);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [help, setHelp] = (0, import_react.useState)(false);
	const [muted, setMutedUi] = (0, import_react.useState)(() => typeof window === "undefined" ? false : loadBank().muted);
	const muteReady = (0, import_react.useRef)(false);
	const [lastGrowth, setLastGrowth] = (0, import_react.useState)(null);
	const [lastLoot, setLastLoot] = (0, import_react.useState)([]);
	const [pendingPromotions, setPendingPromotions] = (0, import_react.useState)([]);
	const [openLocationOnMap, setOpenLocationOnMap] = (0, import_react.useState)(null);
	const [testMode, setTestMode] = (0, import_react.useState)(false);
	const [testEmber, setTestEmber] = (0, import_react.useState)(TEST_EMBER);
	const awardedRef = (0, import_react.useRef)(null);
	const combatStartRef = (0, import_react.useRef)(null);
	const [slotMode, setSlotMode] = (0, import_react.useState)(null);
	const [overwrite, setOverwrite] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let alive = true;
		loadGameArt().then((a) => {
			if (alive) setArt(a);
		}).catch((err) => {
			if (alive) setLoadError(err.message);
		});
		return () => {
			alive = false;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		setMuted(muted);
		if (!muteReady.current) {
			muteReady.current = true;
			return;
		}
		setBank((b) => setMutedBank(b, muted));
	}, [muted]);
	(0, import_react.useEffect)(() => {
		const onVis = () => {
			if (document.visibilityState === "visible") resumeAudio();
		};
		document.addEventListener("visibilitychange", onVis);
		const disarm = installAudioUnlock();
		return () => {
			document.removeEventListener("visibilitychange", onVis);
			disarm();
		};
	}, []);
	const [customMission, setCustomMission] = (0, import_react.useState)(null);
	const mission = customMission && customMission.id === missionId ? customMission : missionId ? resolveMission(missionId) : void 0;
	const hasProgress = hasAnySave(bank);
	const applySlot = (next) => {
		setBank(next);
		const rec = activeSave(next);
		combatStartRef.current = rec;
	};
	const persistCurrent = (data, slot = bank.lastSlot) => {
		const next = writeSlot(bank, slot, {
			...data,
			muted
		});
		applySlot(next);
		return next;
	};
	const enterFromSave = (rec) => {
		setTestMode(false);
		setLastGrowth(null);
		setLastLoot([]);
		if (rec.pendingMission && resolveMission(rec.pendingMission)) {
			setMissionId(rec.pendingMission);
			setScreen("briefing");
			return;
		}
		setMissionId(null);
		setScreen("worldMap");
	};
	const startBattle = (0, import_react.useCallback)((id, carried = save.unitHp, override, playerLevels, enemyLevels) => {
		if (!art) return;
		if (!override) setCustomMission(null);
		const m = override ?? resolveMission(id);
		if (!m) return;
		const levels = testMode ? override ? Object.fromEntries(m.playerSpawns.map((s) => [s.name, playerLevels?.[s.name] ?? m.index + 1])) : {
			Kael: m.index + 1,
			Neera: m.index + 1,
			Voss: m.index + 1,
			Salazar: m.index + 1
		} : save.levels;
		const bags = testMode ? startingBags() : save.bags;
		const xp = testMode ? void 0 : save.xp;
		const hp = testMode ? {} : { ...carried };
		if (!testMode) {
			const snapshot = {
				...save,
				unitHp: hp,
				levels,
				bags,
				pendingMission: id,
				muted
			};
			combatStartRef.current = snapshot;
			persistCurrent(snapshot);
		}
		const promotions = testMode ? {} : save.promotions;
		const weapons = testMode ? void 0 : Object.fromEntries(Object.entries(save.equipped).map(([hero, id]) => [hero, {
			id,
			enh: save.weapons[id] ?? 0
		}]));
		const offHand = testMode ? void 0 : Object.fromEntries(Object.entries(save.equipment).map(([hero, e]) => [hero, e.offHand]).filter((entry) => !!entry[1]));
		const ownedWeaponIds = testMode ? void 0 : Object.keys(save.weapons);
		const loc = locationForMission(m.id);
		const scenarioStart = !loc || loc.id === "stonebridge" || loc.missionIds.every((mid) => !save.completed.includes(mid));
		const spellSpent = testMode || scenarioStart ? void 0 : save.spellUses;
		const battle = new BattleEngine(m, art, {
			hp,
			levels,
			bags,
			xp,
			promotions,
			weapons,
			offHand,
			enemyLevels,
			ownedWeaponIds,
			spellSpent
		}, Date.now() % 1e5);
		if (typeof window !== "undefined" && window.innerWidth < 720) battle.zoom = 0;
		awardedRef.current = null;
		setEngine(battle);
		setMissionId(id);
		setHud(battle.getHud());
		setPaused(false);
		setSlotMode(null);
		setScreen("battle");
	}, [
		art,
		save,
		testMode,
		muted,
		bank
	]);
	const onHud = (0, import_react.useCallback)((next) => {
		setHud(next);
	}, []);
	(0, import_react.useEffect)(() => {
		if (screen !== "battle" || !hud.result) return;
		const t = window.setTimeout(() => {
			if (hud.result === "victory" && (missionId === "templo" || missionId === "portao")) {
				setScreen("epilogue");
				return;
			}
			if (hud.result) setScreen(hud.result);
		}, 1100);
		return () => window.clearTimeout(t);
	}, [
		hud.result,
		screen,
		missionId
	]);
	const persistVictory = (0, import_react.useCallback)(() => {
		if (!engine || !mission) return;
		const battleHp = engine.battlePlayerHp();
		const bags = engine.remainingBags();
		const growth = [];
		const newPromotions = [];
		const levels = { ...save.levels };
		const xp = { ...save.xp ?? {} };
		const hp = {};
		for (const u of engine.units.filter((x) => x.side === "player")) {
			const from = levels[u.name] ?? u.level;
			const to = u.level;
			const stFrom = statsFor(u.classId, from);
			const stTo = statsFor(u.classId, to);
			const mag = CLASSES[u.classId].mag > 0;
			const battle = battleHp[u.name] ?? u.hp;
			const healed = u.alive ? Math.min(stTo.hp, battle + Math.ceil((stTo.hp - battle) * .5)) : Math.max(1, Math.ceil(stTo.hp * .5));
			const restHp = u.alive ? healed - battle : healed;
			hp[u.name] = healed;
			growth.push({
				name: u.name,
				from,
				to,
				hpBattle: battle,
				maxFrom: stFrom.hp,
				restHp,
				levelHp: stTo.hp - stFrom.hp,
				hpCamp: healed,
				maxTo: stTo.hp,
				powerFrom: mag ? stFrom.mag : stFrom.atk,
				powerTo: mag ? stTo.mag : stTo.atk,
				powerKind: mag ? "MAG" : "AT",
				atkFrom: stFrom.atk,
				atkTo: stTo.atk,
				magFrom: stFrom.mag,
				magTo: stTo.mag,
				defFrom: stFrom.def,
				defTo: stTo.def,
				resFrom: stFrom.res,
				resTo: stTo.res,
				fallen: !u.alive,
				xp: u.xp,
				xpFrom: from === to ? save.xp?.[u.name] ?? 0 : 0
			});
			if (!testMode && u.alive) {
				levels[u.name] = to;
				xp[u.name] = u.xp;
			}
			const options = PROMOTIONS[u.classId];
			if (!testMode && u.alive && options && !save.promotions[u.name] && from < 15 && to >= 15) newPromotions.push({
				name: u.name,
				options
			});
		}
		setLastGrowth(growth);
		if (newPromotions.length > 0) setPendingPromotions(newPromotions);
		if (awardedRef.current === mission.id) return;
		awardedRef.current = mission.id;
		const completed = save.completed.includes(mission.id) ? save.completed : [...save.completed, mission.id];
		if (!testMode) {
			const loot = engine.units.filter((x) => x.side === "enemy" && !x.alive).reduce((n, u) => n + emberForKill(u.classId), 0);
			const weapons = { ...save.weapons };
			const found = [];
			for (const id of engine.lootWeapons) if (weapons[id] == null) {
				weapons[id] = 0;
				found.push(WEAPONS[id].name);
			}
			const looseEquipment = { ...save.looseEquipment };
			for (const id of engine.lootEquipment) {
				looseEquipment[id] = (looseEquipment[id] ?? 0) + 1;
				found.push(EQUIPMENT[id].name);
			}
			setLastLoot(found);
			persistCurrent({
				...save,
				completed,
				unitHp: hp,
				bags,
				levels,
				xp,
				weapons,
				looseEquipment,
				spellUses: engine.spentTiers(),
				ember: (save.ember ?? 0) + loot + engine.lootEmber,
				emberSeeded: true,
				muted,
				pendingMission: null
			});
		}
	}, [
		engine,
		mission,
		save,
		testMode,
		muted,
		bank
	]);
	(0, import_react.useEffect)(() => {
		if (screen === "victory") persistVictory();
	}, [screen, persistVictory]);
	const choosePromotion = (name, classId) => {
		sfxPlay.ui();
		persistCurrent({
			...save,
			promotions: {
				...save.promotions,
				[name]: classId
			}
		});
		setPendingPromotions((list) => list.filter((p) => p.name !== name));
	};
	const bootAudio = () => {
		unlockAudio();
		sfxPlay.ui();
	};
	const openMission = (id) => {
		bootAudio();
		setCustomMission(null);
		setMissionId(id);
		setScreen("briefing");
	};
	const beginMission = () => {
		if (!missionId) return;
		bootAudio();
		if (missionId === "templo") {
			setScreen("cutscene");
			return;
		}
		if (mission?.hub || missionId === "estalagem") {
			const completed = save.completed.includes(missionId) ? save.completed : [...save.completed, missionId];
			if (!testMode) persistCurrent({
				...save,
				completed,
				pendingMission: null
			});
			setScreen("inn");
			return;
		}
		startBattle(missionId);
	};
	(0, import_react.useEffect)(() => {
		if (muted) {
			stopMusic();
			return;
		}
		if (screen === "boot" || screen === "cutscene" || screen === "epilogue") {
			stopMusic();
			return;
		}
		const inMission = screen === "battle" || screen === "victory" || screen === "defeat" || screen === "briefing";
		if (inMission && missionId === "templo") {
			playTheme("temple");
			return;
		}
		if (inMission && missionId === "aldeia") {
			playTheme("aldeia");
			return;
		}
		if (inMission && (missionId === "vau" || missionId === "bosque" || missionId === "cripta" || missionId === "vertente")) {
			playTheme("early");
			return;
		}
		if (screen === "inn") {
			playTheme("inn");
			return;
		}
		if (screen === "worldMap") {
			playTheme("worldMap");
			return;
		}
		if (inMission && (missionId === "muralha" || missionId === "fortaleza")) {
			playTheme("siege");
			return;
		}
		if (inMission && (missionId === "colina" || missionId === "passagem")) {
			playTheme("hill");
			return;
		}
		if (inMission && missionId === "portao") {
			playTheme("portao");
			return;
		}
		if (inMission) {
			playTheme("early");
			return;
		}
		playMenuMusic();
	}, [
		screen,
		muted,
		missionId
	]);
	const leaveBoot = (0, import_react.useCallback)(() => {
		playMenuMusic();
		setScreen("worldMap");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-dvh min-h-0 bg-bg text-fg overflow-hidden",
		children: [
			screen === "boot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutsceneScreen, {
				src: "/game/title-open.mp4",
				muted: false,
				onSkip: leaveBoot
			}),
			screen === "title" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {
				ready: !!art,
				error: loadError,
				hasProgress,
				muted,
				help,
				onMute: () => {
					unlockAudio();
					setMutedUi((v) => !v);
				},
				onHelp: () => setHelp((v) => !v),
				onNew: () => {
					bootAudio();
					setTestMode(false);
					setOverwrite(null);
					setSlotMode("new");
				},
				onContinue: () => {
					bootAudio();
					setTestMode(false);
					setOverwrite(null);
					setSlotMode("continue");
				},
				onTest: () => {
					bootAudio();
					setTestMode(true);
					setTestEmber(TEST_EMBER);
					setLastGrowth(null);
					setLastLoot([]);
					setMissionId(null);
					setScreen("testMenu");
				}
			}),
			screen === "testMenu" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestMenuScreen, {
				onBack: () => setScreen("title"),
				onDebug: () => setScreen("worldMap"),
				onMapEditor: () => setScreen("mapEditor")
			}),
			screen === "mapEditor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapEditorScreen, {
				onBack: () => setScreen("testMenu"),
				onPlaytest: (m, playerLevels, enemyLevels) => {
					setCustomMission(m);
					startBattle(m.id, {}, m, playerLevels, enemyLevels);
				}
			}),
			screen === "campaign" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampaignScreen, {
				completed: save.completed,
				test: testMode,
				ember: testMode ? testEmber : save.ember ?? 0,
				onBack: () => testMode ? setScreen("testMenu") : setScreen("worldMap"),
				onPick: openMission
			}),
			screen === "worldMap" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldMapScreen, {
				locations: WORLD_LOCATIONS,
				status: (loc) => locationStatus(loc, save.completed, testMode),
				missionStatus: (id) => missionStatus(id, save.completed, testMode),
				ember: testMode ? testEmber : save.ember ?? 0,
				test: testMode,
				muted,
				onMute: () => {
					unlockAudio();
					setMutedUi((v) => !v);
				},
				autoOpenLocationId: openLocationOnMap,
				centerLocationId: locationForMission(MISSIONS.find((m) => !m.hub && !save.completed.includes(m.id))?.id ?? "")?.id ?? null,
				onBack: () => setScreen(testMode ? "testMenu" : "title"),
				onPick: openMission,
				onOpenList: () => setScreen("campaign")
			}),
			screen === "briefing" && mission && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefingScreen, {
				mission,
				onBack: () => setScreen("worldMap"),
				onStart: beginMission
			}),
			screen === "inn" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnScreen, {
				bags: save.bags,
				ember: testMode ? testEmber : save.ember ?? 0,
				muted,
				weapons: save.weapons,
				equipped: save.equipped,
				heroClass: Object.fromEntries(DEFAULT_HEROES.map((h) => [h.name, save.promotions[h.name] ?? h.classId])),
				save: testMode ? {
					...save,
					ember: testEmber
				} : save,
				onMute: () => {
					unlockAudio();
					setMutedUi((v) => !v);
				},
				onLeave: () => setScreen("worldMap"),
				onBuyWeapon: (hero, weaponId) => {
					const rec = activeSave(bank);
					const w = WEAPONS[weaponId];
					if (!w || rec.weapons[weaponId] != null) return false;
					const held = testMode ? testEmber : rec.ember ?? 0;
					if (held < w.price) return false;
					if (testMode) setTestEmber(held - w.price);
					persistCurrent({
						...rec,
						ember: testMode ? rec.ember ?? 0 : held - w.price,
						emberSeeded: true,
						weapons: {
							...rec.weapons,
							[weaponId]: 0
						},
						pendingMission: null
					});
					return true;
				},
				onEquipWeapon: (hero, weaponId) => {
					const rec = activeSave(bank);
					if (rec.weapons[weaponId] == null) return;
					persistCurrent({
						...rec,
						equipped: {
							...rec.equipped,
							[hero]: weaponId
						},
						pendingMission: null
					});
				},
				onEquipItem: (hero, slot, itemId) => {
					const rec = activeSave(bank);
					if ((rec.looseEquipment[itemId] ?? 0) <= 0) return;
					persistCurrent({
						...rec,
						equipment: {
							...rec.equipment,
							[hero]: {
								...rec.equipment[hero] ?? {},
								[slot]: itemId
							}
						},
						pendingMission: null
					});
				},
				onUpgradeWeapon: (weaponId) => {
					const rec = activeSave(bank);
					const enh = rec.weapons[weaponId] ?? 0;
					if (enh >= WEAPON_MAX_ENH) return false;
					const cost = weaponEnhCost(enh + 1);
					const held = testMode ? testEmber : rec.ember ?? 0;
					if (held < cost) return false;
					if (testMode) setTestEmber(held - cost);
					persistCurrent({
						...rec,
						ember: testMode ? rec.ember ?? 0 : held - cost,
						emberSeeded: true,
						weapons: {
							...rec.weapons,
							[weaponId]: enh + 1
						},
						pendingMission: null
					});
					return true;
				},
				onSellWeapon: (weaponId) => {
					const rec = activeSave(bank);
					const enh = rec.weapons[weaponId];
					if (enh == null) return false;
					const value = weaponSellValue(weaponId, enh);
					const held = testMode ? testEmber : rec.ember ?? 0;
					if (testMode) setTestEmber(held + value);
					const weapons = { ...rec.weapons };
					delete weapons[weaponId];
					const equipped = { ...rec.equipped };
					for (const hero of Object.keys(equipped)) if (equipped[hero] === weaponId) delete equipped[hero];
					persistCurrent({
						...rec,
						ember: testMode ? rec.ember ?? 0 : held + value,
						emberSeeded: true,
						weapons,
						equipped,
						pendingMission: null
					});
					return value;
				},
				onPay: (hero, cart, lockpicks) => {
					const rec = activeSave(bank);
					let cost = 0;
					const bag = { ...rec.bags[hero] ?? startingBags()[hero] };
					for (const kind of Object.keys(cart)) {
						const qty = cart[kind] ?? 0;
						if (qty <= 0) continue;
						if ((bag[kind] ?? 0) + qty > POTION_CARRY_MAX[kind]) return false;
						cost += POTION_PRICE[kind] * qty;
						bag[kind] = (bag[kind] ?? 0) + qty;
					}
					if (lockpicks > 0) {
						if ((bag.lockpick ?? 0) + lockpicks > 9) return false;
						cost += 6 * lockpicks;
						bag.lockpick = (bag.lockpick ?? 0) + lockpicks;
					}
					const held = testMode ? testEmber : rec.ember ?? 0;
					if (cost <= 0 || held < cost) return false;
					if (testMode) setTestEmber(held - cost);
					persistCurrent({
						...rec,
						ember: testMode ? rec.ember ?? 0 : held - cost,
						emberSeeded: true,
						bags: {
							...rec.bags,
							[hero]: bag
						},
						pendingMission: null
					});
					return true;
				}
			}),
			screen === "cutscene" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutsceneScreen, {
				src: "/game/asherah-rite.mp4",
				muted,
				onSkip: () => startBattle("templo")
			}),
			screen === "epilogue" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutsceneScreen, {
				src: missionId === "portao" ? "/game/portao-end.mp4" : "/game/temple-aftermath.mp4",
				muted,
				onSkip: () => setScreen("victory")
			}),
			screen === "battle" && engine && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleScreen, {
				engine,
				hud,
				paused,
				muted,
				save,
				onHud,
				onPause: () => setPaused(true),
				onResume: () => {
					setSlotMode(null);
					setOverwrite(null);
					setPaused(false);
				},
				onMute: () => {
					unlockAudio();
					setMutedUi((v) => !v);
				},
				onSave: () => {
					setOverwrite(null);
					setSlotMode("save");
				},
				onLoad: () => {
					setOverwrite(null);
					setSlotMode("load");
				},
				onQuit: () => {
					setPaused(false);
					setSlotMode(null);
					setEngine(null);
					setScreen("worldMap");
				}
			}),
			screen === "victory" && mission && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultScreen, {
				win: true,
				title: mission.title,
				body: "O campo ficou em silêncio.",
				turn: hud.turn,
				growth: lastGrowth,
				loot: lastLoot,
				art: briefArt(mission.id),
				innOpen: !customMission && innUnlocked(save.completed) && mission.index <= 11,
				onInn: () => {
					setMissionId("estalagem");
					setScreen("inn");
				},
				onMap: () => {
					if (customMission) {
						setCustomMission(null);
						setScreen("mapEditor");
						return;
					}
					setOpenLocationOnMap(locationForMission(mission.id)?.id ?? null);
					setScreen("worldMap");
				},
				mapLabel: customMission ? "Voltar ao editor" : "Mapa",
				onTitle: () => setScreen("title"),
				onNext: () => {},
				hasNext: false
			}),
			screen === "victory" && pendingPromotions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromotionScreen, {
				pending: pendingPromotions,
				onPick: choosePromotion
			}),
			screen === "defeat" && mission && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultScreen, {
				win: false,
				title: mission.title,
				body: "A linha quebrou.",
				turn: hud.turn,
				growth: null,
				art: briefArt(mission.id),
				onTitle: () => setScreen("title"),
				onNext: () => startBattle(mission.id, save.unitHp, customMission ?? void 0),
				onMap: customMission ? () => {
					setCustomMission(null);
					setScreen("mapEditor");
				} : void 0,
				mapLabel: customMission ? "Voltar ao editor" : void 0,
				hasNext: true,
				retry: true
			}),
			slotMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotScreen, {
				mode: slotMode,
				bank,
				overwrite,
				onOverwrite: setOverwrite,
				onClose: () => {
					setSlotMode(null);
					setOverwrite(null);
				},
				onPick: (index) => {
					bootAudio();
					if (slotMode === "new") {
						const next = writeSlot(bank, index, emptySave(muted));
						applySlot(next);
						setSlotMode(null);
						setOverwrite(null);
						setLastGrowth(null);
						setLastLoot([]);
						setMissionId(null);
						setEngine(null);
						setScreen("boot");
						return;
					}
					if (slotMode === "continue" || slotMode === "load") {
						const rec = bank.slots[index];
						if (!rec) return;
						const next = selectSlot(bank, index);
						applySlot(next);
						setSlotMode(null);
						setOverwrite(null);
						setPaused(false);
						setEngine(null);
						enterFromSave(rec);
						return;
					}
					const snapshot = combatStartRef.current ?? {
						...save,
						pendingMission: missionId,
						muted
					};
					const next = writeSlot(bank, index, snapshot);
					applySlot(next);
					setSlotMode(null);
					setOverwrite(null);
					setPaused(false);
				}
			})
		]
	});
}
function CutsceneScreen({ src, muted, onSkip }) {
	const ref = (0, import_react.useRef)(null);
	const [portrait, setPortrait] = (0, import_react.useState)(() => typeof window !== "undefined" && window.matchMedia("(max-width: 720px) and (orientation: portrait)").matches);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(max-width: 720px) and (orientation: portrait)");
		const sync = () => setPortrait(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		const ori = screen.orientation;
		ori.lock?.("landscape").catch(() => {});
		return () => {
			mq.removeEventListener("change", sync);
			try {
				ori.unlock?.();
			} catch {}
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		el.muted = muted;
		const kick = () => {
			el.play().catch(() => {
				el.muted = true;
				el.play().catch(() => {});
			});
		};
		kick();
		el.addEventListener("canplay", kick);
		const t = window.setTimeout(onSkip, 2e4);
		return () => {
			el.removeEventListener("canplay", kick);
			window.clearTimeout(t);
		};
	}, [
		muted,
		src,
		onSkip
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh w-dvw bg-black overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cutscene-stage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref,
					src,
					playsInline: true,
					autoPlay: true,
					preload: "auto",
					onEnded: onSkip,
					onError: onSkip
				})
			}),
			portrait && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] text-center text-[11px] tracking-[0.16em] uppercase text-muted",
				children: "Deite o telefone"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 z-10 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "md",
					variant: "ghost",
					onClick: onSkip,
					children: "Pular"
				})
			})
		]
	});
}
function TitleScreen({ ready, error, hasProgress, muted, help, onMute, onHelp, onNew, onContinue, onTest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-dvh flex flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "title-hero absolute inset-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "title-veil absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative z-10 flex items-center justify-end px-4 pt-[max(1.25rem,env(safe-area-inset-top))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onMute,
					className: "size-11 grid place-items-center rounded-md border border-border text-fg",
					"aria-label": muted ? "Ativar som" : "Silenciar",
					children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-1 flex-col justify-end px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] max-w-xl mx-auto w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tracking-[0.28em] uppercase text-muted mb-3",
						children: "Táticas em cinzas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl sm:text-7xl font-medium tracking-tight leading-none mb-4",
						children: "Ember"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.18em] uppercase text-muted -mt-3 mb-4",
						children: "V. 2.58"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted text-base leading-relaxed mb-8 max-w-md",
						children: "Três sobreviventes. Um tabuleiro de guerra. Cada casa conta."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "xl",
								disabled: !ready,
								onClick: onNew,
								children: ready ? "Nova campanha" : "Carregando…"
							}),
							hasProgress && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "ghost",
								disabled: !ready,
								onClick: onContinue,
								children: "Continuar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "quiet",
								onClick: onHelp,
								children: "Como jogar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "ghost",
								disabled: !ready,
								onClick: onTest,
								children: "Modo teste"
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-danger",
						children: error
					})
				]
			}),
			help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpModal, { onClose: onHelp })
		]
	});
}
/** One entry per casting-speed tier: which classes share it, one classId to read the table
* from (every class in the group has identical numbers), and how many tiers it goes up to.
* Class names, not hero names — keeps it about the role, not who's playing it. */
var SKILL_SPEED_GROUPS = [
	{
		label: "Conjuração Rápida",
		classes: [
			"mage",
			"conjurer",
			"healer",
			"elementalist",
			"sorcerer",
			"bishop"
		].map((c) => CLASSES[c].name).join(", "),
		classId: "mage",
		maxTier: 10
	},
	{
		label: "Conjuração Média",
		classes: [
			"archer",
			"warlock",
			"necromancer",
			"cleric",
			"paladin",
			"assassin",
			"templar"
		].map((c) => CLASSES[c].name).join(", "),
		classId: "archer",
		maxTier: 8
	},
	{
		label: "Conjuração Lenta",
		classes: [
			"swordsman",
			"lancer",
			"heavyKnight",
			"ranger",
			"sentinel"
		].map((c) => CLASSES[c].name).join(", "),
		classId: "swordsman",
		maxTier: 6
	}
];
/** One row per potion in the loot-weighted pick (weightedPotionPick) — % chance is its share
* of the total weight across every potion, so this always matches what's actually rolled. */
var POTION_LOOT_ROWS = Object.entries(POTION_LOOT_WEIGHT).map(([id, weight]) => ({
	name: POTIONS$1[id].name,
	weight
}));
var POTION_LOOT_TOTAL = POTION_LOOT_ROWS.reduce((n, r) => n + r.weight, 0);
/** One entry per skill/spell tier slot (SPELL_TIER's own keys) — tier, damage formula (a
* plain string for flat skills, or a function of level for the two that scale), and a
* one-line effect note. Kept next to SPELL_TIER by hand since a skill's shape (splash, line,
* status effect) isn't data SPELL_TIER itself carries. */
var SKILL_DAMAGE_ROWS = [
	{
		name: MAGIC_MISSILE.name,
		tier: spellTier("magicMissile"),
		formula: diceFormula(MAGIC_MISSILE.dice, MAGIC_MISSILE.faces, MAGIC_MISSILE.bonus),
		note: "Nunca erra."
	},
	{
		name: LONG_SHOT.name,
		tier: spellTier("longShot"),
		formula: `arma +${diceFormula(LONG_SHOT.bonusDice, LONG_SHOT.bonusFaces, LONG_SHOT.bonus)}`,
		note: `Alcance ×${LONG_SHOT.rangeMul}+${LONG_SHOT.rangeBonus}.`
	},
	{
		name: CURES.cureMinor.name,
		tier: spellTier("cureMinor"),
		formula: `${diceFormula(CURES.cureMinor.dice, CURES.cureMinor.faces, CURES.cureMinor.bonus)} (cura)`,
		note: "—"
	},
	{
		name: DOUBLE_STRIKE.name,
		tier: spellTier("doubleStrike"),
		formula: "2× dano de arma",
		note: "Ataca duas vezes."
	},
	{
		name: PIERCING_THRUST.name,
		tier: spellTier("piercingThrust"),
		formula: `dano de arma, −${Math.round(PIERCING_THRUST.armorIgnore * 100)}% armadura`,
		note: "Acerta em linha; o segundo alvo recebe metade."
	},
	{
		name: SUMMON_FAMILIAR.name,
		tier: spellTier("summonFamiliar"),
		formula: "—",
		note: `Invoca aliado com ${Math.round(SUMMON_FAMILIAR.statScale * 100)}% dos atributos atuais.`
	},
	{
		name: LIGHTNING.name,
		tier: spellTier("lightning"),
		formula: (level) => lightningFormula(level),
		note: `Eco em outro alvo adjacente: ${diceFormula(LIGHTNING.echoDice, LIGHTNING.echoFaces, LIGHTNING.echoBonus)}. Nv8+: mais 2 dados.`
	},
	{
		name: PIERCING.name,
		tier: spellTier("piercing"),
		formula: `${PIERCING.dmgMul}× dano de arma`,
		note: "—"
	},
	{
		name: CURES.cureWounds.name,
		tier: spellTier("cureWounds"),
		formula: `${diceFormula(CURES.cureWounds.dice, CURES.cureWounds.faces, CURES.cureWounds.bonus)} (cura)`,
		note: "—"
	},
	{
		name: CLEAVE.name,
		tier: spellTier("cleave"),
		formula: `arma +${diceFormula(CLEAVE.bonusDice, CLEAVE.bonusFaces, CLEAVE.bonusBonus)}`,
		note: `Atinge até ${CLEAVE.hexes} hexes.`
	},
	{
		name: SWEEP.name,
		tier: spellTier("sweep"),
		formula: "dano de arma",
		note: `Todos os inimigos adjacentes; empurra ${SWEEP.knockback} hex.`
	},
	{
		name: WEB_OF_DREAMS.name,
		tier: spellTier("webOfDreams"),
		formula: "—",
		note: `${Math.round(WEB_OF_DREAMS.sleepChance * 100)}% de dormir por ${diceFormula(WEB_OF_DREAMS.sleepDice, WEB_OF_DREAMS.sleepFaces, 0)} turnos (+${Math.round(WEB_OF_DREAMS.sleepBonusDamage * 100)}% dano ao acordar); prende o movimento a 1 hex na área por ${WEB_OF_DREAMS.durationRounds} turnos.`
	},
	{
		name: TRIP.name,
		tier: spellTier("trip"),
		formula: `arma +${diceFormula(1, TRIP.bonusFaces, TRIP.bonusBonus)}`,
		note: `Atordoa ${TRIP.stunRounds} turnos; −${Math.round(TRIP.statPenalty * 100)}% de status pro resto da batalha.`
	},
	{
		name: FIREBALL.name,
		tier: spellTier("fireball"),
		formula: (level) => fireballFormula(level),
		note: "Nv5+: dados maiores. Nv9+: maiores ainda. Área de raio 2."
	},
	{
		name: CURE_DISEASE.name,
		tier: spellTier("cureDisease"),
		formula: "—",
		note: "Cura doença."
	},
	{
		name: CAUSTIC_VENOM.name,
		tier: spellTier("causticVenom"),
		formula: `centro ${diceFormula(CAUSTIC_VENOM.centerDice, CAUSTIC_VENOM.centerFaces, CAUSTIC_VENOM.centerBonus)} · respingo ${diceFormula(CAUSTIC_VENOM.splashDice, CAUSTIC_VENOM.splashFaces, CAUSTIC_VENOM.splashBonus)}`,
		note: "Envenena: 1D4 no início de cada turno do alvo, até curado. Área de raio 2."
	}
].sort((a, b) => a.tier - b.tier);
function HelpModal({ onClose }) {
	const [tab, setTab] = (0, import_react.useState)("basicos");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-20 bg-bg/80 flex items-end sm:items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md max-h-[85dvh] overflow-y-auto bg-surface border border-border rounded-xl p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Como jogar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "size-11 grid place-items-center",
						"aria-label": "Fechar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1 mb-4 border-b border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTab("basicos"),
							className: `px-3 py-2 text-sm font-medium border-b-2 -mb-px ${tab === "basicos" ? "border-accent text-fg" : "border-transparent text-muted"}`,
							children: "Básicos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTab("tabelas"),
							className: `px-3 py-2 text-sm font-medium border-b-2 -mb-px ${tab === "tabelas" ? "border-accent text-fg" : "border-transparent text-muted"}`,
							children: "Usos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTab("dano"),
							className: `px-3 py-2 text-sm font-medium border-b-2 -mb-px ${tab === "dano" ? "border-accent text-fg" : "border-transparent text-muted"}`,
							children: "Dano"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTab("loot"),
							className: `px-3 py-2 text-sm font-medium border-b-2 -mb-px ${tab === "loot" ? "border-accent text-fg" : "border-transparent text-muted"}`,
							children: "Loot"
						})
					]
				}),
				tab === "basicos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-muted leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Toque numa aliada para ver movimento (azul) e ataque (vermelho)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Toque num inimigo para ver HP, alcance e a área vermelha de perigo." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Golpe de arma: AT − DF, dentro do alcance da ficha." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Magia ofensiva: o dado − RES, no alcance da magia." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Todo mundo tem AT, MAG, DF, RES, Mov e Alc. Nada fica de fora da ficha." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Terreno alto (barranco, tronco morto, casa abandonada): +2 de dano. A arqueira também ganha +1 de alcance. No alto, outro hex alto na frente não corta a flecha." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Barricada (estacas, 3 hexes): ninguém passa. De trás você atira. Projéteis não acertam quem está atrás." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Depois de mover, dois cliques no personagem = Esperar e passa ao próximo." })
					]
				}) : tab === "tabelas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted leading-relaxed",
						children: "Cada classe tem uma velocidade de conjuração — ela decide quantos usos de cada tier (1 a 5) a classe tem em cada nível. As tabelas abaixo mostram os números exatos, nível a nível."
					}), SKILL_SPEED_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: [
							g.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted font-normal",
								children: ["· ", g.classes]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-xs tabular-nums border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left font-normal pr-2 py-1",
									children: "Nv"
								}), Array.from({ length: g.maxTier }, (_, i) => i + 1).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
									className: "text-right font-normal px-1.5 py-1",
									children: ["T", t]
								}, t))]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: Array.from({ length: 30 }, (_, i) => i + 1).map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-left py-0.5 pr-2 text-muted",
									children: level
								}), Array.from({ length: g.maxTier }, (_, i) => i + 1).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-right px-1.5 py-0.5",
									children: tierUses(g.classId, t, level)
								}, t))]
							}, level)) })]
						})
					})] }, g.label))]
				}) : tab === "dano" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted leading-relaxed",
						children: "Fórmula de dano (ou efeito) de cada magia/habilidade, por tier. Relâmpago e Bola de Fogo escalam com o nível de quem conjura — a tabela mostra Nv 1, 5, 9 e 30 pra ver a curva inteira."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-xs border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left font-normal pr-2 py-1",
										children: "Habilidade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-center font-normal px-1.5 py-1",
										children: "Tier"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left font-normal px-1.5 py-1",
										children: "Fórmula"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left font-normal pl-1.5 py-1",
										children: "Efeito"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: SKILL_DAMAGE_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border/60 align-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-left py-1 pr-2 font-medium whitespace-nowrap",
										children: row.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "text-center px-1.5 py-1 text-muted",
										children: ["T", row.tier]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-left px-1.5 py-1 tabular-nums",
										children: typeof row.formula === "string" ? row.formula : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "space-x-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Nv1: ", row.formula(1)] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted",
													children: ["· Nv5: ", row.formula(5)]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted",
													children: ["· Nv9: ", row.formula(9)]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted",
													children: ["· Nv30: ", row.formula(30)]
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-left pl-1.5 py-1 text-muted",
										children: row.note
									})
								]
							}, row.name)) })]
						})
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted leading-relaxed",
							children: "Chances de drop, do jeito que estão programadas agora."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "Poções em baú (por baú)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted leading-relaxed mb-2",
								children: "Todo baú dá Ember + uma poção garantida (sorteada abaixo) + uma chance separada de item."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-xs tabular-nums border-collapse",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-left font-normal pr-2 py-1",
											children: "Poção"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "text-right font-normal pl-1.5 py-1",
											children: "Chance"
										})]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: POTION_LOOT_ROWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "text-left py-0.5 pr-2",
											children: r.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "text-right pl-1.5 py-0.5",
											children: [(r.weight / POTION_LOOT_TOTAL * 100).toFixed(0), "%"]
										})]
									}, r.name)) })]
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-muted leading-relaxed space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-fg font-medium text-sm",
									children: "Ember e item de baú"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Ember: ",
									CHEST_LOOT.emberBase,
									"–",
									CHEST_LOOT.emberBase + CHEST_LOOT.emberDice - 1,
									" por baú."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Chance extra de arma ou equipamento: ",
									Math.round(CHEST_LOOT.gearChance * 100),
									"%."
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm text-muted leading-relaxed space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-fg font-medium text-sm",
									children: "Drop ao matar inimigo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Inimigo comum: ",
									(KILL_DROP_CHANCE * 100).toFixed(0),
									"% de chance de largar uma arma."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Chefes nomeados (drop garantido): sempre largam arma ou equipamento ao morrer." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted leading-relaxed",
							children: "Toda arma/equipamento largado é sorteado por preço — quanto mais caro, mais raro — e limitado ao nível de itens da missão atual, então cada trecho da campanha só solta o que faz sentido pra ele."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5 w-full",
					onClick: onClose,
					children: "Entendi"
				})
			]
		})
	});
}
function TestMenuScreen({ onBack, onDebug, onMapEditor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "h-dvh min-h-0 flex flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4 border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "size-10 grid place-items-center rounded-md border border-border",
				"aria-label": "Voltar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm uppercase tracking-[0.18em] text-muted",
					children: "Modo teste"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl leading-none",
					children: "O que abrir?"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 min-h-0 flex flex-col justify-center gap-3 p-5 max-w-md mx-auto w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onDebug,
				className: "text-left rounded-xl border border-border bg-bg/40 px-5 py-4 hover:border-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl leading-tight",
					children: "Debug"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted mt-1",
					children: "Joga qualquer missão da campanha, sem travar progresso — o de sempre."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onMapEditor,
				className: "text-left rounded-xl border border-border bg-bg/40 px-5 py-4 hover:border-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl leading-tight",
					children: "Map Editor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted mt-1",
					children: "Pinta terreno, posiciona spawns, testa na hora e exporta pra colar no jogo."
				})]
			})]
		})]
	});
}
var MAP_VERSIONS_KEY = "ember-map-versions";
var MAP_ACTIVE_KEY = "ember-map-active";
var EDITOR_COLS_DEFAULT = 10;
var EDITOR_ROWS_DEFAULT = 8;
/** Default level for a newly added spawn: enough spell slots unlocked to actually test
* with, without being maxed out. */
var DEFAULT_TEST_LEVEL = 10;
function blankDraft() {
	return {
		id: `custom-${Date.now().toString(36)}`,
		index: 0,
		title: "Mapa sem nome",
		place: "",
		briefing: "",
		objective: "Derrote todos os inimigos",
		win: "rout",
		hub: false,
		cols: EDITOR_COLS_DEFAULT,
		rows: EDITOR_ROWS_DEFAULT,
		tiles: Array.from({ length: 80 }, () => "plains"),
		tileVariants: Array.from({ length: 80 }, () => 0),
		decorations: [],
		playerSpawns: [],
		enemySpawns: []
	};
}
/** Loads an existing campaign mission into the editor, targeting that same mission's id —
* so saved versions stack up under it and "Ativar" can make one of them live for that
* real campaign slot. The immutable static Mission data itself is never touched; this
* only ever writes to the versioned localStorage store. */
function missionToDraft(m) {
	const n = m.cols * m.rows;
	const variants = m.tileVariants ?? [];
	return {
		id: m.id,
		index: m.index,
		title: m.title,
		place: m.place,
		briefing: m.briefing,
		objective: m.objective,
		win: m.win,
		hub: !!m.hub,
		cols: m.cols,
		rows: m.rows,
		tiles: parseLayout(m.layout),
		tileVariants: Array.from({ length: n }, (_, i) => variants[i] ?? 0),
		decorations: m.decorations ?? [],
		playerSpawns: m.playerSpawns.map((s) => ({
			...s,
			level: DEFAULT_TEST_LEVEL
		})),
		enemySpawns: m.enemySpawns.map((s) => ({
			...s,
			level: enemyLevelFor(m.index)
		}))
	};
}
var DEFAULT_HEROES = [
	{
		name: "Kael",
		classId: "swordsman"
	},
	{
		name: "Neera",
		classId: "archer"
	},
	{
		name: "Voss",
		classId: "mage"
	},
	{
		name: "Salazar",
		classId: "healer"
	}
];
function loadVersionStore() {
	try {
		const raw = window.localStorage.getItem(MAP_VERSIONS_KEY);
		const parsed = raw ? JSON.parse(raw) : {};
		return parsed && typeof parsed === "object" ? parsed : {};
	} catch {
		return {};
	}
}
function saveVersionStore(store) {
	try {
		window.localStorage.setItem(MAP_VERSIONS_KEY, JSON.stringify(store));
	} catch {}
}
function loadActiveVersions() {
	try {
		const raw = window.localStorage.getItem(MAP_ACTIVE_KEY);
		const parsed = raw ? JSON.parse(raw) : {};
		return parsed && typeof parsed === "object" ? parsed : {};
	} catch {
		return {};
	}
}
function saveActiveVersions(map) {
	try {
		window.localStorage.setItem(MAP_ACTIVE_KEY, JSON.stringify(map));
	} catch {}
}
function draftToMission(d) {
	const layout = [];
	for (let r = 0; r < d.rows; r++) {
		let row = "";
		for (let c = 0; c < d.cols; c++) row += TILE_CHAR[d.tiles[r * d.cols + c] ?? "plains"];
		layout.push(row);
	}
	return {
		id: d.id,
		index: d.index,
		title: d.title,
		place: d.place,
		briefing: d.briefing,
		objective: d.objective,
		win: d.win,
		cols: d.cols,
		rows: d.rows,
		layout,
		tileVariants: d.tileVariants.some((v) => v) ? d.tileVariants : void 0,
		decorations: d.decorations.length > 0 ? d.decorations : void 0,
		playerSpawns: d.playerSpawns.map(({ level: _level, ...s }) => s),
		enemySpawns: d.enemySpawns.map(({ level: _level, ...s }) => s),
		hub: d.hub || void 0
	};
}
/** Resolves a mission id for REAL play (not the editor's own playtest): an activated
* custom version takes precedence over the immutable static MISSIONS data, so authoring
* a scenario in the Map Editor can actually replace what the campaign plays without ever
* touching the shipped data. */
function resolveMission(id) {
	const active = loadActiveVersions()[id];
	if (active) {
		const version = loadVersionStore()[id]?.find((v) => v.serial === active);
		if (version) return draftToMission(version.draft);
	}
	return missionById(id);
}
var TERRAIN_SWATCH = {
	plains: "#9c8f6f",
	woods: "#3f5c3a",
	ruins: "#6b6560",
	water: "#2c5f7a",
	ember: "#7a2c2c",
	hill: "#8a7a4f",
	flame: "#b5501f",
	column: "#4a4a52",
	nave: "#26262c",
	barricade: "#5a4630",
	highwood: "#4a3f2a",
	highruin: "#5f584c",
	chest: "#7a5c2e",
	door: "#4a3524",
	deadtree: "#4a3f2a",
	void: "#050505"
};
/** Hover text for a terrain type: its combat stats plus terrainNote()'s callout, so the
* editor documents what each tile actually does instead of just naming it. */
function terrainHint(t) {
	const d = TERRAIN[t];
	const parts = [
		d.passable ? `Mov ${d.moveCost}` : "Intransponível",
		`Def +${d.def}`,
		`Atk +${d.atk}`
	];
	if (d.blocksShot) parts.push("bloqueia tiro/visão");
	if (d.hazardDice) parts.push(`dano ${d.hazardDice}D${d.hazardFaces} por turno parado`);
	const note = terrainNote(t);
	return note ? `${parts.join(" · ")} — ${note}` : parts.join(" · ");
}
function MapEditorScreen({ onBack, onPlaytest }) {
	const [versionStore, setVersionStore] = (0, import_react.useState)(() => loadVersionStore());
	const [activeVersions, setActiveVersions] = (0, import_react.useState)(() => loadActiveVersions());
	const [draft, setDraft] = (0, import_react.useState)(() => blankDraft());
	const [brush, setBrush] = (0, import_react.useState)("plains");
	const [variant, setVariant] = (0, import_react.useState)(0);
	const [decoBrush, setDecoBrush] = (0, import_react.useState)(Object.keys(DECORATIONS)[0]);
	const [mode, setMode] = (0, import_react.useState)("paint");
	const [gridStyle, setGridStyle] = (0, import_react.useState)("hex");
	const [exportText, setExportText] = (0, import_react.useState)(null);
	const [copyOk, setCopyOk] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)(null);
	const versions = versionStore[draft.id] ?? [];
	const activeSerial = activeVersions[draft.id];
	const decoLookup = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		for (const p of draft.decorations) {
			const def = DECORATIONS[p.id];
			if (!def) continue;
			for (const f of def.footprint) m.set(`${p.x + f.dx},${p.y + f.dy}`, def.name);
		}
		return m;
	}, [draft.decorations]);
	const setTile = (i, t) => {
		setDraft((d) => {
			const tiles = d.tiles.slice();
			const tileVariants = d.tileVariants.slice();
			tiles[i] = t;
			tileVariants[i] = Math.min(variant, TILE_VARIANT_COUNT[t] - 1);
			return {
				...d,
				tiles,
				tileVariants
			};
		});
	};
	const toggleSpawn = (x, y) => {
		setDraft((d) => {
			const key = mode === "player" ? "playerSpawns" : "enemySpawns";
			const list = d[key];
			const existing = list.findIndex((s) => s.x === x && s.y === y);
			if (existing >= 0) return {
				...d,
				[key]: list.filter((_, i) => i !== existing)
			};
			const n = list.length + 1;
			const spawn = {
				name: mode === "player" ? `Herói ${n}` : `Inimigo ${n}`,
				classId: mode === "player" ? "swordsman" : "soldier",
				x,
				y,
				level: mode === "player" ? DEFAULT_TEST_LEVEL : enemyLevelFor(0)
			};
			return {
				...d,
				[key]: [...list, spawn]
			};
		});
	};
	const toggleDecoration = (x, y) => {
		setDraft((d) => {
			const covered = decorationCells(d.decorations);
			const hit = d.decorations.find((p) => {
				return DECORATIONS[p.id]?.footprint.some((f) => p.x + f.dx === x && p.y + f.dy === y);
			});
			if (hit) return {
				...d,
				decorations: d.decorations.filter((p) => p !== hit)
			};
			const def = DECORATIONS[decoBrush];
			if (!def) return d;
			for (const f of def.footprint) {
				const cx = x + f.dx;
				const cy = y + f.dy;
				if (cx < 0 || cy < 0 || cx >= d.cols || cy >= d.rows) return d;
				if (covered.has(`${cx},${cy}`)) return d;
			}
			return {
				...d,
				decorations: [...d.decorations, {
					id: decoBrush,
					x,
					y
				}]
			};
		});
	};
	const onCellClick = (x, y) => {
		const i = y * draft.cols + x;
		if (mode === "paint") setTile(i, brush);
		else if (mode === "decoration") toggleDecoration(x, y);
		else toggleSpawn(x, y);
	};
	const resize = (cols, rows) => {
		cols = Math.max(3, Math.min(40, cols));
		rows = Math.max(3, Math.min(40, rows));
		setDraft((d) => {
			const tiles = [];
			const tileVariants = [];
			for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
				const inOld = r < d.rows && c < d.cols;
				tiles.push(inOld ? d.tiles[r * d.cols + c] ?? "plains" : "plains");
				tileVariants.push(inOld ? d.tileVariants[r * d.cols + c] ?? 0 : 0);
			}
			const inBounds = (s) => s.x < cols && s.y < rows;
			const decorations = d.decorations.filter((p) => {
				const def = DECORATIONS[p.id];
				if (!def) return false;
				return def.footprint.every((f) => p.x + f.dx >= 0 && p.y + f.dy >= 0 && p.x + f.dx < cols && p.y + f.dy < rows);
			});
			return {
				...d,
				cols,
				rows,
				tiles,
				tileVariants,
				decorations,
				playerSpawns: d.playerSpawns.filter(inBounds),
				enemySpawns: d.enemySpawns.filter(inBounds)
			};
		});
	};
	const updateSpawn = (side, i, patch) => {
		setDraft((d) => {
			const list = d[side].slice();
			list[i] = {
				...list[i],
				...patch
			};
			return {
				...d,
				[side]: list
			};
		});
	};
	const removeSpawn = (side, i) => {
		setDraft((d) => ({
			...d,
			[side]: d[side].filter((_, idx) => idx !== i)
		}));
	};
	const addDefaultHeroes = () => {
		setDraft((d) => {
			const occupied = new Set([...d.playerSpawns, ...d.enemySpawns].map((s) => `${s.x},${s.y}`));
			const already = new Set(d.playerSpawns.map((s) => s.name));
			const added = [];
			let x = 0;
			const y = d.rows - 1;
			for (const h of DEFAULT_HEROES) {
				if (already.has(h.name)) continue;
				while (x < d.cols && occupied.has(`${x},${y}`)) x++;
				if (x >= d.cols) break;
				added.push({
					name: h.name,
					classId: h.classId,
					x,
					y,
					level: DEFAULT_TEST_LEVEL
				});
				occupied.add(`${x},${y}`);
				x++;
			}
			return {
				...d,
				playerSpawns: [...d.playerSpawns, ...added]
			};
		});
	};
	const doSave = () => {
		const list = versionStore[draft.id] ?? [];
		const serial = (list[list.length - 1]?.serial ?? 0) + 1;
		const next = {
			...versionStore,
			[draft.id]: [...list, {
				serial,
				draft,
				savedAt: Date.now()
			}]
		};
		setVersionStore(next);
		saveVersionStore(next);
		setNote(`Salvo como v${serial} de "${draft.id}". Use Ativar pra valer pra campanha.`);
	};
	const doExport = () => {
		doSave();
		setExportText(JSON.stringify(draftToMission(draft), null, 2));
		setCopyOk(false);
	};
	const doActivate = (serial) => {
		const next = {
			...activeVersions,
			[draft.id]: serial
		};
		setActiveVersions(next);
		saveActiveVersions(next);
		setNote(`v${serial} agora é a versão valendo pra "${draft.id}" na campanha.`);
	};
	const doDeactivate = () => {
		const next = { ...activeVersions };
		delete next[draft.id];
		setActiveVersions(next);
		saveActiveVersions(next);
		setNote(`"${draft.id}" voltou a usar o cenário original.`);
	};
	const doDeleteVersion = (serial) => {
		const list = (versionStore[draft.id] ?? []).filter((v) => v.serial !== serial);
		const next = {
			...versionStore,
			[draft.id]: list
		};
		if (list.length === 0) delete next[draft.id];
		setVersionStore(next);
		saveVersionStore(next);
		if (activeVersions[draft.id] === serial) doDeactivate();
		setNote(`v${serial} excluída.`);
	};
	const classOptions = Object.keys(CLASSES);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "h-dvh min-h-0 flex flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					className: "size-10 grid place-items-center rounded-md border border-border",
					"aria-label": "Voltar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm uppercase tracking-[0.18em] text-muted",
						children: "Modo teste"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl leading-none",
						children: "Map Editor"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setDraft(blankDraft()),
								children: "Novo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "bg-bg border border-border rounded-md px-2 py-1.5",
								value: "",
								onChange: (e) => {
									const m = missionById(e.target.value);
									if (m) setDraft(missionToDraft(m));
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Carregar da campanha…"
								}), MISSIONS.filter((m) => !m.hub).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: m.id,
									children: m.title
								}, m.id))]
							}),
							Object.keys(versionStore).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "mapPick",
								className: "flex-1 min-w-0 bg-bg border border-border rounded-md px-2 py-1.5",
								value: "",
								title: "Abre a versão mais recente salva para esse cenário — a lista de versões abaixo deixa escolher outra",
								onChange: (e) => {
									const list = versionStore[e.target.value];
									const latest = list?.[list.length - 1];
									if (latest) setDraft(latest.draft);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Abrir cenário com versões salvas…"
								}), Object.entries(versionStore).map(([id, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: id,
									children: [
										id,
										" (",
										list.length,
										" versão",
										list.length === 1 ? "" : "ões",
										activeVersions[id] ? `, v${activeVersions[id]} ativa` : "",
										")"
									]
								}, id))]
							})
						]
					}),
					note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-accent bg-accent/10 border border-accent/40 rounded-md px-2 py-1.5",
						children: note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-1",
								title: "O cenário da campanha que essa edição mira. Bate com o id de uma missão real (ex.: o-vau) pra poder ativar essa versão nela, ou qualquer id livre pra um mapa avulso.",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted text-xs uppercase tracking-wide",
									children: "Cenário alvo (Id)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "bg-bg border border-border rounded-md px-2 py-1.5",
									value: draft.id,
									onChange: (e) => setDraft((d) => ({
										...d,
										id: e.target.value.replace(/[^a-z0-9-]/gi, "")
									}))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted text-xs uppercase tracking-wide",
									children: "Título"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "bg-bg border border-border rounded-md px-2 py-1.5",
									value: draft.title,
									onChange: (e) => setDraft((d) => ({
										...d,
										title: e.target.value
									}))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted text-xs uppercase tracking-wide",
									children: "Local"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "bg-bg border border-border rounded-md px-2 py-1.5",
									value: draft.place,
									onChange: (e) => setDraft((d) => ({
										...d,
										place: e.target.value
									}))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted text-xs uppercase tracking-wide",
									children: "Objetivo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "bg-bg border border-border rounded-md px-2 py-1.5",
									value: draft.objective,
									onChange: (e) => setDraft((d) => ({
										...d,
										objective: e.target.value
									}))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-1 col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted text-xs uppercase tracking-wide",
									children: "Briefing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: "bg-bg border border-border rounded-md px-2 py-1.5 min-h-16",
									value: draft.briefing,
									onChange: (e) => setDraft((d) => ({
										...d,
										briefing: e.target.value
									}))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted text-xs uppercase tracking-wide",
									children: "Vitória"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "bg-bg border border-border rounded-md px-2 py-1.5",
									value: draft.win,
									onChange: (e) => setDraft((d) => ({
										...d,
										win: e.target.value
									})),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "rout",
										children: "Derrote todos (rout)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "boss",
										children: "Derrube o chefe (boss)"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: draft.hub,
									onChange: (e) => setDraft((d) => ({
										...d,
										hub: e.target.checked
									}))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "É um hub (sem combate)"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted text-xs uppercase tracking-wide",
									children: "Col"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: "w-16 bg-bg border border-border rounded-md px-2 py-1",
									value: draft.cols,
									onChange: (e) => resize(Number(e.target.value) || draft.cols, draft.rows)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted text-xs uppercase tracking-wide",
									children: "Lin"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									className: "w-16 bg-bg border border-border rounded-md px-2 py-1",
									value: draft.rows,
									onChange: (e) => resize(draft.cols, Number(e.target.value) || draft.rows)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex rounded-md border border-border overflow-hidden text-xs",
								children: ["hex", "square"].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setGridStyle(g),
									title: g === "hex" ? "Grade em hexágono, igual ao jogo" : "Grade quadrada (mais rápida de editar)",
									className: `px-2.5 py-1.5 ${gridStyle === g ? "bg-accent text-bg" : "bg-bg text-muted"}`,
									children: g === "hex" ? "Hexágono" : "Quadrado"
								}, g))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex rounded-md border border-border overflow-hidden text-xs",
								children: [
									"paint",
									"decoration",
									"player",
									"enemy"
								].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setMode(m),
									className: `px-2.5 py-1.5 ${mode === m ? "bg-accent text-bg" : "bg-bg text-muted"}`,
									children: m === "paint" ? "Terreno" : m === "decoration" ? "Decoração" : m === "player" ? "Herói" : "Inimigo"
								}, m))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: addDefaultHeroes,
							children: "Adicionar Kael, Neera, Voss, Salazar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted ml-auto",
							children: "Nível de cada um é editável na lista abaixo."
						})]
					}),
					mode === "paint" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: Object.keys(TERRAIN).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								title: terrainHint(t),
								onClick: () => {
									setBrush(t);
									setVariant((v) => Math.min(v, (TILE_VARIANT_COUNT[t] ?? 1) - 1));
								},
								className: `text-xs px-2 py-1 rounded-md border flex items-center gap-1.5 ${brush === t ? "border-accent" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-3 rounded-sm inline-block",
									style: { background: TERRAIN_SWATCH[t] }
								}), TERRAIN[t].name]
							}, t))
						}), (TILE_VARIANT_COUNT[brush] ?? 1) > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted uppercase tracking-wide",
								children: "Versão"
							}), Array.from({ length: TILE_VARIANT_COUNT[brush] }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								title: `Pinta ${TERRAIN[brush].name} usando a arte ${String(i + 1).padStart(2, "0")}`,
								onClick: () => setVariant(i),
								className: `size-7 rounded-md border overflow-hidden ${variant === i ? "border-accent" : "border-border"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/game/tiles/${brush}${String(i + 1).padStart(2, "0")}.png`,
									alt: "",
									className: "size-full object-cover"
								})
							}, i))]
						})]
					}),
					mode === "decoration" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Clique na casa âncora pra colocar; clique em qualquer casa que a decoração cubra pra remover. Toda casa coberta fica intransponível e bloqueia visão/tiro, não importa o terreno por baixo."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: Object.values(DECORATIONS).map((dec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								title: `${dec.name} · ${dec.footprint.length} hexes`,
								onClick: () => setDecoBrush(dec.id),
								className: `flex items-center gap-1.5 text-xs px-2 py-1 rounded-md border ${decoBrush === dec.id ? "border-accent" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: decorationImage(dec.id),
									alt: "",
									className: "size-6 rounded-sm object-cover bg-bg"
								}), dec.name]
							}, dec.id))
						})]
					}),
					(mode === "player" || mode === "enemy") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"Clique numa casa vazia pra adicionar ",
							mode === "player" ? "um herói" : "um inimigo",
							"; clique numa casa ocupada (do mesmo lado) pra remover. Edite nome/classe na lista abaixo."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-auto resize shrink-0 border border-border rounded-md p-2 bg-bg/40 h-[60vh] min-h-[320px] min-w-[280px] [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-bg/60 [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full",
						style: {
							scrollbarWidth: "auto",
							scrollbarColor: "var(--color-border, #5a5a5a) transparent"
						},
						children: gridStyle === "square" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-px w-max",
							style: { gridTemplateColumns: `repeat(${draft.cols}, 22px)` },
							children: draft.tiles.map((t, i) => {
								const x = i % draft.cols;
								const y = Math.floor(i / draft.cols);
								const p = draft.playerSpawns.find((s) => s.x === x && s.y === y);
								const e = draft.enemySpawns.find((s) => s.x === x && s.y === y);
								const deco = decoLookup.get(`${x},${y}`);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									title: p ? p.name : e ? e.name : deco ?? terrainHint(t),
									onClick: () => onCellClick(x, y),
									className: `size-[22px] grid place-items-center text-[9px] font-bold ${deco ? "outline outline-2 outline-offset-[-2px] outline-amber-400/80" : ""}`,
									style: { background: TERRAIN_SWATCH[t] },
									children: p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sky-300",
										children: "P"
									}) : e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-400",
										children: "E"
									}) : deco ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-amber-300",
										children: "D"
									}) : null
								}, i);
							})
						}) : (() => {
							const HR = 13;
							const SQRT3 = Math.sqrt(3);
							const hexW = SQRT3 * HR;
							const hexH = 26;
							const boardW = HR * SQRT3 * (draft.cols + .5);
							const boardH = HR * (1.5 * (draft.rows - 1) + 2);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								style: {
									width: boardW,
									height: boardH
								},
								children: draft.tiles.map((t, i) => {
									const x = i % draft.cols;
									const y = Math.floor(i / draft.cols);
									const p = draft.playerSpawns.find((s) => s.x === x && s.y === y);
									const e = draft.enemySpawns.find((s) => s.x === x && s.y === y);
									const deco = decoLookup.get(`${x},${y}`);
									const cx = HR * SQRT3 * (x + .5 * (y & 1) + .5);
									const cy = HR * (1.5 * y + 1);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										title: p ? p.name : e ? e.name : deco ?? terrainHint(t),
										onClick: () => onCellClick(x, y),
										className: `absolute grid place-items-center text-[8px] font-bold border ${deco ? "border-amber-400" : "border-black/20"}`,
										style: {
											left: cx - hexW / 2,
											top: cy - HR,
											width: hexW,
											height: hexH,
											background: TERRAIN_SWATCH[t],
											clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
										},
										children: p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sky-300",
											children: "P"
										}) : e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-red-400",
											children: "E"
										}) : deco ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-amber-300",
											children: "D"
										}) : null
									}, i);
								})
							});
						})()
					}),
					draft.decorations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-wide text-muted",
							children: [
								"Decorações (",
								draft.decorations.length,
								")"
							]
						}), draft.decorations.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs bg-bg border border-border rounded-md px-2 py-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: decorationImage(p.id),
									alt: "",
									className: "size-6 rounded-sm object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 min-w-0 truncate",
									children: DECORATIONS[p.id]?.name ?? p.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted tabular-nums",
									children: [
										p.x,
										",",
										p.y
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setDraft((d) => ({
										...d,
										decorations: d.decorations.filter((_, idx) => idx !== i)
									})),
									className: "text-danger px-1",
									"aria-label": "Remover",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
								})
							]
						}, i))]
					}),
					["playerSpawns", "enemySpawns"].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-wide text-muted",
							children: [
								side === "playerSpawns" ? "Heróis" : "Inimigos",
								" (",
								draft[side].length,
								")"
							]
						}), draft[side].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted tabular-nums w-10",
									children: [
										s.x,
										",",
										s.y
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "flex-1 min-w-0 bg-bg border border-border rounded-md px-1.5 py-1",
									value: s.name,
									onChange: (e) => updateSpawn(side, i, { name: e.target.value })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "bg-bg border border-border rounded-md px-1.5 py-1",
									value: s.classId,
									onChange: (e) => updateSpawn(side, i, { classId: e.target.value }),
									children: classOptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c,
										children: CLASSES[c].name
									}, c))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-1 shrink-0",
									title: "Nível (só afeta o Testar)",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "Nv"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 1,
										max: 30,
										className: "w-12 bg-bg border border-border rounded-md px-1 py-1",
										value: s.level,
										onChange: (e) => updateSpawn(side, i, { level: Math.max(1, Math.min(30, Number(e.target.value) || DEFAULT_TEST_LEVEL)) })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeSpawn(side, i),
									className: "text-danger px-1.5",
									"aria-label": "Remover",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
								})
							]
						}, i))]
					}, side)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-wide text-muted",
								children: [
									"Versões salvas de \"",
									draft.id,
									"\" (",
									versions.length,
									")"
								]
							}),
							versions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Nenhuma ainda — Salvar cria a v1."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-1",
								children: versions.slice().reverse().map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs bg-bg border border-border rounded-md px-2 py-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `font-bold tabular-nums ${activeSerial === v.serial ? "text-accent" : ""}`,
											children: ["v", v.serial]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted flex-1 min-w-0 truncate",
											children: [new Date(v.savedAt).toLocaleString(), activeSerial === v.serial ? " · ativa na campanha" : ""]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "quiet",
											onClick: () => setDraft(v.draft),
											children: "Carregar"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "quiet",
											disabled: activeSerial === v.serial,
											onClick: () => doActivate(v.serial),
											children: "Ativar"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => doDeleteVersion(v.serial),
											className: "text-danger px-1",
											"aria-label": "Excluir versão",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
										})
									]
								}, v.serial))
							}),
							activeSerial != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: doDeactivate,
								title: "Volta esse cenário a usar os dados originais imutáveis em vez de uma versão editada",
								children: [
									"Usar cenário original (desativar v",
									activeSerial,
									")"
								]
							})
						]
					}),
					exportText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted text-xs uppercase tracking-wide",
							children: "Exportado — copia e manda pro Claude colar em data.ts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							readOnly: true,
							className: "bg-bg border border-border rounded-md px-2 py-1.5 text-xs font-mono h-40",
							value: exportText
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-2 border-t border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					className: "w-full",
					onClick: () => {
						const playerLevels = Object.fromEntries(draft.playerSpawns.map((s) => [s.name, s.level]));
						const enemyLevels = Object.fromEntries(draft.enemySpawns.map((s) => [s.name, s.level]));
						onPlaytest(draftToMission(draft), playerLevels, enemyLevels);
					},
					children: "Testar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "flex-1",
							onClick: doSave,
							children: "Salvar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "flex-1",
							onClick: doExport,
							children: "Exportar"
						}),
						exportText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "flex-1",
							onClick: async () => {
								try {
									await navigator.clipboard.writeText(exportText);
									setCopyOk(true);
								} catch {
									setCopyOk(false);
								}
							},
							children: copyOk ? "Copiado!" : "Copiar"
						})
					]
				})]
			})
		]
	});
}
function CampaignScreen({ missions = MISSIONS, completed, test, ember, onBack, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "h-dvh min-h-0 flex flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4 border-b border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					className: "size-10 grid place-items-center rounded-md border border-border",
					"aria-label": "Voltar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm uppercase tracking-[0.18em] text-muted",
						children: test ? "Modo teste" : "Campanha"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-none",
						children: "Cenários"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm tabular-nums text-muted border border-border rounded-md px-2 py-1",
					children: ["Ember ", ember]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex-1 min-h-0 overflow-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-2",
			children: missions.map((m) => {
				const lock = lockedMission(m.id, completed, test);
				const done = completed.includes(m.id);
				const openInn = !!m.hub && !lock;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: lock,
					onClick: () => onPick(m.id),
					className: `w-full text-left rounded-xl border bg-surface px-4 py-3 disabled:opacity-40 ${openInn ? "inn-open" : "border-border"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm uppercase tracking-[0.16em] text-muted",
							children: [
								String(m.index + 1).padStart(2, "0"),
								" · ",
								m.place,
								m.hub && !lock ? " · aberta" : done ? " · feito" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-muted",
							children: m.objective
						})
					]
				}) }, m.id);
			})
		})]
	});
}
function BriefingScreen({ mission, onBack, onStart }) {
	const art = briefArt(mission.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg",
		children: [
			art && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: art,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/35" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onBack,
					className: "size-10 grid place-items-center rounded-md border border-border bg-bg/70",
					"aria-label": "Voltar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm uppercase tracking-[0.18em] text-muted",
					children: mission.place
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl leading-none",
					children: mission.title
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex-1 min-h-0 overflow-y-auto p-5 max-w-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-fg/90",
					children: mission.briefing
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base uppercase tracking-[0.16em] text-accent",
					children: mission.objective
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "xl",
					className: "w-full",
					onClick: onStart,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "size-5" }),
						" ",
						mission.hub ? "Entrar" : "Entrar em combate"
					]
				})
			})
		]
	});
}
function BattleScreen({ engine, hud, paused, muted, save, onHud, onPause, onResume, onMute, onSave, onLoad, onQuit }) {
	const [showStatus, setShowStatus] = (0, import_react.useState)(false);
	const [showLog, setShowLog] = (0, import_react.useState)(false);
	const logRef = (0, import_react.useRef)(null);
	const [invView, setInvView] = (0, import_react.useState)(null);
	const [hotbars, setHotbars] = (0, import_react.useState)({});
	const [editingSlots, setEditingSlots] = (0, import_react.useState)(false);
	const [pickerSlot, setPickerSlot] = (0, import_react.useState)(null);
	const [winPopupDismissed, setWinPopupDismissed] = (0, import_react.useState)(false);
	const wasWinAvailable = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (hud.winAvailable && !wasWinAvailable.current) setWinPopupDismissed(false);
		wasWinAvailable.current = hud.winAvailable;
	}, [hud.winAvailable]);
	(0, import_react.useEffect)(() => {
		setHotbars(loadHotbars());
	}, []);
	(0, import_react.useEffect)(() => {
		if (showLog && logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
	}, [showLog, hud.log.length]);
	const prevLogLenRef = (0, import_react.useRef)(hud.log.length);
	(0, import_react.useEffect)(() => {
		if (hud.log.length > prevLogLenRef.current) {
			if (hud.log.slice(prevLogLenRef.current).some((line) => line.startsWith("Loot:") || line.includes("achou"))) setShowLog(true);
		}
		prevLogLenRef.current = hud.log.length;
	}, [hud.log.length]);
	const activeUnitId = hud.turnQueue.find((t) => t.active)?.id ?? null;
	const prevActiveIdRef = (0, import_react.useRef)(activeUnitId);
	(0, import_react.useEffect)(() => {
		if (activeUnitId !== prevActiveIdRef.current) {
			prevActiveIdRef.current = activeUnitId;
			setShowLog(false);
		}
	}, [activeUnitId]);
	const unit = hud.selected ?? hud.pendingFoe ?? hud.inspected;
	const liveWeapons = { ...save.weapons };
	for (const id of engine.lootWeapons) if (!(id in liveWeapons)) liveWeapons[id] = 0;
	const liveLooseEquipment = { ...save.looseEquipment };
	for (const id of engine.lootEquipment) liveLooseEquipment[id] = (liveLooseEquipment[id] ?? 0) + 1;
	const liveSave = {
		...save,
		ember: save.ember + engine.lootEmber,
		bags: {
			...save.bags,
			...Object.fromEntries(engine.units.filter((u) => u.side === "player").map((u) => [u.name, u.bag]))
		},
		weapons: liveWeapons,
		looseEquipment: liveLooseEquipment
	};
	const foe = hud.pendingFoe ?? (hud.inspected && hud.inspected.side === "enemy" && hud.selected ? hud.inspected : null);
	const showAct = hud.mode === "awaitAction" || hud.mode === "awaitAttack" || hud.mode === "selected" || hud.mode === "awaitSpell";
	const actor = hud.selected?.side === "player" ? hud.selected : null;
	const slots = actor ? hotbars[actor.name] ?? defaultSlots(actor.classId) : [];
	function setSlot(index, action) {
		if (!actor) return;
		const next = {
			...hotbars,
			[actor.name]: slots.map((s, i) => i === index ? action : s)
		};
		setHotbars(next);
		saveHotbars(next);
	}
	function runSlot(action) {
		if (action.kind === "potion") {
			engine.usePotion(action.potion);
			return;
		}
		switch (action.spell) {
			case "doubleStrike":
				engine.startDoubleStrike();
				break;
			case "cleave":
				engine.startCleave();
				break;
			case "fireball":
				engine.startFireball();
				break;
			case "causticVenom":
				engine.startCausticVenom();
				break;
			case "lightning":
				engine.startLightning();
				break;
			case "magicMissile":
				engine.startMagicMissile();
				break;
			case "longShot":
				engine.startLongShot();
				break;
			case "piercing":
				engine.startPiercing();
				break;
			case "cureMinor":
				engine.startCure("cureMinor");
				break;
			case "cureWounds":
				engine.startCure("cureWounds");
				break;
			case "cureDisease":
				engine.startCureDisease();
				break;
			case "piercingThrust":
				engine.startPiercingThrust();
				break;
			case "sweep":
				engine.startSweep();
				break;
			case "trip":
				engine.startTrip();
				break;
			case "summonFamiliar":
				engine.startSummonFamiliar();
				break;
			case "webOfDreams": engine.startWebOfDreams();
		}
	}
	function slotDisabled(action) {
		if (!actor || !showAct || hud.busy || actor.acted) return true;
		if (slotCount(action, actor) <= 0) return true;
		if (action.kind === "potion" && POTIONS$1[action.potion].effect === "heal" && actor.hp >= actor.maxHp) return true;
		return false;
	}
	function slotActive(action) {
		return hud.mode === "awaitSpell" && action.kind === "spell" && hud.spellKind === action.spell;
	}
	function activateSlot(i) {
		if (!actor || i < 0 || i >= slots.length) return;
		const action = slots[i];
		if (editingSlots) {
			setPickerSlot(i);
			return;
		}
		if (!action || slotDisabled(action)) return;
		runSlot(action);
	}
	const activateSlotRef = (0, import_react.useRef)(activateSlot);
	activateSlotRef.current = activateSlot;
	(0, import_react.useEffect)(() => {
		function onKeyDown(e) {
			const m = /^F([1-9]|1[0-2])$/.exec(e.key);
			if (!m) return;
			e.preventDefault();
			activateSlotRef.current(Number(m[1]) - 1);
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh min-h-0 flex flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1 min-h-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleCanvas, {
						engine,
						onHud,
						paused
					}),
					hud.turnQueue.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-2 top-[max(0.5rem,env(safe-area-inset-top))] flex items-center gap-1 flex-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "bg-surface/90 border border-border rounded-md px-2 py-0.5 text-[15px] leading-tight flex items-center gap-1.5 flex-wrap",
							children: hud.turnQueue.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "→"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: q.active ? "text-accent font-medium" : q.acted ? "text-muted line-through" : q.side === "enemy" ? "text-danger" : "text-fg",
									children: q.name
								})]
							}, q.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-x-2 top-[max(0.5rem,env(safe-area-inset-top))] flex items-start justify-end gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "bg-surface/90 border border-border rounded-md px-1.5 py-0.5 text-[10px] tabular-nums text-muted pointer-events-none",
								children: [
									"T",
									hud.turn,
									" · ",
									hud.playerAlive,
									"/",
									hud.enemyAlive
								]
							}),
							hud.terrain && (hud.terrain.note || hud.terrain.id === "barricade" || hud.terrain.id === "hill" || hud.terrain.id === "highwood" || hud.terrain.id === "highruin") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "bg-surface/90 border border-border rounded-md px-1.5 py-0.5 text-[10px] text-accent pointer-events-none max-w-[14rem] truncate",
								children: hud.terrain.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 pointer-events-auto shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: onMute,
									className: "size-7 grid place-items-center rounded-md border border-border bg-surface/90",
									"aria-label": "Som",
									children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: onPause,
									className: "h-7 px-2 rounded-md border border-border bg-surface/90 text-[10px] tracking-[0.14em] uppercase",
									children: "Opções"
								})]
							})
						]
					}),
					hud.banner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-0 top-14 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-surface/95 border border-border rounded-md px-4 py-1.5 font-display text-lg tracking-wide",
							children: hud.banner
						})
					}),
					hud.tip && !(hud.winAvailable && !winPopupDismissed) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-2 bottom-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "bg-surface/90 border border-border rounded-md px-2 py-1 text-xs text-muted text-center",
							children: hud.tip
						})
					}),
					hud.winAvailable && !hud.result && !winPopupDismissed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-2 bottom-2 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-auto bg-surface/95 border border-accent rounded-md px-3 py-2 flex items-center gap-3 flex-wrap justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "Todos os inimigos caíram. Encerrar a missão?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => engine.confirmFinish(),
									children: "Encerrar missão"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "quiet",
									onClick: () => setWinPopupDismissed(true),
									children: "Continuar explorando"
								})]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "shrink-0 border-t border-border bg-surface px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-16 sm:min-h-[4.5rem] flex items-center gap-2",
					children: unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setShowStatus(true),
						className: "shrink-0 rounded-md ring-offset-2 ring-offset-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-80",
						title: "Ver status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: HERO_PORTRAIT[unit.sprite] ?? `/game/sprites/${unit.sprite}/1.png`,
							alt: "",
							className: HERO_PORTRAIT[unit.sprite] ? "h-16 w-12 sm:h-20 sm:w-14 object-cover rounded-md" : "h-14 w-14 object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setShowLog((v) => !v),
						className: "min-w-0 flex-1 text-left rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
						title: showLog ? "Ver status" : "Ver log de combate",
						children: showLog ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: logRef,
							className: "h-16 sm:h-20 overflow-y-auto pr-1",
							children: hud.log.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] text-muted",
								children: "Nada aconteceu ainda."
							}) : hud.log.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] text-muted leading-snug",
								children: line
							}, i))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-medium truncate",
									children: [
										unit.name,
										" · Nv ",
										unit.level,
										unit.side === "player" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted font-normal ml-1 align-middle tabular-nums",
											children: unit.level >= 30 ? "· NÍVEL MÁX." : `· ${unit.xp}/100 XP`
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `text-xs ${unit.side === "enemy" ? "text-danger" : "text-muted"}`,
									children: [
										unit.className,
										unit.diseased && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-danger",
											children: " · Doente"
										}),
										unit.poisoned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-danger",
											children: " · Envenenado"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-0.5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 flex-1 rounded-full bg-border overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `hp-fill h-full ${unit.side === "enemy" ? "bg-danger" : "bg-accent"}`,
										style: { width: `${Math.max(0, unit.hp / unit.maxHp * 100)}%` }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs tabular-nums text-fg shrink-0",
									children: [
										unit.hp,
										"/",
										unit.maxHp
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tabular-nums text-muted leading-snug",
								children: hud.forecast && foe ? `${hud.forecast.dmgOut} em ${foe.name}${hud.forecast.canCounter ? ` · contra ${hud.forecast.dmgBack}` : " · sem contra"}${hud.forecast.kill ? " · abate" : ""}` : sheetLine(unit)
							})
						] })
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: hud.phase === "enemy" ? "O inimigo age…" : "Toque numa aliada ou num inimigo."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1 min-h-10 items-center mt-1",
					children: [
						hud.offHandKind && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "quiet",
							disabled: !showAct || hud.busy || hud.mode === "awaitSpell",
							onClick: () => engine.startOffHand(),
							title: hud.offHandKind === "shield" ? `${Math.round((EQUIPMENT[unit?.offHandId ?? ""]?.dmgMul ?? .75) * 100)}% do dano normal · 70% de chance de atordoar por 1 turno` : "Ataca com a arma da mão secundária",
							children: hud.offHandKind === "shield" ? "Investida de Escudo" : "Mão Secundária"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: !showAct || !hud.canAttack || hud.busy || hud.mode === "awaitSpell",
							onClick: () => engine.startAttack(),
							children: "Atacar"
						}),
						hud.mode === "awaitSpell" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: !hud.spellReady || hud.busy,
							onClick: () => engine.confirmSpell(),
							children: "Lançar"
						}),
						hud.canLockpick && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: !showAct || hud.busy,
							onClick: () => engine.useLockpick(),
							title: "Custa 1 Gazua para abrir.",
							className: "relative h-9 px-2 rounded-md border border-border bg-bg flex items-center gap-1 disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/lockpick.png",
								alt: "",
								className: "size-5 rounded-sm object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm tabular-nums",
								children: ["×", actor?.bag.lockpick ?? 0]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "quiet",
							disabled: !showAct || hud.busy,
							onClick: () => engine.wait(),
							children: "Esperar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							disabled: !showAct || hud.busy,
							onClick: () => engine.cancel(),
							children: "Cancelar"
						}),
						actor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [slots.map((action, i) => {
								const empty = !action;
								const disabled = action ? slotDisabled(action) : !editingSlots;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: !editingSlots && disabled,
									onClick: () => activateSlot(i),
									title: `F${i + 1} · ${action ? slotTooltip(action) : "Slot vazio"}`,
									className: `relative size-9 grid place-items-center rounded-md border ${action && slotActive(action) ? "border-accent bg-accent/20" : "border-border bg-bg"} ${editingSlots ? "outline outline-1 outline-dashed outline-muted" : ""} disabled:opacity-40`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute -top-1 -left-1 bg-surface border border-border rounded px-0.5 text-[8px] tabular-nums leading-tight text-muted",
										children: ["F", i + 1]
									}), empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted text-xs",
										children: "+"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: slotIcon(action),
										alt: "",
										className: "size-6 rounded-sm object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -bottom-1 -right-1 bg-surface border border-border rounded px-0.5 text-[9px] tabular-nums leading-tight",
										children: slotCount(action, actor)
									})] })]
								}, i);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEditingSlots((v) => !v),
								title: "Configurar slots",
								className: `size-9 grid place-items-center rounded-md border ${editingSlots ? "border-accent bg-accent/20" : "border-border bg-bg"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
							})]
						}),
						hud.winAvailable && !hud.result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "ml-auto",
							onClick: () => engine.confirmFinish(),
							children: "Encerrar missão"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							className: hud.winAvailable && !hud.result ? "" : "ml-auto",
							disabled: hud.phase !== "player" || !!hud.result,
							onClick: () => engine.endTurn(),
							children: "Fim do turno"
						})
					]
				})]
			}),
			paused && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-30 bg-bg/80 flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm bg-surface border border-border rounded-xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl mb-4",
							children: "Opções"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-muted mb-2",
							children: "Zoom"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-1 mb-4",
							children: [
								"Distante",
								"Longe",
								"Médio",
								"Perto"
							].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: hud.zoom === i ? void 0 : "quiet",
								onClick: () => engine.setZoom(i),
								children: label
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-muted mb-2",
							children: "Velocidade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-1 mb-4",
							children: ["normal", "fast"].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: hud.speedMode === mode ? void 0 : "quiet",
								onClick: () => engine.setSpeed(mode),
								children: mode === "normal" ? "Normal" : "Rápida"
							}, mode))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: onResume,
									children: "Continuar"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "quiet",
									onClick: onSave,
									children: "Save"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "quiet",
									onClick: onLoad,
									children: "Load"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: onQuit,
									children: "Desistir"
								})
							]
						})
					]
				})
			}),
			showStatus && unit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPanel, {
				unit,
				onClose: () => setShowStatus(false),
				onOpenInventory: unit.side === "player" ? () => {
					setShowStatus(false);
					setInvView("pack");
				} : void 0
			}),
			invView === "doll" && unit && unit.side === "player" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperDollScreen, {
				heroName: unit.name,
				classId: unit.classId,
				save: liveSave,
				onClose: () => setInvView(null),
				onSwitchToBackpack: () => setInvView("pack")
			}),
			invView === "pack" && unit && unit.side === "player" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackpackScreen, {
				heroName: unit.name,
				save: liveSave,
				onClose: () => setInvView(null),
				onSwitchToDoll: () => setInvView("doll")
			}),
			pickerSlot != null && actor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotPicker, {
				classId: actor.classId,
				onPick: (action) => {
					setSlot(pickerSlot, action);
					setPickerSlot(null);
				},
				onClose: () => setPickerSlot(null)
			})
		]
	});
}
function SlotPicker({ classId, onPick, onClose }) {
	const options = [...classSpells(classId).map((spell) => ({
		kind: "spell",
		spell
	})), ...ALL_POTIONS.map((potion) => ({
		kind: "potion",
		potion
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-50 bg-bg/85 flex items-end sm:items-center justify-center p-4",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm bg-surface border border-border rounded-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg",
					children: "Escolher pra esse slot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "size-8 grid place-items-center rounded-md border border-border",
					"aria-label": "Fechar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-1.5 max-h-[60dvh] overflow-y-auto",
				children: [options.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(action),
					className: "flex items-center gap-2 bg-bg border border-border rounded-md px-2 py-2 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: slotIcon(action),
						alt: "",
						className: "size-6 rounded-sm object-cover shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: slotLabel(action)
					})]
				}, action.kind === "potion" ? `p-${action.potion}` : `s-${action.spell}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(null),
					className: "flex items-center gap-2 bg-bg border border-border rounded-md px-2 py-2 text-left text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-6 grid place-items-center shrink-0",
						children: "—"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: "Deixar vazio"
					})]
				})]
			})]
		})
	});
}
function StatusPanel({ unit, onClose, onOpenInventory }) {
	const stats = [
		["ATK", unit.atk],
		["MAG", unit.mag],
		["DEF", unit.def],
		["RES", unit.res],
		["MOV", unit.mov],
		["Alcance", rangeLabel(unit.minRange, unit.maxRange)]
	];
	const base = PROMOTED_BASE[unit.classId] ?? unit.classId;
	const mage = base === "mage";
	const conjurer = base === "conjurer";
	const healer = base === "healer";
	const archer = base === "archer";
	const swordsman = base === "swordsman";
	const lancer = base === "lancer";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 bg-bg/85 flex items-center justify-center p-4",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md max-h-[88dvh] overflow-y-auto bg-surface border border-border rounded-xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: HERO_PORTRAIT[unit.sprite] ?? `/game/sprites/${unit.sprite}/1.png`,
							alt: "",
							className: HERO_PORTRAIT[unit.sprite] ? "h-24 w-20 object-cover rounded-lg border border-border shrink-0" : "h-20 w-20 object-contain shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl leading-tight truncate",
									children: unit.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `text-xs ${unit.side === "enemy" ? "text-danger" : "text-muted"}`,
									children: [
										unit.className,
										" · Nv ",
										unit.level
									]
								}),
								unit.diseased && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-danger mt-0.5",
									children: "Doente · −10% em todos os stats"
								}),
								unit.poisoned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-danger mt-0.5",
									children: "Envenenado · 1D4 dano por turno"
								}),
								unit.side === "player" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 max-w-[9rem]",
									children: unit.level >= 30 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted tabular-nums",
										children: "Nível máximo"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1.5 rounded-full bg-border overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-accent",
											style: { width: `${unit.xp / 100 * 100}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-muted tabular-nums mt-0.5",
										children: [
											unit.xp,
											"/",
											100,
											" XP"
										]
									})] })
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [onOpenInventory && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onOpenInventory,
							className: "h-9 px-3 rounded-md border border-border text-sm flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: BAG_ICON,
								alt: "",
								className: "size-5 rounded-sm object-contain"
							}), "Mochila"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "size-8 grid place-items-center rounded-md border border-border",
							"aria-label": "Fechar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 flex-1 rounded-full bg-border overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full ${unit.side === "enemy" ? "bg-danger" : "bg-accent"}`,
								style: { width: `${Math.max(0, unit.hp / unit.maxHp * 100)}%` }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tabular-nums text-fg shrink-0",
							children: [
								unit.hp,
								"/",
								unit.maxHp
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted mb-2",
					children: "Ficha"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2 mb-5",
					children: stats.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-bg border border-border rounded-md px-2 py-1.5 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-wide text-muted",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium tabular-nums",
							children: value
						})]
					}, label))
				}),
				unit.side === "player" && (swordsman || mage || conjurer || archer || healer || lancer) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted mb-2",
					children: "Magias e habilidades"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-1.5",
					children: [
						swordsman && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/cleave.png",
								alt: "",
								className: "size-5 rounded-sm object-cover shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs truncate",
								children: [
									DOUBLE_STRIKE.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: ["×", unit.spells[tierKey(spellTier("doubleStrike"))]]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/cleave-crossed-blades.png",
								alt: "",
								className: "size-5 rounded-sm object-cover shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs truncate",
								children: [
									CLEAVE.name,
									" ",
									CLEAVE.hexes,
									" hex, arma + ",
									diceFormula(CLEAVE.bonusDice, CLEAVE.bonusFaces, CLEAVE.bonusBonus),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: ["×", unit.spells[tierKey(spellTier("cleave"))]]
									})
								]
							})]
						})] }),
						mage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/magic-missile.png",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: [
										MAGIC_MISSILE.name,
										" ",
										diceFormula(MAGIC_MISSILE.dice, MAGIC_MISSILE.faces, MAGIC_MISSILE.bonus),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: ["×", unit.spells[tierKey(spellTier("magicMissile"))]]
										})
									]
								})]
							}),
							unit.spells[tierKey(spellTier("lightning"))] > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/lightning.png?v=4",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: [
										"Raio ",
										lightningFormula(unit.level),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: ["×", unit.spells[tierKey(spellTier("lightning"))]]
										})
									]
								})]
							}),
							unit.spells[tierKey(spellTier("fireball"))] > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/fireball.png",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: [
										"Fogo ",
										fireballFormula(unit.level),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: ["×", unit.spells[tierKey(spellTier("fireball"))]]
										})
									]
								})]
							}),
							unit.spells[tierKey(spellTier("causticVenom"))] > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/caustic-venom.png",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: [
										CAUSTIC_VENOM.name,
										" ",
										diceFormula(CAUSTIC_VENOM.centerDice, CAUSTIC_VENOM.centerFaces, CAUSTIC_VENOM.centerBonus),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: ["×", unit.spells[tierKey(spellTier("causticVenom"))]]
										})
									]
								})]
							})
						] }),
						conjurer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/magic-missile.png",
								alt: "",
								className: "size-5 rounded-sm object-cover shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs truncate",
								children: [
									SUMMON_FAMILIAR.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: ["×", unit.spells[tierKey(spellTier("summonFamiliar"))]]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/caustic-venom.png",
								alt: "",
								className: "size-5 rounded-sm object-cover shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs truncate",
								children: [
									WEB_OF_DREAMS.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: ["×", unit.spells[tierKey(spellTier("webOfDreams"))]]
									})
								]
							})]
						})] }),
						archer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/long-shot.png?v=3",
								alt: "",
								className: "size-5 rounded-sm object-cover shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs truncate",
								children: ["Longo ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: ["×", unit.spells[tierKey(spellTier("longShot"))]]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/piercing.png?v=3",
								alt: "",
								className: "size-5 rounded-sm object-cover shrink-0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs truncate",
								children: ["Perfura ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: ["×", unit.spells[tierKey(spellTier("piercing"))]]
								})]
							})]
						})] }),
						healer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/cure-minor.png?v=5",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: ["Menor ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: ["×", unit.spells[tierKey(spellTier("cureMinor"))]]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/cure-wounds.png?v=5",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: ["Simples ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-muted",
										children: ["×", unit.spells[tierKey(spellTier("cureWounds"))]]
									})]
								})]
							}),
							unit.spells[tierKey(spellTier("cureDisease"))] > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/cure-minor.png?v=5",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: [
										CURE_DISEASE.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: ["×", unit.spells[tierKey(spellTier("cureDisease"))]]
										})
									]
								})]
							})
						] }),
						lancer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/piercing.png?v=3",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: [
										PIERCING_THRUST.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: ["×", unit.spells[tierKey(spellTier("piercingThrust"))]]
										})
									]
								})]
							}),
							unit.spells[tierKey(spellTier("sweep"))] > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/cleave-crossed-blades.png",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: [
										SWEEP.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: ["×", unit.spells[tierKey(spellTier("sweep"))]]
										})
									]
								})]
							}),
							unit.spells[tierKey(spellTier("trip"))] > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/cleave.png",
									alt: "",
									className: "size-5 rounded-sm object-cover shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs truncate",
									children: [
										TRIP.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted",
											children: ["×", unit.spells[tierKey(spellTier("trip"))]]
										})
									]
								})]
							})
						] })
					]
				})] })
			]
		})
	});
}
/** XP bar on the post-mission screen: mounts at the hero's pre-battle progress, then eases
* up to the post-battle value on the next paint, so the gain reads as a fill instead of
* snapping straight to the end state. */
function GrowthXpBar({ from, to }) {
	const [pct, setPct] = (0, import_react.useState)(from);
	(0, import_react.useEffect)(() => {
		const id = requestAnimationFrame(() => setPct(to));
		return () => cancelAnimationFrame(id);
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "h-1.5 w-24 rounded-full bg-border overflow-hidden shrink-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block h-full bg-accent transition-[width] duration-[1400ms] ease-out",
			style: { width: `${Math.max(0, Math.min(100, pct))}%` }
		})
	});
}
function ResultScreen({ win, title, body, turn, growth, art, onTitle, onNext, onInn, onMap, mapLabel, hasNext, innOpen, retry, loot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg",
		children: [
			art && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: art,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-bg/20" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex-1 min-h-0 overflow-y-auto px-5 pt-[max(2rem,env(safe-area-inset-top))] pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm uppercase tracking-[0.2em] text-muted",
						children: [
							win ? "Vitória" : "Derrota",
							" · T",
							turn
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl sm:text-5xl mt-2 mb-2",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted mb-6",
						children: body
					}),
					loot && loot.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-accent mb-4",
						children: ["Achado no campo: ", loot.join(", ")]
					}),
					growth && growth.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mb-6 space-y-2 max-w-lg",
						children: growth.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-border bg-bg/55 px-3 py-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium text-lg",
									children: [
										g.name,
										g.to !== g.from ? ` · Nv ${g.from} → ${g.to}` : ` · Nv ${g.from}`,
										g.fallen ? " · caiu" : ""
									]
								}),
								g.to < 30 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 mt-1 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthXpBar, {
										from: g.xpFrom / 100 * 100,
										to: g.xp / 100 * 100
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted tabular-nums",
										children: [
											g.xp,
											"/",
											100,
											" XP",
											g.to !== g.from ? " · subiu" : ""
										]
									})]
								}) : g.to !== g.from && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-accent",
									children: "Nível máximo · subiu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted tabular-nums mt-1",
									children: [
										"Combate: ",
										g.hpBattle,
										"/",
										g.maxFrom
									]
								}),
								g.fallen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted tabular-nums",
									children: [
										"Descanso: revive com ",
										g.hpCamp,
										" HP (metade de ",
										g.maxTo,
										")"
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm tabular-nums text-fg/90",
									children: [
										"Descanso: ",
										g.restHp > 0 ? `+${g.restHp} HP` : "sem feridas",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: " · metade do que faltava"
										})
									]
								}),
								g.to !== g.from && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm tabular-nums text-accent",
									children: [
										"Nível: +",
										g.levelHp,
										" HP máximo (",
										g.maxFrom,
										" → ",
										g.maxTo,
										")",
										g.atkTo !== g.atkFrom ? ` · AT ${g.atkFrom} → ${g.atkTo}` : "",
										g.magTo !== g.magFrom ? ` · MAG ${g.magFrom} → ${g.magTo}` : "",
										g.defTo !== g.defFrom ? ` · DF ${g.defFrom} → ${g.defTo}` : "",
										g.resTo !== g.resFrom ? ` · RES ${g.resFrom} → ${g.resTo}` : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-base tabular-nums mt-1",
									children: [
										"Acampamento: ",
										g.hpCamp,
										"/",
										g.maxTo
									]
								})
							]
						}, g.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-2",
				children: [
					hasNext && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "xl",
						className: "w-full",
						onClick: onNext,
						children: retry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-5" }), " Tentar de novo"] }) : "Próxima missão"
					}),
					win && innOpen && onInn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "quiet",
						className: "w-full inn-open",
						onClick: onInn,
						children: "Estalagem do Osso Seco"
					}),
					(win || mapLabel) && onMap && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "w-full",
						onClick: onMap,
						children: mapLabel ?? "Cenários"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "w-full",
						onClick: onTitle,
						children: "Tela inicial"
					})
				]
			})
		]
	});
}
function PromotionScreen({ pending, onPick }) {
	const current = pending[0];
	if (!current) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-50 bg-bg/90 flex items-end sm:items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-surface border border-border rounded-xl p-5 max-h-[90dvh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted",
					children: ["Nível ", 15]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl leading-none mt-1 mb-2",
					children: [current.name, " pode se promover"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted mb-4",
					children: [
						"Escolha um caminho. ",
						current.name,
						" não perde as magias que já tem — as novas se somam a partir de agora."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2",
					children: current.options.map((classId) => {
						const cls = CLASSES[classId];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onPick(current.name, classId),
							className: "w-full text-left rounded-xl border border-border bg-bg/40 px-4 py-3 hover:border-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl leading-tight",
								children: cls.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: sheetLine(statsFor(classId, 15))
							})]
						}, classId);
					})
				})
			]
		})
	});
}
function SlotScreen({ mode, bank, overwrite, onOverwrite, onClose, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 bg-bg/85 flex items-end sm:items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-surface border border-border rounded-xl p-5 max-h-[90dvh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-muted",
						children: "Arquivos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl leading-none mt-1",
						children: mode === "new" ? "Nova campanha" : mode === "continue" ? "Continuar" : mode === "load" ? "Load" : "Save"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "size-11 grid place-items-center",
						"aria-label": "Fechar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted mb-4",
					children: mode === "new" ? "Escolha o slot. Um slot ocupado será substituído." : mode === "continue" || mode === "load" ? "O último usado vem marcado. Toque para carregar." : "Grava o começo deste combate. O slot anterior permanece se você escolher outro."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-2",
					children: Array.from({ length: 5 }, (_, i) => {
						const slot = bank.slots[i] ?? null;
						const empty = isSlotEmpty(slot);
						const last = i === bank.lastSlot && hasAnySave(bank) && !empty;
						const info = slotProgress(slot);
						const disabled = (mode === "continue" || mode === "load") && empty;
						const confirm = overwrite === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled,
							onClick: () => {
								if ((mode === "new" || mode === "save") && !empty && !confirm) {
									onOverwrite(i);
									return;
								}
								onPick(i);
							},
							className: `w-full text-left rounded-xl border px-4 py-3 disabled:opacity-40 ${last ? "border-accent bg-bg/70" : "border-border bg-bg/40"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs uppercase tracking-[0.16em] text-muted",
										children: ["Slot ", i + 1]
									}), last && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase tracking-[0.14em] text-accent",
										children: "Último usado"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl leading-tight",
									children: info.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: info.detail
								}),
								slot && !empty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tabular-nums text-muted mt-1",
									children: formatStamp(slot.updatedAt)
								}),
								confirm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-accent mt-2",
									children: "Toque de novo para substituir este slot."
								})
							]
						}) }, i);
					})
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameApp, {});
}
//#endregion
export { Home as component };
