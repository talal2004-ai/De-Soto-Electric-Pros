import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  ShieldAlert,
  Wrench,
  MapPin,
  Lightbulb,
  PanelTop,
  CircuitBoard,
  LifeBuoy,
  MessageSquare,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const HERO_IMAGE =
  'https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&w=900';

const PAGE_META = {
  title: 'About De Soto Electric Pros | Electrician in De Soto, KS',
  description:
    'Learn about De Soto Electric Pros, an electrical service brand focused on helping homeowners in De Soto, Kansas explore electrical repairs, installations, and panel services.',
  canonical: 'https://desotoelectricpros.online/about/',
};

const APPROACH_CARDS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'Explain electrical concerns in straightforward language so visitors can better understand the issue and potential next steps.',
  },
  {
    icon: ShieldAlert,
    title: 'Safety-Focused Decisions',
    description:
      'Emphasize the importance of proper assessment and following applicable electrical requirements.',
  },
  {
    icon: Wrench,
    title: 'Solutions Based on the Problem',
    description:
      "The appropriate service depends on the property's needs and the issue identified.",
  },
  {
    icon: MapPin,
    title: 'Local Service Focus',
    description:
      "Keep the website content focused on De Soto, Kansas, rather than creating unnecessary location claims.",
  },
];

const SERVICE_CARDS: { icon: LucideIcon; title: string; description: string; href: string }[] = [
  {
    icon: Wrench,
    title: 'Electrical Repair',
    description:
      'Troubleshoot and address faulty outlets, flickering lights, and other common electrical problems.',
    href: '/electrical-repair/',
  },
  {
    icon: Lightbulb,
    title: 'Electrical Installation',
    description:
      'Explore lighting fixtures, outlets, switches, ceiling fans, and other residential installation options.',
    href: '/electrical-installation/',
  },
  {
    icon: PanelTop,
    title: 'Electrical Panel Upgrades',
    description:
      'Learn about panel capacity, older equipment, and when a professional assessment may help.',
    href: '/electrical-panel-upgrades/',
  },
  {
    icon: PanelTop,
    title: 'Electrical Panel Replacement',
    description:
      'Understand warning signs, replacement considerations, and when replacing a panel may be appropriate.',
    href: '/electrical-panel-replacement/',
  },
  {
    icon: CircuitBoard,
    title: 'Circuit Breaker Repair',
    description:
      'Find out why breakers trip, when a breaker may need repair or replacement, and what to do next.',
    href: '/circuit-breaker-repair/',
  },
  {
    icon: LifeBuoy,
    title: 'Emergency Electrician',
    description:
      'Learn what to do about electrical hazards, sudden power problems, and urgent electrical concerns.',
    href: '/emergency-electrician/',
  },
];

const GETTING_STARTED_STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Explore the Service Pages',
    description:
      'Find information relevant to your electrical concern.',
  },
  {
    number: '2',
    title: 'Discuss Your Needs',
    description:
      'Contact De Soto Electric Pros and explain the issue or planned improvement.',
  },
  {
    number: '3',
    title: 'Review the Next Steps',
    description:
      'Discuss the appropriate service and project-specific details.',
  },
];

