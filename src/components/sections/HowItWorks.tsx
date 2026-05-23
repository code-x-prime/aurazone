"use client";

import { motion } from "framer-motion";
import {
  IconMessageCircle2,
  IconQuestionMark,
  IconVideo,
  IconBook,
  type Icon as TablerIcon,
} from "@tabler/icons-react";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const STEPS: {
  n: string;
  title: string;
  blurb: string;
  Icon: TablerIcon;
}[] = [
    {
      n: "01",
      title: "Reach Out",
      blurb: "Send a message on WhatsApp or fill the form. We start with a short reply.",
      Icon: IconMessageCircle2,
    },
    {
      n: "02",
      title: "Share Your Question",
      blurb: "Tell me what you are seeking clarity on. Specific or open — both work.",
      Icon: IconQuestionMark,
    },
    {
      n: "03",
      title: "Live Reading Session",
      blurb: "We meet over video or phone. Cards are pulled. Your reading begins.",
      Icon: IconVideo,
    },
    {
      n: "04",
      title: "Receive Your Guidance",
      blurb: "A written summary and audio note follow — yours to return to anytime.",
      Icon: IconBook,
    },
  ];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-16 md:py-20 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ The Process ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Your Journey, Step by Step
          </h2>
          <p className="mt-4 font-serif text-xl md:text-2xl text-mystic-mist tracking-wide">
            Honest, simple, sacred.
          </p>
          <div className="mt-8">
            <OrnamentDivider symbol="sun" />
          </div>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-10 left-[10%] right-[10%] border-t border-dashed border-gold-primary/40"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {STEPS.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full glass-strong border border-gold-primary/60 flex items-center justify-center shadow-gold-glow">
                      <Icon size={28} stroke={1.5} className="text-gold-soft" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gold-gradient text-galaxy-black font-display text-xs flex items-center justify-center font-bold">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg text-star-white tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-mystic-mist max-w-[220px] leading-relaxed">
                    {s.blurb}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
