import React from 'react';
import { FiMenu } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";

export const  Hamburger = ({nav}) =>  {
  
  return (
    !nav ? (<FiMenu className="w-7 h-8" /> ) : (<TiTimes className="w-7 h-8" />)
  )
}

