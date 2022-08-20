import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import platform from "../assets/platform"

const PlatItem = () => {

  platform.map((platform)=>{
      // destructuring the platform object
      const {title,description} = platform;
  
      return (
        <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 txt-green-600"/>
            </div>
            
            <div>
                <h3 className="text-lg  font-bold">{title}</h3>
                <p className=" text-lg pt-2 pb-4">{description}</p>
            </div>
                        
        </div>
      )}
    )
}

export default PlatItem