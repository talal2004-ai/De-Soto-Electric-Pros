import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I find an electrician in De Soto, KS?',
    answer:
      'Look for an electrical service provider whose service area includes De Soto, Kansas, and contact them to discuss your electrical issue, the type of work needed, and scheduling options.',
  },
  {
    question:
      'Does De Soto Electric Pros offer 24-hour electrical service?',
    answer:
      'De Soto Electric Pros is presented as available 24 hours a day, seven days a week. Contact the business to explain your electrical concern and confirm the service arrangements available for your situation.',
  },
  {
    question: 'What types of electrical repairs can an electrician help with?',
    answer:
      'Electrical repair needs may include faulty outlets, malfunctioning switches, flickering lights, repeatedly tripping breakers, and other electrical problems. The appropriate repair depends on the cause and condition of the electrical system.',
  },
  {
    question: 'When should I consider an electrical panel upgrade?',
    answer:
      'An electrical panel assessment may be appropriate if your household\u2019s electrical needs have increased, your panel has capacity limitations, or an electrician identifies equipment concerns. A qualified professional can assess your specific situation.',
  },
  {
    question:
      'What is the difference between electrical panel repair and replacement?',
    answer:
      'Repair addresses a specific problem when the existing panel can safely remain in service. Replacement involves installing a different panel when the existing equipment is unsuitable or cannot reasonably be repaired. The appropriate option depends on a professional assessment.',
  },
  {
    question:
      'Do you provide electrical installation services in De Soto, Kansas?',
    answer:
      'The website lists electrical installation among its service categories. Contact De Soto Electric Pros to discuss your project and confirm the specific installation service you need.',
  },
  {
    question: 'How can I request an electrical service quote?',
    answer:
      'Use the Request a Quote button to visit the contact page and provide details about your electrical needs. The service details and arrangements can then be discussed.',
  },
  {
    question:
      'What should I do if I notice a burning smell or sparks from an electrical outlet?',
    answer:
      'Treat sparks, smoke, or a burning smell as potentially dangerous. Do not touch the outlet or attempt repairs. If safe, stay away from the affected area and switch off power only if you can do so without approaching the hazard. If there is smoke or fire, leave the building and contact emergency services. Arrange professional electrical assistance.',
  },
];

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${item.question.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`;
  const buttonId = `faq-button-${item.question.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`;

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="faq" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
            Common Questions
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions About Electrical Services
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400">
            Have questions about finding an electrician in De Soto, Kansas?
            Explore answers about electrical repairs, installations, emergency
            service, and other common electrical needs.
          </p>
        </div>

        <div className="mx-auto max-w-3xl pb-6">
          {FAQ_ITEMS.map((item, index) => (
            <FAQRow
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        <div className="mx-auto max-w-3xl pb-16 lg:pb-20">
          <div className="rounded-2xl border border-navy-100 bg-surface-light p-6 text-center sm:p-8">
            <h3 className="text-xl font-bold text-navy">
              Still Have Questions About Electrical Service?
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
