'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center md:items-start justify-center overflow-hidden pt-32 md:pt-40 lg:pt-48">
      <div className="absolute inset-0">
        {/* Layer 1: Hotel Image Background */}
        <img
          src="/images/1.png"
          alt="Heartbeat Hotel"
          className="absolute inset-0 w-full h-full object-cover object-[50%_10%] md:object-[50%_15%] lg:object-[50%_20%] xl:object-[50%_20%]"
        />
        {/* Layer 2: Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/70 to-luxury-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-premium-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Experience Premium Living
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight"
        >
          Welcome to <span className="text-gradient-gold">Heartbeat Hotel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-ivory/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Where luxury meets comfort. Experience exceptional hospitality, premium amenities,
          and a lifestyle that defines modern elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="tel:+1234567890"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-gold text-luxury-black rounded-full font-semibold flex items-center gap-3 hover:shadow-gold-glow transition-all duration-300"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Call Now
          </motion.a>
          <motion.a
            href="https://wa.me/1234567890"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 border border-premium-gold/50 text-ivory rounded-full font-semibold flex items-center gap-3 hover:bg-premium-gold/10 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            WhatsApp Us
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-premium-gold/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
