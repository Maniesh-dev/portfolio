'use client'

import localFont from "next/font/local";
const xirod = localFont({ src: "../fonts/Xirod.otf" });

const About = () => {
  return (
    <section className="min-h-screen w-full p-4">
      <h2 className={`text-5xl md:text-7xl text-center mt-10 text-[#b7ab98] ${xirod.className}`}>About Me</h2>

    
    </section>
  )
}

export default About