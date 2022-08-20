import React, { useState } from "react";
import  NavList  from "./NavList";
import { FiMenu } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex items-center w-full h-full">
        <div className="flex w-full   items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">AW<span className="text-indigo-600">3</span>SOM<span className="text-indigo-600">3</span></h1>
          <NavList/>
         
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
        <li className="border-b-2 border-zinc-300 w-full"><Link  to="home"  smooth={true} offset={-600} duration={500}>Home</Link></li>
        <li  className="border-b-2 border-zinc-300 w-full" ><Link  to="about"  smooth={true} offset={-200} duration={500} >About</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link  to="support"  smooth={true} offset={-90} duration={500} >Support</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link  to="platforms"  smooth={true} offset={-200} duration={500} >Platforms</Link></li>
        <li className="border-b-2 border-zinc-300 w-full"><Link  to="pricing"  smooth={true} offset={-50} duration={500} >Pricing</Link></li>
        

        <div className=" flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
          <button className="px-8 py-4">Sign Up</button>
        </div>
        
      </ul>
    </div>
  );
};

export default Navbar;
