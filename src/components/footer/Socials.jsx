import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram,BsGithub,BsTwitter} from 'react-icons/bs';

const Socials =() =>{
  return (
        
    <div className=" flex flex-cols-1 px-2 py-4 max-w-[1240px]  m-auto  justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4"> Copyright ©{new Date().getFullYear()} || All rights reserved Awesome LLC </p>
        <div className="flex justify-between sm:w-[300px] mx-6 pt-2 text-2xl">
            <BsInstagram/>
            <BsGithub/>
            <BsTwitter/>
            <FaFacebookF/>
        </div>
    </div>
  )
}

export default Socials