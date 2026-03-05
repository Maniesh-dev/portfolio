'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import localFont from 'next/font/local';

const Xirod = localFont({ src: "../fonts/Xirod.otf" });
const NavLinks = [
  { title: "Index", url: "/" },
  { title: "Work", url: "/work" },
  { title: "About", url: "/about" },
  { title: "Expertise", url: "/expertise" },
  { title: "Contact", url: "/contact" },
]

const SocialLinks = [
  { title: "Github", url: "#" },
  { title: "LinkedIn", url: "#" },
  { title: "Dribbble", url: "#" },
  { title: "Whatsapp", url: "#" },
]

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateX: -20,
    translateY: 80
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + (i * 0.1),
      ease: [0.215, 0.61, 0.355, 1]
    }
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] }
  }
}

const slideIn = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + (i * 0.1),
      ease: [0.215, 0.61, 0.355, 1]
    }
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] }
  }
}

const Navbar = ({ onNavigate }: { onNavigate?: () => void }) => {
  const pathname = usePathname()

  return (
    <div className='h-full pt-20 pb-10 box-border flex flex-col justify-between'>
      <nav className='flex flex-col'>
        {NavLinks.map((link, i) => {
          const isActive = pathname === link.url
          return (
            <div key={i} className='perspective-[1000px] perspective-origin-bottom relative isolate group/link '>
              <motion.div
                custom={i}
                variants={perspective}
                initial='initial'
                animate='enter'
                exit='exit'
                className='py-4 flex items-center'
              >
                <div className={`absolute border-0 left-0 w-full bg-black z-[-1] transition-all duration-500 ${isActive ? 'h-full' : 'h-0 group-hover/link:h-full'
                  }`}></div>
                <Link
                  href={link.url}
                  onClick={onNavigate}
                  className={`${Xirod.className} text-4xl font-extrabold uppercase px-10 transition-colors ${isActive
                      ? 'text-[#EB5B00]'
                      : 'text-black group-hover/link:text-[#EB5B00]'
                    }`}
                >
                  {link.title}
                </Link>
                {isActive && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB5B00] ml-3 animate-pulse shadow-[0_0_8px_rgba(235,91,0,0.6)]" />
                )}
              </motion.div>
            </div>
          )
        })}
      </nav>

      <div>
        {SocialLinks.map((link, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={slideIn}
            initial='initial'
            animate='enter'
            exit='exit'
            className='flex w-full'
          >
            <div className='flex w-full items-center justify-center gap-3 '>
              <div className='h-[1px] w-[10%] flex flex-1 bg-black rounded-4xl'></div>
              <Link href={link.url} className='text-black text-center tracking-[5px] mb-3 font-semibold pr-10'>
                {link.title}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Navbar