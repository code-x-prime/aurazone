"use client";

import { motion } from "framer-motion";
import {
  IconCheck,
  IconMoon,
  IconStar,
  IconSun,
  type Icon as TablerIcon,
} from "@tabler/icons-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";

type Pack = {
  eyebrow: string;
  name: string;
  tagline: string;
  duration: string;
  features: string[];
  cta: string;
  whatsappText: string;
  ornament: TablerIcon;
  featured?: boolean;
};

const WA = (msg: string) =>
  `https://wa.me/919999627129?text=${encodeURIComponent(msg)}`;

const PACKS: Pack[] = [
  {
    eyebrow: "For Focused Clarity",
    name: "Single Question",
    tagline: "For one quiet, honest question.",
    duration: "25 min session",
    features: [
      "1 focused question",
      "3-card spread",
      "Live audio or chat reading",
      "Short voice-note summary",
    ],
    cta: "Enquire Now",
    whatsappText:
      "Hi Swati, I'd like to enquire about the Single Question reading. Could you share the details?",
    ornament: IconMoon,
  },
  {
    eyebrow: "Most Chosen",
    name: "Full Reading",
    tagline: "A complete look across life areas.",
    duration: "60 min session",
    features: [
      "Up to 4 life areas",
      "Detailed Celtic Cross spread",
      "Video call session",
      "Written summary + audio note",
      "One follow-up message within 7 days",
    ],
    cta: "Book a Consultation",
    whatsappText:
      "Hi Swati, I'd like to book a Full Reading consultation. Please share the details and timing.",
    ornament: IconStar,
    featured: true,
  },
  {
    eyebrow: "Deepest Journey",
    name: "Complete Soul Map",
    tagline: "The deepest journey we offer together.",
    duration: "90 min + report",
    features: [
      "Birth chart + tarot synthesis",
      "Past-life thread reading",
      "Numerology overlay",
      "Custom healing practice",
      "PDF soul-map report",
      "30-day follow-up access",
    ],
    cta: "Request Details",
    whatsappText:
      "Hi Swati, I'd like to request details about the Complete Soul Map experience.",
    ornament: IconSun,
  },
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
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ Sacred Packages ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Choose Your Path
          </h2>
          <p className="mt-4 font-serif text-lg md:text-xl text-mystic-mist max-w-2xl mx-auto tracking-wide">
            Three crafted experiences — each tailored to where you are in your
            journey. Reach out for a personalised quote.
          </p>
          <div className="mt-8">
            <OrnamentDivider symbol="star" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-6 gap-x-6 lg:gap-x-8 items-stretch pt-6">
          {PACKS.map((p, i) => {
            const Ornament = p.ornament;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative ${p.featured ? "md:-translate-y-4" : ""}`}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span
                      className="inline-block text-galaxy-black font-display text-[10px] tracking-[0.3em] uppercase px-5 py-1.5 rounded-full font-bold whitespace-nowrap"
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
                )}
                <GlassCard
                  interactive
                  className={`h-full flex flex-col ${
                    p.featured
                      ? "!border-2 !border-red-accent/60 shadow-red-glow pt-10 relative overflow-hidden"
                      : ""
                  }`}
                  style={
                    p.featured
                      ? {
                          backgroundImage:
                            "linear-gradient(180deg, rgba(178, 34, 34, 0.22) 0%, rgba(26, 11, 46, 0) 60%)",
                        }
                      : undefined
                  }
                >
                  <p className="font-display text-[10px] tracking-[0.35em] uppercase text-gold-soft/80 mb-2">
                    {p.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl text-star-white tracking-wide">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-serif text-sm text-mystic-mist">
                    {p.tagline}
                  </p>

                  {/* Ornament + duration badge */}
                  <div className="my-7 flex flex-col items-center gap-3">
                    <Ornament
                      size={22}
                      stroke={1.4}
                      className="text-gold-soft/80"
                    />
                    <span className="inline-flex items-center gap-2 border border-gold-primary/50 rounded-full px-4 py-1.5 font-display text-[10px] tracking-[0.3em] uppercase text-gold-soft">
                      <span className="h-1 w-1 rounded-full bg-gold-soft" />
                      {p.duration}
                    </span>
                  </div>

                  <div className="ornament-line mb-6" />

                  <ul className="space-y-3 flex-1">
                    {p.features.map((f) => (
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

                  <div className="mt-8">
                    <Button
                      as="a"
                      href={WA(p.whatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={p.featured ? "primary" : "outline-red"}
                      size="md"
                      className="w-full"
                    >
                      {p.cta}
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-center font-serif text-sm text-mystic-mist/80 max-w-xl mx-auto">
          All sessions are conducted privately, online or in person. Pricing
          shared on enquiry to ensure the right fit for your needs.
        </p>
      </div>
    </section>
  );
}
