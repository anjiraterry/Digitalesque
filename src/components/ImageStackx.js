import React, { useEffect, useState } from 'react';

import '../index.css';
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import {RxCross1} from 'react-icons/rx'




const ImageStackx = () => {
 
 
 /* useEffect(()=>{
    const img = document.querySelector(".img");
    const shd = document.querySelector(".shd");
    const txtsh = document.querySelector(".txtsh")
    const txtu = document.querySelector(".txtu");
txtu.addEventListener( "click" , ()=> {
  console.log(img);
  img.classList.toggle("scaleUp");
  shd.classList.toggle("shadow");
  txtu.classList.toggle("textUp");
  txtsh.classList.toggle("textShow")
}) ;
})*/
const [isShow , setIsShow] = useState(false)
const [isShowi , setIsShowi] = useState(false)
const [isShowii , setIsShowii] = useState(false)
 
  return (
    <div className='mb-40  '>
      <div className='text-lg  md:px-20 p-8 ' >Our Capabilities</div>
      <div className='md:grid md:grid-cols-2 md:gap-0'>
       <div className=' relative items-center justify-center overflow-hidden cursor-pointer  ' >
       <div>
        <img  className={isShow ? "scaleUp": "noScaleUp"} src= {img1} />
        </div>
        <div className= {isShow ? "shadow": "noShadow "} ></div>
        <div className= {isShow ? "textUp": "textDown "} >
        <div className='flex items-center justify-between pb-7 container text-white'>
        <button onClick={()=> setIsShow(!isShow)} className='text-2xl  font-meduim '>Digital Advisory</button>
        <RxCross1   size={30}  onClick={()=> setIsShow(!isShow)} className={isShowi ? "across": "anx "} />
        </div>
        <p className={isShow ? "textShow": "textNoShow"}>
        Our digital advisory services are to help companies and organizations achieve their goals in innovation and digital transformation in the most efficient way and stay relevant using information technology and digital channels.
        The range of IT consulting services spans from building a long-term digital innovation strategy to immediate transformations like integrations with third-party services, cloud migration, business process automation, consulting on big data, and custom software development.
        </p>
        </div>
      </div>
      <div className=' relative items-center justify-center overflow-hidden cursor-pointer ' >
      <div>
       <img className={isShowi ? "scaleUp": "noScaleUp"} src= {img2} />
       </div>
       <div className= {isShowi ? "shadow": "noShadow "}></div>
       <div className= {isShowi ? "textUp": "textDowni "}>
       <div className='flex items-center justify-between pb-7 container text-white'>
        <button onClick={()=> setIsShowi(!isShowi)} className='text-2xl  font-meduim '>Data Science Consulting</button>
        <RxCross1   size={30}  onClick={()=> setIsShowi(!isShowi)} className={isShowi ? "across": "anx "} />
        </div>
        <p className={isShowi ? "textShow": "textNoShow"}>
       Digitalesque renders data science consulting leveraging Machine Learning, Artificial Intelligence, and Deep Learning technologies to meet our clients’ most deliberate analytics needs. We can share and implement data science best practices to drive your decision-making with careful forecasting and effective root-cause analysis.
       </p>
       </div>
      
    </div>
    <div className=' relative items-center justify-center overflow-hidden cursor-pointer ' >
    <div>
      <img  className={isShowii ? "scaleUp": "noScaleUp"} src= {img3} />
      </div>
      <div className= {isShowii ? "shadow": "noShadow "}></div>
       <div className= {isShowii ? "textUp": "textDownii"}>
       <div className='flex items-center justify-between pb-7 container text-white'>
        <button onClick={()=> setIsShowii(!isShowii)} className='text-2xl  font-meduim '>Digital Culture Advisory</button>
        <RxCross1  size={30}  onClick={()=> setIsShowii(!isShowii)} className={isShowii ? "across": "anx "} />
        </div>
        <p className={isShowii ? "textShow": "textNoShow"}>
      This involves providing training and advice on different digital areas and empowering employees to be able to work within this environment. It also includes developing a strategy that allows companies and organizations to capitalize on the digital world and changing the mindset of employees to explore the ways that technology can help improve prospects.
      Our Digital Culture specialists also help support teams to work collaboratively and to share ideas on digital strategy ensuring everyone is on board and embracing technology
      </p>
     </div>
     </div>
     <div className=' relative items-center justify-center overflow-hidden cursor-pointer ' >
      <div>
       <img className={isShowi ? "scaleUp": "noScaleUp"} src= {img2} />
       </div>
       <div className= {isShowi ? "shadow": "noShadow "}></div>
       <div className= {isShowi ? "textUp": "textDowni "}>
       <div className='flex items-center justify-between pb-7 container text-white'>
        <button onClick={()=> setIsShowi(!isShowi)} className='text-2xl  font-meduim '>Data Science Consulting</button>
        <RxCross1   size={30}  onClick={()=> setIsShowi(!isShowi)} className={isShowi ? "across": "anx "} />
        </div>
        <p className={isShowi ? "textShow": "textNoShow"}>
       Digitalesque renders data science consulting leveraging Machine Learning, Artificial Intelligence, and Deep Learning technologies to meet our clients’ most deliberate analytics needs. We can share and implement data science best practices to drive your decision-making with careful forecasting and effective root-cause analysis.
       </p>
       </div>
      
    </div>
    </div>
    <div className='flex flex-col items-end'><a href = "#" className='text-black text-sm m-12 p-4   underline' >  All Capabilities</a></div>
    
  </div>
  )
  
}



 

export default ImageStackx
