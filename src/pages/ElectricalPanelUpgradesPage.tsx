import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Phone,
  Zap,
  PanelTop,
  TrendingUp,
  Clock4,
  Gauge,
  ShieldAlert,
  Home,
  Plug,
  Eye,
  MessageSquare,
  MapPin,
  Wrench,
  RefreshCw,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const HERO_IMAGE =
  'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=900';

const FINAL_CTA_IMAGE =
  'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=900';

const PAGE_META = {
  title: 'Electrical Panel Upgrades in De Soto, KS | De Soto Electric Pros',
  description:
    'Explore electrical panel upgrades in De Soto, KS. Learn about panel capacity, older equipment, home improvements, and when a professional assessment may help.',
  canonical: 'https://desotoelectricpros.online/electrical-panel-upgrades/',
};

const SIGNS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: TrendingUp,
    title: 'Increasing Electrical Demand',
    description:
      "Home improvements, additional appliances, or new equipment can change a home's electrical requirements. A professional can assess whether the existing panel has adequate capacity.",
  },
  {
    icon: Clock4,
    title: 'An Older Electrical Panel',
    description:
      'Older equipment may warrant an assessment to determine its condition, suitability, and compatibility with current electrical needs.',
  },
  {
    icon: Gauge,
    title: 'Limited Panel Capacity',
    description:
      'If the existing panel cannot accommodate planned electrical changes, an upgrade may be one option to consider after assessment.',
  },
  {
    icon: ShieldAlert,
    title: 'Frequent Breaker Trips',
    description:
      'Repeated breaker trips can result from several causes, including overloaded circuits or electrical faults. They do not automatically mean the entire panel needs replacement or upgrading.',
  },
  {
    icon: Home,
    title: 'Home Renovations',
    description:
      'Major renovations may change electrical requirements. Panel capacity and other system components should be evaluated as part of the planning process.',
  },
  {
    icon: Plug,
    title: 'New Electrical Equipment',
    description:
      'Some new equipment may require additional circuit capacity or specific electrical arrangements. A professional can help determine the appropriate solution.',
  },
];

const BENEFITS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: 'Support Changing Power Needs',
    description:
      'An appropriately designed system may accommodate new circuits or equipment when capacity and other requirements permit.',
  },
  {
    icon: Wrench,
    title: 'Address Equipment Limitations',
    description:
      "An upgrade may be considered when the existing panel is unsuitable for the property's needs.",
  },
  {
    icon: Home,
    title: 'Plan Home Improvements',
    description:
      'Assessing panel capacity can help homeowners plan renovations and additional electrical equipment.',
  },
  {
    icon: Eye,
    title: 'Understand Your Options',
    description:
      'A professional assessment can help distinguish between a circuit-level problem, a repair, and a larger panel project.',
  },
];

const PROCESS_STEPS: { number: string; title: string; description: string }[] = [
  {
    number: '1',
    title: 'Discuss Your Electrical Needs',
    description:
      'Explain the existing problem or planned changes, such as renovations or new equipment.',
  },
  {
    number: '2',
    title: 'Assess the Existing System',
    description:
      'A qualified professional should evaluate the existing panel, electrical demand, equipment condition, and applicable requirements before recommending work.',
  },
  {
    number: '3',
    title: 'Confirm the Project Details',
    description:
      'Confirm the proposed scope, pricing arrangements, any necessary approvals, and scheduling before work begins.',
  },
];

const WHY_CHOOSE: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Eye,
    title: 'Focused Service Information',
    description:
      'Learn about electrical panel upgrades and related residential electrical concerns.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Project Discussions',
    description:
      'Understand the proposed scope and options before arranging work.',
  },
  {
    icon: MapPin,
    title: 'Local Search Focus',
    description:
      'Find information tailored to customers looking for panel upgrades in De Soto, Kansas.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Contact the business at any time to discuss your needs and confirm available arrangements.',
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
    title: 'Electrical Installation',
    description:
      'Explore lighting, outlet, switch, and other residential installation options.',
    href: '/electrical-installation/',
  },
  {
    title: 'Electrical Panel Replacement',
    description:
      'Learn about replacing an existing panel when replacement is appropriate.',
    href: '/electrical-panel-replacement/',
  },
];

