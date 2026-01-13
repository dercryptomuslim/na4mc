import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/marquee";
import { About } from "@/components/sections/About";
import { BentoServices } from "@/components/sections/BentoServices";
import { Stats } from "@/components/sections/Stats";
import { MarketingExplainer } from "@/components/sections/MarketingExplainer";
import { Automation } from "@/components/sections/Automation";
import { Consulting } from "@/components/sections/Consulting";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Comparison } from "@/components/sections/Comparison";
import { SuccessStory } from "@/components/sections/SuccessStory";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Marquee />
      <BentoServices />
      <Comparison />
      <SuccessStory />
      <Stats />
      <About />
      <MarketingExplainer />
      <Automation />
      <Consulting />
      <Testimonials />
      <Footer />
    </main>
  );
}
