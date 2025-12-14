'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function OurStory() {
  const timeline = [
    {
      year: '2018',
      title: 'First Met',
      description: 'Our paths crossed for the first time at a mutual friend\'s gathering. Little did we know, that casual introduction would change our lives forever.',
      image: '/couple-first-meet.jpg' // Add your photo here
    },
    {
      year: '2019',
      title: 'First Date',
      description: 'After months of friendship, Sam finally asked Maggie out for coffee. That "coffee date" turned into hours of conversation and the beginning of something beautiful.',
      image: '/couple-first-date.jpg'
    },
    {
      year: '2021',
      title: 'Moved In Together',
      description: 'We decided to take the next step and create a home together. From decorating debates to cozy movie nights, every moment brought us closer.',
      image: '/couple-home.jpg'
    },
    {
      year: '2024',
      title: 'The Proposal',
      description: 'Under a sky full of stars, Sam got down on one knee and asked the question that would start our forever. Of course, Maggie said yes!',
      image: '/proposal.jpg'
    },
    {
      year: '2026',
      title: 'Our Wedding Day',
      description: 'And now, we\'re ready to celebrate our love story with all of you. We can\'t wait to say "I do" surrounded by our favorite people.',
      image: '/wedding-day.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush-light via-ivory to-cream">
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
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-rose-accent/30 bg-white/90 backdrop-blur-sm shadow-lg mb-8">
              <svg className="w-4 h-4 text-rose-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-grey-700 uppercase tracking-[0.2em]">Our Love Story</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-script text-grey-800 mb-6">
              Maggie & Sam
            </h1>
            <p className="text-2xl text-grey-600 font-light italic">
              A journey of love, laughter, and happily ever after
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-rose-light/40 via-champagne/30 to-sage-light/40"
          >
            {/* Image placeholder - Replace with actual image */}
            <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-grey-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-grey-500 font-serif text-lg">Add your favorite couple photo here</p>
                <p className="text-grey-400 text-sm mt-2">Recommended size: 1600x900px</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-grey-800 mb-4">
              Our Timeline
            </h2>
            <p className="text-xl text-grey-600 font-light">
              From strangers to soulmates
            </p>
          </motion.div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Image Placeholder */}
                <div className="flex-1">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-gradient-to-br from-rose-light/30 via-champagne/20 to-sage-light/30">
                    <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-2 text-grey-400 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-grey-500 text-sm font-serif">{item.title} Photo</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-6 py-2 bg-rose-accent/10 rounded-full mb-4">
                    <span className="text-rose-accent font-bold text-lg">{item.year}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-grey-800 mb-4">{item.title}</h3>
                  <p className="text-grey-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cream to-blush-light">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <svg className="w-16 h-16 mx-auto mb-6 text-rose-accent opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.5 10c-1.94 0-3.5 1.56-3.5 3.5s1.56 3.5 3.5 3.5c1.38 0 2.56-.77 3.16-1.9l-1.87-1.86C7.94 13.58 7.25 14 6.5 14c-.83 0-1.5-.67-1.5-1.5S5.67 11 6.5 11c.38 0 .72.14 1 .35L9.37 9.5C8.61 8.87 7.61 8.5 6.5 8.5c-1.94 0-3.5 1.56-3.5 3.5 0 .31.04.62.11.91L1 15.77V21h5.24l2.86-2.11c.29.07.6.11.91.11 1.94 0 3.5-1.56 3.5-3.5s-1.56-3.5-3.5-3.5zM19.5 3c-1.94 0-3.5 1.56-3.5 3.5s1.56 3.5 3.5 3.5c1.38 0 2.56-.77 3.16-1.9l-1.87-1.86C20.94 6.58 20.25 7 19.5 7c-.83 0-1.5-.67-1.5-1.5S18.67 4 19.5 4c.38 0 .72.14 1 .35L22.37 2.5C21.61 1.87 20.61 1.5 19.5 1.5c-1.94 0-3.5 1.56-3.5 3.5 0 .31.04.62.11.91L14 8.77V14h5.24l2.86-2.11c.29.07.6.11.91.11 1.94 0 3.5-1.56 3.5-3.5S21.44 3 19.5 3z"/>
            </svg>
            <blockquote className="text-3xl md:text-4xl font-serif text-grey-800 mb-6 italic leading-relaxed">
              "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
            </blockquote>
            <p className="text-grey-600 font-medium">— Maya Angelou</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-grey-800 mb-6">
            Join Us On Our Special Day
          </h2>
          <p className="text-xl text-grey-600 mb-10">
            We would be honored to have you celebrate with us
          </p>
          <Link
            href="/rsvp"
            className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-rose-accent to-rose-dark rounded-full font-bold text-xl text-white hover:shadow-2xl hover:shadow-rose-accent/60 transition-all duration-300 shadow-xl hover:scale-110"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            RSVP Now
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
