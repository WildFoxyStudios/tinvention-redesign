import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="services" style={{ padding: '8rem 0', background: 'var(--card-bg)' }}>
      <div className="container">
        <div style={{ marginBottom: '5rem' }}>
          <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginBottom: '1rem' }}>[{t('services.tag')}]</h2>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', maxWidth: '800px' }}>{t('services.title')}</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="service-content"
          >
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('services.subtitle')}</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              {t('services.desc')}
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: '1.2rem',
              padding: '2rem',
              background: 'rgba(var(--accent-primary-rgb), 0.05)',
              borderLeft: '2px solid var(--accent-primary)',
              borderRadius: '0 8px 8px 0'
            }}>
              {t('about.nuances').map((nuance: string, i: number) => (
                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                  <Check size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{nuance}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            id="products" style={{ 
              background: 'var(--bg-color)', 
              padding: '2.5rem', 
              borderRadius: '12px', 
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--card-shadow)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, transparent 70%)',
              zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h4 className="mono" style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '0.8rem' }}>{t('services.smartsourcing.tag')}</h4>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t('services.smartsourcing.title')}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                {t('services.smartsourcing.desc')}
              </p>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {t('services.smartsourcing.features').map((f: string, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button 
                  className="mono" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ 
                    background: 'transparent',
                    border: '1px solid var(--accent-primary)',
                    color: 'var(--accent-primary)',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: 'fit-content'
                  }}>
                  {t('services.smartsourcing.cta')}
                </button>
                <a 
                  href={`mailto:${t('services.smartsourcing.contact_email')}`}
                  className="mono"
                  style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textDecoration: 'none' }}
                >
                  // contact: {t('services.smartsourcing.contact_email')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #services .container > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        #products button:hover {
          background: var(--accent-primary);
          color: var(--bg-color);
          box-shadow: 0 0 20px rgba(0, 242, 255, 0.3);
        }
      `}} />
    </section>
  );
};

export default Services;
