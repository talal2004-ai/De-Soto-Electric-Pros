import { useState } from 'react';
import {
  ChevronDown,
  Clock,
  ShieldAlert,
  AlertTriangle,
  Flame,
  Power,
  Zap,
  Volume2,
  Search,
  ClipboardCheck,
  CircuitBoard,
  Wrench,
  CheckCircle2,
  XCircle,
  MapPin,
  Plug,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const HERO_IMAGE =
  'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=900';

const FINAL_CTA_IMAGE =
  'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=900';

const PAGE_META = {
  title: 'Circuit Breaker Repair in De Soto, KS | De Soto Electric Pros',
  description:
    'Need circuit breaker repair in De Soto, KS? Learn why breakers trip, when a breaker may need repair or replacement, and when to contact an electrician.',
  canonical: 'https://desotoelectricpros.online/circuit-breaker-repair/',
};

const WARNING_SIGNS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Power,
    title: 'Breaker Keeps Tripping',
    description: 'The breaker repeatedly switches off during normal use.',
  },
  {
    icon: AlertTriangle,
    title: 'Breaker Will Not Reset',
    description:
      'A breaker does not stay in the on position after the cause has been addressed.',
  },
  {
    icon: Flame,
    title: 'Burning Smell Near the Panel',
    description:
      'An unusual burning odor can indicate a potentially serious electrical problem.',
  },
  {
    icon: ShieldAlert,
    title: 'Unusual Heat or Visible Damage',
    description:
      'Heat, discoloration, melting, or visible damage needs prompt professional attention.',
  },
  {
    icon: Zap,
    title: 'Frequent Loss of Power to One Circuit',
    description:
      'Repeated interruptions may point to a circuit, wiring, appliance, or breaker issue.',
  },
  {
    icon: Volume2,
    title: 'Buzzing, Crackling, or Sparking',
    description:
      'Unusual sounds or visible sparking around electrical equipment should never be ignored.',
  },
];

const TRIP_CAUSES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Plug,
    title: 'Overloaded Circuit',
    description:
      "Too many or high-demand devices may exceed a circuit's intended load.",
  },
  {
    icon: Wrench,
    title: 'Faulty Appliance',
    description: 'A connected appliance or device may be causing the problem.',
  },
  {
    icon: CircuitBoard,
    title: 'Wiring or Circuit Fault',
    description:
      'Short circuits, ground faults, or other wiring problems can cause a breaker to trip.',
  },
  {
    icon: ShieldAlert,
    title: 'Potentially Defective Breaker',
    description:
      'A breaker may itself be faulty, but diagnosis is needed before deciding to replace it.',
  },
];

const SERVICE_CARDS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: 'Breaker Troubleshooting',
    description:
      'Investigate the reported symptoms and possible causes of repeated tripping or loss of power.',
  },
  {
    icon: ClipboardCheck,
    title: 'Faulty Breaker Assessment',
    description:
      'Evaluate whether a breaker appears defective and whether repair or replacement is appropriate.',
  },
  {
    icon: CircuitBoard,
    title: 'Circuit and Connection Assessment',
    description:
      'Consider related circuit, wiring, or connection issues when the symptoms indicate a broader problem.',
  },
  {
    icon: Wrench,
    title: 'Breaker Replacement',
    description:
      'Replacing a breaker may be appropriate when an electrician determines it is defective and confirms that the replacement is compatible with the panel and electrical system.',
  },
];

const PROCESS_STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Describe the Problem',
    description:
      'Explain which breaker trips, when it happens, and whether you have noticed other symptoms.',
  },
  {
    number: '2',
    title: 'Assess the Electrical Issue',
    description:
      'A qualified electrician investigates the reported problem and its potential causes.',
  },
  {
    number: '3',
    title: 'Review the Recommended Solution',
    description:
      'Discuss the findings and the proposed work before proceeding.',
  },
  {
    number: '4',
    title: 'Complete Appropriate Repairs',
    description:
      'Carry out the agreed work and perform appropriate checks.',
  },
];

