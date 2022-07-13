import React  from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Posts.jsx';
import { useSelector } from 'react-redux';


const Posts = () => {
  const posts = useSelector((state) => state.state.posts);
  console.log(posts, 'posty')

  const postArray = [];

  if (posts) {
    for (let post of posts){
      postArray.push(<Post key={post._id} post={post} />);
    }
  }
  console.log(postArray, 'hi');



  return (
      <Grid >
      </Grid>
    )
}

export default Posts;

