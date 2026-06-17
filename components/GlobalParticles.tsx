'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const GlobalParticles = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate particles client-side only
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
          className="absolute w-1 h-1 bg-premium-gold rounded-full"
          style={{ left: particle.left }}
        />
      ))}
    </div>
  );
};

export default GlobalParticles;
