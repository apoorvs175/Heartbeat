'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a
        href="tel:8279998458"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-luxury"
      >
        <Phone className="w-7 h-7 text-luxury-black" />
      </motion.a>
      
      <motion.a
        href="https://wa.me/918279998458"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ 
          y: [0, -5, 0],
          boxShadow: [
            '0 0 0 0 rgba(212, 175, 55, 0.7)',
            '0 0 0 15px rgba(212, 175, 55, 0)',
            '0 0 0 0 rgba(212, 175, 55, 0.7)'
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
