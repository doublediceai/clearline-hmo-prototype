import { useInView } from '../hooks/useInView'

const stats = [
  { value: '1,400+', label: 'partner hospitals nationwide' },
  { value: '150k+', label: 'active insured members' },
  { value: '99.9%', label: 'care approval uptime' },
]

export default function TrustBar() {
  const [ref, inView] = useInView(0.15)

  return (
    <section className="bg-white border-t border-border-light py-12 lg:py-16 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.value}
            className={`text-center py-2 sm:py-4 ${i < stats.length - 1 ? 'border-r border-border-light' : ''}`}
          >
            <h3 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</h3>
            <p className="text-text-muted font-medium lowercase tracking-tight text-xs sm:text-sm lg:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
