'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const whyChoose = [
    { icon: MapPin, title: 'Prime Location', description: 'Perfectly located in Knowledge Park-3' },
    { icon: Star, title: 'Luxury Stay', description: 'Premium rooms with world-class amenities' },
    { icon: CheckCircle, title: '24/7 Support', description: 'Round-the-clock assistance available' }
  ];

  const roomsPreview = [
    { id: 1, name: 'Basic Room', price: '₹1,500 – ₹2,500', features: ['Comfortable Queen Size Bed', 'Free High-Speed WiFi', 'Air Conditioning', 'Attached Bathroom', 'Daily Housekeeping'], image: '/images/Room_Image.jpeg' },
    { id: 2, name: 'Premium Room', price: '₹2,000 – ₹3,500', features: ['Spacious Premium Bed', 'Free High-Speed WiFi', 'Air Conditioning', 'Smart TV', 'Complimentary Breakfast', 'Attached Luxury Bathroom'], image: '/images/StudioRoom_Image.jpeg' },
    { id: 3, name: 'Super Deluxe Room', price: '₹3,000 – ₹5,000', features: ['Most Comfortable Luxury Bed', 'Free High-Speed WiFi', 'Air Conditioning', 'Smart TV & Entertainment Setup', 'Complimentary Breakfast', 'Premium Interior & Seating Area', 'Luxury Attached Bathroom', 'Room Service Available'], image: '/images/Hall_Area.jpeg' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Why Choose Section */}
      <SectionReveal>
        <section id="why-choose" className="py-20 md:py-28 bg-deep-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                The <span className="text-gradient-gold">Heartbeat</span> Difference
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-rich-charcoal p-10 rounded-3xl border border-rich-charcoal text-center group"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-gold/30 transition-all duration-300">
                      <Icon className="w-10 h-10 text-premium-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                    <p className="text-ivory/60">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a
                href="/rooms"
                className="px-8 py-4 bg-gradient-gold text-luxury-black rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-gold-glow transition-all duration-300"
              >
                View Rooms
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/918279998458"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-premium-gold/50 text-ivory rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-premium-gold/10 transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Rooms Preview */}
      <SectionReveal>
        <section id="rooms-preview" className="py-20 md:py-28 bg-rich-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Our Rooms</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Premium <span className="text-gradient-gold">Accommodations</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {roomsPreview.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-deep-charcoal rounded-3xl overflow-hidden border border-rich-charcoal group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                    <p className="text-2xl font-serif font-bold text-premium-gold mb-4">{room.price} / Day</p>
                    <div className="space-y-2 mb-8">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-ivory/70 text-sm">
                          <CheckCircle size={16} className="text-premium-gold" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="/rooms"
                      className="w-full py-3 bg-gradient-gold text-luxury-black rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-gold-glow transition-all duration-300"
                    >
                      View Details
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Amenities Preview */}
      <SectionReveal>
        <section id="amenities-preview" className="py-20 md:py-28 bg-deep-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Amenities</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                World-Class <span className="text-gradient-gold">Facilities</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {['Free WiFi', 'AC Rooms', 'Smart TV', '24/7 Security', 'Parking', 'Housekeeping', 'Room Service', 'Power Backup'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-rich-charcoal p-6 rounded-2xl border border-rich-charcoal text-center"
                >
                  <p className="text-ivory/80 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="/amenities"
                className="inline-flex items-center gap-2 px-8 py-4 border border-premium-gold/50 text-ivory rounded-full font-semibold hover:bg-premium-gold/10 transition-all duration-300"
              >
                View All Amenities
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Gallery Preview */}
      <SectionReveal>
        <section id="gallery-preview" className="py-20 md:py-28 bg-rich-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Gallery</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Explore Our <span className="text-gradient-gold">Property</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { src: '/images/Ground _Image.jpeg' },
                { src: '/images/Corridore_Image.jpeg' },
                { src: '/images/1.png' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-3xl aspect-square group"
                >
                  <img
                    src={item.src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 border border-premium-gold/50 text-ivory rounded-full font-semibold hover:bg-premium-gold/10 transition-all duration-300"
              >
                Explore Full Gallery
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Location Preview */}
      <SectionReveal>
        <section id="location-preview" className="py-20 md:py-28 bg-deep-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Location</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Prime <span className="text-gradient-gold">Location</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-rich-charcoal p-10 rounded-3xl border border-rich-charcoal">
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="w-10 h-10 text-premium-gold shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">HeartBeat Hotel</h3>
                    <p className="text-ivory/70 leading-relaxed">
                      Plot No. B-3,<br />
                      Near GL Bajaj Road,<br />
                      Near Expo India,<br />
                      Knowledge Park-3,<br />
                      Greater Noida,<br />
                      Uttar Pradesh – 201310
                    </p>
                  </div>
                </div>
                <a
                  href="/location"
                  className="w-full py-4 bg-gradient-gold text-luxury-black rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-gold-glow transition-all duration-300"
                >
                  Get Directions
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="bg-rich-charcoal rounded-3xl overflow-hidden border border-rich-charcoal aspect-square">
                <img
                  src="/images/Ground _Image.jpeg"
                  alt="Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Contact Preview */}
      <SectionReveal>
        <section id="contact-preview" className="py-20 md:py-28 bg-rich-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Contact Us</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Get In <span className="text-gradient-gold">Touch</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-deep-charcoal p-8 rounded-3xl border border-rich-charcoal text-center">
                <Phone className="w-12 h-12 text-premium-gold mx-auto mb-6" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-ivory/70 mb-4">8279998458</p>
                <a href="tel:8279998458" className="text-premium-gold hover:underline">Call Now</a>
              </div>
              <div className="bg-deep-charcoal p-8 rounded-3xl border border-rich-charcoal text-center">
                <MessageCircle className="w-12 h-12 text-premium-gold mx-auto mb-6" />
                <h3 className="text-lg font-semibold mb-2">WhatsApp Us</h3>
                <p className="text-ivory/70 mb-4">8279998458</p>
                <a href="https://wa.me/918279998458" target="_blank" rel="noopener noreferrer" className="text-premium-gold hover:underline">WhatsApp Now</a>
              </div>
              <div className="bg-deep-charcoal p-8 rounded-3xl border border-rich-charcoal text-center">
                <MapPin className="w-12 h-12 text-premium-gold mx-auto mb-6" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-ivory/70 mb-4">Greater Noida</p>
                <a href="/location" className="text-premium-gold hover:underline">View Location</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8279998458"
                className="px-8 py-4 bg-gradient-gold text-luxury-black rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-gold-glow transition-all duration-300"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/918279998458"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-premium-gold/50 text-ivory rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-premium-gold/10 transition-all duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

      <Footer />
      <FloatingButtons />
    </div>
  );
}