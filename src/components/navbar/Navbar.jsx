import React, { useState } from "react";
import  NavList  from "./NavList";


import Brand from "./Brand";
import Buttons from "./Buttons";
import Hamburger from "./Hamburger";
import MobileViewMenu from "./MobileViewMenu";


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

          {/* brand name */}
          <Brand/>
          {/* nav items */}
          <NavList
             liStyle="select-none hidden text-1.5xl  md:flex"
             ulStyle="select-none"
          />
         
        </div>

        <div className="hidden pr-4 md:flex text-1.5xl  absolute right-6">
        {/* sign in and sing up buttons */}
          <Buttons
            nav={nav}
            btnstyle={"border-none bg-transparent text-black mr-4"}
            text={"Sign In"}
          />
           <Buttons
            nav={nav}
            btnstyle={"px-8 py-3"}
            text={"Sign Up"}
          />
        </div>

        <div onClick={handleClick} className="md:hidden pr-5   right-0">
        {/* passing state to change icon upon clicking event */}
          <Hamburger 
            nav={nav}
          />
        </div>
      </div>

      {/* menu that displays as dropdown from hamburger */}
      <MobileViewMenu
         nav={nav}
         ulStyle="md:hidden text-center absolute bg-zinc-200 w-full px-8"
         liStyle= "border-b-2 border-zinc-300 w-full select-none"
         hideFn= {handleClick}
      />

      
    </div>
  );
};

export default Navbar;
