import {useState} from 'react';
import {Link} from "react-router-dom";
import './register.css'
import axios from 'axios';

export default function Register() {
    const [username,setusername] =useState("");  
    const [email,setemail]=useState("");
    const [password,setpassword] = useState("");
    const [error,seterror] = useState(false);

const handlesubmit=async(e)=>{
  e.preventDefault();
  try{
    seterror(false);
    const res= await axios.post("/auth/register",{
      username,
      email,
      password
    });
    res.data && window.location.replace("/login");
  }
  catch(err){
 //   console.error(err);
    seterror(true);
  }
}

  return (

   <div className="register">
   <span className="registertitle">register</span>
      <form  className="registerform" onSubmit={handlesubmit}>
      <label>Username</label>
        <input type="text"  className='registerinput' 
        placeholder="Enter your Username"
         onChange={e=>setusername(e.target.value)} />
        <label>Email</label>
        <input type="text"  className='registerinput'
         placeholder="Enter your email" 
         onChange={e=>setemail(e.target.value)}
         />
        <label>Password</label>
        <input type="password" className='registerinput'
         placeholder="Enter your password"
         onChange={e=>setpassword(e.target.value)}
          />
        <button className="registerbutton" type="submit">register</button>
      </form>
      
      <button className="registerloginbutton">
      <Link className="link" to="/login">Login</Link>
      </button>
      {
      error && <span style={{color:"red"}}>Something went wrong</span>}
   </div>
);
}
