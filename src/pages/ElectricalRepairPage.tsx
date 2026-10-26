import { useState } from 'react';
import {
  ChevronDown,
  Clock,
  Eye,
  Flame,
  Lightbulb,
  Plug,
  Power,
  ShieldAlert,
  Zap,
  Wrench,
  Phone,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const HERO_IMAGE =
  'https://images.pexels.com/photos/442160/pexels-photo-442160.jpeg?auto=compress&cs=tinysrgb&w=900';

const FINAL_CTA_IMAGE =
  'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=900';

const PAGE_META = {
  title: 'Electrical Repair in De Soto, KS | De Soto Electric Pros',
  description:
    'Need electrical repair in De Soto, KS? Explore help for faulty outlets, flickering lights, circuit breaker issues, and residential electrical problems.',
  canonical: 'https://desotoelectricpros.online/electrical-repair/',
};

const COMMON_PROBLEMS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Plug,
    title: 'Faulty Outlets',
    description:
      'Outlets that stop working, show visible damage, or no longer provide reliable power may need professional inspection.',
  },
  {
    icon: Wrench,
    title: 'Malfunctioning Switches',
    description:
      'Switches that fail to operate lights or electrical fixtures correctly may require troubleshooting.',
  },
  {
    icon: Lightbulb,
    title: 'Flickering or Unusual Lights',
    description:
      'Flickering lights can have several causes, including a loose connection, incompatible components, or a wider electrical issue.',
  },
  {
    icon: ShieldAlert,
    title: 'Frequently Tripping Breakers',
    description:
      'Repeated breaker trips may indicate an overloaded circuit, faulty equipment, or another electrical problem.',
  },
  {
    icon: Power,
    title: 'Partial Power Loss',
    description:
      'When some lights or outlets stop working, the cause may require investigation by a qualified professional.',
  },
  {
    icon: Flame,
    title: 'Unusual Electrical Smells or Sounds',
    description:
      'Burning smells, buzzing, smoke, or sparks may indicate a hazardous condition and should be taken seriously.',
  },
];

const REPAIR_SERVICES: { title: string; description: string }[] = [
  {
    title: 'Outlet and Switch Issues',
    description:
      'Inspection and troubleshooting of malfunctioning outlets and switches.',
  },
  {
    title: 'Lighting Problems',
    description:
      'Troubleshooting of flickering or nonworking lights and related electrical components.',
  },
  {
    title: 'Circuit Breaker Issues',
    description:
      'Investigation of recurring breaker trips and other breaker-related concerns.',
  },
  {
    title: 'Electrical Troubleshooting',
    description:
      'Assessment of symptoms to help identify possible electrical faults and appropriate repair options.',
  },
];

const SAFETY_POINTS: { title: string; description: string }[] = [
  {
    title: 'Understand the Cause',
    description:
      'Proper troubleshooting helps distinguish a minor fault from a more serious electrical issue.',
  },
  {
    title: 'Protect Your Home',
    description:
      'Damaged electrical components and wiring concerns should be assessed promptly.',
  },
  {
    title: 'Know the Next Step',
    description:
      'A professional assessment can help determine whether repair, replacement, or further investigation is appropriate.',
  },
];

const PROCESS_STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Explain the Problem',
    description:
      'Tell us what you have noticed, such as a faulty outlet, flickering light, or breaker that keeps tripping.',
  },
  {
    number: '2',
    title: 'Discuss the Service Needed',
    description:
      'Discuss the symptoms and the appropriate service options. Additional information may be needed to understand the issue.',
  },
  {
    number: '3',
    title: 'Confirm the Arrangements',
    description:
      'Confirm the scope and scheduling arrangements before the work proceeds.',
  },
];

const LOCAL_LINKS: { label: string; href: string }[] = [
  { label: 'Electrical Installation', href: '/electrical-installation/' },
  { label: 'Electrical Panel Upgrades', href: '/electrical-panel-upgrades/' },
  { label: 'Emergency Electrical Services', href: '/emergency-electrician/' },
];

