import React from 'react'

const CardPost = ({post}) => {
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default CardPost