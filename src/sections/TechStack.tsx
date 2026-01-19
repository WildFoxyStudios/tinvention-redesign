import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const { t } = useTranslation();

  const groups = t('tech.groups');
  const groupKeys = Object.keys(groups);

  return (
    <section id="tech" style={{ padding: 'clamp(3rem, 8vw, 8rem) 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '1rem' }}>[{t('tech.tag')}]</h2>
          <h3 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>{t('tech.title')}</h3>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(auto-fit, minmax(280px, 1fr))' : window.innerWidth > 480 ? 'repeat(2, 1fr)' : '1fr', 
          gap: 'clamp(1rem, 2vw, 1.5rem)' 
        }}>
          {groupKeys.map((key, idx) => {
            const group = groups[key];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{ 
                  padding: 'clamp(1.5rem, 3vw, 2rem)', 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(1rem, 2vw, 1.5rem)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '2px' }} />
                  <h4 className="mono" style={{ 
                    color: 'var(--text-primary)', 
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    {group.title}
                  </h4>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.items.map((item: string, i: number) => (
                    <span 
                      key={i} 
                      className="mono" 
                      style={{ 
                        padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.6rem, 1.5vw, 0.75rem)', 
                        background: 'rgba(255, 255, 255, 0.03)', 
                        border: '1px solid var(--border-color)', 
                        borderRadius: '4px',
                        fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.2s ease',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-primary)';
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        e.currentTarget.style.background = 'rgba(0, 242, 255, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
