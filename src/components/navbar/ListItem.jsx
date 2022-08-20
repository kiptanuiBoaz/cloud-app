import React from 'react';
import { Link } from 'react-scroll';

const ListItem = (props) => {
  return (
    <li className="border-b-2 border-zinc-300 w-full">
        <Link  to={props.to}  smooth={true} offset={props.offset} duration={500} >{props.text}</Link>
    </li>
  )
}

export default ListItem;