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
          <div>
            <p>Data Services</p>
            <div>
              <AiFillDatabase />
              <HiDatabase />
              <FaPaperPlane />
              <FaCloudUploadAlt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
