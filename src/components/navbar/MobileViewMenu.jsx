import React from 'react';
import { Link } from 'react-scroll';
import ListItem from './ListItem';


const MobileViewMenu = (props) => {

    const nav = props.nav
  return (
    <ul
    className={
        // toggle the menu on and off during the clicking event
      !nav
        ? "hidden"
        : " md:hidden text-center absolute bg-zinc-200 w-full px-8"
    }
  >
    <li className="border-b-2 border-zinc-300 w-full">
      <Link  to="home"  smooth={true} offset={-600} duration={500}>Home</Link>
    </li>

    <li  className="border-b-2 border-zinc-300 w-full" >
      <Link  to="about"  smooth={true} offset={-200} duration={500} >About</Link>
    </li>

    <li className="border-b-2 border-zinc-300 w-full">
      <Link  to="support"  smooth={true} offset={-90} duration={500} >Support</Link>
    </li>

    <li className="border-b-2 border-zinc-300 w-full">
      <Link  to="platforms"  smooth={true} offset={-200} duration={500} >Platforms</Link>
    </li>

    <li className="border-b-2 border-zinc-300 w-full">
      <Link  to="pricing"  smooth={true} offset={-50} duration={500} >Pricing</Link>
    </li>

    <ListItem
     text={"something"}
     to={"somewhere}"}
     offset={11}
    />
    

    <div className=" flex flex-col my-4">
      <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
      <button className="px-8 py-4">Sign Up</button>
    </div>
    
  </ul>
  )
}

export default MobileViewMenu