import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, RotateCcw, Star, Swords, Volume2, VolumeX, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadGameArt } from "./assets";
import { installAudioUnlock, playMenuMusic, playTheme, resumeAudio, setMuted, sfxPlay, stopMusic, unlockAudio } from "./audio";
import { BattleCanvas } from "./BattleCanvas";
import { InnScreen } from "./InnScreen";
import { CLASSES, CLEAVE, CURES, FIREBALL, LIGHTNING, LONG_SHOT, MAX_LEVEL, MISSIONS, STAR_LEVEL, STARS_TO_LEVEL, BAG_MAX, POTION_PRICE, cleaveHexCount, diceFormula, emberForKill, fireballFormula, lightningFormula, missionById, potionLabel, potionSpan, rangeLabel, sheetLine, startingBags, statsFor, usesStarXp } from "./data";
import { BattleEngine } from "./engine";
import {
  activeSave,
  emptySave,
  formatStamp,
  hasAnySave,
  isSlotEmpty,
  loadBank,
  setMutedBank,
  SLOT_COUNT,
  slotProgress,
  writeSlot,
  selectSlot,
} from "./save";
import type { GameArt, GrowthLine, HudSnapshot, PotionId, SaveBank, SaveData, ScreenId, UnitPublic } from "./types";

function hudBlank(): HudSnapshot {
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
    spellKind: null,
  };
}

function innUnlocked(completed: string[]): boolean {
  return completed.includes("estalagem");
}

function lockedMission(id: string, completed: string[], test: boolean): boolean {
  if (test) return false;
  const m = missionById(id);
  if (!m) return true;
  if (m.hub) return !innUnlocked(completed) && !MISSIONS.some((x) => x.index === m.index - 1 && completed.includes(x.id));
  if (completed.includes(id)) return true;
  if (m.index === 0) return false;
  const prev = MISSIONS.find((x) => x.index === m.index - 1);
  return prev ? !completed.includes(prev.id) : false;
}

const BRIEF_ART: Record<string, string> = {
  vau: "/game/brief-vau.jpg",
  bosque: "/game/brief-bosque.jpg?v=2",
  aldeia: "/game/brief-aldeia.jpg",
  muralha: "/game/brief-muralha.jpg",
  fortaleza: "/game/brief-fortaleza.jpg",
  templo: "/game/brief-templo.jpg",
  cripta: "/game/brief-cripta.jpg",
  estalagem: "/game/brief-estalagem.jpg",
  colina: "/game/brief-colina.jpg",
  passagem: "/game/brief-passagem.jpg?v=2",
  vertente: "/game/brief-vertente.jpg?v=2",
  portao: "/game/brief-portao.jpg",
};

function briefArt(id: string): string | null {
  return BRIEF_ART[id] ?? null;
}

const HERO_PORTRAIT: Partial<Record<string, string>> = {
  kael: "/game/portraits/kael.png?v=2",
  nira: "/game/portraits/nira.png",
  voss: "/game/portraits/voss.png",
  salazar: "/game/portraits/salazar.png",
};

