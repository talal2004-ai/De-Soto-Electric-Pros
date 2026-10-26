import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const PAGE_META = {
  title: 'Terms & Conditions | De Soto Electric Pros',
  description: 'Review the website terms and conditions for De Soto Electric Pros.',
  canonical: 'https://desotoelectricpros.online/terms/',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="text-xl font-bold tracking-tight text-navy">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-navy-400">{children}</p>
    </section>
  );
}

export default function TermsPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-navy-100 py-12 lg:py-16">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow-dark">
                Legal
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                Terms &amp; Conditions
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-surface-light">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 py-12 lg:py-16">
              <Section title="Website Information">
                Website content provides general information about electrical
                services and is not a substitute for an on-site assessment by a
                qualified professional.
              </Section>

              <Section title="Service Requests and Quotes">
                Submitting a request does not automatically confirm an
                appointment, price, or service agreement. Project details and
                pricing must be confirmed separately.
              </Section>

              <Section title="Electrical Safety">
                Website content is not emergency guidance for every situation.
                For a fire or immediate danger, visitors should move to safety
                and contact emergency services.
              </Section>

              <Section title="Accuracy of Information">
                Website content may change, and specific service availability
                and project details should be confirmed directly.
              </Section>

              <Section title="Third-Party Links">
                The website may link to external websites, which are governed
                by their own terms and policies.
              </Section>

              <Section title="Website Use">
                Visitors are asked not to misuse the website or attempt to
                disrupt its operation.
              </Section>

              <Section title="Contact">
                For questions about these terms, please{' '}
                <a
                  href="/contact/"
                  className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
                >
                  contact us
                </a>
                .
              </Section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
