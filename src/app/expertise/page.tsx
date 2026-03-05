"use client"

import Header from '@/components/Header'
import Menubar from '@/components/Menubar'
import Contact from '@/components/Contact'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'
import Image from 'next/image'
import forkIcon from '../../../public/forkicon.png'

const xirod = localFont({ src: "../../fonts/Xirod.otf" });

const services = [
    {
        num: "01",
        title: "Strategy & Discovery",
        desc: "Deep-dive research into your brand, audience, and market landscape to build a rock-solid foundation.",
    },
    {
        num: "02",
        title: "Design & Prototyping",
        desc: "Pixel-perfect interfaces crafted with purpose — beautiful designs that convert visitors into customers.",
    },
    {
        num: "03",
        title: "Development & Build",
        desc: "Clean, performant code using modern frameworks — fast-loading sites that scale with your business.",
    },
    {
        num: "04",
        title: "AI Integration",
        desc: "Intelligent features powered by AI — chatbots, automation, and data-driven experiences that set you apart.",
    },
]

const processSteps = [
    { label: "Discover", icon: "◈" },
    { label: "Define", icon: "◇" },
    { label: "Design", icon: "△" },
    { label: "Develop", icon: "□" },
    { label: "Deploy", icon: "○" },
]

const ExpertisePage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0d0d0d] min-h-screen text-[#b7ab98]"
        >
            <Header />
            <Menubar />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
                {/* Subtle radial gradient bg */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(235,91,0,0.05)_0%,_transparent_70%)]" />

                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm tracking-[8px] uppercase text-[#EB5B00] mb-8 font-mono z-10"
                >
                    What I Do
                </motion.p>

                <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className={`${xirod.className} text-5xl md:text-7xl lg:text-[9rem] leading-none text-center z-10`}
                >
                    <span className="text-white">EXPERT</span>
                    <span className="text-[#EB5B00]">ISE</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-10 text-lg md:text-xl max-w-2xl text-center text-[#b7ab98]/60 z-10"
                >
                    Broadcasting your brand worldwide with feeling, experience, and value.
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-10 z-10"
                >
                    <Image src={forkIcon} alt="icon" className="w-[60px] opacity-70" />
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 flex flex-col items-center gap-2 z-10"
                >
                    <span className="text-xs tracking-[4px] uppercase text-[#b7ab98]/30">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-[#EB5B00]/50 to-transparent" />
                </motion.div>
            </section>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Services Grid */}
            <section className="py-32 px-6 md:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left label */}
                    <div className="lg:sticky lg:top-32 h-fit lg:min-w-[280px]">
                        <motion.div
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-sm tracking-[6px] uppercase text-[#EB5B00] mb-4 font-mono">Services</p>
                            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                How I<br />Help You
                            </h2>
                            <p className="mt-4 text-[#b7ab98]/50 max-w-xs text-sm leading-relaxed">
                                End-to-end solutions from concept to launch — every project is treated like a product.
                            </p>
                        </motion.div>
                    </div>

                    {/* Service cards */}
                    <div className="flex-1 flex flex-col gap-px">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.num}
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group border-b border-white/10 py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 hover:bg-white/[0.02] transition-all duration-500 px-4 md:px-8 cursor-default"
                            >
                                <span className="text-sm font-mono text-[#EB5B00]/60 pt-1">{service.num}</span>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#EB5B00] transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 text-[#b7ab98]/50 max-w-lg leading-relaxed group-hover:text-[#b7ab98]/70 transition-colors duration-500">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="w-3 h-3 border border-white/20 group-hover:border-[#EB5B00] group-hover:rotate-45 transition-all duration-500 mt-2 shrink-0" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(235,91,0,0.04)_0%,_transparent_60%)]" />

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 relative z-10"
                >
                    <p className="text-sm tracking-[6px] uppercase text-[#EB5B00] mb-4 font-mono">Process</p>
                    <h2 className={`${xirod.className} text-4xl md:text-6xl text-white`}>HARMONY IN MAKING</h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative z-10">
                    {processSteps.map((step, i) => (
                        <motion.div
                            key={step.label}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.12 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center gap-4 cursor-default"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10 group-hover:border-[#EB5B00]/60 flex items-center justify-center transition-all duration-500 group-hover:bg-[#EB5B00]/5">
                                <span className="text-2xl md:text-3xl text-[#b7ab98]/40 group-hover:text-[#EB5B00] transition-colors duration-500">
                                    {step.icon}
                                </span>
                            </div>
                            <span className="text-xs tracking-[3px] uppercase text-[#b7ab98]/40 group-hover:text-[#EB5B00] transition-colors duration-500">
                                {step.label}
                            </span>
                            {i < processSteps.length - 1 && (
                                <div className="hidden md:block absolute h-px w-12 bg-white/10" style={{ left: `calc(${(i + 1) * 20}% - 24px)`, top: '48px' }} />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom text */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-20 max-w-2xl mx-auto relative z-10"
                >
                    <p className="text-[#b7ab98]/50 leading-relaxed">
                        From sleek design to seamless functionality, I turn ideas into digital experiences tailored for your product, audience, and goals. I work with startups, growing agencies, and enterprises — adapting my tools to each task.
                    </p>
                </motion.div>
            </section>

            {/* Values Pills */}
            <section className="py-20 px-6">
                <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
                    {["Feeling", "Experience", "Value"].map((val, i) => (
                        <motion.div
                            key={val}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex justify-between items-center gap-10 px-6 py-3 font-thin bg-[#EB5B00] rounded-xl cursor-default hover:scale-105 transition-transform duration-500"
                        >
                            <p className="text-sm text-black">w /.</p>
                            <p className="text-2xl text-white">{val}</p>
                            <p></p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Contact Section */}
            <Contact />
        </motion.main>
    )
}

export default ExpertisePage
