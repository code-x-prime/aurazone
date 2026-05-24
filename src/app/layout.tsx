import type { Metadata } from "next";
import { Cinzel, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const moonFavicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23E8C547'/%3E%3Cstop offset='1' stop-color='%238B6914'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23g)' d='M44 8a22 22 0 1 0 12 32A18 18 0 0 1 44 8z'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurazone.in"),
  title: "Aurazone — Tarot Readings by Swati bhatt | Spiritual Guidance",
  description:
    "Discover clarity through certified tarot card readings with Swati bhatt. Love, career, marriage & life guidance. 500+ readings · 8+ years experience. Book your session today.",
  keywords: [
    "tarot reader india",
    "Swati bhatt",
    "aurazone",
    "online tarot reading",
    "love reading",
    "career guidance",
    "spiritual healing",
    "marriage compatibility tarot",
  ],
  authors: [{ name: "Swati bhatt" }],
  creator: "Swati bhatt",
  icons: {
    icon: moonFavicon,
    shortcut: moonFavicon,
    apple: moonFavicon,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aurazone.in",
    siteName: "Aurazone",
    title: "Aurazone — Where the Stars Speak Through the Cards",
    description:
      "Certified tarot readings by Swati bhatt. Clarity on love, career, marriage & life. Online consultations worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurazone — Tarot Readings by Swati bhatt",
    description:
      "Certified tarot readings with 8+ years of experience. Find clarity in love, career & life.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-galaxy-black text-star-white selection:bg-gold-primary/30">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
