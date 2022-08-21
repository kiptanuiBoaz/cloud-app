import React from 'react';
import { Link } from 'react-scroll';

function Brand() {

  return (
    <h1 className="text-3xl select-none font-bold sm:ml-3  ml-0 mr-4 sm:text-4xl">
      <Link  to="home" spy={true}  smooth={true} duration={1000}>
        AW
        <span activeClass="text-black" className="text-indigo-600">3</span>
        SOM
        <span className="text-indigo-600">3</span>
      </Link>
    </h1>
   
  )
}

export default Brand