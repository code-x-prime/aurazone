"use client";

import { IconStarFilled, IconQuote } from "@tabler/icons-react";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

const ROW_A = TESTIMONIALS.slice(0, 4);
const ROW_B = TESTIMONIALS.slice(4);

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 md:py-20 overflow-hidden">
      {/* Red ambient blob — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"
        style={{
          background:
            "radial-gradient(circle, rgba(178, 34, 34, 0.2) 0%, transparent 65%)",
        }}
      />
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-7xl text-center mb-14">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ In Their Words ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Voices of Those Who Found Clarity
          </h2>
          <div className="mt-8">
            <OrnamentDivider symbol="moon" />
          </div>
        </div>
      </div>

      {/* Row A — scrolls left */}
      <MarqueeRow
        cards={ROW_A}
        direction="left"
        className="mb-6"
      />

      {/* Row B — scrolls right */}
      <MarqueeRow cards={ROW_B} direction="right" />
    </section>
  );
}

function MarqueeRow({
  cards,
  direction,
  className = "",
}: {
  cards: Testimonial[];
  direction: "left" | "right";
  className?: string;
}) {
  // Duplicate twice so seamless loop possible (translateX -50% wraps)
  const looped = [...cards, ...cards];

  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div
        className={`flex gap-6 w-max pause-on-hover`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`flex gap-6 shrink-0 ${direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
            } hover:[animation-play-state:paused]`}
        >
          {looped.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="relative glass rounded-2xl p-5 sm:p-7 w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 hover:border-gold-primary/70 hover:shadow-gold-glow transition-all"
      style={{ willChange: "transform" }}
    >
      <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-t border-l border-gold-soft/80 rounded-tl-2xl" />
      <span className="pointer-events-none absolute -top-px -right-px h-3 w-3 border-t border-r border-gold-soft/80 rounded-tr-2xl" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-gold-soft/80 rounded-bl-2xl" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-gold-soft/80 rounded-br-2xl" />

      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, j) => (
            <IconStarFilled
              key={j}
              size={14}
              className={`sm:hidden ${j % 2 === 0 ? "text-gold-soft" : "text-red-glow"}`}
            />
          ))}
          {Array.from({ length: t.rating }).map((_, j) => (
            <IconStarFilled
              key={`d-${j}`}
              size={16}
              className={`hidden sm:inline ${j % 2 === 0 ? "text-gold-soft" : "text-red-glow"}`}
            />
          ))}
        </div>
        <IconQuote size={22} stroke={1.5} className="text-red-glow/80" />
      </div>

      <p className="font-serif text-mystic-mist text-sm sm:text-base leading-relaxed sm:leading-[1.75] min-h-[140px]">
        {t.text}
      </p>

      <div className="mt-6 pt-5 border-t border-gold-primary/20">
        <div
          className="mb-4 h-px max-w-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(212, 175, 55, 0.9) 0%, rgba(178, 34, 34, 0.9) 50%, rgba(212, 175, 55, 0.9) 100%)",
          }}
        />
        <div className="font-display text-sm text-star-white tracking-[0.15em] uppercase whitespace-nowrap">
          {t.name}
        </div>
        <div className="text-[11px] text-mystic-mist tracking-[0.2em] uppercase mt-1">
          {t.city}
        </div>
      </div>
    </article>
  );
}
