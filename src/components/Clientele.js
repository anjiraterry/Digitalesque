import React from 'react'

import ImageSlide from './ImageSlide'
import ImageStack from './ImageStack'
import ImageStackii from './ImageStackii'
import { useState } from 'react'



const Clientele = ({ openNav, setOpenNav}) => {
  
  return (
    
    <div className= {openNav ? "open" : "close"} >
       <div className=" mt-64 mb-10 text-5xl font-semibold p-6 pb-32 border-solid border-black border-b-2 md:text-7xl md:mt-72 md:pb-40 md:p-20">
        The Clientele
       </div>
       <div  >
         <ImageSlide/>
       </div>
       <div>
     
      <div className='mb-40'>
        <div  className=" m-4 text-2xl font-semibold p-4  border-solid  border-black border-b-2  md:pb-20 md:px-32  md:text-3xl">
        We have worked closely and successfully with government departments and major companies, and pride ourselves on meeting and exceeding our client’s high expectations. Here, you can find a selection of the many client organisations we already work closely alongside:
        </div>
        <div className=' md:flex md:flex-col md:ml-96  md:px-32'>
        <div  className=" m-4 p-4 text-xl border-solid  border-black border-b-2">
           <h1 className=" text-2xl ml font-semibold pb-4 ">The Central Bank of Nigeria </h1>
           Set-up of the eNaira New Media Infrastructure. Built eNaira.gov.ng and the Web App.
        </div>
        <div  className=" m-4 p-4 text-xl  border-solid  border-black border-b-2">
           <h1 className=" text-2xl font-semibold pb-4 ">Titan Trust Bank </h1>
           Web portal Development and Brand Identity
        </div>
        <div  className=" m-4 p-4 text-xl  border-solid  border-black border-b-2">
           <h1 className=" text-2xl font-semibold pb-4 ">The Securities and Exchange Commission (SEC) </h1>
           Website Redesign and Administrative Portals Development (Ongoing)
        </div>
        <div  className=" m-4 p-4 text-xl border-solid  border-black border-b-2 ">
           <h1 className=" text-2xl font-semibold pb-4 ">The Infrastructural Corporation (InfraCo) </h1>
           Brand Identity, ICT Infrastructure and Website Development
        </div>
        <div  className=" m-4 p-4 text-xl border-solid  border-black border-b-2">
           <h1 className=" text-2xl font-semibold pb-4  ">The Nigeria Incentive-Based Risk Sharing System for Agricultural Lending (NIRSAL) </h1>
           ICT Infrastructure and Brand Identity Development.
        </div>
        <div  className=" m-4 p-4 text-xl border-solid  border-black border-b-2">
           <h1 className=" text-2xl font-semibold pb-4 ">The Taj Bank</h1>
           Brand Identity Development and ICT Infrastructure Development
        </div>
        <div  className=" m-4 p-4 text-xl border-solid  border-black border-b-2">
           <h1 className=" text-2xl font-semibold pb-4 ">The CBN Center for Economics and Finance (CBN-CENEF) </h1>
           Brand Identity and learning management System Integration
        </div>
        <div  className=" m-4 p-4 text-xl border-solid  border-black border-b-2 ">
           <h1 className=" text-2xl font-semibold pb-4 ">The Office of the Chief Economic Adviser to the President</h1>
           ICT Infrastructure and New Media Orchestration for The World Economic Forum on Africa
        </div>
        <div  className=" m-4 p-4 text-xl border-solid  border-black border-b-2">
           <h1 className=" text-2xl font-semibold pb-4 ">The Nigeria Police Force </h1>
           Police Complaint Units’ ICT integration
        </div>
        <div  className=" m-4 p-4 text-xl ">
           <h1 className=" text-2xl font-semibold pb-4 ">The Bayelsa State Government </h1>
           New Media Set up and Website Development for The Bayelsa Jazz Festival
        </div>
        </div> 
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

export default Clientele

