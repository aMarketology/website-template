'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Registry() {
  const registries = [
    {
      id: 1,
      name: 'Amazon',
      description: 'Find our home essentials and wish list items',
      url: 'https://www.amazon.com/wedding/registry',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.406-3.045.61-4.516.61-2.265 0-4.426-.408-6.48-1.226-2.007-.802-3.644-1.856-4.918-3.152-.114-.122-.144-.22-.073-.344z"/>
          <path d="M21.28 15.38c-.416-.25-.93-.62-1.543-1.11-.612-.49-1.163-.95-1.65-1.38-.49-.43-.84-.77-1.05-.98-.21-.22-.31-.42-.31-.6 0-.17.07-.34.23-.49.15-.16.44-.37.85-.65.42-.28.77-.52 1.06-.71.59-.39 1.07-.77 1.44-1.13.36-.37.62-.77.76-1.21.15-.44.22-.95.22-1.53 0-1.01-.32-1.83-.95-2.45-.64-.62-1.53-.94-2.69-.94-.89 0-1.64.18-2.24.54-.61.36-1.07.84-1.39 1.44-.31.6-.47 1.23-.47 1.91 0 .14.01.32.04.54.03.23.07.4.13.54.05.13.14.22.25.27.12.05.28.08.47.08.36 0 .61-.13.77-.38.15-.26.27-.61.35-1.06.07-.44.19-.83.35-1.16.16-.34.4-.61.72-.82.32-.22.73-.32 1.22-.32.68 0 1.21.18 1.58.54.38.35.56.85.56 1.48 0 .57-.13 1.06-.4 1.47-.26.4-.62.76-1.07 1.06-.45.31-.94.61-1.48.91-.53.3-1.04.63-1.51.99-.48.36-.87.77-1.18 1.24-.31.46-.47 1.01-.47 1.64 0 .69.2 1.32.59 1.89.39.56.92 1.01 1.59 1.35.66.33 1.41.5 2.24.5.96 0 1.79-.18 2.49-.53.7-.35 1.24-.83 1.61-1.42.38-.59.56-1.23.56-1.92 0-.36-.06-.68-.17-.95-.11-.28-.29-.5-.53-.67z"/>
        </svg>
      ),
      color: 'from-[#FF9900] to-[#FFA500]'
    },
    {
      id: 2,
      name: 'Target',
      description: 'Our curated collection of home goods and decor',
      url: 'https://www.target.com/gift-registry',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="11" fill="#CC0000"/>
          <circle cx="12" cy="12" r="7" fill="white"/>
          <circle cx="12" cy="12" r="3" fill="#CC0000"/>
        </svg>
      ),
      color: 'from-red-600 to-red-700'
    },
    {
      id: 3,
      name: 'Zola',
      description: 'Everything we need to start our new life together',
      url: 'https://www.zola.com/registry',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M14.5 8h-5l-1 1.5L12 16l3.5-6.5z"/>
        </svg>
      ),
      color: 'from-[#F7B2BD] to-[#E88391]'
    },
    {
      id: 4,
      name: 'Crate & Barrel',
      description: 'Quality furniture and kitchenware for our home',
      url: 'https://www.crateandbarrel.com/gift-registry',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="8" height="8" rx="1"/>
          <rect x="13" y="3" width="8" height="8" rx="1"/>
          <rect x="3" y="13" width="8" height="8" rx="1"/>
          <rect x="13" y="13" width="8" height="8" rx="1"/>
        </svg>
      ),
      color: 'from-slate-700 to-slate-900'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory via-champagne to-blush-light flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/30 bg-white/90 backdrop-blur-sm shadow-lg mb-8">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              <span className="text-sm font-semibold text-grey-700 uppercase tracking-[0.2em]">Gift Registry</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-serif text-grey-800 mb-6">
              Our Registry
            </h1>
            <p className="text-2xl text-grey-600 font-light italic max-w-2xl mx-auto">
              Your presence is the greatest gift, but if you wish to honor us with something more, we've created registries at these stores
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registry Cards */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {registries.map((registry, index) => (
              <motion.a
                key={registry.id}
                href={registry.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-white hover:scale-105"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${registry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative p-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${registry.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {registry.icon}
                  </div>

                  {/* Text */}
                  <h3 className="text-3xl font-serif text-grey-800 mb-3 group-hover:text-grey-900">
                    {registry.name}
                  </h3>
                  <p className="text-grey-600 text-lg mb-6">
                    {registry.description}
                  </p>

                  {/* Button */}
                  <div className="flex items-center gap-2 text-rose-accent group-hover:text-rose-dark font-semibold transition-colors">
                    <span>View Registry</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-gold/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.a>
            ))}
          </div>

          {/* Cash Fund Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-14 border-2 border-white text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sage to-eucalyptus text-white mb-6 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <h3 className="text-4xl font-serif text-grey-800 mb-4">
                Honeymoon Fund
              </h3>
              <p className="text-xl text-grey-600 mb-8 leading-relaxed">
                We're also saving for our dream honeymoon to Italy. If you'd like to contribute to our adventure, we would be deeply grateful.
              </p>

              <div className="bg-gradient-to-br from-champagne/50 to-blush-light/50 rounded-2xl p-8 border-2 border-gold/20">
                <p className="text-grey-700 font-semibold mb-3 text-lg">Cash Gifts Welcome</p>
                <p className="text-grey-600">
                  You can give a monetary gift through <a href="https://www.zola.com" target="_blank" rel="noopener noreferrer" className="text-rose-accent hover:text-rose-dark font-semibold underline">Zola</a> or bring a card to the wedding.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Thank You Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto text-center"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg border-2 border-rose-light/30">
              {/* Decorative element */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                <svg className="w-8 h-8 text-rose-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </div>

              <h3 className="text-3xl font-serif text-grey-800 mb-4 italic">
                Thank You
              </h3>
              <p className="text-lg text-grey-600 leading-relaxed">
                We are so grateful for your love and support as we begin this new chapter. Your presence at our wedding means the world to us, and any gift you choose to give is truly appreciated.
              </p>

              <div className="mt-8">
                <p className="font-script text-4xl text-rose-accent">
                  Maggie & Sam
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
