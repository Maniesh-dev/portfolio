"use client"

import image01 from '../../../public/img1.png'
import image02 from '../../../public/img2.png'
import image03 from '../../../public/img3.png'
import image04 from '../../../public/img4.png'
import image05 from '../../../public/img5.png'
import image06 from '../../../public/img6.png'
import image07 from '../../../public/img7.png'
import image08 from '../../../public/img8.png'
import image09 from '../../../public/img9.png'
import image10 from '../../../public/img10.png'
import image11 from '../../../public/img11.png'
import image12 from '../../../public/img12.png'
import image13 from '../../../public/img13.png'


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
    gsap.ticker.add((time) => lenis.raf(time * 1000))
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
            if(self.isActive){
              const progress = self.progress;
              const easedProgress = Math.min(1, progress * 1.2);
              const scaleValue = gsap.utils.interpolate(0, 1, easedProgress)

              rowImages.forEach((img, idx) => {
                gsap.set(img, {
                  scale: scaleValue,
                  force3D: true
                })
              })

              if(progress > 0.95){
                gsap.set(rowImages, {scale: 1, force3D: true})
              }
            }
          },

          onLeave: () => {
            gsap.set(rowImages, {scale: 1, force3D: true})
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
            gsap.set(rowImages, {scale: 1, force3D: true})
          },
          onUpdate: (self) => {
            if(self.isActive){
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
              if(isAbove){
                gsap.set(rowImages, {scale: 1, force3D: true})
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
            if(scaleOut && scaleOut.progress === 0){
              gsap.set(rowImages, {scale: 1, force3D: true})
            }
          },
          onLeave: () => {
            const scaleOut = ScrollTrigger.getById(`scaleOut-${idx}`)
            if(scaleOut && scaleOut.progress === 0){
              gsap.set(rowImages, {scale: 1, force3D: true})
            }
          },
          onEnterBack: () => {
            const scaleOut = ScrollTrigger.getById(`scaleOut-${idx}`)
            if(scaleOut && scaleOut.progress === 0){
              gsap.set(rowImages, {scale: 1, force3D: true})
            }
          }
        })
          
      }
    })

    window.addEventListener("resize", () => {
      ScrollTrigger.refresh(true)
    })
  }, [])

  return (
    <main className='overflow-hidden'>
      <section className='min-h-screen flex flex-col gap-10 overflow-hidden items-center justify-center'>
        <h1>Design and Captivates</h1>
        <p>{`${"( Explore Below )"}`}</p>
      </section>
      <section className='w-[100vw] relative overflow-hidden'>
        <div className="row">
          <div className="col"><div className="img" data-origin="right"><Image src={image01} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="left"><Image src={image02} alt='image'/></div></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="left"><Image src={image03} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="right"><Image src={image04} alt='image'/></div></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="right"><Image src={image05} alt='image'/></div></div>
          <div className="col"><div className="img" data-origin="right"><Image src={image06} alt='image'/></div></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"><div className="img" data-origin="left"><Image src={image07} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="left"><Image src={image08} alt='image'/></div></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="right"><Image src={image09} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="right"><Image src={image01} alt='image'/></div></div>
        </div>
        <div className="row">
          <div className="col"><div className="img" data-origin="right"><Image src={image10} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="left"><Image src={image03} alt='image'/></div></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="left"><Image src={image11} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="right"><Image src={image12} alt='image'/></div></div>
        </div>
        <div className="row">
          <div className="col"><div className="img" data-origin="left"><Image src={image05} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="right"><Image src={image08} alt='image'/></div></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="right"><Image src={image12} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="left"><Image src={image01} alt='image'/></div></div>
        </div>
        <div className="row">
          <div className="col"><div className="img" data-origin="right"><Image src={image06} alt='image'/></div></div>
          <div className="col"></div>
          <div className="col"><div className="img" data-origin="left"><Image src={image09} alt='image'/></div></div>
          <div className="col"></div>
        </div>
      </section>
      <section className='min-h-screen flex flex-col gap-10 overflow-hidden items-center justify-center'>
        <h1>Design and Captivates</h1>
        <p>{`${"( Explore Below )"}`}</p>
      </section>
    </main>
  )
}

export default ScaleAnimationImg