import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, Factory, 
  Building2, Tv, Zap, Recycle, ShoppingCart, 
  Car, Settings2, ShieldCheck 
} from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const BusinessDomains: React.FC = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const iconMap: Record<string, any> = {
    banking: Landmark,
    insurance: Building2,
    security: ShieldCheck,
    industrial: Factory,
    financial: Landmark,
    public: Building2,
    media: Tv,
    energy: Zap,
    debt: Recycle,
    ecommerce: ShoppingCart,
    automotive: Car,
    sales: Settings2
  };

  const domainItems = t('domains.items') as { id: string, name: string, desc: string }[];

  return (
    <section id="domains" style={{ padding: '8rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="mono" style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginBottom: '1rem' }}>[{t('domains.tag')}]</h2>
          <h3 style={{ fontSize: '2.5rem' }}>{t('domains.title')}</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '800px', lineHeight: '1.6' }}>
            {t('domains.desc')}
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '1.2rem' 
        }}>
          {domainItems.map((domain, idx) => {
            const Icon = iconMap[domain.id] || Building2;
            const isActive = activeId === domain.id;

            return (
              <div key={domain.id} style={{ display: 'contents' }}>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setActiveId(isActive ? null : domain.id)}
                  whileHover={{ 
                    borderColor: 'var(--accent-primary)', 
                    background: 'rgba(0, 242, 255, 0.02)',
                    y: -2 
                  }}
                  style={{ 
                    padding: '2rem 1.5rem', 
                    background: isActive ? 'rgba(0, 242, 255, 0.05)' : 'var(--card-bg)', 
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-color)', 
                    borderRadius: '8px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="active-glow"
                      style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        height: '2px', 
                        background: 'var(--accent-primary)' 
                      }} 
                    />
                  )}
                  <div style={{ 
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)', 
                    marginBottom: '1rem',
                    transition: 'color 0.3s ease'
                  }}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="mono" style={{ 
                    fontSize: '0.9rem', 
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'color 0.3s ease'
                  }}>{domain.name}</h4>
                </motion.div>

                {/* Mobile/Inline Reveal Logic could go here, but for premium feel let's use a Global detail panel below */}
              </div>
            );
          })}
        </div>

        {/* Global Detail Panel */}
        <div style={{ marginTop: '2rem', minHeight: '120px' }}>
          <AnimatePresence mode="wait">
            {activeId && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ 
                  background: 'rgba(0, 242, 255, 0.02)', 
                  border: '1px solid var(--border-color)', 
                  borderLeft: '4px solid var(--accent-primary)',
                  padding: '2rem 3rem', 
                  borderRadius: '8px'
                }}
              >
                <div className="mono" style={{ color: 'var(--accent-primary)', fontSize: '0.7rem', marginBottom: '0.5rem', opacity: 0.6 }}>
                  // DOMAIN_SPECIFIC_CAPABILITIES:: {activeId.toUpperCase()}
                </div>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                  {domainItems.find(d => d.id === activeId)?.desc}
                </p>
              </motion.div>
            )}
            {!activeId && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                style={{ textAlign: 'center', padding: '2rem', border: '1px dashed var(--border-color)', borderRadius: '8px' }}
              >
                <span className="mono" style={{ fontSize: '0.8rem' }}>SELECT_A_DOMAIN_TO_VIEW_DETAILS</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BusinessDomains;
