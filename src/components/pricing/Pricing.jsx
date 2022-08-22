import React from "react";
import Program from "./Program";
import PricingBg from "./PricingBg";
import PricingTop from "./PricingTop";

function Pricing() {

    const  premiumArr = ["Donec et diam lectus","Mauris cursus mauris ac sem"," sit amet elementum","Nulla facilisi raesent fringilla"," Lorem ipsum dolor sit amet"];
    const standardArr =["Etiam a ultricies sapien raesent ","Nulla facilisi raesent fringilla","Donec et diam lectus","Mauris cursus mauris ac sem","Nunc rutrum  in facilisis"];
    const freeArr =["Nunc rutrum  in facilisis ","Etiam a ultricies sapien","Fusce tincidunt nisl mauris","Mauris interdum quis risus ut","Nulla facilisi raesent fringilla"];

  return (
        <div name="pricing" className="w-full text-white my-24">
    {/* the background to the section */}
            <PricingBg/>
                <div className="max-w-[1240px] mx-auto py-12">
                    <PricingTop/>

                    <div className="grid md:grid-cols-3">
                
                        <Program
                           
                            titleStyle="text-red-900 bg-red-200"
                            textColor="text-red-600"
                            speArr = {freeArr}
                            btnStyle ="hover:text-red-900 bg-red-900 border-red-900"
                            tagText = "Free"
                            cost = "0"
                        />

                        <Program
                            
                            titleStyle="bg-indigo-200 text-indigo-900"
                            textColor="text-indigo-600"
                            speArr = {standardArr}
                            tagText = "Standard"
                            cost = "49"
                        />

                        <Program
                            
                            titleStyle=" bg-green-200 text-green-900"
                            textColor="text-green-600"
                            btnStyle ="hover:text-green-900 bg-green-900 border-green-900"
                            speArr = {premiumArr}
                            tagText = "Premium"
                            cost = "99"
                        />

                       
                        
                </div>
            </div>
        </div>
    )
}

export default Pricing