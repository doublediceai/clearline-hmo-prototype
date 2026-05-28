import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const Check = ({ dark }) => (
  <svg
    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${dark ? 'text-blue-400' : 'text-blue-500'}`}
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const Cross = () => (
  <svg
    className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400 opacity-30"
    fill="none" stroke="currentColor" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const plans = [
  {
    id: 'value',
    name: 'Clear Value',
    tier: 'Individual / Starter',
    price: '₦80,000',
    period: 'per person / year',
    desc: 'Essential health protection for individuals and small families.',
    popular: false,
    dark: false,
    features: [
      { text: 'Full outpatient care & GP consultations', on: true },
      { text: 'Standard laboratory tests & diagnostics', on: true },
      { text: 'Prescribed generic medications', on: true },
      { text: 'General ward accommodation (14 days)', on: true },
      { text: 'Digital member card in 10 minutes', on: true },
      { text: 'Level C–D clinic & hospital network', on: true },
      { text: 'Specialist referrals & advanced surgery', on: false },
    ],
    cta: { individual: 'Activate Value Plan', sme: 'Activate Team Value' },
  },
  {
    id: 'advantage',
    name: 'Clear Advantage',
    tier: 'Premium Family',
    price: '₦250,000',
    period: 'per person / year',
    desc: 'Comprehensive cover for growing families and professionals.',
    popular: true,
    dark: true,
    features: [
      { text: 'Everything in Clear Value, plus:', on: true },
      { text: 'Advanced specialist consultations', on: true },
      { text: 'Minor & major surgeries (up to ₦500,000)', on: true },
      { text: 'Private ward accommodation', on: true },
      { text: 'Physiotherapy & rehabilitation', on: true },
      { text: 'Dental & optical cover (up to ₦30,000)', on: true },
      { text: 'Level B–D premium hospital network', on: true },
    ],
    cta: { individual: 'Activate Advantage Plan', sme: 'Activate Team Advantage' },
  },
  {
    id: 'elite',
    name: 'Clear Elite',
    tier: 'Corporate Managed Care',
    price: '₦600,000',
    period: 'per person / year',
    desc: 'Unlimited executive cover for large teams and enterprises.',
    popular: false,
    dark: false,
    features: [
      { text: 'Everything in Advantage, plus:', on: true },
      { text: 'Dedicated medical account manager', on: true },
      { text: 'Advanced diagnostics — CT, MRI, PET scans', on: true },
      { text: 'Major surgery limits up to ₦1,500,000', on: true },
      { text: 'International emergency stabilization', on: true },
      { text: 'Comprehensive maternity & newborn care', on: true },
      { text: 'Full Tier-A teaching hospital access', on: true },
    ],
    cta: { individual: 'Contact Sales', sme: 'Request Corporate Quote' },
  },
]

const badges = [
  { icon: '🏥', label: 'NHIA Accredited' },
  { icon: '⚡', label: '10-Min Digital Activation' },
  { icon: '🔒', label: 'HMO Network Protection' },
]

export default function PlanMatrix({ onActivate }) {
  const [tab, setTab] = useState('individual')
  const [ref, inView] = useInView(0.08)

  return (
    <section id="plans" className="py-12 md:py-24 bg-neutral-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-block px-3 py-1.5 bg-blue-50 rounded text-xs md:text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3 md:mb-4">
            Health Plans
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-tight max-w-3xl mx-auto mb-3 md:mb-4 px-4 text-gray-900">
            Health cover that fits your life and team.
          </h2>
          <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Transparent pricing. No broker fees. No hidden clauses. Pay once and activate instantly.
          </p>

          {/* Individual / SME toggle */}
          <div className="inline-flex bg-gray-100 rounded-xl p-1 mt-8">
            {[['individual', 'Individual / Family'], ['sme', 'SME / Corporate']].map(([val, label]) => (
              <button
                key={val}
                onClick={() => setTab(val)}
                className={`h-10 px-3 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                  tab === val
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`relative rounded-xl p-5 sm:p-6 md:p-8 border-2 flex flex-col transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                plan.dark
                  ? 'bg-blue-900 text-white border-blue-400'
                  : 'bg-white border-[#EEEEEE]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full whitespace-nowrap tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.dark ? 'text-blue-400' : 'text-gray-400'}`}>
                  {plan.tier}
                </p>
                <h3 className={`text-xl font-semibold mb-4 ${plan.dark ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-4xl md:text-5xl font-bold tracking-tight ${plan.dark ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${plan.dark ? 'text-white/50' : 'text-gray-400'}`}>
                  {plan.period}
                </p>
                <p className={`text-sm mt-3 leading-relaxed ${plan.dark ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f.text} className="flex items-start gap-3">
                    {f.on ? <Check dark={plan.dark} /> : <Cross />}
                    <span className={`text-sm leading-relaxed ${
                      f.on
                        ? plan.dark ? 'text-white/90' : 'text-gray-800'
                        : 'text-gray-400 line-through opacity-50'
                    }`}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.dark ? (
                <button
                  onClick={() => onActivate(plan.name)}
                  className="w-full text-center px-6 py-3 bg-blue-500 text-white font-medium text-sm rounded-sm hover:shadow-soft hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                >
                  {plan.cta[tab]}
                </button>
              ) : (
                <button
                  onClick={() => onActivate(plan.name)}
                  className="w-full text-center px-6 py-3 bg-[#FAFAFA] text-gray-900 font-medium text-sm rounded-sm border border-[#EEEEEE] hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  {plan.cta[tab]}
                </button>
              )}

              <p className={`text-center text-xs mt-2.5 ${plan.dark ? 'text-white/40' : 'text-gray-400'}`}>
                No setup fees · Cancel anytime
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-sm text-gray-400 mb-6">
            Trusted by 640+ SMEs and 150,000+ insured members across Nigeria
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {badges.map(b => (
              <div key={b.label} className="text-sm font-semibold text-gray-700">
                {b.icon} {b.label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
