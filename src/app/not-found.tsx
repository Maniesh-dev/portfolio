"use client"

import Link from 'next/link'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Menubar from '@/components/Menubar'
import GibberishText from '@/components/ui/GibberishText'

const xirod = localFont({ src: "../fonts/Xirod.otf" });

const NotFound = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0d0d0d] min-h-screen text-white flex flex-col"
        >
            <Header />
            <Menubar />

            <section className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
                {/* Background decorative lines */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                </div>

                {/* 404 Number */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="relative select-none"
                >
                    <h1
                        className={`${xirod.className} text-[30vw] md:text-[20vw] lg:text-[15vw] leading-none text-transparent font-bold`}
                        style={{
                            WebkitTextStroke: '2px rgba(235, 91, 0, 0.3)',
                        }}
                    >
                        <GibberishText text="404" />
                    </h1>
                    {/* Glitch layers */}
                    <motion.h1
                        animate={{
                            x: [0, -3, 3, -1, 0],
                            opacity: [1, 0.8, 1, 0.9, 1],
                        }}
                        transition={{
                            duration: 0.3,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                        }}
                        className={`${xirod.className} text-[30vw] md:text-[20vw] lg:text-[15vw] leading-none text-[#EB5B00]/20 font-bold absolute inset-0`}
                    >
                        <GibberishText text="404" />
                    </motion.h1>
                    <motion.h1
                        animate={{
                            x: [0, 3, -3, 1, 0],
                            opacity: [1, 0.7, 1, 0.85, 1],
                        }}
                        transition={{
                            duration: 0.3,
                            repeat: Infinity,
                            repeatDelay: 3,
                            delay: 0.05,
                            ease: "easeInOut",
                        }}
                        className={`${xirod.className} text-[30vw] md:text-[20vw] lg:text-[15vw] leading-none text-[#EB5B00]/10 font-bold absolute inset-0`}
                    >
                        <GibberishText text="404" />
                    </motion.h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-6 z-10"
                >
                    <p className="text-2xl md:text-3xl font-bold text-[#b7ab98] mb-2">
                        Page Not Found
                    </p>
                    <p className="text-[#b7ab98]/50 text-sm md:text-base max-w-md">
                        The page you're looking for doesn't exist or has been moved to another dimension.
                    </p>
                </motion.div>

                {/* Back to Home button */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-10 z-10"
                >
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-3 border border-[#EB5B00]/40 hover:border-[#EB5B00] rounded-full px-8 py-3 transition-all duration-500 hover:bg-[#EB5B00]/10"
                    >
                        <motion.span
                            animate={{ x: [0, -4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="text-[#EB5B00]"
                        >
                            ←
                        </motion.span>
                        <span className="text-[#b7ab98] group-hover:text-white transition-colors text-sm tracking-[3px] uppercase">
                            Back to Home
                        </span>
                        <div className="absolute -top-1 -right-1 w-3 h-3 border border-[#EB5B00]/50 rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                    </Link>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] right-[15%] w-16 h-16 border border-[#EB5B00]/10 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[25%] left-[12%] w-24 h-24 border border-white/5 rounded-full"
                />
                <div className="absolute bottom-[15%] right-[20%] w-2 h-2 bg-[#EB5B00]/30 rounded-full" />
                <div className="absolute top-[30%] left-[20%] w-1 h-1 bg-[#EB5B00]/50 rounded-full" />
            </section>
        </motion.main>
    )
}

export default NotFound
