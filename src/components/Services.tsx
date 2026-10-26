import {
  ArrowRight,
  Clock,
  PanelTop,
  Plug,
  RefreshCw,
  ShieldAlert,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: 'Electrical Repair',
    description:
      'Find help with common electrical problems, including faulty outlets, switches, flickering lights, and other electrical issues.',
    href: '/electrical-repair/',
  },
  {
    icon: Plug,
    title: 'Electrical Installation',
    description:
      'Explore electrical installation services for new fixtures, electrical components, and home improvement projects.',
    href: '/electrical-installation/',
  },
  {
    icon: PanelTop,
    title: 'Electrical Panel Upgrades',
    description:
      'Learn about electrical panel upgrades for homes that may need additional capacity or updated electrical equipment.',
    href: '/electrical-panel-upgrades/',
  },
  {
    icon: RefreshCw,
    title: 'Electrical Panel Replacement',
    description:
      'Explore electrical panel replacement options when an existing panel is damaged, outdated, or unsuitable for your electrical needs.',
    href: '/electrical-panel-replacement/',
  },
  {
    icon: ShieldAlert,
    title: 'Circuit Breaker Repair',
    description:
      'Learn about troubleshooting circuit breakers that trip repeatedly or fail to operate as expected.',
    href: '/circuit-breaker-repair/',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Electrical Services',
    description:
      'Find electrical assistance for urgent issues that may require prompt attention, any time of day or night.',
    href: '/emergency-electrician/',
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:border-navy-200 hover:shadow-hero">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </span>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-400">
        {service.description}
      </p>
      <a
        href={service.href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-navy-600 transition-colors hover:text-brand-yellow-dark"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-surface-light scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
            Electrical Services
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Services in De Soto, KS
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Looking for an electrician in De Soto, Kansas? Explore electrical
            repair, installation, panel upgrades, lighting, and other
            electrical services for your home. Our service categories make it
            easy to find the electrical solution you need.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {SERVICES.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
