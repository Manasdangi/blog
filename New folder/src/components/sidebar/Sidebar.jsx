import {useState,useEffect} from 'react';
import './sidebar.css';
import axios from 'axios';
import {Link} from "react-router-dom"

export default function Sidebar() {

const [cats,setcat]=useState([]);

useEffect(()=>{
  const getcats=async()=>{
    const res=await axios.get("/categories");
    setcat(res.data)
  }
  getcats()
},[])

  return(
  <div className="sidebar">
  <div className="sidebaritem">
  <span className="sidebartitle">About me</span>
    <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVnCJV5JH8JCrKYgirgUTb2dqF9CpO_8cVzX3AxsU18pco71MZWovH5w1UZtWgCAPAl0&usqp=CAU"
     alt="" />
        <p>My name is Manas Dangi.<br></br>
        Currently I am pursuing Bachelor of  technology in MNIT Jaipur<br></br>
      I am 3rd year Electrical engineering Student</p>
  </div>
  <div className="sidebaritem">
        <span className="sidebartitle">Categories</span>
  <ul className="sidebarlist">
  {cats.map((c)=>(
    <Link to={`/?cat=${c.name}`} className="link">
    <li className="sidebarlistitem">{c.name}</li>
    </Link>
  ))}
    
      </ul>
  </div>
  <div className="sidebaritem">
        <span className="sidebartitle">Follow Us</span>
           <div className="sidebarsocial" > 
           <Link style={{"target":"_blank"}} proxyUrl="" to="https://twitter.com/ManasRa46019319"><i className="sidebaricon fab fa-twitter-square"></i></Link>
           <Link to="https://www.linkedin.com/in/manas-raj-9287051b1/"><i className="sidebaricon fab fa-pinterest-square"></i></Link>
           <Link to="https://www.instagram.com/manasraj_9669/"><i className="sidebaricon fab fa-instagram-square"></i></Link>
  
  
           </div>
    </div>
  </div>
  );
}
