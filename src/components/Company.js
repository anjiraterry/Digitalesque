import React from 'react'

import ImageSlide from './ImageSlide'
import ImageStack from './ImageStack'
import ImageStackii from './ImageStackii'
import { useState } from 'react'





const Company = ({ openNav, setOpenNav}) => {
  return (
    <div>
       <div className= {openNav ? "open" : "close"} >
       <div className=" mt-64 mb-10 text-5xl font-semibold p-6 pb-32 border-solid border-black border-b-2 md:text-7xl md:mt-72 md:pb-40 md:p-20">
        The Company
       </div>
       <div  >
         <ImageSlide/>
       </div>
       <div>
         <div  className=" m-4 text-2xl font-semibold p-4 border-solid ">
           <h1  className="pb-10  border-solid border-black border-b-2 md:pb-20 md:px-32  md:text-3xl">
           We are a digital transformation consultancy and engineering company that delivers cutting-edge solutions for ambitious companies, brands, and founders.</h1>
         </div>
        </div>
        <div className=' mb-32 md:flex md:flex-col md:ml-96  md:px-32'>
        With more than 15 years of experience, we’ve earned a reputation for delivering innovative, value-for-money solutions. From the outset, the decision was made to focus purely on the ICT niche and since that time we have built a reputation for providing leading-edge, tailored solutions for clients drawn from the expertise and field experience of our Engineers and Consultants. Our people have the knowledge, expertise, and know-how that simply cannot be matched.<br/>

<br/>As experienced Digital Transformation consultants, we help you understand emerging technologies, manage ideation, build business cases, and deliver disruptive solutions. Not just innovation by a slide presentation, we roll up our sleeves and build together.
<br/>
<br/>We stand by our philosophy of service and delivery beyond all else and pride ourselves on providing outstanding expertise, professionalism, and client service. Being outcome-driven we ensure the solutions we recommend are focused on our client needs – specifically being able to meet budgetary, timeframes, and functionality requirements.
<br/>
<br/>Importantly, Digitalesque is vendor-neutral meaning the recommendations we make are not influenced by any commercial arrangements – we find the best ICT solution for our client’s specific needs.
        
      </div>
      <div>
         <ImageStack/>
      </div>
      <div className='mb-40'>
        <div  className=" m-4 text-2xl font-semibold p-4  border-solid  border-black border-b-2  md:pb-20 md:px-32  md:text-3xl">
        Digitalesque has a dedicated team of highly skilled professionals who are passionate about delivering the company’s strategy. In a supportive environment, our employees are motivated through performance management systems, and recognition approaches that reward employee contribution.
        </div>
        <div className=' md:flex md:flex-col md:ml-96  md:px-32'>
        <div  className=" m-4 p-4 text-xl border-solid  border-black border-b-2">
           <h1 className=" text-2xl ml font-semibold pb-4 ">Abubakar Abdullahi </h1>
           Abubakar is a skilled digital transformation manager with over 15 years of experience supporting businesses to innovate. optimize ROI, transform and scale their organizations, and succeed
            </div>
        <div  className=" m-4 p-4 text-xl  border-solid  border-black border-b-2">
           <h1 className=" text-2xl font-semibold pb-4 ">Vivian Peters </h1>
           Vivian is a confident and dedicated technology leader that has led different phases of digital transformation initiatives while mentoring and motivating teams, successfully creating and implementing numerous digital change agendas for organizations and individuals
        </div>
        <div  className=" m-4 p-4 text-xl ">
           <h1 className=" text-2xl font-semibold pb-4 ">Daniel Bawa </h1>
           Daniel has 18years’of experience working in class-leading organizations like Intel. He is well-balanced in business-focused program management, digital transformation, enterprise applications and infrastructure/services.
        </div>
        </div> 
      </div>
      <div>
        <ImageStackii/>
      </div>
      <div className='relative'>
      <div  className=" m-4 mb-12 text-2xl font-semibold p-4 mt-32  border-solid  border-black border-b-2 md:pb-20 md:px-32  md:text-3xl">
       If you’re interested in working with us and want to find out more about the results we’ve achieved, we’d love to hear from you.
       </div>    
      </div>
      <div  className='text-black flex flex-col text-sm m-12 items-end  pb-32 right-0 '>
        <p  className=' text-lg  '> Can we do business?</p>
      <a href = "#" className=' underline' >Click this link to give us a shout.</a>
      </div>
      </div>
    </div>
   
  )
}

export default Company
