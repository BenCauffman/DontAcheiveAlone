import React from 'react';
import { Card, Typography, Button, CardContent } from '@material-ui/core';
import moment from 'moment';
import '../../styles.scss';

const Post = ({post}) => {



  return (
    <div className = "cardholder">
      <div className = 'card'>
      <Typography variant="h6">Title: {post.title}</Typography>
      <Typography variant="h6">First Name: {post.first_name}</Typography>
      <Typography variant="h6">Last Name: {post.last_name}</Typography>
      <Typography variant="h6"> Description: {post.description}</Typography>
      <Typography variant="h6"> How Long Ago: {
      `${Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24) < 0 ?
      Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24) * -1 :
        Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24)} days ago` }</Typography>
        </div>
    </div>
      
  )
}
export default Post;