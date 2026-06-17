'use client';

import { motion } from 'framer-motion';
import { HeartPulse, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-charcoal border-t border-rich-charcoal/30 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-luxury-black" />
              </div>
              <span className="text-2xl font-serif font-bold">
                Heartbeat<span className="text-premium-gold">Hotel</span>
              </span>
            </a>
            <p className="text-ivory/60 mb-8 leading-relaxed max-w-md">
              Experience the pinnacle of luxury living. Where every detail is crafted
              for your comfort and enjoyment.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-rich-charcoal rounded-full flex items-center justify-center text-ivory/60 hover:bg-premium-gold hover:text-luxury-black transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-premium-gold">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Rooms', 'Amenities', 'Gallery', 'Location'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-ivory/60 hover:text-premium-gold transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-premium-gold">Contact</h4>
            <ul className="space-y-3 text-ivory/60">
              <li>+1 234 567 890</li>
              <li>info@heartbeathotel.com</li>
              <li>123 Luxury Avenue</li>
              <li>Premium City, PC 12345</li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-rich-charcoal/30 text-center text-ivory/40 text-sm">
          <p>© {new Date().getFullYear()} Heartbeat Hotel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
