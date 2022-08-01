import React from "react";
import { AiFillDatabase } from "react-icons/ai";
import { HiDatabase } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import bgimg from "../assets/cyber-bg.png";

function Hero() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-{1240px} m-auto">
          <div className=" sm:mr-3 flex flex-col md:ml-10 justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl">Unique sequencing & production</p>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">
              Cloud Management
            </h1>
            <p className="text-2xl">This is our tech brand</p>
            <button className="py-3 px-6 sm:w-[60%] ">Get started</button>
          </div>
          <div>
            <img className="w-full" src={bgimg} alt="techies" />
          </div>
          <div
            className="absolute flex-col flex py-8 md:min-w-[760px] 
              bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2
             bg-zinc-200 border-slate-300 rounded-xl text-center shadow-xl"
          >
            ff
            <p>Data Services</p>
            <div className="flex px-4 py-2 flex-wrap">
              <p className=" flex px-4 py-2   text-slate-500">
                <AiFillDatabase className="h-6 mr-2" /> App Security
              </p>
              <p className=" flex px-4 py-2  text-slate-500">
                <HiDatabase className="h-6 mr-2" /> Security
              </p>

              <p className=" flex px-4 py-2  text-slate-500">
                <FaCloudUploadAlt className="h-6 mr-2" /> Cloud Data
              </p>
              <p className="flex px-4 py-2  text-slate-500">
                <FaPaperPlane className="h-6 mr-2" /> API
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
