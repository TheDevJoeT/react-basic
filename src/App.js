import { useState } from "react";
import "./App.css"; // this css only implies app.js which is a component
import Navbar from "./components/Navbar/index";
import PostList from "./components/PostList/index";
import Modal from "./components/Modal/index";

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
    },
    {
      id: 2,
      title: "Second Post",
    },
    {
      id: 3,
      title: "Third Post",
    },
    {
      id: 4,
      title: "Fourth Post",
    },
  ]);

  return (
    <>
      <Navbar />
      <PostList posts={posts} />
      <Modal>
        <h1>Zoom class is Available</h1>
        <p>
          Join <a href="">Here!</a>
        </p>
      </Modal>
    </>
  );
}

export default App;

// import { set } from 'lodash'
// import React, { useState } from 'react'

// export default function App() {

//   let [count,setCount] = useState(0)
//   let increament = () => {
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
//       <button onClick={increament}>Increase</button>
//     </div>
//   )
// }
