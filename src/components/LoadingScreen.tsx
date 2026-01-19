/**
 * @component LoadingScreen
 * @author Javier Echevarria
 * @description Premium splash screen with hardware-accelerated animations.
 * Uses Framer Motion's internal loop for silky-smooth progress tracking.
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [percent, setPercent] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const messages = [
    "INITIALIZING_QUANTUM_CORE",
    "LOADING_VISUAL_ASSETS",
    "CONFIGURING_NEURAL_INTERFACE",
    "ESTABLISHING_ENCRYPTED_LINK",
    "SYSTEM_READY"
  ];

  useEffect(() => {
    // Smoothly animate the percentage with easing
    const controls = animate(0, 100, {
      duration: 2.5,
      ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for a "thinking" feel
      onUpdate: (latest: number) => setPercent(Math.floor(latest))
    });

    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 500);

    return () => {
      controls.stop();
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: 'circle(0% at 50% 50%)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--bg-color)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Scanning Line */}
      <motion.div
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
          boxShadow: '0 0 20px var(--accent-primary)',
          opacity: 0.4,
          zIndex: 1
        }}
      />

      {/* Grid Pattern Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(var(--border-color) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.1,
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ marginBottom: '2.5rem', display: 'inline-block' }}
        >
          <img 
            src="/favicon.png" 
            alt="Logo" 
            style={{ 
              width: '80px', 
              height: '80px',
              filter: 'drop-shadow(0 0 15px var(--accent-primary))'
            }} 
          />
        </motion.div>

        <div className="mono" style={{ 
          color: 'var(--text-primary)', 
          fontSize: '0.9rem', 
          height: '1.5rem',
          fontWeight: 600,
          letterSpacing: '3px',
          textShadow: '0 0 10px rgba(var(--accent-primary-rgb), 0.3)'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={messageIndex}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
              transition={{ duration: 0.3 }}
            >
              {messages[messageIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ 
          width: '260px', 
          height: '4px', 
          background: 'var(--border-color)', 
          margin: '2.5rem auto 0',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.2, ease: "linear" }}
            style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
              boxShadow: '0 0 15px var(--accent-primary)'
            }}
          />
        </div>
        
        <div className="mono" style={{ 
          marginTop: '1.2rem', 
          fontSize: '0.8rem', 
          color: 'var(--accent-primary)',
          opacity: 0.9,
          fontWeight: 'bold'
        }}>
          {percent}%
        </div>
      </div>

      {/* Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(var(--accent-primary-rgb), 0.03) 0%, transparent 70%)',
        zIndex: -1
      }} />
    </motion.div>
  );
};

export default LoadingScreen;
