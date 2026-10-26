import { useState } from 'react';
import { ChevronDown, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const PAGE_META = {
  title: 'Electrical FAQs in De Soto, KS | De Soto Electric Pros',
  description:
    'Find answers to common questions about electrical repairs, panel upgrades, circuit breakers, and emergency electrical services in De Soto, KS.',
  canonical: 'https://desotoelectricpros.online/faq/',
};

type FAQItem = { question: string; answer: string };

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What electrical services are available in De Soto, KS?',
    answer:
      'De Soto Electric Pros provides information about a range of residential electrical services for homeowners in De Soto, Kansas, including electrical repair, electrical installation, panel upgrades, panel replacement, circuit breaker repair, and emergency electrical assistance. Visit our electrical services overview to explore the options.',
  },
  {
    question: 'How do I know if I need an electrical repair?',
    answer:
      'Common signs that may indicate a need for electrical repair include outlets or switches that stop working, lights that flicker or dim unexpectedly, breakers that trip repeatedly, buzzing sounds from outlets or panels, and unusual burning smells. If you notice any of these issues, contact a qualified electrician to assess the problem. Learn more on our electrical repair page.',
  },
  {
    question: 'Why does my circuit breaker keep tripping?',
    answer:
      'A circuit breaker that trips repeatedly may be responding to an overloaded circuit, a short circuit, a ground fault, or a faulty breaker. Each of these has different implications for safety and repair. A qualified electrician can identify the cause and recommend whether the breaker needs repair or replacement. See our circuit breaker repair page for more information.',
  },
  {
    question: 'When should I consider an electrical panel upgrade?',
    answer:
      'An electrical panel upgrade may be worth considering if your home has increased its electrical usage, your panel is older and may not meet current demands, or an electrician has identified capacity limitations during an assessment. Upgrading a panel is different from replacing a damaged one. Visit our electrical panel upgrades page to learn more.',
  },
  {
    question: 'What is the difference between a panel upgrade and a panel replacement?',
    answer:
      'A panel upgrade typically involves installing a panel with greater capacity to meet increased electrical demand. A panel replacement involves removing a damaged, outdated, or unsafe panel and installing a new one, which may or may not have higher capacity. The right choice depends on the condition of your current panel and your household needs. Learn more on our panel replacement page.',
  },
  {
    question: 'What should I do during an electrical emergency?',
    answer:
      'If you notice sparks, smoke, burning smells, or someone has received an electrical shock, prioritize safety first. Do not touch damaged outlets or equipment. If it is safe to do so, switch off power at the main breaker without approaching the hazard. If there is smoke or fire, leave the building immediately and call emergency services. Then contact a qualified electrician for professional assistance. See our emergency electrician page for more guidance.',
  },
  {
    question: 'Is emergency electrical service available 24 hours a day?',
    answer:
      'De Soto Electric Pros is available 24 hours a day, seven days a week. Electrical problems can occur at any time, and we encourage homeowners to contact us whenever an urgent electrical concern arises. Visit our emergency electrician page or contact us to discuss your situation.',
  },
  {
    question: 'How can I request a quote for electrical service?',
    answer:
      'You can request a quote by visiting our contact page and filling out the quote request form with details about your electrical needs. You can also reach out to discuss the scope of work, scheduling, and service options. Use the Request a Quote button in the header or visit our contact page to get started.',
  },
  {
    question: 'Does De Soto Electric Pros serve my area?',
    answer:
      'De Soto Electric Pros provides electrical service information for homeowners in De Soto, Kansas, and the surrounding area. If you are unsure whether your location is covered, visit our service area page or contact us to confirm.',
  },
  {
    question: 'How much do electrical services cost in De Soto, Kansas?',
    answer:
      'The cost of electrical service depends on the type of work, the complexity of the issue, any parts required, and other project-specific factors. We do not list prices online because every situation is different. Contact us to discuss your needs and clarify pricing arrangements before any work begins.',
  },
];

const slugify = (s: string) => s.replace(/[^a-z0-9]/gi, '-').toLowerCase();

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${slugify(item.question)}`;
  const buttonId = `faq-button-${slugify(item.question)}`;

  return (
    <div className="border-b border-navy-100 last:border-b-0">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
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
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 lg:py-20">
          {FAQ_ITEMS.map((item, index) => (
            <FAQRow
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-navy px-6 py-14 shadow-hero sm:px-12 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Still Have Questions About Electrical Service?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              If you did not find the answer you were looking for, contact us to
              discuss your electrical service needs in De Soto, Kansas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
              >
                Request a Quote
              </a>
              <a
                href="/service-area/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white hover:border-white hover:bg-white/5 transition-colors"
              >
                View Service Area
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-yellow">
              <Clock className="h-4 w-4" />
              Open 24 Hours · 7 Days a Week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FAQPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <section className="bg-surface-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
                Common Questions
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
                Frequently Asked Questions About Electrical Services in De Soto,
                KS
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-navy-400">
                Have questions about finding an electrician in De Soto,
                Kansas? Explore answers about electrical repairs, panel
                upgrades, circuit breakers, emergency service, and more.
              </p>
            </div>
          </div>
        </section>

        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
