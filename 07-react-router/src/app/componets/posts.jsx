import React from 'react';
import PostList from './postList';
import Post from './post';

const Posts = ({ match, history }) => {
  const posts = [
    { id: 1, label: 'post 1' },
    { id: 2, label: 'post 2' },
    { id: 3, label: 'post 3' },
  ]
  const postId = match.params.postId;
  return (
    <>
      {postId
        ? <Post posts={posts} id={postId} history={history} />
        : <PostList posts={posts}/>}
    </>
  );
}

export default Posts;