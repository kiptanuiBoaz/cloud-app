import React from 'react'

const  FooterLinks = (props) => {

  const linkArr = props.linkArr;
  return (
    
    
          
            linkArr.map(
              (linkList)=>{
                return(
                  
                  <li className="py-1">{linkList}</li>
                )
              }
            )
          
           
       
  )
}

export default FooterLinks