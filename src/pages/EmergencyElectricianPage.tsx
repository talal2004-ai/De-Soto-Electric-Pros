import { useState } from 'react';
import {
  ChevronDown,
  Clock,
  Flame,
  Sparkles,
  ShieldAlert,
  Power,
  Zap,
  Thermometer,
  CloudLightning,
  Eye,
  ShieldX,
  Users,
  LifeBuoy,
  Search,
  CircuitBoard,
  PanelTop,
  Wrench,
  MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const HERO_IMAGE =
  'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=900';

const FINAL_CTA_IMAGE =
  'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=900';

const PAGE_META = {
  title: 'Emergency Electrician in De Soto, KS | De Soto Electric Pros',
  description:
    'Need an emergency electrician in De Soto, KS? Learn what to do about electrical hazards, sudden power problems, burning smells, and urgent electrical concerns.',
  canonical: 'https://desotoelectricpros.online/emergency-electrician/',
};

const SAFETY_POINTS: { icon: LucideIcon; text: string }[] = [
  {
    icon: Flame,
    text: 'If there is a fire or immediate danger, move to safety and contact emergency services.',
  },
  {
    icon: ShieldAlert,
    text: 'If you notice smoke, sparking, a burning smell, or unusual heat near electrical equipment, keep away from the affected equipment and seek urgent professional assistance.',
  },
  {
    icon: ShieldX,
    text: 'Do not touch exposed wires, damaged electrical equipment, or a wet electrical panel.',
  },
  {
    icon: Power,
    text: 'Do not attempt to open an electrical panel or carry out repairs yourself.',
  },
  {
    icon: Users,
    text: 'If it is safe to do so, keep other people away from the affected area.',
  },
];

const EMERGENCIES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Flame,
    title: 'Burning Smell Near Electrical Equipment',
    description:
      'An unexplained burning odor may indicate overheating or an electrical fault.',
  },
  {
    icon: Sparkles,
    title: 'Sparking or Visible Electrical Damage',
    description:
      'Sparking, exposed conductors, or damaged electrical equipment require caution and professional assessment.',
  },
  {
    icon: Power,
    title: 'Repeated Breaker Trips',
    description:
      'A breaker that repeatedly trips may indicate an overload, wiring issue, appliance fault, or breaker problem.',
  },
  {
    icon: Zap,
    title: 'Sudden Loss of Power to Part of the Property',
    description:
      'The cause may involve a circuit, panel, utility issue, or other electrical fault.',
  },
  {
    icon: Thermometer,
    title: 'Hot or Discolored Outlets and Switches',
    description:
      'Unusual heat, discoloration, or melting should not be ignored.',
  },
  {
    icon: CloudLightning,
    title: 'Storm-Related Electrical Concerns',
    description:
      'Damaged electrical equipment or exposed wires after severe weather should be approached with caution.',
  },
];

const STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Recognize the Warning Signs',
    description: 'Note what you observed from a safe distance.',
  },
  {
    number: '2',
    title: 'Keep Away From the Hazard',
    description:
      'Do not touch exposed wires, sparking equipment, or damaged panels.',
  },
  {
    number: '3',
    title: 'Protect Others',
    description:
      'Keep household members and pets away from the affected area.',
  },
  {
    number: '4',
    title: 'Seek the Appropriate Help',
    description:
      'Contact emergency services for fire or immediate danger; contact an appropriate electrical professional for urgent electrical concerns.',
  },
  {
    number: '5',
    title: 'Explain the Symptoms',
    description:
      'If it is safe to communicate, describe what happened, where the problem appears to be, and whether smoke, sparks, heat, or a power interruption is present.',
  },
];

const SERVICE_CARDS: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}[] = [
  {
    icon: Search,
    title: 'Urgent Electrical Troubleshooting',
    description:
      'Discuss sudden electrical problems and possible next steps.',
  },
  {
    icon: CircuitBoard,
    title: 'Circuit Breaker Problems',
    description:
      'Address recurring breaker trips and suspected breaker faults.',
    href: '/circuit-breaker-repair/',
  },
  {
    icon: PanelTop,
    title: 'Electrical Panel Concerns',
    description:
      'Discuss unusual symptoms, visible damage, or concerns involving an electrical panel.',
    href: '/electrical-panel-replacement/',
  },
  {
    icon: Wrench,
    title: 'Electrical Repair Needs',
    description:
      'Identify the reported issue and discuss the appropriate repair assessment.',
    href: '/electrical-repair/',
  },
];

