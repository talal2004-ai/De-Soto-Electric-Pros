import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  MapPin,
  Wrench,
  Lightbulb,
  PanelTop,
  CircuitBoard,
  LifeBuoy,
  Search,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const HERO_IMAGE =
  'https://images.pexels.com/photos/38211756/pexels-photo-38211756.jpeg?auto=compress&cs=tinysrgb&w=900';

const PAGE_META = {
  title: 'Electrical Service Area in De Soto, KS | De Soto Electric Pros',
  description:
    'Explore electrical services available for De Soto, Kansas, including electrical repair, installations, panel services, circuit breaker concerns, and urgent electrical issues.',
  canonical: 'https://desotoelectricpros.online/service-area/',
};

const LOCAL_NEEDS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: 'Troubleshooting Electrical Problems',
    description:
      'Investigate flickering lights, faulty outlets, and other common electrical issues around the home.',
  },
  {
    icon: Lightbulb,
    title: 'Installing Lighting, Outlets, and Switches',
    description:
      'Plan new fixtures, added outlets, or upgraded switches for renovations and everyday improvements.',
  },
  {
    icon: PanelTop,
    title: 'Evaluating Electrical Panel Capacity',
    description:
      'Review whether an existing panel meets the home\u2019s current and planned electrical needs.',
  },
  {
    icon: CircuitBoard,
    title: 'Investigating Recurring Circuit Breaker Problems',
    description:
      'Understand why a breaker keeps tripping and when a breaker may need repair or replacement.',
  },
  {
    icon: LifeBuoy,
    title: 'Discussing Urgent Electrical Concerns',
    description:
      'Learn what to do about burning smells, sparking, or sudden power problems at home.',
  },
];

const SERVICE_CARDS: { icon: LucideIcon; title: string; description: string; href: string }[] = [
  {
    icon: Wrench,
    title: 'Electrical Repair',
    description:
      'Information about common electrical faults, faulty outlets, flickering lights, and troubleshooting.',
    href: '/electrical-repair/',
  },
  {
    icon: Lightbulb,
    title: 'Electrical Installation',
    description:
      'Information about installing electrical fixtures, outlets, switches, and other components.',
    href: '/electrical-installation/',
  },
  {
    icon: PanelTop,
    title: 'Electrical Panel Upgrades',
    description:
      'Information about electrical capacity, older panels, and planning for changing electrical needs.',
    href: '/electrical-panel-upgrades/',
  },
  {
    icon: PanelTop,
    title: 'Electrical Panel Replacement',
    description:
      'Information about assessing and replacing damaged, deteriorated, or unsuitable electrical panels.',
    href: '/electrical-panel-replacement/',
  },
  {
    icon: CircuitBoard,
    title: 'Circuit Breaker Repair',
    description:
      'Information about repeated breaker trips, suspected breaker faults, and related electrical issues.',
    href: '/circuit-breaker-repair/',
  },
  {
    icon: LifeBuoy,
    title: 'Emergency Electrician',
    description:
      'Information about urgent electrical concerns and electrical safety.',
    href: '/emergency-electrician/',
  },
];

const GETTING_STARTED_STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Choose a Service',
    description:
      'Review the service pages to find information relevant to your electrical concern.',
  },
  {
    number: '2',
    title: 'Explain Your Needs',
    description:
      'Use the contact page to discuss the issue or planned project.',
  },
  {
    number: '3',
    title: 'Discuss Next Steps',
    description:
      'Ask about the appropriate service, availability, and project-specific details.',
  },
];

type FAQItem = { question: string; answer: string; links?: { text: string; href: string }[] };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What area does De Soto Electric Pros focus on?',
    answer:
      'The website focuses on electrical service needs in De Soto, Kansas. To discuss your specific property and service request, visit the contact page.',
    links: [{ text: 'contact page', href: '/contact/' }],
  },
  {
    question: 'What electrical services can I explore in De Soto?',
    answer:
      'You can learn about electrical repair, electrical installation, electrical panel upgrades, electrical panel replacement, circuit breaker repair, and emergency electrician services through the dedicated service pages.',
    links: [
      { text: 'Electrical Repair', href: '/electrical-repair/' },
      { text: 'Electrical Installation', href: '/electrical-installation/' },
      { text: 'Electrical Panel Upgrades', href: '/electrical-panel-upgrades/' },
      { text: 'Electrical Panel Replacement', href: '/electrical-panel-replacement/' },
      { text: 'Circuit Breaker Repair', href: '/circuit-breaker-repair/' },
      { text: 'Emergency Electrician', href: '/emergency-electrician/' },
    ],
  },
  {
    question: 'Is De Soto Electric Pros available 24/7?',
    answer:
      'The website advertises availability 24 hours a day, seven days a week. Use the contact page to discuss your needs. A particular arrival time cannot be guaranteed.',
  },
  {
    question: 'How can I request an electrical service quote?',
    answer:
      'Visit the contact page to discuss your electrical concern or planned improvement. Specific pricing and quote turnaround times are not published on this page.',
    links: [{ text: 'contact page', href: '/contact/' }],
  },
  {
    question: 'Does De Soto Electric Pros have a physical location in De Soto?',
    answer:
      'No. The website focuses on service-area electrical needs rather than a storefront. Use the contact page to discuss service for your property.',
    links: [{ text: 'contact page', href: '/contact/' }],
  },
  {
    question: 'Can I request emergency electrical help in De Soto?',
    answer:
      'Smoke, sparking, burning smells, or visible electrical damage can signal a serious hazard. For a fire or immediate danger, move to safety and contact emergency services. You can also learn more on the emergency electrician page.',
    links: [{ text: 'emergency electrician page', href: '/emergency-electrician/' }],
  },
];

