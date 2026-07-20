const steps = [
  {
    number: '01',
    title: 'Get in touch',
    description: 'Tell us about your business. We set up your account and email you a login and a temporary password — no forms to fill in yourself.',
  },
  {
    number: '02',
    title: 'Add your services & hours',
    description: 'Log in and add your services with durations and prices, then set the days and hours you accept bookings, breaks included.',
  },
  {
    number: '03',
    title: 'Share your booking link',
    description: 'Send clients your unique booking page. They create a quick free account, verify their email, then pick a service and an available time slot.',
  },
  {
    number: '04',
    title: 'Manage from your dashboard',
    description: 'Confirm, complete, or cancel bookings from one place. See your month at a glance on the calendar, or add a booking yourself for phone and walk-in clients.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            No complicated setup
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We onboard you personally, then you run the day-to-day from your dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-violet-500/30 to-transparent -translate-y-px z-0" />
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-4">
                  <span className="text-violet-400 font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
