import React from "react";
import { AiFillDatabase } from "react-icons/ai";
import { HiDatabase } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { bgimg } from "../assets/cyber-bg.png";

function Hero() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-{1240px} m-auto"></div>
      </div>
      <AiFillDatabase />
      <HiDatabase />
      <FaPaperPlane />
      <FaCloudUploadAlt />
    </>
  );
}

export default Hero;
