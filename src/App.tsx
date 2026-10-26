import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import AvailabilityCTA from '@/components/AvailabilityCTA';
import Process from '@/components/Process';
import LocalService from '@/components/LocalService';
import FinalCTA from '@/components/FinalCTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ElectricalRepairPage from '@/pages/ElectricalRepairPage';
import ElectricalInstallationPage from '@/pages/ElectricalInstallationPage';
import ElectricalPanelUpgradesPage from '@/pages/ElectricalPanelUpgradesPage';
import ElectricalPanelReplacementPage from '@/pages/ElectricalPanelReplacementPage';
import CircuitBreakerRepairPage from '@/pages/CircuitBreakerRepairPage';
import EmergencyElectricianPage from '@/pages/EmergencyElectricianPage';
import AboutPage from '@/pages/AboutPage';
import ServiceAreaPage from '@/pages/ServiceAreaPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import ContactPage from '@/pages/ContactPage';
import FAQPage from '@/pages/FAQPage';
import NotFoundPage from '@/pages/NotFoundPage';

function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return path;
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AvailabilityCTA />
        <Process />
        <LocalService />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  if (path === '/electrical-repair/') {
    return <ElectricalRepairPage />;
  }

  if (path === '/electrical-installation/') {
    return <ElectricalInstallationPage />;
  }

  if (path === '/electrical-panel-upgrades/') {
    return <ElectricalPanelUpgradesPage />;
  }

  if (path === '/electrical-panel-replacement/') {
    return <ElectricalPanelReplacementPage />;
  }

  if (path === '/circuit-breaker-repair/') {
    return <CircuitBreakerRepairPage />;
  }

  if (path === '/emergency-electrician/') {
    return <EmergencyElectricianPage />;
  }

  if (path === '/contact/') {
    return <ContactPage />;
  }

  if (path === '/faq/') {
    return <FAQPage />;
  }

  if (path === '/about/') {
    return <AboutPage />;
  }

  if (path === '/service-area/') {
    return <ServiceAreaPage />;
  }

  if (path === '/privacy-policy/') {
    return <PrivacyPolicyPage />;
  }

  if (path === '/terms/') {
    return <TermsPage />;
  }

  if (path === '/' || path === '') {
    return (
      <div className="min-h-screen bg-surface-light">
        <HomePage />
      </div>
    );
  }

  return <NotFoundPage />;
}

export default App;
