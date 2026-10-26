export default function FinalCTA() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-navy px-6 py-14 shadow-hero sm:px-12 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Looking for an Electrician in De Soto, KS?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              From electrical repairs to installations and panel upgrades,
              explore your options with De Soto Electric Pros. Contact us to
              discuss your electrical service needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white hover:border-white hover:bg-white/5 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