export function GameApp() {
  const [screen, setScreen] = useState<ScreenId>("title");
  const [bank, setBank] = useState<SaveBank>(() => (typeof window === "undefined" ? { version: 7, lastSlot: 0, muted: false, slots: [null, null, null, null, null] } : loadBank()));
  const save = activeSave(bank);
  const [art, setArt] = useState<GameArt | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [missionId, setMissionId] = useState<string | null>(null);
  const [engine, setEngine] = useState<BattleEngine | null>(null);
  const [hud, setHud] = useState<HudSnapshot>(hudBlank);
  const [paused, setPaused] = useState(false);
  const [help, setHelp] = useState(false);
  const [muted, setMutedUi] = useState(() => (typeof window === "undefined" ? false : loadBank().muted));
  const muteReady = useRef(false);
  const [lastGrowth, setLastGrowth] = useState<GrowthLine[] | null>(null);
  const [testMode, setTestMode] = useState(false);
  const awardedRef = useRef<string | null>(null);
  const combatStartRef = useRef<SaveData | null>(null);
  const [slotMode, setSlotMode] = useState<"new" | "continue" | "save" | "load" | null>(null);
  const [overwrite, setOverwrite] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    loadGameArt()
      .then((a) => {
        if (alive) setArt(a);
      })
      .catch((err: Error) => {
        if (alive) setLoadError(err.message);
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    setMuted(muted);
    if (!muteReady.current) {
      muteReady.current = true;
      return;
    }
    setBank((b) => setMutedBank(b, muted));
  }, [muted]);

  useEffect(() => {
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

  const mission = missionId ? missionById(missionId) : undefined;
  const hasProgress = hasAnySave(bank);

  const applySlot = (next: SaveBank) => {
    setBank(next);
    const rec = activeSave(next);
    combatStartRef.current = rec;
  };

  const persistCurrent = (data: SaveData, slot = bank.lastSlot) => {
    const next = writeSlot(bank, slot, { ...data, muted });
    applySlot(next);
    return next;
  };

  const enterFromSave = (rec: SaveData) => {
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

  const startBattle = useCallback(
    (id: string, carried = save.unitHp) => {
      if (!art) return;
      const m = missionById(id);
      if (!m) return;
      const levels: Record<string, number> = testMode
        ? { Kael: m.index + 1, Neera: m.index + 1, Voss: m.index + 1, Salazar: m.index + 1 }
        : save.levels;
      const bags = testMode ? startingBags() : save.bags;
      let hp = { ...carried };
      if (testMode) {
        hp = {};
        if (m.index > 0) {
          for (const s of m.playerSpawns) {
            const st = statsFor(s.classId, levels[s.name] ?? 1);
            hp[s.name] = Math.max(1, Math.ceil(st.hp * 0.5));
          }
        }
      }
      if (!testMode) {
        const snapshot: SaveData = {
          ...save,
          unitHp: hp,
          levels,
          bags,
          pendingMission: id,
          muted,
        };
        combatStartRef.current = snapshot;
        persistCurrent(snapshot);
      }
      const battle = new BattleEngine(m, art, { hp, levels, bags }, Date.now() % 100000);
      if (typeof window !== "undefined" && window.innerWidth < 720) battle.zoom = 0;
      awardedRef.current = null;
      setEngine(battle);
      setMissionId(id);
      setHud(battle.getHud());
      setPaused(false);
      setSlotMode(null);
      setScreen("battle");
    },
    [art, save, testMode, muted, bank],
  );

  const onHud = useCallback((next: HudSnapshot) => {
    setHud(next);
  }, []);

  useEffect(() => {
    if (screen !== "battle" || !hud.result) return;
    const t = window.setTimeout(() => {
      if (hud.result === "victory" && (missionId === "templo" || missionId === "portao")) {
        setScreen("epilogue");
        return;
      }
      if (hud.result) setScreen(hud.result);
    }, 1100);
    return () => window.clearTimeout(t);
  }, [hud.result, screen, missionId]);

  const persistVictory = useCallback(() => {
    if (!engine || !mission) return;
    const battleHp = engine.battlePlayerHp();
    const bags = engine.remainingBags();
    const growth: GrowthLine[] = [];
    const levels = { ...save.levels };
    const xp = { ...(save.xp ?? {}) };
    const hp: Record<string, number> = {};
    const startHpMap = combatStartRef.current?.unitHp ?? save.unitHp;
    for (const u of engine.units.filter((x) => x.side === "player")) {
      const from = u.level;
      let to = from;
      let starsFrom = xp[u.name] ?? 0;
      let starsTo = starsFrom;
      const starReasons: string[] = [];
      if (!testMode && u.alive && from < MAX_LEVEL) {
        if (usesStarXp(from)) {
          let gained = 1;
          starReasons.push("sobreviveu");
          const battleNow = engine.battlePlayerHp()[u.name] ?? u.hp;
          const entered = startHpMap[u.name];
          const startHp = entered != null && entered > 0 ? entered : statsFor(u.classId, from).hp;
          if (battleNow >= u.maxHp) {
            gained += 1;
            starReasons.push("HP cheio");
          } else if (battleNow >= startHp) {
            gained += 1;
            starReasons.push("sem dano");
          }
          gained = Math.min(STARS_TO_LEVEL, gained);
          starsTo = starsFrom + gained;
          to = from;
          while (starsTo >= STARS_TO_LEVEL && to < MAX_LEVEL) {
            starsTo -= STARS_TO_LEVEL;
            to += 1;
          }
          if (to >= MAX_LEVEL) starsTo = 0;
        } else {
          to = Math.min(MAX_LEVEL, from + 1);
        }
      }
      const stFrom = statsFor(u.classId, from);
      const stTo = statsFor(u.classId, to);
      const mag = CLASSES[u.classId].mag > 0;
      const battle = battleHp[u.name] ?? u.hp;
      const healed = u.alive
        ? Math.min(stFrom.hp, battle + Math.ceil((stFrom.hp - battle) * 0.5))
        : Math.max(1, Math.ceil(stFrom.hp * 0.5));
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
        atkFrom: stFrom.atk,
        atkTo: stTo.atk,
        magFrom: stFrom.mag,
        magTo: stTo.mag,
        defFrom: stFrom.def,
        defTo: stTo.def,
        resFrom: stFrom.res,
        resTo: stTo.res,
        fallen: !u.alive,
        starsFrom,
        starsTo,
        starsNeed: STARS_TO_LEVEL,
        starReasons,
      });
      if (!testMode && u.alive) {
        levels[u.name] = to;
        xp[u.name] = starsTo;
      }
    }
    setLastGrowth(growth);
    if (awardedRef.current === mission.id) return;
    awardedRef.current = mission.id;
    const completed = save.completed.includes(mission.id) ? save.completed : [...save.completed, mission.id];
    if (!testMode) {
      const loot = engine.units
        .filter((x) => x.side === "enemy" && !x.alive)
        .reduce((n, u) => n + emberForKill(u.classId), 0);
      persistCurrent({
        ...save,
        completed,
        unitHp: hp,
        bags,
        levels,
        xp,
        ember: (save.ember ?? 0) + loot,
        emberSeeded: true,
        muted,
        pendingMission: null,
      });
    }
  }, [engine, mission, save, testMode, muted, bank]);

  useEffect(() => {
    if (screen === "victory") persistVictory();
  }, [screen, persistVictory]);

  const bootAudio = () => {
    unlockAudio();
    sfxPlay.ui();
  };

  const openMission = (id: string) => {
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
    if (mission?.hub || missionId === "estalagem") {
      const completed = save.completed.includes(missionId) ? save.completed : [...save.completed, missionId];
      if (!testMode) persistCurrent({ ...save, completed, pendingMission: null });
      setScreen("inn");
      return;
    }
    startBattle(missionId);
  };

  useEffect(() => {
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
    if (screen === "battle" && missionId === "aldeia") {
      playTheme("aldeia");
      return;
    }
    if (screen === "battle" && (missionId === "vau" || missionId === "bosque" || missionId === "cripta" || missionId === "vertente")) {
      playTheme("early");
      return;
    }
    if (screen === "inn") {
      playTheme("inn");
      return;
    }
    if (screen === "battle" && (missionId === "muralha" || missionId === "fortaleza")) {
      playTheme("siege");
      return;
    }
    if (screen === "battle" && (missionId === "colina" || missionId === "passagem")) {
      playTheme("hill");
      return;
    }
    if (screen === "battle" && missionId === "portao") {
      playTheme("portao");
      return;
    }
    if (screen === "battle") {
      playTheme("early");
      return;
    }
    playMenuMusic();
  }, [screen, muted, missionId]);

  const leaveBoot = useCallback(() => {
    playMenuMusic();
    setScreen("campaign");
  }, []);

  return (
    <main className="relative h-dvh min-h-0 bg-bg text-fg overflow-hidden">
      {screen === "boot" && (
        <CutsceneScreen src="/game/title-open.mp4" muted={false} onSkip={leaveBoot} />
      )}
      {screen === "title" && (
        <TitleScreen
          ready={!!art}
          error={loadError}
          hasProgress={hasProgress}
          muted={muted}
          help={help}
          onMute={() => {
            unlockAudio();
            setMutedUi((v) => !v);
          }}
          onHelp={() => setHelp((v) => !v)}
          onNew={() => {
            bootAudio();
            setTestMode(false);
            setOverwrite(null);
            setSlotMode("new");
          }}
          onContinue={() => {
            bootAudio();
            setTestMode(false);
            setOverwrite(null);
            setSlotMode("continue");
          }}
          onTest={() => {
            bootAudio();
            setTestMode(true);
            setLastGrowth(null);
            setMissionId(null);
            setScreen("campaign");
          }}
        />
      )}

      {screen === "campaign" && (
        <CampaignScreen
          completed={save.completed}
          test={testMode}
          ember={save.ember ?? 0}
          onBack={() => setScreen("title")}
          onPick={openMission}
        />
      )}

      {screen === "briefing" && mission && (
        <BriefingScreen mission={mission} onBack={() => setScreen("campaign")} onStart={beginMission} />
      )}

      {screen === "inn" && (
        <InnScreen
          bags={save.bags}
          ember={save.ember ?? 0}
          muted={muted}
          onMute={() => {
            unlockAudio();
            setMutedUi((v) => !v);
          }}
          onLeave={() => setScreen("campaign")}
          onPay={(hero: string, cart: Record<PotionId, number>) => {
            const rec = activeSave(bank);
            let cost = 0;
            const bag = { ...(rec.bags[hero] ?? startingBags()[hero]) };
            for (const kind of Object.keys(cart) as PotionId[]) {
              const qty = cart[kind] ?? 0;
              if (qty <= 0) continue;
              if ((bag[kind] ?? 0) + qty > BAG_MAX) return false;
              cost += POTION_PRICE[kind] * qty;
              bag[kind] = (bag[kind] ?? 0) + qty;
            }
            const held = rec.ember ?? 0;
            if (cost <= 0 || held < cost) return false;
            persistCurrent({
              ...rec,
              ember: held - cost,
              emberSeeded: true,
              bags: { ...rec.bags, [hero]: bag },
              pendingMission: null,
            });
            return true;
          }}
        />
      )}

      {screen === "cutscene" && (
        <CutsceneScreen src="/game/asherah-rite.mp4" muted={muted} onSkip={() => startBattle("templo")} />
      )}

      {screen === "epilogue" && (
        <CutsceneScreen
          src={missionId === "portao" ? "/game/portao-end.mp4" : "/game/temple-aftermath.mp4"}
          muted={muted}
          onSkip={() => setScreen("victory")}
        />
      )}

      {screen === "battle" && engine && (
        <BattleScreen
          engine={engine}
          hud={hud}
          paused={paused}
          muted={muted}
          xp={save.xp}
          onHud={onHud}
          onPause={() => setPaused(true)}
          onResume={() => {
            setSlotMode(null);
            setOverwrite(null);
            setPaused(false);
          }}
          onMute={() => {
            unlockAudio();
            setMutedUi((v) => !v);
          }}
          onSave={() => {
            setOverwrite(null);
            setSlotMode("save");
          }}
          onLoad={() => {
            setOverwrite(null);
            setSlotMode("load");
          }}
          onQuit={() => {
            setPaused(false);
            setSlotMode(null);
            setEngine(null);
            setScreen("campaign");
          }}
        />
      )}

      {screen === "victory" && mission && (
        <ResultScreen
          win
          title={mission.title}
          body="O campo ficou em silêncio."
          turn={hud.turn}
          growth={lastGrowth}
          art={briefArt(mission.id)}
          innOpen={innUnlocked(save.completed) && mission.index <= 11}
          onInn={() => {
            setMissionId("estalagem");
            setScreen("inn");
          }}
          onMap={() => setScreen("campaign")}
          onTitle={() => setScreen("title")}
          onNext={() => {
            const nxt = MISSIONS.find((m) => m.index === mission.index + 1);
            if (nxt) {
              setMissionId(nxt.id);
              setScreen("briefing");
            } else setScreen("title");
          }}
          hasNext={MISSIONS.some((m) => m.index === mission.index + 1)}
        />
      )}

      {screen === "defeat" && mission && (
        <ResultScreen
          win={false}
          title={mission.title}
          body="A linha quebrou."
          turn={hud.turn}
          growth={null}
          art={briefArt(mission.id)}
          onTitle={() => setScreen("title")}
          onNext={() => startBattle(mission.id, save.unitHp)}
          hasNext
          retry
        />
      )}

      {slotMode && (
        <SlotScreen
          mode={slotMode}
          bank={bank}
          overwrite={overwrite}
          onOverwrite={setOverwrite}
          onClose={() => {
            setSlotMode(null);
            setOverwrite(null);
          }}
          onPick={(index) => {
            bootAudio();
            if (slotMode === "new") {
              const next = writeSlot(bank, index, emptySave(muted));
              applySlot(next);
              setSlotMode(null);
              setOverwrite(null);
              setLastGrowth(null);
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
            const snapshot = combatStartRef.current ?? { ...save, pendingMission: missionId, muted };
            const next = writeSlot(bank, index, snapshot);
            applySlot(next);
            setSlotMode(null);
            setOverwrite(null);
            setPaused(false);
          }}
        />
      )}
    </main>
  );
}

function CutsceneScreen({
  src,
  muted,
  onSkip,
}: {
  src: string;
  muted: boolean;
  onSkip: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [portrait, setPortrait] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 720px) and (orientation: portrait)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px) and (orientation: portrait)");
    const sync = () => setPortrait(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const ori = screen.orientation as ScreenOrientation & { lock?: (mode: string) => Promise<void>; unlock?: () => void };
    void ori.lock?.("landscape").catch(() => {});
    return () => {
      mq.removeEventListener("change", sync);
      try {
        ori.unlock?.();
      } catch {
        /* ignore */
      }
    };
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = muted;
    const kick = () => {
      void el.play().catch(() => {
        el.muted = true;
        void el.play().catch(() => {});
      });
    };
    kick();
    el.addEventListener("canplay", kick);
    const t = window.setTimeout(onSkip, 20000);
    return () => {
      el.removeEventListener("canplay", kick);
      window.clearTimeout(t);
    };
  }, [muted, src, onSkip]);
  return (
    <section className="relative h-dvh w-dvw bg-black overflow-hidden">
      <div className="cutscene-stage">
        <video ref={ref} src={src} playsInline autoPlay preload="auto" onEnded={onSkip} onError={onSkip} />
      </div>
      {portrait && (
        <p className="pointer-events-none absolute inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] text-center text-[11px] tracking-[0.16em] uppercase text-muted">
          Deite o telefone
        </p>
      )}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] flex justify-end">
        <Button size="md" variant="ghost" onClick={onSkip}>
          Pular
        </Button>
      </div>
    </section>
  );
}

