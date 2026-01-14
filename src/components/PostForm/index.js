import React, { useState } from "react";
import "./index.css";

export default function PostForm({addPost}) {
  let [title, setTitle] = useState("");
  let [status, setStatus] = useState('upcoming')

  let resetForm = () => {
    setTitle("");
  };

  let upload_post = (e) => {
    e.preventDefault() // preventing refreshing pages
    

    let post = {
        id : Math.floor(Math.random() * 1000),
        title : title,
        status : status
    }

    resetForm();
    
    addPost(post)
  }
  return (
    <div>
      <form className="post-form" onSubmit={upload_post}>
        <h1>Create Post</h1>
        <div className="form-control">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
        </div>
        <div className="form-control">
          <label>Status</label>
          <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="dropped">Dropped</option>
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
        <div className="form-control">
          <button type="submit">Post Now</button>
        </div>
      </form>
    </div>
  );
}
