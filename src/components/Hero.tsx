"use client"

import React, { useEffect } from 'react'
import localFont from "next/font/local";
import GibberishText from './ui/GibberishText'
import ContactBtn from './ui/ContactBtn';
import InfiniteScroll from './ui/InfiniteScroll';


const xirod = localFont({ src: "../fonts/Xirod.otf" });
const Hero = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getSpots = () => {
    const date = new Date();
    const monthIdx = date.getMonth();
    const year = date.getFullYear();
    const month = months[monthIdx];

    return { month, year };
  };

  useEffect(() => {
    getSpots();
  }, []);

  return (
    <div className=" min-h-[90vh] sm:min-h-screen w-full bg-black flex relative items-center justify-center overflow-x-clip">
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center overflow-hidden'>
        {[...Array(50)].map((_, index) => (
          <div key={index}>
            {[...Array(32)].map((_, index) => (
              <div key={index} className={`overflow-hidden border border-gray-900 w-8 h-8`}></div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <InfiniteScroll
        bgStyle="bg-[#EB5B00] to-sky-400 absolute top-[400px] rotate-[37deg] left-[100px]"
        textStyle="text-black font-semibold uppercase"
        iconStyle="text-black animate-antiClockWiseRotate transition-all"
        rowAnimation="animate-moveLeft transition-all"
      />
      <InfiniteScroll
        bgStyle="bg-[#EB5B00] to-sky-400 absolute z-10 -left-[10px] -right-[20px] -bottom-[100px] -rotate-[10deg] -translate-y-[140px] -translate-x-[5px]"
        textStyle="text-black font-semibold uppercase"
        iconStyle="text-black animate-antiClockWiseRotate transition-all"
        rowAnimation="animate-moveLeft transition-all"
      />
      <InfiniteScroll
        bgStyle="bg-[#EB5B00] to-sky-400 absolute z-10 -left-[10px] -right-[20px] -bottom-[70px] rotate-[10deg] -translate-y-[110px]"
        textStyle="text-black font-semibold uppercase"
        iconStyle="text-black animate-clockWiseRotate transition-all"
        rowAnimation="animate-moveRight transition-all"
      />

      <InfiniteScroll
        bgStyle="bg-[#EB5B00] xl:hidden to-sky-400 absolute left-[0px] right-[0px] top-[110px]"
        textStyle="text-black font-semibold uppercase"
        iconStyle="text-black animate-clockWiseRotate transition-all"
        rowAnimation="animate-moveRight transition-all"
      />

      <div className="absolute w-full flex items-center justify-center flex-col gap-4">
        <div className="flex items-center justify-center border border-gray-600 gap-4 rounded-full px-4 py-2 bg-black mb-10 xl:mb-0">
          <div className="w-3 h-3 rounded-full bg-green-500">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
          </div>
          <p className="primaryFont text-[#b7ab98]">
            Spots Available For {getSpots().month} {getSpots().year}
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-10 xl:gap-4 relative">
          <div className={`${xirod.className} flex justify-center items-center flex-col`}>
            <div className="text-5xl md:text-6xl xl:text-8xl">
              <GibberishText text="MANIESH" />
            </div>
            <div className="text-5xl md:text-6xl xl:text-8xl">
              <GibberishText text="SANWAL" />
            </div>
          </div>
          <p className="text-center primaryFont capitalize text-xl text-[#b7ab98]">
            Engaging user experience, world class web design & development, <br />
            unique brand identity solutions to shine.
          </p>
          <ContactBtn text="Book a Call" className="px-4 py-1 font-semibold cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Hero