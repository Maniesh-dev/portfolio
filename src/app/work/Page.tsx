"use client"

import Header from '@/components/Header'
import Menubar from '@/components/Menubar'
import Contact from '@/components/Contact'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'

const xirod = localFont({ src: "../../fonts/Xirod.otf" });

const WorkPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#0d0d0d] min-h-screen text-white"
    >
      <Header />
      <Menubar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-px h-full bg-white" style={{ left: `${(i + 1) * 5}%` }} />
          ))}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${(i + 1) * 5}%` }} />
          ))}
        </div>

        {/* Heading */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10"
        >
          <p className="text-sm tracking-[6px] uppercase text-[#EB5B00] mb-6 font-mono">Portfolio</p>
          <h1 className={`${xirod.className} text-5xl md:text-7xl lg:text-9xl leading-tight`}>
            <span className="text-[#EB5B00]">MY</span> WORK
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 text-[#b7ab98]/70 text-lg md:text-xl max-w-2xl text-center z-10"
        >
          A curated selection of projects that reflect my passion for design, development, and innovation.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-40 h-px bg-gradient-to-r from-transparent via-[#EB5B00] to-transparent mt-12"
        />

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="mt-16 border border-[#EB5B00]/30 rounded-full px-8 py-3 relative group cursor-default"
        >
          <span className="text-[#b7ab98]/60 text-sm tracking-[4px] uppercase group-hover:text-[#EB5B00] transition-colors duration-500">
            Coming Soon
          </span>
          <div className="absolute -top-1 -right-1 w-3 h-3 border border-[#EB5B00]/50 rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[10%] w-20 h-20 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-[8%] w-32 h-32 border border-[#EB5B00]/10 rounded-full"
        />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-white/10" />

      {/* Contact Section */}
      <Contact />
    </motion.main>
  )
}

export default WorkPage