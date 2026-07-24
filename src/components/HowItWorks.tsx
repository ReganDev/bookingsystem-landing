import type { ReactNode } from 'react'
import dashboardServices from '../assets/screenshots/dashboard-services.png'
import dashboardHours from '../assets/screenshots/dashboard-hours.png'
import publicBusinessTimes from '../assets/screenshots/public-business-times.png'
import dashboardBookings from '../assets/screenshots/dashboard-bookings.png'

type Step = {
  number: string
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  url?: string
  visual?: ReactNode
}

/* Step 1 has no product screenshot, so it gets an illustrated "account ready" card */
const AccountReadyCard = () => (
  <div className="relative rounded-2xl border border-white/10 bg-[#0c110f]/80 p-8 shadow-xl shadow-black/40 ring-1 ring-emerald-500/10 overflow-hidden">
    <div className="absolute -top-16 -right-10 w-56 h-56 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
    <div className="relative">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M4 6.5l8 6 8-6" />
          </svg>
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Your account is ready</p>
          <p className="text-slate-500 text-xs">from BookingBase</p>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] border border-white/10 px-3.5 py-2.5">
          <span className="text-slate-500">Login</span>
          <span className="text-slate-200 font-medium">you@yourbusiness.com</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] border border-white/10 px-3.5 py-2.5">
          <span className="text-slate-500">Temporary password</span>
          <span className="text-emerald-300 font-mono tracking-wider">•••••••••</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-2.5">
          <span className="text-emerald-200">Dashboard</span>
          <span className="text-emerald-300 font-medium">Log in →</span>
        </div>
      </div>
    </div>
  </div>
)

const steps: Step[] = [
  {
    number: '01',
    eyebrow: 'Onboarding',
    title: 'Get in touch, we set you up',
    description:
      'Tell us about your business. We create your account and email you a login and a temporary password, so there are no setup forms for you to fill in yourself.',
    visual: <AccountReadyCard />,
  },
  {
    number: '02',
    eyebrow: 'Your dashboard',
    title: 'Add your services and prices',
    description:
      'Log in and list what you offer with custom durations and pricing. Add, edit, deactivate, or delete services any time your offering changes.',
    image: dashboardServices,
    imageAlt:
      'Services list in the BookingBase dashboard with edit, deactivate, and delete controls',
    url: 'app.bookingbase.co.uk/services',
  },
  {
    number: '03',
    eyebrow: 'Your dashboard',
    title: 'Set your opening hours and breaks',
    description:
      'Choose the days and hours you accept bookings, with lunch breaks or gaps built in. Clients can only ever book inside the times you set.',
    image: dashboardHours,
    imageAlt: 'Opening hours and breaks configuration in the BookingBase dashboard',
    url: 'app.bookingbase.co.uk/hours',
  },
  {
    number: '04',
    eyebrow: 'Their booking page',
    title: 'Share your link, clients book themselves',
    description:
      'Send clients your unique booking page. They create a quick free account, verify their email, then pick a service and an available time slot. No phone calls needed.',
    image: publicBusinessTimes,
    imageAlt: 'A client picking an available time slot on a public BookingBase booking page',
    url: 'app.bookingbase.co.uk/your-business',
  },
  {
    number: '05',
    eyebrow: 'Your dashboard',
    title: 'Manage everything from one place',
    description:
      'Confirm, complete, or cancel bookings from a single list, see your month at a glance on the calendar, or add a booking yourself for phone and walk-in clients.',
    image: dashboardBookings,
    imageAlt: 'Bookings list in the BookingBase dashboard showing booking statuses',
    url: 'app.bookingbase.co.uk/bookings',
  },
]

function BrowserFrame({
  image,
  alt,
  url,
}: {
  image: string
  alt: string
  url?: string
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-emerald-500/[0.07] blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
      <div className="relative rounded-2xl border border-white/10 bg-[#0c110f]/80 overflow-hidden shadow-xl shadow-black/50 ring-1 ring-emerald-500/10">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.03]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          {url && <span className="ml-3 text-[11px] text-slate-500 truncate">{url}</span>}
        </div>
        <img src={image} alt={alt} className="w-full block" loading="lazy" />
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            From sign-up to fully booked
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We onboard you personally, then you run the day-to-day from your dashboard. Here is
            the whole flow, start to finish.
          </p>
        </div>

        <div className="relative space-y-16 lg:space-y-24">
          {/* Vertical connector line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent" aria-hidden="true" />

          {steps.map((step, i) => {
            const imageFirst = i % 2 === 1
            return (
              <div
                key={step.number}
                className="reveal relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
              >
                {/* Text column */}
                <div className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold text-sm flex items-center justify-center shrink-0">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400/80">
                      {step.eyebrow}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed max-w-md">{step.description}</p>
                </div>

                {/* Visual column */}
                <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
                  {step.image ? (
                    <BrowserFrame
                      image={step.image}
                      alt={step.imageAlt ?? step.title}
                      url={step.url}
                    />
                  ) : (
                    step.visual
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
