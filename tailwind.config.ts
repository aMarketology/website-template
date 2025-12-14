import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Wedding Color Palette
        // Blush & Rose Tones
        blush: '#faf0f0',             // Soft blush background
        'blush-light': '#fef9f9',     // Lightest blush
        rose: '#e6b5b8',              // Dusty rose
        'rose-light': '#f5e6e7',      // Light rose
        'rose-accent': '#d4888c',     // Deeper rose accent
        'rose-dark': '#b36a6f',       // Dark rose
        
        // Sage & Green Accents
        sage: '#a7b5a6',              // Soft sage green
        'sage-light': '#dfe5de',      // Light sage
        'sage-dark': '#7a8e79',       // Deep sage
        eucalyptus: '#94a896',        // Eucalyptus green
        
        // Elegant Neutrals
        ivory: '#fffef7',             // Warm ivory
        cream: '#faf7f2',             // Cream
        champagne: '#f7e7ce',         // Champagne gold
        taupe: '#c9b8a8',             // Warm taupe
        
        // Grey Tones (Sophisticated)
        'grey-50': '#fafafa',
        'grey-100': '#f5f5f5',
        'grey-200': '#e8e8e8',
        'grey-300': '#d4d4d4',
        'grey-400': '#a3a3a3',
        'grey-500': '#737373',
        'grey-600': '#525252',
        'grey-700': '#404040',
        'grey-800': '#262626',
        'grey-900': '#171717',
        
        // Gold Accents
        gold: '#d4af37',              // Classic gold
        'gold-light': '#ead9a9',      // Light gold
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
