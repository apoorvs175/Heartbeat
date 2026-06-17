'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Wifi,
  Shield,
  Car,
  Dumbbell,
  Coffee,
  WashingMachine,
  Bell,
  Briefcase,
  Monitor,
  Bath,
  Thermometer,
  Wind
} from 'lucide-react';

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const amenities = [
    { name: 'High-Speed WiFi', icon: Wifi },
    { name: '24/7 Security', icon: Shield },
    { name: 'Parking', icon: Car },
    { name: 'Fitness Center', icon: Dumbbell },
    { name: 'Café & Lounge', icon: Coffee },
    { name: 'Laundry Service', icon: WashingMachine },
    { name: 'Concierge', icon: Bell },
    { name: 'Valet Service', icon: Briefcase },
    { name: 'Smart TV', icon: Monitor },
    { name: 'Spa & Bath', icon: Bath },
    { name: 'AC & Heating', icon: Thermometer },
    { name: 'Ventilation', icon: Wind }
  ];

  return (
    <section id="amenities" className="py-24 md:py-32 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-4">
            Premium Facilities
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            World-Class <span className="text-gradient-gold">Amenities</span>
          </h2>
          <p className="text-ivory/60 max-w-2xl mx-auto">
            Every detail thoughtfully curated to enhance your stay and elevate your experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-8 bg-rich-charcoal/50 rounded-2xl border border-rich-charcoal hover:border-premium-gold/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-gold rounded-2xl flex items-center justify-center group-hover:shadow-gold-glow transition-all duration-300">
                  <Icon className="w-8 h-8 text-luxury-black" />
                </div>
                <h4 className="font-semibold text-ivory group-hover:text-premium-gold transition-colors duration-300">
                  {amenity.name}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
