import React from 'react'

const Service = (props) => {
  return (
    <p className=" flex px-4 py-2   text-slate-500">
        <span className="  h-6 mr-2 text-indigo-600">{props.icon}</span>
           {props.name}
    </p>
  )
}

export default Service