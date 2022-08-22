import React from 'react';
import { Link } from 'react-scroll';
import navlistItems from '../assets/navListItems';



const MobileViewMenu = (props) => {

  // state to monitor click
  const nav = props.nav;
  // style for the  unordered list
  const ulStyle = props.ulStyle;
  // style for the li element
  const liStyle = props.liStyle;
    
    
  return (
    <ul
    className={
        // toggle the menu on and off during the clicking event
      !nav
        ? "hidden"
        : `${ulStyle}`
    }
  >
   {
    navlistItems.map(
      (navlistItem)=>{

        const {to,offset,text} = navlistItem;
        return(
          <li className={`${liStyle}`}>
            <Link activeClass="text-indigo-600" to={to} smooth={true} offset={offset} duration={500}>{text}</Link>
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

export default MobileViewMenu