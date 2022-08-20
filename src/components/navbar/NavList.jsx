import React from "react";
import { Link } from 'react-scroll';

const  NavList = (props) =>{
  return (
    <ul className="hidden text-1.5xl  md:flex">
      <li className={props.styleClasses}><Link  to="home" spy={true} activeClass= "" smooth={true} duration={1000}>Home</Link></li>
      <li className={props.styleClasses}><Link  to="about" spy={true} activeClass="text-indigo-600"  smooth={true} offset={-200} duration={1000} >About</Link></li>
      <li className={props.styleClasses}><Link  to="support" spy={true} activeClass="text-indigo-600" smooth={true} offset={-90} duration={1000} >Support</Link></li>
      <li className={props.styleClasses}><Link  to="platforms" spy={true} activeClass="text-indigo-600"  smooth={true} offset={-200} duration={1000} >Platforms</Link></li>
      <li className={props.styleClasses}><Link  to="pricing" spy={true} activeClass="text-indigo-600" smooth={true} offset={-50} duration={1000} >Pricing</Link></li>
    
    </ul>
  )
}

export default NavList;

