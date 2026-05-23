import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: "#D4AF37",
          soft: "#E8C547",
          deep: "#8B6914",
        },
        red: {
          primary: "#8B0000",
          accent: "#B22222",
          soft: "#5C0A0A",
          glow: "#E85A5A",
          luminous: "#F87171",
        },
        galaxy: {
          black: "#0A0612",
          deep: "#1A0B2E",
          mid: "#2D1B4E",
        },
        star: {
          white: "#F8F4E8",
        },
        mystic: {
          mist: "#C9B8A8",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 24px rgba(212, 175, 55, 0.35), 0 0 64px rgba(212, 175, 55, 0.15)",
        "gold-glow-lg": "0 0 40px rgba(212, 175, 55, 0.5), 0 0 100px rgba(212, 175, 55, 0.2)",
        "red-glow": "0 0 28px rgba(178, 34, 34, 0.45), 0 0 72px rgba(139, 0, 0, 0.25)",
        "inner-gold": "inset 0 0 24px rgba(212, 175, 55, 0.18)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E8C547 0%, #D4AF37 50%, #8B6914 100%)",
        "gold-text": "linear-gradient(135deg, #F8F4E8 0%, #E8C547 35%, #D4AF37 70%, #8B6914 100%)",
        "galaxy-radial": "radial-gradient(ellipse at top, #2D1B4E 0%, #1A0B2E 40%, #0A0612 100%)",
        "red-gradient": "linear-gradient(135deg, #B22222 0%, #8B0000 60%, #5C0A0A 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tw-rotate, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--tw-rotate, 0deg))" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "drift-particle": {
          "0%, 100%": { transform: "translate(0, 0)", opacity: "0.4" },
          "50%": { transform: "translate(15px, -20px)", opacity: "0.9" },
        },
        "ping-ring": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "spin-reverse": "spin-slow 60s linear reverse infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 50s linear infinite",
        "marquee-reverse": "marquee-reverse 55s linear infinite",
        "drift-particle": "drift-particle 6s ease-in-out infinite",
        "ping-slow": "ping-ring 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-slower": "ping-ring 3s cubic-bezier(0, 0, 0.2, 1) infinite 1.5s",
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
