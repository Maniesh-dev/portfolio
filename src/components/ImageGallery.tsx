"use client"

import image01 from '../../public/image01.png'
import image02 from '../../public/image02.png'
import image03 from '../../public/image03.png'
import image04 from '../../public/image04.png'
import image05 from '../../public/image05.png'
import image06 from '../../public/image06.png'
import image07 from '../../public/image07.png'
import image08 from '../../public/image08.png'
import image09 from '../../public/image09.png'
import image10 from '../../public/image10.png'
import image11 from '../../public/image11.png'
import image12 from '../../public/image12.png'


import Image, { StaticImageData } from 'next/image'
import {useScroll, useTransform, motion, MotionValue} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useDimension } from '@/lib/useDimension'
import Lenis from '@studio-freight/lenis'

const images= [image01, image02, image03, image04, image05, image06, image07, image08, image09, image10, image11, image12]

const ImageGallery = () => {
  const container = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | undefined>(undefined);
  const rafHandleRef = useRef<number | null>(null);
  const {height} = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  
  
  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };
      rafHandleRef.current = requestAnimationFrame(raf);
    }
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
    
  }, []);

  return (
    <div>
      <div ref={container} className='h-[175vh] bg-[#070707] flex flex-row gap-[2vh] boxing-border p-[2vh] overflow-hidden'>
        <Column images={[images[0], images[1], images[2]]} y={y1}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
    </div>
  )
}

const Column = ({images, y}: {images: StaticImageData[], y?: MotionValue}) => {
  return (
      <motion.div style={{y}} className='w-[25%] min-w-[250px] h-full flex flex-col gap-[2vh] relative column'>
        {images.map((image: StaticImageData, index: number) => (
          <div key={index} className='w-full h-full relative rounded-md overflow-hidden'>
            <Image src={image} alt='image' className='object-cover'/>
          </div>
        ))}
      </motion.div>
  )
}

export default ImageGallery
