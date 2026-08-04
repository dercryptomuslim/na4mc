import Hero from './components/Hero'
import Ticker from './components/sections/Ticker'
import TrustedBy from './components/sections/TrustedBy'
import Benefits from './components/sections/Benefits'
import Services from './components/sections/Services'
import FeatureBlocks from './components/sections/FeatureBlocks'
import Comparison from './components/sections/Comparison'
import SuccessStory from './components/sections/SuccessStory'
import About from './components/sections/About'
import Pricing from './components/sections/Pricing'
import Channels from './components/sections/Channels'
import ProcessSteps from './components/sections/ProcessSteps'
import SunCTA from './components/sections/SunCTA'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="bg-[#0B1120] text-white">
      <Hero />
      <Ticker />
      <TrustedBy />
      <Benefits />
      <Services />
      <FeatureBlocks />
      <Comparison />
      <SuccessStory />
      <About />
      <Pricing />
      <Channels />
      <ProcessSteps />
      <SunCTA />
      <Footer />
    </div>
  )
}
