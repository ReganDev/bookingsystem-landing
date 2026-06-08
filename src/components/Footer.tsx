export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* CTA banner */}
        <div className="rounded-2xl border border-violet-500/20 bg-violet-600/10 p-10 text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to take bookings online?
          </h2>
          <p className="text-slate-400 mb-6 text-base">
            Start for free. No credit card required.
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            Create your free account
          </a>
        </div>

        {/* Footer links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M8 2a1 1 0 011 1v1.5h2.5a1 1 0 010 2H9V8a1 1 0 01-2 0V6.5H4.5a1 1 0 010-2H7V3a1 1 0 011-1z" fill="white"/>
                <rect x="3" y="10" width="10" height="1.5" rx="0.75" fill="white"/>
                <rect x="5" y="12.5" width="6" height="1.5" rx="0.75" fill="white"/>
              </svg>
            </div>
            <span className="text-slate-400 font-medium">DashBook</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-slate-400 transition-colors">Pricing</a>
            <a href="mailto:regan_gray@hotmail.com" className="hover:text-slate-400 transition-colors">Contact</a>
          </div>

          <p>© {new Date().getFullYear()} DashBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
