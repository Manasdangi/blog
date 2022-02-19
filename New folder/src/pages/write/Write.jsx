import "./write.css";
import {useState} from "react"
import {Context} from '../../context/Context'
import axios   from "axios";
import { useContext } from "react";

export default function Write() {
const [title,settitle]=useState("");
const [desc,setdesc]=useState("");
const [file,setfile]=useState(null);
const {user} =useContext(Context)
const handlesubmit=async (e)=>{
  e.preventDefault();
  const newPost={
    username:user.username,
    title,
    desc,
  }
  if(file){
    const data=new FormData();
    const filename=Date.now()+file.name;
    
    data.append("name",filename);
    data.append("file",file);
    newPost.photo=filename;
    try{
        await axios.post("/upload",data)
    }
    catch(err){}
  }
  try{
      
    const res=await axios.post("/posts",newPost);
    window.location.replace("/posts/"+res.data._id);
  }catch(err){}
 
}

  return (
    <div className="write">
    {file &&   <img
        className="writeimg"
        src={URL.createObjectURL(file)}
        alt=""
      />}
     
      <form className="writeform" onSubmit={handlesubmit}>
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="writeicon fas fa-plus"></i>
          </label>
          <input id="fileinput" type="file" 
          style={{ display: "none" }} 
          onChange={e=>setfile(e.target.files[0])} />
          <input
            className="writeinput" placeholder="Title"
              type="text" 
               autoFocus={true}
               onChange={e=>settitle(e.target.value)}
          />
        </div>
        <div className="writeformgroup">
          <textarea  className="writeInput writetext" 
          placeholder="Tell your story..."
            type="text" autoFocus={true} 
            onChange={e=>setdesc(e.target.value)}
             />
        </div>
        <button className="writesubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}