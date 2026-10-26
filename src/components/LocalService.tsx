import { MapPin } from 'lucide-react';

const LOCAL_LINKS = [
  { label: 'Electrical Repair', href: '/electrical-repair/' },
  { label: 'Electrical Installation', href: '/electrical-installation/' },
  { label: 'Electrical Panel Upgrades', href: '/electrical-panel-upgrades/' },
];

export default function LocalService() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
            <MapPin className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Services in De Soto, Kansas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Looking for electrical services in De Soto, KS? De Soto Electric
            Pros focuses on helping customers explore electrical repairs,
            installations, panel upgrades, circuit breaker issues, and other
            home electrical service needs in the De Soto area.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy-400">
            Whether you are searching for an electrician in De Soto, Kansas,
            electrical repair in De Soto, or a 24-hour electrician, use our
            service pages to learn more about the options available.
          </p>

          <div className="mt-7 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            {LOCAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-lg border border-navy-200 bg-white px-5 py-2.5 text-sm font-bold text-navy hover:border-navy hover:bg-surface-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
