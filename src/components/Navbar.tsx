import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

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
        <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
          <Logo height={isScrolled ? 22 : 28} />
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="desktop-menu" id="desktop-menu">
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
          style={{ color: 'var(--text-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
     
      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 39,
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            right: 0, 
            width: 'clamp(250px, 80vw, 320px)',
            height: '100vh',
            background: 'var(--bg-color)',
            borderLeft: '1px solid var(--border-color)',
            zIndex: 40,
            padding: 'clamp(1rem, 3vw, 1.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            boxShadow: '-4px 0 16px rgba(0, 0, 0, 0.3)'
          }}>
            {/* Close button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                alignSelf: 'flex-end',
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '0.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '40px',
                minWidth: '40px'
              }}
            >
              <X size={20} />
            </button>

            {/* Navigation links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    display: 'block',
                    background: 'rgba(255, 255, 255, 0.03)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 242, 255, 0.1)';
                    e.currentTarget.style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'var(--border-color)', margin: '1rem 0' }} />

            {/* Language & Theme selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Language */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Globe size={16} style={{ color: 'var(--text-muted)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Language</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={() => { setLang('IT'); setIsMobileMenuOpen(false); }} 
                  style={{ 
                    flex: 1,
                    fontSize: '0.85rem', 
                    color: lang === 'IT' ? '#fff' : 'var(--text-muted)', 
                    background: lang === 'IT' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                    border: lang === 'IT' ? 'none' : '1px solid var(--border-color)',
                    padding: '0.6rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    minHeight: '40px'
                  }}
                >
                  IT
                </button>
                <button 
                  onClick={() => { setLang('EN'); setIsMobileMenuOpen(false); }} 
                  style={{ 
                    flex: 1,
                    fontSize: '0.85rem', 
                    color: lang === 'EN' ? '#fff' : 'var(--text-muted)', 
                    background: lang === 'EN' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                    border: lang === 'EN' ? 'none' : '1px solid var(--border-color)',
                    padding: '0.6rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.2s ease',
                    minHeight: '40px'
                  }}
                >
                  EN
                </button>
              </div>

              {/* Theme toggle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                <Sun size={16} style={{ color: 'var(--text-muted)' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Theme</span>
              </div>
              <button 
                onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                style={{ 
                  width: '100%',
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border-color)', 
                  padding: '0.6rem 1rem', 
                  borderRadius: '6px',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  minHeight: '40px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--border-color)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--card-bg)';
                }}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
