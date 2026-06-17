'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const galleryImages = [
    { src: '/images/Hall_Area.jpeg', category: 'Exterior', title: 'Hotel Building' },
    { src: '/images/Corridore_Image.jpeg', category: 'Reception', title: 'Reception Area' },
    { src: '/images/Room_Image.jpeg', category: 'Rooms', title: 'Premium Room' },
    { src: '/images/Ground _Image.jpeg', category: 'Amenities', title: 'Common Area' },
    { src: '/images/StudioRoom_Image.jpeg', category: 'Rooms', title: 'Deluxe Room' },
    { src: '/images/1.png', category: 'Exterior', title: 'Hotel Front' },
    { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop', category: 'Lobby', title: 'Luxury Lobby' },
    { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop', category: 'Rooms', title: 'Executive Suite' },
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop', category: 'Rooms', title: 'Cozy Studio' }
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
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">Gallery</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Our <span className="text-gradient-gold">Gallery</span>
              </h1>
              <p className="text-xl text-ivory/70 max-w-3xl mx-auto">
                Explore our luxury property through stunning visuals
              </p>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      {/* Gallery Grid */}
      <SectionReveal>
        <section className="py-20 md:py-32 bg-deep-charcoal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/90 via-rich-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-premium-gold text-sm uppercase tracking-wider mb-2">{image.category}</p>
                    <h3 className="text-xl font-serif font-bold">{image.title}</h3>
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

export default GalleryPage;