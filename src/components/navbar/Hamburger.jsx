import React from 'react';
import { FiMenu } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";

const  Hamburger = (props) =>  {
     const nav = props.nav
  return (
    !nav ? (
        <FiMenu className="w-7 h-8" />
      ) : (
        <TiTimes className="w-7 h-8" />
      )
  )
}

export default Hamburger