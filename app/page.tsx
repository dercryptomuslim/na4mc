import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BentoServices } from "@/components/sections/BentoServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Comparison } from "@/components/sections/Comparison";
import { SuccessStory } from "@/components/sections/SuccessStory";
import { Benefits } from "@/components/sections/Benefits";
import { Channels } from "@/components/sections/Channels";
import { ProcessSteps } from "@/components/sections/ProcessSteps";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Benefits />
      <BentoServices />
      <Comparison />
      <SuccessStory />
      <Channels />
      <ProcessSteps />
      <Testimonials />
      <Footer />
    </main>
  );
}
