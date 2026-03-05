"use client"

import Header from '@/components/Header'
import Menubar from '@/components/Menubar'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'

const ContactPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0d0d0d] min-h-screen text-[#b7ab98]"
        >
            <Header />
            <Menubar />
            <Contact />
        </motion.main>
    )
}

export default ContactPage
