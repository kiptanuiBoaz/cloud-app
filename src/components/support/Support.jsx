import React from 'react';

import SupportBg from './SupportBg';
import SupportTop from './SupportTop';
import SuppTeams from './SuppTeams';




const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
        <SupportBg/>
        <div className="max-w-[1240px] mx-auto  text-white relative " >
            <SupportTop/>
            <SuppTeams/>
          
        </div>
    </div>
  
  )
}

export default Support