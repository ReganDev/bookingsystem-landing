import dashboardServices from '../assets/screenshots/dashboard-services.png'
import publicBusinessTimes from '../assets/screenshots/public-business-times.png'

export default function ProductShowcase() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            See it in action
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            One dashboard for you, one simple booking page for your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden shadow-xl shadow-black/40">
            <img
              src={dashboardServices}
              alt="Services list in the BookingBase business dashboard, with edit, deactivate, and delete controls"
              className="w-full block"
            />
            <div className="p-5 border-t border-white/5">
              <h3 className="text-white font-semibold text-sm mb-1">Your dashboard</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Add, edit, deactivate, or delete services whenever your offering changes.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden shadow-xl shadow-black/40">
            <img
              src={publicBusinessTimes}
              alt="A client picking an available time slot on a business's public booking page"
              className="w-full block"
            />
            <div className="p-5 border-t border-white/5">
              <h3 className="text-white font-semibold text-sm mb-1">Their booking page</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Clients pick a service, a day, and a time slot — only the ones you're actually open for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
