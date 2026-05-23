"use client";

import { motion } from "framer-motion";
import {
  IconHeartHandshake,
  IconBriefcase,
  IconRings,
  IconHourglass,
  IconFlower,
  IconZodiacLeo,
  type Icon as TablerIcon,
} from "@tabler/icons-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

type Service = {
  title: string;
  blurb: string;
  Icon: TablerIcon;
};

const SERVICES: Service[] = [
  {
    title: "Love & Relationships",
    blurb:
      "Untangle the silent questions about a partner, a connection or a heart that won't settle.",
    Icon: IconHeartHandshake,
  },
  {
    title: "Career & Finance",
    blurb:
      "Clarity on a job change, a business decision, or the path your work is quietly asking you to take.",
    Icon: IconBriefcase,
  },
  {
    title: "Marriage Compatibility",
    blurb:
      "A grounded reading of two energies — what they share, what they will need, and what to honour.",
    Icon: IconRings,
  },
  {
    title: "Past Life Reading",
    blurb:
      "Trace the patterns you've carried in unfamiliar weight — and how to release them in this lifetime.",
    Icon: IconHourglass,
  },
  {
    title: "Spiritual Healing",
    blurb:
      "Quiet, intentional energy work for periods that feel heavy, stuck, or disconnected from yourself.",
    Icon: IconFlower,
  },
  {
    title: "Birth Chart Analysis",
    blurb:
      "A full reading of your natal chart — the map of who you came in as, and who you are becoming.",
    Icon: IconZodiacLeo,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-20 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ Offerings ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Readings &amp; Guidance
          </h2>
          <p className="mt-4 font-serif text-xl md:text-2xl text-mystic-mist tracking-wide">
            Choose the path that calls to you.
          </p>
          <div className="mt-8">
            <OrnamentDivider symbol="moon" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              >
                <GlassCard
                  interactive
                  glowOnHover={false}
                  className="group h-full flex flex-col hover:shadow-[0_0_30px_rgba(212,175,55,0.3),0_0_60px_rgba(178,34,34,0.25)]"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(178, 34, 34, 0.18)" }}
                >
                  <div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold-primary/40 text-gold-primary transition-all duration-700 group-hover:rotate-[360deg] group-hover:border-gold-primary group-hover:text-star-white"
                    style={{
                      filter:
                        "drop-shadow(0 0 12px rgba(212, 175, 55, 0.35)) drop-shadow(0 4px 14px rgba(178, 34, 34, 0.4))",
                    }}
                  >
                    <Icon size={32} stroke={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-star-white tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-mystic-mist leading-relaxed flex-1">
                    {s.blurb}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-gold-primary/20 pt-4">
                    <span className="inline-flex items-center gap-1.5 border border-gold-primary/50 rounded-full px-3 py-1 font-display text-[9px] tracking-[0.25em] uppercase text-gold-soft">
                      <span className="h-1 w-1 rounded-full bg-gold-soft" />
                      Personalised
                    </span>
                    <a
                      href="#contact"
                      className="font-display text-[10px] tracking-[0.3em] uppercase text-gold-soft hover:text-star-white transition-colors"
                    >
                      Enquire →
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
