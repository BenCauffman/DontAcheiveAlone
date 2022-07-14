import React from 'react';
import { Typography } from '@material-ui/core';
import Post from './Post.jsx';
import '../../styles.scss';


const Posts = ({posts}) => {
  const postArrayProfessional = [];
  const postArrayPersonal = [];
  const postArrayOther = [];

  console.log(posts)



  for (let i = 0; i < posts.length; i++) {
    if (posts[i].tag === 'Professional') postArrayProfessional.push(<Post post={posts[i]} key={i}/>);
    else if (posts[i].tag === 'Personal') postArrayPersonal.push(<Post post={posts[i]} key={i}/>);
    else if (posts[i].tag === 'Other') postArrayOther.push(<Post post={posts[i]} key={i}/>);
  }


  return (
    <div>
    <div class = "cardholder">
    <Typography>Professional</Typography>
      {postArrayProfessional}
    </div> 
    <div class = "cardholder">
    <Typography>Personal</Typography>
      {postArrayPersonal}
     </div> 
      <div class = "cardholder">
      <Typography>Other</Typography>
        {postArrayOther}
      </div> 
    </div>
  )
}

export default Posts;

