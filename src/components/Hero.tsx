import { ArrowRight, Home, Wrench, MapPin } from 'lucide-react';

const HERO_IMAGE =
  'https://images.pexels.com/photos/9679179/pexels-photo-9679179.jpeg?auto=compress&cs=tinysrgb&w=900';

const TRUST_POINTS = [
  { icon: Home, label: 'Residential Electrical Services' },
  { icon: Wrench, label: 'Repairs & Installations' },
  { icon: MapPin, label: 'Serving De Soto, Kansas' },
];

export default function Hero() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Text column */}
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
              Electrical Services in De Soto, Kansas
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Electrician in De Soto, KS
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              From electrical repairs and installations to panel upgrades and
              lighting, explore professional electrical services for homes and
              businesses in De Soto, Kansas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="/#services"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-navy-200 bg-white px-7 py-3.5 text-base font-bold text-navy hover:border-navy hover:bg-surface-light transition-colors"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <ul className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point.label}
                  className="flex items-center gap-2 text-sm font-semibold text-navy-500"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-brand-yellow">
                    <point.icon className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {point.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Image column */}
          <div className="relative lg:pl-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-navy-100">
              <img
                src={HERO_IMAGE}
                alt="Professional electrician working on an electrical panel in a residential home"
                className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[540px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-xl bg-navy px-5 py-4 shadow-hero sm:block">
              <p className="text-2xl font-extrabold text-white leading-none">
                Open 24/7
              </p>
              <p className="mt-1 text-xs font-medium text-white/70">
                7 Days a Week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
