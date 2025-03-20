import BigImageSec from '@/components/BigImageSec'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery'
import Menubar from '@/components/Menubar'
import PixelatedImage from '@/components/PixelatedImage'
import React from 'react'

const page = () => {
  return (
    <main>
      <Header/>
      <Menubar/>
      <Hero />
      <PixelatedImage/>
      <ImageGallery/>
    </main>
  )
}

export default page