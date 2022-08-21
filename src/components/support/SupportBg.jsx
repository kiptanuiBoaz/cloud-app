import React from 'react';
import supportImg from "../assets/support.jpg";

const SupportBg = () => {
  return (

    // creating a background component and assigning overlay
    //  property using css and positioning of the overlaying 
    //  content to absolute
    // the position has to be absolute
    <div className="w-full h-[670px] bg-gray-900/90 absolute">
        <img  className="w-full h-full  object-cover mix-blend-overlay" src={supportImg} alt="support"/>
    </div>
    )
}

export default SupportBg