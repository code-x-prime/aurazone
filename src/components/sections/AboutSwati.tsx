"use client";

import { motion } from "framer-motion";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const ZODIAC_GLYPHS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

export function AboutSwati() {
  return (
    <section id="about" className="relative py-16 md:py-20 px-5 md:px-10 overflow-hidden">
      {/* Red ambient blob — top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 h-[500px] w-[500px] rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"
        style={{
          background:
            "radial-gradient(circle, rgba(178, 34, 34, 0.18) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ The Founder ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Meet Swati bhatt
          </h2>
          <p className="mt-4 font-serif text-xl md:text-2xl text-mystic-mist">
            Your guide through the cosmic veil
          </p>
          <div className="mt-8">
            <OrnamentDivider symbol="star" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait with orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px]">
              {/* outer orbit with zodiac glyphs — percentage-positioned */}
              <div className="absolute inset-0 animate-spin-slow">
                {ZODIAC_GLYPHS.map((g, i) => {
                  const angle = (i / ZODIAC_GLYPHS.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = 48; // % from center
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  return (
                    <span
                      key={g}
                      className="absolute flex items-center justify-center font-display text-gold-soft/80 text-base sm:text-lg w-7 h-7 sm:w-9 sm:h-9 even:hidden sm:even:flex"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {g}
                    </span>
                  );
                })}
              </div>

              {/* outer ring — deep red */}
              <div
                className="absolute left-[12%] top-[12%] right-[12%] bottom-[12%] rounded-full border-2 border-red-accent/80"
                style={{ boxShadow: "0 0 28px rgba(178, 34, 34, 0.45), inset 0 0 18px rgba(178, 34, 34, 0.18)" }}
              />
              {/* inner ring — gold */}
              <div className="absolute left-[18%] top-[18%] right-[18%] bottom-[18%] rounded-full border border-gold-primary/70 shadow-gold-glow" />

              {/* portrait placeholder — gradient + initials (60% of container) */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #2D1B4E 0%, #1A0B2E 60%, #0A0612 100%)",
                }}
              >
                <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-gold-gradient">
                  SB
                </span>
                <span className="absolute bottom-[15%] font-serif text-[10px] sm:text-xs text-mystic-mist tracking-widest">
                  Swati bhatt
                </span>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-mystic-mist text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-display text-2xl text-gold-soft float-left  leading-none">
                  E
                </span>
                ight years ago, I sat across from my first client — a woman who
                had walked into my life with more questions than answers. By the
                end of our session, neither of us spoke for a long while. That
                quiet was the moment I knew this work had chosen me.
              </p>
              <p>
                Today, with twelve certifications across tarot, numerology and
                energy healing — and more than two thousand souls guided — my
                purpose remains the same: to hold space where the cards can
                speak honestly, and you can listen without fear.
              </p>
              <p>
                A reading with me is never a script of predictions. It is a
                conversation between your intuition, the cards, and the quieter
                wisdom most of us forget to ask. Whether you come for love,
                career, marriage, or simply to understand why a season feels the
                way it does — you will leave with clarity, and a small piece of
                yourself returned.
              </p>
            </div>

            {/* Stats — alternating gold/red */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: "8+", l: "Years", red: false },
                { n: "2000+", l: "Clients", red: true },
                { n: "12", l: "Certifications", red: false },
                { n: "4.9★", l: "Rating", red: true },
              ].map((s) => (
                <div
                  key={s.l}
                  className={`text-center md:text-left border-l-2 pl-4 ${s.red ? "border-red-accent/60" : "border-gold-primary/40"
                    }`}
                >
                  <div
                    className={`font-display text-3xl ${s.red ? "text-red-glow" : "text-gold-gradient"
                      }`}
                  >
                    {s.n}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-mystic-mist mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-4">
              <svg width="160" height="48" viewBox="0 0 160 48" className="text-gold-soft">
                <path
                  d="M5 35 Q15 10, 28 30 T55 25 Q70 18, 80 30 Q90 38, 105 22 T140 28 L155 24"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="155" cy="24" r="2" fill="currentColor" />
              </svg>
              <span className="font-serif text-mystic-mist text-sm">
                — Swati
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
