import React from 'react'

const  FooterLinks = (props) => {

  const linkArr = props.linkArr;
  // const index = props.index;
  // const original= props.original;


  return (
    
    <div>
        
        <ul>
          {
            linkArr.map(
              (linkList)=>{
                
                return(
                  
                  <li className="py-1 hover:text-1xl">{ linkList}</li>
                )
              }
            )
          }
           
        </ul>
    </div>
  )
}

export default FooterLinks