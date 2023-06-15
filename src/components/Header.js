
 /*
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="m-0 h-full  mb-4 mt-2 flex flex-col bg-teal-600 gap-2 p-12 justify-items-auto" >
      <Typography
        as="li"
        variant="small"
        color="white"
        className=" content-center p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
        
      >
        <a href="#" className="flex items-center">
          The Company
        </a>
        <p className=" text-sm font-medium p-0">Everything you need to know about our brand core.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <a href="#" className="flex items-center">
          The Blueprint
        </a>
        <p className=" text-sm font-medium p-0">Our detailed plan on how we engage in business.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <a href="#" className="flex items-center">
           The Clientele
        </a>
        <p className=" text-sm font-medium p-0">The individuals and organizations we have served.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <a href="#" className="flex items-center">
          Our Capabilities
        </a>
        <p className=" text-sm font-medium p-0">More details on the kind of workload we can carry.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <a href="#" className="flex items-center">
          Our Insights
        </a>
        <p className=" text-sm font-medium p-0">Thoughts from us or our friends on the industry.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <a href="#" className="flex items-center">
          Our Contacts
        </a>
        <p className=" text-sm font-medium p-0">A list of the options to connect with our firm.</p>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-black">
        <Typography
          as="a"
          href="#"
          className=" text-teal-600 text-3xl mr-4 cursor-pointer py-1.5 font-semibold"
        >
          Digitalesque
        </Typography>
        <div className="hidden lg:block">Menu</div>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto h-full">
          {navList}
         
        </div>
      </MobileNav>
    </Navbar>
  );
}*/
import React from 'react'
import { useState, useEffect } from "react";
import {
  Navbar, MobileNav, Typography
 
} from "@material-tailwind/react";
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Header = ({ openNav, setOpenNav}) => {
 
 
  const navList = (
    <ul className="m-0 h-full  md:flex md:flex-col md:ml-96  md:px-32 bg-teal-600 gap-2 p-12 justify-items-auto" >
       
      <Typography
        as="li"
        variant="small"
        color="white"
        className=" content-center p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
        
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/company" className="flex items-center">
          The Company
        </Link>
        <p className=" text-sm font-medium p-0">Everything you needknow about our brand core.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/blueprint"  className="flex items-center">
          The Blueprint
        </Link>
        <p className=" text-sm font-medium p-0">Our detailed plan on how we engage in business.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/clientele"  className="flex items-center">
           The Clientele
        </Link>
        <p className=" text-sm font-medium p-0">The individuals and organizations we have served.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/capabilities"  className="flex items-center">
          Our Capabilities
        </Link>
        <p className=" text-sm font-medium p-0">More details on the kind of workload we can carry.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold border-solid border-white border-b-2"
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/insights"  className="flex items-center">
          Our Insights
        </Link>
        <p className=" text-sm font-medium p-0">Thoughts from us or our friends on the industry.</p>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-2 pb-8 mb-2 text-2xl font-semibold "
      >
        <Link  onClick={() =>{ setOpenNav(!openNav); window.scrollTo(0,0)} } to="/contacts"  className="flex items-center">
          Our Contacts
        </Link>
        <p className=" text-sm font-medium pb-16">A list of the options to connect with our firm.</p>
      </Typography>
    </ul>
  );
 
  return (
   <div>
      <Navbar className="  items-center mx-auto max-w-screen-xl py-2 px-4 md:px-20 md:py-4 ">
      
      <div className="fixed z-10 top-0 left-0 w-screen bg-white  p-6 px-6 mx-auto flex items-center justify-between text-black md:px-32 ">
        
        <Link to="/" className=" font-optien h-full text-teal-600 text-3xl mr-4 cursor-pointer py-1.5 font-semibold ">
          Digitalesque
        </Link>
        <div className='flex  items-center justify-between ' >
        <div className="mr-2">Menu</div>
        <BiMenuAltRight   onClick={() =>{ setOpenNav(!openNav)} } size={30} className='cursor-pointer'/>
        </div>
       
    </div>
   

    </Navbar>
    <MobileNav open={openNav}  className='absolute w-full  mx-auto    bg-teal-600  top-0 left-0 z-20  '>
        <div className=" container ">
        <div className='flex  items-center justify-between absolute right-6 top-6 text-white m-0 ' >
        <div className="mr-2">Close</div>
        <AiOutlineClose  onClick={() => setOpenNav(!openNav)} size={30} className='cursor-pointer '/>
        </div>
        <div className=" gap-2 p-2 justify-items-auto">
        <div
        className=" content-center p-2 pt-10 mb-2  text-white text-2xl font-semibold border-solid border-white border-b-2"
        
      >
        <p className="flex items-center mt-10">
         The Digitalesque Website Menu
        </p>
      </div>
          {navList}
          </div>
         </div>
      </MobileNav>
     
    </div>
  )
}

export default Header
