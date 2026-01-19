import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Linkedin, Facebook, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useResponsive } from '../hooks/useResponsive';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();

  const handleSectionScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ 
      padding: 'clamp(2rem, 6vw, 6rem) 2rem 3rem', 
      background: 'var(--bg-color)', 
      borderTop: '1px solid var(--border-color)' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: 'clamp(2rem, 4vw, 4rem)', 
          marginBottom: 'clamp(2rem, 4vw, 4rem)' 
        }}>
          <div>
            <Link to="/" style={{ display: 'block', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              <Logo height={20} />
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Realizing technological inventions for your business since inception with quality and human focus.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.linkedin.com/company/1274530/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <Linkedin size={20} />
              </a>
              <a href="https://it-it.facebook.com/Tinvention-Ingegneria-Informatica--69227354093/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <Facebook size={20} />
              </a>
              <a href="https://github.com/Tinvention/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="mono" style={{ color: 'var(--text-primary)', fontSize: '0.8rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>{t('nav.services')}</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)', padding: 0 }}>
              <li style={{ cursor: 'pointer' }}><span onClick={() => handleSectionScroll('about')} style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('nav.about')}</span></li>
              <li style={{ cursor: 'pointer' }}><span onClick={() => handleSectionScroll('services')} style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('nav.services')}</span></li>
              <li style={{ cursor: 'pointer' }}><span onClick={() => handleSectionScroll('tech')} style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('nav.tech')}</span></li>
              <li style={{ cursor: 'pointer' }}><span onClick={() => handleSectionScroll('careers')} style={{ color: 'inherit', textDecoration: 'none', display: 'block' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('nav.careers')}</span></li>
            </ul>
          </div>

          <div>
            <h5 className="mono" style={{ color: 'var(--text-primary)', fontSize: '0.8rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Legal</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)', padding: 0 }}>
              <li><Link to="/legal/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('footer.legal.privacy')}</Link></li>
              <li><Link to="/legal/privacy-candidates" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('footer.legal.candidates')}</Link></li>
              <li><Link to="/legal/model-231" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('footer.legal.model231')}</Link></li>
              <li><Link to="/legal/whistleblowing" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('footer.legal.whistleblowing')}</Link></li>
              <li><Link to="/legal/quality-policy" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} >{t('footer.legal.quality')}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mono" style={{ color: 'var(--text-primary)', fontSize: '0.8rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Contact</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)', padding: 0 }}>
              <li>{t('contact.address.street')}</li>
              <li>{t('contact.address.city')}</li>
              <li>{t('contact.address.phone')}</li>
              <li>{t('contact.address.vat')}</li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '2rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '1rem',
          color: 'var(--text-muted)',
          fontSize: '0.7rem',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <p>{t('footer.copy')}</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span className="mono">MILANO_HQ: pacini_93</span>
            <span className="mono" style={{ color: 'var(--accent-primary)' }}>COMPLETE: 100%_PARITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
