import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LineChart, Cpu } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { useResponsive } from '../hooks/useResponsive';

const Units: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isDesktop } = useResponsive();

  return (
    <section id="units" style={{ padding: 'clamp(3rem, 8vw, 8rem) 0', background: 'var(--card-bg)' }}>
      <div className="container">
        <div style={{ marginBottom: 'clamp(2rem, 5vw, 5rem)', textAlign: 'center' }}>
          <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '1rem' }}>[{t('units.tag')}]</h2>
          <h3 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>{t('units.title')}</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr', gap: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.div 
            whileHover={{ y: -5 }}
            style={{ 
              padding: '3rem', 
              background: 'var(--bg-color)', 
              borderRadius: '12px', 
              border: '1px solid var(--border-color)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ color: 'var(--accent-primary)', marginBottom: '2rem' }}>
              <Code2 size={isMobile ? 36 : 48} />
            </div>
            <h4 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', marginBottom: '1.5rem' }}>{t('units.tailor.title')}</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9rem' }}>
              {t('units.tailor.desc')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {t('units.tailor.tags').map((tag: string, i: number) => (
                <span key={i} className="mono" style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', border: '1px solid rgba(0,242,255,0.2)', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>{tag}</span>
              ))}
            </div>
            
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.05, transform: 'rotate(-15deg)' }}>
              <Cpu size={120} />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            style={{ 
              padding: '3rem', 
              background: 'var(--bg-color)', 
              borderRadius: '12px', 
              border: '1px solid var(--border-color)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ color: 'var(--accent-secondary)', marginBottom: '2rem' }}>
              <LineChart size={isMobile ? 36 : 48} />
            </div>
            <h4 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', marginBottom: '1.5rem' }}>{t('units.risk.title')}</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9rem' }}>
              {t('units.risk.desc')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {t('units.risk.tags').map((tag: string, i: number) => (
                <span key={i} className="mono" style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)', border: '1px solid rgba(112,0,255,0.2)', padding: '4px 8px', borderRadius: '4px', whiteSpace: 'nowrap' }}>{tag}</span>
              ))}
            </div>

            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.1, transform: 'rotate(-15deg)' }}>
               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }}>
                <LineChart size={120} style={{ color: 'var(--accent-secondary)' }} />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #units .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
};

export default Units;
