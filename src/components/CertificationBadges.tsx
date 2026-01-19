import React from 'react';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

const CertificationBadges: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '3rem', 
      justifyContent: 'center', 
      padding: '4rem 0',
      borderTop: '1px solid var(--border-color)',
      background: 'rgba(255,255,255,0.01)'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {[
          { icon: ShieldCheck, label: 'ISO_9001:2015', value: 'REG_NUM: 22316 - A' },
          { icon: Award, label: 'STRATEGIC_PARTNER', value: 'CEFRIEL_CERTIFIED' },
          { icon: CheckCircle, label: 'QUALITY_ASSURANCE', value: 'ENTERPRISE_READY' }
        ].map((badge, i) => (
          <div key={i} className="glow-on-hover" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.5rem', 
            padding: '1.5rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            opacity: 0.8
          }}>
            <div style={{ 
              padding: '0.75rem', 
              background: 'rgba(0, 242, 255, 0.1)', 
              borderRadius: '50%',
              color: 'var(--accent-primary)'
            }}>
              <badge.icon size={24} />
            </div>
            <div>
              <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', opacity: 0.8 }}>{badge.label}</div>
              <div className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{badge.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationBadges;
