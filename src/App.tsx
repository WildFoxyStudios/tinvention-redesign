/**
 * @author Javier Echevarria
 * @description Main Application entry point. Handles global state for theme/language
 * and coordinates the initial system reveal.
 */
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import BackToTop from './components/BackToTop.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';

// Lazy load pages
const Home = lazy(() => import('./pages/Home.tsx'));
const LegalPage = lazy(() => import('./pages/LegalPage.tsx'));

const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)' }}>
    <div className="mono" style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>LOADING_SYSTEM...</div>
  </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log(
      "%c Developed by Javier Echevarria %c https://wildfoxy.dev ",
      "background: #00f2fe; color: #000; padding: 5px; border-radius: 3px 0 0 3px; font-weight: bold;",
      "background: #444; color: #fff; padding: 5px; border-radius: 0 3px 3px 0;"
    );

    // Simulate system initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Slightly longer than the progress bar to show "READY" state

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/legal/:type" element={<LegalPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
