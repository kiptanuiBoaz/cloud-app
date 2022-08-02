import React from "react";
import listItems from "../assets/navListItems";

const NavItems = (props) => {
   
    listItems.map((listItem) => { const {index,item} = listItem;
            return(
                <ul className={props.nstyle}>
                    <li key={index}>{item}</li>
                </ul>
            )
        }
    ) 
};

export default NavItems;
