import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Lightbulb,
  Phone,
  Plug,
  Power,
  Wind,
  CircuitBoard,
  Zap,
  Wrench,
  Home,
  Eye,
  MessageSquare,
  MapPin,
  Plus,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const HERO_IMAGE =
  'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&w=900';

const FINAL_CTA_IMAGE =
  'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=900';

const PAGE_META = {
  title: 'Electrical Installation in De Soto, KS | De Soto Electric Pros',
  description:
    'Explore residential electrical installation in De Soto, KS, including lighting fixtures, outlets, switches, and other electrical components. Request a quote.',
  canonical: 'https://desotoelectricpros.online/electrical-installation/',
};

const INSTALLATION_SERVICES: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Lightbulb,
    title: 'Light Fixture Installation',
    description:
      'Explore installation options for suitable indoor lighting fixtures and replacement fixtures.',
  },
  {
    icon: Plug,
    title: 'Outlet Installation',
    description:
      'Explore options for adding or replacing electrical outlets, subject to the existing electrical system and applicable requirements.',
  },
  {
    icon: Power,
    title: 'Switch Installation',
    description:
      'Installation or replacement of compatible light switches and related controls.',
  },
  {
    icon: Wind,
    title: 'Ceiling Fan Installation',
    description:
      'Ceiling fan installation when the ceiling support, electrical connections, and existing setup are suitable.',
  },
  {
    icon: CircuitBoard,
    title: 'New Electrical Circuits',
    description:
      'New circuits may be considered when a project requires additional electrical capacity, subject to professional assessment.',
  },
  {
    icon: Wrench,
    title: 'Electrical Equipment Installation',
    description:
      'Installation of suitable residential electrical components based on the property\u2019s needs and the equipment\u2019s requirements.',
  },
];

const CONSIDER_REASONS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Home,
    title: 'Home Improvements',
    description:
      'New rooms or renovations may require additional electrical components or updated layouts.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Changes',
    description:
      'New fixtures can help meet a room\u2019s lighting requirements.',
  },
  {
    icon: Plus,
    title: 'Additional Outlets',
    description:
      'Changes in how a room is used may create a need for properly placed outlets.',
  },
  {
    icon: Plug,
    title: 'New Equipment',
    description:
      'Certain appliances or electrical equipment may require dedicated circuits or compatible electrical connections.',
  },
];

const WHY_CHOOSE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Wrench,
    title: 'A Range of Installation Options',
    description: 'Explore common residential electrical installation categories.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Project Communication',
    description: 'Discuss the work required before making arrangements.',
  },
  {
    icon: MapPin,
    title: 'Local Search Focus',
    description:
      'Find electrical installation information specifically relevant to De Soto, Kansas.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Contact the business at any time to discuss service needs and confirm arrangements.',
  },
];

const RELATED_SERVICES: { title: string; description: string; href: string }[] = [
  {
    title: 'Electrical Repair',
    description:
      'For faulty outlets, flickering lights, and other electrical problems.',
    href: '/electrical-repair/',
  },
  {
    title: 'Electrical Panel Upgrades',
    description:
      'Explore options when electrical capacity or panel condition needs professional assessment.',
    href: '/electrical-panel-upgrades/',
  },
  {
    title: 'Circuit Breaker Repair',
    description: 'Learn about recurring breaker trips and related issues.',
    href: '/circuit-breaker-repair/',
  },
];

const PROCESS_STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Describe Your Project',
    description:
      'Tell us what you want installed and share relevant information about your home or project.',
  },
  {
    number: '2',
    title: 'Discuss Requirements',
    description:
      'Discuss the equipment, existing electrical setup, installation requirements, and any necessary assessment.',
  },
  {
    number: '3',
    title: 'Confirm the Work',
    description:
      'Confirm the agreed scope, pricing arrangements, and scheduling before the work begins.',
  },
];

