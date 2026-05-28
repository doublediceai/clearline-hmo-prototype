import { useInView } from '../hooks/useInView'

const StarIcon = () => (
  <svg className="w-5 h-5 fill-review-star" viewBox="0 0 256 256">
    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
  </svg>
)

const Stars = ({ count = 5 }) => (
  <div className="flex gap-1">
    {[...Array(count)].map((_, i) => <StarIcon key={i} />)}
  </div>
)

const ReviewCard = ({ quote, name, role, avatar, stars = 5, width = 'w-[380px]' }) => (
  <div className={`${width} bg-neutral-surface border border-border-light rounded-2xl p-8 flex flex-col justify-between shrink-0`}>
    <div className="space-y-4">
      <Stars count={stars} />
      <p className="text-gray-900 text-lg font-medium tracking-tight">"{quote}"</p>
    </div>
    <div className="flex items-center gap-4 mt-8">
      <img src={avatar} className="w-10 h-10 rounded-full object-cover" alt={name} />
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-text-muted">{role}</p>
      </div>
    </div>
  </div>
)

const row1 = [
  {
    stars: 5,
    quote: 'I enrolled my 14 agency staff on a Tuesday. By Thursday the first claim was approved in under 2 minutes. Clearline runs completely on autopilot.',
    name: 'Funmi Okonkwo',
    role: 'Managing Director, Lagos Creative Agency',
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=100&h=100&fit=crop',
  },
  {
    stars: 5,
    quote: 'The digital member card works everywhere. I walked into a clinic in Abuja and was through the desk in under five minutes. Zero paperwork.',
    name: 'Tunde Adeyemi',
    role: 'Operations Lead, Konga Technologies',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=100&h=100&fit=crop',
  },
  {
    stars: 5,
    quote: 'Setting up our company plan took 10 minutes online. The whole team was covered same day — activation is genuinely instant.',
    name: 'Ngozi Balogun',
    role: 'HR Manager, Flutterwave',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=100&h=100&fit=crop',
  },
  {
    stars: 5,
    quote: "Clearline's 24/7 authorization system means no midnight calls chasing approvals. It just works — every single time.",
    name: 'Emeka Dike',
    role: 'Team Lead, Access Bank',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=100&h=100&fit=crop',
  },
]

const row2 = [
  {
    stars: 5,
    quote: 'With two young kids, fast hospital approvals matter. Clearline got us a care code at 2 AM in under two minutes. Best health tech in Nigeria.',
    name: 'Chidi Kelechi',
    role: 'Family Head · Lekki, Lagos',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100&h=100&fit=crop',
  },
  {
    stars: 5,
    quote: 'Switched from our old HMO last quarter. The difference is night and day — instant digital cards, transparent plans, and actual human support.',
    name: 'Adaeze Mba',
    role: 'Chief Financial Officer, Paystack',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop',
  },
  {
    stars: 5,
    quote: 'The partner hospital network covers every city where we operate. Staff in Lagos, Abuja, and Port Harcourt all have equal access to care.',
    name: 'Femi Rasheed',
    role: 'Admin Director, MTN Nigeria',
    avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?w=100&h=100&fit=crop',
  },
  {
    stars: 5,
    quote: 'The onboarding experience alone is worth it. I had our full SME plan active and every staff member holding a digital card in under 15 minutes.',
    name: 'Blessing Eze',
    role: 'Co-founder, Cowrywise',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=100&h=100&fit=crop',
  },
]

export default function ProofGrid() {
  const [headerRef, headerInView] = useInView(0.1)

  return (
    <section className="pt-24 pb-24 bg-white overflow-hidden">

      {/* Section Header */}
      <div
        ref={headerRef}
        className={`text-center mb-16 max-w-2xl mx-auto px-6 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="inline-block bg-white border border-border-light rounded-full px-4 py-1.5 mb-6 shadow-sm">
          <span className="text-text-muted text-xs uppercase tracking-widest font-semibold">Testimonials</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6 leading-tight">
          Loved by families and teams across Nigeria.
        </h2>
        <p className="text-lg text-text-muted leading-relaxed">
          Join 150,000+ members who trust Clearline for seamless, paperless healthcare coverage.
        </p>
      </div>

      {/* Ticker Rows */}
      <div className="w-full space-y-6">
        <div className="w-full overflow-hidden mask-fade">
          <div className="flex gap-6 w-max animate-ticker-left pause-animation">
            {row1.map(card => <ReviewCard key={card.name} {...card} width="w-[380px]" />)}
            {row1.map(card => <ReviewCard key={`${card.name}-clone`} {...card} width="w-[380px]" />)}
          </div>
        </div>
        <div className="w-full overflow-hidden mask-fade">
          <div className="flex gap-6 w-max animate-ticker-right pause-animation">
            {row2.map(card => <ReviewCard key={card.name} {...card} width="w-[400px]" />)}
            {row2.map(card => <ReviewCard key={`${card.name}-clone`} {...card} width="w-[400px]" />)}
          </div>
        </div>
      </div>

    </section>
  )
}
