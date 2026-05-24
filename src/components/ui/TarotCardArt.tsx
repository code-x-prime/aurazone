type Props = {
  symbol: "moon" | "sun" | "star" | "tower" | "lovers" | "pentacles" | "magician";
  label?: string;
  arcana?: string;
  className?: string;
};

export function TarotCardArt({ symbol, label, arcana, className = "" }: Props) {
  return (
    <div
      className={`relative aspect-[2/3] w-full rounded-2xl overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(160deg, #1A0B2E 0%, #2D1B4E 45%, #0A0612 100%)",
      }}
    >
      {/* double gold frame */}
      <div className="absolute inset-1.5 rounded-xl border border-gold-primary/70" />
      <div className="absolute inset-3 rounded-lg border border-gold-soft/40" />

      {/* top label */}
      {label && (
        <div className="absolute top-5 inset-x-0 text-center">
          <p className="font-display text-[10px] tracking-[0.35em] text-gold-soft uppercase">
            {label}
          </p>
        </div>
      )}

      {/* central symbol */}
      <svg
        viewBox="0 0 120 180"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        <defs>
          <radialGradient id={`glow-${symbol}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8C547" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#8B0000" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id={`stroke-${symbol}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F8F4E8" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="90" r="50" fill={`url(#glow-${symbol})`} />

        {symbol === "moon" && (
          <g stroke={`url(#stroke-${symbol})`} strokeWidth="1.5" fill="none">
            <path
              d="M76 90 a18 18 0 1 0 -12 17 A14 14 0 0 1 76 90 Z"
              fill="#E8C547"
              fillOpacity="0.92"
              stroke="#8B6914"
            />
            <circle cx="40" cy="70" r="1.5" fill="#F8F4E8" />
            <circle cx="42" cy="115" r="1.2" fill="#F8F4E8" />
            <circle cx="85" cy="125" r="1" fill="#F8F4E8" />
          </g>
        )}

        {symbol === "sun" && (
          <g>
            <circle cx="60" cy="90" r="18" fill="#E8C547" />
            <circle cx="60" cy="90" r="18" stroke="#8B6914" strokeWidth="1" fill="none" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * Math.PI * 2) / 12;
              const x1 = 60 + Math.cos(a) * 24;
              const y1 = 90 + Math.sin(a) * 24;
              const x2 = 60 + Math.cos(a) * 36;
              const y2 = 90 + Math.sin(a) * 36;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={`url(#stroke-${symbol})`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
        )}

        {symbol === "star" && (
          <g>
            <path
              d="M60 60 L66 82 L88 84 L70 96 L76 118 L60 106 L44 118 L50 96 L32 84 L54 82 Z"
              fill="#E8C547"
              fillOpacity="0.9"
              stroke="#8B6914"
              strokeWidth="1"
            />
            <circle cx="38" cy="60" r="1.2" fill="#F8F4E8" />
            <circle cx="84" cy="65" r="1" fill="#F8F4E8" />
            <circle cx="36" cy="130" r="1.4" fill="#F8F4E8" />
            <circle cx="85" cy="128" r="1.1" fill="#F8F4E8" />
          </g>
        )}

        {symbol === "tower" && (
          <g stroke={`url(#stroke-${symbol})`} strokeWidth="1.4" fill="none">
            <rect x="48" y="60" width="24" height="60" fill="#5C0A0A" fillOpacity="0.7" />
            <path d="M48 60 L60 50 L72 60 Z" fill="#B22222" />
            <line x1="56" y1="75" x2="64" y2="75" />
            <line x1="56" y1="90" x2="64" y2="90" />
            <line x1="56" y1="105" x2="64" y2="105" />
            <path d="M40 70 L48 65 M80 70 L72 65" stroke="#E8C547" strokeWidth="2" />
          </g>
        )}

        {symbol === "lovers" && (
          <g stroke={`url(#stroke-${symbol})`} strokeWidth="1.4" fill="none">
            <circle cx="48" cy="85" r="10" fill="#5C0A0A" fillOpacity="0.5" />
            <circle cx="72" cy="85" r="10" fill="#5C0A0A" fillOpacity="0.5" />
            <path d="M60 70 L60 110" />
            <path
              d="M55 105 Q60 112 65 105 Q65 100 60 100 Q55 100 55 105 Z"
              fill="#E8C547"
            />
          </g>
        )}

        {symbol === "pentacles" && (
          <g>
            {/* outer coin ring — double */}
            <circle cx="60" cy="90" r="26" stroke="#D4AF37" strokeWidth="1.8" fill="#1a0b2e" fillOpacity="0.6" />
            <circle cx="60" cy="90" r="22" stroke="#E8C547" strokeWidth="0.6" fill="none" strokeOpacity="0.5" />
            {/* pentagram — 5 lines connecting every other vertex */}
            {(() => {
              const pts = Array.from({ length: 5 }, (_, i) => {
                const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
                return [60 + 18 * Math.cos(a), 90 + 18 * Math.sin(a)];
              });
              return (
                <polygon
                  points={pts.map((p) => p.join(",")).join(" ")}
                  fill="#E8C547"
                  fillOpacity="0.82"
                  stroke="#8B6914"
                  strokeWidth="0.7"
                  strokeLinejoin="round"
                />
              );
            })()}
            {/* inner coin dot */}
            <circle cx="60" cy="90" r="3.5" fill="#D4AF37" fillOpacity="0.9" />
            {/* ambient sparkles */}
            <circle cx="36" cy="62" r="1.3" fill="#F8F4E8" fillOpacity="0.7" />
            <circle cx="85" cy="66" r="1" fill="#F8F4E8" fillOpacity="0.6" />
            <circle cx="34" cy="120" r="1.4" fill="#F8F4E8" fillOpacity="0.7" />
            <circle cx="87" cy="118" r="1" fill="#F8F4E8" fillOpacity="0.5" />
            <circle cx="60" cy="58" r="0.8" fill="#E8C547" fillOpacity="0.6" />
          </g>
        )}

        {symbol === "magician" && (
          <g>
            {/* infinity / lemniscate above figure */}
            <path
              d="M46 62 C46 56 52 53 58 57 C64 61 68 61 72 57 C76 53 78 56 78 62 C78 68 72 71 66 67 C60 63 56 63 52 67 C48 71 46 68 46 62 Z"
              fill="none"
              stroke="#E8C547"
              strokeWidth="1.4"
              strokeOpacity="0.9"
            />
            {/* wand — vertical staff */}
            <line x1="60" y1="73" x2="60" y2="128" stroke={`url(#stroke-${symbol})`} strokeWidth="1.8" strokeLinecap="round" />
            {/* wand tip star */}
            <circle cx="60" cy="71" r="3.5" fill="#E8C547" fillOpacity="0.95" />
            <line x1="60" y1="65" x2="60" y2="67" stroke="#E8C547" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="55" y1="69" x2="56.5" y2="70" stroke="#E8C547" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="65" y1="69" x2="63.5" y2="70" stroke="#E8C547" strokeWidth="1.2" strokeLinecap="round" />
            {/* arms outstretched */}
            <path d="M60 90 L38 82" stroke={`url(#stroke-${symbol})`} strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M60 90 L82 98" stroke={`url(#stroke-${symbol})`} strokeWidth="1.4" strokeLinecap="round" fill="none" />
            {/* hand symbols */}
            <circle cx="36" cy="81" r="2.5" fill="#D4AF37" fillOpacity="0.8" />
            <circle cx="84" cy="99" r="2" fill="#B22222" fillOpacity="0.8" />
            {/* legs */}
            <line x1="60" y1="128" x2="52" y2="142" stroke={`url(#stroke-${symbol})`} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="60" y1="128" x2="68" y2="142" stroke={`url(#stroke-${symbol})`} strokeWidth="1.4" strokeLinecap="round" />
            {/* ambient sparkles */}
            <circle cx="38" cy="105" r="1.2" fill="#F8F4E8" fillOpacity="0.6" />
            <circle cx="84" cy="72" r="1" fill="#F8F4E8" fillOpacity="0.5" />
            <circle cx="34" cy="130" r="0.8" fill="#E8C547" fillOpacity="0.5" />
          </g>
        )}
      </svg>

      {/* bottom arcana label */}
      {arcana && (
        <div className="absolute bottom-5 inset-x-0 text-center">
          <p className="font-serif text-[10px] text-mystic-mist tracking-wider">
            {arcana}
          </p>
        </div>
      )}

      {/* subtle inner red glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow: "inset 0 0 40px rgba(139, 0, 0, 0.25), inset 0 0 80px rgba(212, 175, 55, 0.08)",
        }}
      />
    </div>
  );
}
