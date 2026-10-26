import { Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const PAGE_META = {
  title: 'Page Not Found | De Soto Electric Pros',
  description: 'The page you are looking for could not be found.',
  noindex: true,
};

export default function NotFoundPage() {
  useDocumentMeta(PAGE_META);

  return (
    <div className="min-h-screen bg-surface-light">
      <Header />
      <main>
        <section className="bg-surface-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-20 text-center lg:py-28">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-brand-yellow">
                <Zap className="h-8 w-8" strokeWidth={2.5} fill="#182538" />
              </span>
              <p className="mt-6 text-6xl font-extrabold tracking-tight text-navy sm:text-7xl">
                404
              </p>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Page Not Found
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-navy-400">
                The page you are looking for may have been moved or no longer
                exists. Return to the homepage to explore electrical service
                information for De Soto, Kansas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-yellow px-7 py-3.5 text-base font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
                >
                  Back to Homepage
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
