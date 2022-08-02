import React from "react";

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
          <div>
            <p>100%</p>
            <p>completion</p>
          </div>
          <div>
            <p>24/7</p>
            <p>Delivery</p>
          </div>
          <div>
            <p>100K</p>
            <p>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
