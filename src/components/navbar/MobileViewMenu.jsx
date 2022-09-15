import React from 'react';
import { Link } from 'react-scroll';
import navlistItems from '../assets/navListItems';



export const MobileViewMenu = ({nav, ulStyle, liStyle, hideFn:handleClick}) => {
    
  return (
    <ul className={ !nav ? "hidden" : `${ulStyle}`}>
     {/* toggle the menu on and off during the clicking event */}
    
   {
    navlistItems.map(
      (navlistItem)=>{

        const {to,offset,text} = navlistItem;
        return(
          <li className={`${liStyle}`} >
            <Link activeClass="text-indigo-600" onClick={handleClick} to={to} smooth={true} offset={offset} duration={500}>{text}</Link>
          </li>

        ) 

      }
    )
   }
   
    <div className=" flex flex-col my-4">
      <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
      <button className="px-8 py-4">Sign Up</button>
    </div>
    
  </ul>
  )
}

