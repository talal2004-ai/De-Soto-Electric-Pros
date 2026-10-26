import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const PAGE_META = {
  title: 'Privacy Policy | De Soto Electric Pros',
  description: 'Read the Privacy Policy for the De Soto Electric Pros website.',
  canonical: 'https://desotoelectricpros.online/privacy-policy/',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="text-xl font-bold tracking-tight text-navy">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-navy-400">{children}</p>
    </section>
  );
}

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-surface-light">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 py-12 lg:py-16">
              <Section title="Introduction">
                This policy describes how information may be handled when
                visitors use the De Soto Electric Pros website.
              </Section>

              <Section title="Information You Provide">
                Information submitted through a contact form, such as a name,
                phone number, email address, or project details, may be used to
                respond to inquiries. This applies only if the form is
                connected and operational.
              </Section>

              <Section title="Website Data">
                Hosting providers or analytics tools may process technical
                information, such as browser or usage data, if those services
                are configured.
              </Section>

              <Section title="Cookies and Third-Party Services">
                Cookies or third-party services may be used if enabled on the
                website. No specific tools are claimed here unless confirmed.
              </Section>

              <Section title="Data Sharing and Security">
                Information should be handled responsibly and shared only as
                appropriate for operating the website, providing requested
                services, or meeting legal obligations. Absolute security
                cannot be promised.
              </Section>

              <Section title="Your Choices and Contact">
                Visitors may{' '}
                <a
                  href="/contact/"
                  className="font-bold text-navy-600 hover:text-brand-yellow-dark transition-colors"
                >
                  contact the business
                </a>{' '}
                to ask about information they submitted.
              </Section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
