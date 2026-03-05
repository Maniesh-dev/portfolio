"use client"

import { useState } from 'react'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import SwapText from '@/components/ui/SwapText'

const xirod = localFont({ src: "../fonts/Xirod.otf" });

const socialLinks = [
  { title: "Instagram", url: "#" },
  { title: "Github", url: "#" },
  { title: "LinkedIn", url: "#" },
  { title: "Dribbble", url: "#" },
  { title: "Whatsapp", url: "#" },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to send message')

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', projectDetails: '' })

      // Reset success state after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error(error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="bg-[#0d0d0d] text-[#b7ab98] w-full">
      {/* Hero Section */}
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(235,91,0,0.06)_0%,_transparent_60%)]" />

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm tracking-[8px] uppercase text-[#EB5B00] mb-6 font-mono z-10"
        >
          Get In Touch
        </motion.p>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className={`${xirod.className} text-5xl md:text-7xl lg:text-[9rem] leading-none text-center z-10`}
        >
          <span className="text-[#EB5B00]">CON</span>
          <span className="text-white">TACT</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl max-w-xl text-center text-[#b7ab98]/60 z-10"
        >
          Just one small action stands between us and getting acquainted.
          A great journey begins with <span className="text-[#EB5B00] font-medium">"Hello!"</span>
        </motion.p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10" />

      {/* Contact Form Section */}
      <div className="py-24 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Left side */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:min-w-[320px] flex flex-col gap-8"
          >
            <div>
              <p className="text-sm tracking-[6px] uppercase text-[#EB5B00] mb-4 font-mono">Let's Talk</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Have an<br />Idea or a Project?
              </h2>
              <p className="mt-4 text-[#b7ab98]/50 max-w-xs text-sm leading-relaxed">
                Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
              </p>
            </div>

            {/* Email */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <p className="text-xs tracking-[4px] uppercase text-[#b7ab98]/40">Email</p>
              <p className="text-white text-lg hover:text-[#EB5B00] transition-colors cursor-pointer break-all">
                manieshsanwal.dev@gmail.com
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 relative shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping absolute inset-0" />
              </div>
              <span className="text-sm text-[#b7ab98]/50">Available for freelance projects also</span>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="border border-white/10 rounded-sm p-8 md:p-12 bg-[#070707] space-y-8 relative overflow-hidden">

              {/* Success Overlay */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-20 bg-[#070707]/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 size={64} className="text-[#EB5B00] mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#b7ab98]/70">Thank you for reaching out! I'll review your project details and get back to you shortly.</p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs tracking-[3px] uppercase text-[#b7ab98]/40">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/10 py-3 outline-none text-white placeholder:text-[#b7ab98]/20 focus:border-[#EB5B00]/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-[3px] uppercase text-[#b7ab98]/40">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white/10 py-3 outline-none text-white placeholder:text-[#b7ab98]/20 focus:border-[#EB5B00]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-xs tracking-[3px] uppercase text-[#b7ab98]/40">WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your WhatsApp Number"
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none text-white placeholder:text-[#b7ab98]/20 focus:border-[#EB5B00]/50 transition-colors"
                />
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-xs tracking-[3px] uppercase text-[#b7ab98]/40">Project Details</label>
                <textarea
                  rows={4}
                  name="projectDetails"
                  required
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell me about your idea or project..."
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none text-white placeholder:text-[#b7ab98]/20 focus:border-[#EB5B00]/50 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">Failed to send message. Please try again later.</p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 relative z-10">
                <p className="text-xs text-[#b7ab98]/30">I'll get back to you within 24 hours</p>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group flex items-center gap-3 bg-[#EB5B00] hover:bg-[#EB5B00]/90 disabled:opacity-70 disabled:cursor-not-allowed text-black font-semibold px-8 py-3 rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-[#EB5B00]/20 cursor-pointer"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  {status !== 'loading' && <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10" />

      {/* Social Links */}
      <div className="py-20 px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[6px] uppercase text-[#EB5B00] font-mono">Follow Me</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-3xl mx-auto">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.url}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group flex items-center gap-2 cursor-pointer"
            >
              <SwapText
                finalText={`{ ${link.title} }`}
                initialText={`{ ${link.title} }`}
                className="cursor-pointer h-[25px]"
                supportsHover
              />
              <ArrowUpRight size={16} className="text-[#b7ab98]/40 group-hover:text-[#EB5B00] group-hover:rotate-45 transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8 px-6 md:px-16">
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="text-[#EB5B00] text-sm">
            &copy; Design & Build by <br className="md:hidden" /> Maniesh Sanwal
          </div>
          <div className="text-4xl md:text-5xl font-bold text-[#b7ab98]/20">
            &copy;{new Date().getFullYear()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
