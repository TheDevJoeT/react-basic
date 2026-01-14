import React, { useRef, useState } from "react";
import "./index.css";

export default function PostForm({addPost}) {
  // let [title, setTitle] = useState("");
  let title = useRef();
  
  let resetForm = () => {
    // setTitle("");
    title.current.value = ''
  };

  let upload_post = (e) => {
    e.preventDefault() // preventing refreshing pages
    

    let post = {
        id : Math.floor(Math.random() * 1000),
        title : title.current.value
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
          <input type="text"  ref={title}></input>
        </div>
        <div className="form-control">
          <button type="submit">Post Now</button>
        </div>
      </form>
    </div>
  );
}
