import React from 'react'
import ImageSlide from './ImageSlide'
import ImageStackx from './ImageStackx.js'
import ImageStackii from './ImageStackii'
import { useState } from 'react'



const Capabilities = ({ openNav, setOpenNav}) => {
  
  return (
    
    <div className= {openNav ? "open" : "close"} >
       <div className=" mt-64 mb-10 text-5xl font-semibold p-6 pb-32 border-solid border-black border-b-2 md:text-7xl md:mt-72 md:pb-40 md:p-20">
        Our Capabilities       </div>
       <div  >
         <ImageSlide/>
       </div>
       <div>
         <div  className=" m-4 text-2xl font-semibold p-4 border-solid ">
           <h1  className="pb-10 md:pb-20 md:px-32  md:text-3xl">
           Maximizing the potential of technology within your company requires a mindset shift. Our strategic consulting is backed by real-world results. We don't just talk about transformation; we make it real. </h1>
         </div>
        
        
      <div>
         <ImageStackx/>
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

export default Capabilities
