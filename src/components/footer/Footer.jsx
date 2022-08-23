import React from "react";

import FooterForm from "./footerForm";
import FooterLinks from "./FooterLinks";
import Socials from "./Socials";



function Footer() {
    const solutions = ["Analytics", "Marketing", "Commerce", "Data", "Cloud"];
    const support = ["Pricing", "Documentation", "Guides", "API Status", ""];
    const company = ["About", "Blog", "Jobs", " Partners", "Press"];

    const footerArr = [solutions, support, company];
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
    {/* <h6 className="font-bold uppercase pt-2">{String(original[index])}</h6> */}
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6  border-b-2 py-8">
            {
                footerArr.map(
                    (linkArr,index,original)=>{
                        return(
                            
                            <FooterLinks
                                linkArr={linkArr}
                                index={index}
                                original={original}
                            />
                        )
                    }
                )
            }
            

            <FooterForm/>
         

        </div>
        <Socials/>
    </div>
    


)
}

export default Footer