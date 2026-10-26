import { Zap } from 'lucide-react';

export default function AvailabilityCTA() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 py-14 text-center lg:py-16">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow text-navy">
            <Zap className="h-7 w-7" strokeWidth={2.5} fill="#182538" />
          </span>

          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Need an Electrician in De Soto, KS?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Electrical issues do not always happen during regular business
              hours. De Soto Electric Pros is available 24/7 for customers
              seeking electrical service in De Soto, Kansas. Contact us to
              explain the issue and discuss the next steps.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
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

          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Open 24 Hours · 7 Days a Week
          </p>
        </div>
      </div>
    </section>
  );
}
