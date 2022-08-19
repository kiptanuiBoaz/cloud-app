import React from "react";
import {BsCheckLg} from 'react-icons/bs';

function Pricing() {
  return (
    <div className="w-full text-white my-24">

        <div className=" mix-blend-overlay w-full bg-slate-900 absolute h-[700px]"></div>

        <div className="max-w-[1240px] mx-auto py-12">
            <div className=" text-center py-8 text-slate-300">
                <h2 className="text-3xl uppercase">Pricing </h2>
                <h3 className=" text-5xl font-bold text-white py-8">The right price for your research</h3>
                <p className=" text-xl">  Testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo</p>
            </div>

            <div className="grid md:grid-cols-3">

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