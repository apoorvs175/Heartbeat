'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, HeartPulse, Phone, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Location', href: '/location' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism border-b border-rich-charcoal/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center group-hover:shadow-gold-glow transition-all duration-300">
            <HeartPulse className="w-6 h-6 text-luxury-black" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-wide">
            Heartbeat<span className="text-premium-gold">Hotel</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <NavLinks navItems={navItems} />
          <div className="flex gap-4">
            <a href="tel:8279998458" className="flex items-center gap-2 px-5 py-2 border border-premium-gold/30 rounded-full hover:bg-premium-gold hover:text-luxury-black transition-all duration-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call</span>
            </a>
            <a href="https://wa.me/918279998458" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 bg-gradient-gold text-luxury-black rounded-full hover:shadow-gold-glow transition-all duration-300">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-ivory">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glassmorphism border-t border-rich-charcoal/30"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            <NavLinks navItems={navItems} mobile onClick={() => setIsOpen(false)} />
            <div className="flex flex-col gap-4 pt-4 border-t border-rich-charcoal/30">
              <a href="tel:8279998458" className="flex items-center gap-2 px-5 py-3 border border-premium-gold/30 rounded-full hover:bg-premium-gold hover:text-luxury-black transition-all duration-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Now</span>
              </a>
              <a href="https://wa.me/918279998458" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-gradient-gold text-luxury-black rounded-full hover:shadow-gold-glow transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLinks = ({ navItems, mobile, onClick }: { navItems: any[]; mobile?: boolean; onClick?: () => void }) => (
  <nav className={mobile ? 'flex flex-col gap-4' : 'flex gap-8'}>
    {navItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        onClick={onClick}
        className="text-sm tracking-wide text-ivory/80 hover:text-premium-gold transition-colors duration-300"
      >
        {item.name}
      </a>
    ))}
  </nav>
);

export default Navbar;
