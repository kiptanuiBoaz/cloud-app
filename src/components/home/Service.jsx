import React from 'react'

const Service = (props) => {

    const element = props.icon
  return (
    <p className=" flex px-4 py-2   text-slate-500">
        <span >{element}</span>
           {props.name}
    </p>
  )
}

export default Service