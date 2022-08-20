import React from 'react';
import { AiFillDatabase } from "react-icons/ai";
import { HiDatabase } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import Service from './Service';

const  HomeBottom = () => {

  return(
            <div className="absolute flex-col flex py-8 md:min-w-[530px] 
              bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2
             bg-zinc-200 border-slate-300 rounded-xl text-center shadow-xl"
            >
            
                <p className="font-bold">Data Services</p>
                <div className="flex px-4 py-2 flex-wrap">
                <p className=" flex px-4 py-2   text-slate-500">
                    <AiFillDatabase className="h-6 mr-2 text-indigo-600" /> App
                    Security
                </p>
                <p className=" flex px-4 py-2  text-slate-500">
                    <HiDatabase className="h-6 mr-2 text-indigo-600" /> Security
                </p>

                <p className=" flex px-4 py-2  text-slate-500">
                    <FaCloudUploadAlt className="h-6 mr-2 text-indigo-600" /> Cloud
                    Data
                </p>
                <p className="flex px-4 py-2  text-slate-500">
                    <FaPaperPlane className="h-6 mr-2 text-indigo-600" /> API
                </p>
                <Service
                    icon={<HiDatabase/>}
                    name={"something"}
                />
            </div>
        </div>
    )
}

export default HomeBottom;