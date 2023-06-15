import React from 'react'

import ImageSlide from './ImageSlide'
import ImageStack from './ImageStack'
import ImageStackii from './ImageStackii'
import { useState } from 'react'



const Blueprint = ({ openNav, setOpenNav}) => {
  
  return (
    
    <div className= {openNav ? "open" : "close"} >
       <div className=" mt-64 mb-10 text-5xl font-semibold p-6 pb-32 border-solid border-black border-b-2 md:text-7xl md:mt-72 md:pb-40 md:p-20">
        The Blueprint
       </div>
       <div  >
         <ImageSlide/>
       </div>
       <div>
         <div  className=" m-4 text-2xl font-semibold p-4 border-solid ">
           <h1  className="pb-10 md:pb-20 md:px-32  md:text-3xl">
            Our blueprint for digital transformation below gives an overview of the sequence, checklist, and guides at all levels of the organization through the journey ensuring that no area of the strategy is left unattended during the period of change:
           </h1>
         </div>
         <div  className="md:grid md:grid-cols-2 md:gap-5 md:px-20">
         <div className=" m-4 p-4 text-xl border-solid border-black border-t-2">
           <h1 className=" text-2xl font-semibold pb-4 ">Technology</h1>
           Digital transformation involves using digital technologies to remake a process to become more efficient or effective. The idea is to use technology not just to replicate an existing service in a digital form, but to use technology to transform that service into something significantly better.
         </div>
         <div  className=" m-4 p-4 text-xl  border-solid  border-black border-t-2">
            <h1 className=" text-2xl font-semibold pb-4 ">Data</h1>
            Big Data is at the heart of digital transformation because it brings all the points together in one place for a more comprehensive and holistic view of the entire organization's ecosystem. Big data has to enable both the digitization and automation of operations which improves efficiency, spur innovation, and leads to new business models.
         </div>
         <div  className=" m-4 p-4 text-xl font-normal border-solid  border-black border-t-2">
           <h1 className=" text-2xl font-semibold pb-4 "> Process </h1>
            Digital transformation requires an end-to-end mindset, a rethinking of ways to meet customer needs, seamless connection of work activities, and the ability to manage across silos going forward. Process orientation is a natural fit with these needs necessitating radical process (re)engineering.
         </div>
         <div  className=" m-4 p-4 mb-32 text-xl  border-solid border-black border-t-2  ">
          <h1 className=" text-2xl font-semibold pb-4  ">Culture</h1>
          The core driver of digital transformation is a digital culture because it empowers people to deliver results faster by increasing adoption, creating the right organizational alignment needed for the strategy to thrive dramatically reducing the gap between strategy and execution.
        </div>
        </div>
      <div>
         <ImageStack/>
      </div>
     
      <div className='relative'>
      <div  className=" m-4 mb-12 text-2xl font-semibold p-4 mt-32  border-solid  border-black border-b-2 md:pb-20 md:px-32  md:text-3xl">
       If you’re interested in working with us and want to find out more about the results we’ve achieved, we’d love to hear from you.</div>    
      </div>
      <div  className='text-black flex flex-col text-sm m-12 items-end  pb-32 right-0 '>
        <p  className=' text-lg  '> Can we do business?</p>
      <a href = "#" className=' underline' >Click this link to give us a shout.</a>
      </div>
      </div>
    </div>
  )
}

export default Blueprint

