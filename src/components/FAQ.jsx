import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    category: 'Hospital Access',
    q: 'Are top-tier private hospitals included, or just small neighborhood clinics?',
    a: "It depends entirely on your plan. Our Clear Value plan covers trusted community neighborhood clinics. Clear Advantage and Clear Elite grant direct access to premium private multi-speciality centers across Lagos, Abuja, and major Nigerian cities. You can view the full, unfiltered hospital directory inside the onboarding portal before processing payment — zero surprises.",
    preview: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?w=800&h=800&fit=crop',
  },
  {
    category: 'Activation',
    q: 'If I buy a plan today, exactly when can my family or employees go to the hospital?',
    a: "With our 10-Minute Activation Guarantee, your digital coverage goes live instantly. For primary consultations, general outpatient care, and emergency stabilization, digital cards are active within 10 minutes of registration. Specialized surgeries or advanced pre-existing treatments follow transparent regulatory timelines clearly outlined during selection — no hidden waiting periods.",
    preview: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?w=800&h=800&fit=crop',
  },
  {
    category: 'Coverage',
    q: 'Will my staff be forced to pay out-of-pocket for drugs or tests at the hospital desk?',
    a: "Never for covered services. Our Zero Hidden Copay Guarantee ensures that any treatment, prescription, or test covered under your plan tier is completely handled by Clearline. If a hospital desk requests unauthorized payment for covered care, ping our 3-Minute Escrow Resolution hotline to override the desk instantly — 24/7, 365 days.",
    preview: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?w=800&h=800&fit=crop',
  },
  {
    category: 'Administration',
    q: 'How much admin work is required to add or remove staff from the policy?',
    a: "Zero manual paperwork. Your master dashboard lets you add new hires, update dependants, or offboard staff in under 60 seconds. Changes sync instantly across our hospital provider network — no dedicated HR officer, no manual broker interventions, no paperwork required.",
    preview: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=800&h=800&fit=crop',
  },
]

const DiagonalArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 transition-transform duration-300"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
)

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [preview, setPreview] = useState(faqs[0].preview)
  const [fade, setFade] = useState(true)
  const [ref, inView] = useInView(0.1)

  const switchPreview = (src) => {
    if (src === preview) return
    setFade(false)
    setTimeout(() => {
      setPreview(src)
      setFade(true)
    }, 150)
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div
          ref={ref}
          className={`grid md:grid-cols-12 gap-x-6 gap-y-4 items-end mb-8 md:mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-[12px] font-medium">
              <span className="tabular-nums text-[18px] leading-none text-blue-600 font-semibold">05</span>
              <span className="text-slate-300">/</span>
              <span className="uppercase tracking-widest text-slate-400 font-bold text-[10px]">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-blue-950 tracking-tight leading-tight">
              Questions about <span className="text-blue-600">Clearline?</span>
            </h2>
            <p className="text-base text-slate-500 font-light max-w-xl">
              Everything you need to know before you activate your plan.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href="mailto:support@clearlinehmo.ng"
              className="inline-flex items-center text-sm font-semibold text-white bg-blue-950 h-10 rounded-full px-5 hover:bg-blue-800 transition-colors whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10 items-start">
          <div className="md:col-span-7">
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {faqs.map((item, i) => (
                <div key={i} className="py-6">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-blue-400 mb-2">
                    {item.category}
                  </div>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    onMouseEnter={() => switchPreview(item.preview)}
                    className="group flex items-center justify-between w-full text-left gap-4"
                  >
                    <h3 className="text-blue-950 text-xl sm:text-2xl font-light tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-200">
                      {item.q}
                    </h3>
                    <span
                      className={`flex-shrink-0 inline-flex items-center justify-center rounded-full border p-2 transition-all duration-300 ${
                        open === i
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-200 bg-white text-blue-600'
                      }`}
                      style={{ transform: open === i ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    >
                      <DiagonalArrow />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      open === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="pt-5 pb-2 text-slate-500 text-lg leading-relaxed font-light">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 hidden md:block sticky top-32 self-start">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent" />
              <div className="aspect-square">
                <img
                  src={preview}
                  alt="FAQ illustration"
                  className="w-full h-full object-cover transition-opacity duration-300"
                  style={{ opacity: fade ? 1 : 0, filter: 'saturate(0.9) contrast(1.05)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
