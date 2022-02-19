import React, { useEffect,useState,useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './singlepost.css'
import axios from 'axios';
import {Link} from "react-router-dom"
import {Context} from '../../context/Context'

export default function Singlepost() {
  const location =useLocation();
  const path=location.pathname.split("/")[2];
  const [post,setpost]=useState({});
  const {user}=useContext(Context)
  const pf="http://localhost:5000/images/";
  const [desc,setdesc]=useState("");
  const [title,settitle]=useState("");
  const [updatemode,setupdatemode]=useState("")

  useEffect(()=>{
    const getpost=async()=>{
      const res=await axios.get("/posts/" + path);
      setpost(res.data);
      settitle(res.data.title);
      setdesc(res.data.desc);
    }
    getpost()
  },[path]);

  const handledelete=async()=>{
    try{
    await axios.delete(`/posts/${post._id}`,{
     data:{ username:user.username},
    })
    window.location.replace("/")
    }catch(err){}
  }
  const handleupdate=async()=>{
    try{
      await axios.put(`/posts/${post._id}`,{
        username:user.username,title,desc,
      })
    //  window.location.reload()
    setupdatemode(false);
      }catch(err){}
  }
  return(
      <div className="singlepost">
       <div className="singlepostwrapper">
       {post.photo && (<img src={pf + post.photo} alt="" 
           className="singlepostimg" />) }
           {
             updatemode?(<input type="text" 
             autoFocus={true}
             onChange={(e)=>settitle(e.target.value)}
              className="singleposttitleinput" 
              value={title} />):( <h1 className="singleposttitle">
          {title}
          {post.username ===user?.username &&
           ( <div className="singlepostedit">
           <i className="singleposticon fas fa-edit"
            onClick={()=>setupdatemode(true)}></i>
           <i className="singleposticon fas fa-trash-alt" 
           onClick={handledelete}></i>
           </div>)  } 
           
           </h1>)
           }
                 
           
       <div className="singlepostinfo">
       <Link to={`/?user=${post.username}`} className="link">  <span className="singlepostauthor">Author: <b>{post.username}</b></span>
         </Link>
           <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
       </div>
       {updatemode?
       (<textarea className="singlepostdescinput" 
        value={desc}  onChange={(e)=>setdesc(e.target.value)} />):
        ( <p className="singlepostdesc" >{desc}</p>)}
      {
        updatemode && <button className="singlepostbutton" onClick={handleupdate}>Update</button>
      
      }
       </div>
       
      </div>
  );
}
