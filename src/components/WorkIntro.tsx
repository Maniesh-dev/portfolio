"use client"

import localFont from 'next/font/local';
import TopWork from '../../public/work.png'
import BottomWork from '../../public/BottomWork.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


const Xirod = localFont({ src: "../fonts/Xirod.otf" });
const WorkIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 0]);
  return (
    <div className="md:min-h-screen w-full bg-black flex flex-col justify-center items-center relative">
      <div className='w-full flex flex-col md:flex-row justify-between items-center px-8 text-sm'>
        <p>House of digital aesthetics ©</p>
        <p>Place where well-crafted web projects are born.</p>
        <p className='hidden md:block'>I provide end-to-end web development and design services.</p>
      </div>
      <Image src={TopWork} alt='image' className='object-cover' />
      <div className='w-full px-4 text-[11px] bg-[#EB5B00] text-white flex flex-col items-center justify-center uppercase z-10'>
        <p className='w-full flex md:hidden flex-wrap justify-between'>
          <span>Creative</span>
          <span>+</span>
          <span>Designer</span>
          <span>+</span>
          <span>Developer</span>
        </p>
        <p className='w-full hidden md:flex flex-wrap justify-between'>
          <span>My</span>
          <span>inspiration</span>
          <span>begins</span>
          <span>with</span>
          <span>engineering,</span>
          <span>contemporary</span>
          <span>technological</span>
          <span>solutions,</span>
          <span>and</span>
          <span>innovation.</span>
        </p>
        <p className='w-full hidden md:flex flex-wrap justify-between -mt-[5px]'>
          <span>Each</span>
          <span>design</span>
          <span>element</span>
          <span>is</span>
          <span>an</span>
          <span>extension</span>
          <span>of</span>
          <span>the</span>
          <span>interface</span>
          <span>function.</span>
          <span>It's</span>
          <span>the</span>
          <span>purest</span>
          <span>expression</span>
          <span>of</span>
          <span>personality.</span>
        </p>
      </div>
      <div className=' overflow-hidden'>
        <motion.div className='-mt-[20px]' style={{ scale }}>
          <Image src={BottomWork} alt='image' />
        </motion.div>
      </div>
      <div className='my-10'>
        <p className='text-[#b7ab98] md:text-4xl text-center capitalize font-bold px-4'>
          Making your contribution to innovation and development is a true miracle. Each of us is capable of it. You are invited to participate in turning dreams into reality.
        </p>
      </div>
    </div>

  )
}

export default WorkIntro
