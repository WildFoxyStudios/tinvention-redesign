import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Facebook, Github, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 95% success rate simulation
    if (Math.random() > 0.05) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" style={{ padding: '8rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginBottom: '1rem' }}>[{t('contact.tag')}]</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t('contact.title')}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
              {t('contact.desc')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--accent-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Email</div>
                  <div style={{ fontSize: '1.1rem' }}>info@tinvention.net</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--accent-primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>HQ</div>
                  <div style={{ fontSize: '1.1rem' }}>Via Pacini 93, Milano</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--accent-primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Phone</div>
                  <div style={{ fontSize: '1.1rem' }}>+39 0362 1855530</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="https://www.linkedin.com/company/1274530/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-muted)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                  <Linkedin size={20} />
                </a>
                <a href="https://it-it.facebook.com/Tinvention-Ingegneria-Informatica--69227354093/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-muted)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                  <Facebook size={20} />
                </a>
                <a href="https://github.com/Tinvention/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.8rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-muted)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div style={{ 
            background: 'var(--card-bg)', 
            padding: '3rem', 
            borderRadius: '8px', 
            border: '1px solid var(--border-color)'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label className="mono" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem', marginLeft: '0.2rem' }}>{t('contact.labels.name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    style={{ width: '100%', background: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '0.75rem', borderRadius: '4px', color: 'var(--text-primary)' }} 
                  />
                </div>
                <div>
                  <label className="mono" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem', marginLeft: '0.2rem' }}>{t('contact.labels.email')}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    style={{ width: '100%', background: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '0.75rem', borderRadius: '4px', color: 'var(--text-primary)' }} 
                  />
                </div>
              </div>
              <div>
                <label className="mono" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem', marginLeft: '0.2rem' }}>{t('contact.labels.message')}</label>
                <textarea 
                  name="message"
                  rows={5} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  style={{ width: '100%', background: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '0.75rem', borderRadius: '4px', color: 'var(--text-primary)', resize: 'none' }}
                ></textarea>
              </div>
              <button 
                className="mono" 
                disabled={status === 'sending'}
                style={{ 
                  background: status === 'success' ? '#27c93f' : status === 'error' ? '#ff5f56' : 'var(--accent-primary)', 
                  color: '#000', 
                  padding: '1rem', 
                  borderRadius: '4px', 
                  fontWeight: 'bold',
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                  border: 'none'
                }}>
                {status === 'sending' ? (
                  <><Loader2 className="animate-spin" size={18} /> SENDING...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={18} /> SENT_SUCCESSFULLY</>
                ) : status === 'error' ? (
                  <><AlertCircle size={18} /> ERROR_OCCURRED</>
                ) : (
                  t('contact.labels.send')
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}} />
    </section>
  );
};

export default Contact;
