import React from 'react';
import { Typography, Grid, Select} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Post from './Post.jsx';
import '../../styles.scss';


const Posts = ({posts, setPostData, postData}) => {
  const postArrayProfessional = [];
  const postArrayPersonal = [];
  const postArrayOther = [];

  const handleClick = (e) => {
    let myTarget;
    if (e.target.children.length > 0) myTarget = e.target.childNodes[1].innerHTML
    else { myTarget = e.target.innerHTML}
    setPostData({...postData, tag: myTarget});
  }



  for (let i = 0; i < posts.length; i++) {
    if (posts[i].tag === 'Professional') postArrayProfessional.push(<Post post={posts[i]} key={i}/>);
    else if (posts[i].tag === 'Personal') postArrayPersonal.push(<Post post={posts[i]} key={i}/>);
    else if (posts[i].tag === 'Other') postArrayOther.push(<Post post={posts[i]} key={i}/>);
  }


  return (
    <div style={{display : "flex", flexDirection: "column", gap: '10px'}}>
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{display: "flex", alignItems: 'center', backgroundColor :'white', border: '1px solid black', borderRadius: '10px', padding: '10px',width: '75vw', overflowX: 'scroll'}} >
          <h3>Professional</h3>
          <div style={{display: "flex", alignItems: 'center', maxWidth: '300px'}}>
            {postArrayProfessional}
           </div>
        </div> 
    <Link onClick={handleClick} style={{display: 'flex', alignItems: 'center', borderRadius: '10px', border: ['1px', 'solid', 'black']}}to = "/create">
    <span style={{fontWeight:'bolder', backgroundColor:'white'}}>Add Another <span>Professional</span> Achievement</span>
    </Link>
    </div>

    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{display: "flex", alignItems: 'center', backgroundColor :'white', border: '1px solid black', borderRadius: '10px', padding: '10px',width: '75vw', overflowX: 'scroll'}} >
          <h3>Personal</h3>
          <div style={{display: "flex", alignItems: 'center'}}>
            {postArrayPersonal}
           </div>
        </div> 
        <Link onClick={handleClick} style={{display: 'flex', alignItems: 'center', borderRadius: '10px', border: ['1px', 'solid', 'black']}}to = "/create">
    <span style={{fontWeight:'bolder', backgroundColor:'white'}}>Add Another <span>Personal</span> Achievement</span>
    </Link>
    </div>
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{display: "flex", alignItems: 'center', backgroundColor :'white', border: '1px solid black', borderRadius: '10px', padding: '10px',width: '75vw', overflowX: 'scroll'}} >
          <h3>Other</h3>
          <div style={{display: "flex", alignItems: 'center'}}>
            {postArrayOther}
           </div>
        </div> 
        <Link onClick={handleClick} style={{display: 'flex', alignItems: 'center', borderRadius: '10px', border: ['1px', 'solid', 'black']}}to = "/create">
    <span style={{fontWeight:'bolder', backgroundColor:'white'}}>Add <span>Other</span> Achievement</span>
    </Link>
    </div>
    </div>
    )
}

export default Posts;

