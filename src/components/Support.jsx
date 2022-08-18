import React from 'react';
import { HiChip } from 'react-icons/hi';
import {  BsArrowRightShort } from 'react-icons/bs';
import { MdSupport} from 'react-icons/md';
import { FiPhone} from 'react-icons/fi';
import supportImg from "../assets/support.jpg";



const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
            <img  className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="support"/>
        </div>
        <div className="w-[1240px] mx-auto  text-white relative " >

            <div className="px-4 py-12">
                
                <h2 className=' text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className="text-5xl font-bold py-6  text-center">Finding the right team</h3>
                <p className="py-4  text-center text-3xl text-slate-300" >At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quosb landitiis praesentium
                </p>
            </div>
            <div className=" grid relative grid-cols-1  lg:grid-cols-3 gap-x-8  gap-y-16 px-4 pt-12  sm:pt-20 text-black" >

                <div className="bg-white rounded-xl shadow-2xl">
                    <div className=" p-8">
                        <FiPhone className=" h-16 w-16 bg-indigo-600 p-4 text-white rounded-lg mt-[-4rem]"/>
                        <h3 className="font-bold text-2xl my-6">Sales</h3>
                        <p className="text-grey-600 text-xl"  >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
                    </div>
                    <div className="bg-slate-100  pl-8 py-4 ">
                        <p className="flex  items-center  text-indigo-600">Contact Us <BsArrowRightShort/></p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-2xl">
                    <div className=" p-8">
                        <HiChip  className=" h-16 w-16 bg-indigo-600 p-4 text-white rounded-lg mt-[-4rem]"/>
                        <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
                        <p className="text-grey-600 text-xl"  >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
                    </div>
                    <div className="bg-slate-100  pl-8 py-4 ">
                        <p className="flex  items-center  text-indigo-600">Contact Us <BsArrowRightShort/></p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-2xl">
                    <div className=" p-8">
                        <MdSupport className=" h-16 w-16 bg-indigo-600 p-4 text-white rounded-lg mt-[-4rem]"/>
                        <h3 className="font-bold text-2xl my-6">Technical Support</h3>
                        <p className="text-grey-600 text-xl"  >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
                    </div>
                    <div className="bg-slate-100  pl-8 py-4 ">
                        <p className="flex  items-center  text-indigo-600">Contact Us <BsArrowRightShort/></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  
  )
}

export default Support