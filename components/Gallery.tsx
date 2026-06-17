'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const images = [
    { src: '/images/Hall_Area.jpeg', col: 2, row: 1 },
    { src: '/images/Corridore_Image.jpeg', col: 1, row: 1 },
    { src: '/images/Ground _Image.jpeg', col: 1, row: 2 },
    { src: '/images/Room_Image.jpeg', col: 2, row: 1 },
    { src: '/images/StudioRoom_Image.jpeg', col: 1, row: 1 },
    { src: '/images/1.png', col: 1, row: 1 }
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Experience <span className="text-gradient-gold">Heartbeat Hotel</span>
          </h2>
          <p className="text-ivory/60 max-w-2xl mx-auto">
            A visual journey through our premium spaces and facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                image.col === 2 ? 'md:col-span-2' : ''
              } ${image.row === 2 ? 'md:row-span-2' : ''}`}
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
