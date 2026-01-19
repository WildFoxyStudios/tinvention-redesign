import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Microscope, Award } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const Methodology: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="method" style={{ padding: 'clamp(3rem, 8vw, 8rem) 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: 'clamp(2rem, 4vw, 5rem)', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '1rem' }}>[{t('methodology.tag')}]</h2>
            <h3 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', marginBottom: '1.5rem' }}>{t('methodology.title')}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', marginBottom: '2rem', lineHeight: '1.8' }}>
              {t('methodology.training.desc')}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
                <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}><GraduationCap size={window.innerWidth < 480 ? 24 : 32} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="mono" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Politecnico di Milano</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t('methodology.training.partners')}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
                <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}><Microscope size={window.innerWidth < 480 ? 24 : 32} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="mono" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>CEFRIEL</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>ICT Applied Research Center of Excellence.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
                <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}><Award size={window.innerWidth < 480 ? 24 : 32} strokeWidth={1.5} /></div>
                <div>
                  <h4 className="mono" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{t('about.stats.ethics.title')}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t('about.stats.ethics.desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ 
              background: 'var(--card-bg)', 
              padding: 'clamp(1.5rem, 4vw, 3rem)', 
              borderRadius: '16px', 
              border: '1px solid var(--border-color)',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden'
            }}
          >
            {/* Background Accent */}
            <div style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            }} />

            <div className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>// ACADEMY_CORE_MODULES.sh</div>
            
            <div style={{ display: 'grid', gap: '1rem' }}>
              {(t('careers.questions') ? [
                { id: '01', title: 'High-Level Engineering', desc: 'Java, Parallelism & Distribution' },
                { id: '02', title: 'Data Architecture', desc: 'Kafka, Spark & Big Data Ecosystems' },
                { id: '03', title: 'Cloud-Native DevOps', desc: 'CI/CD, Kubernetes & Secure Pipelines' },
                { id: '04', title: 'Professional Ethics', desc: 'Software Ethics & Engineering Culture' }
              ] : []).map((module, i) => (
                <motion.div 
                  key={module.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    padding: '1rem', 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '8px', 
                    transition: 'all 0.3s ease' 
                  }}
                  className="glow-on-hover"
                >
                  <span className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.75rem', opacity: 0.7, flexShrink: 0 }}>{module.id}</span>
                  <div>
                    <h5 className="mono" style={{ fontSize: '0.9rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{module.title}</h5>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{module.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.6 }}>
               <div style={{ flexGrow: 1, height: '1px', background: 'var(--border-color)' }} />
               <span className="mono" style={{ fontSize: '0.6rem' }}>END_OF_CURRICULUM</span>
               <div style={{ flexGrow: 1, height: '1px', background: 'var(--border-color)' }} />
            </div>
          </motion.div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #method .container > div { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}} />
    </section>
  );
};

export default Methodology;
