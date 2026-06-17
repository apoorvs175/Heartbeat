'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Sparkles, Clock, Smile } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '100%', label: 'Secure Environment', icon: Shield },
    { number: '24/7', label: 'Premium Support', icon: Clock },
    { number: '★★★★★', label: 'Guest Rating', icon: Sparkles },
    { number: '100%', label: 'Satisfaction', icon: Smile }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Redefining <span className="text-gradient-gold">Luxury Living</span>
            </h2>
            <p className="text-ivory/70 text-lg mb-8 leading-relaxed">
              At Heartbeat Hotel, we believe that luxury is not just about opulence—it's about
              creating an experience that nourishes the soul, comforts the mind, and elevates
              everyday living to extraordinary heights.
            </p>
            <p className="text-ivory/60 mb-10 leading-relaxed">
              Our commitment to excellence is reflected in every detail, from our meticulously
              designed spaces to our world-class hospitality. We don't just provide accommodation;
              we create memories.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="p-6 bg-rich-charcoal/50 rounded-2xl border border-rich-charcoal"
                  >
                    <Icon className="w-10 h-10 text-premium-gold mb-4" />
                    <div className="text-3xl font-serif font-bold text-premium-gold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-ivory/60">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-luxury">
              <img
                src="/images/Ground _Image.jpeg"
                alt="Luxury Hotel Interior"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
