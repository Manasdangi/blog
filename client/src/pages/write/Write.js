import { useContext, useState } from 'react';
import './write.css';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var selected = [];
    var catitem = document.getElementById('catlist');
    var chks = catitem.getElementsByTagName('INPUT');

    for (let i = 0; i < chks.length; i++) {
      if (chks[i].checked) {
        selected.push(chks[i].value);
      }
    }
    var categories = [];
    for (let j = 0; j < selected.length; j++) {
      categories.push(selected[j]);
    }
// categories.push(selected[0]);
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };
    
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      newPost.photo = filename;
      data.append('name', filename);
      data.append('file', file);
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
      // console.log(newPost);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="cat" id="catlist">
          <p>Choose tags:</p>
          <input type="checkbox" id="cat" value="music" />
          <label> music</label>
          <input type="checkbox" id="cat" value="tech" />
          <label> tech</label>
          <input type="checkbox" id="cat" value="dailylife" />
          <label>dailylife </label>
          <input type="checkbox" id="cat" value="study" />
          <label> study</label>
          <input type="checkbox" id="cat" value="motivation" />
          <label> motivation</label>
          <input type="checkbox" id="cat" value="love" />
          <label> love</label>
          <input type="checkbox" id="cat" value="friendship" />
          <label> friendship</label>
          <input type="checkbox" id="cat" value="health" />
          <label> health</label>
          <input type="checkbox" id="cat" value="socialmedia" />
          <label> socialmedia</label>
          <input type="checkbox" id="cat" value="college" />
          <label> college</label>
          <br></br>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
