"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/ui/navbar';


const BackgroundAnimation = () => {
  return (
    <div>
      <div className='mt-[-3px] ml-[448px] z-50 absolute'>
        <Navbar />
      </div>
      <div className=" mt-[20px] ml-[-158px] h-[585px] w-[1212px] inset-0 z-0 overflow-hidden absolute">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4338ca" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#5b21b6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              r={Math.random() * 100 + 50}
              cx={Math.random() * 100 + "%"}
              cy={Math.random() * 100 + "%"}
              fill="url(#grad1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.3, 0.7],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-50" />
      </div>
    </div>
  )
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[580px]  rounded-3xl shadow-2xl">
      <BackgroundAnimation />
      <div className=" z-10 flex items-center justify-center h-[520px] relative ">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="relative h-[490px] mt-[110px] bg-black bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white border-opacity-20 p-6">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Get in Touch</h2>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-center"
                >
                  <svg className="w-12 h-12 mx-auto mb-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xl mb-2">Thank you!</p>
                  <p className="text-base">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-[16px] font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Name</label>
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        type="text"
                        id="name"
                        required
                        className="relative w-full px-3 py-2 rounded-lg bg-black bg-opacity-50 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Your Name"
                        style={{ fontSize: "var(--placeholder-text-size, 16px)" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-[16px] font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Email</label>
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        type="email"
                        id="email"
                        required
                        className="relative w-full px-3 py-2 rounded-lg bg-black bg-opacity-50 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="your@email.com"
                        style={{ fontSize: "var(--placeholder-text-size, 16px)" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-[16px] font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Message</label>
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        id="message"
                        required
                        rows={4}
                        className="relative w-full px-3 py-2 rounded-lg bg-black bg-opacity-50 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                        placeholder="Your message here..."
                        style={{ fontSize: "var(--placeholder-text-size, 16px)" }}
                      ></motion.textarea>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="h-[50px] w-[260px] ml-[70px] px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}