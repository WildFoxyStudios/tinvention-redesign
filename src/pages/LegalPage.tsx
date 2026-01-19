import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { legalContent } from '../translations/legal';

const LegalPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const { title, lastUpdate, content } = legalContent[type || ''] || { 
    title: 'Legal', 
    lastUpdate: '', 
    content: <p>Seleziona una pagina dal footer per visualizzare il contenuto legale completo.</p> 
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '2rem', fontSize: '0.9rem' }} className="mono">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mono" style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Legal / {title}</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>{title}</h1>
          {lastUpdate && <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '3rem' }}>Ultimo aggiornamento: {lastUpdate}</div>}
          
          <div style={{ maxWidth: '900px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {content}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
