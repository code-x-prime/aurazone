"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { TarotCardArt } from "@/components/ui/TarotCardArt";
import { TAROT_CARDS, type TarotCard } from "@/lib/tarot-cards";
import { IconRotateClockwise } from "@tabler/icons-react";

export function CardOfTheDay() {
  const [drawn, setDrawn] = useState<TarotCard | null>(null);
  const [flipping, setFlipping] = useState(false);

  const pull = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      const next = TAROT_CARDS[Math.floor(Math.random() * TAROT_CARDS.length)];
      setDrawn(next);
      setFlipping(false);
    }, 700);
  };

  const reset = () => setDrawn(null);

  return (
    <section id="card" className="relative py-16 md:py-20 px-5 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ A Whisper for Today ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Pull Your Card of the Day
          </h2>
          <p className="mt-4 font-serif text-xl md:text-2xl text-mystic-mist max-w-2xl mx-auto">
            Set your question quietly in your mind, then draw. Let the cards
            offer a single line for the day ahead.
          </p>
          <div className="mt-8">
            <OrnamentDivider symbol="eye" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Card stage */}
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="relative aspect-[2/3] [perspective:1500px]">
              <motion.div
                className="absolute inset-0 [transform-style:preserve-3d]"
                animate={{ rotateY: drawn ? 180 : 0 }}
                transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              >
                {/* Back face */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <CardBack />
                </div>
                {/* Front face */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  {drawn && (
                    <TarotCardArt
                      symbol={drawn.symbol}
                      label={drawn.name}
                      arcana={drawn.arcana}
                    />
                  )}
                </div>
              </motion.div>
            </div>

            {/* glow under card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 w-44 rounded-full bg-gold-primary/30 blur-2xl" />
          </div>

          {/* Meaning + CTAs */}
          <div className="min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!drawn ? (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-center md:text-left"
                >
                  <p className="font-serif text-mystic-mist text-lg leading-relaxed mb-6">
                    Close your eyes. Take three slow breaths. When you are
                    ready, pull a card and read its meaning as if it were
                    written for you.
                  </p>
                  <Button onClick={pull} size="lg" disabled={flipping}>
                    {flipping ? "Drawing..." : "Pull a Card"}
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={drawn.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center md:text-left"
                >
                  <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-2">
                    {drawn.arcana}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-gold-gradient mb-3">
                    {drawn.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
                    {drawn.keywords.map((k) => (
                      <span
                        key={k}
                        className="text-[10px] tracking-[0.2em] uppercase border border-gold-primary/40 rounded-full px-3 py-1 text-mystic-mist"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                  <p className="font-serif text-lg text-mystic-mist leading-relaxed mb-7">
                    “{drawn.meaning}”
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Button as="a" href="#contact" size="md">
                      Get a Full Reading
                    </Button>
                    <Button onClick={reset} variant="outline" size="md" icon={<IconRotateClockwise size={14} stroke={1.5} />}>
                      Draw Again
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardBack() {
  return (
    <div
      className="relative h-full w-full rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #5C0A0A 0%, #1A0B2E 50%, #0A0612 100%)",
      }}
    >
      <div className="absolute inset-1.5 rounded-xl border border-gold-primary/80" />
      <div className="absolute inset-3 rounded-lg border border-gold-soft/40" />
      <svg viewBox="0 0 120 180" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="back-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8C547" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="90" r="55" fill="url(#back-glow)" />
        {/* center mandala */}
        <g stroke="#D4AF37" strokeWidth="0.8" fill="none">
          <circle cx="60" cy="90" r="28" />
          <circle cx="60" cy="90" r="20" />
          <circle cx="60" cy="90" r="12" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 8;
            return (
              <line
                key={i}
                x1={60 + Math.cos(a) * 12}
                y1={90 + Math.sin(a) * 12}
                x2={60 + Math.cos(a) * 28}
                y2={90 + Math.sin(a) * 28}
              />
            );
          })}
          <path
            d="M60 78 L63 87 L72 87 L65 92 L67 101 L60 96 L53 101 L55 92 L48 87 L57 87 Z"
            fill="#E8C547"
            fillOpacity="0.8"
          />
        </g>
        {/* corner stars */}
        {[
          [22, 35],
          [98, 35],
          [22, 145],
          [98, 145],
        ].map(([x, y], i) => (
          <path
            key={i}
            d={`M${x} ${y - 4} L${x + 1.5} ${y - 1} L${x + 5} ${y} L${x + 1.5} ${y + 1} L${x} ${y + 4} L${x - 1.5} ${y + 1} L${x - 5} ${y} L${x - 1.5} ${y - 1} Z`}
            fill="#E8C547"
          />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-6 text-center">
        <p className="font-display text-[9px] tracking-[0.4em] uppercase text-gold-soft">
          Aurazone
        </p>
      </div>
    </div>
  );
}
