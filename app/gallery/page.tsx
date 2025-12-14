'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Gallery() {
  const galleryImages = [
    { id: 1, title: 'Engagement Photos', category: 'Engagement' },
    { id: 2, title: 'The Proposal', category: 'Engagement' },
    { id: 3, title: 'Spring Adventures', category: 'Together' },
    { id: 4, title: 'Beach Getaway', category: 'Travel' },
    { id: 5, title: 'Family Gathering', category: 'Family' },
    { id: 6, title: 'Cozy Moments', category: 'Together' },
    { id: 7, title: 'Holiday Celebration', category: 'Together' },
    { id: 8, title: 'Summer Sunset', category: 'Travel' },
    { id: 9, title: 'Date Night', category: 'Together' },
    { id: 10, title: 'Winter Wonderland', category: 'Travel' },
    { id: 11, title: 'With Friends', category: 'Friends' },
    { id: 12, title: 'Special Moments', category: 'Together' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush-light via-ivory to-cream flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >\n            <div className=\"inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/30 bg-white/90 backdrop-blur-sm shadow-lg mb-8\">\n              <svg className=\"w-4 h-4 text-gold\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n                <path fillRule=\"evenodd\" d=\"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z\" clipRule=\"evenodd\" />\n              </svg>\n              <span className=\"text-sm font-semibold text-grey-700 uppercase tracking-[0.2em]\">Memories</span>\n            </div>\n            \n            <h1 className=\"text-6xl md:text-7xl font-serif text-grey-800 mb-6\">\n              Our Gallery\n            </h1>\n            <p className=\"text-2xl text-grey-600 font-light italic\">\n              Moments we treasure, memories we share\n            </p>\n          </motion.div>\n        </div>\n      </section>\n\n      {/* Gallery Grid */}\n      <section className=\"flex-1 py-16 px-4\">\n        <div className=\"max-w-7xl mx-auto\">\n          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">\n            {galleryImages.map((image, index) => (\n              <motion.div\n                key={image.id}\n                initial={{ opacity: 0, scale: 0.9 }}\n                whileInView={{ opacity: 1, scale: 1 }}\n                transition={{ duration: 0.5, delay: index * 0.05 }}\n                viewport={{ once: true }}\n                className=\"group relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-rose-light/40 via-champagne/30 to-sage-light/40 border-2 border-white hover:scale-105 transition-all duration-500\"\n              >\n                {/* Image placeholder */}\n                <div className=\"aspect-[4/5] w-full flex items-center justify-center backdrop-blur-sm\">\n                  <div className=\"text-center p-6\">\n                    <svg className=\"w-20 h-20 mx-auto mb-4 text-grey-400 opacity-40 group-hover:opacity-60 transition-opacity\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                      <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={1} d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\" />\n                    </svg>\n                    <p className=\"font-serif text-grey-600 text-lg\">{image.title}</p>\n                    <p className=\"text-sm text-grey-400 mt-1\">{image.category}</p>\n                  </div>\n                </div>\n                \n                {/* Overlay on hover */}\n                <div className=\"absolute inset-0 bg-gradient-to-t from-grey-900/80 via-grey-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6\">\n                  <div>\n                    <p className=\"text-white font-semibold text-xl\">{image.title}</p>\n                    <p className=\"text-grey-200 text-sm\">{image.category}</p>\n                  </div>\n                </div>\n\n                {/* Decorative Corner */}\n                <div className=\"absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity\"></div>\n              </motion.div>\n            ))}\n          </div>\n\n          {/* Photo Upload Note */}\n          <motion.div\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            transition={{ duration: 0.6 }}\n            viewport={{ once: true }}\n            className=\"mt-16 text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-rose-accent/20 shadow-lg max-w-2xl mx-auto\"\n          >\n            <svg className=\"w-12 h-12 mx-auto mb-4 text-rose-accent\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={1.5} d=\"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z\" />\n              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={1.5} d=\"M15 13a3 3 0 11-6 0 3 3 0 016 0z\" />\n            </svg>\n            <h3 className=\"text-2xl font-serif text-grey-800 mb-3\">Add Your Photos Here</h3>\n            <p className=\"text-grey-600 leading-relaxed\">\n              Replace these placeholders with your favorite photos together. Recommended size: 800x1000px for each image.\n            </p>\n          </motion.div>\n        </div>\n      </section>\n\n      {/* CTA Section */}\n      <section className=\"bg-white py-20 px-4 text-center\">\n        <motion.div\n          initial={{ opacity: 0, y: 20 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.7 }}\n          viewport={{ once: true }}\n          className=\"max-w-3xl mx-auto\"\n        >\n          <h2 className=\"text-4xl md:text-5xl font-serif text-grey-800 mb-6\">\n            Ready to Celebrate With Us?\n          </h2>\n          <p className=\"text-xl text-grey-600 mb-10\">\n            Let us know if you can join us for our special day\n          </p>\n          <Link\n            href=\"/rsvp\"\n            className=\"inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-rose-accent to-rose-dark rounded-full font-bold text-xl text-white hover:shadow-2xl hover:shadow-rose-accent/60 transition-all duration-300 shadow-xl hover:scale-110\"\n          >\n            RSVP Now\n          </Link>\n        </motion.div>\n      </section>\n\n      <Footer />\n    </div>\n  )\n}
