import React from "react";
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram,BsGithub,BsTwitter} from 'react-icons/bs';
import FooterForm from "./footerForm";
import FooterLinks from "./FooterLinks";



function Footer() {
    const solutions = ["Analytics", "Marketing", "Commerce", "Data", "Cloud"];
    const support = ["Pricing", "Documentation", "Guides", "API Status", ""];
    const company = ["About", "Blog", "Jobs", " Partners", "Press"];

    const footerArr = [solutions, support, company];
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6  border-b-2 py-8">
            {
                footerArr.map(
                    (linkArr)=>{
                        var i = 0;
                        const linkTitle = footerArr[i++];
                        const textTitle =linkTitle[i++]
                        return(
                            <div>
                                <h6 className="font-bold uppercase pt-2">{`${textTitle}`}</h6>
                                <ul>
                                    <FooterLinks
                                        linkArr={linkArr}
                                    />
                                </ul>
                            </div>
                        )
                    }
                )
            }
            {/* <div>
                <h6 className=" font-bold uppercase pt-2">Solutions</h6>
                <ul>
                    <li className="py-1">Analytics</li>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Commerce</li>
                    <li className="py-1">Data</li>
                    <li className="py-1">Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold uppercase ml-2 pt-2">Support</h6>
                <ul>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Documentation</li>
                    <li className="py-1">Guides</li>
                    <li className="py-1">API Status</li>
                    
                </ul>
            </div>

            <div>
                <h6 className="font-bold uppercase pt-2">Company</h6>
                <ul>
                    <li className="py-1">About</li>
                    <li className="py-1">Blog</li>
                    <li className="py-1">Jobs</li>
                    <li className="py-1">Partners</li>
                    <li className="py-1">Press</li>
                </ul>
            </div>

            <div>
                <h6 className="font-bold  uppercase pt-2">Legal</h6>
                <ul>
                    <li className="py-1">Privacy</li>
                    <li className="py-1">Claims</li>
                    <li className="py-1">Terms</li>
                    <li className="py-1">Policies</li>
                    <li className="py-1">Conditions</li>
                </ul>
            </div> */}

            <FooterForm/>

            <div className=" flex flex-col px-2 py-4 max-w-[1240px]  m-auto  justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4"> Copyright ©{new Date().getFullYear()} || All rights reserved Awesome LLC </p>
                <div className="flex justify-between sm:w-[300px] mx-6 pt-2 text-2xl">
                    <BsInstagram/>
                    <BsGithub/>
                    <BsTwitter/>
                    <FaFacebookF/>
                </div>
            </div>
        </div>
    </div>
    


)
}

export default Footer