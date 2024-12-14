'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?'

const useMatrixEffect = (finalText, duration) => {
  const [displayText, setDisplayText] = useState(Array(finalText.length).fill(''))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prev) =>
        prev.map((char, index) => {
          if (char === finalText[index]) return char
          return characters[Math.floor(Math.random() * characters.length)]
        })
      )
    }, duration / 20)

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId)
      setDisplayText(finalText.split(''))
    }, duration)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [finalText, duration])

  return displayText.join('')
}

const Cursor = () => (
  <motion.span
    className="inline-block w-2 h-6 bg-green-500"
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.5, repeat: Infinity }}
  />
)

const CodeLine = ({ children }) => (
  <motion.div
    className="font-mono text-sm text-green-500 opacity-50"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 0.5, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
)

const FireIceGlitchText = ({ children }) => {
  const [glitchIntensity, setGlitchIntensity] = useState(0)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchIntensity(Math.random())
    }, 100)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="relative inline-block">
      <span 
        className="relative z-10"
        style={{
          textShadow: `
            -3px -3px 0 #ff4500,
            -2px -2px 0 #ff6347,
            -1px -1px 0 #ff7f50,
            1px 1px 0 #4169e1,
            2px 2px 0 #1e90ff,
            3px 3px 0 #00bfff,
            ${glitchIntensity * 2}px ${glitchIntensity * 2}px 5px rgba(255, 165, 0, 0.7),
            ${-glitchIntensity * 2}px ${-glitchIntensity * 2}px 5px rgba(135, 206, 235, 0.7)
          `
        }}
      >
        {children}
      </span>
    </div>
  )
}

const BinaryRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const binary = '10'
    const fontSize = 10
    const columns = canvas.width / fontSize

    const drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0f0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const intervalId = setInterval(draw, 33)

    return () => clearInterval(intervalId)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

const CircuitBoard = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="#0f0" strokeWidth="0.5" />
      <circle cx="10" cy="10" r="2" fill="#0f0" />
      <circle cx="90" cy="90" r="2" fill="#0f0" />
      <path d="M10 50 H40 V90" fill="none" stroke="#0f0" strokeWidth="0.5" />
      <path d="M50 10 V40 H90" fill="none" stroke="#0f0" strokeWidth="0.5" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
  </svg>
)

export default function WelcomePage() {
  const topText = useMatrixEffect("WELCOME TO MY", 3000)
  const bottomText = useMatrixEffect("PORTFOLIO", 3000)
  const [showMain, setShowMain] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-black opacity-20"></div>
      
      <BinaryRain />
      <CircuitBoard />

      <div className="absolute top-0 left-0 p-4 space-y-1 z-10">
        <CodeLine>{'> initiating system boot...'}</CodeLine>
        <CodeLine>{'> loading kernel modules...'}</CodeLine>
        <CodeLine>{'> establishing secure connection...'}</CodeLine>
        <CodeLine>{'> decrypting welcome message...'}</CodeLine>
      </div>

      <AnimatePresence>
        {showMain && (
          <motion.div
            className="text-center space-y-4 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold mb-4 text-white">
              <FireIceGlitchText>{topText}</FireIceGlitchText>
            </h1>
            <h1 className="text-6xl font-bold text-white">
              <FireIceGlitchText>{bottomText}</FireIceGlitchText>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-4 font-mono text-green-500 z-10">
        {'> '}<Cursor />
      </div>
    </div>
  )
}