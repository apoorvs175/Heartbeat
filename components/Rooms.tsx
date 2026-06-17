'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BedDouble, Users, User, Check } from 'lucide-react';

const Rooms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const rooms = [
    {
      title: 'Executive Suite',
      icon: User,
      image: '/images/Room_Image.jpeg',
      features: ['King Size Bed', 'Private Balcony', 'Smart TV', 'Work Desk', 'Premium Toiletries', 'Room Service']
    },
    {
      title: 'Studio Room',
      icon: Users,
      image: '/images/StudioRoom_Image.jpeg',
      features: ['Cozy Layout', 'Premium Bed', 'Workstation', 'Coffee Machine', 'Mini Bar', 'Daily Housekeeping']
    },
    {
      title: 'Deluxe Twin',
      icon: BedDouble,
      image: '/images/Hall_Area.jpeg',
      features: ['Two Queen Beds', 'Spacious Living', 'Mini Bar', 'Workstation', 'Coffee Machine', 'Daily Housekeeping']
    }
  ];

  return (
    <section id="rooms" className="py-24 md:py-32 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Accommodations
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Luxury <span className="text-gradient-gold">Rooms & Suites</span>
          </h2>
          <p className="text-ivory/60 max-w-2xl mx-auto">
            Discover our meticulously designed spaces, where every detail is crafted
            for your comfort and enjoyment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => {
            const Icon = room.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-deep-charcoal rounded-3xl overflow-hidden border border-rich-charcoal hover:border-premium-gold/30 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Icon className="w-8 h-8 text-premium-gold mb-3" />
                    <h3 className="text-2xl font-serif font-bold">{room.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-ivory/70">
                        <Check className="w-5 h-5 text-premium-gold flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/1234567890"
                    className="mt-8 w-full block text-center py-3 border border-premium-gold/30 rounded-full text-premium-gold hover:bg-premium-gold hover:text-luxury-black transition-all duration-300 font-medium"
                  >
                    Enquire Now
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
