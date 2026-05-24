"use client";

import { motion } from "framer-motion";
import { IconCheck, IconVideo, IconMessage } from "@tabler/icons-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";

const WA = (msg: string) =>
  `https://wa.me/919999627129?text=${encodeURIComponent(msg)}`;

const FEATURES = [
  "Up to 4 life areas",
  "Detailed Celtic Cross spread",
  "Ace of Pentacles & Magician guidance",
  "Written summary + audio note",
  "One follow-up message within 7 days",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative pt-16 md:pt-20 pb-24 md:pb-32 px-5 md:px-10 overflow-hidden">
      {/* Centered red bg blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[700px] w-[700px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(178, 34, 34, 0.18) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ Sacred Packages ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Choose Your Path
          </h2>
          <p className="mt-4 font-serif text-lg md:text-xl text-mystic-mist max-w-2xl mx-auto tracking-wide">
            One complete reading — tailored to where you are in your journey.
          </p>
          <div className="mt-8">
            <OrnamentDivider symbol="star" />
          </div>
        </div>

        {/* Single card — centered, max-width constrained */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl"
        >
          {/* Most Popular badge */}
          <div className="flex justify-center mb-0 relative z-20">
            <span
              className="inline-block text-galaxy-black font-display text-[10px] tracking-[0.3em] uppercase px-6 py-2 rounded-full font-bold whitespace-nowrap -mb-3 relative z-20"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #E8C547 0%, #D4AF37 50%, #B22222 100%)",
                boxShadow:
                  "0 0 24px rgba(212, 175, 55, 0.45), 0 0 40px rgba(178, 34, 34, 0.35)",
              }}
            >
              Most Popular
            </span>
          </div>

          <GlassCard
            interactive
            className="!border-2 !border-red-accent/60 shadow-red-glow pt-12 pb-10 px-8 md:px-12 relative overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(178, 34, 34, 0.22) 0%, rgba(26, 11, 46, 0) 60%)",
            }}
          >
            {/* Eyebrow + name */}
            <div className="text-center mb-6">
              <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gold-soft/80 mb-2">
                Most Chosen
              </p>
              <h3 className="font-display text-4xl md:text-5xl text-star-white tracking-wide">
                Full Reading
              </h3>
              <p className="mt-3 font-serif text-base text-mystic-mist max-w-md mx-auto">
                A complete look across life areas — honest, grounded, and deeply personal.
              </p>
            </div>

            <div className="ornament-line my-8" />

            {/* Pricing tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* Without video */}
              <div
                className="rounded-xl border border-gold-primary/40 p-5 flex flex-col items-center gap-2 text-center"
                style={{
                  background: "rgba(212, 175, 55, 0.06)",
                }}
              >
                <IconMessage size={22} stroke={1.4} className="text-gold-soft" />
                <span className="font-display text-[9px] tracking-[0.3em] uppercase text-mystic-mist">
                  Chat / Audio
                </span>
                <span className="font-display text-4xl text-gold-gradient font-semibold">
                  ₹2,220
                </span>
                <span className="text-[11px] text-mystic-mist/70 font-serif">
                  Written + audio note included
                </span>
              </div>

              {/* With video */}
              <div
                className="rounded-xl border border-red-accent/60 p-5 flex flex-col items-center gap-2 text-center relative"
                style={{
                  background: "rgba(178, 34, 34, 0.10)",
                  boxShadow: "0 0 20px rgba(178, 34, 34, 0.18)",
                }}
              >
                <IconVideo size={22} stroke={1.4} className="text-red-glow" />
                <span className="font-display text-[9px] tracking-[0.3em] uppercase text-mystic-mist">
                  1 Hr Video Call
                </span>
                <span className="font-display text-4xl text-red-glow font-semibold">
                  ₹6,000
                </span>
                <span className="text-[11px] text-mystic-mist/70 font-serif">
                  Live face-to-face session
                </span>
              </div>
            </div>

            {/* Features list */}
            <ul className="space-y-3.5 mb-10">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-mystic-mist"
                >
                  <IconCheck
                    size={16}
                    stroke={2.2}
                    className="mt-0.5 text-gold-soft flex-shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                as="a"
                href={WA("Hi Swati, I'd like to book a Full Reading (Chat/Audio) for ₹2,220. Please share the details and timing.")}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-red"
                size="md"
                className="w-full"
              >
                Book Chat / Audio
              </Button>
              <Button
                as="a"
                href={WA("Hi Swati, I'd like to book a Full Reading with Video Call for ₹6,000. Please share the details and timing.")}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="w-full"
              >
                Book Video Call
              </Button>
            </div>
          </GlassCard>
        </motion.div>

        <p className="mt-12 text-center font-serif text-sm text-mystic-mist/80 max-w-xl mx-auto">
          All sessions are conducted privately, online or in person. Reach out on
          WhatsApp to confirm timing.
        </p>
      </div>
    </section>
  );
}
