import { useState } from 'react';
import {
  ChevronDown,
  Clock,
  PanelTop,
  ShieldAlert,
  AlertTriangle,
  Gauge,
  Clock4,
  Flame,
  Home,
  MessageSquare,
  MapPin,
  CheckCircle2,
  XCircle,
  ClipboardCheck,
  Wrench,
  Plug,
  Search,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const HERO_IMAGE =
  'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=900';

const FINAL_CTA_IMAGE =
  'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&w=900';

const PAGE_META = {
  title:
    'Electrical Panel Replacement in De Soto, KS | De Soto Electric Pros',
  description:
    'Need electrical panel replacement in De Soto, KS? Learn about warning signs, replacement considerations, the installation process, and when to call an electrician.',
  canonical: 'https://desotoelectricpros.online/electrical-panel-replacement/',
};

const WARNING_SIGNS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: AlertTriangle,
    title: 'Visible Damage or Deterioration',
    description:
      'Corrosion, heat damage, or other visible deterioration should be assessed by a qualified electrician.',
  },
  {
    icon: ShieldAlert,
    title: 'Repeated Breaker Problems',
    description:
      'Repeated tripping or malfunctioning breakers may indicate a circuit issue, overloaded circuit, defective breaker, or another problem requiring diagnosis.',
  },
  {
    icon: Gauge,
    title: 'Insufficient Electrical Capacity',
    description:
      'Major additions or new electrical equipment may require an assessment of available capacity.',
  },
  {
    icon: Clock4,
    title: 'An Aging or Obsolete Panel',
    description:
      'Older equipment may warrant professional evaluation for condition, compatibility, and replacement options.',
  },
  {
    icon: Flame,
    title: 'Burning Smells or Unusual Heat',
    description:
      'Treat these as potential warning signs that require urgent attention.',
  },
  {
    icon: Home,
    title: 'Planned Electrical Improvements',
    description:
      'Renovations, additions, or new high-demand equipment may prompt a review of the existing panel.',
  },
];

const REPAIR_INDICATORS = [
  'A specific, diagnosable issue can be corrected safely.',
  "The panel remains suitable for the property's electrical needs.",
  "The equipment's condition supports continued use.",
];

const REPLACE_INDICATORS = [
  'The panel has significant deterioration or damage.',
  'The equipment is unsuitable for the current or planned electrical demand.',
  'Repair is not a reasonable long-term option.',
  'The electrician determines replacement is appropriate after assessment.',
];

const SERVICE_CARDS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: 'Existing Panel Assessment',
    description:
      "Review the panel's visible condition, electrical needs, and potential concerns.",
  },
  {
    icon: ClipboardCheck,
    title: 'Replacement Planning',
    description:
      'Explain the factors involved in choosing an appropriate replacement panel for the property.',
  },
  {
    icon: Plug,
    title: 'Electrical System Compatibility',
    description:
      'Consider service capacity, connected circuits, and planned electrical improvements.',
  },
  {
    icon: CheckCircle2,
    title: 'Post-Installation Checks',
    description:
      'Appropriate inspections and checks help confirm the completed work meets applicable requirements.',
  },
];

const PROCESS_STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Discuss the Concern',
    description:
      'The homeowner explains the panel issue, property needs, or planned electrical improvements.',
  },
  {
    number: '2',
    title: 'Assess the Existing Panel',
    description:
      'A qualified electrician evaluates the equipment and determines suitable options.',
  },
  {
    number: '3',
    title: 'Review the Replacement Plan',
    description:
      'Discuss the proposed scope, relevant requirements, and quote before work proceeds.',
  },
  {
    number: '4',
    title: 'Complete and Check the Work',
    description:
      'The replacement is completed according to the agreed scope and applicable requirements, followed by appropriate checks.',
  },
];

const WHY_CHOOSE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageSquare,
    title: 'Clear Explanations',
    description: 'Help homeowners understand the issue and available options.',
  },
  {
    icon: ShieldAlert,
    title: 'Safety-Focused Decisions',
    description:
      'Emphasize appropriate assessment rather than recommending replacement without cause.',
  },
  {
    icon: MapPin,
    title: 'Local Service Focus',
    description:
      'Keep the page focused on homeowners and properties in De Soto, Kansas.',
  },
];

