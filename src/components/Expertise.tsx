'use client'

import { xirod } from "../lib/fonts";
import forkIcon from '../../public/forkicon.png'
import Image from "next/image";
import { motion } from "motion/react";

const processSteps = [
  { label: "Discover", icon: "◈" },
  { label: "Define", icon: "◇" },
  { label: "Design", icon: "△" },
  { label: "Develop", icon: "□" },
  { label: "Deploy", icon: "○" },
]
const Expertise = () => {
  return (
    <section className="min-h-screen w-full p-4">

      <motion.h1
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className={`${xirod.className} text-4xl md:text-7xl lg:text-[9rem] leading-none text-center z-10`}
      >
        <span className="text-white">EXPERT</span>
        <span className="text-[#EB5B00]">ISE</span>
      </motion.h1>
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

      {/* Process Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(235,91,0,0.04)_0%,_transparent_60%)]" />

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <p className="text-sm tracking-[6px] uppercase text-[#EB5B00] mb-4 font-mono">Process</p>
          <h2 className={`${xirod.className} text-4xl md:text-6xl text-white`}>HARMONY IN MAKING</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative z-10">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-4 cursor-default"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10 group-hover:border-[#EB5B00]/60 flex items-center justify-center transition-all duration-500 group-hover:bg-[#EB5B00]/5">
                <span className="text-2xl md:text-3xl text-[#b7ab98] group-hover:text-[#EB5B00] transition-colors duration-500">
                  {step.icon}
                </span>
              </div>
              <span className="text-xs tracking-[3px] uppercase text-[#b7ab98] group-hover:text-[#EB5B00] transition-colors duration-500">
                {step.label}
              </span>
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute h-px w-12 bg-white/10" style={{ left: `calc(${(i + 1) * 20}% - 24px)`, top: '-48px' }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-4xl mx-auto relative z-10"
        >
          <p className="text-[#b7ab98] leading-relaxed">
            From sleek design to seamless functionality, I turn ideas into digital experiences tailored for your product, audience, and goals. I work with startups, growing agencies, and enterprises — adapting my tools to each task.
          </p>
        </motion.div>
      </section>

    </section>
  )
}

export default Expertise