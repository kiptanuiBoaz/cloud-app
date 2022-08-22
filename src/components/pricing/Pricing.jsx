import React from "react";
import {BsCheckLg} from 'react-icons/bs';
import Program from "./Program";
import PricingBg from "./PricingBg";
import PricingTop from "./PricingTop";

function Pricing() {
  return (
        <div name="pricing" className="w-full text-white my-24">
    {/* the background to the section */}
            <PricingBg/>
                <div className="max-w-[1240px] mx-auto py-12">
                    <PricingTop/>

                    <div className="grid md:grid-cols-3">
                        {()=>{
                            const  premiumArr = ["Donec et diam lectus","Mauris cursus mauris ac sem"," sit amet elementum","Nulla facilisi raesent fringilla"," Lorem ipsum dolor sit amet"];
                            const standardArr =["Etiam a ultricies sapien","Nulla facilisi raesent fringilla","Donec et diam lectus","Mauris cursus mauris ac sem","Nunc rutrum  in facilisis"];
                            const freeArr =["Nunc rutrum  in facilisis ","Etiam a ultricies sapien","Fusce tincidunt nisl mauris","Mauris interdum quis risus ut","Nulla facilisi raesent fringilla"];

                            return(
                                <Program
                                    spanBgColor="bg-red-200"
                                    
                                />
                            )

                            
                        }}
                        
                        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                            <span className="uppercase px-3 py-1 bg-red-200 text-red-900 rounded-2xl text-sm">Free</span>
                        
                            <div>
                                <p className="text-6xl font-bold py-4 flex"> $0<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                            </div>
                            <p className="text-2xl py-8 text-slate-500 flex ">Utilizzato nel settore della tipografia e della stampa</p>
                            <div className="    text-2xl">
                                <p className="  flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-red-600"/>Nel settore  tipografia</p>
                                <button className="w-[400px]  md:w-full sm:w-[500px] hover:text-red-900 bg-red-900 border-red-900 py-4 my-4">Get Started </button>
                            </div>
                        </div>

                        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">standard</span>
                        
                            <div>
                                <p className="text-6xl font-bold py-4 flex"> $49<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                            </div>
                            <p className="text-2xl py-8 text-slate-500 flex ">Utilizzato nel settore della tipografia e della stampa</p>
                            <div className="text-2xl">
                                <p className="flex  py-4"><BsCheckLg  className="w-7 mr-4 text-indigo-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-indigo-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-indigo-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-indigo-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-indigo-600"/>Nel settore  tipografia</p>
                                <button className=" w-[400px]  md:w-full sm:w-[500px] py-4 my-4">Get Started </button>
                            </div>
                        </div>

                        <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                            <span className="uppercase px-3 py-1 bg-green-200 text-green-900 rounded-2xl text-sm">Premium</span>
                        
                            <div>
                                <p className="text-6xl font-bold py-4 flex"> $99<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                            </div>
                            <p className="text-2xl py-8 text-slate-500 flex ">Utilizzato nel settore della tipografia e della stampa</p>
                            <div className="text-2xl">
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-green-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-green-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-green-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-green-600"/>Nel settore  tipografia</p>
                                <p className="flex py-4"><BsCheckLg  className="w-7 mr-4 text-green-600"/>Nel settore  tipografia</p>
                                <button className="w-[400px]  md:w-full sm:w-[500px]  hover:text-green-900 bg-green-900 border-green-900 py-4 my-4">Get Started </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing