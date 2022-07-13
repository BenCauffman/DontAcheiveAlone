import React from 'react';
import { Card, Typography, Button, CardContent } from '@material-ui/core';

const Post = ({post}) => {

  return (
    <Card>
      <div className = "post">
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="h6">{post.first_name}</Typography>
        <Typography variant="h6">{post.last_name}</Typography>
        <Typography variant="h6">{post.description}</Typography>
      </div>
      
    </Card>
  )
}
export default Post;