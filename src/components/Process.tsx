const STEPS = [
  {
    number: '1',
    title: 'Tell Us About the Issue',
    body: (
      <>
        Explain the electrical problem or describe the installation you need.{' '}
        <a
          href="/contact/"
          className="font-semibold text-navy-600 hover:text-brand-yellow-dark transition-colors"
        >
          Contact us
        </a>{' '}
        to get started.
      </>
    ),
  },
  {
    number: '2',
    title: 'Discuss Your Service Needs',
    body: <>Discuss the requested service, relevant details, and available arrangements with our team.</>,
  },
  {
    number: '3',
    title: 'Arrange the Electrical Work',
    body: <>Service and scheduling details can be confirmed before work is arranged.</>,
  },
];

export default function Process() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Getting Electrical Service in De Soto Made Simple
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-16 sm:grid-cols-3 lg:pb-20">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-lg font-extrabold text-navy">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
