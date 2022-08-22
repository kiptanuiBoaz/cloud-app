import React from "react";
import { Link } from 'react-scroll';
import navlistItems from "../assets/navListItems";

const  NavList = (props) =>{

  

  
  return (
    <ul className=" select-none hidden text-1.5xl  md:flex">
      {/* mapping through all the list items */}
        {navlistItems.map((navlistItem)=>{

          /* destructuring the navListItem Object */
          const {to,offset,text} = navlistItem;

          return (
            <li >
              <Link  to={to} spy={true} activeClass="text-indigo-600"  smooth={true} offset={offset} duration={1000} >
                {text}
              </Link>
            </li>
          )
      })}
      
    </ul>
  )
}

export default NavList;

