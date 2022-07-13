import React from 'react';
import { Card, Typography, Button, CardContent } from '@material-ui/core';
import moment from 'moment';

const Post = ({post}) => {



  return (
    <Card>
      <div className = "post">
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="h6">{post.first_name}</Typography>
        <Typography variant="h6">{post.last_name}</Typography>
        <Typography variant="h6">{post.description}</Typography>
        <Typography variant="h6">{
        `${Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24) < 0 ?
        Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24) * -1 :
         Math.round(moment(post.created_at).diff(moment()) / 1000 / 60 / 60 / 24)} days ago` }</Typography>
      </div>
      
    </Card>
  )
}
export default Post;