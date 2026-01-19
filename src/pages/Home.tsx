import React, { Suspense } from 'react';

// Eager load critical top-of-fold parts
import Hero from '../sections/Hero.tsx';
import About from '../sections/About.tsx';

// Lazy load non-critical sections
const Services = React.lazy(() => import('../sections/Services.tsx'));
const BusinessDomains = React.lazy(() => import('../sections/BusinessDomains.tsx'));
const Units = React.lazy(() => import('../sections/Units.tsx'));
const Methodology = React.lazy(() => import('../sections/Methodology.tsx'));
const CertificationBadges = React.lazy(() => import('../components/CertificationBadges.tsx'));
const TechStack = React.lazy(() => import('../sections/TechStack.tsx'));
const Careers = React.lazy(() => import('../sections/Careers.tsx'));
const Contact = React.lazy(() => import('../sections/Contact.tsx'));

const SectionLoader = () => (
  <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     <div className="mono" style={{ color: 'var(--accent-primary)', opacity: 0.5 }}>FETCHING_MODULE...</div>
  </div>
);

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<SectionLoader />}>
        <Services />
        <BusinessDomains />
        <Units />
        <Methodology />
        <CertificationBadges />
        <TechStack />
        <Careers />
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
