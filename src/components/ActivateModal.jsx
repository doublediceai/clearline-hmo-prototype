import { useState, useEffect } from 'react'
import { X, User, Users, Building2, Check, ArrowRight, CheckCircle2, ChevronLeft } from 'lucide-react'
import ClearlineLogo from './ClearlineLogo'

const PLANS = [
  { name: 'Clear Value',     price: '₦80,000/yr',   feature: 'Outpatient & GP care',            elite: false },
  { name: 'Clear Advantage', price: '₦250,000/yr',  feature: 'Specialist + dental/optical',     elite: false },
  { name: 'Clear Elite',     price: '₦600,000/yr',  feature: 'Unlimited + international cover', elite: true  },
]

const COVERAGE = [
  { id: 'individual', Icon: User,      label: 'Just Myself', sub: 'Individual coverage' },
  { id: 'family',     Icon: Users,     label: 'My Family',   sub: 'Up to 6 dependants' },
  { id: 'team',       Icon: Building2, label: 'My Team',     sub: 'SME & corporate plans' },
]

const STEP_LABELS = ['Choose coverage', 'Your details']

const Field = ({ label, type = 'text', placeholder, value, onChange, required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-white/50 tracking-widest uppercase">
      {label}{required && <span className="text-blue-400 ml-0.5">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
    />
  </div>
)

export default function ActivateModal({ open, onClose, initialPlan = '' }) {
  const [step, setStep] = useState(1)
  const [coverage, setCoverage] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', plan: initialPlan, employees: '' })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (open) {
      setStep(1)
      setCoverage('')
      setForm(f => ({ ...f, plan: initialPlan, name: '', email: '', phone: '', employees: '' }))
    }
  }, [open, initialPlan])

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const step2Valid = form.name.trim() && form.email.includes('@') && form.phone.trim() && form.plan

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-md animate-fade-in" />
      <div className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden max-h-[92vh] flex flex-col bg-blue-950 border border-white/15 shadow-[inset_0px_4px_40px_0px_rgba(255,255,255,0.06)] animate-modal-in">

        <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <ClearlineLogo gradId="activate-modal" className="h-7 w-auto" />
            <span className="text-white font-semibold text-sm tracking-tight">Clearline HMO</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step < 3 && (
          <div className="px-6 pb-4 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              {[1, 2].map(s => (
                <div key={s} className={`h-[2px] flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-white' : 'bg-white/20'}`} />
              ))}
            </div>
            <p className="text-xs text-white/40 font-medium tracking-wide">
              Step {step} of 2 — {STEP_LABELS[step - 1]}
            </p>
          </div>
        )}

        <div className="overflow-y-auto flex-1 px-6 pb-6">

          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-medium text-white tracking-tight">Let's get you covered.</h2>
                <p className="text-white/50 text-sm mt-1">Takes under 2 minutes. Who are you covering?</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {COVERAGE.map(({ id, Icon, label, sub }) => (
                  <button
                    key={id}
                    onClick={() => setCoverage(id)}
                    className={`flex flex-col items-center gap-2 py-5 px-3 rounded-xl border text-center transition-all duration-150 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none ${
                      coverage === id
                        ? 'border-white/40 bg-white/20'
                        : 'border-white/15 bg-white/10 hover:bg-white/15 hover:border-white/25'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${coverage === id ? 'bg-white/20 border border-white/30' : 'bg-white/10'}`}>
                      <Icon className={`w-5 h-5 ${coverage === id ? 'text-white' : 'text-white/50'}`} />
                    </div>
                    <span className={`text-xs font-semibold leading-tight ${coverage === id ? 'text-white' : 'text-white/60'}`}>{label}</span>
                    <span className="text-xs text-white/30 leading-tight hidden sm:block">{sub}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!coverage}
                className="w-full bg-white text-blue-950 disabled:bg-white/20 disabled:text-white/30 disabled:cursor-not-allowed font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-medium text-white tracking-tight">Almost there.</h2>
                <p className="text-white/50 text-sm mt-1">Tell us a little about you, then pick your plan.</p>
              </div>
              <div className="space-y-3">
                <Field label="Full Name"     placeholder="e.g. Tunde Adebayo" value={form.name}  onChange={set('name')}  required />
                <Field label="Email Address" placeholder="you@company.com"    type="email" value={form.email} onChange={set('email')} required />
                <Field label="Phone Number"  placeholder="+234 801 234 5678"  type="tel"   value={form.phone} onChange={set('phone')} required />
                {coverage === 'team' && (
                  <Field label="Number of Employees" placeholder="e.g. 12" type="number" value={form.employees} onChange={set('employees')} />
                )}
              </div>
              <div>
                <label className="text-xs font-semibold text-white/50 tracking-widest uppercase block mb-2">
                  Select Your Plan<span className="text-blue-400 ml-0.5">*</span>
                </label>
                <div className="space-y-2">
                  {PLANS.map(p => (
                    <button
                      key={p.name}
                      onClick={() => setForm(f => ({ ...f, plan: p.name }))}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-150 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none ${
                        form.plan === p.name
                          ? 'border-white/40 bg-white/20'
                          : 'border-white/15 bg-white/10 hover:bg-white/15 hover:border-white/25'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${form.plan === p.name ? 'border-white bg-white' : 'border-white/30'}`}>
                        {form.plan === p.name && <Check className="w-3 h-3 text-blue-950" strokeWidth={3} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-semibold ${form.plan === p.name ? 'text-white' : 'text-white/70'}`}>{p.name}</span>
                            {p.elite && (
                              <span className="text-xs font-bold bg-white/15 border border-white/20 text-white px-2 py-0.5 rounded-full">Premium</span>
                            )}
                          </div>
                          <span className={`text-xs font-semibold flex-shrink-0 ${form.plan === p.name ? 'text-white' : 'text-white/40'}`}>{p.price}</span>
                        </div>
                        <p className={`text-xs mt-0.5 truncate ${form.plan === p.name ? 'text-white/60' : 'text-white/30'}`}>{p.feature}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white/60 hover:bg-white/15 hover:text-white text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!step2Valid}
                  className="flex-1 bg-white text-blue-950 disabled:bg-white/20 disabled:text-white/30 disabled:cursor-not-allowed font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 text-sm focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
                >
                  Activate My Plan <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center text-center py-4 space-y-5">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-white tracking-tight">You're in, {form.name.split(' ')[0]}!</h2>
                <p className="text-white/50 text-sm mt-2 max-w-xs mx-auto leading-relaxed">
                  Your <span className="font-semibold text-white">{form.plan}</span> plan is being activated. Check your email for your digital card within 10 minutes.
                </p>
              </div>
              <div className="w-full bg-white/10 border border-white/15 rounded-xl p-4 text-left space-y-3">
                {[
                  { label: 'Plan',         value: form.plan },
                  { label: 'Email',        value: form.email },
                  { label: 'Digital card', value: 'Activating — ready in ~10 min' },
                  { label: 'Confirmation', value: `Sent to ${form.email}` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between gap-3 text-sm">
                    <span className="text-white/40 font-medium">{label}</span>
                    <span className="text-white font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={onClose}
                className="w-full bg-white text-blue-950 font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 text-sm focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
              >
                Return to Homepage
              </button>
              <p className="text-xs text-white/30">Questions? Call 0800-CLEARLINE anytime.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
