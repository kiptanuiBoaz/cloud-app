import React from "react";
import aboutArray from "../assets/about.js";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className=" max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati
          </p>
          <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
            {aboutArray.map((aboutItem) => {
              return (
                <div className="border mx-2 py-8 rounded-xl shadow-xl">
                  <p className="text-6xl font-bold text-indigo-600">
                    {aboutItem.header}
                  </p>
                  <p className="text-gray-400 mt-2">{aboutItem.footer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
