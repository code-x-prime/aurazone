"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZODIAC_SIGNS } from "@/lib/zodiac-signs";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const WA = (msg: string) =>
  `https://wa.me/919999627129?text=${encodeURIComponent(msg)}`;

const ELEMENT_TINT: Record<string, string> = {
  Fire: "rgba(178, 34, 34, 0.35)",
  Earth: "rgba(139, 105, 20, 0.35)",
  Air: "rgba(201, 184, 168, 0.3)",
  Water: "rgba(45, 27, 78, 0.45)",
};

export function CosmicBlueprint() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="zodiac" className="relative py-20 md:py-28 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ Know Your Stars ✦
          </p>
          <h2
            className="font-display text-4xl md:text-6xl text-gold-gradient"
            style={{ textShadow: "0 0 40px rgba(178, 34, 34, 0.35)" }}
          >
            Your Cosmic Blueprint
          </h2>
          <p className="mt-4 font-serif text-base md:text-lg text-mystic-mist max-w-2xl mx-auto leading-relaxed tracking-wide">
            Every soul carries the signature of the stars they were born under.
            Discover the energy that shapes your path.
          </p>
          <div className="mt-8">
            <OrnamentDivider symbol="star" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {ZODIAC_SIGNS.map((sign, i) => {
            const Icon = sign.icon;
            const isActive = selected === i;
            return (
              <motion.button
                key={sign.name}
                onClick={() => setSelected(isActive ? null : i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                aria-expanded={isActive}
                className={`group relative text-left rounded-2xl p-4 sm:p-5 backdrop-blur-md bg-galaxy-deep/40 border transition-all duration-300 ${
                  isActive
                    ? "border-2 border-red-accent shadow-red-glow"
                    : "border-gold-primary/25 hover:border-gold-primary/70 hover:shadow-gold-glow"
                }`}
              >
                {/* corner ornaments */}
                <span className="pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 border-t border-l border-gold-soft/70 rounded-tl-2xl" />
                <span className="pointer-events-none absolute -top-px -right-px h-2.5 w-2.5 border-t border-r border-gold-soft/70 rounded-tr-2xl" />
                <span className="pointer-events-none absolute -bottom-px -left-px h-2.5 w-2.5 border-b border-l border-gold-soft/70 rounded-bl-2xl" />
                <span className="pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-gold-soft/70 rounded-br-2xl" />

                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className="relative">
                    <div
                      className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                      style={{ background: ELEMENT_TINT[sign.element] }}
                    />
                    <Icon
                      size={44}
                      stroke={1.3}
                      className={`relative transition-transform duration-700 group-hover:rotate-[360deg] ${
                        sign.element === "Fire"
                          ? "text-red-glow group-hover:text-red-luminous"
                          : "text-gold-primary group-hover:text-gold-soft"
                      }`}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-display text-lg sm:text-xl text-center text-star-white tracking-wide">
                  {sign.name}
                </h3>

                {/* Dates */}
                <p className="text-center text-[9px] sm:text-[10px] tracking-[0.25em] text-gold-primary/80 uppercase mt-1 mb-3 font-display">
                  {sign.dates}
                </p>

                {/* Trait */}
                <p className="font-serif text-xs sm:text-sm text-center text-mystic-mist leading-relaxed">
                  {sign.trait}
                </p>

                {/* Expanded panel */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-gold-primary/25">
                        <p className="font-serif text-xs sm:text-sm text-mystic-mist leading-relaxed mb-4">
                          {sign.description}
                        </p>
                        <a
                          href={WA(
                            `Hi Swati, I'm a ${sign.name} and I'd like a personalised reading.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="block text-center text-[10px] tracking-[0.3em] uppercase text-gold-soft hover:text-galaxy-black border border-gold-primary/50 hover:bg-gold-gradient hover:border-transparent rounded-full py-2 transition-all"
                        >
                          Get My Reading →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-serif text-mystic-mist mb-5 tracking-wide">
            Want a deeper look into your unique chart?
          </p>
          <a
            href={WA(
              "Hi Swati, I'd like a personalised birth chart reading. Please share the details."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full font-display uppercase transition-all duration-300 ease-out px-8 py-4 text-sm tracking-[0.25em] bg-gold-red-gradient text-galaxy-black font-semibold shadow-gold-glow hover:shadow-red-glow hover:scale-[1.03]"
          >
            Request Your Full Chart
          </a>
        </div>
      </div>
    </section>
  );
}
