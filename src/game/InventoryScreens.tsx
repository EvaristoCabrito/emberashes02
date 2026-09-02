import { X } from "lucide-react";
import { CLASSES, EMPTY_BAG, EQUIPMENT, EQUIPMENT_SLOTS, WEAPONS, potionLabel, weaponDiceLabel, weaponIcon } from "./data";
import type { ClassId, PotionId, SaveData } from "./types";

const POTIONS: PotionId[] = ["weak", "mid", "potent", "disease"];

/** Paper-doll equipment view for one hero. "Mão Principal" reads the real weapon system;
 * every other slot is a skeleton — EQUIPMENT has no items yet, so they show "Vazio". */
export function PaperDollScreen({
  heroName,
  classId,
  save,
  onClose,
  onSwitchToBackpack,
}: {
  heroName: string;
  classId: ClassId;
  save: SaveData;
  onClose: () => void;
  onSwitchToBackpack?: () => void;
}) {
  const weaponId = save.equipped[heroName];
  const weapon = weaponId ? WEAPONS[weaponId] : null;
  const enh = weaponId ? (save.weapons[weaponId] ?? 0) : 0;
  const equip = save.equipment[heroName] ?? {};

  return (
    <div
      className="absolute inset-0 z-40 bg-bg/85 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md max-h-[88dvh] overflow-y-auto bg-surface border border-border rounded-xl p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <p className="font-display text-xl leading-tight">{heroName}</p>
            <p className="text-xs text-muted">{CLASSES[classId].name}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {onSwitchToBackpack && (
              <button type="button" onClick={onSwitchToBackpack} className="h-8 px-2.5 rounded-md border border-border text-xs">
                Mochila
              </button>
            )}
            <button type="button" onClick={onClose} className="size-8 grid place-items-center rounded-md border border-border" aria-label="Fechar">
              <X className="size-4" />
            </button>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Mão Principal</p>
        <div className="flex items-center gap-2 bg-bg border border-border rounded-md px-2 py-1.5 mb-4">
          {weapon ? (
            <>
              <img src={weaponIcon(weapon.id)} alt="" className="size-9 rounded-sm object-cover shrink-0" />
              <span className="flex-1 text-sm min-w-0">
                {weapon.name} {enh > 0 ? `+${enh}` : ""}
                <span className="block text-[11px] text-muted tabular-nums">{weaponDiceLabel(weapon.id)}</span>
              </span>
            </>
          ) : (
            <p className="text-sm text-muted">Vazia · equipe com o Ferreiro na Estalagem</p>
          )}
        </div>

        <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Equipamento</p>
        <div className="grid grid-cols-2 gap-1.5">
          {EQUIPMENT_SLOTS.map((s) => {
            const itemId = equip[s.id];
            const item = itemId ? EQUIPMENT[itemId] : null;
            return (
              <div key={s.id} className="bg-bg border border-border rounded-md px-2 py-1.5">
                <p className="text-[10px] uppercase tracking-wide text-muted">{s.label}</p>
                <p className="text-xs truncate text-fg/90">{item ? item.name : "Vazio"}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Backpack overview: this hero's potions/gazuas plus the party's shared weapon stash. */
export function BackpackScreen({
  heroName,
  save,
  onClose,
  onSwitchToDoll,
}: {
  heroName: string;
  save: SaveData;
  onClose: () => void;
  onSwitchToDoll?: () => void;
}) {
  const bag = save.bags[heroName] ?? EMPTY_BAG;
  const weaponEntries = Object.entries(save.weapons);

  return (
    <div
      className="absolute inset-0 z-40 bg-bg/85 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md max-h-[88dvh] overflow-y-auto bg-surface border border-border rounded-xl p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <p className="font-display text-xl leading-tight">Mochila</p>
            <p className="text-xs text-muted">{heroName}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {onSwitchToDoll && (
              <button type="button" onClick={onSwitchToDoll} className="h-8 px-2.5 rounded-md border border-border text-xs">
                Equipamento
              </button>
            )}
            <button type="button" onClick={onClose} className="size-8 grid place-items-center rounded-md border border-border" aria-label="Fechar">
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between bg-bg border border-border rounded-md px-2 py-1.5">
            <p className="text-sm">Ember</p>
            <p className="text-sm tabular-nums text-muted">×{save.ember ?? 0}</p>
          </div>
          {POTIONS.map((kind) => (
            <div key={kind} className="flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5">
              <img src={`/game/icons/potion-${kind}.png`} alt="" className="size-6 rounded-sm object-cover shrink-0" />
              <p className="flex-1 text-sm truncate">{potionLabel(kind)}</p>
              <p className="text-sm tabular-nums text-muted">×{bag[kind] ?? 0}</p>
            </div>
          ))}
          <div className="flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5">
            <img src="/game/icons/lockpick.png" alt="" className="size-6 rounded-sm object-cover shrink-0" />
            <p className="flex-1 text-sm truncate">Gazua</p>
            <p className="text-sm tabular-nums text-muted">×{bag.lockpick ?? 0}</p>
          </div>
        </div>

        {weaponEntries.length > 0 && (
          <>
            <p className="text-xs uppercase tracking-[0.18em] text-muted mt-4 mb-2">Armas do grupo</p>
            <div className="flex flex-col gap-1.5">
              {weaponEntries.map(([id, enh]) => {
                const w = WEAPONS[id];
                if (!w) return null;
                const wielder = Object.entries(save.equipped).find(([, v]) => v === id)?.[0];
                return (
                  <div key={id} className="flex items-center gap-1.5 bg-bg border border-border rounded-md px-2 py-1.5">
                    <img src={weaponIcon(id)} alt="" className="size-6 rounded-sm object-cover shrink-0" />
                    <p className="flex-1 text-sm truncate">
                      {w.name} {enh > 0 ? `+${enh}` : ""}
                    </p>
                    <p className="text-[11px] text-muted shrink-0">{wielder ? `em ${wielder}` : "reserva"}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
