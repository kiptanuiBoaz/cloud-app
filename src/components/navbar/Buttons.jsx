import React from 'react'

export const Buttons = ({btnstyle, text}) => {
    
  return (
    <>
      <button className=  {`${btnstyle}`}> {text} </button>
    </>
  )
}

