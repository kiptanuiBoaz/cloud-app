import React from 'react';
import { HiChip } from 'react-icons/hi';
import {  BsArrowRightShort } from 'react-icons/bs';
import { MdSupport} from 'react-icons/md';
import { FiPhone} from 'react-icons/fi';
import supportImg from "../assets/support.jpg";



const Support = () => {
  return (
    <div>
        <div>
            <img src={supportImg} alt="support"/>
        </div>
        <div>
            <div>
                <FiPhone/>
                <h2>Support</h2>
                <h3>Finding the right team</h3>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos</p>
            </div>
            <div>
                <div>
                    <div>
                        <h3>Sales</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
                    </div>
                    <div>
                        <p>Contact Us <BsArrowRightShort/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default Support