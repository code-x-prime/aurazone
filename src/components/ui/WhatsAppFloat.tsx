"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const WHATSAPP_URL =
  "https://wa.me/919999627129?text=Hi%20Swati%2C%20I%27m%20interested%20in%20a%20tarot%20reading.%20Could%20you%20share%20the%20details%20and%20pricing%3F";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[60]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-14 w-14 sm:h-16 sm:w-16">
        {/* Pulse rings — gold + red breathing */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gold-primary/40 animate-ping-slow" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-red-accent/35 animate-ping-slower" />

        {/* Tooltip — desktop */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-galaxy-deep/95 backdrop-blur-md border border-gold-primary/40 px-4 py-2 rounded-full whitespace-nowrap text-sm text-star-white font-serif shadow-[0_4px_20px_rgba(212,175,55,0.25)] pointer-events-none"
        >
          Chat with Swati on WhatsApp
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-galaxy-deep border-r border-t border-gold-primary/40" />
        </motion.div>

        {/* Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Swati on WhatsApp"
          className="relative flex items-center justify-center h-full w-full rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] ring-2 ring-gold-primary/60 shadow-[0_8px_30px_rgba(37,211,102,0.45),0_0_0_4px_rgba(212,175,55,0.15),0_0_24px_rgba(178,34,34,0.4)] hover:scale-110 hover:ring-gold-primary transition-all duration-300"
        >
          <IconBrandWhatsapp size={30} stroke={1.8} className="text-white" />
        </a>
      </div>
    </motion.div>
  );
}
