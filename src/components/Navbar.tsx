import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function Navbar() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-[#f6f8f7]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2a1 1 0 011 1v1.5h2.5a1 1 0 010 2H9V8a1 1 0 01-2 0V6.5H4.5a1 1 0 010-2H7V3a1 1 0 011-1z" fill="#ffffff"/>
              <rect x="3" y="10" width="10" height="1.5" rx="0.75" fill="#ffffff"/>
              <rect x="5" y="12.5" width="6" height="1.5" rx="0.75" fill="#ffffff"/>
            </svg>
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">BookingBase</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openEnquiry}
            className="text-sm px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold transition-colors cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  )
}
