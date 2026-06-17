import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0A0A0A',
        'deep-charcoal': '#1A1A1A',
        'rich-charcoal': '#2A2A2A',
        'premium-gold': '#D4AF37',
        'soft-gold': '#E8C547',
        'ivory': '#FAF8F5',
        'warm-grey': '#F5F5F0',
        'text-grey': '#8A8A8A'
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E8C547 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)'
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0,0,0,0.3)',
        'gold-glow': '0 0 30px rgba(212,175,55,0.3)'
      }
    }
  },
  plugins: [],
};
export default config;
