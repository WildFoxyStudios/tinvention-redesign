import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingTop: 'clamp(60px, 15vw, 80px)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow - Hidden on mobile */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%)',
        zIndex: -1,
        display: window.innerWidth > 768 ? 'block' : 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(112, 0, 255, 0.05) 0%, transparent 70%)',
        zIndex: -1,
        display: window.innerWidth > 768 ? 'block' : 'none'
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mono" style={{ 
            color: 'var(--accent-primary)', 
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem'
          }}>
            <span style={{ opacity: 0.5 }}>01.</span> {t('hero.tag')}
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.2rem)', 
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            maxWidth: '1000px'
          }}>
            {t('hero.title').split('business.')[0]}
            <span className="gradient-text">business.</span>
          </h1>

          <p style={{ 
            fontSize: 'clamp(0.95rem, 3vw, 1.2rem)', 
            color: 'var(--text-secondary)', 
            maxWidth: '600px',
            marginBottom: '2rem'
          }}>
            {t('hero.desc')}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexDirection: window.innerWidth < 480 ? 'column' : 'row' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'var(--accent-primary)',
                color: '#000',
                padding: '0.875rem 1.5rem',
                borderRadius: '4px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                minHeight: '44px',
                width: window.innerWidth < 480 ? '100%' : 'auto'
              }}
            >
              {t('hero.cta_primary')} <ChevronRight size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ backgroundColor: 'var(--glass-hover)' }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                border: '1px solid var(--border-color)',
                background: 'transparent',
                color: 'var(--text-primary)',
                padding: '0.875rem 1.5rem',
                borderRadius: '4px',
                fontWeight: '500',
                cursor: 'pointer',
                minHeight: '44px',
                width: window.innerWidth < 480 ? '100%' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {t('hero.cta_secondary')}
            </motion.button>
          </div>
        </motion.div>

        {/* Terminal Peek */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4, duration: 1 }}
           style={{
             marginTop: 'clamp(2rem, 5vw, 5rem)',
             background: 'var(--card-bg)',
             border: '1px solid var(--border-color)', 
             borderRadius: '8px',
             padding: 'clamp(1rem, 3vw, 1.5rem)',
             boxShadow: 'var(--shadow-premium)',
             position: 'relative',
             overflowX: 'auto',
             WebkitOverflowScrolling: 'touch'
           }}
        >
          <div style={{ display: 'flex', gap: '6px', marginBottom: '1rem' }}>
            <div style={{ width: '10px', height: '10px', background: '#ff5f56', borderRadius: '50%' }} />
            <div style={{ width: '10px', height: '10px', background: '#ffbd2e', borderRadius: '50%' }} />
            <div style={{ width: '10px', height: '10px', background: '#27c93f', borderRadius: '50%' }} />
          </div>
          <div className="mono" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text-muted)', wordBreak: 'break-word' }}>
            <div><span style={{ color: 'var(--accent-primary)' }}>$</span> tinvention info --status</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              &gt; Initializing high-performance engine...<br />
              &gt; Loading expertise: [Fintech, AI, Cloud, Enterprise]<br />
              &gt; Status: <span style={{ color: '#27c93f' }}>READY_TO_BUILD</span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <span style={{ color: 'var(--accent-primary)' }}>$</span> <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ width: '8px', height: '1.2em', background: 'var(--accent-primary)', display: 'inline-block', verticalAlign: 'middle' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
