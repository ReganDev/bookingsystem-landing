import dashboardCalendar from '../assets/screenshots/dashboard-calendar.png'
import { useEnquiryModal } from '../context/EnquiryModalContext'
import OrbitShowcase from './OrbitShowcase'

export default function Hero() {
  const { openEnquiry } = useEnquiryModal()

  return (
    <section id="top" className="relative pt-28 lg:pt-32 pb-16 px-6 overflow-hidden">
      {/* Soft, warm background wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 right-[4%] w-[560px] h-[560px] bg-emerald-300/25 rounded-full blur-[130px]" />
        <div className="absolute top-40 -left-40 w-[440px] h-[440px] bg-teal-200/30 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-y-12 gap-x-12 items-center">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <h1 className="text-[2.4rem] sm:text-5xl lg:text-[3.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-5">
            Get fully booked,{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              on autopilot
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            BookingBase gives salons and service businesses a working online booking system.
            Manage your calendar, services, and appointments from one dashboard, and let clients
            book themselves online, day or night.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
            <button
              type="button"
              onClick={openEnquiry}
              className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-sm hover:shadow-lg hover:shadow-emerald-600/25 cursor-pointer"
            >
              Get started
            </button>
            <a
              href="#how-it-works"
              className="px-7 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700 font-medium text-base transition-all"
            >
              See how it works
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
            <div className="flex -space-x-2.5">
              {[
                'linear-gradient(140deg,#a7f3d0,#059669)',
                'linear-gradient(140deg,#99f6e4,#0d9488)',
                'linear-gradient(140deg,#bbf7d0,#10b981)',
              ].map((g, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full ring-2 ring-[#f6f8f7]"
                  style={{ backgroundImage: g }}
                />
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="text-amber-500">★★★★★</span>
              <span className="ml-1.5">Loved by salons, clinics and studios</span>
            </div>
          </div>
        </div>

        {/* Right: orbital showcase with cycling salon photos */}
        <div className="relative">
          <OrbitShowcase />

          {/* Floating "just booked" chip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 sm:bottom-1 lg:left-0 lg:translate-x-0 lg:bottom-6">
            <div className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-lg shadow-slate-300/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Emma</span> just booked a Balayage
              </span>
            </div>
          </div>

          {/* 24/7 pill */}
          <div className="absolute right-1 top-2 lg:top-4 hidden sm:block">
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 shadow-md shadow-emerald-600/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-700">24/7 online booking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Real product screenshot */}
      <div className="relative max-w-5xl mx-auto mt-20 lg:mt-24">
        <div className="absolute -inset-x-8 -top-8 bottom-0 bg-emerald-300/20 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xl shadow-slate-300/50 ring-1 ring-emerald-600/10">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-slate-400">app.bookingbase.co.uk/dashboard</span>
          </div>
          <img
            src={dashboardCalendar}
            alt="BookingBase calendar view showing a month of appointments"
            className="w-full block"
          />
        </div>
      </div>
    </section>
  )
}
