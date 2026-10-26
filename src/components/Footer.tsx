import { Clock, Mail } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Electrical Services', href: '/#services' },
  { label: 'Service Area', href: '/service-area/' },
  { label: 'Frequently Asked Questions', href: '/faq/' },
  { label: 'Contact Us', href: '/contact/' },
];

const SERVICE_LINKS = [
  { label: 'Electrical Repair', href: '/electrical-repair/' },
  { label: 'Electrical Installation', href: '/electrical-installation/' },
  { label: 'Electrical Panel Upgrades', href: '/electrical-panel-upgrades/' },
  { label: 'Electrical Panel Replacement', href: '/electrical-panel-replacement/' },
  { label: 'Circuit Breaker Repair', href: '/circuit-breaker-repair/' },
  { label: 'Emergency Electrical Services', href: '/emergency-electrician/' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms & Conditions', href: '/terms/' },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-white/70 hover:text-brand-yellow transition-colors"
      >
        {label}
      </a>
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:pr-4">
            <img
              src="/De_Soto_Electric_Pros_Logo_(1)-Photoroom.png"
              alt="De Soto Electric Pros logo"
              className="h-12 w-auto max-w-[260px] object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Electrical service information for homeowners in De Soto,
              Kansas, including electrical repairs, installations, panel
              upgrades, and other common electrical needs.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              <Clock className="h-3.5 w-3.5" />
              Open 24 Hours · 7 Days a Week
            </p>
            <a
              href="/contact/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-yellow transition-colors"
            >
              Contact Us to Request Service
            </a>
            <a
              href="mailto:contact@desotoelectricpros.online"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-brand-yellow transition-colors"
            >
              <Mail className="h-4 w-4" />
              contact@desotoelectricpros.online
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <nav aria-label="Quick Links">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </nav>

          {/* Column 3: Services */}
          <nav aria-label="Electrical Services">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h2>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact & Availability */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact De Soto Electric Pros
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <span className="font-semibold text-white/90">Service Area:</span>{' '}
                De Soto, Kansas
              </li>
              <li>
                <span className="font-semibold text-white/90">Availability:</span>{' '}
                Open 24/7
              </li>
              <li>
                <span className="font-semibold text-white/90">Email:</span>{' '}
                <a href="mailto:contact@desotoelectricpros.online" className="text-white/70 hover:text-brand-yellow transition-colors">contact@desotoelectricpros.online</a>
              </li>
              <li>
                <span className="font-semibold text-white/90">Contact:</span>{' '}
                <a href="/contact/" className="text-white/70 hover:text-brand-yellow transition-colors">Visit our contact page</a>
              </li>
            </ul>
            <a
              href="/contact/"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Local SEO text */}
        <div className="border-t border-white/10 pb-8 pt-6">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-white/50">
            De Soto Electric Pros provides information about electrical services
            for customers looking for an electrician in De Soto, KS. Explore
            electrical repair, electrical installation, panel upgrades, circuit
            breaker services, and 24-hour electrical assistance.
          </p>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/50">
              &copy; {currentYear} De Soto Electric Pros. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-brand-yellow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
