import React from 'react'

const Buttons = (props) => {
    
  return (
    <>
        <button className=  {`${props.btnstyle}`}> {props.text} </button>
        
    </>
  )
}

export default Buttons