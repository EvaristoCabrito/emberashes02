import { useState } from "react";
import { Check, ChevronLeft, Lock, MapPin, X } from "lucide-react";
import { missionsForLocation } from "./data";
import type { Mission, WorldLocation } from "./types";

export type LocationStatus = "locked" | "available" | "done";

/** Campaign world map: one marker per WorldLocation, positioned by its x/y percent over
 * the map art. A single-mission location jumps straight to its briefing on click; a
 * multi-mission location (e.g. an approach, an encounter, and its aftermath sharing one
 * marker) opens a small chapter list instead. Background art is optional — until the real
 * map lands the screen falls back to a plain ashen backdrop so it never looks broken. */
export function WorldMapScreen({
  locations,
  status,
  missionStatus,
  ember,
  test,
  onBack,
  onPick,
  onOpenList,
}: {
  locations: WorldLocation[];
  status: (loc: WorldLocation) => LocationStatus;
  missionStatus: (missionId: string) => LocationStatus;
  ember: number;
  test: boolean;
  onBack: () => void;
  onPick: (missionId: string) => void;
  onOpenList: () => void;
}) {
  const [open, setOpen] = useState<WorldLocation | null>(null);
  const [artOk, setArtOk] = useState(true);
  const [flashId, setFlashId] = useState<string | null>(null);

  return (
    <section className="relative h-dvh min-h-0 flex flex-col overflow-hidden bg-bg">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 30% 20%, #241f19 0%, #0c0b0a 70%)" }}
      />

      <header className="relative z-10 flex items-center gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-4">
        <button type="button" onClick={onBack} className="size-10 grid place-items-center rounded-md border border-border bg-bg/70" aria-label="Voltar">
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">{test ? "Modo teste" : "Campanha"}</p>
          <h1 className="font-display text-3xl leading-none">Mapa</h1>
        </div>
        <button type="button" onClick={onOpenList} className="h-9 px-3 rounded-md border border-border bg-bg/70 text-xs uppercase tracking-[0.14em]">
          Lista
        </button>
        <p className="text-sm tabular-nums text-muted border border-border rounded-md px-2 py-1 bg-bg/70">Ember {ember}</p>
      </header>

      {/* Shrink-wrapped to the image's own rendered box (not the screen) so percent-based
       * marker coordinates always land on the right spot regardless of viewport aspect —
       * an inline-block wrapper sizes to the img's natural on-screen box, and the marker
       * overlay exactly covers that same box. */}
      <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center overflow-hidden p-2">
        <div className="relative inline-block max-w-full max-h-full">
          {artOk ? (
            <img
              src="/game/world-map.jpg"
              alt=""
              className="block max-w-full max-h-[calc(100dvh-6rem)] w-auto h-auto rounded-lg"
              onError={() => setArtOk(false)}
            />
          ) : (
            <div className="w-[70dvw] h-[70dvh] max-w-md" />
          )}
          <div className="absolute inset-0">
            {locations.map((loc) => {
              const st = status(loc);
              const missions = missionsForLocation(loc);
              const multi = missions.length > 1;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => {
                    if (st === "locked") {
                      setFlashId(loc.id);
                      window.setTimeout(() => setFlashId((f) => (f === loc.id ? null : f)), 500);
                      return;
                    }
                    if (multi) {
                      setOpen(loc);
                      return;
                    }
                    if (missions[0]) onPick(missions[0].id);
                  }}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  aria-label={st === "locked" ? `${loc.name} (bloqueado)` : loc.name}
                >
                  <span
                    className={`relative size-9 rounded-full border-2 grid place-items-center bg-bg/80 transition-transform group-hover:scale-110 ${
                      st === "locked"
                        ? `border-border opacity-50 ${loc.id === flashId ? "locked-flash" : ""}`
                        : st === "done"
                          ? "border-accent"
                          : missions.some((m) => m.hub)
                            ? "inn-open"
                            : "border-accent"
                    }`}
                  >
                    {st === "locked" ? (
                      <Lock className="size-4 text-muted" />
                    ) : st === "done" ? (
                      <Check className="size-4 text-accent" />
                    ) : (
                      <MapPin className="size-4 text-accent" />
                    )}
                    {multi && (
                      <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-bg border border-border text-[10px] leading-none grid place-items-center text-fg/90">
                        {missions.length}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {open && (
        <LocationPanel
          location={open}
          missions={missionsForLocation(open)}
          missionStatus={missionStatus}
          test={test}
          onPick={(id) => {
            setOpen(null);
            onPick(id);
          }}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}

function LocationPanel({
  location,
  missions,
  missionStatus,
  test,
  onPick,
  onClose,
}: {
  location: WorldLocation;
  missions: Mission[];
  missionStatus: (missionId: string) => LocationStatus;
  test: boolean;
  onPick: (id: string) => void;
  onClose: () => void;
}) {
  const [flashId, setFlashId] = useState<string | null>(null);
  return (
    <div
      className="absolute inset-0 z-40 bg-bg/45 backdrop-blur-[3px] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md max-h-[80dvh] overflow-y-auto bg-surface/95 border border-border rounded-xl p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <p className="font-display text-xl leading-tight">{location.name}</p>
          <button type="button" onClick={onClose} className="size-8 grid place-items-center rounded-md border border-border" aria-label="Fechar">
            <X className="size-4" />
          </button>
        </div>
        <ol className="flex flex-col gap-2">
          {missions.map((m, i) => {
            const st = missionStatus(m.id);
            return (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => {
                    if (st === "locked") {
                      setFlashId(m.id);
                      window.setTimeout(() => setFlashId((f) => (f === m.id ? null : f)), 500);
                      return;
                    }
                    onPick(m.id);
                  }}
                  aria-label={st === "locked" ? `${m.title} (bloqueado)` : undefined}
                  className={`w-full text-left rounded-xl border bg-surface px-4 py-3 ${
                    st === "locked" ? `opacity-40 border-border ${m.id === flashId ? "locked-flash" : ""}` : "border-border"
                  }`}
                >
                  <p className="text-sm uppercase tracking-[0.16em] text-muted flex items-center gap-1.5">
                    {st === "locked" && <Lock className="size-3" />}
                    {st === "done" && <Check className="size-3 text-accent" />}
                    {String(m.index + 1).padStart(2, "0")} · {m.place}
                    {st === "done" ? " · feito" : ""}
                  </p>
                  <p className="font-display text-2xl">{m.title}</p>
                  <p className="text-base text-muted">{m.objective}</p>
                </button>
              </li>
            );
          })}
        </ol>
        {test && <p className="mt-3 text-xs text-muted">Modo teste: todos os capítulos estão abertos.</p>}
      </div>
    </div>
  );
}
