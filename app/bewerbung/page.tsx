import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FunnelWizard } from "@/components/funnel/FunnelWizard";

export default function ApplicationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-32 min-h-screen flex flex-col justify-center">
        <div className="container px-4 mx-auto">
          <FunnelWizard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
