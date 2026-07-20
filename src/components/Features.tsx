const features = [
  {
    icon: '📅',
    title: 'Smart Scheduling',
    description: 'Automatic conflict detection with configurable buffer zones and advance booking limits. No double bookings — ever.',
  },
  {
    icon: '🛍️',
    title: 'Service Catalogue',
    description: 'List your services with custom durations and pricing. Edit, deactivate, or remove them any time from your dashboard.',
  },
  {
    icon: '🕐',
    title: 'Opening Hours & Breaks',
    description: 'Set the days and hours you accept bookings, with lunch breaks or gaps built in. Clients can only book inside them.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'JWT-based authentication with refresh tokens. Each business is fully isolated — your data stays yours.',
  },
  {
    icon: '📲',
    title: 'Self-Service Booking',
    description: 'Clients create a quick free account, verify their email once, then book online themselves — no phone calls needed.',
  },
  {
    icon: '📊',
    title: 'Full Booking Lifecycle',
    description: 'Track every booking from pending → confirmed → completed or cancelled, right from your bookings list or calendar.',
  },
  {
    icon: '👥',
    title: 'Multi-Staff Scheduling',
    description: 'Per-staff schedules and bookings, so clients book the right person at the right time.',
    comingSoon: true,
  },
  {
    icon: '🏢',
    title: 'Logo & Branding',
    description: 'Upload your logo and customise how your public booking page looks.',
    comingSoon: true,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Everything you need to run bookings
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Built for real service businesses — not a generic SaaS with features bolted on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative p-5 rounded-xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group"
            >
              {f.comingSoon && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wide text-violet-400 bg-violet-500/10 border border-violet-500/30 rounded-full px-2 py-0.5">
                  Coming soon
                </span>
              )}
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-violet-300 transition-colors">
                {f.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
