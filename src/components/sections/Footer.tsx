import Image from "next/image";
import {
  IconMoon,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const QUICK_LINKS = [
  { href: "#about", label: "About Swati" },
  { href: "#services", label: "Services" },
  { href: "#card", label: "Card of the Day" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const SERVICE_LINKS = [
  "Love & Relationships",
  "Career & Finance",
  "Marriage Compatibility",
  "Past Life Reading",
  "Spiritual Healing",
  "Birth Chart Analysis",
];

const SOCIALS = [
  { href: "https://www.instagram.com/aurazone0006", label: "Instagram", icon: IconBrandInstagram },
  { href: "https://wa.me/919999627129", label: "WhatsApp", icon: IconBrandWhatsapp },
];

export function Footer() {
  return (
    <footer className="relative bg-galaxy-black/80 border-t border-gold-primary/30 mt-20">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.9) 25%, rgba(178, 34, 34, 0.95) 50%, rgba(212, 175, 55, 0.9) 75%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Aurazone"
                width={52}
                height={52}
                className="rounded-full object-cover ring-2 ring-gold-primary/50"
              />
              <span className="font-display text-xl tracking-[0.3em] text-gold-gradient font-semibold">
                AURAZONE
              </span>
            </div>
            <p className="font-serif text-mystic-mist text-sm leading-relaxed">
              Where the stars speak through the cards. Certified tarot readings
              and spiritual guidance by Swati bhatt.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s, i) => {
                const I = s.icon;
                const isRed = i % 2 === 0;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all ${isRed
                      ? "border-red-accent/70 text-red-glow hover:bg-red-gradient hover:text-star-white hover:border-transparent"
                      : "border-gold-primary/40 text-gold-soft hover:bg-gold-gradient hover:text-galaxy-black hover:border-transparent"
                      }`}
                  >
                    <I size={16} stroke={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-gold-soft mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-mystic-mist hover:text-gold-soft transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-gold-soft mb-5">
              Readings
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#services"
                    className="text-sm text-mystic-mist hover:text-gold-soft transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-gold-soft mb-5">
              Reach Us
            </h4>
            <ul className="space-y-2.5 text-sm text-mystic-mist">
              <li>
                <a href="mailto:aurazone0006@gmail.com" className="hover:text-gold-soft transition-colors break-all">
                  aurazone0006@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919999627129" className="hover:text-gold-soft transition-colors">
                  +91 99996 27129
                </a>
              </li>
              <li className="font-serif">
                Online consultations
                <br />
                worldwide · based in India
              </li>
              <li className="text-[11px] uppercase tracking-[0.25em] pt-2">
                9 AM – 9 PM IST · Daily
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-gold-primary/20 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mystic-mist flex items-center gap-2">
            © 2026 Aurazone · Crafted with intention by Swati bhatt
            <IconMoon size={12} stroke={1.5} className="text-gold-soft inline" />
          </p>
          <div className="flex gap-5 text-[10px] uppercase tracking-[0.3em] text-mystic-mist/70">
            <a href="#" className="hover:text-gold-soft">Privacy</a>
            <a href="#" className="hover:text-gold-soft">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
