"use client"

import { ArrowUp, ArrowUpRight} from 'lucide-react'
import React from 'react'
import logo from "../../public/logoWhite.png"
import Image from 'next/image'
import localFont from 'next/font/local';
import SwapText from '@/components/ui/SwapText';
import { motion } from 'framer-motion';

const xirod = localFont({ src: "../fonts/Xirod.otf" });
const Contact = () => {
  return (
    <section className='max-h-screen w-full md:pt-[50px] md:px-10 flex flex-col justify-between pb-3 gap-20 md:gap-44 lg:gap-20'>

      <div className='flex justify-between px-4 pt-12'>
        <div 
          className='text-4xl md:text-5xl flex flex-col md:flex-row md:gap-4 text-nowrap'>
          “The End for the <span className='text-[#EB5B00] font-semibold'>New Beginning”</span>
        </div>
        <div className='hidden lg:flex gap-10'>
          <div className='flex gap-2 group/insta'>
            <SwapText
              finalText={`${"{ Instagram }"}`}
              initialText={`${"{ Instagram }"}`}
              className='cursor-pointer h-[25px] '
              supportsHover
            />
            <ArrowUpRight size={20} className='group-hover/insta:rotate-45 transition-all duration-500'/>
          </div>
          <div className='flex gap-2 group/git'>
          <SwapText
              finalText={`${"{ Github }"}`}
              initialText={`${"{ Github }"}`}
              className='cursor-pointer h-[25px] '
              supportsHover
            />
            <ArrowUpRight size={20} className='group-hover/git:rotate-45 transition-all duration-500'/>
          </div>
        </div>
      </div>

      

      <div className='flex items-center'>
        <div className='hidden lg:block'>
          <Image src={logo} alt="" className='object-cover'/>
        </div>
        <div className='w-full flex flex-col gap-3 lg:pl-10'>
          <div 
            className='flex items-end justify-between px-5 pb-4 gap-5'>
            <div>Hello</div>
            <div className='md:text-4xl'>manieshsanwal.dev@gmail.com</div>
          </div>
          <div className='flex items-end justify-between px-5 border-b pb-4'>
            <div>Call</div>
            <div className='text-4xl'>+91 123456789</div>
          </div>
          <div className='flex items-center justify-between px-5 border-b pb-4 gap-10'>
            <input type="text" placeholder='Leave a message...' className='w-full bg-transparent  py-1 outline-none focus:border-b'/>
            <button className='bg-white text-black px-5 py-1 rounded-full'>Send</button>
          </div>
        </div>
      </div>


      <div className='flex flex-col lg:flex-row justify-between overflow-hidden border-b lg:gap-10 px-4'>
        <div className=' w-full pt-4'>
          <p className={`text-5xl md:text-7xl lg:text-[120px] lg:-mb-[30px] lg:-mt-[30px]  ${xirod.className}`}>Contact</p>
        </div>

        <div className='flex flex-col w-full justify-between py-3 gap-4 lg:gap-1'>
          <button className='flex gap-2 justify-end scroll-smooth' onClick={() => window.scrollTo(0, 0)}>
            <SwapText
              finalText={`${"{"} Back to Top ${"}"}`}
              initialText={`${"{"} Back to Top ${"}"}`}
              className='cursor-pointer h-[25px] '
              supportsHover
            />
            <ArrowUp size={20}/>
          </button>
          <div className='flex justify-between items-end'>
            <div className='text-[#EB5B00] text-sm'>&copy; Design & Build by <br /> Maniesh Sanwal </div>
            <div className='text-5xl'>&copy;{new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact