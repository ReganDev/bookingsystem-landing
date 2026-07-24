import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function Footer() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <footer className="border-t border-slate-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* CTA banner */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center mb-12 reveal">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-200/50 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Ready to take bookings online?
            </h2>
            <p className="text-slate-600 mb-6 text-base">
              Tell us about your business and we'll set your account up for you.
            </p>
            <button
              type="button"
              onClick={openEnquiry}
              className="inline-block px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-emerald-600/25 cursor-pointer"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M8 2a1 1 0 011 1v1.5h2.5a1 1 0 010 2H9V8a1 1 0 01-2 0V6.5H4.5a1 1 0 010-2H7V3a1 1 0 011-1z" fill="#ffffff"/>
                <rect x="3" y="10" width="10" height="1.5" rx="0.75" fill="#ffffff"/>
                <rect x="5" y="12.5" width="6" height="1.5" rx="0.75" fill="#ffffff"/>
              </svg>
            </div>
            <span className="text-slate-700 font-medium">BookingBase</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-800 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-slate-800 transition-colors">Pricing</a>
            <a href="mailto:regan_gray@hotmail.com" className="hover:text-slate-800 transition-colors">Contact</a>
          </div>

          <p>© {new Date().getFullYear()} BookingBase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
