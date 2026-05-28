import { useState, useEffect } from 'react'
import { Menu, X, MessageSquare } from 'lucide-react'

const NAV_LINKS = ['Home', 'About Us', 'Products', 'Resources', 'Our Providers']

export default function Header({ onActivate, onContact }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight
      setVisible(window.scrollY > heroHeight - 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToPlans = () => {
    setMenuOpen(false)
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContact = () => {
    setMenuOpen(false)
    onContact()
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-[0_1px_0_0_rgb(0,0,0,0.06)] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 overflow-hidden">

          {/* Wordmark */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/ClearlineFullLogo.png"
              alt="Clearline HMO"
              className="h-28 w-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleContact}
              className="flex items-center gap-1.5 border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </button>
            <button
              onClick={scrollToPlans}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              Choose Your Plan
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t-2 border-blue-600 px-4 py-5 flex flex-col gap-3 shadow-lg">
          <nav className="flex flex-col gap-1 pb-3 border-b border-slate-100">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 font-medium text-sm py-2 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <button
            onClick={handleContact}
            className="w-full flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Contact Us
          </button>
          <button
            onClick={scrollToPlans}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-200 text-sm"
          >
            Choose Your Plan
          </button>
        </div>
      </div>
    </header>
  )
}
