"use client"

// import SplitType from 'split-type'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const TextAnimation = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    // new SplitType(scope.current, {
    //   types: 'lines, words',
    //   tagName: 'span'
    // })

    scope.current.querySelectorAll('span').forEach((el: any) => {
      if (el.innerText === 'Selectively' ||
        el.innerText === 'Skilled' ||
        el.innerText === 'Visually' ||
        el.innerText === 'Stunning' ||
        el.innerText === 'Experiences.') {
        el.style.color = '#EB5B00'
      }
    })

  }, [])
  return (
    <div className="text-[#b7ab98] flex flex-col p-4 text-4xl sm:text-6xl md:text-7xl capitalize font-bold">
      <p
        className='flex flex-wrap sm:gap-x-5 sm:gap-y-4 gap-3'
        ref={scope}>
        {/* I'm Selectively Skilled Creative Developer With Strong Focus On Producing Visually Stunning & Engaging Digital Experiences. */}
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>I'm</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Selectively</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Skilled</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Creative</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Developer</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>With</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Strong</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Focus</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>On</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Producing</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Visually</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Stunning</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>&</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Engaging</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Digital</motion.span>
        <motion.span initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}>Experiences.</motion.span>
      </p>
    </div>
  )
}

export default TextAnimation