const CALL_STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Describe the Situation',
    description:
      'Explain the symptoms and any immediate safety concerns.',
  },
  {
    number: '2',
    title: 'Discuss the Next Steps',
    description:
      'Provide the information needed to understand the issue and determine the appropriate response.',
  },
  {
    number: '3',
    title: 'Arrange Appropriate Service',
    description:
      'Discuss availability and the next steps for the reported problem.',
  },
];

const WHY_CHOOSE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Clock,
    title: 'Available 24/7',
    description:
      'Clearly communicate the stated 24-hour, seven-day availability.',
  },
  {
    icon: ShieldAlert,
    title: 'Safety Comes First',
    description:
      'Encourage safe decisions and appropriate professional assistance.',
  },
  {
    icon: MapPin,
    title: 'Local Service Focus',
    description: 'Keep the content centered on De Soto, Kansas.',
  },
];

type FAQItem = { question: string; answer: string };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is De Soto Electric Pros open 24/7?',
    answer:
      'The website communicates availability 24 hours a day, seven days a week. Use the contact page to discuss your concern and the appropriate next step. A specific arrival time cannot be guaranteed.',
  },
  {
    question: 'What counts as an electrical emergency?',
    answer:
      'Fire, sparking, smoke, exposed wires, burning smells, or unusually hot electrical equipment can indicate serious hazards. Immediate danger or fire requires contacting emergency services.',
  },
  {
    question: 'What should I do if I smell burning near my electrical panel?',
    answer:
      'Keep away from the panel and seek urgent professional help. If there is smoke, fire, or immediate danger, move to safety and contact emergency services. Do not open the panel.',
  },
  {
    question: 'Can I reset a breaker that keeps tripping?',
    answer:
      'Repeatedly resetting a breaker without understanding the cause is not recommended. Recurring trips should be assessed, especially if accompanied by heat, burning odors, sparks, or visible damage.',
  },
  {
    question: 'Can an electrician help with a sudden partial power loss?',
    answer:
      'The cause could be a circuit problem, panel issue, or utility-related interruption. A professional can help determine the appropriate next step; utility outages may need to be reported to the utility provider.',
  },
  {
    question: 'How much does an emergency electrician cost in De Soto, KS?',
    answer:
      'Cost depends on the problem, work required, parts, and timing. Contact the business for a project-specific discussion. Specific rates or emergency fees are not published on this page.',
  },
  {
    question: 'How quickly can an emergency electrician arrive?',
    answer:
      'Availability and arrival timing depend on the situation and current service conditions. Call to discuss the concern. A specific response time cannot be promised.',
  },
  {
    question: 'Who should I call for an electrical emergency in De Soto, KS?',
    answer:
      'Contact De Soto Electric Pros through the contact page to discuss urgent electrical concerns. For a fire or immediate threat to life, contact emergency services first.',
  },
];

const slugify = (s: string) => s.replace(/[^a-z0-9]/gi, '-').toLowerCase();