type FAQItem = { question: string; answer: string };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What electrical installation services are available in De Soto, KS?',
    answer:
      'Common residential installation categories include lighting fixtures, outlets, switches, ceiling fans, and electrical circuits. The appropriate options depend on the property and project requirements. Contact the business to discuss your specific needs.',
  },
  {
    question: 'Can I add more electrical outlets to my home?',
    answer:
      'Additional outlets may be possible, but the existing wiring, circuit capacity, outlet location, and applicable electrical requirements must be considered. Have a qualified professional assess the proposed installation.',
  },
  {
    question: 'Do new electrical appliances sometimes need a dedicated circuit?',
    answer:
      'Some appliances and equipment require a dedicated circuit based on their electrical load and manufacturer requirements. A qualified professional can determine what is appropriate for your particular installation.',
  },
  {
    question: 'Can an electrician install new light fixtures?',
    answer:
      'Light fixture installation may be possible when the fixture, mounting arrangement, wiring, and electrical setup are suitable. The specific requirements depend on the project.',
  },
  {
    question: 'How do I request an electrical installation quote?',
    answer:
      'Use the Request a Quote button to visit the contact page and describe the installation you need. The project requirements, pricing arrangements, and scheduling can then be discussed.',
  },
  {
    question: 'Does De Soto Electric Pros offer 24/7 availability?',
    answer:
      'De Soto Electric Pros is presented as open 24 hours a day, seven days a week. Contact the business to discuss your project and confirm the available arrangements.',
  },
  {
    question: 'Should I install electrical components myself?',
    answer:
      'Electrical work can present shock, fire, and equipment-damage risks. Requirements vary by task and location. Consult a qualified professional and follow applicable local codes rather than attempting work beyond your training.',
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
              Electrical Installation in De Soto, Kansas
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Electrical Installation in De Soto, KS
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              Planning an electrical improvement for your home? De Soto Electric
              Pros helps customers explore residential electrical installation
              options in De Soto, Kansas, including lighting fixtures,
              outlets, switches, and other electrical components. Contact us
              to discuss your project and the service you need.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-7 py-3.5 text-base font-bold text-white/50">
                <Phone className="h-5 w-5" />
                Call for Electrical Installation
              </span>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy-200 bg-white px-7 py-3.5 text-base font-bold text-navy hover:border-navy hover:bg-surface-light transition-colors"
              >
                Request a Quote
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              <Clock className="h-3.5 w-3.5" />
              Open 24/7
            </p>
          </div>

          <div className="relative lg:pl-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-navy-100">
              <img
                src={HERO_IMAGE}
                alt="Electrician installing a new light fixture on a ceiling"
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

function InstallationServices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Residential Electrical Installation Services
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Electrical installation projects vary depending on the home,
            existing wiring, equipment, and intended use. Explore common
            installation categories and contact us to discuss your
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {INSTALLATION_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhenToConsider() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            When to Consider Electrical Installation
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Explore common reasons a homeowner might seek electrical
            installation services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:pb-16">
          {CONSIDER_REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-16 rounded-2xl border border-navy-100 bg-white p-6 shadow-card lg:mb-20">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-navy-400">
            <Eye className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-dark" />
            <span>
              Installation requirements depend on the property and applicable
              electrical codes. A qualified professional should assess the
              work.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function InstallationProcess() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How to Arrange Electrical Installation in De Soto
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-16 sm:grid-cols-3 lg:pb-20">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-lg font-extrabold text-navy">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">
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

function WhyChooseUs() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Installation Focused on Your Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
          {WHY_CHOOSE.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Explore Related Electrical Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-3 lg:pb-20">
          {RELATED_SERVICES.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card transition-all hover:border-navy-200 hover:shadow-hero"
            >
              <h3 className="text-lg font-bold tracking-tight text-navy">
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
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalSection() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
            <Zap className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Installation in De Soto, Kansas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            This page serves people researching electrical installation in De
            Soto, KS. Whether you are planning lighting installation, outlet
            installation, or another residential electrical installation
            project, an electrician in De Soto, Kansas, can help assess the
            requirements and discuss the options with you.
          </p>
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
            Electrical Installation FAQs
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
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-3xl pb-16 lg:pb-20">
          <div className="rounded-2xl border border-navy-100 bg-surface-light p-6 text-center sm:p-8">
            <h3 className="text-xl font-bold text-navy">
              Still Have Questions About Electrical Installation?
            </h3>
            <a
              href="/contact/"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
            >
              Request a Quote
            </a>
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
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="relative order-2 lg:order-1 lg:pr-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-navy-100">
              <img
                src={FINAL_CTA_IMAGE}
                alt="Electrician installing a power outlet in a residential wall"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Planning an Electrical Installation in De Soto?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              Discuss your lighting, outlet, switch, or other residential
              electrical installation needs with De Soto Electric Pros.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                Request a Quote
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              <Clock className="h-3.5 w-3.5" />
              Open 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ElectricalInstallationPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <PageHero />
        <InstallationServices />
        <WhenToConsider />
        <InstallationProcess />
        <WhyChooseUs />
        <RelatedServices />
        <LocalSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
