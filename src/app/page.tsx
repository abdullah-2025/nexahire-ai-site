import Hero from '@/components/Hero'
import SiteSections from '@/components/SiteSections'
import ProofStrip from '@/components/sections/ProofStrip'
import Interviews from '@/components/sections/Interviews'
import Jobs from '@/components/sections/Jobs'
import Toolkit from '@/components/sections/Toolkit'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import Faq from '@/components/sections/Faq'
import CallToAction from '@/components/sections/CallToAction'
import Footer from '@/components/sections/Footer'
import MotionDirector from '@/components/motion/MotionDirector'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Hero />
      <SiteSections>
        <main id="main" tabIndex={-1}>
          <ProofStrip />
          <Interviews />
          <Jobs />
          <Toolkit />
          <HowItWorks />
          <Pricing />
          <Faq />
          <CallToAction />
        </main>
        <Footer />
      </SiteSections>
      <MotionDirector />
    </>
  )
}
