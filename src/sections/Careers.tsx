import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckCircle2, Star } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const Careers: React.FC = () => {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const { t } = useTranslation();

  const jobs = t('careers.jobs') as any[];
  const selectedJob = jobs.find(j => j.id === selectedJobId);

  return (
    <section id="careers" style={{ padding: '8rem 0', background: 'var(--card-bg)' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginBottom: '1rem' }}>[{t('careers.tag')}]</h2>
          <h3 style={{ fontSize: '2.5rem' }}>{t('careers.title')}</h3>
        </div>

        <div style={{ border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', background: 'var(--bg-color)' }}>
          {jobs.map((job, i) => (
            <motion.div 
              key={job.id} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                padding: '2rem', 
                borderBottom: i !== jobs.length - 1 ? '1px solid var(--border-color)' : 'none', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              className="job-row"
              onClick={() => setSelectedJobId(job.id)}
            >
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{job.title}</h4>
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }} className="mono">
                  <span style={{ color: 'var(--accent-primary)' }}>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <div style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="mono" style={{ fontSize: '0.75rem' }}>{t('careers.view_details')}</span>
                <ExternalLink size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Job Detail Overlay */}
        <AnimatePresence>
          {selectedJobId && selectedJob && (
            <div style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              zIndex: 1000, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '1.5rem'
            }}>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedJobId(null)}
                style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(12px)' }}
              />
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                style={{ 
                  width: '100%', 
                  maxWidth: '800px', 
                  background: 'var(--card-bg)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '16px', 
                  padding: '3rem',
                  position: 'relative',
                  maxHeight: '85vh',
                  overflowY: 'auto'
                }}
              >
                <button 
                  onClick={() => setSelectedJobId(null)}
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>

                <h4 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '1rem' }}>[STATUS: ACTIVE_POSTING]</h4>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', fontWeight: 'bold' }}>{selectedJob.title}</h3>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '3rem' }} className="mono">
                  {selectedJob.type} // {selectedJob.location}
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <h5 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.8 }}>{t('careers.labels.description')}</h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>{selectedJob.description}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem' }}>
                  <div>
                    <h5 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0.8 }}>{t('careers.labels.requirements')}</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {selectedJob.requirements.map((req: string, i: number) => (
                        <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
                          <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }} />
                          <span style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0.8 }}>{t('careers.labels.plus')}</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {selectedJob.plus.map((plus: string, i: number) => (
                        <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
                          <Star size={16} style={{ color: 'var(--accent-primary)', marginTop: '3px', flexShrink: 0, opacity: 0.6 }} />
                          <span style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{plus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <button 
                    className="mono apply-btn" 
                    onClick={() => window.location.href = `mailto:recruiting@tinvention.net?subject=${encodeURIComponent(selectedJob.title)}`}
                    style={{ 
                      background: 'var(--accent-primary)', 
                      color: 'var(--bg-color)', 
                      padding: '1.2rem', 
                      borderRadius: '8px', 
                      fontWeight: 'bold',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    {t('careers.apply')}
                  </button>
                  <button className="mono" onClick={() => setSelectedJobId(null)} style={{ 
                    border: '1px solid var(--border-color)', 
                    background: 'transparent',
                    color: 'var(--text-primary)', 
                    padding: '1.2rem', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}>
                    {t('careers.close')}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div style={{ marginBottom: '5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{t('careers.questions_title')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {(t('careers.questions') as string[]).map((q, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginTop: '4px' }}>{`0${i + 1}`}</span>
                  <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>{q}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ background: 'rgba(0, 242, 255, 0.03)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {t('careers.desc')}
            </p>
          </motion.div>
        </div>

        <div style={{ marginTop: '5rem', textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px dashed var(--border-color)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Don't see a role that fits? Send your CV and a cover letter to<br/>
            <motion.a 
              href="mailto:recruiting@tinvention.net" 
              whileHover={{ color: 'var(--accent-primary)' }}
              style={{ 
                color: 'var(--accent-primary)', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginTop: '1rem',
                display: 'inline-block'
              }}
            >
              recruiting@tinvention.net
            </motion.a>
          </p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .job-row:hover {
          background: rgba(0, 242, 255, 0.03) !important;
          transform: translateX(10px);
        }
        .apply-btn:hover {
          box-shadow: 0 0 25px rgba(0, 242, 255, 0.4);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .job-row { flex-direction: column; align-items: flex-start !important; gap: 1rem; }
          .job-row > div:last-child { align-self: flex-end; }
        }
      `}} />
    </section>
  );
};

export default Careers;
