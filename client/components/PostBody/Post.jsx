import React from 'react';
import { Card, Typography, Button, CardContent } from '@material-ui/core';
import moment from 'moment';
import '../../styles.scss';

const Post = ({post}) => {



  return (
    <div className = "cardholder">
      <Card className = 'card'>
      <h4 >Title: {post.title}</h4>
      <h4 >Name: {post.first_name} {post.last_name}</h4>
      <h4 > Description: {post.description}</h4>
      <h4 > How Long Ago: {
      `${Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24) < 0 ?
      Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24) * -1 :
        Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24)} days ago` }</h4>
        </Card>
    </div>
      
  )
}
export default Post;