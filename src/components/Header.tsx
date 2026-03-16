"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import localFont from 'next/font/local';
import Logo from '../../public/logoWhite.png'

const xirod = localFont({ src: "../fonts/Xirod.otf" });
const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() === 0) {
        setIsOpen(false);
      } else {
        if (direction < 0) {
          setIsOpen(true);
        } else {
          setIsOpen(true);
        }
      }
    }
  });



  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ marginInline: "var(--margin-from)", paddingInline: "var(--padding-from)" }}
        // animate={{ marginInline: isOpen ? "10%" : "0", paddingInline: isOpen ? "5%" : "0" }}
        animate={{
          marginInline: isOpen ? "var(--margin-to)" : "0",
          paddingInline: isOpen ? "var(--padding-to)" : "0"
        }}
        transition={{ duration: 0.5 }}
        className='fixed z-15 top-6 left-3 right-3 md:left-[125px] md:right-[125px]
        sm:[--margin-from:5%] sm:[--margin-to:0%] 
        sm:[--padding-from:5%] sm:[--padding-to:0%]
        xl:[--margin-from:10%] xl:[--margin-to:5%] 
        xl:[--padding-from:10%] xl:[--padding-to:5%]
        '>
        <motion.div
          initial={{
            borderRadius: '0',
            boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px 0px 0px 0px',
            backdropFilter: "blur(0px)",
            borderTop: 0
          }}
          animate={{
            borderRadius: isOpen ? "1000px" : "0",
            boxShadow: isOpen ? 'rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px 2px 8px 0px' : 'rgba(255, 255, 255, 0.2) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px 0px 0px 0px',
            backdropFilter: isOpen ? "blur(6px)" : "blur(0px)",
            borderTop: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
          className='flex items-center justify-between xl:grid grid-cols-[25%_50%_25%] backdrop-blur rounded-full px-4'>
          <div className='flex items-center justify-center'>
            <Link href="/" className='flex items-center justify-center'>
              <img src={Logo.src} alt="Logo" className='w-[120px]' />
            </Link>
          </div>
          <div className='py-1 sm:px-0 hidden xl:flex items-center justify-center gap-4'>
            <p className={`${xirod.className} text-sm sm:text-xl flex flex-col sm:flex-row sm:gap-2`}>
              <span>Designer +</span>
              <span> Developer</span>
            </p>
          </div>
          {/* <div className='block xl:hidden'></div> */}
          <div className='hidden md:flex items-center justify-center xl:justify-end'>
            <Link href="/contact" className="w-full flex justify-end">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center justify-center w-full space-x-2 cursor-pointer"
              >
                <span className='text-sm'>Let's Connect</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </motion.div>
      </motion.header>
    </AnimatePresence>
  )
}

const navItems = [
  { name: "Index", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
]

export default Header