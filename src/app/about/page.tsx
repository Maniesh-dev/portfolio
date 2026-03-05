"use client"

import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Menubar from '@/components/Menubar'
import { motion } from 'framer-motion'

const AboutPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0d0d0d] min-h-screen"
        >
            <Header />
            <Menubar />
            <About />
            <Contact />
        </motion.main>
    )
}

export default AboutPage
