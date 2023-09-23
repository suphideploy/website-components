
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/public/assets/Logo.png"
import Button from "../Button";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  }
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
        <Image
          src={Logo}
          alt="Picture of the author"
          width={120}
          height={500}
           className="md:cursor-pointer h-9"
           />
          <div className="text-3xl md:hidden" onClick={handleNav}>
              <AiOutlineMenu />
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/project" className="py-7 px-3 inline-block">
              Projects
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <div >

        </div>
        <ul
          className={ open ? "
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500}
        
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
