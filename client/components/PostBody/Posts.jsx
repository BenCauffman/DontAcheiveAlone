import React from 'react';
import { Grid } from '@material-ui/core';
import Post from './Post.jsx';


const Posts = ({posts}) => {
  const postArray = [];

  for (let i = 0; i < posts.length; i++) {
    postArray.push(<Post post={posts[i]} key={i}/>);
  }
  console.log(postArray)


  return (
    <Grid>
      {postArray}
    </Grid> 
  )
}

export default Posts;