type FAQItem = { question: string; answer: string };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I know if my electrical panel needs replacement?',
    answer:
      'Visible damage, deterioration, repeated electrical problems, insufficient capacity, or obsolete equipment may justify an assessment. A qualified electrician can determine whether repair or replacement is appropriate.',
  },
  {
    question: 'How much does electrical panel replacement cost in De Soto, KS?',
    answer:
      'Costs depend on the existing equipment, replacement requirements, service capacity, accessibility, and project scope. Request a project-specific quote to understand the pricing arrangements for your situation.',
  },
  {
    question: 'How long does electrical panel replacement take?',
    answer:
      'Timing depends on the property, panel configuration, required work, and applicable requirements. A specific duration cannot be guaranteed without assessing the project.',
  },
  {
    question: 'Is electrical panel replacement different from an upgrade?',
    answer:
      'Replacement means changing the existing panel, while an upgrade generally focuses on improving capacity or capability. A project can involve both, depending on the situation.',
  },
  {
    question: 'Can I replace an electrical panel myself?',
    answer:
      'Panel work can involve serious shock, fire, and code-compliance risks. A qualified electrician should perform the work in compliance with applicable local requirements.',
  },
  {
    question: 'Should I replace my panel if breakers keep tripping?',
    answer:
      'Repeated tripping has several possible causes and does not automatically mean the panel needs replacement. Professional diagnosis is recommended before deciding on a course of action.',
  },
  {
    question: 'Do I need an electrical panel replacement during a home renovation?',
    answer:
      'Not every renovation requires replacement, but additions or increased electrical demand may justify evaluating the existing system. An assessment can help determine whether the current panel is suitable.',
  },
  {
    question: 'Who should I contact about panel replacement in De Soto, KS?',
    answer:
      'Homeowners can contact De Soto Electric Pros to discuss their concern and request a quote. Visit the contact page to get started.',
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
              Electrical Panel Replacement · De Soto, Kansas
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Electrical Panel Replacement in De Soto, KS
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              An aging, damaged, or unsuitable electrical panel can raise
              concerns about the safety and reliability of your electrical
              system. De Soto Electric Pros helps homeowners understand their
              panel replacement options and plan the next steps for their
              property.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
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
              Open 24/7
            </p>
          </div>

          <div className="relative lg:pl-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-navy-100">
              <img
                src={HERO_IMAGE}
                alt="Professional electrician working on a residential circuit breaker panel"
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

function Introduction() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            When Is Electrical Panel Replacement Worth Considering?
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-navy-400">
            <p>
              Replacing an electrical panel may be appropriate when existing
              equipment is damaged, deteriorated, outdated, unsuitable for the
              property's electrical needs, or cannot reasonably be repaired.
              An electrician should assess the equipment and determine the
              appropriate solution rather than assuming replacement is the only
              option.
            </p>
            <p>
              There is an important difference between replacing a panel and
              making a smaller repair. A repair addresses a specific, isolated
              issue while keeping the existing panel in service. Replacement
              involves removing the current panel and installing a new one.
              The right choice depends on a professional assessment of the
              equipment's condition, the property's electrical requirements, and
              applicable codes.
            </p>
            <p>
              If you are considering electrical panel replacement in De Soto, KS,
              a qualified electrician can help you evaluate whether replacement,
              repair, or another solution is the appropriate next step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WarningSigns() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Signs Your Electrical Panel May Need Replacement
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            These signs do not always mean the panel must be replaced. A
            qualified electrician should assess the equipment before
            determining the appropriate solution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-3 lg:pb-16">
          {WARNING_SIGNS.map((sign) => {
            const Icon = sign.icon;
            return (
              <article
                key={sign.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">
                  {sign.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {sign.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mb-16 rounded-2xl border border-navy-100 bg-white p-6 shadow-card lg:mb-20">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-navy-400">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-dark" />
            <span>
              If there is smoke, sparking, a burning smell, or unusual heat
              coming from the panel, keep away from it and seek urgent
              professional assistance. If there is a fire or immediate danger,
              contact emergency services.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function RepairVsReplacement() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Panel Repair or Full Replacement?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            The correct choice depends on the panel's condition and the
            property's requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:pb-16">
          <article className="rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
              <Wrench className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">
              A repair may be appropriate when:
            </h3>
            <ul className="mt-3 space-y-2.5">
              {REPAIR_INDICATORS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-400"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
              <PanelTop className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">
              Replacement may be considered when:
            </h3>
            <ul className="mt-3 space-y-2.5">
              {REPLACE_INDICATORS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-400"
                >
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="pb-16 lg:pb-20">
          <p className="text-base leading-relaxed text-navy-400">
            For issues that may not require a full panel replacement, explore{' '}
            <a
              href="/electrical-repair/"
              className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
            >
              electrical repair services
            </a>{' '}
            to discuss whether a repair is the right option.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReplacementService() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Panel Replacement Services
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Requirements depend on the project and applicable local codes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
          {SERVICE_CARDS.map((card) => {
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

function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            What to Expect During Panel Replacement
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
          {PROCESS_STEPS.map((step) => (
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

function WhyChooseUs() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Panel Replacement for De Soto Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-3 lg:pb-20">
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

function LocalSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
            <PanelTop className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Serving De Soto, Kansas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            This page is intended for homeowners in De Soto who are considering
            electrical panel replacement, planning renovations, or experiencing
            concerns with older electrical equipment. Whether you need to
            replace an electrical panel, explore{' '}
            <a
              href="/electrical-panel-upgrades/"
              className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
            >
              electrical panel upgrades
            </a>
            , address issues with{' '}
            <a
              href="/electrical-repair/"
              className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
            >
              electrical repair
            </a>
            , learn about{' '}
            <a
              href="/circuit-breaker-repair/"
              className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
            >
              circuit breaker repair
            </a>
            , or explore{' '}
            <a
              href="/electrical-installation/"
              className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
            >
              electrical installation services
            </a>
            , our team is here to help.{' '}
            <a
              href="/contact/"
              className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
            >
              Contact us
            </a>{' '}
            to discuss your property and the next steps.
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
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Panel Replacement FAQs
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
          <div className="rounded-2xl border border-navy-100 bg-white p-6 text-center sm:p-8">
            <h3 className="text-xl font-bold text-navy">
              Still Have Questions About Panel Replacement?
            </h3>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                alt="Electrician adjusting a residential circuit breaker panel"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Discuss Your Electrical Panel Replacement Options
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              Concerned about an aging electrical panel or planning electrical
              improvements? Get in touch to discuss your property and the next
              steps.
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
              Open 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ElectricalPanelReplacementPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <PageHero />
        <Introduction />
        <WarningSigns />
        <RepairVsReplacement />
        <ReplacementService />
        <ProcessSection />
        <WhyChooseUs />
        <LocalSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
