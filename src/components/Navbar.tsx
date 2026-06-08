import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function Navbar() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2a1 1 0 011 1v1.5h2.5a1 1 0 010 2H9V8a1 1 0 01-2 0V6.5H4.5a1 1 0 010-2H7V3a1 1 0 011-1z" fill="white"/>
              <rect x="3" y="10" width="10" height="1.5" rx="0.75" fill="white"/>
              <rect x="5" y="12.5" width="6" height="1.5" rx="0.75" fill="white"/>
            </svg>
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">DashBook</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openEnquiry}
            className="text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
          >
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  )
}
