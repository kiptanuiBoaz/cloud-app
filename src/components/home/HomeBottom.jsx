import React from 'react';
import { AiFillDatabase } from "react-icons/ai";
import { HiDatabase } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import Service from './Service';

const  HomeBottom = () => {
    // the styling of the service icons
    const IconSytle = "h-6 mr-2 text-indigo-600";

  return(
            <div className="absolute flex-col flex py-8 md:min-w-[650px] 
              bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2
             bg-zinc-200 border-slate-300 rounded-xl text-center shadow-xl"
            >
            
                <p className="font-bold">Data Services</p>
                <div className="flex px-4 py-2 flex-wrap">
                

                <Service
                // accesing the styling using template literals i.e converting a multylinr var to string
                    icon={<AiFillDatabase className={`${IconSytle}`}/>}
                    name={" Security"}
                />
                
                <Service
                    icon={<HiDatabase className={`${IconSytle}`}/>}
                    name={"Security"}
                />
                
                <Service
                    icon={<FaCloudUploadAlt className={`${IconSytle}`}/>}
                    name={"Cloud Data"}
                />

                <Service
                    icon={<FaPaperPlane className={`${IconSytle}`}/>}
                    name={"API"}
                />

                
                <Service
                    icon={<HiDatabase className={`${IconSytle}`}/>}
                    name={"Database"}
                />
                  
            </div>
        </div>
    )
}

export default HomeBottom;