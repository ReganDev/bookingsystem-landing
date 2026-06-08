const features = [
  'Unlimited staff members',
  'Unlimited bookings',
  'Public booking page with custom slug',
  'Service catalogue with pricing',
  'Per-staff schedules & breaks',
  'Automatic conflict detection',
  'Full booking lifecycle management',
  'No-show & cancellation tracking',
  'Multi-timezone & currency support',
  'Email support',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No hidden fees. No per-booking commissions. Try free for 2 weeks, then one flat rate.
          </p>
        </div>

        <div className="max-w-md mx-auto pt-5">
          <div className="relative rounded-2xl border-2 border-violet-500/60 bg-violet-600/10 px-8 pb-8 pt-12 flex flex-col shadow-lg shadow-violet-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-2 w-full max-w-[calc(100%-1rem)] flex justify-center">
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-violet-600 text-white text-xs font-semibold text-center leading-snug shadow-md border border-violet-400/40">
                2-Week Free Trial · No Payment Required
              </span>
            </div>

            <div className="mb-6 text-center">
              <h3 className="font-bold text-xl text-violet-300 mb-3">Standard</h3>
              <div className="flex items-baseline gap-1 justify-center mb-1">
                <span className="text-5xl font-bold text-white">£18</span>
                <span className="text-slate-400 text-base">/month</span>
              </div>
              <p className="text-slate-500 text-sm">Everything included. One simple price.</p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="mailto:regan_gray@hotmail.com"
              className="block text-center py-3.5 px-6 rounded-xl font-semibold text-sm bg-violet-600 hover:bg-violet-500 text-white transition-all hover:shadow-lg hover:shadow-violet-500/25"
            >
              Start your free trial
            </a>
          </div>
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          Cancel any time. No contracts, no lock-in.
        </p>
      </div>
    </section>
  )
}
