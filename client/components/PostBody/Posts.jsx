import React from 'react';
import { Grid } from '@material-ui/core';
import Post from './Posts';


const Posts = () => {
  const post = useSelector((state) => state.posts)

  return (
    <Grid>
      <Post post={post}></Post>
    </Grid> 
  )
}

export default Posts;

