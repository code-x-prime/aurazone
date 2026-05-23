"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const FAQS = [
  {
    q: "How accurate are tarot readings?",
    a: "Tarot is not fortune-telling — it is a mirror. The cards reflect the energies, choices, and patterns currently around you. Clients consistently find the readings strikingly accurate, but the real gift is the clarity to make better-aligned choices.",
  },
  {
    q: "Is this available online?",
    a: "Yes. Most of my sessions happen over WhatsApp video, Google Meet, or Zoom. Distance does not weaken a reading. I have clients across India, the UK, the US, the UAE and Australia.",
  },
  {
    q: "Will my information stay private?",
    a: "Always. Every reading is held in complete confidence. I do not record sessions, share names, or discuss your questions with anyone. What you bring to the cards stays between us.",
  },
  {
    q: "How long does a session last?",
    a: "Single-question readings are around 25 minutes. Full readings run for 60 minutes. The Complete Soul Map session is 90 minutes plus a follow-up report. We never rush — your reading takes as long as it needs.",
  },
  {
    q: "Do you offer follow-ups?",
    a: "Yes. Every Full Reading includes one short follow-up message within 7 days. The Soul Map package includes 30 days of follow-up access for any clarifying questions.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI (PhonePe, GPay, Paytm), direct bank transfer, and international clients can pay via PayPal or Wise. Payment is taken before the session begins.",
  },
  {
    q: "Can I book a reading for someone else?",
    a: "You can — but I recommend the person being read is present, or at least aware. Readings carry the most weight when the subject of the question is consenting to receive insight.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 md:py-20 px-5 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ Questions Answered ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Things You May Be Wondering
          </h2>
          <div className="mt-8">
            <OrnamentDivider symbol="moon" />
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`glass rounded-xl overflow-hidden transition-colors border-l-2 ${isOpen
                    ? "border-l-red-accent border-gold-primary/60"
                    : "border-l-transparent"
                  }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg text-star-white tracking-wide group-hover:text-gold-soft transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen
                        ? "rotate-45 bg-red-accent/15 border-red-accent/70 text-red-glow"
                        : "border-gold-primary/60 text-gold-soft"
                      }`}
                  >
                    <IconPlus size={16} stroke={1.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-0 text-mystic-mist font-serif text-base md:text-lg leading-relaxed border-t border-gold-primary/20">
                        <div className="pt-4">{f.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
