import {Context} from "../../context/Context";
import { useContext,useRef } from 'react';
import {Link} from "react-router-dom";
import './login.css'
import axios from 'axios';

export default function Login() {
  const userRef=useRef();
  const passRef=useRef();
  const {dispatch,isfetching}=useContext(Context)

const handlesubmit=async(e)=>{
  e.preventDefault();
   dispatch({type:"LOGIN_START"});
   try{
      const res=await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passRef.current.value
      })
      
   dispatch({type:"LOGIN_SUCCESS",payload:res.data});
   }
   catch(err){
    dispatch({type:"LOGIN_FAILURE"});
 // console.log(err);
   }
};

//console.log(user)
//console.log(isfetching)
  return (

   <div className="login">
   <span className="logintitle">Login</span>
      <form  className="loginform" onSubmit={handlesubmit}>
        <label>Username</label>
        <input type="text"  className='logininput' placeholder="Enter your username" 
        ref={ userRef} />
        <label>Password</label>
        <input type="password" className='logininput' placeholder="Enter your password" 
          ref={ passRef}
        />
        <button className="loginbutton" type="submit">Login</button>
      </form>
      
      <button className="loginregisterbutton" disabled={isfetching}>
          <Link className="link" to="/register" >Register</Link>
      </button>
   </div>
);
}
