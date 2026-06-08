const steps = [
  {
    number: '01',
    title: 'Create your business profile',
    description: 'Set up your business in minutes. Add your name, location, timezone, and branding. You get a unique public booking URL instantly.',
  },
  {
    number: '02',
    title: 'Add your staff & services',
    description: 'Define your team\'s working hours and breaks. Add your services with durations and prices. Each staff member can offer different services.',
  },
  {
    number: '03',
    title: 'Share your booking link',
    description: 'Send clients your unique link. They pick a service, choose a staff member, and select an available time slot — no account needed.',
  },
  {
    number: '04',
    title: 'Manage from your dashboard',
    description: 'Confirm, cancel, or complete bookings from one place. Track no-shows, view upcoming appointments, and keep on top of your schedule.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Up and running in under 10 minutes
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No complicated setup. No training required. Just follow the steps.
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
