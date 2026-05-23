import { StarField } from "@/components/effects/StarField";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSwati } from "@/components/sections/AboutSwati";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CosmicBlueprint } from "@/components/sections/CosmicBlueprint";
import { CardOfTheDay } from "@/components/sections/CardOfTheDay";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <StarField density={160} />
      <NoiseOverlay />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutSwati />
        <Services />
        <HowItWorks />
        <CosmicBlueprint />
        <CardOfTheDay />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
