import React from 'react'

const Footer = ({ openNav, setOpenNav}) => {
  return (
    <div className= {openNav ? "open" : "close"} >
    <div className='bg-teal-600 pt-10 m-0 pb-8 md:p-20 '>
      <div className='md:grid md:grid-cols-4 grid-rows-2 '>
       <div className=" m-4 p-4 text-xl border-solid  border-white border-t-2">
           <h1 className=" text-lg text-white  pb-4 ">The Digital <br/> Transformation Agency</h1>
          </div>
         <div  className="md:col-start-3 m-4 p-4 text-xl  border-solid  border-white border-t-2 md:pb-10">
            <h1 className=" text-lg text-white  pb-4 ">Instagram</h1>
            <h1 className=" text-lg text-white  pb-4 ">Twitter</h1>
            <h1 className=" text-lg text-white  pb-4 ">LinkedIn</h1>
           </div>
         <div  className=" m-4 p-4 text-xl  border-solid  border-white border-t-2 md:pb-10">
           <h1 className=" text-lg text-white  pb-4 "> Privacy Policy </h1>
           <h1 className=" text-lg text-white  pb-4 ">Terms & Conditions</h1>
            <h1 className=" text-lg text-white  pb-4 ">Site by Anjira Terry</h1>
            
          </div>
         <div  className=" m-4 p-4 text-xl border-solid  border-white border-t-2 md:pb-10  ">
          <h1 className=" text-lg text-white  pb-4 ">For new business enquiries <br/> office@thecorporation.xyz</h1>
         </div>
         <div  className="md:col-start-3 m-4 p-4 text-xl border-solid  border-white border-t-2 md:pb-10  ">
          <h1 className=" text-lg text-white  pb-4 ">8 IBM Haruna Str, Utako District, Abuja 900211</h1>
         </div>
         <div  className=" m-4 p-4 text-xl border-solid  border-white border-t-2 md:pb-10  ">
          <h1 className=" text-lg text-white  pb-4 ">All Rights Reserved 2023</h1>
         </div>
         </div>
    </div>
    </div>
  )
}

export default Footer
