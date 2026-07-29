import type { ReactNode } from 'react'

type Feature = {
  icon: ReactNode
  title: string
  description: string
  comingSoon?: boolean
}

/* Lucide-style stroke icons, sized to inherit currentColor */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const CalendarCheck = () => (
  <svg {...iconProps}>
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 2.5v4M16 2.5v4M9 14.5l2 2 4-4" />
  </svg>
)
const Tag = () => (
  <svg {...iconProps}>
    <path d="M3 3h7l11 11-7 7L3 10V3z" />
    <circle cx="7.5" cy="7.5" r="1.25" />
  </svg>
)
const Clock = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)
const Shield = () => (
  <svg {...iconProps}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)
const Phone = () => (
  <svg {...iconProps}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M11 18.5h2" />
  </svg>
)
const Lifecycle = () => (
  <svg {...iconProps}>
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 4v4h-4" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)
const Users = () => (
  <svg {...iconProps}>
    <circle cx="9" cy="8" r="3.25" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a3.25 3.25 0 0 1 0 6.3" />
    <path d="M17 14.5a5.5 5.5 0 0 1 3.5 5.5" />
  </svg>
)
const Sparkle = () => (
  <svg {...iconProps}>
    <path d="M12 3l1.8 4.9L18.7 9.7 13.8 11.5 12 16.4 10.2 11.5 5.3 9.7 10.2 7.9 12 3z" />
    <path d="M19 15l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9z" />
  </svg>
)

const features: Feature[] = [
  {
    icon: <CalendarCheck />,
    title: 'Smart Scheduling',
    description:
      'Automatic conflict detection with configurable buffer zones and advance booking limits. No double bookings, ever.',
  },
  {
    icon: <Tag />,
    title: 'Service Catalogue',
    description:
      'List your services with custom durations and pricing. Edit, deactivate, or remove them any time from your dashboard.',
  },
  {
    icon: <Clock />,
    title: 'Opening Hours & Breaks',
    description:
      'Set the days and hours you accept bookings, with lunch breaks or gaps built in. Clients can only book inside them.',
  },
  {
    icon: <Shield />,
    title: 'Secure & Private',
    description:
      'JWT-based authentication with refresh tokens. Each business is fully isolated, so your data stays yours.',
  },
  {
    icon: <Phone />,
    title: 'Self-Service Booking',
    description:
      'Clients create a quick free account, verify their email once, then book online themselves. No phone calls needed.',
  },
  {
    icon: <Lifecycle />,
    title: 'Full Booking Lifecycle',
    description:
      'Track every booking from pending to confirmed to completed or cancelled, right from your bookings list or calendar.',
  },
  {
    icon: <Users />,
    title: 'Multi-Staff Scheduling',
    description:
      'Per-staff schedules and bookings, so clients book the right person at the right time.',
    comingSoon: true,
  },
  {
    icon: <Sparkle />,
    title: 'Logo & Branding',
    description: 'Upload your logo and customise how your public booking page looks.',
    comingSoon: true,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Everything you need to run bookings
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Built for real service businesses, not a generic SaaS with features bolted on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 transition-colors group"
            >
              {f.comingSoon && (
                <span className="absolute top-4 right-4 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                  Coming soon
                </span>
              )}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-emerald-700 shrink-0 [&>svg]:w-5 [&>svg]:h-5">{f.icon}</span>
                <h3 className="text-slate-900 font-semibold text-[15px] group-hover:text-emerald-700 transition-colors">
                  {f.title}
                </h3>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
