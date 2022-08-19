import React, { useState } from "react";
import { Link,animateScroll as scroll } from 'react-scroll'

import { FiMenu } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex items-center w-full h-full">
        <div className="flex w-full   items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand.</h1>
         
          <ul className="hidden text-1.5xl  md:flex">
            <li><Link  to="home"  smooth={true} duration={500}>Home</Link></li>
            <li><Link  to="about"  smooth={true} offset={-200} duration={500} >About</Link></li>
            <li><Link  to="support"  smooth={true} offset={-90} duration={500} >Support</Link></li>
            <li><Link  to="platforms"  smooth={true} offset={-200} duration={500} >Platforms</Link></li>
            <li><Link  to="pricing"  smooth={true} offset={-50} duration={500} >Pricing</Link></li>
            
          </ul>
        </div>

        <div className="hidden pr-4 md:flex text-1.5xl  absolute right-6">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div onClick={handleClick} className="md:hidden pr-5   right-0">
          {!nav ? (
            <FiMenu className="w-7 h-8" />
          ) : (
            <TiTimes className="w-7 h-8" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : " md:hidden text-center absolute bg-zinc-200 w-full px-8"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>
        <li className="border-b-2 border-zinc-300 w-full">Support</li>
        <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="border-b-2 border-zinc-300 w-full">Pricing</li>

        <div className=" flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-4">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
