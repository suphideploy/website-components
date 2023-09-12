
"use client";
import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logo/Logo.png';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className='fixed w-full h-14
     shadow-xl bg-white'>
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <Link href='/'>
                <Image
                src={Logo}
                alt="Logo"
                
                height="30"
                className='md:cursor-pointer'
                priority
                /> 
           </Link>
            <div className='hidden sm:flex'>
              <ul className="hidden sm:flex">
               
                    <li className="border-x-4 border-black hover:border-blue-900 hover:text-blue-900 my-3 mr-1">
                     <Link href='/about' className=' mx-2 text-lg uppercase'>Why us</Link>
                    </li>
                    <li className="border-x-4 border-black hover:border-blue-900 hover:text-blue-900 my-3 mr-1">
                     <Link href='/about' className=' mx-2 text-lg uppercase'>Contact us</Link>
                    </li>
                    <li className="border-x-4 border-black hover:border-blue-900 hover:text-blue-900 my-3 mr-1">
                     <Link href='/about' className=' mx-2 text-lg uppercase'>about us</Link>
                    </li>
                    <li className="border-x-4 border-black hover:border-blue-900 hover:text-blue-900 my-3 mr-1">
                     <Link href='/about' className=' mx-2 text-lg uppercase'>our services</Link>
                    </li>
                
               
                
              </ul>  
           </div>
           <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
            <AiOutlineMenu size={25} />

           </div>
           <div className={
          menuOpen ? "fixed left-0 bottom-0 w-[65%] sm:hidden h-screen bg-[#ecf0F3] p-4 ease-in duration-500"
           : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
           }>
            <div className='flex w-full items-center justify-end to'>
                <div onClick={handleNav} className='cursor-pointer'>
                    <AiOutlineClose size={25} />
                </div>
            </div>
         </div>
        </div>

    </nav>
  );
};

export default Navbar