const TROUBLESHOOT_INDICATORS = [
  'The breaker trips because of excessive load.',
  'An appliance appears to cause the problem.',
  'A wiring or circuit fault needs attention.',
  'The cause of the interruption has not yet been identified.',
];

const REPLACE_INDICATORS = [
  'The breaker is confirmed to be defective.',
  'There is damage that makes continued use inappropriate.',
  'The existing breaker is unsuitable for the panel or application.',
];

const WHY_CHOOSE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: 'Find the Underlying Cause',
    description:
      'Focus on identifying why the breaker trips rather than treating symptoms alone.',
  },
  {
    icon: ShieldAlert,
    title: 'Safety-Focused Recommendations',
    description:
      'Explain the findings and appropriate options without assuming replacement is always necessary.',
  },
  {
    icon: MapPin,
    title: 'Local Service Focus',
    description:
      'Keep the content focused on electrical needs in De Soto, Kansas.',
  },
];

type FAQItem = { question: string; answer: string };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Why does my circuit breaker keep tripping?',
    answer:
      'Common causes include circuit overload, a faulty appliance, wiring faults, ground faults, or a defective breaker. Professional assessment is recommended if the problem repeats.',
  },
  {
    question: 'Does a tripping breaker always need replacement?',
    answer:
      'No. The cause could be an overloaded circuit, appliance fault, wiring issue, or another problem. A diagnosis is needed before deciding whether replacement is necessary.',
  },
  {
    question: 'Is it safe to keep resetting a tripping breaker?',
    answer:
      'Repeated resets should be avoided until the cause is understood. If there are signs of heat, burning, sparking, or damage, stay away and seek urgent professional help.',
  },
  {
    question: 'Can I replace a circuit breaker myself?',
    answer:
      'Work inside an electrical panel presents serious shock and fire hazards. A qualified electrician should perform the work in compliance with applicable local requirements.',
  },
  {
    question: 'What does circuit breaker repair cost in De Soto, KS?',
    answer:
      'Costs depend on the underlying issue, parts required, accessibility, and scope of work. Request a project-specific quote to understand the pricing arrangements for your situation.',
  },
  {
    question: 'How do I know if a breaker is faulty?',
    answer:
      'Failure to function correctly can indicate a problem, but similar symptoms may arise from wiring, circuit loads, or appliances. A professional assessment can help identify the cause.',
  },
  {
    question: 'When should I seek emergency electrical help?',
    answer:
      'Smoke, sparking, a burning smell, unusual heat, or visible panel damage can indicate an urgent hazard. Keep away from the equipment and seek urgent professional assistance. Contact emergency services if there is a fire or immediate danger.',
  },
  {
    question: 'Who provides circuit breaker repair in De Soto, KS?',
    answer:
      'Homeowners can contact De Soto Electric Pros to discuss the issue and request a quote. Visit the contact page to get started.',
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
              Circuit Breaker Services · De Soto, Kansas
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Circuit Breaker Repair in De Soto, KS
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              A breaker that keeps tripping, refuses to reset, or shows signs
              of damage can interrupt your home's electrical system. De Soto
              Electric Pros helps homeowners identify circuit breaker problems
              and understand the appropriate next steps.
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
                alt="Close-up of an organized residential circuit breaker panel with color-coded wiring"
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
            Professional Help for Circuit Breaker Problems
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-navy-400">
            <p>
              Circuit breakers help interrupt electrical flow when a circuit
              experiences certain unsafe conditions. Repeated tripping can
              result from an overloaded circuit, a short circuit, a ground
              fault, a faulty appliance, a wiring problem, or a defective
              breaker.
            </p>
            <p>
              Identifying the underlying cause matters more than repeatedly
              resetting the breaker. A tripping breaker is a warning sign, not
              an inconvenience to work around.
            </p>
            <p>
              If you are looking for circuit breaker repair in De Soto,
              Kansas, a qualified electrician can help diagnose the problem and
              recommend the appropriate next steps for your home.
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
            Signs You May Need Circuit Breaker Service
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            These signs do not always mean the breaker is defective. A
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
              Do not repeatedly reset a tripping breaker, force a breaker into
              position, or remove the electrical panel cover. If you notice
              smoke, sparking, a burning smell, or unusual heat, keep away from
              the panel and seek urgent professional assistance. For a fire or
              immediate danger, contact emergency services.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function TripCauses() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Why Does a Circuit Breaker Keep Tripping?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:pb-16">
          {TRIP_CAUSES.map((cause) => {
            const Icon = cause.icon;
            return (
              <article
                key={cause.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  {cause.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {cause.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="max-w-3xl pb-16 lg:pb-20">
          <p className="text-base leading-relaxed text-navy-400">
            The correct solution depends on the cause. A larger breaker should
            never be installed simply to stop tripping; breaker ratings must
            match the wiring and electrical system requirements. For broader
            electrical concerns, explore our{' '}
            <a
              href="/electrical-repair/"
              className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
            >
              electrical repair services
            </a>{' '}
            to discuss the appropriate next steps.
          </p>
        </div>
      </div>
    </section>
  );
}

function BreakerServices() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Circuit Breaker Repair and Related Services
          </h2>
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
            What to Expect From Circuit Breaker Service
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

function RepairOrReplace() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Should a Circuit Breaker Be Repaired or Replaced?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            The decision depends on the diagnosis and the equipment involved.
            Repeated tripping is a symptom, not proof that the breaker itself
            has failed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:pb-16">
          <article className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
              <Wrench className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">
              Further troubleshooting or circuit repair may be needed when:
            </h3>
            <ul className="mt-3 space-y-2.5">
              {TROUBLESHOOT_INDICATORS.map((item) => (
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

          <article className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
              <CircuitBoard className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">
              Breaker replacement may be appropriate when:
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

        <div className="max-w-3xl pb-16 lg:pb-20">
          <p className="text-base leading-relaxed text-navy-400">
            If a breaker problem is part of a larger issue with the panel
            itself, learn more about{' '}
            <a
              href="/electrical-panel-replacement/"
              className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
            >
              electrical panel replacement
            </a>{' '}
            to understand when replacing the panel may be appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Circuit Breaker Help for De Soto Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-3 lg:pb-20">
          {WHY_CHOOSE.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
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
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
            <CircuitBoard className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Circuit Breaker Repair in De Soto, Kansas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            De Soto homeowners can seek help with recurring breaker trips,
            suspected breaker faults, circuit interruptions, and related
            electrical concerns. Whether you need circuit breaker repair,
            broader <a href="/electrical-repair/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">electrical repair</a>, <a href="/electrical-panel-upgrades/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">electrical panel upgrades</a>, <a href="/electrical-panel-replacement/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">electrical panel replacement</a>, or <a href="/emergency-electrician/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">emergency electrician services</a>, our team is here to help. <a href="/contact/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">Contact us</a> to discuss the symptoms and arrange the next steps.
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
            Circuit Breaker Repair FAQs
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
              Still Have Questions About Circuit Breaker Repair?
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
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="relative order-2 lg:order-1 lg:pr-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-navy-100">
              <img
                src={FINAL_CTA_IMAGE}
                alt="Electrician using a multimeter to test and troubleshoot a circuit breaker panel"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Need Help With a Circuit Breaker Problem?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              If a breaker keeps tripping or you suspect an electrical problem,
              discuss the symptoms with De Soto Electric Pros and learn about
              the appropriate next steps.
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

export default function CircuitBreakerRepairPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <PageHero />
        <Introduction />
        <WarningSigns />
        <TripCauses />
        <BreakerServices />
        <ProcessSection />
        <RepairOrReplace />
        <WhyChooseUs />
        <LocalSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