function PageHero() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
              24/7 Emergency Electrical Services · De Soto, Kansas
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Emergency Electrician in De Soto, KS
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-100">
              Electrical problems can happen unexpectedly. De Soto Electric
              Pros is available 24/7 for homeowners in De Soto who need to
              discuss urgent electrical concerns and determine the appropriate
              next steps.
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
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-7 py-3.5 text-base font-bold text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                Contact Us
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy">
              <Clock className="h-3.5 w-3.5" />
              Open 24/7 · 7 Days a Week
            </p>
          </div>

          <div className="relative lg:pl-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-white/10">
              <img
                src={HERO_IMAGE}
                alt="Electrician working on a circuit breaker panel with color-coded wiring"
                className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[540px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetyNotice() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-brand-yellow bg-white p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                <ShieldAlert className="h-5 w-5" strokeWidth={2} />
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Electrical Emergency? Put Safety First
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {SAFETY_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <li
                    key={point.text}
                    className="flex items-start gap-3 text-sm leading-relaxed text-navy-400"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-dark" />
                    {point.text}
                  </li>
                );
              })}
            </ul>
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
            Urgent Electrical Help in De Soto, Kansas
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-navy-400">
            <p>
              Electrical problems may range from sudden circuit failures to
              potentially dangerous signs such as burning odors, sparking, or
              visible damage. The appropriate response depends on the symptoms
              and the level of danger.
            </p>
            <p>
              The purpose of an emergency call is to communicate what is
              happening and determine an appropriate response. If you need an
              emergency electrician in De Soto, KS, contacting a professional
              can help you understand the situation and the next steps for
              your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonEmergencies() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Problems That May Need Urgent Attention
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Not every electrical inconvenience is an emergency. A qualified
            professional can help determine the appropriate response.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-3 lg:pb-16">
          {EMERGENCIES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mb-16 rounded-2xl border border-navy-100 bg-white p-6 shadow-card lg:mb-20">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-navy-400">
            <Eye className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-dark" />
            <span>
              Not every power outage is caused by the property's wiring.
              Utility-related outages may need to be reported to the relevant
              utility provider.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatToDo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            What Should You Do During an Electrical Emergency?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pb-20">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
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

          <div className="rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-brand-yellow">
              <LifeBuoy className="h-5 w-5" strokeWidth={2} />
            </span>
            <h3 className="mt-4 text-base font-bold text-navy">
              Stay Safe and Seek Help
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-400">
              Do not attempt risky troubleshooting or reset breakers
              repeatedly. Prioritize safety and professional assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyServices() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Emergency Electrical Services We Can Discuss
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
          {SERVICE_CARDS.map((card) => {
            const Icon = card.icon;
            const content = (
              <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:border-navy-200 hover:shadow-hero">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {card.description}
                </p>
                {card.href && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy-600">
                    Learn More
                  </span>
                )}
              </article>
            );

            return card.href ? (
              <a key={card.title} href={card.href} className="block">
                {content}
              </a>
            ) : (
              <div key={card.title}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatToExpect() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            What Happens When You Contact Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 pb-16 sm:grid-cols-3 lg:pb-20">
          {CALL_STEPS.map((step) => (
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
            Emergency Electrical Support for De Soto
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
            <LifeBuoy className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Emergency Electrician Serving De Soto, Kansas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            This page is for De Soto residents dealing with urgent electrical
            concerns at home or on their property. Whether you need
            <a href="/electrical-repair/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"> electrical repair services</a>,
            <a href="/circuit-breaker-repair/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"> circuit breaker repair</a>,
            <a href="/electrical-panel-upgrades/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"> electrical panel upgrades</a>,
            <a href="/electrical-panel-replacement/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"> electrical panel replacement</a>, or
            <a href="/electrical-installation/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"> electrical installation services</a>,
            our team is available to help. <a href="/contact/" className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors">Contact De Soto Electric Pros</a> to discuss your concern and the appropriate next steps.
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
            Emergency Electrician FAQs
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
              Still Have Questions About Emergency Electrical Service?
            </h3>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div className="relative order-2 lg:order-1 lg:pr-4">
            <div className="relative overflow-hidden rounded-2xl shadow-hero ring-1 ring-white/10">
              <img
                src={FINAL_CTA_IMAGE}
                alt="Electrician using a multimeter to troubleshoot an electrical panel"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Need Help With an Urgent Electrical Problem?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-100">
              If you are experiencing an urgent electrical concern in De Soto,
              Kansas, contact De Soto Electric Pros to explain the situation
              and discuss the appropriate next step.
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
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-7 py-3.5 text-base font-bold text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors"
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

export default function EmergencyElectricianPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <PageHero />
        <SafetyNotice />
        <Introduction />
        <CommonEmergencies />
        <WhatToDo />
        <EmergencyServices />
        <WhatToExpect />
        <WhyChooseUs />
        <LocalSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
