import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Electrical Repair', href: '/electrical-repair/' },
      { label: 'Electrical Installation', href: '/electrical-installation/' },
      { label: 'Electrical Panel Upgrades', href: '/electrical-panel-upgrades/' },
      { label: 'Electrical Panel Replacement', href: '/electrical-panel-replacement/' },
      { label: 'Circuit Breaker Repair', href: '/circuit-breaker-repair/' },
      { label: 'Emergency Electrician', href: '/emergency-electrician/' },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Service Area', href: '/service-area/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2.5 text-white shrink-0"
      aria-label="De Soto Electric Pros home"
    >
      <img
        src="/De_Soto_Electric_Pros_Logo_(1)-Photoroom.png"
        alt="De Soto Electric Pros logo"
        className="h-10 w-auto max-w-[220px] object-contain sm:h-11"
      />
    </a>
  );
}

function ServicesDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <ul className="absolute left-0 top-full pt-2 w-64 z-50">
          <div className="rounded-xl bg-white shadow-card border border-navy-100 overflow-hidden">
            {item.children!.map((child) => (
              <li key={child.label}>
                <a
                  href={child.href}
                  className="block px-4 py-2.5 text-sm font-medium text-navy hover:bg-surface-light hover:text-navy-600 transition-colors"
                >
                  {child.label}
                </a>
              </li>
            ))}
          </div>
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-navy transition-shadow ${
        scrolled ? 'shadow-nav' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" aria-label="Main">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <ServicesDropdown key={item.label} item={item} />
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <a
              href="/contact/"
              className="inline-flex items-center rounded-lg bg-brand-yellow px-5 py-2.5 text-sm font-bold text-navy shadow-sm hover:bg-brand-yellow-dark transition-colors"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-nav" className="lg:hidden border-t border-white/10 bg-navy">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <ul className="ml-3 mt-1 mb-1 border-l border-white/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="/contact/"
              className="mt-4 block rounded-lg bg-brand-yellow px-5 py-3 text-center text-sm font-bold text-navy hover:bg-brand-yellow-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
