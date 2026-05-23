export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="noise-bg pointer-events-none fixed inset-0 z-[1] opacity-[0.04] mix-blend-overlay"
    />
  );
}
