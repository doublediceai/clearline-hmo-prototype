import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV_LINKS = ['Home', 'About Us', 'Products', 'Resources', 'Our Providers']

export default function Hero({ onActivate, onContact }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToPlans = () => {
    setMenuOpen(false)
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContact = () => {
    setMenuOpen(false)
    onContact()
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Floating Navbar */}
      <nav className="absolute top-8 z-50 flex justify-center w-full px-4">
        <div className="w-full max-w-5xl h-[52px] relative flex items-center justify-between px-4 sm:px-6 rounded-xl backdrop-blur-[20px] bg-white/10 border border-white/20 shadow-[inset_0px_4px_40px_0px_rgba(255,255,255,0.08)] overflow-hidden">

          {/* Wordmark */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/ClearlineFullLogo.png"
              alt="Clearline HMO"
              className="h-24 w-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Contact Us + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleContact}
              className="hidden lg:inline-flex items-center h-8 px-4 rounded-md bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200"
            >
              Contact Us
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] cursor-pointer w-8 items-end focus:outline-none transition-transform active:scale-95"
              aria-label="Open menu"
            >
              <div className="w-6 h-[1.5px] bg-white rounded-full" />
              <div className="w-6 h-[1.5px] bg-white rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-blue-950/90 backdrop-blur-md flex items-center justify-center p-6 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-[440px] relative flex flex-col items-center py-12 sm:py-20 px-6 sm:px-8 rounded-[32px] bg-white/5 border border-white/15 shadow-[inset_0px_4px_40px_0px_rgba(255,255,255,0.06)]">

          {/* Close */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white hover:rotate-90 transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>

          <div className="mb-12">
            <span className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase">Navigate</span>
          </div>

          <nav className="flex flex-col items-center gap-5 sm:gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-3xl sm:text-4xl text-white font-light tracking-tighter hover:italic hover:translate-x-2 transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="mt-12 flex gap-4">
            <button
              onClick={handleContact}
              className="text-white/40 text-[11px] tracking-[0.25em] uppercase hover:text-white transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={scrollToPlans}
              className="text-white/40 text-[11px] tracking-[0.25em] uppercase hover:text-white transition-colors"
            >
              View Plans
            </button>
          </div>
        </div>
      </div>

      {/* Hero Card */}
      <section className="absolute inset-0 overflow-hidden">

        {/* Background Image + Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?w=1920&h=1280&fit=crop"
            alt="Healthcare professionals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/40" />
        </div>

        {/* Content — bottom anchored */}
        <div className="relative z-10 w-full h-full flex flex-col justify-end items-center max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-4 sm:mb-8">

            {/* Left: Headline + Buttons */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-[860px] items-center md:items-start text-center md:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/80 text-xs font-medium tracking-wide">Now active across 36 states</span>
                </div>
                <h1 className="font-medium text-[32px] sm:text-[42px] md:text-[54px] lg:text-[58px] leading-[1.1] tracking-[-0.04em] text-white">
                  Comprehensive health coverage,{' '}
                  <span className="italic">active in minutes</span>.
                </h1>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-[480px] mx-auto md:mx-0 tracking-tight">
                  No paperwork. No hidden limits. Access 1,400+ top-tier hospitals across Nigeria — instantly, for your family or your entire team.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
                <button
                  onClick={() => onActivate()}
                  className="h-12 px-5 sm:px-8 bg-white text-blue-950 rounded-lg flex items-center justify-center font-semibold text-base relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:scale-95 group"
                >
                  <span className="relative z-10">Activate Plan Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                </button>
                <button
                  onClick={scrollToPlans}
                  className="h-12 px-6 flex items-center justify-center gap-2 group hover:opacity-100 transition-all"
                >
                  <span className="text-white font-medium text-base relative">
                    View Plans &amp; Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Right: Social Proof Badge */}
            <div className="flex-shrink-0 hidden md:block">
              <div className="flex items-center gap-3 rounded-full backdrop-blur-[20px] bg-black/25 border border-white/20 shadow-[inset_0px_4px_40px_0px_rgba(255,255,255,0.08)] px-3 py-2 pr-4">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.pexels.com/photos/11767211/pexels-photo-11767211.jpeg?w=100&h=100&fit=crop"
                    className="w-9 h-9 rounded-full border-2 border-white/20 object-cover"
                    alt="Member"
                  />
                  <img
                    src="https://images.pexels.com/photos/14236897/pexels-photo-14236897.jpeg?w=100&h=100&fit=crop"
                    className="w-9 h-9 rounded-full border-2 border-white/20 object-cover"
                    alt="Member"
                  />
                  <img
                    src="https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?w=100&h=100&fit=crop"
                    className="w-9 h-9 rounded-full border-2 border-white/20 object-cover"
                    alt="Member"
                  />
                </div>
                <p className="text-[13px] text-white font-medium whitespace-nowrap tracking-tight">
                  Join 150,000+ insured members
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
