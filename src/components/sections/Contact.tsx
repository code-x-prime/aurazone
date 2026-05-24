"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  IconMail,
  IconPhone,
  IconBrandWhatsapp,
  IconClock,
  IconSend,
  IconCircleCheck,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { Button } from "@/components/ui/Button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  readingType: string;
  message: string;
};

const READING_TYPES = [
  "Love & Relationships",
  "Career & Finance",
  "Marriage Compatibility",
  "Past Life Reading",
  "Spiritual Healing",
  "Birth Chart Analysis",
  "Complete Soul Map",
];

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold-soft mb-4">
            ✦ Begin Your Reading ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient">
            Reach Out
          </h2>
          <p className="mt-4 font-serif text-xl md:text-2xl text-mystic-mist max-w-2xl mx-auto">
            Send a message, and I will reply within a few hours — usually
            sooner.
          </p>
          <div className="mt-8">
            <OrnamentDivider symbol="sun" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            <InfoRow
              icon={<IconMail size={20} stroke={1.5} />}
              label="Email"
              value="aurazone0006@gmail.com"
              href="mailto:aurazone0006@gmail.com"
            />
            <InfoRow
              icon={<IconPhone size={20} stroke={1.5} />}
              label="Phone"
              value="+91 99996 27129"
              href="tel:+919999627129"
            />
            <a
              href="https://wa.me/919999627129?text=Namaste%20Swati%20ji%2C%20I%27d%20like%20to%20book%20a%20reading."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block glass rounded-xl p-5 hover:border-red-accent/60 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-accent/0 via-red-accent/10 to-[#25D366]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-4">
                <span
                  className="relative h-12 w-12 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]"
                  style={{ boxShadow: "0 0 0 2px rgba(178, 34, 34, 0.7), 0 0 18px rgba(178, 34, 34, 0.35)" }}
                >
                  <IconBrandWhatsapp size={22} stroke={1.5} />
                  <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#25D366] animate-pulse-glow" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-mystic-mist">
                    WhatsApp · Instant
                  </div>
                  <div className="font-display text-star-white">
                    Chat with Swati now
                  </div>
                </div>
              </div>
            </a>
            <InfoRow
              icon={<IconBrandInstagram size={20} stroke={1.5} />}
              label="Instagram"
              value="@aurazone0006"
              href="https://www.instagram.com/aurazone0006"
              external
            />
            <div className="glass rounded-xl p-5 flex items-start gap-4">
              <IconClock size={20} stroke={1.5} className="text-gold-soft mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-mystic-mist mb-1">
                  Response Time
                </div>
                <p className="font-serif text-mystic-mist">
                  Usually within 2–3 hours · daily 9 AM – 9 PM IST
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-strong rounded-2xl p-6 md:p-10 space-y-5 relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Your Name" error={errors.name?.message}>
                  <input
                    type="text"
                    {...register("name", { required: "Your name is needed" })}
                    placeholder="e.g. Priya Sharma"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email needed for follow-up",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                    })}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Phone / WhatsApp" error={errors.phone?.message}>
                  <input
                    type="tel"
                    {...register("phone", { required: "A phone number helps me reach you" })}
                    placeholder="+91 ..."
                    className={inputClass}
                  />
                </Field>
                <Field label="Type of Reading" error={errors.readingType?.message}>
                  <select
                    {...register("readingType", { required: "Pick a reading" })}
                    defaultValue=""
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled className="bg-galaxy-deep">
                      Choose a reading...
                    </option>
                    {READING_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-galaxy-deep">
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="What would you like to know?" error={errors.message?.message}>
                <textarea
                  rows={5}
                  {...register("message", {
                    required: "Tell me a little about what you seek",
                    minLength: { value: 10, message: "A few more words please" },
                  })}
                  placeholder="Share your question in your own words. The more honest, the better the reading."
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-mystic-mist font-serif">
                  By submitting you agree to be contacted about your reading.
                </p>
                <div className="flex flex-col items-end gap-2">
                  {error && (
                    <p className="text-xs text-red-400 font-serif">
                      Something went wrong. Try WhatsApp instead.
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || sent}
                    className="hover:shadow-[0_0_30px_rgba(178,34,34,0.55)]"
                    icon={sent ? <IconCircleCheck size={16} stroke={1.5} /> : <IconSend size={16} stroke={1.5} />}
                  >
                    {sent ? "Message Sent ✓" : isSubmitting ? "Sending..." : "Send & Book"}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-galaxy-black/60 border border-gold-primary/30 rounded-lg px-4 py-3 text-star-white placeholder:text-mystic-mist/50 font-sans text-sm focus:outline-none focus:border-red-accent focus:shadow-red-glow transition-all";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-display text-[10px] uppercase tracking-[0.3em] text-gold-soft mb-2 block">
        {label}
      </span>
      {children}
      {error && (
        <span className="block mt-1.5 text-xs text-red-glow font-serif">
          {error}
        </span>
      )}
    </label>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="glass rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 hover:border-gold-primary/70 hover:shadow-gold-glow transition-all group min-w-0"
    >
      <span className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-gold-primary/40 flex items-center justify-center text-gold-soft group-hover:bg-gold-gradient group-hover:text-galaxy-black group-hover:border-transparent transition-all flex-shrink-0">
        {icon}
      </span>
      <div className="min-w-0 w-full">
        <div className="text-[10px] uppercase tracking-[0.3em] text-mystic-mist">
          {label}
        </div>
        <div className="font-display text-star-white text-sm sm:text-base mt-0.5 break-all">
          {value}
        </div>
      </div>
    </a>
  );
}
