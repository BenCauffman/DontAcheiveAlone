import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
    <div style={{display : "flex", flexDirection: "column"}}>
    <div style={{display: "flex", backgroundColor :' aquamarine', border: '1px solid black', borderRadius: '10px', padding: '10px'}}  className="cardholder">
    <h3>Professional</h3>
      {postArrayProfessional}
    <Link to = "/create">Add Another Professional Achievement</Link>
    </div> 

      <div style={{backgroundColor :' aquamarine', border: '1px solid black', borderRadius: '10px', padding: '10px'}}  className="cardholder">
    <h3>Personal</h3>
      {postArrayPersonal}
      <Link to = "/create">Add Another Personal Achievement</Link>
      </div> 
      <div style={{backgroundColor :' aquamarine', border: '1px solid black', borderRadius: '10px', padding: '10px'}}  className="cardholder">
    <h3>Other</h3>
      {postArrayOther}
      <Link to = "/create">Add Another Achievement</Link>
      </div> 
    </div>
  )
}

export default Posts;

