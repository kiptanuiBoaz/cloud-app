import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram,BsGithub,BsTwitter} from 'react-icons/bs';

const Socials =() =>{
  return (
        
    <div className=" flex flex-cols-1 px-2 py-4 max-w-[1240px]  m-auto  sm:flex-row justify-center text-gray-500">
        <p className="mb-1 py-4"> Copyright ©{new Date().getFullYear()} || All rights reserved Awesome LLC </p>
        <div className=" flex justify-between sm:w-[300px] mr-9 mt-1 ml-5 py-4 text-1xl">
            <BsInstagram className='hover:text-indigo-600 '/>
            <BsGithub className='hover:text-indigo-600 '/>
            <BsTwitter className='hover:text-indigo-600 '/>
            <FaFacebookF className='hover:text-indigo-600 '/>
        </div>
    </div>
  )
}

export default Socials