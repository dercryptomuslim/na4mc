import Hero from './components/Hero'
import TrustedBy from './components/sections/TrustedBy'
import Benefits from './components/sections/Benefits'
import Services from './components/sections/Services'
import Comparison from './components/sections/Comparison'
import SuccessStory from './components/sections/SuccessStory'
import About from './components/sections/About'
import Pricing from './components/sections/Pricing'
import Channels from './components/sections/Channels'
import ProcessSteps from './components/sections/ProcessSteps'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="bg-[#0B1120] text-white">
      <Hero />
      <TrustedBy />
      <Benefits />
      <Services />
      <Comparison />
      <SuccessStory />
      <About />
      <Pricing />
      <Channels />
      <ProcessSteps />
      <Footer />
    </div>
  )
}
