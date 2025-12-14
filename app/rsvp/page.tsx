'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    mealChoice: '',
    dietaryRestrictions: '',
    songRequest: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend or email service
    console.log('RSVP Form Data:', formData)
    alert('Thank you for your RSVP! We can\'t wait to celebrate with you! (Note: Connect this form to a backend service like Formspree, EmailJS, or your preferred solution)')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory via-blush-light to-champagne flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/30 bg-white/90 backdrop-blur-sm shadow-lg mb-8">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-grey-700 uppercase tracking-[0.2em]">Response Requested</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-serif text-grey-800 mb-6">
              RSVP
            </h1>
            <p className="text-2xl text-grey-600 font-light italic mb-4">
              Please let us know if you can join us
            </p>
            <p className="text-lg text-grey-500">
              Kindly respond by March 1st, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-white"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-grey-700 font-semibold mb-3 text-lg">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-rose-light rounded-xl focus:border-rose-accent focus:ring-2 focus:ring-rose-accent/20 outline-none transition text-grey-800 bg-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-grey-700 font-semibold mb-3 text-lg">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-rose-light rounded-xl focus:border-rose-accent focus:ring-2 focus:ring-rose-accent/20 outline-none transition text-grey-800 bg-white"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Attending */}
              <div>
                <label htmlFor="attending" className="block text-grey-700 font-semibold mb-3 text-lg">
                  Will you be attending? *
                </label>
                <select
                  id="attending"
                  name="attending"
                  required
                  value={formData.attending}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-rose-light rounded-xl focus:border-rose-accent focus:ring-2 focus:ring-rose-accent/20 outline-none transition text-grey-800 bg-white appearance-none cursor-pointer"
                >
                  <option value="yes">Joyfully accepts</option>
                  <option value="no">Regretfully declines</option>
                </select>
              </div>

              {formData.attending === 'yes' && (
                <>
                  {/* Number of Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-grey-700 font-semibold mb-3 text-lg">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-rose-light rounded-xl focus:border-rose-accent focus:ring-2 focus:ring-rose-accent/20 outline-none transition text-grey-800 bg-white appearance-none cursor-pointer"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                    </select>
                  </div>

                  {/* Meal Choice */}
                  <div>
                    <label className="block text-grey-700 font-semibold mb-3 text-lg">
                      Meal Preference *
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border-2 border-rose-light rounded-xl cursor-pointer hover:border-rose-accent transition">
                        <input
                          type="radio"
                          name="mealChoice"
                          value="chicken"
                          required
                          checked={formData.mealChoice === 'chicken'}
                          onChange={handleChange}
                          className="w-5 h-5 text-rose-accent focus:ring-2 focus:ring-rose-accent/20"
                        />
                        <span className="ml-4 text-grey-700">Herb-Roasted Chicken</span>
                      </label>
                      <label className="flex items-center p-4 border-2 border-rose-light rounded-xl cursor-pointer hover:border-rose-accent transition">
                        <input
                          type="radio"
                          name="mealChoice"
                          value="beef"
                          required
                          checked={formData.mealChoice === 'beef'}
                          onChange={handleChange}
                          className="w-5 h-5 text-rose-accent focus:ring-2 focus:ring-rose-accent/20"
                        />
                        <span className="ml-4 text-grey-700">Grilled Beef Tenderloin</span>
                      </label>
                      <label className="flex items-center p-4 border-2 border-rose-light rounded-xl cursor-pointer hover:border-rose-accent transition">
                        <input
                          type="radio"
                          name="mealChoice"
                          value="fish"
                          required
                          checked={formData.mealChoice === 'fish'}
                          onChange={handleChange}
                          className="w-5 h-5 text-rose-accent focus:ring-2 focus:ring-rose-accent/20"
                        />
                        <span className="ml-4 text-grey-700">Pan-Seared Salmon</span>
                      </label>
                      <label className="flex items-center p-4 border-2 border-rose-light rounded-xl cursor-pointer hover:border-rose-accent transition">
                        <input
                          type="radio"
                          name="mealChoice"
                          value="vegetarian"
                          required
                          checked={formData.mealChoice === 'vegetarian'}
                          onChange={handleChange}
                          className="w-5 h-5 text-rose-accent focus:ring-2 focus:ring-rose-accent/20"
                        />
                        <span className="ml-4 text-grey-700">Vegetarian Primavera</span>
                      </label>
                    </div>
                  </div>

                  {/* Dietary Restrictions */}
                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-grey-700 font-semibold mb-3 text-lg">
                      Dietary Restrictions or Allergies
                    </label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-rose-light rounded-xl focus:border-rose-accent focus:ring-2 focus:ring-rose-accent/20 outline-none transition text-grey-800 bg-white"
                      placeholder="Any dietary restrictions or allergies?"
                    />
                  </div>

                  {/* Song Request */}
                  <div>
                    <label htmlFor="songRequest" className="block text-grey-700 font-semibold mb-3 text-lg">
                      Song Request
                    </label>
                    <input
                      type="text"
                      id="songRequest"
                      name="songRequest"
                      value={formData.songRequest}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-rose-light rounded-xl focus:border-rose-accent focus:ring-2 focus:ring-rose-accent/20 outline-none transition text-grey-800 bg-white"
                      placeholder="Request a song for the reception"
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-grey-700 font-semibold mb-3 text-lg">
                  Message for the Couple
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-rose-light rounded-xl focus:border-rose-accent focus:ring-2 focus:ring-rose-accent/20 outline-none transition text-grey-800 bg-white resize-none"
                  placeholder="Share your well wishes..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-accent to-rose-dark text-white font-bold py-5 px-8 rounded-xl hover:shadow-2xl hover:shadow-rose-accent/50 transition-all duration-300 text-xl hover:scale-[1.02]"
                >
                  Submit RSVP
                </button>
              </div>

              {/* Form Note */}
              <div className="mt-6 p-4 bg-champagne/40 rounded-xl border border-gold/20">
                <p className="text-sm text-grey-600 text-center">
                  <strong>Note:</strong> This form needs to be connected to a backend service (like Formspree, EmailJS, or a custom API) to actually send responses.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-rose-light/30">
              <h3 className="text-2xl font-serif text-grey-800 mb-4">Questions?</h3>
              <p className="text-grey-600 mb-6">
                If you have any questions about the wedding or your RSVP, please don't hesitate to reach out.
              </p>
              <a
                href="mailto:maggieandsamwedding@example.com"
                className="inline-flex items-center gap-2 text-rose-accent hover:text-rose-dark font-semibold transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                maggieandsamwedding@example.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
