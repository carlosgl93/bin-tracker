// Single source of truth for unit conversions.
// See PRD section 12: section 12 del PRD.
export const KG_PER_BIN = 700;
export const KG_PER_DRUM = 240;

export function binsToKgs(bins: number, factor: number = KG_PER_BIN): number {
  return (bins || 0) * factor;
}

export function drumsToKgs(drums: number, factor: number = KG_PER_DRUM): number {
  return (drums || 0) * factor;
}
