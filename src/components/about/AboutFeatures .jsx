import React from 'react';
import aboutArray from "../assets/about.js";
// import external array

const  AboutFeatures  = () => {
    // using map function to replicate the elements
  return (
    <div className="grid md:grid-cols-3 gap-1 px-2 mt-2 text-center">
            {aboutArray.map((aboutItem) => {

                /* destructuring the aboutItem object */
                let { header, footer } = aboutItem;
                /* args to tap into the individual array elements[i] */
              return (
                <div className="border mt-4 mx-2 py-8 rounded-xl shadow-xl">
                  <p className="sm:text-6xl  text-5xl font-bold text-indigo-600">
                  {/* tapping into the item from the object */}
                    {header}
                  </p>
                  <p className="text-gray-400 mt-2">{footer}</p>
                </div>
              );
            })}
          </div>
  )
}

export default AboutFeatures 