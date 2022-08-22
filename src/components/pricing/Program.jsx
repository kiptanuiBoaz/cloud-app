import React from "react";
import {BsCheckLg} from 'react-icons/bs';

 const Premium = (props) => {
  // background color of the program tag
  const tagBgColor = props.tagBgColor;
  // text color of the specifics
  const textColor = props.textColor;
  // title text color 
  const titleColor = props.titleColor;
  // arr of the specifics 
  const speArr = props.speArr;

  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
    <span className={`uppercase px-3 py-1 ${tagBgColor} text-red-900 rounded-2xl text-sm`}>Free</span>

    <div>
        <p className="text-6xl font-bold py-4 flex"> $0<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
    </div>
    <p className="text-2xl py-8 text-slate-500 flex ">Utilizzato nel settore della tipografia e della stampa</p>
    <div className="    text-2xl">
        <p className="  flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
        <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
        <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
        <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
        <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
        <button className="w-[400px]  md:w-full sm:w-[500px] hover:text-red-900 bg-red-900 border-red-900 py-4 my-4">Get Started </button>
    </div>
</div>
  )
}

export default Premium