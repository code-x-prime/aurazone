"use client";

import { useEffect, useState } from "react";
import { IconMenu2, IconX, IconMoon } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#zodiac", label: "Zodiac" },
  { href: "#card", label: "Readings" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-galaxy-black/85 backdrop-blur-xl border-b border-gold-primary/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10 py-4">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Aurazone home"
          >
            <IconMoon
              size={20}
              stroke={1.5}
              className="text-gold-primary transition-transform group-hover:rotate-12"
            />
            <span className="font-display text-lg md:text-xl tracking-[0.3em] text-gold-gradient font-semibold">
              AURAZONE
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-[11px] tracking-[0.3em] uppercase text-mystic-mist hover:text-gold-soft transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button as="a" href="#contact" size="sm">
              Book a Reading
            </Button>
          </div>

          <button
            className="md:hidden text-gold-soft p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX size={24} stroke={1.5} /> : <IconMenu2 size={24} stroke={1.5} />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-galaxy-black/95 backdrop-blur-2xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, rgba(45,27,78,0.8) 0%, transparent 70%), radial-gradient(ellipse at bottom right, rgba(139,0,0,0.3) 0%, transparent 70%)",
          }}
        />
        <ul className="relative flex flex-col items-center justify-center h-full gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-[0.3em] uppercase text-gold-gradient"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <Button as="a" href="#contact" size="md" onClick={() => setOpen(false)}>
              Book a Reading
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
