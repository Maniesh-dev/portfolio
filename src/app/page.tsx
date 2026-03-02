"use client"

import About from '@/components/About'
import Contact from '@/components/Contact'
import Expertise from '@/components/Experties'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery'
import LoadingScreen from '@/components/LoadingScreen'
import Menubar from '@/components/Menubar'
import PixelatedImage from '@/components/PixelatedImage'
import ScaleAnimationImg from '@/components/ScaleAnimationImg'
import WorkIntro from '@/components/WorkIntro'
import WorkIntro2 from '@/components/WorkIntro2'
import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'


const Page = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Header />
        <Menubar />
        <Hero />
        <PixelatedImage />
        <WorkIntro />
        <ImageGallery />
        <WorkIntro2 />
        <ScaleAnimationImg />
        <About />
        <Expertise />
        <Contact />
      </motion.main>
    </>
  )
}

export default Page