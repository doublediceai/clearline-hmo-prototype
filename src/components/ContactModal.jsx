import { useState, useEffect } from 'react'
import { X, Send, CheckCircle2, Phone, ChevronDown } from 'lucide-react'
import ClearlineLogo from './ClearlineLogo'

const INQUIRY_TYPES = [
  'I want to understand the plans',
  "I'm an SME looking for a team quote",
  'I need help with my existing policy',
  'I have a billing or payment question',
  'I want to find hospitals in my area',
  'Something else',
]

const Field = ({ label, type = 'text', placeholder, value, onChange, required, optional, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-white/50 tracking-widest uppercase">
      {label}
      {required && <span className="text-blue-400 ml-0.5">*</span>}
      {optional && <span className="text-white/30 font-normal normal-case tracking-normal ml-1">(optional)</span>}
    </label>
    {children ?? (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
      />
    )}
  </div>
)

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (open) {
      setForm({ name: '', email: '', phone: '', type: '', message: '' })
      setSubmitted(false)
    }
  }, [open])

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))
  const valid = form.name.trim() && form.email.includes('@') && form.type && form.message.trim().length >= 10

  const handleSubmit = (e) => {
    e.preventDefault()
    if (valid) setSubmitted(true)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-md animate-fade-in" onClick={onClose} />
      <div className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl overflow-hidden max-h-[92vh] flex flex-col bg-blue-950 border border-white/15 shadow-[inset_0px_4px_40px_0px_rgba(255,255,255,0.06)] animate-modal-in">

        <div className="flex items-center justify-between px-6 pt-6 pb-5 flex-shrink-0 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <ClearlineLogo gradId="contact-modal" className="h-7 w-auto" />
              <span className="text-white font-semibold text-sm tracking-tight">Clearline HMO</span>
            </div>
            <p className="text-white/40 text-xs">We respond within 2 business hours</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-5">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white tracking-tight">Message received!</h3>
                <p className="text-white/50 text-sm mt-2 leading-relaxed max-w-xs mx-auto">
                  We'll follow up at <span className="font-semibold text-white">{form.email}</span> within 2 business hours.
                </p>
              </div>
              <div className="w-full bg-white/10 border border-white/15 rounded-xl p-4 text-left">
                <p className="text-xs text-white/40 font-medium mb-2">Need urgent help?</p>
                <a href="tel:08001234567" className="flex items-center gap-2 text-white font-semibold text-sm hover:text-white/80 transition-colors">
                  <Phone className="w-4 h-4" /> 0800-CLEARLINE (24/7)
                </a>
              </div>
              <button
                onClick={onClose}
                className="w-full bg-white text-blue-950 font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 text-sm focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
              >
                Back to Homepage
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Full Name" placeholder="Tunde Adebayo" value={form.name} onChange={set('name')} required />
                <Field label="Email Address" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} required />
              </div>
              <Field label="Phone Number" type="tel" placeholder="+234 801 234 5678" value={form.phone} onChange={set('phone')} optional />
              <Field label="What's this about?" required>
                <div className="relative">
                  <select
                    value={form.type}
                    onChange={set('type')}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all appearance-none cursor-pointer pr-10 [&>option]:bg-blue-950 [&>option]:text-white"
                  >
                    <option value="" disabled className="text-white/40">Select inquiry type…</option>
                    {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                </div>
              </Field>
              <Field label="Message" required>
                <textarea
                  placeholder="Tell us a bit more about what you need…"
                  value={form.message}
                  onChange={set('message')}
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all resize-none"
                />
              </Field>
              <button
                type="submit"
                disabled={!valid}
                className="w-full bg-white text-blue-950 disabled:bg-white/20 disabled:text-white/30 disabled:cursor-not-allowed font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 text-sm focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
              <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl p-3">
                <Phone className="w-4 h-4 text-white/50 flex-shrink-0" />
                <p className="text-xs text-white/40">
                  Or call us directly:{' '}
                  <a href="tel:08001234567" className="text-white font-semibold hover:text-white/80 transition-colors">0800-CLEARLINE</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
