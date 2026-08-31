import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Swords, n as VolumeX, o as RotateCcw, r as Volume2, s as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-vN46EK.js
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
var TILES = [
	"plains",
	"woods",
	"ruins",
	"water",
	"ember",
	"hill",
	"flame",
	"column"
];
var SPRITES = [
	"kael",
	"nira",
	"voss",
	"salazar",
	"soldier",
	"brigand",
	"captain",
	"sorcerer",
	"horror",
	"pikeman",
	"wardog"
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
	"salazar"
]);
async function loadGameArt() {
	const tiles = {};
	await Promise.all(TILES.map(async (id) => {
		tiles[id] = await loadImage(`/game/tiles/${id}.png`);
	}));
	const sprites = {};
	const attacks = {};
	await Promise.all(SPRITES.map(async (id) => {
		const n = HERO_IDLE.has(id) ? 12 : 4;
		sprites[id] = await Promise.all(Array.from({ length: n }, (_, i) => loadImage(`/game/sprites/${id}/${i + 1}.png`)));
	}));
	await Promise.all([
		"kael",
		"nira",
		"voss",
		"salazar"
	].map(async (id) => {
		attacks[id] = await Promise.all([
			1,
			2,
			3,
			4
		].map((n) => loadImage(`/game/sprites/${id}/atk-${n}.png`)));
	}));
	return {
		tiles,
		sprites,
		attacks,
		impact: await Promise.all([
			1,
			2,
			3,
			4
		].map((n) => loadImage(`/game/fx/impact-${n}.png`)))
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
	lose: () => beep(196, .5, "sine", .24, -80)
};
var introEl = null;
var battleEl = null;
var earlyEl = null;
var templeEl = null;
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
		if (!templeEl) templeEl = attachTrack(new Audio("/game/temple.mp3"), .42);
		return templeEl;
	}
	if (theme === "early") {
		if (!earlyEl) earlyEl = attachTrack(new Audio("/game/early.mp3"), .4);
		return earlyEl;
	}
	if (!battleEl) battleEl = attachTrack(new Audio("/game/music.mp3"), .4);
	return battleEl;
}
function menuElement() {
	if (typeof Audio === "undefined") return null;
	if (typeof document !== "undefined") document.querySelectorAll("audio").forEach((node) => {
		if (node === introEl) return;
		if (node.id === "ember-intro" || /\/game\/intro\.(wav|mp3)/.test(node.src)) {
			node.pause();
			node.remove();
		}
	});
	if (introEl) return introEl;
	const node = new Audio("/game/intro.wav");
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
	if (!want) return;
	kickPlay(want);
}
function playMenuMusic() {
	currentTheme = "intro";
	if (muted) return;
	battleEl?.pause();
	earlyEl?.pause();
	templeEl?.pause();
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
		let lastX = 0;
		let lastY = 0;
		const held = /* @__PURE__ */ new Set();
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
				hud.tip,
				hud.zoom,
				hud.spellReady
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
				engine.pointerDown(p.x, p.y, "click");
				return;
			}
			dragging = true;
			dragged = false;
			lastX = e.clientX;
			lastY = e.clientY;
			canvas.setPointerCapture(e.pointerId);
			if (engine.getHud().mode === "awaitSpell") engine.pointerMove(p.x, p.y);
		};
		const onMove = (e) => {
			const p = pos(e);
			const spell = engine.getHud().mode === "awaitSpell";
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
			if (e.pointerType === "mouse") return;
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
		const onMenu = (e) => e.preventDefault();
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
		name: "Colina",
		moveCost: 2,
		def: 1,
		atk: 1,
		passable: true
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
		passable: false
	}
};
var CLASSES = {
	swordsman: {
		id: "swordsman",
		name: "Espadachim",
		role: "Linha de frente",
		hp: 34,
		atk: 9,
		mag: 0,
		def: 6,
		res: 3,
		mov: 4,
		minRange: 1,
		maxRange: 1,
		sprite: "kael",
		size: 1
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
		mov: 4,
		minRange: 2,
		maxRange: 3,
		sprite: "nira",
		size: 1
	},
	mage: {
		id: "mage",
		name: "Mago",
		role: "Magia",
		hp: 22,
		atk: 3,
		mag: 10,
		def: 2,
		res: 6,
		mov: 3,
		minRange: 1,
		maxRange: 2,
		sprite: "voss",
		size: 1
	},
	healer: {
		id: "healer",
		name: "Clérigo",
		role: "Cura",
		hp: 26,
		atk: 4,
		mag: 8,
		def: 3,
		res: 6,
		mov: 3,
		minRange: 1,
		maxRange: 1,
		sprite: "salazar",
		size: 1
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
		size: 1
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
		size: 1
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
		size: 1
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
		size: 1
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
		size: 2
	},
	sorcerer: {
		id: "sorcerer",
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
		size: 1
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
		size: 4
	}
};
var GROWTH = {
	swordsman: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 1,
		res: 0
	},
	archer: {
		hp: 3,
		atk: 2,
		mag: 0,
		def: 1,
		res: 0
	},
	mage: {
		hp: 3,
		atk: 0,
		mag: 2,
		def: 0,
		res: 1
	},
	healer: {
		hp: 3,
		atk: 0,
		mag: 2,
		def: 0,
		res: 1
	},
	soldier: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 1,
		res: 0
	},
	pikeman: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 1,
		res: 0
	},
	brigand: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 1,
		res: 0
	},
	captain: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 1,
		res: 0
	},
	wardog: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 1,
		res: 0
	},
	sorcerer: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 1,
		res: 1
	},
	horror: {
		hp: 4,
		atk: 2,
		mag: 0,
		def: 1,
		res: 1
	}
};
function statsFor(classId, level) {
	const cls = CLASSES[classId];
	const g = GROWTH[classId];
	const n = Math.max(0, Math.min(5, level) - 1);
	return {
		hp: cls.hp + g.hp * n,
		atk: cls.atk + g.atk * n,
		mag: cls.mag + g.mag * n,
		def: cls.def + g.def * n,
		res: cls.res + g.res * n,
		mov: cls.mov,
		minRange: cls.minRange,
		maxRange: cls.maxRange,
		level: Math.max(1, Math.min(5, level))
	};
}
function rangeLabel(min, max) {
	return min === max ? `${min}` : `${min}–${max}`;
}
function powerLabel(atk, mag) {
	return mag > 0 ? `MAG ${mag}` : `AT ${atk}`;
}
var POTIONS = {
	mid: {
		id: "mid",
		name: "Poção média",
		dice: 2,
		faces: 8,
		bonus: 4
	},
	weak: {
		id: "weak",
		name: "Poção fraca",
		dice: 1,
		faces: 8,
		bonus: 2
	}
};
var STARTING_BAG = {
	mid: 2,
	weak: 2
};
var EMPTY_BAG = {
	mid: 0,
	weak: 0
};
var CURES = {
	cureMinor: {
		name: "Cura menor",
		dice: 1,
		faces: 8,
		bonus: 3,
		uses: 2,
		range: 1
	},
	cureWounds: {
		name: "Cura simples",
		dice: 3,
		faces: 8,
		bonus: 3,
		uses: 1,
		range: 1
	}
};
function rollCure(kind, rng) {
	const p = CURES[kind];
	let total = p.bonus;
	for (let i = 0; i < p.dice; i++) total += 1 + Math.floor(rng() * p.faces);
	return total;
}
function rollPotion(kind, rng) {
	const p = POTIONS[kind];
	let total = p.bonus;
	for (let i = 0; i < p.dice; i++) total += 1 + Math.floor(rng() * p.faces);
	return total;
}
function potionLabel(kind) {
	const p = POTIONS[kind];
	const dice = p.dice === 1 ? `1d${p.faces}` : `${p.dice}d${p.faces}`;
	return p.bonus ? `${dice}+${p.bonus}` : dice;
}
var FIREBALL = {
	name: "Bola de fogo",
	size: 2,
	range: 4,
	uses: 2
};
var LONG_SHOT = {
	name: "Tiro longo",
	uses: 1,
	rangeMul: 2,
	bonusFaces: 8
};
var PIERCING = {
	name: "Tiro perfurante",
	uses: 1
};
function enemyLevelFor(missionIndex) {
	if (missionIndex === 5) return 3;
	if (missionIndex === 2) return 2;
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
		Salazar: { ...EMPTY_BAG }
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
	c: "column"
};
function parseLayout(layout) {
	const tiles = [];
	for (const row of layout) for (const ch of row) tiles.push(CHAR[ch] ?? "plains");
	return tiles;
}
var MISSIONS = [
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
		title: "Templo de Asherah",
		place: "Nave invertida",
		briefing: "O rito já acabou. Colunas de carne fecham a nave. Asherah ocupa o altar ao fundo. Matem todos. Se ela alcançar Voss, ele cai.",
		objective: "Derrote Asherah e os feiticeiros",
		win: "rout",
		cols: 13,
		rows: 12,
		layout: [
			"rrrrrrrrrrrrr",
			"rc.c.eee.c.cr",
			"r...........r",
			"rc.c.....c.cr",
			"r...........r",
			"rc.c.....c.cr",
			"r...........r",
			"rc.c.....c.cr",
			"r...........r",
			"rc.c.....c.cr",
			"r...........r",
			"rrr.......rrr"
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
				y: 5
			},
			{
				name: "Feiticeiro",
				classId: "sorcerer",
				x: 1,
				y: 4
			},
			{
				name: "Feiticeiro",
				classId: "sorcerer",
				x: 11,
				y: 4
			},
			{
				name: "Feiticeiro",
				classId: "sorcerer",
				x: 2,
				y: 7
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
			"rc.c...c.cr",
			"r.........r",
			"rc.c...c.cr",
			"r.........r",
			"rc.c...c.cr",
			"r.........r",
			"rc.c...c.cr",
			"r.........r",
			"rrr.....rrr"
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
				classId: "sorcerer",
				x: 2,
				y: 1
			},
			{
				name: "Feiticeiro",
				classId: "sorcerer",
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
	}
];
function missionById(id) {
	return MISSIONS.find((m) => m.id === id);
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
function axisDir(from, to) {
	const A = oddrToCube(from.x, from.y);
	const B = oddrToCube(to.x, to.y);
	const dq = B.q - A.q;
	const dr = B.r - A.r;
	const ds = B.s - A.s;
	if (dq === 0 && dr === 0 && ds === 0) return null;
	if (dq !== 0 && dr !== 0 && ds !== 0) return null;
	const n = Math.max(Math.abs(dq), Math.abs(dr), Math.abs(ds));
	if (n <= 0) return null;
	if (dq % n !== 0 || dr % n !== 0 || ds % n !== 0) return null;
	return {
		q: dq / n,
		r: dr / n,
		s: ds / n
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
function piercingLine(from, through, cols, rows) {
	const dir = axisDir(from, through);
	if (!dir) return null;
	return hexRay(from, dir, cols, rows);
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
function unitSize(unit) {
	return Math.max(1, unit.size || 1);
}
function footprint(unit) {
	const s = unitSize(unit);
	if (s <= 1) return [{
		x: unit.x,
		y: unit.y
	}];
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
		if (!terr.passable) return null;
		if (terr.moveCost > cost) cost = terr.moveCost;
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
function canHitFrom(unit, from, foe) {
	const placed = {
		...unit,
		x: from.x,
		y: from.y
	};
	for (const p of footprint(placed)) if (inRangeOf(p.x, p.y, foe, unit.minRange, unit.maxRange)) return true;
	return false;
}
function attackableEnemies(unit, reach, units) {
	const best = /* @__PURE__ */ new Map();
	for (const cell of reach.values()) for (const foe of units) {
		if (!foe.alive || foe.side === unit.side) continue;
		if (!canHitFrom(unit, cell, foe)) continue;
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
	for (const cell of reach.values()) for (const p of attackCellsFrom(cell.x, cell.y, unit.minRange, unit.maxRange, cols, rows)) {
		const k = key(p.x, p.y);
		if (seen.has(k)) continue;
		seen.add(k);
		out.push(p);
	}
	return out;
}
function powerOf(unit) {
	return unit.mag > 0 ? unit.mag : unit.atk;
}
function protOf(attacker, defender) {
	return attacker.mag > 0 ? defender.res : defender.def;
}
function rollDamage(attacker, defender, attTile, defTile, rng) {
	const attT = TERRAIN[attTile];
	const defT = TERRAIN[defTile];
	const raw = powerOf(attacker) + attT.atk - protOf(attacker, defender) - defT.def;
	let dmg = Math.max(1, raw);
	const crit = rng() < .08;
	if (crit) dmg = Math.max(1, Math.floor(dmg * 1.5));
	return {
		dmg,
		crit
	};
}
function previewDamage(attacker, defender, attTile, defTile) {
	const attT = TERRAIN[attTile];
	const defT = TERRAIN[defTile];
	const raw = powerOf(attacker) + attT.atk - protOf(attacker, defender) - defT.def;
	return Math.max(1, raw);
}
function canCounter(attacker, defender, from) {
	if (!defender.alive) return false;
	return inRangeOf(from.x, from.y, defender, defender.minRange, defender.maxRange);
}
function makeForecast(attacker, defender, attTile, defTile) {
	const dmgOut = previewDamage(attacker, defender, attTile, defTile);
	const counter = canCounter(attacker, defender, {
		x: attacker.x,
		y: attacker.y
	});
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
function pub(u) {
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
		x: u.x,
		y: u.y,
		level: u.level,
		bag: { ...u.bag },
		spells: { ...u.spells },
		size: u.size
	};
}
function spawnUnit(spawn, side, i, roster, enemyLevel = 1) {
	const cls = CLASSES[spawn.classId];
	const level = side === "enemy" ? enemyLevel : roster?.levels[spawn.name] ?? 1;
	const st = statsFor(spawn.classId, level);
	const hpCap = roster?.hp[spawn.name];
	const hp = hpCap != null && hpCap > 0 ? Math.min(st.hp, hpCap) : st.hp;
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
		minRange: st.minRange,
		maxRange: st.maxRange,
		moved: false,
		facing: side === "player" ? 1 : -1,
		alive: true,
		drawX: spawn.x,
		drawY: spawn.y,
		flash: 0,
		fade: 1,
		bob: 0,
		level,
		bag: side === "player" ? cls.id === "healer" ? { ...EMPTY_BAG } : { ...roster?.bags?.[spawn.name] ?? STARTING_BAG } : { ...EMPTY_BAG },
		spells: {
			fireball: side === "player" && cls.id === "mage" ? FIREBALL.uses : 0,
			cureMinor: side === "player" && cls.id === "healer" ? CURES.cureMinor.uses : 0,
			cureWounds: side === "player" && cls.id === "healer" ? CURES.cureWounds.uses : 0,
			longShot: side === "player" && cls.id === "archer" ? LONG_SHOT.uses : 0,
			piercing: side === "player" && cls.id === "archer" ? PIERCING.uses : 0
		},
		size: cls.size
	};
}
function easeOut(t) {
	return 1 - (1 - t) * (1 - t);
}
var BattleEngine = class {
	mission;
	tiles;
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
	orig = null;
	hover = null;
	result = null;
	banner = null;
	tip;
	time = 0;
	trauma = 0;
	hitstop = 0;
	zoom = 1;
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
		this.cols = mission.cols;
		this.rows = mission.rows;
		this.tiles = parseLayout(mission.layout);
		this.rng = mulberry32(seed + mission.index * 97);
		this.units = [...mission.playerSpawns.map((s, i) => spawnUnit(s, "player", i, roster)), ...mission.enemySpawns.map((s, i) => spawnUnit(s, "enemy", i, void 0, enemyLevelFor(mission.index)))];
		for (const u of this.units) {
			this.nudgeOffHazard(u);
			u.bob = this.rng() * 16;
		}
		const first = this.units.find((u) => u.side === "player");
		if (first) this.cursor = {
			x: first.x,
			y: first.y
		};
		this.tip = mission.index === 0 ? "Toque numa aliada para mover. Toque num inimigo para ver HP e alcance." : mission.win === "boss" ? "Objetivo: o capitão. Toque nele para ver a área de perigo." : "Toque num inimigo para ver HP, alcance e onde ele pode atacar.";
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) this.reducedMotion = true;
		this.queue.push({
			type: "banner",
			text: "Fase do jogador",
			dur: .9
		});
		this.queue.push({
			type: "delay",
			dur: .05
		});
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
			}, foeForForecast, tileAt(this.tiles, this.cols, fx, fy), tileAt(this.tiles, this.cols, foeForForecast.x, foeForForecast.y));
		}
		const canAttack = !!selected && (this.attackFrom.size > 0 || this.units.some((u) => u.alive && u.side !== selected.side && canHitFrom(selected, selected, u)));
		return {
			phase: this.phase,
			banner: this.banner,
			selected: selected ? pub(selected) : null,
			hoveredUnit: hoverUnit ? pub(hoverUnit) : null,
			terrain: terr ? {
				id: terr.id,
				name: terr.name,
				def: terr.def,
				atk: terr.atk,
				passable: terr.passable,
				hazard: terr.hazardDice ? `${terr.hazardDice}d${terr.hazardFaces ?? 8}` : void 0
			} : null,
			mode: this.mode,
			canAttack,
			forecast,
			turn: this.turn,
			objective: this.mission.objective,
			missionTitle: this.mission.title,
			playerAlive: this.units.filter((u) => u.side === "player" && u.alive).length,
			enemyAlive: this.units.filter((u) => u.side === "enemy" && u.alive).length,
			busy: this.mode === "locked" || !!this.active || this.queue.length > 0,
			result: this.result,
			zoom: this.zoom,
			tip: this.tip,
			inspected: inspected ? pub(inspected) : pendingFoe ? pub(pendingFoe) : null,
			pendingFoe: pendingFoe ? pub(pendingFoe) : null,
			spellReady: this.mode === "awaitSpell" && !!selected && !!this.hover && this.spellAimValid(selected, this.hover),
			spellKind: this.mode === "awaitSpell" ? this.spellKind : null
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
	tick(dt) {
		const cap = Math.min(.05, dt);
		this.time += cap;
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
				const haste = u.classId === "wardog" ? 1.4 : u.classId === "horror" ? .58 : u.classId === "mage" || u.classId === "sorcerer" ? .8 : 1;
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
		if (this.mode !== "locked" && this.phase === "player" && !this.result) {
			if (this.units.filter((u) => u.side === "player" && u.alive && !u.moved).length === 0 && !this.active && this.queue.length === 0) this.beginEnemy();
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
		} else if (step.type === "combat") this.active = {
			type: "combat",
			att: step.att,
			def: step.def,
			stage: "lunge",
			t: 0,
			swapped: false,
			bonusDice: step.bonusDice ?? 0
		};
		else if (step.type === "spell") {
			this.active = {
				type: "spell",
				att: step.att,
				tiles: step.tiles,
				ids: step.ids,
				t: 0,
				hit: false
			};
			this.banner = FIREBALL.name;
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
		else if (step.type === "aiTurn") this.runAi();
		else if (step.type === "playerPhase") {
			this.phase = "player";
			this.mode = "idle";
			this.selectedId = null;
			this.reach.clear();
			this.attackFrom.clear();
			for (const u of this.units) u.moved = false;
			this.turn += 1;
			this.burnStanding("player");
		} else if (step.type === "checkEnd") this.evaluateEnd();
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
			a.t += dt;
			const dur = .12;
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
				const hit = rollDamage(actor, target, tileAt(this.tiles, this.cols, actor.x, actor.y), tileAt(this.tiles, this.cols, target.x, target.y), this.rng);
				if (a.stage === "hit" && a.bonusDice > 0) hit.dmg += 1 + Math.floor(this.rng() * a.bonusDice);
				target.hp = Math.max(0, target.hp - hit.dmg);
				target.flash = 1;
				this.spawnHit(target, hit.dmg, hit.crit);
				if (target.hp <= 0) {
					target.alive = false;
					sfxPlay.death();
				} else sfxPlay.hit();
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
					if (def.alive && canCounter(att, def, {
						x: att.x,
						y: att.y
					})) a.stage = "counterLunge";
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
			for (const id of a.ids) {
				const foe = this.units.find((u) => u.id === id && u.alive);
				if (!foe) continue;
				const hit = rollDamage(att, foe, tileAt(this.tiles, this.cols, att.x, att.y), tileAt(this.tiles, this.cols, foe.x, foe.y), this.rng);
				foe.hp = Math.max(0, foe.hp - hit.dmg);
				foe.flash = 1;
				this.spawnHit(foe, hit.dmg, hit.crit);
				if (foe.hp <= 0) {
					foe.alive = false;
					sfxPlay.death();
				} else sfxPlay.hit();
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
			sfxPlay.ui();
		}
		if (a.t >= .5) this.finishCombat(att);
	}
	finishCombat(att) {
		att.moved = true;
		att.drawX = att.x;
		att.drawY = att.y;
		this.active = null;
		this.selectedId = null;
		this.pendingFoeId = null;
		this.inspectedId = null;
		this.threat = [];
		this.reach.clear();
		this.attackFrom.clear();
		this.orig = null;
		this.spellKind = null;
		this.evaluateEnd();
		if (!this.result && this.phase === "player") this.mode = "idle";
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
	burnStanding(side) {
		for (const u of this.units) {
			if (!u.alive || u.side !== side) continue;
			this.applyTileHazard(u, {
				x: u.x,
				y: u.y
			});
		}
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
		sfxPlay.hit();
		if (unit.hp <= 0) {
			unit.alive = false;
			sfxPlay.death();
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
		const p = this.units.some((u) => u.side === "player" && u.alive);
		const bossAlive = this.units.some((u) => u.side === "enemy" && u.alive && u.classId === "captain");
		const anyEnemy = this.units.some((u) => u.side === "enemy" && u.alive);
		if (this.mission.win === "boss" ? !bossAlive : !anyEnemy) this.result = "victory";
		else if (!p) this.result = "defeat";
	}
	select(unit) {
		if (unit.side !== "player" || !unit.alive || unit.moved || this.phase !== "player") {
			this.inspect(unit);
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
		this.reach = computeReachable(unit, this.tiles, this.cols, this.rows, this.units);
		this.attackFrom = attackableEnemies(unit, this.reach, this.units);
		this.threat = [];
		this.mode = "selected";
		this.ensureVisible(unit.x, unit.y);
		sfxPlay.select();
	}
	inspect(unit) {
		this.inspectedId = unit.id;
		this.threat = computeThreat(unit, this.tiles, this.cols, this.rows, this.units);
		this.tip = `${unit.name} · HP ${unit.hp}/${unit.maxHp} · Alc ${unit.minRange === unit.maxRange ? unit.minRange : `${unit.minRange}–${unit.maxRange}`}`;
		this.ensureVisible(unit.x, unit.y);
		sfxPlay.ui();
	}
	deselect(commit = false) {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!commit && u && this.orig && (u.x !== this.orig.x || u.y !== this.orig.y) && this.mode === "awaitAction") {
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
		if (!this.units.find((x) => x.id === this.selectedId)) return;
		this.mode = "awaitAttack";
		this.tip = "Toque no alvo.";
		sfxPlay.ui();
	}
	startFireball() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.spells.fireball <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "fireball";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = "Alcance em laranja. Toque para mirar, toque de novo para lançar.";
		sfxPlay.ui();
	}
	startLongShot() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.spells.longShot <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "longShot";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `Tiro longo: alcance ${u.minRange}–${u.maxRange * LONG_SHOT.rangeMul}, +1d${LONG_SHOT.bonusFaces}. Toque no inimigo.`;
		sfxPlay.ui();
	}
	startPiercing() {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.spells.piercing <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = "piercing";
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = "Tiro perfurante: toque numa reta da colmeia. Atravessa aliados e inimigos.";
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
		if (this.spellKind === "longShot") {
			this.castLongShot(u, cell);
			return;
		}
		if (this.spellKind === "piercing") {
			this.castPiercing(u, cell);
			return;
		}
		this.castHeal(u, cell, this.spellKind);
	}
	startCure(kind) {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.spells[kind] <= 0) return;
		this.mode = "awaitSpell";
		this.spellKind = kind;
		this.spellArmed = false;
		this.spellAim = null;
		this.hover = null;
		this.tip = `${CURES[kind].name}: toque num aliado ferido (alcance ${CURES[kind].range}).`;
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
	longMax(u) {
		return u.maxRange * LONG_SHOT.rangeMul;
	}
	spellAimValid(caster, cell) {
		if (!this.spellKind) return false;
		if (this.spellKind === "fireball") return manhattan(caster, cell) <= FIREBALL.range;
		if (this.spellKind === "longShot") {
			const d = manhattan(caster, cell);
			const here = occupancy(this.units).get(key(cell.x, cell.y));
			return !!here && here.alive && here.side === "enemy" && d >= caster.minRange && d <= this.longMax(caster);
		}
		if (this.spellKind === "piercing") return piercingLine(caster, cell, this.cols, this.rows) !== null;
		return this.validHealTarget(caster, cell);
	}
	validHealTarget(caster, cell) {
		if (!this.isHeal(this.spellKind)) return false;
		const range = CURES[this.spellKind].range;
		if (manhattan(caster, cell) > range) return false;
		const who = occupancy(this.units).get(key(cell.x, cell.y));
		return !!who && who.side === "player" && who.alive && who.hp < who.maxHp;
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
		unit.spells[kind] -= 1;
		this.spellKind = null;
		this.mode = "locked";
		this.queue.push({
			type: "heal",
			att: unit.id,
			def: target.id,
			kind
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
	castLongShot(unit, cell) {
		if (!this.spellAimValid(unit, cell)) {
			this.tip = "Alvo fora de alcance.";
			sfxPlay.ui();
			return;
		}
		const foe = occupancy(this.units).get(key(cell.x, cell.y));
		if (!foe) return;
		unit.spells.longShot -= 1;
		this.spellKind = null;
		this.mode = "locked";
		this.queue.push({
			type: "combat",
			att: unit.id,
			def: foe.id,
			bonusDice: LONG_SHOT.bonusFaces
		});
	}
	castPiercing(unit, cell) {
		const line = piercingLine(unit, cell, this.cols, this.rows);
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
		unit.spells.piercing -= 1;
		this.spellKind = null;
		this.mode = "locked";
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles: line,
			ids
		});
	}
	usePotion(kind) {
		const u = this.units.find((x) => x.id === this.selectedId);
		if (!u || u.side !== "player" || !u.alive) return;
		if (this.mode !== "awaitAction" && this.mode !== "selected" && this.mode !== "awaitAttack" && this.mode !== "awaitSpell") return;
		if (this.phase !== "player" || this.result) return;
		if (u.bag[kind] <= 0 || u.hp >= u.maxHp) return;
		const heal = rollPotion(kind, this.rng);
		const gained = Math.min(heal, u.maxHp - u.hp);
		u.hp += gained;
		u.bag[kind] -= 1;
		u.moved = true;
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
		this.deselect(true);
		sfxPlay.ui();
	}
	endTurn() {
		if (this.phase !== "player" || this.result) return;
		for (const u of this.units) if (u.side === "player") u.moved = true;
		this.deselect(true);
		this.beginEnemy();
	}
	beginEnemy() {
		if (this.result) return;
		this.phase = "enemy";
		this.mode = "locked";
		this.selectedId = null;
		this.pendingFoeId = null;
		this.inspectedId = null;
		this.threat = [];
		this.reach.clear();
		this.attackFrom.clear();
		for (const u of this.units) if (u.side === "enemy") u.moved = false;
		this.queue.push({
			type: "banner",
			text: "Fase inimiga",
			dur: .85
		});
		this.queue.push({ type: "aiTurn" });
		this.burnStanding("enemy");
	}
	runAi() {
		const next = this.units.filter((u) => u.side === "enemy" && u.alive && !u.moved)[0];
		if (!next) {
			this.queue.push({
				type: "banner",
				text: "Fase do jogador",
				dur: .85
			});
			this.queue.push({ type: "playerPhase" });
			this.active = null;
			return;
		}
		const reach = computeReachable(next, this.tiles, this.cols, this.rows, this.units);
		const players = this.units.filter((u) => u.side === "player" && u.alive);
		let best = null;
		for (const cell of reach.values()) for (const foe of players) {
			if (!canHitFrom(next, cell, foe)) continue;
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
			this.queue.push({ type: "aiTurn" });
			this.active = null;
			return;
		}
		if (next.classId === "captain") {
			if (!players.some((p) => manhattan(next, p) <= next.mov + next.maxRange)) {
				next.moved = true;
				this.queue.push({
					type: "delay",
					dur: .08
				});
				this.queue.push({ type: "aiTurn" });
				this.active = null;
				return;
			}
		}
		let nearest = players[0];
		if (!nearest) {
			next.moved = true;
			this.queue.push({ type: "aiTurn" });
			this.active = null;
			return;
		}
		for (const p of players) if (manhattan(next, p) < manhattan(next, nearest)) nearest = p;
		let closest = null;
		let dist = 999;
		for (const cell of reach.values()) {
			const d = manhattan(cell, nearest);
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
		this.queue.push({ type: "aiTurn" });
		this.active = null;
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
				this.tip = this.spellKind === "piercing" ? "Escolha uma reta da colmeia." : this.spellKind === "longShot" ? "Alvo fora de alcance." : "Alvo inválido.";
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
			if (selected && (this.mode === "awaitAttack" || this.mode === "awaitAction" || this.mode === "selected")) {
				if (canHitFrom(selected, selected, here) || this.attackFrom.has(here.id)) {
					const from = this.attackFrom.get(here.id);
					if (from && (from.x !== selected.x || from.y !== selected.y) && this.mode === "selected") {
						this.commitMove(selected, from);
						this.pendingFoeId = here.id;
						this.onNextIdle = () => {
							const u = this.units.find((x) => x.id === selected.id);
							const f = this.units.find((x) => x.id === here.id);
							if (u && f && u.alive && f.alive) this.commitAttack(u, f, {
								x: u.x,
								y: u.y
							});
						};
						return;
					}
					if (canHitFrom(selected, selected, here)) {
						this.commitAttack(selected, here, {
							x: selected.x,
							y: selected.y
						});
						return;
					}
				}
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
	}
	commitMove(unit, to) {
		const path = reconstructPath(this.reach, to);
		if (path.length === 0) path.push({
			x: unit.x,
			y: unit.y
		}, to);
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
		const check = () => {
			if (this.active || this.queue.length) return;
			unit.x = to.x;
			unit.y = to.y;
			this.selectedId = unit.id;
			this.mode = "awaitAction";
			this.reach.clear();
			this.attackFrom.clear();
		};
		this.queue.push({
			type: "delay",
			dur: .01
		});
		this.onNextIdle = check;
	}
	commitAttack(unit, foe, from) {
		this.mode = "locked";
		if (from.x !== unit.x || from.y !== unit.y) {
			const path = reconstructPath(this.reach, from);
			this.queue.push({
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
	castFireball(unit, click) {
		const tiles = fireballTiles(fireballOrigin(click, this.cols, this.rows), this.cols, this.rows);
		const ids = [];
		for (const t of tiles) {
			const u = this.units.find((x) => x.alive && occupies(x, t.x, t.y));
			if (u && !ids.includes(u.id)) ids.push(u.id);
		}
		unit.spells.fireball -= 1;
		this.mode = "locked";
		this.queue.push({
			type: "spell",
			att: unit.id,
			tiles,
			ids
		});
	}
	panBy(dx, dy) {
		this.camX += dx;
		this.camY += dy;
		this.clampCam();
	}
	setZoom(level) {
		const next = Math.max(0, Math.min(2, Math.round(level)));
		if (next === this.zoom) return;
		const old = ZOOM_RADII[this.zoom];
		const k = ZOOM_RADII[next] / old;
		this.camX = (this.camX + this.viewW / 2) * k - this.viewW / 2;
		this.camY = (this.camY + this.viewH / 2) * k - this.viewH / 2;
		this.zoom = next;
		this.clampCam();
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
		const { cx, cy } = this.hexCenter(u.x, u.y);
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
	footprintCentroid(x, y, size) {
		const cells = footprint({
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
				const A = this.footprintCentroid(from.x, from.y, u.size);
				const B = this.footprintCentroid(to.x, to.y, u.size);
				return {
					cx: A.cx + (B.cx - A.cx) * k,
					cy: A.cy + (B.cy - A.cy) * k
				};
			}
		}
		return this.footprintCentroid(u.x, u.y, u.size);
	}
	idleFrame(u, n) {
		if (n <= 1) return 0;
		const moving = this.active?.type === "move" && this.active.id === u.id;
		if (u.classId === "wardog") {
			const rate = moving ? 4.2 : 2.6;
			return Math.floor(u.bob * rate) % n;
		}
		const rate = (u.classId === "horror" ? 2 : u.classId === "mage" || u.classId === "sorcerer" || u.classId === "healer" ? 1.7 : u.classId === "captain" ? 1.75 : 1.85) * (moving ? 2.2 : 1);
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
		if (a.type === "combat") {
			const actor = a.stage.startsWith("counter") ? a.def : a.att;
			if (u.id !== actor) return null;
			if (a.stage === "lunge" || a.stage === "counterLunge") return a.t < .1 ? 0 : 1;
			if (a.stage === "hit" || a.stage === "counterHit") return 2;
			if (a.stage === "recover" || a.stage === "counterRecover") return 3;
			return 3;
		}
		if (a.type === "spell" && a.att === u.id) {
			if (a.t < .12) return 0;
			if (a.t < .22) return 1;
			if (a.t < .4) return 2;
			return 3;
		}
		if (a.type === "heal" && a.att === u.id) {
			if (a.t < .12) return 0;
			if (a.t < .22) return 1;
			if (a.t < .38) return 2;
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
		for (let y = 0; y < this.rows; y++) for (let x = 0; x < this.cols; x++) {
			const { cx, cy } = this.hexCenter(x, y);
			if (cx < -tile * 2 || cy < -tile * 2 || cx > cssW + tile * 2 || cy > cssH + tile * 2) continue;
			const id = tileAt(this.tiles, this.cols, x, y);
			const img = this.art.tiles[id];
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
		}
		const overlay = (cells, fill) => {
			ctx.fillStyle = fill;
			for (const c of cells) {
				const { cx, cy } = this.hexCenter(c.x, c.y);
				this.hexPath(ctx, cx, cy, tile * .92);
				ctx.fill();
			}
		};
		if (this.mode === "idle" && this.threat.length) overlay(this.threat, "rgba(163,90,74,0.34)");
		if (this.mode === "awaitSpell") {
			const selected = this.units.find((u) => u.id === this.selectedId);
			if (selected && this.spellKind === "fireball") {
				overlay(fireballRangeTiles(selected, this.cols, this.rows), "rgba(196,90,50,0.22)");
				const cell = this.hover ?? this.spellAim;
				if (cell && manhattan(selected, cell) <= FIREBALL.range) overlay(fireballTiles(fireballOrigin(cell, this.cols, this.rows), this.cols, this.rows), "rgba(196,90,50,0.5)");
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
				overlay(reach, "rgba(90,120,70,0.22)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.spellAimValid(selected, cell)) overlay([cell], "rgba(140,170,80,0.55)");
			} else if (selected && this.spellKind === "piercing") {
				overlay(allAxisRays(selected, this.cols, this.rows), "rgba(120,90,50,0.2)");
				const cell = this.hover ?? this.spellAim;
				const line = cell ? piercingLine(selected, cell, this.cols, this.rows) : null;
				if (line) overlay(line, "rgba(196,120,50,0.55)");
			} else if (selected && this.isHeal(this.spellKind)) {
				overlay(this.healRangeTiles(selected, CURES[this.spellKind].range), "rgba(90,140,100,0.28)");
				const cell = this.hover ?? this.spellAim;
				if (cell && this.validHealTarget(selected, cell)) overlay([cell], "rgba(120,180,120,0.55)");
			}
		}
		if (this.mode === "selected" || this.mode === "awaitAttack" || this.mode === "awaitAction") {
			if (this.mode === "selected") overlay(this.reach.values(), "rgba(61,106,138,0.38)");
			const selected = this.units.find((u) => u.id === this.selectedId);
			const atkTiles = [];
			for (const foe of this.units) {
				if (!foe.alive || foe.side === "player") continue;
				if (this.mode === "selected" && this.attackFrom.has(foe.id)) atkTiles.push(...footprint(foe));
				if ((this.mode === "awaitAttack" || this.mode === "awaitAction") && selected && canHitFrom(selected, selected, foe)) atkTiles.push(...footprint(foe));
			}
			overlay(atkTiles, "rgba(163,90,74,0.45)");
			if (this.pendingFoeId) {
				const foe = this.units.find((u) => u.id === this.pendingFoeId);
				if (foe) overlay(footprint(foe), "rgba(181,74,50,0.55)");
			}
		}
		const cur = this.hover ?? this.cursor;
		{
			const { cx, cy } = this.hexCenter(cur.x, cur.y);
			ctx.strokeStyle = "rgba(240,235,227,0.9)";
			ctx.lineWidth = 2;
			this.hexPath(ctx, cx, cy, tile * .9);
			ctx.stroke();
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
			const frames = atk != null ? this.art.attacks[u.sprite] : this.art.sprites[u.sprite];
			const n = frames?.length ?? 0;
			const fi = atk != null ? atk : this.idleFrame(u, n || 4);
			const img = frames?.[fi] ?? frames?.[0];
			const h = cell * (s >= 4 ? 3.35 : s === 2 ? 1.72 : boss ? 1.44 : 1.42);
			const w = cell * (s >= 4 ? 2.85 : s === 2 ? 1.85 : boss ? 1.12 : 1.11);
			ctx.translate(px + sway, py + cell * .42 + bob);
			ctx.scale(u.facing * (1 - breath * .22), 1 + breath);
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
var HEROES = [
	"Kael",
	"Neera",
	"Voss",
	"Salazar"
];
var MISSION_IDS = new Set(MISSIONS.map((m) => m.id));
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
			mid: clampInt(b.mid, 0, 9),
			weak: clampInt(b.weak ?? b.high, 0, 9)
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
		levels[k] = clampInt(v, 1, 5);
	}
	return levels;
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
function emptySave(muted = false) {
	return {
		version: 7,
		completed: [],
		unitHp: {},
		levels: { ...DEFAULT_LEVELS },
		bags: startingBags(),
		muted,
		updatedAt: Date.now(),
		pendingMission: null
	};
}
function emptyBank() {
	return {
		version: 7,
		lastSlot: 0,
		muted: false,
		slots: Array.from({ length: 5 }, () => null)
	};
}
function migrateRecord(raw, muted) {
	renameHero(raw.levels, "Nira", "Neera");
	renameHero(raw.unitHp, "Nira", "Neera");
	renameHero(raw.bags, "Nira", "Neera");
	renameHero(raw.levels, "Silas", "Salazar");
	renameHero(raw.unitHp, "Silas", "Salazar");
	renameHero(raw.bags, "Silas", "Salazar");
	const version = clampInt(raw.version, 0, 7);
	const levels = cleanLevels(raw.levels);
	if (!raw.levels || typeof raw.levels !== "object") {
		const n = 1 + cleanStringList(raw.completed).length;
		for (const k of Object.keys(levels)) levels[k] = Math.min(5, n);
	}
	let pending = null;
	if (typeof raw.pendingMission === "string" && MISSION_IDS.has(raw.pendingMission)) pending = raw.pendingMission;
	else if (raw.battle && typeof raw.battle === "object") {
		const id = raw.battle.missionId;
		if (typeof id === "string" && MISSION_IDS.has(id)) pending = id;
	}
	return {
		version: 7,
		completed: cleanStringList(raw.completed, MISSION_IDS),
		unitHp: cleanHp(raw.unitHp),
		levels,
		bags: version < 4 ? startingBags() : cloneBags(raw.bags),
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
			version: 7,
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
		version: 7
	}));
}
function writeBank(bank) {
	const next = {
		version: 7,
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
		version: 7,
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
		forecast: null,
		turn: 1,
		objective: "",
		missionTitle: "",
		playerAlive: 0,
		enemyAlive: 0,
		busy: false,
		result: null,
		zoom: 1,
		tip: null,
		inspected: null,
		pendingFoe: null,
		spellReady: false,
		spellKind: null
	};
}
function lockedMission(id, completed, test) {
	if (test) return false;
	const m = missionById(id);
	if (!m || m.index === 0) return false;
	const prev = MISSIONS.find((x) => x.index === m.index - 1);
	return prev ? !completed.includes(prev.id) : false;
}
var BRIEF_ART = {
	vau: "/game/brief-vau.jpg",
	bosque: "/game/brief-bosque.jpg",
	aldeia: "/game/brief-aldeia.jpg",
	muralha: "/game/brief-muralha.jpg",
	fortaleza: "/game/brief-fortaleza.jpg",
	templo: "/game/brief-templo.jpg",
	cripta: "/game/brief-cripta.jpg"
};
function briefArt(id) {
	return BRIEF_ART[id] ?? null;
}
function GameApp() {
	const [screen, setScreen] = (0, import_react.useState)("boot");
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
	const [testMode, setTestMode] = (0, import_react.useState)(false);
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
	const mission = missionId ? missionById(missionId) : void 0;
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
		if (rec.pendingMission && missionById(rec.pendingMission)) {
			setMissionId(rec.pendingMission);
			setScreen("briefing");
			return;
		}
		setMissionId(null);
		setScreen("campaign");
	};
	const startBattle = (0, import_react.useCallback)((id, carried = save.unitHp) => {
		if (!art) return;
		const m = missionById(id);
		if (!m) return;
		const levels = testMode ? {
			Kael: m.index + 1,
			Neera: m.index + 1,
			Voss: m.index + 1,
			Salazar: m.index + 1
		} : save.levels;
		const bags = testMode ? startingBags() : save.bags;
		let hp = { ...carried };
		if (testMode) {
			hp = {};
			if (m.index > 0) for (const s of m.playerSpawns) {
				const st = statsFor(s.classId, levels[s.name] ?? 1);
				hp[s.name] = Math.max(1, Math.ceil(st.hp * .5));
			}
		}
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
		const battle = new BattleEngine(m, art, {
			hp,
			levels,
			bags
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
			if (hud.result === "victory" && missionId === "templo") {
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
		const levels = { ...save.levels };
		const hp = {};
		for (const u of engine.units.filter((x) => x.side === "player")) {
			const from = u.level;
			const to = testMode || !u.alive ? from : Math.min(5, from + 1);
			const stFrom = statsFor(u.classId, from);
			const stTo = statsFor(u.classId, to);
			const mag = CLASSES[u.classId].mag > 0;
			const battle = battleHp[u.name] ?? u.hp;
			const healed = u.alive ? Math.min(stFrom.hp, battle + Math.ceil((stFrom.hp - battle) * .5)) : Math.max(1, Math.ceil(stFrom.hp * .5));
			const restHp = u.alive ? healed - battle : healed;
			const extra = stTo.hp - stFrom.hp;
			const camp = Math.min(stTo.hp, healed + extra);
			hp[u.name] = camp;
			growth.push({
				name: u.name,
				from,
				to,
				hpBattle: battle,
				maxFrom: stFrom.hp,
				restHp,
				levelHp: extra,
				hpCamp: camp,
				maxTo: stTo.hp,
				powerFrom: mag ? stFrom.mag : stFrom.atk,
				powerTo: mag ? stTo.mag : stTo.atk,
				powerKind: mag ? "MAG" : "AT",
				fallen: !u.alive
			});
			if (!testMode && u.alive) levels[u.name] = to;
		}
		setLastGrowth(growth);
		if (awardedRef.current === mission.id) return;
		awardedRef.current = mission.id;
		const completed = save.completed.includes(mission.id) ? save.completed : [...save.completed, mission.id];
		if (!testMode) persistCurrent({
			...save,
			completed,
			unitHp: hp,
			bags,
			levels,
			muted,
			pendingMission: null
		});
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
	const bootAudio = () => {
		unlockAudio();
		sfxPlay.ui();
	};
	const openMission = (id) => {
		bootAudio();
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
		if (screen === "battle" && missionId === "templo") {
			playTheme("temple");
			return;
		}
		if (screen === "battle" && (missionId === "vau" || missionId === "bosque")) {
			playTheme("early");
			return;
		}
		if (screen === "battle") {
			playTheme("battle");
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
		setScreen("title");
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
					setLastGrowth(null);
					setMissionId(null);
					setScreen("campaign");
				}
			}),
			screen === "campaign" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampaignScreen, {
				completed: save.completed,
				test: testMode,
				onBack: () => setScreen("title"),
				onPick: openMission
			}),
			screen === "briefing" && mission && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefingScreen, {
				mission,
				onBack: () => setScreen("campaign"),
				onStart: beginMission
			}),
			screen === "cutscene" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutsceneScreen, {
				src: "/game/asherah-rite.mp4",
				muted,
				onSkip: () => startBattle("templo")
			}),
			screen === "epilogue" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutsceneScreen, {
				src: "/game/temple-aftermath.mp4",
				muted,
				onSkip: () => setScreen("victory")
			}),
			screen === "battle" && engine && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BattleScreen, {
				engine,
				hud,
				paused,
				muted,
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
				onQuit: () => {
					setPaused(false);
					setSlotMode(null);
					setEngine(null);
					setScreen("campaign");
				}
			}),
			screen === "victory" && mission && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultScreen, {
				win: true,
				title: mission.title,
				body: "O campo ficou em silêncio.",
				turn: hud.turn,
				growth: lastGrowth,
				art: briefArt(mission.id),
				onTitle: () => setScreen("title"),
				onNext: () => {
					const nxt = MISSIONS.find((m) => m.index === mission.index + 1);
					if (nxt) {
						setMissionId(nxt.id);
						setScreen("briefing");
					} else setScreen("title");
				},
				hasNext: MISSIONS.some((m) => m.index === mission.index + 1)
			}),
			screen === "defeat" && mission && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultScreen, {
				win: false,
				title: mission.title,
				body: "A linha quebrou.",
				turn: hud.turn,
				growth: null,
				art: briefArt(mission.id),
				onTitle: () => setScreen("title"),
				onNext: () => startBattle(mission.id, save.unitHp),
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
						setMissionId(null);
						setEngine(null);
						setScreen("campaign");
						return;
					}
					if (slotMode === "continue") {
						const rec = bank.slots[index];
						if (!rec) return;
						const next = selectSlot(bank, index);
						applySlot(next);
						setSlotMode(null);
						setOverwrite(null);
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
		className: "relative h-dvh bg-bg overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref,
			className: "absolute inset-0 h-full w-full object-cover",
			src,
			playsInline: true,
			autoPlay: true,
			preload: "auto",
			onEnded: onSkip,
			onError: onSkip
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 bottom-0 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "md",
				variant: "ghost",
				onClick: onSkip,
				children: "Pular"
			})
		})]
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
			help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-20 bg-bg/80 flex items-end sm:items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md bg-surface border border-border rounded-xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Como jogar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onHelp,
								className: "size-11 grid place-items-center",
								"aria-label": "Fechar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-muted leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Toque numa aliada para ver movimento (azul) e ataque (vermelho)." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Toque num inimigo para ver HP, alcance e a área vermelha de perigo." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Setas movem o mapa. Clique escolhe a casa. Em Opções há três zooms." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-5 w-full",
							onClick: onHelp,
							children: "Entendi"
						})
					]
				})
			})
		]
	});
}
function CampaignScreen({ completed, test, onBack, onPick }) {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-muted",
				children: test ? "Modo teste" : "Campanha"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl leading-none",
				children: "Cenários"
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex-1 min-h-0 overflow-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-2",
			children: MISSIONS.map((m) => {
				const lock = lockedMission(m.id, completed, test);
				const done = completed.includes(m.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: lock,
					onClick: () => onPick(m.id),
					className: "w-full text-left rounded-xl border border-border bg-surface px-4 py-3 disabled:opacity-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-[0.16em] text-muted",
							children: [
								String(m.index + 1).padStart(2, "0"),
								" · ",
								m.place,
								done ? " · feito" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
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
					className: "text-xs uppercase tracking-[0.18em] text-muted",
					children: mission.place
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl leading-none",
					children: mission.title
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex-1 min-h-0 overflow-y-auto p-5 max-w-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-fg/90",
					children: mission.briefing
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm uppercase tracking-[0.16em] text-accent",
					children: mission.objective
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "xl",
					className: "w-full",
					onClick: onStart,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "size-5" }), " Entrar em combate"]
				})
			})
		]
	});
}
function BattleScreen({ engine, hud, paused, muted, onHud, onPause, onResume, onMute, onSave, onQuit }) {
	const unit = hud.selected ?? hud.pendingFoe ?? hud.inspected;
	const foe = hud.pendingFoe ?? (hud.inspected && hud.inspected.side === "enemy" && hud.selected ? hud.inspected : null);
	const showAct = hud.mode === "awaitAction" || hud.mode === "awaitAttack" || hud.mode === "selected" || hud.mode === "awaitSpell";
	const mage = hud.selected?.side === "player" && hud.selected.classId === "mage";
	const healer = hud.selected?.side === "player" && hud.selected.classId === "healer";
	const archer = hud.selected?.side === "player" && hud.selected.classId === "archer";
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-x-2 top-[max(0.5rem,env(safe-area-inset-top))] flex items-start justify-end gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "bg-surface/90 border border-border rounded-md px-1.5 py-0.5 text-[10px] tabular-nums text-muted pointer-events-none",
							children: [
								"T",
								hud.turn,
								" · ",
								hud.playerAlive,
								"/",
								hud.enemyAlive
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						})]
					}),
					hud.banner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-0 top-14 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-surface/95 border border-border rounded-md px-4 py-1.5 font-display text-lg tracking-wide",
							children: hud.banner
						})
					}),
					hud.tip && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-2 bottom-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "bg-surface/90 border border-border rounded-md px-2 py-1 text-xs text-muted text-center",
							children: hud.tip
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "shrink-0 border-t border-border bg-surface px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-14 sm:h-16 flex items-center gap-2",
					children: unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/game/sprites/${unit.sprite}/1.png`,
						alt: "",
						className: "h-12 w-12 object-contain shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-medium truncate",
									children: [
										unit.name,
										" · Nv ",
										unit.level
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-xs ${unit.side === "enemy" ? "text-danger" : "text-muted"}`,
									children: unit.className
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
								className: "text-xs tabular-nums text-muted truncate",
								children: hud.forecast && foe ? `${hud.forecast.dmgOut} em ${foe.name}${hud.forecast.canCounter ? ` · contra ${hud.forecast.dmgBack}` : " · sem contra"}${hud.forecast.kill ? " · abate" : ""}` : `${powerLabel(unit.atk, unit.mag)} · DF ${unit.def} · Mov ${unit.mov} · Alc ${rangeLabel(unit.minRange, unit.maxRange)}`
							})
						]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: hud.phase === "enemy" ? "O inimigo age…" : "Toque numa aliada ou num inimigo."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1 min-h-10 items-center mt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: !showAct || !hud.canAttack || hud.busy || hud.mode === "awaitSpell",
							onClick: () => engine.startAttack(),
							children: "Atacar"
						}),
						mage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: hud.mode === "awaitSpell" && hud.spellKind === "fireball" ? void 0 : "quiet",
							disabled: !showAct || hud.busy || (hud.selected?.spells.fireball ?? 0) <= 0,
							onClick: () => engine.startFireball(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/game/icons/fireball.png",
									alt: "",
									className: "size-5 rounded-sm object-cover"
								}),
								"Fogo ",
								hud.selected?.spells.fireball ?? 0
							]
						}),
						archer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: hud.mode === "awaitSpell" && hud.spellKind === "longShot" ? void 0 : "quiet",
							disabled: !showAct || hud.busy || (hud.selected?.spells.longShot ?? 0) <= 0,
							onClick: () => engine.startLongShot(),
							children: ["Longo ", hud.selected?.spells.longShot ?? 0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: hud.mode === "awaitSpell" && hud.spellKind === "piercing" ? void 0 : "quiet",
							disabled: !showAct || hud.busy || (hud.selected?.spells.piercing ?? 0) <= 0,
							onClick: () => engine.startPiercing(),
							children: ["Perfura ", hud.selected?.spells.piercing ?? 0]
						})] }),
						healer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: hud.mode === "awaitSpell" && hud.spellKind === "cureMinor" ? void 0 : "quiet",
							disabled: !showAct || hud.busy || (hud.selected?.spells.cureMinor ?? 0) <= 0,
							onClick: () => engine.startCure("cureMinor"),
							children: ["Cura menor ", hud.selected?.spells.cureMinor ?? 0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: hud.mode === "awaitSpell" && hud.spellKind === "cureWounds" ? void 0 : "quiet",
							disabled: !showAct || hud.busy || (hud.selected?.spells.cureWounds ?? 0) <= 0,
							onClick: () => engine.startCure("cureWounds"),
							children: ["Cura simples ", hud.selected?.spells.cureWounds ?? 0]
						})] }),
						hud.mode === "awaitSpell" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: !hud.spellReady || hud.busy,
							onClick: () => engine.confirmSpell(),
							children: "Lançar"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "quiet",
							disabled: !showAct || hud.busy || !hud.selected || hud.selected.side !== "player" || hud.selected.bag.mid <= 0 || hud.selected.hp >= hud.selected.maxHp,
							onClick: () => engine.usePotion("mid"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/potion-mid.png",
								alt: "",
								className: "size-5 rounded-sm object-cover"
							}), hud.selected?.side === "player" ? hud.selected.bag.mid : 0]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "quiet",
							disabled: !showAct || hud.busy || !hud.selected || hud.selected.side !== "player" || hud.selected.bag.weak <= 0 || hud.selected.hp >= hud.selected.maxHp,
							onClick: () => engine.usePotion("weak"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/game/icons/potion-weak.png",
								alt: "",
								className: "size-5 rounded-sm object-cover"
							}), hud.selected?.side === "player" ? hud.selected.bag.weak : 0]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							className: "ml-auto",
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
							className: "grid grid-cols-3 gap-1.5 mb-4",
							children: [
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
									variant: "ghost",
									onClick: onQuit,
									children: "Desistir"
								})
							]
						})
					]
				})
			})
		]
	});
}
function ResultScreen({ win, title, body, turn, growth, art, onTitle, onNext, hasNext, retry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg",
		children: [
			art && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: art,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/45" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex-1 min-h-0 overflow-y-auto px-5 pt-[max(2rem,env(safe-area-inset-top))] pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-muted",
						children: [
							win ? "Vitória" : "Derrota",
							" · T",
							turn
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl sm:text-4xl mt-2 mb-2",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted mb-6",
						children: body
					}),
					growth && growth.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mb-6 space-y-2 max-w-lg",
						children: growth.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-border bg-bg/55 px-3 py-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium",
									children: [
										g.name,
										g.to !== g.from ? ` · Nv ${g.from} → ${g.to}` : ` · Nv ${g.from}`,
										g.fallen ? " · caiu" : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted tabular-nums mt-1",
									children: [
										"Combate: ",
										g.hpBattle,
										"/",
										g.maxFrom
									]
								}),
								g.fallen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted tabular-nums",
									children: [
										"Descanso: revive com ",
										g.hpCamp,
										" HP (metade de ",
										g.maxTo,
										")"
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs tabular-nums text-fg/90",
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
									className: "text-xs tabular-nums text-accent",
									children: [
										"Nível: +",
										g.levelHp,
										" HP máximo (",
										g.maxFrom,
										" → ",
										g.maxTo,
										")",
										g.powerTo !== g.powerFrom ? ` · ${g.powerKind} ${g.powerFrom} → ${g.powerTo}` : ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm tabular-nums mt-1",
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
				children: [hasNext && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "xl",
					className: "w-full",
					onClick: onNext,
					children: retry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-5" }), " Tentar de novo"] }) : "Próxima missão"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "w-full",
					onClick: onTitle,
					children: "Tela inicial"
				})]
			})
		]
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
						children: mode === "new" ? "Nova campanha" : mode === "continue" ? "Continuar" : "Save"
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
					children: mode === "new" ? "Escolha o slot. Um slot ocupado será substituído." : mode === "continue" ? "O último usado vem marcado. Toque para carregar." : "Grava o começo deste combate. O slot anterior permanece se você escolher outro."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-2",
					children: Array.from({ length: 5 }, (_, i) => {
						const slot = bank.slots[i] ?? null;
						const empty = isSlotEmpty(slot);
						const last = i === bank.lastSlot && hasAnySave(bank) && !empty;
						const info = slotProgress(slot);
						const disabled = mode === "continue" && empty;
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
