import { Clock, MapPin, MessageSquare, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: MapPin,
    title: 'Local Service Focus',
    description:
      'Find electrical service information tailored to homeowners looking for an electrician in De Soto, KS.',
  },
  {
    icon: Zap,
    title: 'A Range of Electrical Services',
    description:
      'Explore options for electrical repairs, installations, circuit breakers, electrical panels, and lighting.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Electrical concerns can happen at any time. Contact us to discuss your electrical service needs, day or night.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'Understand the service options available and discuss your electrical concerns before arranging work.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="lg:pr-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
              Why De Soto Electric Pros
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Electrical Services Focused on Your Home
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              Electrical problems can interrupt your routine and affect your
              home's comfort and safety. De Soto Electric Pros helps homeowners
              explore electrical repair, installation, panel upgrades,
              lighting, and other electrical service options in De Soto,
              Kansas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