type FAQItem = { question: string; answer: string };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I find electrical repair in De Soto, KS?',
    answer:
      'Look for an electrical service provider that serves De Soto, Kansas. Explain the symptoms, describe any affected outlets or fixtures, and ask about the next steps for assessment and repair.',
  },
  {
    question: 'What are common signs that my home needs electrical repair?',
    answer:
      'Warning signs can include malfunctioning outlets, flickering lights, recurring breaker trips, damaged electrical components, buzzing, sparks, or unusual burning smells. Some symptoms require urgent attention.',
  },
  {
    question: 'Can an electrician help with a circuit breaker that keeps tripping?',
    answer:
      'A repeatedly tripping breaker can have several causes, including an overloaded circuit, faulty equipment, or an electrical fault. A professional can assess the cause and recommend appropriate action.',
  },
  {
    question: 'Is electrical repair available 24 hours a day?',
    answer:
      'De Soto Electric Pros is presented as open 24 hours a day, seven days a week. Contact the business to explain the issue and confirm the available service arrangements.',
  },
  {
    question: 'Should I continue using an outlet that smells burnt or produces sparks?',
    answer:
      'No. Stop using the affected outlet and keep away from it. Do not touch damaged components or attempt repairs. If there is smoke or fire, leave the building and contact emergency services. Seek professional electrical assistance.',
  },
  {
    question: 'How much does electrical repair cost in De Soto, Kansas?',
    answer:
      'Costs depend on the problem, parts required, complexity, and work involved. Contact the business to discuss the issue and clarify the pricing arrangements before approving work.',
  },
  {
    question: 'Can I request a quote for electrical repair?',
    answer:
      'Yes. Use the Request a Quote button to visit the contact page and provide details about the electrical problem. The service requirements and arrangements can then be discussed.',
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
              Electrical Repair in De Soto, Kansas
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Electrical Repair in De Soto, KS
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              Having an electrical problem at home? De Soto Electric Pros helps
              customers explore electrical repair options in De Soto, Kansas,
              from faulty outlets and switches to flickering lights and
              recurring circuit breaker problems. Contact us to discuss your
              issue and determine the appropriate next step.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-7 py-3.5 text-base font-bold text-white/50">
                <Phone className="h-5 w-5" />
                Call for Electrical Repair
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
                alt="Professional electrician inspecting a residential electrical outlet"
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

function CommonProblems() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Problems We Can Help You Address
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Electrical problems can have different causes, so identifying the
            symptoms is an important first step. Explore common issues that may
            require professional electrical troubleshooting.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {COMMON_PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <article
                key={problem.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {problem.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RepairServices() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Residential Electrical Repair Services
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Electrical repair needs vary from home to home. De Soto Electric
            Pros provides information about common residential electrical
            repair needs so customers in De Soto, KS, can identify the
            relevant service and discuss the issue.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
          {REPAIR_SERVICES.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-navy">
                <Wrench className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="pb-16 lg:pb-20">
          <a
            href="/circuit-breaker-repair/"
            className="inline-flex items-center gap-1.5 text-base font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
          >
            Learn about circuit breaker repair
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyPromptly() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Don&apos;t Ignore Persistent Electrical Problems
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Faulty electrical components, recurring breaker trips, burning
            smells, sparks, and damaged wiring may present safety concerns.
            Contact a qualified electrical professional for assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-3 lg:pb-16">
          {SAFETY_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                <Eye className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-400">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-16 overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center shadow-hero lg:mb-20">
          <div className="mx-auto max-w-xl">
            <h3 className="text-2xl font-extrabold tracking-tight text-white">
              Need Help With an Electrical Problem?
            </h3>
            <a
              href="/contact/"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white/10 px-7 py-3.5 text-base font-bold text-white hover:bg-white/15 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RepairProcess() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How to Arrange Electrical Repair in De Soto
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-16 sm:grid-cols-3 lg:pb-20">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
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

function LocalSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
            <Zap className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Repair for Homes in De Soto, Kansas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            This page is focused on people searching for electrical repair in
            De Soto, KS. Whether you need help with a faulty outlet,
            flickering lights, or a breaker that keeps tripping, an electrician
            in De Soto, Kansas, can assess the issue and discuss home
            electrical repair and electrical troubleshooting options with you.
          </p>

          <div className="mt-7 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            {LOCAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-lg border border-navy-200 bg-surface-light px-5 py-2.5 text-sm font-bold text-navy hover:border-navy hover:bg-white transition-colors"
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Repair FAQs
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
              Still Have Questions About Electrical Repair?
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

function FinalConversion() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="relative order-2 lg:order-1 lg:pr-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-navy-100">
              <img
                src={FINAL_CTA_IMAGE}
                alt="Electrician working on a circuit breaker panel with colorful wiring"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Looking for Electrical Repair in De Soto, KS?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              From faulty outlets and flickering lights to recurring circuit
              breaker issues, get in touch to discuss your electrical repair
              needs in De Soto, Kansas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-7 py-3.5 text-base font-bold text-white hover:bg-white/15 transition-colors"
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

export default function ElectricalRepairPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <PageHero />
        <CommonProblems />
        <RepairServices />
        <WhyPromptly />
        <RepairProcess />
        <LocalSection />
        <FAQSection />
        <FinalConversion />
      </main>
      <Footer />
    </div>
  );
}
