'use client'

import localFont from "next/font/local";
const xirod = localFont({ src: "../fonts/Xirod.otf" });
import forkIcon from '../../public/forkicon.png'
import Image from "next/image";

const Expertise = () => {
  return (
    <section className="min-h-screen w-full p-4">
      <h2 className={`text-4xl md:text-7xl text-center mt-10 text-[#b7ab98] ${xirod.className}`}>Expertise</h2>
      <p className="md:text-6xl text-2xl mt-5 md:mt-10 text-center capitalize">Broadcasting Your brand worldwide with</p>
      <div className="flex justify-center my-5 md:my-8">
        <Image src={forkIcon} alt='image' className="w-[80px]" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10">
        <div className="flex justify-between items-center gap-10 px-1 py-2 font-thin bg-[#EB5B00] rounded-xl">
          <p className="text-sm text-black">w /.</p>
          <p className="text-2xl">Feeling</p>
          <p></p>
        </div>
        <div className="flex justify-between items-center gap-10 px-1 py-2 font-thin bg-[#EB5B00] rounded-xl">
          <p className="text-sm text-black">w /.</p>
          <p className="text-2xl">Experience</p>
          <p></p>
        </div>
        <div className="flex justify-between items-center gap-10 px-1 py-2 font-thin bg-[#EB5B00] rounded-xl">
          <p className="text-sm text-black">w /.</p>
          <p className="text-2xl">Value</p>
          <p></p>
        </div>
      </div>

      <div className="md:my-8 text-center mt-5">
        <p>From sleek Design to seamless functionality, I turn ideas into digital experiences tailored for your product, audience, and goals.</p>
        <p>I work with startups, growing agencies, and enterprises, adapting my tools to each task.</p>
      </div>

    </section>
  )
}

export default Expertise