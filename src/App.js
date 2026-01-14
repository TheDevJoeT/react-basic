import { useState } from "react";
import "./App.css"; // this css only implies app.js which is a component
import Navbar from "./components/Navbar/index";
import PostList from "./components/PostList/index";
import PostForm from "./components/PostForm/index";
import Modal from "./components/Modal/index";

function App() {

  let [showModal, setShowModal] = useState(false)

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      status : 'upcoming'
    },
    {
      id: 2,
      title: "Second Post",
      status : 'dropped'
    },
    {
      id: 3,
      title: "Third Post",
      status : 'ongoing'

    },
    
  ]);

  let addPost = (post) => {
   setPosts((prevState => [... prevState, post]))
   setShowModal(false)
  }

  return (
    <>
      <Navbar setShowModal = {setShowModal}/>
      <PostList posts={posts} />
      { showModal && <Modal setShowModal = {setShowModal} >
        <PostForm addPost={addPost} />
      </Modal>}
    </>
  );
}

export default App;

// import { set } from 'lodash'
// import React, { useState } from 'react'

// export default function App() {

//   let [count,setCount] = useState(0)
//   let increment = () => {
//     setCount((prevState)=> prevState +1)
//     setCount((prevState)=> prevState +1)
//     setCount((prevState)=> prevState +1)
//     setCount((prevState)=> prevState +1)
//     setCount((prevState)=> prevState +1)
//     // setCount(count+1) Never use this kind of thing to check
//   }

//   return (
//     <div>
//       <h1>Counter</h1>
//       <h3>Count : {count}</h3>
//       <button onClick={increment}>Increase</button>
//     </div>
//   )
// }
