"use client"

import image01 from '../../public/img1.png'
import image02 from '../../public/img2.png'
import image03 from '../../public/img3.png'
import image04 from '../../public/img4.png'
import image05 from '../../public/img5.png'
import image06 from '../../public/img6.png'
import image07 from '../../public/img7.png'
import image08 from '../../public/img8.png'
import image09 from '../../public/img9.png'
import image10 from '../../public/img10.png'
import image11 from '../../public/img11.png'
import image12 from '../../public/img12.png'



import Image from 'next/image'
import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const ScaleAnimationImg = () => {

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    const lenisRaf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(lenisRaf)
    gsap.ticker.lagSmoothing(0)

    document.querySelectorAll(".img:not([data-origin])").forEach((img, idx) => {
      img.setAttribute("data-origin", idx % 2 === 0 ? "left" : "right")
    })

    gsap.set(".img", { scale: 0, force3D: true })

    const rows = document.querySelectorAll(".row")
    rows.forEach((row, idx) => {
      const rowImages = row.querySelectorAll(".img")

      if (rowImages.length > 0) {
        row.id = `row-${idx}`

        ScrollTrigger.create({
          id: `scaleIn-${idx}`,
          trigger: row,
          start: "top bottom",
          end: "bottom bottom-=10%",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.isActive) {
              const progress = self.progress;
              const easedProgress = Math.min(1, progress * 1.2);
              const scaleValue = gsap.utils.interpolate(0, 1, easedProgress)

              rowImages.forEach((img, idx) => {
                gsap.set(img, {
                  scale: scaleValue,
                  force3D: true
                })
              })

              if (progress > 0.95) {
                gsap.set(rowImages, { scale: 1, force3D: true })
              }
            }
          },

          onLeave: () => {
            gsap.set(rowImages, { scale: 1, force3D: true })
          }
        })


        ScrollTrigger.create({
          id: `scaleOut-${idx}`,
          trigger: row,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.set(rowImages, { scale: 1, force3D: true })
          },
          onUpdate: (self) => {
            if (self.isActive) {
              const scale = gsap.utils.interpolate(1, 0, self.progress)
              rowImages.forEach((img) => {
                gsap.set(img, {
                  scale: scale,
                  force3D: true,
                  clearProps: self.progress === 1 ? "scale" : ""
                })
              })
            } else {
              const isAbove = self.scroll() < self.start
              if (isAbove) {
                gsap.set(rowImages, { scale: 1, force3D: true })
              }
            }
          }

        })

        ScrollTrigger.create({
          id: `marker-${idx}`,
          trigger: row,
          start: "bottom bottom",
          end: "top top",
          onEnter: () => {
            const scaleOut = ScrollTrigger.getById(`scaleOut-${idx}`)
            if (scaleOut && scaleOut.progress === 0) {
              gsap.set(rowImages, { scale: 1, force3D: true })
            }
          },
          onLeave: () => {
            const scaleOut = ScrollTrigger.getById(`scaleOut-${idx}`)
            if (scaleOut && scaleOut.progress === 0) {
              gsap.set(rowImages, { scale: 1, force3D: true })
            }
          },
          onEnterBack: () => {
            const scaleOut = ScrollTrigger.getById(`scaleOut-${idx}`)
            if (scaleOut && scaleOut.progress === 0) {
              gsap.set(rowImages, { scale: 1, force3D: true })
            }
          }
        })

      }
    })

    const handleResize = () => {
      ScrollTrigger.refresh(true)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.ticker.remove(lenisRaf)
      lenis.destroy()
    }
  }, [])

  return (
    <main className='overflow-hidden'>
      <section className='w-[100vw] relative overflow-hidden'>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col"><div className="img" data-origin="right"><Image className='rounded-md sm:rounded-none' src={image10} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="left"><Image className='rounded-md sm:rounded-none' src={image05} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="left"><Image className='rounded-md sm:rounded-none' src={image01} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="right"><Image className='rounded-md sm:rounded-none' src={image04} alt='image' /></div></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col hidden sm:block"></div>
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="right"><Image className='rounded-md sm:rounded-none' src={image06} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col"><div className="img" data-origin="left"><Image className='rounded-md sm:rounded-none' src={image07} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
          <div className="col hidden sm:block"></div>
          <div className="col hidden sm:block"></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="left"><Image className='rounded-md sm:rounded-none' src={image09} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="right"><Image className='rounded-md sm:rounded-none' src={image01} alt='image' /></div></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col hidden sm:block"></div>
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="left"><Image className='rounded-md sm:rounded-none' src={image03} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="left"><Image className='rounded-md sm:rounded-none' src={image11} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
          <div className="col hidden sm:block"></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col"><div className="img" data-origin="left"><Image className='rounded-md sm:rounded-none' src={image05} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="right"><Image className='rounded-md sm:rounded-none' src={image08} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="right"><Image className='rounded-md sm:rounded-none' src={image12} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="left"><Image className='rounded-md sm:rounded-none' src={image01} alt='image' /></div></div>
        </div>
        <div className="row gap-[10px] sm:gap-0 mb-[10px] sm:mb-0">
          <div className="col"><div className="img" data-origin="right"><Image className='rounded-md sm:rounded-none' src={image06} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
          <div className="col"><div className="img" data-origin="right"><Image className='rounded-md sm:rounded-none' src={image09} alt='image' /></div></div>
          <div className="col hidden sm:block"></div>
        </div>
      </section>
    </main>
  )
}

export default ScaleAnimationImg