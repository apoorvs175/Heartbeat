'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { MapPin, Car, Bus, GraduationCap, Building } from 'lucide-react';

const LocationPage = () => {
  const nearby = [
    { icon: GraduationCap, title: 'Educational Institutions', items: ['GL Bajaj Institute', 'Greater Noida University', 'Galgotias College'] },
    { icon: Building, title: 'Corporate Areas', items: ['Knowledge Park', 'Expo India', 'Corporate Parks'] },
    { icon: Bus, title: 'Transportation', items: ['Metro Station', 'Bus Stand', 'Easy Cabs'] }
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
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Location</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Prime <span className="text-gradient-gold">Location</span>
              </h1>
              <p className="text-xl text-ivory/70 max-w-3xl mx-auto">
                Perfectly located for students, professionals, and travelers in Greater Noida
              </p>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      {/* Address Section */}
      <SectionReveal>
        <section className="py-20 md:py-28 bg-deep-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-luxury-black" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Address</h2>
                </div>
                <div className="bg-rich-charcoal p-8 rounded-3xl border border-rich-charcoal mb-8">
                  <p className="text-xl mb-2 font-semibold">HeartBeat Hotel</p>
                  <p className="text-ivory/70 leading-relaxed">
                    Plot No. B-3,<br />
                    Near GL Bajaj Road,<br />
                    Near Expo India,<br />
                    Knowledge Park-3,<br />
                    Greater Noida,<br />
                    Uttar Pradesh – 201310
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-luxury-black rounded-full font-semibold hover:shadow-gold-glow transition-all duration-300"
                >
                  <Car size={20} />
                  Get Directions
                </a>
              </div>
              <div className="bg-rich-charcoal rounded-3xl overflow-hidden border border-rich-charcoal aspect-square">
                <img
                  src="/Image/1.png"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Nearby Section */}
      <SectionReveal>
        <section className="py-20 md:py-28 bg-rich-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Nearby Attractions</h2>
              <p className="text-ivory/70 text-lg max-w-2xl mx-auto">
                Everything you need is just moments away from our prime location
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {nearby.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-deep-charcoal p-8 rounded-3xl border border-rich-charcoal"
                  >
                    <Icon className="w-12 h-12 text-premium-gold mb-6" />
                    <h3 className="text-xl font-serif font-bold mb-6">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.items.map((listItem, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-ivory/70">
                          <span className="w-2 h-2 bg-premium-gold rounded-full"></span>
                          {listItem}
                        </li>
                      ))}
                    </ul>
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

export default LocationPage;