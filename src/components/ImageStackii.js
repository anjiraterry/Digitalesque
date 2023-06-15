import React from 'react'
import '../index.css';
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"

const ImageStackii = () => {
  return (
    <div className='mb-40'>
       <div className='text-lg md:px-20  p-8 ' >Our Insights</div>
        <div className='md:grid md:grid-cols-4 md:gap-2'>
       
            <div className=' relative items-center justify-center overflow-hidden'>
            <img src={img1} />
            <div className='noShadow'></div>
            <a href = "#" className='text-white text-lg m-12 absolute bottom-0 ' > Tuning into Africa’s digital transformation <br/> LEARN MORE</a>
            </div>
            <div className=' relative items-center justify-center overflow-hidden'>
            <img src={img2} />
            <div className='noShadow'></div>
            <a href = "#" className='text-white text-lg m-12 absolute bottom-0 ' > Digital transformation in Africa: three lessons from India's experience <br/> LEARN MORE</a>
            </div>
            <div className=' relative items-center justify-center overflow-hidden'>
            <img src={img3} />
            <div className='noShadow'></div>
            <a href = "#" className='text-white text-lg m-12 absolute bottom-0 ' > The promises and perils of Africa’s digital revolution<br/> LEARN MORE</a>
            </div>
            <div className=' relative items-center justify-center overflow-hidden'>
            <img src={img1} />
            <div className='noShadow'></div>
            <a href = "#" className='text-white text-lg m-12 absolute bottom-0  ' > Improving Africa’s digital and innovation ecosystems: five ways forward <br/> LEARN MORE</a>
            </div>
            
           
        </div>
       
    </div>
  )
}

export default ImageStackii
