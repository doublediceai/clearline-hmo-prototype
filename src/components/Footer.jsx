import ClearlineLogo from './ClearlineLogo'

export default function Footer({ onActivate }) {
  const scrollToPlans = () => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-blue-950 pt-20 overflow-hidden relative text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20">

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ClearlineLogo gradId="footer" className="h-8 w-auto" />
              <span className="text-white font-semibold text-base tracking-tight">Clearline HMO</span>
            </div>
            <h4 className="text-white font-extrabold text-2xl md:text-3xl uppercase leading-tight mb-6">
              Ready to protect your team's health
            </h4>
            <button
              onClick={() => onActivate()}
              className="bg-white text-blue-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg"
            >
              Activate Plan Now
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 md:col-span-3 text-blue-200 text-sm">
            <div className="space-y-3">
              <h5 className="font-bold text-white mb-4">Our Plans</h5>
              {['Clear Value', 'Clear Advantage', 'Clear Elite', 'SME / Corporate', 'Hospital Directory'].map(link => (
                <a key={link} href="#plans" onClick={e => { e.preventDefault(); scrollToPlans() }}
                  className="block hover:text-white transition-colors">{link}</a>
              ))}
            </div>
            <div className="space-y-3">
              <h5 className="font-bold text-white mb-4">Company</h5>
              {['About Clearline', 'How It Works', 'Blog & Health Insights', 'Careers', 'Partner With Us', 'Press & Media'].map(link => (
                <a key={link} href="#" className="block hover:text-white transition-colors">{link}</a>
              ))}
            </div>
            <div className="space-y-3">
              <h5 className="font-bold text-white mb-4">Legal</h5>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map(link => (
                <a key={link} href="#" className="block hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/20 text-blue-300 text-xs">
          <div>© 2025 Clearline HMO Ltd. All rights reserved. Regulated by NAICOM &amp; NHIA.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>

      <div className="absolute bottom-[-4vw] left-0 w-full select-none pointer-events-none overflow-hidden">
        <h1 className="text-[22vw] font-black text-white opacity-[0.04] text-center leading-none tracking-tighter">
          Clearline
        </h1>
      </div>
    </footer>
  )
}
