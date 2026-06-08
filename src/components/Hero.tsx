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
          DashBook gives service businesses a fully automated online booking system — manage staff schedules, services, and appointments without lifting a finger.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-violet-500/25"
          >
            Start free today
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium text-base transition-all"
          >
            See how it works →
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-10 text-sm text-slate-500">
          Trusted by salons, clinics, studios & consultants across the UK
        </p>
      </div>

      {/* Mock dashboard preview */}
      <div className="relative max-w-5xl mx-auto mt-20">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur overflow-hidden shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-slate-500">dashbook.app/dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-px bg-white/5">
            {/* Left sidebar */}
            <div className="col-span-1 bg-slate-900 p-4 space-y-2">
              {['Dashboard', 'Bookings', 'Staff', 'Services', 'Customers', 'Settings'].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${i === 1 ? 'bg-violet-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-white' : 'bg-slate-600'}`} />
                  {item}
                </div>
              ))}
            </div>
            {/* Main content */}
            <div className="col-span-2 bg-[#0d0d14] p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium text-sm">Today's Bookings</span>
                <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-md">8 Jun 2026</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Emma Clarke', service: 'Haircut & Blow Dry', time: '09:00', status: 'confirmed' },
                  { name: 'James Patel', service: 'Beard Trim', time: '10:30', status: 'pending' },
                  { name: 'Sophie Davis', service: 'Colour Treatment', time: '12:00', status: 'confirmed' },
                  { name: 'Oliver Smith', service: 'Consultation', time: '14:30', status: 'completed' },
                ].map((booking) => (
                  <div key={booking.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                        {booking.name[0]}
                      </div>
                      <div>
                        <div className="text-white text-xs font-medium">{booking.name}</div>
                        <div className="text-slate-500 text-xs">{booking.service}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 text-xs">{booking.time}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        booking.status === 'confirmed' ? 'bg-green-500/15 text-green-400' :
                        booking.status === 'pending' ? 'bg-yellow-500/15 text-yellow-400' :
                        'bg-slate-500/15 text-slate-400'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Shadow fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
