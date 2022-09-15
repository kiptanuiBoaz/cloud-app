import React from "react";
import {BsCheckLg} from 'react-icons/bs';

 export const Program = ({tagText, textColor, titleStyle,speArr, btnStyle ,cost }) => {
  
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
    <span className={`uppercase px-3 py-1  ${titleStyle}  rounded-2xl text-sm`}>{tagText}</span>

    <div>
        <p className=" text-4xl sm:text-5xl  md:text-6xl font-bold py-4 flex"> ${cost}<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
    </div>
    <p className="text-2xl py-5 text-slate-500 flex ">Utilizzato nel settore della tipografia e della stampa</p>
    <div className="items-center text-2xl">
      {
        /* replicating the cards for premium,free and standard */
        speArr.map(
          (speArr)=>{
            return(
              <p className="  flex py-3"><BsCheckLg  className={`w-7 mr-4 ${textColor}`}/>{speArr}</p>
            )
            
          }
        )
        
      }
          
      <button className={`w-[400px]  md:w-full sm:w-[500px] ${btnStyle} py-4 my-4`}>Get Started </button>
    </div>
</div>
  )
}

