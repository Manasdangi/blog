import React from 'react';
import './single.css';

import Sidebar from '../../components/sidebar/Sidebar'
//import Posts from '../../components/posts/Posts';
import Singlepost from '../../components/singlepost/Singlepost'
export default function Single() {
  return (
    <>
    
<div className="single">
  {/* <Posts/>  */}
  <Singlepost/>
   <Sidebar/> 
  </div>
    </>
  

   );
}
