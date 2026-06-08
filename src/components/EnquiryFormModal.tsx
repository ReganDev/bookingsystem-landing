import { useEffect, useState, type FormEvent } from 'react'

const CONTACT_EMAIL = 'regan_gray@hotmail.com'

type EnquiryFormModalProps = {
  isOpen: boolean
  onClose: () => void
}

type FormState = {
  name: string
  email: string
  businessName: string
  phone: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  businessName: '',
  phone: '',
  message: '',
}

export default function EnquiryFormModal({
  isOpen,
  onClose,
}: EnquiryFormModalProps) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false)
      setForm(initialForm)
    }
  }, [isOpen])

  if (!isOpen) return null

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const subject = encodeURIComponent(
      `DashBook enquiry from ${form.businessName}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Business: ${form.businessName}`,
        form.phone ? `Phone: ${form.phone}` : null,
        '',
        'Message:',
        form.message,
      ]
        .filter(Boolean)
        .join('\n'),
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close enquiry form"
      />

      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#12121a] shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h2 id="enquiry-title" className="text-lg font-semibold text-white">
              Get in touch
            </h2>
            <p className="text-sm text-slate-400 mt-0.5">
              Tell us about your business and we&apos;ll get back to you.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-violet-500/15 text-violet-400 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Thanks for getting in touch
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Your email client should open with your enquiry ready to send.
              We&apos;ll respond as soon as we can.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div>
              <label htmlFor="enquiry-name" className="block text-sm text-slate-300 mb-1.5">
                Full name
              </label>
              <input
                id="enquiry-name"
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="enquiry-email" className="block text-sm text-slate-300 mb-1.5">
                Email
              </label>
              <input
                id="enquiry-email"
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                placeholder="you@business.com"
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-business"
                className="block text-sm text-slate-300 mb-1.5"
              >
                Business name
              </label>
              <input
                id="enquiry-business"
                type="text"
                value={form.businessName}
                onChange={(e) => updateField('businessName', e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                placeholder="Your salon, clinic, studio…"
              />
            </div>

            <div>
              <label htmlFor="enquiry-phone" className="block text-sm text-slate-300 mb-1.5">
                Phone <span className="text-slate-500">(optional)</span>
              </label>
              <input
                id="enquiry-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="enquiry-message" className="block text-sm text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                id="enquiry-message"
                rows={4}
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-colors resize-none"
                placeholder="Tell us what you're looking for…"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors"
            >
              Send enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