const slugify = (s: string) => s.replace(/[^a-z0-9]/gi, '-').toLowerCase();

function PageHero() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
              Our Service Area · De Soto, Kansas
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Electrical Services in De Soto, KS
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              De Soto Electric Pros focuses on electrical service needs in De
              Soto, Kansas. Explore our service information to learn about
              electrical repairs, installations, panel concerns, circuit
              breaker problems, and urgent electrical issues.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy/5 px-7 py-3.5 text-base font-bold text-navy hover:bg-navy/10 transition-colors"
              >
                Contact Us
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              <Clock className="h-3.5 w-3.5" />
              Open 24/7 · 7 Days a Week
            </p>
          </div>

          <div className="relative lg:pl-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-navy-100">
              <img
                src={HERO_IMAGE}
                alt="Aerial view of a suburban De Soto neighborhood with residential homes"
                className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[540px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreaMain() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
            <MapPin className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Serving De Soto, Kansas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            This website is intended for people in De Soto looking for
            information about electrical services for their homes and
            properties. Whether you are troubleshooting an unexpected problem
            or planning an improvement, the service pages cover common
            homeowner needs and the questions that come with them.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {LOCAL_NEEDS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExploreServices() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Explore Our Electrical Services
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Each service page explains the topic in straightforward language
            and what to expect when reaching out.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {SERVICE_CARDS.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.href}
                href={service.href}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:border-navy-200 hover:shadow-hero"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-400">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-navy-600 transition-colors group-hover:text-brand-yellow-dark">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LocalHelp() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Help for De Soto Homes
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Homeowners may need electrical service for many reasons —
            aging equipment, renovation projects, lighting changes, recurring
            breaker trips, or concerns about an electrical panel. The correct
            service depends on the issue, and professional assessment may be
            needed to identify the appropriate next steps for your property in
            De Soto, Kansas.
          </p>
        </div>
      </div>
    </section>
  );
}

function GettingStarted() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How to Get Started
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-16 sm:grid-cols-3 lg:pb-20">
          {GETTING_STARTED_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-lg font-extrabold text-navy">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Service Area FAQs
          </h2>
        </div>

        <div className="mx-auto max-w-3xl pb-6">
          {FAQ_ITEMS.map((item, index) => {
            const buttonId = `faq-button-${slugify(item.question)}`;
            const panelId = `faq-panel-${slugify(item.question)}`;
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="border-b border-navy-100 last:border-b-0"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold text-navy hover:text-navy-600 transition-colors"
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-yellow-dark transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-sm leading-relaxed text-navy-400"
                >
                  <p>{item.answer}</p>
                  {item.links && item.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center gap-0.5 text-sm font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
                        >
                          {link.text}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FindRightService() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Find the Right Electrical Service
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Explore the service most relevant to your concern. You can learn
            about <a href="/electrical-repair/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">electrical repair</a>, <a href="/electrical-installation/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">installation</a>, <a href="/electrical-panel-upgrades/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">panel upgrades</a>, <a href="/electrical-panel-replacement/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">panel replacement</a>, <a href="/circuit-breaker-repair/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">circuit breaker repair</a>, or <a href="/emergency-electrician/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">emergency electrical help</a>, or <a href="/about/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">learn more about the business</a>. When you are ready, <a href="/contact/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">contact De Soto Electric Pros</a> to discuss your property.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl bg-navy p-8 text-center shadow-hero sm:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Looking for Electrical Services in De Soto?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-100">
              Explore the available electrical services or contact De Soto
              Electric Pros to discuss an electrical concern or planned
              improvement at your property in De Soto, Kansas.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-7 py-3.5 text-base font-bold text-white hover:bg-white/15 transition-colors"
              >
                Contact Us
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy">
              <Clock className="h-3.5 w-3.5" />
              Open 24/7 · 7 Days a Week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiceAreaPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <PageHero />
        <ServiceAreaMain />
        <ExploreServices />
        <LocalHelp />
        <GettingStarted />
        <FAQSection />
        <FindRightService />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
