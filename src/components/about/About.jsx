import React from "react";
import {AboutFeatures} from "./AboutFeatures .jsx";

import AboutTop from "./AboutTop.jsx";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className=" max-w-[1240px] mx-auto">
        <div className="text-center">

          <AboutTop/>
          <AboutFeatures/>
          
        </div>
      </div>
    </div>
  );
};

export default About;
