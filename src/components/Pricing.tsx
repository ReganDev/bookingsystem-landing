import { useEnquiryModal } from '../context/EnquiryModalContext'

const features = [
  'Unlimited bookings',
  'Public booking page with custom link',
  'Service catalogue with pricing',
  'Opening hours & breaks',
  'Automatic conflict detection',
  'Full booking lifecycle management',
  'Cancellation tracking',
  'Email support',
]

export default function Pricing() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <section id="pricing" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No hidden fees. No per-booking commissions. Try free for 2 weeks, then one flat rate.
          </p>
        </div>

        <div className="max-w-md mx-auto pt-5 reveal">
          <div className="relative rounded-2xl border border-emerald-500/50 bg-emerald-500/[0.06] px-8 pb-8 pt-12 flex flex-col shadow-lg shadow-emerald-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-2 w-full max-w-[calc(100%-1rem)] flex justify-center">
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-500 text-emerald-950 text-xs font-semibold text-center leading-snug shadow-md border border-emerald-300/40">
                2-Week Free Trial · No Payment Required
              </span>
            </div>

            <div className="mb-6 text-center">
              <h3 className="font-bold text-xl text-emerald-300 mb-3">Standard</h3>
              <div className="flex items-baseline gap-1 justify-center mb-1">
                <span className="text-5xl font-bold text-white">£18</span>
                <span className="text-slate-400 text-base">/month</span>
              </div>
              <p className="text-slate-500 text-sm">Everything included. One simple price.</p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={openEnquiry}
              className="block text-center py-3.5 px-6 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-emerald-950 transition-all hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
            >
              Start your free trial
            </button>
          </div>
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          Cancel any time. No contracts, no lock-in.
        </p>
      </div>
    </section>
  )
}
