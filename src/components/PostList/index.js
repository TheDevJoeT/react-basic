import React from 'react'
import './index.css'

export default function PostList({posts}) {
  return (
    <div className='postList'>
       {
        posts.map(post => (
             <div className='singlePost' key={post.id}>{post.title}</div>
        ))
       }
        
      </div>
  )
}
