import React from 'react'
import ImageSlide from './ImageSlide'
import ImageStack from './ImageStack'
import ImageStackii from './ImageStackii'
import { useState } from 'react'



const Insights = ({ openNav, setOpenNav}) => {
  
  return (
    
    <div className= {openNav ? "open" : "close"} >
       <div className=" mt-64 mb-10 text-5xl font-semibold p-6 pb-32 border-solid border-black border-b-2 md:text-7xl md:mt-72 md:pb-40 md:p-20">
        Our Insights
       </div>
     
       <div>
         <div  className=" m-4 text-2xl font-semibold p-4 border-solid ">
           <h1  className="pb-10 md:pb-20 md:px-32  md:text-3xl">
           We discuss and share ideas that will change your business and our society. The Our insights cover topics ranging from AI, data and transformation to major industry developments, present tech innovations and other issues that impact the digital future of Africa.</h1>
         </div>
        
     
      <div>
        <ImageStackii/>
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

export default Insights
