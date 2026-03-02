import React from 'react'

const WorkIntro2 = () => {
  return (
    <section className='md:min-h-screen w-full p-10 flex flex-col justify-center items-center gap-10'>
      <div className='text-4xl sm:text-6xl md:text-7xl font-bold capitalize text-center text-[#b7ab98]'>
        <p>Together with you, we create new stories. Modern, proficient, successful projects.</p>
      </div>
      <div >
        <p className='text-sm text-[#EB5B00]'>I deliver I'm responsible for:</p>
        <p className='text-2xl'>Engaging user experience, world class web design & development, unique brand identity solutions to shine.</p>
      </div>
      <div className='flex flex-col md:flex-row items-center text-center gap-5'>
        <p>My clients get industry leading digital products, all looking into the future. Years pass by and designs i provide are still worthy.</p>
        <p>I make it possible as 2+ years experience in digital world doesn’t go unnoticed.</p>
        <p>I provide end-to-end web development and design services.</p>
      </div>
    </section>
  )
}

export default WorkIntro2