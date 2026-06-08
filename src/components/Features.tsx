const features = [
  {
    icon: '📅',
    title: 'Smart Scheduling',
    description: 'Automatic conflict detection with configurable buffer zones, advance booking limits, and slot duration settings. No double bookings — ever.',
  },
  {
    icon: '👥',
    title: 'Multi-Staff Management',
    description: 'Define individual schedules, working hours, and breaks per staff member. Customers book the right person at the right time.',
  },
  {
    icon: '🛍️',
    title: 'Service Catalogue',
    description: 'List your services with custom durations and pricing. Support for "price on request" for flexible or premium services.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'JWT-based authentication with refresh tokens. Each business is fully isolated — your data stays yours.',
  },
  {
    icon: '📲',
    title: 'Self-Service Booking',
    description: 'Customers book online without creating an account. Share your public booking link and let them handle the rest.',
  },
  {
    icon: '🌍',
    title: 'Multi-Timezone & Currency',
    description: 'Fully configurable per business. Run multiple locations with different timezones under one account.',
  },
  {
    icon: '📊',
    title: 'Full Booking Lifecycle',
    description: 'Track every booking from pending → confirmed → completed or cancelled. No-show tracking included.',
  },
  {
    icon: '🏢',
    title: 'White-Label Ready',
    description: 'Custom business slug, logo, and branding. Your booking page looks like yours — not ours.',
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
              className="p-5 rounded-xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group"
            >
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