type FAQItem = { question: string; answer: string };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I know if my home needs an electrical panel upgrade?',
    answer:
      'Signs such as limited capacity, planned home improvements, new equipment requirements, or concerns about older equipment may justify an assessment. Frequent breaker trips can have other causes, so a professional should determine the underlying issue.',
  },
  {
    question: 'How much does an electrical panel upgrade cost in De Soto, KS?',
    answer:
      'The cost depends on the existing equipment, required capacity, project complexity, materials, and any associated electrical work. Contact the business to discuss your project and confirm pricing arrangements.',
  },
  {
    question: 'Is an electrical panel upgrade the same as panel replacement?',
    answer:
      'Not necessarily. An upgrade refers to improving the suitability or capacity of the electrical system, while replacement involves removing an existing panel and installing another. The terms can overlap depending on the project.',
  },
  {
    question: 'Will a panel upgrade stop my circuit breakers from tripping?',
    answer:
      'Not always. Breakers may trip because of overloaded circuits, faulty equipment, wiring problems, or other issues. The cause should be identified before deciding whether a panel upgrade is needed.',
  },
  {
    question: 'Can I upgrade my electrical panel when renovating my home?',
    answer:
      'Possibly. Renovations can change electrical demand, so the existing panel and circuits should be assessed during project planning. The appropriate work depends on the new requirements and the existing system.',
  },
  {
    question: 'Does De Soto Electric Pros offer 24/7 availability?',
    answer:
      'De Soto Electric Pros is presented as open 24 hours a day, seven days a week. Contact the business to discuss your situation and confirm the available service arrangements.',
  },
  {
    question: 'Can I upgrade an electrical panel myself?',
    answer:
      'Electrical panel work can present serious shock, fire, and equipment hazards and may be subject to local code and permit requirements. Have the work assessed and performed by an appropriately qualified electrical professional.',
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
              Electrical Panel Upgrades in De Soto, Kansas
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
              Electrical Panel Upgrades in De Soto, KS
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              Does your home's electrical system need to support changing
              power needs? De Soto Electric Pros helps homeowners explore
              electrical panel upgrade options in De Soto, Kansas. Learn about
              panel capacity, outdated equipment, and the factors a
              professional may consider when assessing whether an upgrade is
              appropriate.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-7 py-3.5 text-base font-bold text-white/50">
                <Phone className="h-5 w-5" />
                Call About a Panel Upgrade
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
                alt="Professional electrician examining a residential electrical panel"
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

function SignsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            When to Consider an Electrical Panel Upgrade
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            An electrical panel distributes power to circuits throughout a
            property. Whether an upgrade is appropriate depends on the
            condition of the equipment, available capacity, electrical
            requirements, and professional assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {SIGNS.map((sign) => {
            const Icon = sign.icon;
            return (
              <article
                key={sign.title}
                className="flex flex-col rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card"
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
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How an Electrical Panel Upgrade May Help
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            An upgrade may be appropriate when a professional identifies
            limitations with the existing system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UpgradeVsReplacement() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Is Your Home Better Suited to a Panel Upgrade or Replacement?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            The terms can overlap in real projects, and the correct option
            depends on the existing installation, required capacity, condition,
            and applicable code requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:pb-16">
          <article className="rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
              <PanelTop className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">Panel Upgrade</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-400">
              Work intended to improve the electrical panel or system's
              suitability for the property's electrical requirements. The
              exact scope depends on the existing equipment and project.
            </p>
          </article>
          <article className="rounded-2xl border border-navy-100 bg-surface-light p-6 shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
              <RefreshCw className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">
              Panel Replacement
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-400">
              Removing an existing panel and installing a replacement when
              assessment indicates replacement is appropriate.
            </p>
          </article>
        </div>

        <div className="pb-16 lg:pb-20">
          <a
            href="/electrical-panel-replacement/"
            className="inline-flex items-center gap-1.5 text-base font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
          >
            Learn about Electrical Panel Replacement
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How to Arrange an Electrical Panel Upgrade in De Soto
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

function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Panel Upgrade Information for De Soto Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
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

function RelatedServices() {
  return (
    <section className="bg-surface-light">
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
              className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:border-navy-200 hover:shadow-hero"
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
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 text-center lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brand-yellow">
            <PanelTop className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Electrical Panel Upgrades in De Soto, Kansas
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            This page serves homeowners researching electrical panel upgrades
            in De Soto, KS. Whether you are concerned about an outdated
            electrical panel, planning a residential electrical panel upgrade,
            or evaluating your electrical panel capacity, an electrician in De
            Soto, Kansas, can assess your current equipment and discuss whether
            electrical panel upgrades in De Soto, Kansas are appropriate for
            your home. Upgrade suitability depends on the property's
            current equipment and electrical requirements.
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
            Electrical Panel Upgrade FAQs
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
              Still Have Questions About Panel Upgrades?
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
                alt="Close-up of an organized residential circuit breaker panel with color-coded wiring"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Considering an Electrical Panel Upgrade in De Soto?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400">
              Discuss your home's electrical needs, planned improvements,
              or concerns about your existing panel. De Soto Electric Pros can
              help you explore the next steps.
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

export default function ElectricalPanelUpgradesPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <PageHero />
        <SignsSection />
        <BenefitsSection />
        <UpgradeVsReplacement />
        <ProcessSection />
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
