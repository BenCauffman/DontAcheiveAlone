import React from 'react';
import { Card, Typography, Button, CardContent } from '@material-ui/core';
import moment from 'moment';
import '../../styles.scss';

const Post = ({post}) => {



  return (
    <div style={{ display: 'flex', minWidth: '300px', height: '450px', padding: '10px'}}>
      <Card style={{backgroundColor: '#ffa',backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")",backgroundSize: "contain", padding: '10px', width: '300px', overflowWrap:'break-word', overflowY: 'scroll'}}>
      <h4 style={{fontWeight: 'bold', fontSize: '26px'}} >{post.title}</h4>
      <h4 style={{fontWeight: 'bold'}} >Name: {post.first_name} {post.last_name}</h4>
      <h4 style={{fontWeight: 'bold', fontSize:'20px'}} > Description: {post.description}</h4>
      <h4 style={{fontWeight: 'bold'}} >{
      `${Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24) < 0 ?
      Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24) * -1 :
        Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24)} days ago` }</h4>
        </Card>
    </div>
      
  )
}
export default Post;