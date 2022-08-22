import React from 'react'

const  footerForm = () =>{
  return (
    <div className="col-span-2 pt-8 md:pt-2">
        <p className="font-bold uppercase">Subscribe to our newsletter</p>
        <p className="py-4">The latest news, articles and resources sent to your inbox</p>
        <form className="flex flex-col ml-2 sm:flex-row">
            <input className="w-full p-2 outline-indigo-600  rounded-md mr-4 mb-4" type="email" placeholder="Enter your Email..."></input>
            <button className="mb-4  p-2">Subscribe</button>
        </form>

    </div>
  )
}

export default footerForm