import dashboardCalendar from '../assets/screenshots/dashboard-calendar.png'
import { useEnquiryModal } from '../context/EnquiryModalContext'

export default function Hero() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden">
      {/* Layered background: faint grid + off-center emerald wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse 80% 55% at 50% 0%, #000 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 55% at 50% 0%, #000 40%, transparent 100%)',
          }}
        />
        <div className="absolute -top-24 right-[8%] w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 -left-24 w-[420px] h-[420px] bg-teal-500/[0.07] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Online booking, simplified
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
          The booking platform{' '}
          <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
            your clients will love
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          BookingBase gives service businesses a working online booking system. Manage your
          calendar, services, and appointments from one dashboard, and let clients book
          themselves online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={openEnquiry}
            className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold text-base transition-all hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
          >
            Get started
          </button>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-xl border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-white font-medium text-base transition-all"
          >
            See how it works
          </a>
        </div>

        {/* Positioning line */}
        <p className="mt-10 text-sm text-slate-500">
          Built for salons, clinics, studios and consultants across the UK
        </p>
      </div>

      {/* Real product screenshot */}
      <div className="relative max-w-5xl mx-auto mt-20">
        <div className="absolute -inset-x-8 -top-8 bottom-0 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative rounded-2xl border border-white/10 bg-[#0c110f]/80 backdrop-blur overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-emerald-500/10">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.03]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-xs text-slate-500">app.bookingbase.co.uk/dashboard</span>
          </div>
          <img
            src={dashboardCalendar}
            alt="BookingBase calendar view showing a month of appointments"
            className="w-full block"
          />
        </div>
        {/* Shadow fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080b0a] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
