import Hero from '@/components/Hero'
import SiteSections from '@/components/SiteSections'
import Features from '@/components/sections/Features'
import UniversityMarquee from '@/components/sections/UniversityMarquee'
import Stats from '@/components/sections/Stats'
import HowItWorks from '@/components/sections/HowItWorks'
import Readiness from '@/components/sections/Readiness'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import Faq from '@/components/sections/Faq'
import CallToAction from '@/components/sections/CallToAction'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <SiteSections>
        <UniversityMarquee />
        <Stats />
        <Features />
        <HowItWorks />
        <Readiness />
        <Testimonials />
        <Pricing />
        <Faq />
        <CallToAction />
        <Footer />
      </SiteSections>
    </>
  )
}
