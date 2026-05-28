import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import LogoCarousel from './components/LogoCarousel'
import PlanMatrix from './components/PlanMatrix'
import ProofGrid from './components/ProofGrid'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ActivateModal from './components/ActivateModal'
import ContactModal from './components/ContactModal'

export default function App() {
  const [activateOpen, setActivateOpen] = useState(false)
  const [activatePlan, setActivatePlan] = useState('')
  const [contactOpen, setContactOpen] = useState(false)

  const openActivate = (plan = '') => {
    setActivatePlan(plan)
    setActivateOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onActivate={openActivate} onContact={() => setContactOpen(true)} />
      <main>
        <Hero onActivate={openActivate} onContact={() => setContactOpen(true)} />
        <TrustBar />
        <LogoCarousel />
        <PlanMatrix onActivate={openActivate} />
        <ProofGrid />
        <FAQ />
      </main>
      <Footer onActivate={openActivate} />

      <ActivateModal
        open={activateOpen}
        onClose={() => setActivateOpen(false)}
        initialPlan={activatePlan}
      />
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <Analytics />
    </div>
  )
}
