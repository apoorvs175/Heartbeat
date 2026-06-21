'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '8279998458',
      href: 'tel:8279998458',
      buttonText: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '8279998458',
      href: 'https://wa.me/8279998458',
      buttonText: 'Chat Now'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Knowledge Park-3, Greater Noida',
      href: 'https://maps.google.com',
      buttonText: 'View Map'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: '24 Hours, 7 Days a Week',
      href: '#',
      buttonText: 'Always Open'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-ivory/60 max-w-2xl mx-auto">
            Ready to experience luxury living? Contact us today and let us create your perfect stay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={index}
                href={card.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-deep-charcoal rounded-3xl border border-rich-charcoal hover:border-premium-gold/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-gold-glow transition-all duration-300">
                  <Icon className="w-8 h-8 text-luxury-black" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-center mb-3">{card.title}</h3>
                <p className="text-ivory/70 text-center text-sm mb-6">{card.info}</p>
                <span className="block w-full text-center py-3 border border-premium-gold/30 rounded-full text-premium-gold hover:bg-premium-gold hover:text-luxury-black transition-all duration-300 font-medium text-sm">
                  {card.buttonText}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
