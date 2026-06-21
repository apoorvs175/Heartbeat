'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Bed, Wifi, Tv, Bath, Shield, Car, Coffee } from 'lucide-react';

const RoomsPage = () => {
  const rooms = [
    {
      id: 1,
      name: 'Basic Room',
      description: 'Perfect for a comfortable stay',
      price: '₹1,500 – ₹2,500',
      features: ['Comfortable Queen Size Bed', 'Free High-Speed WiFi', 'Air Conditioning', 'Attached Bathroom', 'Daily Housekeeping'],
      image: '/images/Room_Image.jpeg'
    },
    {
      id: 2,
      name: 'Premium Room',
      description: 'Ideal for a premium stay experience',
      price: '₹2,000 – ₹3,500',
      features: ['Spacious Premium Bed', 'Free High-Speed WiFi', 'Air Conditioning', 'Smart TV', 'Complimentary Breakfast', 'Attached Luxury Bathroom'],
      image: '/images/StudioRoom_Image.jpeg'
    },
    {
      id: 3,
      name: 'Super Deluxe Room',
      description: 'Great for a luxurious experience',
      price: '₹3,000 – ₹5,000',
      features: ['Most Comfortable Luxury Bed', 'Free High-Speed WiFi', 'Air Conditioning', 'Smart TV & Entertainment Setup', 'Complimentary Breakfast', 'Premium Interior & Seating Area', 'Luxury Attached Bathroom', 'Room Service Available'],
      image: '/images/Hall_Area.jpeg'
    }
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
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Our Rooms</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Luxury <span className="text-gradient-gold">Accommodation</span>
              </h1>
              <p className="text-xl text-ivory/70 max-w-3xl mx-auto">
                Discover our premium rooms designed for comfort, luxury, and modern living
              </p>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      {/* Rooms Grid */}
      <SectionReveal>
        <section className="py-20 md:py-32 bg-deep-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {rooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-rich-charcoal rounded-3xl overflow-hidden border border-rich-charcoal group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-premium-gold text-sm tracking-wider font-semibold">Price Range</p>
                      <p className="text-3xl font-serif font-bold">{room.price} / Day</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-3">{room.name}</h3>
                    <p className="text-ivory/60 mb-6">{room.description}</p>
                    <div className="space-y-3 mb-8">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 text-premium-gold">
                            <Shield size={18} />
                          </div>
                          <span className="text-ivory/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        href="tel:8279998458"
                        className="w-full py-3 bg-gradient-gold text-luxury-black rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-gold-glow transition-all duration-300"
                      >
                        <Phone size={18} />
                        Book Now
                      </a>
                      <a
                        href="https://wa.me/918279998458"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 border border-premium-gold/50 text-ivory rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-premium-gold/10 transition-all duration-300"
                      >
                        <MessageCircle size={18} />
                        WhatsApp Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default RoomsPage;