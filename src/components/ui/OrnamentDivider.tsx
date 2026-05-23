type Props = {
  symbol?: "moon" | "sun" | "star" | "eye";
  className?: string;
};

export function OrnamentDivider({ symbol = "moon", className = "" }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-4 w-full max-w-md mx-auto ${className}`}
      aria-hidden="true"
    >
      <span className="flex-1 ornament-line" />
      <svg
        width="46"
        height="22"
        viewBox="0 0 46 22"
        className="text-gold-primary"
        fill="none"
      >
        {/* side stars */}
        <path
          d="M4 11 L6 9 L8 11 L6 13 Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M38 11 L40 9 L42 11 L40 13 Z"
          fill="currentColor"
          opacity="0.7"
        />
        {/* center symbol */}
        {symbol === "moon" && (
          <path
            d="M23 3 a8 8 0 1 0 5.5 13.5 A6.5 6.5 0 0 1 23 3 Z"
            fill="currentColor"
          />
        )}
        {symbol === "sun" && (
          <g>
            <circle cx="23" cy="11" r="4" fill="currentColor" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="23"
                y1="11"
                x2={23 + 8 * Math.cos((deg * Math.PI) / 180)}
                y2={11 + 8 * Math.sin((deg * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="1.2"
              />
            ))}
          </g>
        )}
        {symbol === "star" && (
          <path
            d="M23 2 L25.5 9 L33 9.5 L27 14 L29 21 L23 17 L17 21 L19 14 L13 9.5 L20.5 9 Z"
            fill="currentColor"
          />
        )}
        {symbol === "eye" && (
          <g>
            <path
              d="M14 11 Q23 4 32 11 Q23 18 14 11 Z"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />
            <circle cx="23" cy="11" r="2.4" fill="currentColor" />
          </g>
        )}
      </svg>
      <span className="flex-1 ornament-line" />
    </div>
  );
}
