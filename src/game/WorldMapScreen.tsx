import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from "react";
import { Check, ChevronLeft, Lock, MapPin, X, ZoomIn, ZoomOut } from "lucide-react";
import { missionsForLocation } from "./data";
import type { Mission, WorldLocation } from "./types";

export type LocationStatus = "locked" | "available" | "done";

/** Three zoom stops, as a percent width of the scroll viewport — bigger than "fit the
 * whole map on screen" even at the lowest stop, so the map reads clearly on a phone and
 * panning/scrolling is the normal way to explore it, not an edge case. */
const ZOOM_STOPS = [130, 190, 260];

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
  const [zoomIdx, setZoomIdx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  // Mouse click-and-hold panning (touch already pans natively via the browser's own
  // scroll gesture). Tracked in a ref, not state, so dragging doesn't re-render every
  // pointermove — only the small "moved past the click threshold" flag matters for
  // deciding whether to swallow the click that follows (so dragging over a location
  // marker doesn't also fire its onClick).
  const dragRef = useRef<{ x: number; y: number; scrollLeft: number; scrollTop: number; moved: boolean } | null>(null);

  // Re-center the view on every zoom change (and on first mount) so zooming in never stalls
  // the player at whatever corner they happened to be scrolled to.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
  }, [zoomIdx]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return; // native touch scroll already handles this
    const el = viewportRef.current;
    if (!el) return;
    dragRef.current = { x: e.clientX, y: e.clientY, scrollLeft: el.scrollLeft, scrollTop: el.scrollTop, moved: false };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    const el = viewportRef.current;
    if (!d || !el) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) d.moved = true;
    el.scrollLeft = d.scrollLeft - dx;
    el.scrollTop = d.scrollTop - dy;
  };
  const endDrag = () => {
    // Keep the ref (with its .moved flag) alive past pointerup — the click event that
    // follows a drag fires just after, and onClickCapture below needs to see it. The next
    // pointerdown always overwrites it with a fresh object either way.
    setDragging(false);
  };
  // Swallow the click a drag ends on (capture phase, before it reaches a location marker's
  // own onClick) so panning across a marker never also "clicks" it.
  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (dragRef.current?.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current = null;
    }
  };

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

      {/* A real scroll viewport (not shrink-to-fit) — the map renders at ZOOM_STOPS[zoomIdx]%
       * of this container's width and pans/scrolls natively (touch included) whenever it
       * overflows, which at every zoom stop it does on a phone. The inner wrapper still
       * sizes itself exactly to the image's own on-screen box (width set, height auto), so
       * percent-based marker coordinates land correctly at any zoom level. */}
      <div
        ref={viewportRef}
        className={`relative z-10 flex-1 min-h-0 overflow-auto overscroll-contain touch-pan-x touch-pan-y select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ WebkitOverflowScrolling: "touch" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        <div className="relative inline-block m-2" style={{ width: artOk ? `${ZOOM_STOPS[zoomIdx]}%` : undefined }}>
          {artOk ? (
            <img
              src="/game/assets/world-map.jpg"
              alt=""
              className="block w-full h-auto rounded-lg select-none"
              draggable={false}
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
                    className={`relative size-10 rounded-full border-2 grid place-items-center bg-bg/80 transition-transform group-hover:scale-110 group-active:scale-95 ${
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

      {artOk && (
        <div className="absolute z-20 bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 flex flex-col gap-1 bg-bg/85 border border-border rounded-lg p-1">
          <button
            type="button"
            onClick={() => setZoomIdx((i) => Math.min(ZOOM_STOPS.length - 1, i + 1))}
            disabled={zoomIdx >= ZOOM_STOPS.length - 1}
            className="size-11 grid place-items-center rounded-md disabled:opacity-30 active:bg-surface-2"
            aria-label="Aproximar"
          >
            <ZoomIn className="size-5" />
          </button>
          <div className="text-center text-[10px] tabular-nums text-muted py-0.5">{zoomIdx + 1}/{ZOOM_STOPS.length}</div>
          <button
            type="button"
            onClick={() => setZoomIdx((i) => Math.max(0, i - 1))}
            disabled={zoomIdx <= 0}
            className="size-11 grid place-items-center rounded-md disabled:opacity-30 active:bg-surface-2"
            aria-label="Afastar"
          >
            <ZoomOut className="size-5" />
          </button>
        </div>
      )}

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
