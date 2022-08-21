import React from 'react'
// import {AiOutlineCheck} from 'react-icons/ai';
import PlatformsTop from './PlatformsTop';
import PlatItem from './PlatItem';

const AllinOne= () =>{
  return (
    <div  name="platforms" className= "w-full my-32">
        <div className=" max-w-[1280px] mx-auto px-2">
           <PlatformsTop/>
            
           <PlatItem/>
                
        </div>
    </div>
  )
}

export default AllinOne