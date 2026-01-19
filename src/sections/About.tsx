import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Users } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { 
      icon: Cpu, 
      title: t('about.stats.tech.title'), 
      desc: t('about.stats.tech.desc')
    },
    { 
      icon: Users, 
      title: t('about.stats.human.title'), 
      desc: t('about.stats.human.desc')
    },
    { 
      icon: Shield, 
      title: t('about.stats.ethics.title'), 
      desc: t('about.stats.ethics.desc')
    }
  ];

  return (
    <section id="about" style={{ padding: 'clamp(3rem, 8vw, 8rem) 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '1rem' }}>[{t('about.tag')}]</h2>
          <h3 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>{t('about.title')}</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.8' }}>
            {t('about.desc')}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(auto-fit, minmax(280px, 1fr))' : window.innerWidth > 480 ? 'repeat(2, 1fr)' : '1fr', 
          gap: 'clamp(1.5rem, 3vw, 2rem)',
          marginTop: 'clamp(2rem, 5vw, 4rem)'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
              style={{
                background: 'var(--card-bg)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                <stat.icon size={window.innerWidth < 480 ? 24 : 32} strokeWidth={1.5} />
              </div>
              <h4 className="mono" style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>{stat.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>{stat.desc}</p>
              
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle at top right, rgba(0, 242, 255, 0.05) 0%, transparent 70%)',
                zIndex: 0
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
