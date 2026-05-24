"use client";

import { motion } from "framer-motion";
import { IconChevronDown, IconSparkles } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { TarotCardArt } from "@/components/ui/TarotCardArt";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-24 px-5 md:px-10 overflow-hidden"
    >
      {/* Red blood glow — bottom-right behind cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(178, 34, 34, 0.32) 0%, rgba(139, 0, 0, 0.18) 35%, transparent 70%)",
        }}
      />
      {/* Secondary red glow — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 0, 0, 0.22) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* LEFT — copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-7 relative z-10 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-primary/70" />
            <span className="font-display text-[10px] md:text-xs tracking-[0.4em] uppercase flex items-center gap-2">
              <IconSparkles size={12} stroke={1.5} className="text-gold-primary" />
              <span className="text-red-glow">Certified Tarot Reader</span>
              <IconSparkles size={12} stroke={1.5} className="text-gold-primary" />
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-primary/70" />
          </div>

          <h1 className="font-display font-semibold leading-[1.05] tracking-tight text-balance text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-gold-gradient">Discover What the</span>
            <span className="block shimmer-gold">Cards Whisper</span>
            <span className="block text-gold-gradient">About You</span>
          </h1>

          {/* gold-to-red accent bar */}
          <div className="mt-7 h-[2px] w-16 rounded-full bg-gradient-to-r from-gold-primary via-gold-soft to-red-accent" />

          <p className="mt-6 max-w-xl font-serif text-lg md:text-xl text-mystic-mist text-pretty">
            Where the stars speak through the cards — guided readings for love,
            career, marriage and the questions you carry quietly.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button as="a" href="#contact" size="lg">
              Book a Reading
            </Button>
            <Button as="a" href="#how" variant="outline-red" size="lg">
              How It Works
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3 text-mystic-mist max-w-md sm:max-w-none">
            <Stat n="2000+" label="Readings" />
            <Dot />
            <Stat n="4.9★" label="Avg. Rating" />
            <Dot />
            <Stat n="8+ Yrs" label="Experience" />
            <Dot />
            <Stat n="12" label="Certifications" />
          </div>
        </motion.div>

        {/* RIGHT — card stage */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          <CardStage />
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-mystic-mist hover:text-gold-soft transition-colors whitespace-nowrap px-4"
      >
        <span className="font-display text-[10px] tracking-[0.4em] uppercase">
          Scroll to begin your journey
        </span>
        <IconChevronDown size={16} stroke={1.5} className="animate-bounce" />
      </a>
    </section>
  );
}

function CardStage() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] h-[280px] sm:h-[360px] lg:h-[440px]">
      {/* soft radial gold glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(232, 197, 71, 0.28) 0%, rgba(212, 175, 55, 0.12) 35%, rgba(139, 0, 0, 0.08) 60%, transparent 80%)",
        }}
      />

      {/* gold drifting particles */}
      {[
        { top: "12%", left: "18%", size: 4, delay: 0 },
        { top: "70%", left: "22%", size: 3, delay: 1.2 },
        { top: "20%", left: "82%", size: 5, delay: 0.6 },
        { top: "82%", left: "78%", size: 3, delay: 2 },
        { top: "45%", left: "8%", size: 2, delay: 1.8 },
        { top: "55%", left: "92%", size: 2, delay: 0.4 },
      ].map((p, i) => (
        <span
          key={i}
          className="pointer-events-none absolute rounded-full bg-gold-soft animate-drift-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            filter: "blur(1px)",
            boxShadow: "0 0 8px rgba(232, 197, 71, 0.8)",
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* MOBILE — single center card */}
      <div className="absolute inset-0 lg:hidden flex items-center justify-center">
        <FannedCard
          symbol="pentacles"
          rotate={0}
          offsetX={0}
          delay={0.2}
          mobile
        />
      </div>

      {/* DESKTOP — fanned 3 cards */}
      <div className="hidden lg:flex absolute inset-0 items-center justify-center">
        <FannedCard
          symbol="moon"
          rotate={-12}
          offsetX={-130}
          delay={0}
          z={1}
        />
        <FannedCard
          symbol="pentacles"
          rotate={0}
          offsetX={0}
          delay={0.5}
          z={3}
          featured
        />
        <FannedCard
          symbol="magician"
          rotate={12}
          offsetX={130}
          delay={1}
          z={2}
        />
      </div>
    </div>
  );
}

function FannedCard({
  symbol,
  rotate,
  offsetX,
  delay,
  z = 1,
  featured = false,
  mobile = false,
}: {
  symbol: "moon" | "star" | "sun" | "pentacles" | "magician";
  rotate: number;
  offsetX: number;
  delay: number;
  z?: number;
  featured?: boolean;
  mobile?: boolean;
}) {
  const widthClass = mobile ? "w-[160px]" : "w-[200px] xl:w-[220px]";
  const glowClass = featured
    ? "drop-shadow-[0_0_35px_rgba(232,197,71,0.55)]"
    : "drop-shadow-[0_0_22px_rgba(139,0,0,0.4)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotate * 1.6 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 1.1, delay: 0.2 + delay, ease: "easeOut" }}
      style={{
        position: "absolute",
        zIndex: z,
        transform: `translateX(${offsetX}px) rotate(${rotate}deg)`,
      }}
      className={`${widthClass} ${glowClass}`}
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 4 + delay * 0.8,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <TarotCardArt symbol={symbol} />
      </motion.div>
    </motion.div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-lg sm:text-xl text-gold-soft">{n}</span>
      <span className="text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em]">{label}</span>
    </div>
  );
}

function Dot() {
  return <span className="hidden sm:block h-1 w-1 rounded-full bg-gold-primary/60" />;
}