type FAQItem = { question: string; answer: string; links?: { text: string; href: string }[] };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Where does De Soto Electric Pros focus its services?',
    answer:
      'The website focuses on electrical services for De Soto, Kansas. For more details, you can view our service area.',
    links: [{ text: 'view our service area', href: '/service-area/' }],
  },
  {
    question: 'What electrical services can I explore?',
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
      'The website advertises availability 24 hours a day, seven days a week. Visitors can use the contact page to discuss their concern. A particular arrival time cannot be guaranteed.',
  },
  {
    question: 'How can I request a quote?',
    answer:
      'You can visit the contact page to discuss your electrical concern or planned improvement.',
    links: [{ text: 'contact page', href: '/contact/' }],
  },
  {
    question: 'Does De Soto Electric Pros have a physical storefront in De Soto?',
    answer:
      'No. The website is focused on service-area electrical needs rather than a storefront. Direct any service questions to the contact page.',
    links: [{ text: 'contact page', href: '/contact/' }],
  },
  {
    question: 'How do I know which electrical service I need?',
    answer:
      'Review the relevant service pages and describe your symptoms or project to the business. A qualified professional can assess the situation and recommend appropriate next steps.',
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
              About De Soto Electric Pros
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              About De Soto Electric Pros
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              Electrical issues can interrupt everyday life, and planning
              electrical improvements can raise important questions. De Soto
              Electric Pros focuses on helping people in De Soto, Kansas
              explore electrical service options and understand the next steps
              for their properties.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
              >
                Explore Our Services
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy-200 bg-white px-7 py-3.5 text-base font-bold text-navy hover:border-navy hover:bg-surface-light transition-colors"
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
                alt="Professional electrician working on residential electrical wiring"
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

function WhoWeAre() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Focused on Electrical Services in De Soto, Kansas
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-navy-400">
            <p>
              De Soto Electric Pros is a website created to help local
              homeowners explore common electrical service needs. The goal is
              to provide clear, practical information so visitors can better
              understand their options before reaching out.
            </p>
            <p>
              The service information on this site covers electrical repairs,
              installations, panel upgrades, panel replacement, circuit
              breaker concerns, and urgent electrical problems. Each service
              page explains the topic in straightforward language and
              outlines what to expect when contacting the business.
            </p>
            <p>
              Visitors can review the information at their own pace and contact
              the business to discuss their specific needs. Whether the
              concern is a flickering light, a planned fixture installation,
              or a question about panel capacity, the website is designed to
              help homeowners take the appropriate next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A Practical Approach to Electrical Service
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
          {APPROACH_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesWeCover() {
  return (
    <section className="bg-white" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Services
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Explore the service categories covered on this website.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {SERVICE_CARDS.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.href}
                href={service.href}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card transition-all hover:border-navy-200 hover:shadow-hero"
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

function ServingDeSoto() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
            <MapPin className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Serving the De Soto Community
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            This website focuses on electrical service information for De
            Soto, Kansas. Homeowners in the area often need help with
            troubleshooting electrical problems, installing fixtures or
            outlets, reviewing panel capacity, and addressing circuit breaker
            concerns. By keeping the content specific to De Soto, the goal is
            to provide relevant, practical information without unnecessary
            location claims. To <a href="/service-area/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">view our service area</a> for more details.
          </p>
        </div>
      </div>
    </section>
  );
}

function GettingStarted() {
  return (
    <section className="bg-white">
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
              className="relative rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
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
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            About De Soto Electric Pros FAQs
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

        <div className="mx-auto max-w-3xl pb-16 lg:pb-20">
          <div className="rounded-2xl border border-navy-100 bg-white p-6 text-center sm:p-8">
            <h3 className="text-xl font-bold text-navy">
              Still Have Questions?
            </h3>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-7 py-3.5 text-base font-bold text-white hover:bg-white/15 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy-200 bg-white px-7 py-3.5 text-base font-bold text-navy hover:border-navy hover:bg-surface-light transition-colors"
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
              Explore the available service information or contact De Soto
              Electric Pros to discuss an electrical concern or planned
              improvement.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
              >
                Explore Electrical Services
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-7 py-3.5 text-base font-bold text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                Contact Us
              </a>
            </div>

            <a
              href="/contact/"
              className="mt-6 inline-flex items-center gap-2 text-base font-bold text-white hover:text-brand-yellow transition-colors"
            >
              Contact Us to Request Service
            </a>

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

export default function AboutPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <PageHero />
        <WhoWeAre />
        <OurApproach />
        <ServicesWeCover />
        <ServingDeSoto />
        <GettingStarted />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
