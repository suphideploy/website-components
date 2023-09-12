"use client";

import { ImCancelCircle } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";

function Nav() {
  //let's create state to handle open and closed
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-500 h-[12vh] text-white flex relative">
      <div className="flex justify-between items-center w-full md:px-12 px-2">
        <h1 className="text-xl">Practice</h1>

         
        <div className="md:hidden">
          {open ? (
         <ImCancelCircle
              className="text-2xl"
              onClick={() => setOpen((preState) => !preState)}
            />
          ) : (
            <CgDetailsMore
              className="text-2xl"
              onClick={() => setOpen((preState) => !preState)}
            />
          )}
        </div>
      
       

        <ul className="gap-5 font-semibold md:flex hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile navigation */}
        <ul
          className={`absolute top-[calc(100%+0vh)] w-full text-center leading-9 font-semibold md:hidden ${
            open ? "left-0" : "left-[-100%]"
          } duration-700`}
        >
          <li onClick={() => setOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/services">Services</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;