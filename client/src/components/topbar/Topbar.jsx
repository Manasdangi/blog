import {Link} from "react-router-dom";
import  './topbar.css';
import {Context} from '../../context/Context'
import {useContext} from "react"


export default function Topbar() {

    const {user,dispatch}=useContext(Context);
    const pf = "http://localhost:5000/images/";

    const handlelogout=()=>{
        dispatch({type:"LOG_OUT"})
    }
  return <div className="top">

   <div className="topleft">
   <i className="topicon  fab fa-facebook-square"></i>
  <i className="topicon fab fa-twitter-square"></i>
  <i className="topicon fab fa-pinterest-square"></i>
  <i className="topicon fab fa-instagram-square"></i>
  </div>
   <div className="topcenter">
       <ul className="toplist">
           <li className="toplistitem">
               <Link to="/" className="link">Home</Link>
           </li>
           <li className="toplistitem">
           <Link to="/" className="link">About</Link>
           </li>
           <li className="toplistitem">
           <Link to="/" className="link">Contact</Link>
           </li>
           <li className="toplistitem">
           <Link to="/write" className="link">Write</Link>
           </li>
           <li className="toplistitem" onClick={handlelogout}>
           {user && "Logout"}
           </li>
       </ul>
   </div> 
   <div className="topright">
    {  user ? (
        <Link to="/settings"> <img className="topimg" 
    src={pf + user.profilePic} 
       alt="" /></Link>
        )
       :(
           <ul className="toplist">
               <li className="toplistitem">
               <Link className="link" to="/login">
               Login</Link>
               </li>
           <li className="toplistitem">
               
           <Link className="link" to="/register">
           Register</Link>
           </li>
           </ul>
       )
      }  
      <i className="topsearchicon fas fa-search"></i>
   </div>
  </div>;
}
