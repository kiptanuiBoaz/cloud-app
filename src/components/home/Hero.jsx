import React from "react";
import HomeBottom from "./HomeBottom";


import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

function Hero() {
  return (
    <>
      <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-{1240px} m-auto">
          
          <HomeLeft/>
          <HomeRight/>
          <HomeBottom/>
         
        </div>
      </div>
    </>
  );
}

export default Hero;
