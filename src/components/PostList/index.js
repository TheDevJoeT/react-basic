import React from 'react'
import './index.css'
import style from './single_post.module.css'

export default function PostList({posts}) {
  return (
    <div className='postList container'>
       {
        posts.map(post => (
             <div className={`singlePost ${style.card}`} key={post.id}>
              <h3>{post.title}</h3>
              <h4>status - {post.status}</h4>
              </div>
        ))
       }
        
      </div>
  )
}
