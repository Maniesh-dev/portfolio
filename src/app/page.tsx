import About from '@/components/About'
import BigImageSec from '@/components/BigImageSec'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery'
import Menubar from '@/components/Menubar'
import PixelatedImage from '@/components/PixelatedImage'
import ScaleAnimationImg from '@/components/ScaleAnimationImg'
import WorkIntro from '@/components/WorkIntro'
import WorkIntro2 from '@/components/WorkIntro2'



const page = () => {
  return (
    <main>
      <Header/>
      <Menubar/>
      <Hero />
      <PixelatedImage/>
      <WorkIntro/>
      <ImageGallery/>
      <WorkIntro2/>
      <ScaleAnimationImg/>
      <About/>
      <Contact/>
    </main>
  )
}

export default page