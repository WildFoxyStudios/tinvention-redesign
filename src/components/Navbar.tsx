import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = useMemo(() => [
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.domains'), href: '/#domains' },
    { name: t('nav.units'), href: '/#units' },
    { name: t('nav.careers'), href: '/#careers' },
    { name: t('nav.contact'), href: '/#contact' },
  ], [t]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
      style={{
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
        background: isScrolled ? 'var(--header-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <Terminal strokeWidth={2.5} size={24} style={{ color: 'var(--accent-primary)' }} />
          <span className="mono">tinvention<span style={{ color: 'var(--accent-primary)' }}>.net</span></span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
          
          <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1.5rem', alignItems: 'center' }}>
             <button 
              onClick={toggleTheme}
              className="mono"
              style={{ padding: '0.5rem', marginRight: '0.5rem', color: 'var(--accent-primary)' }}
              aria-label="Toggle theme"
             >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
             </button>
             <Globe size={14} style={{ color: 'var(--text-muted)' }} />
             <button 
              onClick={() => setLang('IT')} 
              className="mono" 
              style={{ fontSize: '0.75rem', color: lang === 'IT' ? 'var(--accent-primary)' : 'var(--text-muted)' }}
             >IT</button>
             <span style={{ color: 'var(--border-color)', fontSize: '0.75rem' }}>/</span>
             <button 
              onClick={() => setLang('EN')} 
              className="mono" 
              style={{ fontSize: '0.75rem', color: lang === 'EN' ? 'var(--accent-primary)' : 'var(--text-muted)' }}
             >EN</button>
          </div>

          <Link 
            to="/#contact" 
            className="mono"
            style={{ 
              padding: '0.5rem 1rem', 
              border: '1px solid var(--accent-primary)', 
              borderRadius: '4px',
              fontSize: '0.8rem',
              color: 'var(--accent-primary)',
              marginLeft: '0.5rem'
            }}
          >
            {t('nav.cta')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          style={{ display: 'none', color: 'var(--text-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{ 
          position: 'fixed', 
          top: '60px', 
          left: 0, 
          right: 0, 
          height: 'calc(100vh - 60px)', 
          background: 'var(--bg-color)', 
          zIndex: 40,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => { setLang('IT'); setIsMobileMenuOpen(false); }} style={{ fontSize: '1.25rem', color: lang === 'IT' ? 'var(--accent-primary)' : 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>IT</button>
                <button onClick={() => { setLang('EN'); setIsMobileMenuOpen(false); }} style={{ fontSize: '1.25rem', color: lang === 'EN' ? 'var(--accent-primary)' : 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>EN</button>
              </div>
              <button 
                onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                style={{ 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border-color)', 
                  padding: '0.75rem', 
                  borderRadius: '12px',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span className="mono" style={{ fontSize: '0.8rem' }}>THEME</span>
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
