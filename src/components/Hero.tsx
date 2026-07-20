import dashboardCalendar from '../assets/screenshots/dashboard-calendar.png'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Online booking, simplified
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none mb-6">
          The booking platform{' '}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            your clients will love
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          BookingBase gives service businesses a working online booking system — manage your calendar, services, and appointments from one dashboard, and let clients book themselves online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            Get started
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium text-base transition-all"
          >
            See how it works →
          </a>
        </div>

        {/* Positioning line */}
        <p className="mt-10 text-sm text-slate-500">
          Built for salons, clinics, studios & consultants across the UK
        </p>
      </div>

      {/* Real product screenshot */}
      <div className="relative max-w-5xl mx-auto mt-20">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur overflow-hidden shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-slate-500">app.bookingbase.co.uk/dashboard</span>
          </div>
          <img
            src={dashboardCalendar}
            alt="BookingBase calendar view showing a month of appointments"
            className="w-full block"
          />
        </div>
        {/* Shadow fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