function TitleScreen({
  ready,
  error,
  hasProgress,
  muted,
  help,
  onMute,
  onHelp,
  onNew,
  onContinue,
  onTest,
}: {
  ready: boolean;
  error: string | null;
  hasProgress: boolean;
  muted: boolean;
  help: boolean;
  onMute: () => void;
  onHelp: () => void;
  onNew: () => void;
  onContinue: () => void;
  onTest: () => void;
}) {
  return (
    <section className="relative min-h-dvh flex flex-col overflow-hidden">
      <div className="title-hero absolute inset-0" aria-hidden />
      <div className="title-veil absolute inset-0" />
      <header className="relative z-10 flex items-center justify-end px-4 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={onMute}
          className="size-11 grid place-items-center rounded-md border border-border text-fg"
          aria-label={muted ? "Ativar som" : "Silenciar"}
        >
          {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
        </button>
      </header>
      <div className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] max-w-xl mx-auto w-full">
        <p className="text-sm tracking-[0.28em] uppercase text-muted mb-3">Táticas em cinzas</p>
        <h1 className="font-display text-5xl sm:text-7xl font-medium tracking-tight leading-none mb-4">Ember</h1>
        <p className="text-[11px] tracking-[0.18em] uppercase text-muted -mt-3 mb-4">V0.21</p>
        <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
          Três sobreviventes. Um tabuleiro de guerra. Cada casa conta.
        </p>
        <div className="flex flex-col gap-3">
          <Button size="xl" disabled={!ready} onClick={onNew}>
            {ready ? "Nova campanha" : "Carregando…"}
          </Button>
          {hasProgress && (
            <Button size="lg" variant="ghost" disabled={!ready} onClick={onContinue}>
              Continuar
            </Button>
          )}
          <Button size="lg" variant="quiet" onClick={onHelp}>
            Como jogar
          </Button>
          <Button size="lg" variant="ghost" disabled={!ready} onClick={onTest}>
            Modo teste
          </Button>
        </div>
        {error && <p className="mt-4 text-sm text-danger">{error}</p>}
      </div>
      {help && (
        <div className="absolute inset-0 z-20 bg-bg/80 flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-md bg-surface border border-border rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="font-display text-2xl">Como jogar</h2>
              <button type="button" onClick={onHelp} className="size-11 grid place-items-center" aria-label="Fechar">
                <X className="size-5" />
              </button>
            </div>
            <ul className="space-y-3 text-sm text-muted leading-relaxed">
              <li>Toque numa aliada para ver movimento (azul) e ataque (vermelho).</li>
              <li>Toque num inimigo para ver HP, alcance e a área vermelha de perigo.</li>
              <li>Golpe de arma: AT − DF, dentro do alcance da ficha.</li>
              <li>Magia ofensiva: o dado − RES, no alcance da magia.</li>
              <li>Todo mundo tem AT, MAG, DF, RES, Mov e Alc. Nada fica de fora da ficha.</li>
              <li>Terreno alto (barranco, tronco morto, casa abandonada): +2 de dano. A arqueira também ganha +1 de alcance. No alto, outro hex alto na frente não corta a flecha.</li>
              <li>Barricada (estacas, 3 hexes): ninguém passa. De trás você atira. Projéteis não acertam quem está atrás.</li>
              <li>Depois de mover, dois cliques no personagem = Esperar e passa ao próximo.</li>
            </ul>
            <Button className="mt-5 w-full" onClick={onHelp}>
              Entendi
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

function CampaignScreen({
  completed,
  test,
  ember,
  onBack,
  onPick,
}: {
  completed: string[];
  test: boolean;
  ember: number;
  onBack: () => void;
  onPick: (id: string) => void;
}) {
  return (
    <section className="h-dvh min-h-0 flex flex-col bg-bg">
      <header className="flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4 border-b border-border">
        <button type="button" onClick={onBack} className="size-10 grid place-items-center rounded-md border border-border" aria-label="Voltar">
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">{test ? "Modo teste" : "Campanha"}</p>
          <h1 className="font-display text-3xl leading-none">Cenários</h1>
        </div>
        <p className="text-sm tabular-nums text-muted border border-border rounded-md px-2 py-1">Ember {ember}</p>
      </header>
      <ol className="flex-1 min-h-0 overflow-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-2">
        {MISSIONS.map((m) => {
          const lock = lockedMission(m.id, completed, test);
          const done = completed.includes(m.id);
          const openInn = !!m.hub && !lock;
          return (
            <li key={m.id}>
              <button
                type="button"
                disabled={lock}
                onClick={() => onPick(m.id)}
                className={`w-full text-left rounded-xl border bg-surface px-4 py-3 disabled:opacity-40 ${
                  openInn ? "inn-open" : "border-border"
                }`}
              >
                <p className="text-sm uppercase tracking-[0.16em] text-muted">
                  {String(m.index + 1).padStart(2, "0")} · {m.place}
                  {m.hub && !lock ? " · aberta" : done ? " · feito" : ""}
                </p>
                <p className="font-display text-2xl">{m.title}</p>
                <p className="text-base text-muted">{m.objective}</p>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function BriefingScreen({
  mission,
  onBack,
  onStart,
}: {
  mission: (typeof MISSIONS)[number];
  onBack: () => void;
  onStart: () => void;
}) {
  const art = briefArt(mission.id);
  return (
    <section className="relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg">
      {art && (
        <>
          <img src={art} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/35" />
        </>
      )}
      <header className="relative z-10 flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4">
        <button type="button" onClick={onBack} className="size-10 grid place-items-center rounded-md border border-border bg-bg/70" aria-label="Voltar">
          <ChevronLeft className="size-5" />
        </button>
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">{mission.place}</p>
          <h1 className="font-display text-3xl leading-none">{mission.title}</h1>
        </div>
      </header>
      <div className="relative z-10 flex-1 min-h-0 overflow-y-auto p-5 max-w-lg">
        <p className="text-lg leading-relaxed text-fg/90">{mission.briefing}</p>
        <p className="mt-4 text-base uppercase tracking-[0.16em] text-accent">{mission.objective}</p>
      </div>
      <div className="relative z-10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <Button size="xl" className="w-full" onClick={onStart}>
          <Swords className="size-5" /> {mission.hub ? "Entrar" : "Entrar em combate"}
        </Button>
      </div>
    </section>
  );
}

function BattleScreen({
  engine,
  hud,
  paused,
  muted,
  xp,
  onHud,
  onPause,
  onResume,
  onMute,
  onSave,
  onLoad,
  onQuit,
}: {
  engine: BattleEngine;
  hud: HudSnapshot;
  paused: boolean;
  muted: boolean;
  xp: Record<string, number>;
  onHud: (h: HudSnapshot) => void;
  onPause: () => void;
  onResume: () => void;
  onMute: () => void;
  onSave: () => void;
  onLoad: () => void;
  onQuit: () => void;
}) {
  const unit: UnitPublic | null = hud.selected ?? hud.pendingFoe ?? hud.inspected;
  const foe = hud.pendingFoe ?? (hud.inspected && hud.inspected.side === "enemy" && hud.selected ? hud.inspected : null);
  const showAct = hud.mode === "awaitAction" || hud.mode === "awaitAttack" || hud.mode === "selected" || hud.mode === "awaitSpell";
  const mage = hud.selected?.side === "player" && hud.selected.classId === "mage";
  const healer = hud.selected?.side === "player" && hud.selected.classId === "healer";
  const archer = hud.selected?.side === "player" && hud.selected.classId === "archer";
  const swordsman = hud.selected?.side === "player" && hud.selected.classId === "swordsman";
  return (
    <section className="relative h-dvh min-h-0 flex flex-col bg-bg">
      <div className="relative flex-1 min-h-0">
        <BattleCanvas engine={engine} onHud={onHud} paused={paused} />
        <div className="pointer-events-none absolute inset-x-2 top-[max(0.5rem,env(safe-area-inset-top))] flex items-start justify-end gap-1">
          <p className="bg-surface/90 border border-border rounded-md px-1.5 py-0.5 text-[10px] tabular-nums text-muted pointer-events-none">
            T{hud.turn} · {hud.playerAlive}/{hud.enemyAlive}
          </p>
          {hud.terrain && (hud.terrain.note || hud.terrain.id === "barricade" || hud.terrain.id === "hill" || hud.terrain.id === "highwood" || hud.terrain.id === "highruin") && (
            <p className="bg-surface/90 border border-border rounded-md px-1.5 py-0.5 text-[10px] text-accent pointer-events-none max-w-[14rem] truncate">
              {hud.terrain.name}
            </p>
          )}
          <div className="flex items-center gap-1 pointer-events-auto shrink-0">
            <button
              type="button"
              onClick={onMute}
              className="size-7 grid place-items-center rounded-md border border-border bg-surface/90"
              aria-label="Som"
            >
              {muted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
            </button>
            <button
              type="button"
              onClick={onPause}
              className="h-7 px-2 rounded-md border border-border bg-surface/90 text-[10px] tracking-[0.14em] uppercase"
            >
              Opções
            </button>
          </div>
        </div>
        {hud.banner && (
          <div className="pointer-events-none absolute inset-x-0 top-14 flex justify-center">
            <div className="bg-surface/95 border border-border rounded-md px-4 py-1.5 font-display text-lg tracking-wide">
              {hud.banner}
            </div>
          </div>
        )}
        {hud.tip && (
          <div className="pointer-events-none absolute inset-x-2 bottom-2">
            <p className="bg-surface/90 border border-border rounded-md px-2 py-1 text-xs text-muted text-center">{hud.tip}</p>
          </div>
        )}
      </div>

      <footer className="shrink-0 border-t border-border bg-surface px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="min-h-16 sm:min-h-[4.5rem] flex items-center gap-2">
          {unit ? (
            <>
              <img
                src={HERO_PORTRAIT[unit.sprite] ?? `/game/sprites/${unit.sprite}/1.png`}
                alt=""
                className={
                  HERO_PORTRAIT[unit.sprite]
                    ? "h-16 w-12 sm:h-20 sm:w-14 object-cover rounded-md shrink-0"
                    : "h-14 w-14 object-contain shrink-0"
                }
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-medium truncate">
                    {unit.name} · Nv {unit.level}
                    {unit.side === "player" && usesStarXp(unit.level) && (
                      <span className="inline-flex gap-0.5 ml-1 align-middle">
                        {Array.from({ length: STARS_TO_LEVEL }, (_, i) => (
                          <Star
                            key={i}
                            className={`size-3 ${i < (xp[unit.name] ?? 0) ? "fill-accent text-accent" : "text-muted"}`}
                          />
                        ))}
                      </span>
                    )}
                  </p>
                  <p className={`text-xs ${unit.side === "enemy" ? "text-danger" : "text-muted"}`}>{unit.className}</p>
                </div>
                <div className="mt-0.5 flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-border overflow-hidden">
                    <div
                      className={`hp-fill h-full ${unit.side === "enemy" ? "bg-danger" : "bg-accent"}`}
                      style={{ width: `${Math.max(0, (unit.hp / unit.maxHp) * 100)}%` }}
                    />
                  </div>
                  <p className="text-xs tabular-nums text-fg shrink-0">
                    {unit.hp}/{unit.maxHp}
                  </p>
                </div>
                <p className="text-[11px] tabular-nums text-muted leading-snug">
                  {hud.forecast && foe
                    ? `${hud.forecast.dmgOut} em ${foe.name}${hud.forecast.canCounter ? ` · contra ${hud.forecast.dmgBack}` : " · sem contra"}${hud.forecast.kill ? " · abate" : ""}`
                    : sheetLine(unit)}
                </p>
              </div>
            </>
          ) : (
            <p className="text-xs text-muted">{hud.phase === "enemy" ? "O inimigo age…" : "Toque numa aliada ou num inimigo."}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-1 min-h-10 items-center mt-1">
          <Button size="sm" disabled={!showAct || !hud.canAttack || hud.busy || hud.mode === "awaitSpell"} onClick={() => engine.startAttack()}>
            Atacar
          </Button>
          {swordsman && (
            <Button
              size="sm"
              variant={hud.mode === "awaitSpell" && hud.spellKind === "cleave" ? undefined : "quiet"}
              disabled={!showAct || hud.busy || (hud.selected?.spells.cleave ?? 0) <= 0}
              onClick={() => engine.startCleave()}
              title={`Corte Duplo: ${cleaveHexCount(hud.selected?.level ?? 1)} hexes adjacentes, AT − DF. ${CLEAVE.usesPerTurn} por turno. +1 hex no Nv 4 e no Nv 6.`}
            >
              <img src="/game/icons/cleave.png" alt="" className="size-5 rounded-sm object-cover" />
              Corte {cleaveHexCount(hud.selected?.level ?? 1)} hex ×{hud.selected?.spells.cleave ?? 0}
            </Button>
          )}
          {mage && (
            <>
            <Button
              size="sm"
              variant={hud.mode === "awaitSpell" && hud.spellKind === "fireball" ? undefined : "quiet"}
              disabled={!showAct || hud.busy || (hud.selected?.spells.fireball ?? 0) <= 0}
              onClick={() => engine.startFireball()}
              title={`Bola de fogo: alcance ${FIREBALL.range}, ${fireballFormula(hud.selected?.level ?? 1)} − RES em área`}
            >
              <img src="/game/icons/fireball.png" alt="" className="size-5 rounded-sm object-cover" />
              Fogo {fireballFormula(hud.selected?.level ?? 1)}−RES ×{hud.selected?.spells.fireball ?? 0}
            </Button>
            {(hud.selected?.spells.lightning ?? 0) > 0 && (
              <Button
                size="sm"
                variant={hud.mode === "awaitSpell" && hud.spellKind === "lightning" ? undefined : "quiet"}
                disabled={!showAct || hud.busy || (hud.selected?.spells.lightning ?? 0) <= 0}
                onClick={() => engine.startLightning()}
                title={`Relâmpago: alcance ${LIGHTNING.range}, ${lightningFormula(hud.selected?.level ?? 1)} − RES. Turno seguinte ${diceFormula(LIGHTNING.echoDice, LIGHTNING.echoFaces, LIGHTNING.echoBonus)} − RES`}
              >
                <img src="/game/icons/lightning.png?v=3" alt="" className="size-5 rounded-sm object-cover" />
                Raio {lightningFormula(hud.selected?.level ?? 1)}−RES · depois {diceFormula(LIGHTNING.echoDice, LIGHTNING.echoFaces, LIGHTNING.echoBonus)} ×{hud.selected?.spells.lightning ?? 0}
              </Button>
            )}
            </>
          )}
          {archer && (
            <>
              <Button
                size="sm"
                variant={hud.mode === "awaitSpell" && hud.spellKind === "longShot" ? undefined : "quiet"}
                disabled={!showAct || hud.busy || (hud.selected?.spells.longShot ?? 0) <= 0}
                onClick={() => engine.startLongShot()}
                title={`Tiro longo: alcance ${hud.selected ? `${hud.selected.minRange}–${hud.selected.maxRange * LONG_SHOT.rangeMul}` : "2–6"}, AT − DF + ${diceFormula(LONG_SHOT.bonusDice, LONG_SHOT.bonusFaces, LONG_SHOT.bonus)}`}
              >
                <img src="/game/icons/long-shot.png?v=3" alt="" className="size-5 rounded-sm object-cover" />
                Longo {hud.selected?.minRange ?? 2}–{(hud.selected?.maxRange ?? 3) * LONG_SHOT.rangeMul} +{diceFormula(LONG_SHOT.bonusDice, LONG_SHOT.bonusFaces, LONG_SHOT.bonus)} ×{hud.selected?.spells.longShot ?? 0}
              </Button>
              <Button
                size="sm"
                variant={hud.mode === "awaitSpell" && hud.spellKind === "piercing" ? undefined : "quiet"}
                disabled={!showAct || hud.busy || (hud.selected?.spells.piercing ?? 0) <= 0}
                onClick={() => engine.startPiercing()}
                title="Tiro perfurante: linha reta na colmeia até a borda. Dobro do AT − DF. Acerta aliados e inimigos."
              >
                <img src="/game/icons/piercing.png?v=3" alt="" className="size-5 rounded-sm object-cover" />
                Perfura ×2 AT ×{hud.selected?.spells.piercing ?? 0}
              </Button>
            </>
          )}
          {healer && (
            <>
              <Button
                size="sm"
                variant={hud.mode === "awaitSpell" && hud.spellKind === "cureMinor" ? undefined : "quiet"}
                disabled={!showAct || hud.busy || (hud.selected?.spells.cureMinor ?? 0) <= 0}
                onClick={() => engine.startCure("cureMinor")}
                title={`${CURES.cureMinor.name}: ${diceFormula(CURES.cureMinor.dice, CURES.cureMinor.faces, CURES.cureMinor.bonus)}, alcance ${CURES.cureMinor.range}`}
              >
                <img src="/game/icons/cure-minor.png?v=5" alt="" className="size-5 rounded-sm object-cover" />
                Menor {diceFormula(CURES.cureMinor.dice, CURES.cureMinor.faces, CURES.cureMinor.bonus)} ×{hud.selected?.spells.cureMinor ?? 0}
              </Button>
              <Button
                size="sm"
                variant={hud.mode === "awaitSpell" && hud.spellKind === "cureWounds" ? undefined : "quiet"}
                disabled={!showAct || hud.busy || (hud.selected?.spells.cureWounds ?? 0) <= 0}
                onClick={() => engine.startCure("cureWounds")}
                title={`${CURES.cureWounds.name}: ${diceFormula(CURES.cureWounds.dice, CURES.cureWounds.faces, CURES.cureWounds.bonus)}, alcance ${CURES.cureWounds.range}`}
              >
                <img src="/game/icons/cure-wounds.png?v=5" alt="" className="size-5 rounded-sm object-cover" />
                Simples {diceFormula(CURES.cureWounds.dice, CURES.cureWounds.faces, CURES.cureWounds.bonus)} ×{hud.selected?.spells.cureWounds ?? 0}
              </Button>
            </>
          )}
          {hud.mode === "awaitSpell" && (
            <Button
              size="sm"
              disabled={!hud.spellReady || hud.busy}
              onClick={() => engine.confirmSpell()}
            >
              Lançar
            </Button>
          )}
          <Button size="sm" variant="quiet" disabled={!showAct || hud.busy} onClick={() => engine.wait()}>
            Esperar
          </Button>
          <Button size="sm" variant="ghost" disabled={!showAct || hud.busy} onClick={() => engine.cancel()}>
            Cancelar
          </Button>
          <Button
            size="sm"
            variant="quiet"
            disabled={!showAct || hud.busy || !hud.selected || hud.selected.side !== "player" || hud.selected.bag.mid <= 0 || hud.selected.hp >= hud.selected.maxHp}
            onClick={() => engine.usePotion("mid")}
            title={potionLabel("mid")}
          >
            <img src="/game/icons/potion-mid.png" alt="" className="size-5 rounded-sm object-cover" />
            Média {potionSpan("mid")} ×{hud.selected?.side === "player" ? hud.selected.bag.mid : 0}
          </Button>
          <Button
            size="sm"
            variant="quiet"
            disabled={!showAct || hud.busy || !hud.selected || hud.selected.side !== "player" || hud.selected.bag.weak <= 0 || hud.selected.hp >= hud.selected.maxHp}
            onClick={() => engine.usePotion("weak")}
            title={potionLabel("weak")}
          >
            <img src="/game/icons/potion-weak.png" alt="" className="size-5 rounded-sm object-cover" />
            Fraca {potionSpan("weak")} ×{hud.selected?.side === "player" ? hud.selected.bag.weak : 0}
          </Button>
          <Button
            size="sm"
            variant="quiet"
            disabled={!showAct || hud.busy || !hud.selected || hud.selected.side !== "player" || hud.selected.bag.potent <= 0 || hud.selected.hp >= hud.selected.maxHp}
            onClick={() => engine.usePotion("potent")}
            title={potionLabel("potent")}
          >
            <img src="/game/icons/potion-potent.png" alt="" className="size-5 rounded-sm object-cover" />
            Potente {potionSpan("potent")} ×{hud.selected?.side === "player" ? hud.selected.bag.potent : 0}
          </Button>
          <Button
            size="sm"
            variant="quiet"
            disabled={!showAct || hud.busy || !hud.selected || hud.selected.side !== "player" || hud.selected.bag.disease <= 0}
            onClick={() => engine.usePotion("disease")}
            title={potionLabel("disease")}
          >
            <img src="/game/icons/potion-disease.png" alt="" className="size-5 rounded-sm object-cover" />
            Doenças ×{hud.selected?.side === "player" ? hud.selected.bag.disease : 0}
          </Button>
          <Button size="sm" variant="ghost" className="ml-auto" disabled={hud.phase !== "player" || !!hud.result} onClick={() => engine.endTurn()}>
            Fim do turno
          </Button>
        </div>
      </footer>

      {paused && (
        <div className="absolute inset-0 z-30 bg-bg/80 flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-surface border border-border rounded-xl p-6">
            <h2 className="font-display text-2xl mb-4">Opções</h2>
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Zoom</p>
            <div className="grid grid-cols-4 gap-1 mb-4">
              {(["Distante", "Longe", "Médio", "Perto"] as const).map((label, i) => (
                <Button key={label} size="sm" variant={hud.zoom === i ? undefined : "quiet"} onClick={() => engine.setZoom(i)}>
                  {label}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <Button onClick={onResume}>Continuar</Button>
              <Button variant="quiet" onClick={onSave}>
                Save
              </Button>
              <Button variant="quiet" onClick={onLoad}>
                Load
              </Button>
              <Button variant="ghost" onClick={onQuit}>
                Desistir
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ResultScreen({
  win,
  title,
  body,
  turn,
  growth,
  art,
  onTitle,
  onNext,
  onInn,
  onMap,
  hasNext,
  innOpen,
  retry,
}: {
  win: boolean;
  title: string;
  body: string;
  turn: number;
  growth: GrowthLine[] | null;
  art: string | null;
  onTitle: () => void;
  onNext: () => void;
  onInn?: () => void;
  onMap?: () => void;
  hasNext: boolean;
  innOpen?: boolean;
  retry?: boolean;
}) {
  return (
    <section className="relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg">
      {art && (
        <>
          <img src={art} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-bg/20" />
        </>
      )}
      <div className="relative z-10 flex-1 min-h-0 overflow-y-auto px-5 pt-[max(2rem,env(safe-area-inset-top))] pb-4">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">
          {win ? "Vitória" : "Derrota"} · T{turn}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl mt-2 mb-2">{title}</h1>
        <p className="text-lg text-muted mb-6">{body}</p>
        {growth && growth.length > 0 && (
          <ul className="mb-6 space-y-2 max-w-lg">
            {growth.map((g) => (
              <li key={g.name} className="rounded-md border border-border bg-bg/55 px-3 py-2.5">
                <p className="font-medium text-lg">
                  {g.name}
                  {g.to !== g.from ? ` · Nv ${g.from} → ${g.to}` : ` · Nv ${g.from}`}
                  {g.fallen ? " · caiu" : ""}
                </p>
                {(g.from >= STAR_LEVEL || g.to >= STAR_LEVEL) && (
                  <p className="flex items-center gap-1 mt-1 text-sm">
                    {Array.from({ length: g.starsNeed }, (_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${i < g.starsTo ? "fill-accent text-accent" : "text-muted"}`}
                      />
                    ))}
                    <span className="text-muted tabular-nums">
                      {g.starsTo}/{g.starsNeed}
                      {g.to !== g.from ? " · subiu" : ""}
                    </span>
                    {g.starReasons.length > 0 && (
                      <span className="text-muted"> · {g.starReasons.join(" · ")}</span>
                    )}
                  </p>
                )}
                <p className="text-sm text-muted tabular-nums mt-1">Combate: {g.hpBattle}/{g.maxFrom}</p>
                {g.fallen ? (
                  <p className="text-sm text-muted tabular-nums">Descanso: revive com {g.hpCamp} HP (metade de {g.maxTo})</p>
                ) : (
                  <p className="text-sm tabular-nums text-fg/90">
                    Descanso: {g.restHp > 0 ? `+${g.restHp} HP` : "sem feridas"}
                    <span className="text-muted"> · metade do que faltava</span>
                  </p>
                )}
                {g.to !== g.from && (
                  <p className="text-sm tabular-nums text-accent">
                    Nível: +{g.levelHp} HP máximo ({g.maxFrom} → {g.maxTo})
                    {g.atkTo !== g.atkFrom ? ` · AT ${g.atkFrom} → ${g.atkTo}` : ""}
                    {g.magTo !== g.magFrom ? ` · MAG ${g.magFrom} → ${g.magTo}` : ""}
                    {g.defTo !== g.defFrom ? ` · DF ${g.defFrom} → ${g.defTo}` : ""}
                    {g.resTo !== g.resFrom ? ` · RES ${g.resFrom} → ${g.resTo}` : ""}
                  </p>
                )}
                <p className="text-base tabular-nums mt-1">Acampamento: {g.hpCamp}/{g.maxTo}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative z-10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-2">
        {hasNext && (
          <Button size="xl" className="w-full" onClick={onNext}>
            {retry ? (
              <>
                <RotateCcw className="size-5" /> Tentar de novo
              </>
            ) : (
              "Próxima missão"
            )}
          </Button>
        )}
        {win && innOpen && onInn && (
          <Button variant="quiet" className="w-full inn-open" onClick={onInn}>
            Estalagem do Osso Seco
          </Button>
        )}
        {win && onMap && (
          <Button variant="ghost" className="w-full" onClick={onMap}>
            Cenários
          </Button>
        )}
        <Button variant="ghost" className="w-full" onClick={onTitle}>
          Tela inicial
        </Button>
      </div>
    </section>
  );
}

function SlotScreen({
  mode,
  bank,
  overwrite,
  onOverwrite,
  onClose,
  onPick,
}: {
  mode: "new" | "continue" | "save" | "load";
  bank: SaveBank;
  overwrite: number | null;
  onOverwrite: (i: number | null) => void;
  onClose: () => void;
  onPick: (index: number) => void;
}) {
  const title = mode === "new" ? "Nova campanha" : mode === "continue" ? "Continuar" : mode === "load" ? "Load" : "Save";
  const hint =
    mode === "new"
      ? "Escolha o slot. Um slot ocupado será substituído."
      : mode === "continue" || mode === "load"
        ? "O último usado vem marcado. Toque para carregar."
        : "Grava o começo deste combate. O slot anterior permanece se você escolher outro.";

  return (
    <div className="absolute inset-0 z-40 bg-bg/85 flex items-end sm:items-center justify-center p-4">
      <div className="w-full max-w-md bg-surface border border-border rounded-xl p-5 max-h-[90dvh] overflow-y-auto">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Arquivos</p>
            <h2 className="font-display text-2xl leading-none mt-1">{title}</h2>
          </div>
          <button type="button" onClick={onClose} className="size-11 grid place-items-center" aria-label="Fechar">
            <X className="size-5" />
          </button>
        </div>
        <p className="text-sm text-muted mb-4">{hint}</p>
        <ol className="flex flex-col gap-2">
          {Array.from({ length: SLOT_COUNT }, (_, i) => {
            const slot = bank.slots[i] ?? null;
            const empty = isSlotEmpty(slot);
            const last = i === bank.lastSlot && hasAnySave(bank) && !empty;
            const info = slotProgress(slot);
            const disabled = (mode === "continue" || mode === "load") && empty;
            const confirm = overwrite === i;
            return (
              <li key={i}>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    if ((mode === "new" || mode === "save") && !empty && !confirm) {
                      onOverwrite(i);
                      return;
                    }
                    onPick(i);
                  }}
                  className={`w-full text-left rounded-xl border px-4 py-3 disabled:opacity-40 ${
                    last ? "border-accent bg-bg/70" : "border-border bg-bg/40"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted">Slot {i + 1}</p>
                    {last && <p className="text-[10px] uppercase tracking-[0.14em] text-accent">Último usado</p>}
                  </div>
                  <p className="font-display text-xl leading-tight">{info.title}</p>
                  <p className="text-sm text-muted">{info.detail}</p>
                  {slot && !empty && (
                    <p className="text-xs tabular-nums text-muted mt-1">{formatStamp(slot.updatedAt)}</p>
                  )}
                  {confirm && <p className="text-xs text-accent mt-2">Toque de novo para substituir este slot.</p>}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

