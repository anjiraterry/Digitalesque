import { useEffect, useState } from 'react'
import '../index.css';
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import React from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight, BsDashLg} from 'react-icons/bs'





const ImageSlide = ({autoSlide = true , autoSlideInterval=5000 }) => {
 

  
 
 
  const slides = [
    {
      img : img1 ,
      text :  "Our PURPOSE is to improve African lives through the digital transformation of Africa one project at a time" 
    
    },
    {
      img : img2 ,
      text : "  Our VISION is to be the premier human-centric digital transformation agency in Africa."
    
    },
    {
      img : img3 ,
      text : " Our MISSION is to offer bespoke, trusted advanced digital solutions to the challenges of individuals, businesses, and governments in Africa by transforming systems." 
  
    }
  ]

  const [currentIndex, setCurrentIndex ]= useState(0)

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
  setCurrentIndex(newIndex);
};
const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1 ;
  const newIndex = isLastSlide ? 0 : currentIndex + 1
 
  setCurrentIndex(newIndex);
};

useEffect(()=>{
 
  const slideInterval =  setInterval(() => {
   setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
 
   }, 5000);
  return () => clearInterval(slideInterval)
},[])

const goToSlide = (slideIndex ) => {
  setCurrentIndex(slideIndex)
}

  return (
    <div className='max-w-[1400px] h-[740px] w-full m-auto px4 relative group md:p-20'>
        <div className=  " noShadow md:inset-20"></div>
       <div style={{backgroundImage: `url(${slides[currentIndex].img })`}} className='w-full h-full bg-center bg-cover duration-500'>
     
        <p className='absolute text-xl md:text-2xl text-white p-10 md:p-40 bottom-10 '> {slides[currentIndex].text }</p>
        <div className=' absolute m-4 ml-10 bottom-2  flex items-center  py-2 md:p-32 justify-center text-5xl text-white '>
         {slides.map((slide, slideIndex) =>(
          <div   className={` cursor-pointer  ${currentIndex === slideIndex ? " text-teal-600" : "bg-opacity-50"} `} >
            <div
          key={slideIndex}
          onClick={()=> goToSlide(slideIndex)}
        >
             <BsDashLg/>
           
          </div>
          </div>
         ))}
        </div>
       </div>
       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
       </div>
       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
       </div>
    </div>
  )
}

export default ImageSlide
