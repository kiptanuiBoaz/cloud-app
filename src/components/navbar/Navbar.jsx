import React, { useState } from "react";
import  NavList  from "./NavList";

import { Link } from 'react-scroll';
import Brand from "./Brand";
import Buttons from "./Buttons";
import Hamburger from "./Hamburger";


// functiona component of the navigation bar at the top of the website
const Navbar = () => {

  // state to monitor the clicking of the hunberger menu
  const [nav, setNav] = useState(false);

  // change the nav bool to true when the icons is clicked
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex items-center w-full h-full">
        <div className="flex w-full   items-center">
          <Brand/>
          <NavList/>
         
        </div>

        <div className="hidden pr-4 md:flex text-1.5xl  absolute right-6">
          <Buttons/>
        </div>

        <div onClick={handleClick} className="md:hidden pr-5   right-0">
          <Hamburger 
            nav={nav}
          />
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
