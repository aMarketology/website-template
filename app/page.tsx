'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      {/* === HERO SECTION === */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blush-light via-ivory to-cream">
        {/* Elegant Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-sage/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-champagne/20 rounded-full blur-3xl" />
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-accent/20 to-transparent" />
          <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 text-center">
          
          {/* Save the Date Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-rose-accent/40 bg-white/90 backdrop-blur-md shadow-xl">
              <svg className="w-5 h-5 text-rose-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-grey-700 uppercase tracking-[0.2em]">Save the Date</span>
            </div>
          </motion.div>

          {/* Names with Script Font */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8 mb-16"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-script text-grey-800 leading-none">
              Maggie
            </h1>
            <div className="flex items-center justify-center gap-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-accent to-transparent"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-rose-accent/30 flex items-center justify-center">
                  <span className="text-2xl text-rose-accent">♥</span>
                </div>
              </div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-rose-accent to-transparent"></div>
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-script text-grey-800 leading-none">
              Sam
            </h1>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 mb-14"
          >
            <p className="text-3xl md:text-4xl text-grey-700 font-serif font-light italic leading-tight">
              are getting married
            </p>
            <div className="inline-block px-8 py-3 bg-white/80 rounded-lg border border-rose/20 shadow-lg">
              <p className="text-xl md:text-2xl text-grey-600 font-medium">
                Date Coming Soon
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link
              href="/rsvp"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-rose-accent to-rose-dark rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-rose-accent/50 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <span className="text-lg">RSVP</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/our-story"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/90 border-2 border-rose-accent/40 rounded-full font-semibold text-grey-700 hover:bg-white hover:border-rose-accent backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-105"
            >
              <span className="text-lg">Our Story</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* === WEDDING DETAILS SECTION === */}
      <section className="relative py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-rose-accent/40"></div>
                <span className="text-sm font-semibold text-rose-accent uppercase tracking-[0.2em]">The Celebration</span>
                <div className="w-12 h-px bg-rose-accent/40"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-grey-800 mb-6 leading-tight">
              Join Us For
              <br />
              Our Special Day
            </h2>
            <p className="text-xl text-grey-600 font-light max-w-2xl mx-auto">
              We can't wait to celebrate with family and friends
            </p>
          </motion.div>

          {/* Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Ceremony Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-3xl bg-gradient-to-br from-blush via-rose-light/30 to-white border-2 border-rose-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-accent/5 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white border-2 border-rose-accent/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-rose-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-grey-800 mb-6 font-medium">The Ceremony</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-grey-500 uppercase tracking-wider mb-2">Date & Time</p>
                    <p className="text-xl text-grey-700 font-medium">Coming Soon</p>
                  </div>
                  <div className="w-16 h-px bg-rose-accent/20 mx-auto my-4"></div>
                  <div>
                    <p className="text-sm text-grey-500 uppercase tracking-wider mb-2">Location</p>
                    <p className="text-xl text-grey-700 font-medium">To Be Announced</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reception Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-3xl bg-gradient-to-br from-sage-light via-eucalyptus/20 to-white border-2 border-sage/30 shadow-xl hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white border-2 border-sage/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-grey-800 mb-6 font-medium">The Reception</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-grey-500 uppercase tracking-wider mb-2">Date & Time</p>
                    <p className="text-xl text-grey-700 font-medium">Coming Soon</p>
                  </div>
                  <div className="w-16 h-px bg-sage/30 mx-auto my-4"></div>
                  <div>
                    <p className="text-sm text-grey-500 uppercase tracking-wider mb-2">Location</p>
                    <p className="text-xl text-grey-700 font-medium">To Be Announced</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === PHOTO SECTION === */}
      <section className="relative py-28 bg-gradient-to-b from-cream via-blush-light to-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gold/40"></div>
                <span className="text-sm font-semibold text-gold uppercase tracking-[0.2em]">Memories</span>
                <div className="w-12 h-px bg-gold/40"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-grey-800 mb-6 leading-tight">
              Our Journey Together
            </h2>
            <p className="text-xl text-grey-600 font-light italic max-w-2xl mx-auto">
              Every love story is beautiful, but ours is our favorite
            </p>
          </motion.div>

          {/* Photo Placeholder Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] rounded-2xl bg-gradient-to-br from-rose-light/40 via-champagne/30 to-sage-light/40 border-2 border-white shadow-2xl overflow-hidden hover:scale-105 transition-all duration-500"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold/30 rounded-br-2xl"></div>
                
                <div className="w-full h-full flex items-center justify-center text-grey-400 group-hover:text-grey-600 transition-colors backdrop-blur-sm">
                  <div className="text-center">
                    <svg className="w-20 h-20 mx-auto mb-4 opacity-40 group-hover:opacity-60 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-base font-serif text-grey-500">Photo {i}</p>
                    <p className="text-xs text-grey-400 mt-1">Add your memories here</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-rose-accent/40 rounded-full font-semibold text-grey-700 hover:bg-rose-light/30 hover:border-rose-accent transition-all duration-300 shadow-xl hover:scale-105"
            >
              <span className="text-lg">View Full Gallery</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className="relative py-32 bg-gradient-to-b from-white via-blush-light to-rose-light/40 overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-rose-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-sage/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-champagne/20 rounded-full blur-3xl" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-rose-accent/20 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-sage/20 to-transparent"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative Top */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-rose-accent/40"></div>
                <svg className="w-8 h-8 text-rose-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <div className="w-16 h-px bg-rose-accent/40"></div>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-grey-800 mb-8 leading-tight">
              We Can't Wait to
              <br />
              <span className="font-script text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-rose-accent via-rose-dark to-sage-dark bg-clip-text text-transparent">
                Celebrate With You
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-grey-600 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Your presence means the world to us. Please join us as we begin our new chapter together and create memories that will last a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/rsvp"
                className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-rose-accent to-rose-dark rounded-full font-bold text-xl text-white hover:shadow-2xl hover:shadow-rose-accent/60 transition-all duration-300 shadow-xl hover:scale-110"
              >
                <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                RSVP Now
              </Link>
              
              <Link
                href="/registry"
                className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-white/90 border-2 border-sage/40 rounded-full font-bold text-xl text-grey-700 hover:bg-sage-light/30 hover:border-sage backdrop-blur-md transition-all duration-300 shadow-xl hover:scale-110"
              >
                <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                View Registry
              </Link>
            </div>

            {/* Wedding Website Credit */}
            <div className="pt-8 border-t border-rose-accent/10">
              <p className="text-grey-500 font-light italic">
                Maggie & Sam's Wedding • 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
