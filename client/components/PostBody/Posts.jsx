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
      <div style={{borderRadius: '10px',backgroundColor: 'rgb(255 170 249)',backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")",backgroundSize: "contain", padding: '20px'}}>
        <h3 style={{fontSize: '26px'}}>Professional</h3>
      <div >
      <Link onClick={handleClick} style={{display: 'flex', alignItems: 'center', borderRadius: '10px'}}to = "/create">
    <span style={{fontSize:'20px'}}>Add Another <span>Professional</span> Achievement</span>
    </Link>
          </div>
        <div style={{display: "flex", alignItems: 'center', borderRadius: '10px', padding: '10px', overflowX: 'scroll'}} >
          <div style={{display: "flex", alignItems: 'center', width: '300px'}}>
            {postArrayProfessional}
           </div>
        </div> 

    </div>

    <div style={{borderRadius: '10px',backgroundColor: 'rgb(170 238 255)',backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")",backgroundSize: "contain", padding: '10px'}}>
        <h3 style={{fontSize: '26px'}}>Personal</h3>
      <div >
      <Link onClick={handleClick} style={{display: 'flex', alignItems: 'center', borderRadius: '10px', border: ['1px', 'solid', 'black']}}to = "/create">
    <span style={{fontSize:'20px'}}>Add Another <span>Personal</span> Achievement</span>
    </Link>
          </div>
        <div style={{display: "flex", alignItems: 'center', borderRadius: '10px', padding: '10px', overflowX: 'scroll'}} >
          <div style={{display: "flex", alignItems: 'center', maxWidth: '300px'}}>
            {postArrayPersonal}
           </div>
        </div> 

    </div>
    <div style={{borderRadius: '10px',backgroundColor: 'rgb(191 255 170)',backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")",backgroundSize: "contain", padding: '10px'}}>
        <h3 style={{fontSize: '26px'}}>Other</h3>
      <div >
      <Link onClick={handleClick} style={{display: 'flex', alignItems: 'center', borderRadius: '10px', border: ['1px', 'solid', 'black']}}to = "/create">
    <span style={{fontSize:'20px'}}>Add <span>Other</span> Achievement</span>
    </Link>
          </div>
        <div style={{display: "flex", alignItems: 'center', borderRadius: '10px', padding: '10px', overflowX: 'scroll'}} >
          <div style={{display: "flex", alignItems: 'center', maxWidth: '300px'}}>
            {postArrayOther}
           </div>
        </div> 

    </div>
    </div>
    )
}

export default Posts;

