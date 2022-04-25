import React from 'react';
import posts from './posts';

const Post = ({ id, posts }) => {
  const getPostById = (id) => {
    return posts.find((post) => post.id === id)
  }
  const post = getPostById(id)
  return <h2>{post ? post.label : `Post with id:${id} not found`}</h2>
}

export default Post;