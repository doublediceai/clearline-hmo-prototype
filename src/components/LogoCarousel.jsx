import { useInView } from '../hooks/useInView'

const clients = [
  {
    name: 'CDK Integrated Industries Limited',
    src: '/logos/cdk.png',
    alt: 'CDK Integrated Industries Limited logo',
  },
  {
    name: 'Greenlife Pharmaceuticals Ltd',
    src: '/logos/greenlife.png',
    alt: 'Greenlife Pharmaceuticals Ltd logo',
    imgClass: 'scale-[1.75]',
  },
  {
    name: 'Air Peace',
    src: '/logos/air-peace.png',
    alt: 'Air Peace airline logo',
  },
  {
    name: 'Vitafoam',
    src: '/logos/vitafoam.png',
    alt: 'Vitafoam Nigeria logo',
    imgClass: 'scale-[1.55]',
  },
  {
    name: 'CWAY Group',
    src: '/logos/cway.png',
    alt: 'CWAY Group logo',
    imgClass: 'scale-[1.75]',
  },
]

const LogoCard = ({ src, alt, imgClass = '' }) => (
  <div className="bg-white border border-border-light rounded-2xl w-[220px] h-[120px] flex items-center justify-center p-4 shrink-0 overflow-hidden">
    <img
      src={src}
      alt={alt}
      className={`max-h-full max-w-full object-contain ${imgClass}`}
    />
  </div>
)

export default function LogoCarousel() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="py-12 md:py-24 bg-neutral-surface border-t border-b border-border-light overflow-hidden">

      {/* Section header */}
      <div
        ref={ref}
        className={`text-center mb-12 max-w-2xl mx-auto px-4 md:px-6 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="inline-block bg-white border border-border-light rounded-full px-4 py-1.5 mb-6 shadow-sm">
          <span className="text-text-muted text-xs uppercase tracking-widest font-semibold">Our Clients</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-4 leading-tight">
          Trusted by Nigeria's fastest-growing teams.
        </h2>
        <p className="text-lg text-text-muted leading-relaxed">
          From Lagos startups to Abuja corporates — leading organizations protect their people with Clearline.
        </p>
      </div>

      {/* Ticker */}
      <div className="w-full overflow-hidden mask-fade">
        <div className="flex gap-6 w-max animate-ticker-left pause-animation">
          {clients.map(c => <LogoCard key={c.name} {...c} />)}
          {clients.map(c => <LogoCard key={`${c.name}-clone`} {...c} />)}
        </div>
      </div>

    </section>
  )
}
