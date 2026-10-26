import { useState } from 'react';
import { Clock, MapPin, Zap, MessageSquare, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const PAGE_META = {
  title: 'Contact De Soto Electric Pros | Electrician in De Soto, KS',
  description:
    'Contact De Soto Electric Pros to request a quote for electrical repair, installation, panel upgrades, or emergency electrical service in De Soto, Kansas. Available 24/7.',
  canonical: 'https://desotoelectricpros.online/contact/',
};

const SERVICE_OPTIONS = [
  'Electrical Repair',
  'Electrical Installation',
  'Electrical Panel Upgrades',
  'Electrical Panel Replacement',
  'Circuit Breaker Repair',
  'Emergency Electrical Services',
  'Other',
];

const AVAILABILITY_POINTS = [
  {
    icon: Clock,
    title: 'Available 24/7',
    description:
      'Electrical concerns can happen at any time. De Soto Electric Pros is available seven days a week to discuss your service needs.',
  },
  {
    icon: MapPin,
    title: 'Serving De Soto, Kansas',
    description:
      'De Soto Electric Pros provides electrical service information for homeowners in De Soto, KS and the surrounding area.',
  },
  {
    icon: MessageSquare,
    title: 'Discuss Your Needs',
    description:
      'Tell us about the electrical issue or project you have in mind. We can help you explore the appropriate service options.',
  },
];

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy">
        Request a Quote
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-navy-400">
        Fill out the form below to tell us about your electrical service needs.
        Fields marked with <span className="text-brand-yellow-dark">*</span> are required.
      </p>

      <form
        className="mt-6 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-navy"
          >
            Name <span className="text-brand-yellow-dark">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy-300 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-navy"
          >
            Email <span className="text-brand-yellow-dark">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy-300 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-navy"
          >
            Phone <span className="text-navy-300">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy-300 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-navy"
          >
            Service Needed <span className="text-brand-yellow-dark">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formState.service}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-navy"
          >
            Message <span className="text-brand-yellow-dark">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formState.message}
            onChange={handleChange}
            className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy-300 focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow"
            placeholder="Describe the electrical issue or project you need help with."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
        >
          Submit Request
        </button>
      </form>

      <div className="mt-5 rounded-lg border border-brand-yellow/30 bg-brand-yellow/5 p-4">
        <p className="text-xs leading-relaxed text-navy-400">
          <strong className="text-navy">Note:</strong> This form is not yet
          connected to a submission service. To receive quote requests, a form
          backend or email service must be configured. Until then, submissions
          will not be delivered.
        </p>
      </div>
    </div>
  );
}

function AvailabilitySection() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-navy p-6 shadow-card sm:p-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-yellow">
            <Zap className="h-5 w-5 text-navy" strokeWidth={2.5} fill="#182538" />
          </span>
          <span className="text-lg font-extrabold text-white">
            De Soto Electric Pros
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          De Soto Electric Pros provides electrical service information for
          homeowners in De Soto, Kansas. Contact us to discuss your electrical
          needs and explore the appropriate service options.
        </p>
        <a
          href="mailto:contact@desotoelectricpros.online"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-brand-yellow transition-colors"
        >
          <Mail className="h-4 w-4" />
          contact@desotoelectricpros.online
        </a>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow">
          <Clock className="h-3.5 w-3.5" />
          Open 24 Hours · 7 Days a Week
        </p>
      </div>

      <div className="space-y-4">
        {AVAILABILITY_POINTS.map((point) => {
          const Icon = point.icon;
          return (
            <div
              key={point.title}
              className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-brand-yellow">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-400">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ContactPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <section className="bg-surface-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 text-center lg:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
                Contact Us
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
                Contact De Soto Electric Pros
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-navy-400">
                Have an electrical question or need a quote in De Soto, Kansas?
                Reach out to discuss your electrical service needs. We are
                available 24/7 to help you explore your options.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-2 lg:gap-12 lg:pb-20">
              <ContactForm />
              <AvailabilitySection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
