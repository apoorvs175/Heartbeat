'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, ShoppingBag, GraduationCap, Bus } from 'lucide-react';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: ShoppingBag, text: 'Nearby Shopping Centers' },
    { icon: GraduationCap, text: 'Educational Institutions' },
    { icon: Bus, text: 'Excellent Connectivity' },
    { icon: Navigation, text: 'Prime Location' }
  ];

  return (
    <section id="location" className="py-24 md:py-32 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-4">
              Location
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              In the <span className="text-gradient-gold">Heart of the City</span>
            </h2>
            <p className="text-ivory/70 text-lg mb-10 leading-relaxed">
              Strategically located in the most prestigious neighborhood, Heartbeat Hotel
              offers unparalleled access to the city's finest attractions, business districts,
              and cultural landmarks.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-premium-gold/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-premium-gold" />
                    </div>
                    <span className="text-ivory/80">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-luxury-black rounded-full font-semibold hover:shadow-gold-glow transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
            <div className="relative bg-rich-charcoal rounded-3xl p-8 border border-rich-charcoal h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-premium-gold mx-auto mb-4" />
                <p className="text-ivory/60">Interactive Map</p>
                <p className="text-sm text-ivory/40">123 Luxury Avenue, Premium City</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
