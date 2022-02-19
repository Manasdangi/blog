import React from 'react';
import './header.css'
export default function Header() {
  return(
       <div className="header">
             <div className="headertitle">
                 <span className="headertitlesm">React and node</span>
                 <span className="headertitlelg">Blog</span>
             </div>
             <img className="headerimg" 
             src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
               alt="" />
       </div>
  );
}
