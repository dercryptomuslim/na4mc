import Navbar from './components/navigation/Navbar'
import Hero from './components/hero/Hero'
import Problem from './components/sections/Problem'
import SystemSection from './components/sections/SystemSection'
import Proof from './components/sections/Proof'
import CaseQSK from './components/sections/CaseQSK'
import AppsShowcase from './components/sections/AppsShowcase'
import ServiceGroups from './components/sections/ServiceGroups'
import WhyMuslim from './components/sections/WhyMuslim'
import Founder from './components/sections/Founder'
import Process from './components/sections/Process'
import Engagement from './components/sections/Engagement'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <SystemSection />
        <Proof />
        <CaseQSK />
        <AppsShowcase />
        <ServiceGroups />
        <WhyMuslim />
        <Founder />
        <Process />
        <Engagement />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
