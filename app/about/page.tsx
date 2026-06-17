'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import SectionReveal from '@/components/SectionReveal';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, Smile, Heart, Home, Users, Award, Eye, Target } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '100%', label: 'Secure Environment', icon: Shield },
    { number: '24/7', label: 'Premium Support', icon: Clock },
    { number: '5+', label: 'Years of Experience', icon: Award },
    { number: '1000+', label: 'Happy Guests', icon: Smile }
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
              <p className="text-premium-gold text-sm tracking-[0.3em] uppercase mb-6">About Us</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Redefining <span className="text-gradient-gold">Luxury Living</span>
              </h1>
              <p className="text-xl text-ivory/70 max-w-3xl mx-auto">
                Discover the story behind HeartBeat Hotel and our commitment to exceptional hospitality
              </p>
            </motion.div>
          </div>
        </section>
      </SectionReveal>

      {/* Story Section */}
      <SectionReveal>
        <section className="py-20 md:py-32 bg-deep-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Our Story</h2>
                <p className="text-ivory/70 text-lg mb-6 leading-relaxed">
                  HeartBeat Hotel was founded with a vision to create a sanctuary where luxury meets comfort, and where every guest feels at home. Since our inception, we have been committed to providing exceptional hospitality experiences that leave lasting memories.
                </p>
                <p className="text-ivory/60 mb-8 leading-relaxed">
                  Our journey began with a simple idea: to create a place where travelers, students, and professionals could experience world-class amenities, comfort, and security all in one location. Today, we stand as a premier destination in Greater Noida, known for our unwavering dedication to excellence.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-luxury aspect-square">
                  <img
                    src="/images/1.png"
                    alt="HeartBeat Hotel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Vision & Mission */}
      <SectionReveal>
        <section className="py-20 md:py-32 bg-rich-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-deep-charcoal p-8 md:p-12 rounded-3xl border border-premium-gold/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Eye className="w-7 h-7 text-luxury-black" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Our Vision</h3>
                </div>
                <p className="text-ivory/70 leading-relaxed">
                  To be the most trusted and preferred choice for premium accommodation in Greater Noida, setting new standards of hospitality, comfort, and luxury.
                </p>
              </div>
              <div className="bg-deep-charcoal p-8 md:p-12 rounded-3xl border border-premium-gold/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Target className="w-7 h-7 text-luxury-black" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
                </div>
                <p className="text-ivory/70 leading-relaxed">
                  To provide an unparalleled living experience that combines comfort, security, luxury, and convenience, ensuring every guest's stay is memorable and comfortable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Stats Section */}
      <SectionReveal>
        <section className="py-20 md:py-32 bg-deep-charcoal">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose HeartBeat Hotel</h2>
              <p className="text-ivory/70 text-lg max-w-2xl mx-auto">
                Discover what makes us the premier destination for luxury accommodation in Greater Noida
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-rich-charcoal p-8 rounded-3xl border border-rich-charcoal text-center"
                  >
                    <Icon className="w-12 h-12 text-premium-gold mx-auto mb-4" />
                    <div className="text-4xl font-serif font-bold text-premium-gold mb-2">{stat.number}</div>
                    <div className="text-sm text-ivory/60">{stat.label}</div>
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

export default AboutPage;