'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Wifi, Shield, Car, Coffee, Tv, Bath, Wind, Home, Bell } from 'lucide-react';

const AmenitiesPage = () => {
  const amenities = [
    { icon: Wifi, title: 'Free High-Speed WiFi', description: 'Unlimited high-speed internet access throughout the property' },
    { icon: Shield, title: '24/7 Security', description: 'Round-the-clock security with CCTV surveillance' },
    { icon: Car, title: 'Parking Facility', description: 'Secure and spacious parking available' },
    { icon: Coffee, title: 'Housekeeping', description: 'Daily housekeeping and room cleaning services' },
    { icon: Tv, title: 'Smart TV', description: 'LED Smart TV with premium entertainment channels' },
    { icon: Bath, title: 'Attached Bathrooms', description: 'Clean and well-maintained attached bathrooms' },
    { icon: Wind, title: 'Air Conditioning', description: 'Fully air-conditioned rooms for your comfort' },
    { icon: Home, title: 'Power Backup', description: '24/7 power backup for uninterrupted stay' },
    { icon: Bell, title: 'Room Service', description: 'On-demand room service available' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <SectionReveal>
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-rich-charcoal to-deep-charcoal">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Amenities</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Premium <span className="text-gradient-gold">Facilities</span>
              </h1>
              <p className="text-xl text-ivory/70 max-w-3xl mx-auto">
                Experience world-class amenities designed for your comfort and convenience
              </p>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      {/* Amenities Grid */}
      <SectionReveal>
        <section className="py-20 md:py-32 bg-deep-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-rich-charcoal p-10 rounded-3xl border border-rich-charcoal text-center group"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-gold/30 transition-all duration-300">
                      <Icon className="w-10 h-10 text-premium-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-4">{amenity.title}</h3>
                    <p className="text-ivory/60 leading-relaxed">{amenity.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AmenitiesPage;