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
    <section id="about" style={{ padding: '8rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginBottom: '1rem' }}>[{t('about.tag')}]</h2>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{t('about.title')}</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {t('about.desc')}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginTop: '4rem'
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
                padding: '2.5rem',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="mono" style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{stat.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{stat.desc}</p>
              
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
