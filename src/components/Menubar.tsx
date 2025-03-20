"use client"

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MenuBtn from './ui/MenuBtn'
import Navbar from './Navbar'

const variants = {
  open: { 
    width: 400, 
    height: 650, 
    top: "-25px", 
    right: "-25px" ,
    transition: {duration: 0.75, ease: [0.76, 0, 0.24, 1]}
  },
  closed: { 
    width: 80, 
    height: 30, 
    top: 0, 
    right: 0,
    transition: {duration: 0.75, ease: [0.76, 0, 0.24, 1]}
  },
}

const Menubar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className='fixed right-10 top-10 z-20'>
      <AnimatePresence mode='wait'>
        <motion.nav 
          initial='closed'
          variants={variants}
          animate={isActive ? 'open' : 'closed'}
          className='w-[400px] h-[650px] bg-[#EB5B00] rounded-2xl relative'
        >
          <AnimatePresence mode='wait'>
            {isActive && <Navbar/>}
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>
      <MenuBtn isActive={isActive} setIsActive={setIsActive}/>
    </header>
  )
}

export default Menubar