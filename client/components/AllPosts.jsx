import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/PostBody/Posts.jsx';

//making request in app.js

import axios from 'axios';
const serverUrl = 'http://localhost:3000/api';


export const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await axios.get(serverUrl);
      setPosts(data.data);
    };
    fetchPosts();
  }, []);


return (  
  <Container className = "main" maxWidth = 'lg'>
  <Container className = "header">
    <Typography className = "title" variant ="h2" align="center">This Time Last Year...</Typography>
  </Container>
  <button> Create New Post </button>
  <Container className = "body">
    <Typography className = "posts" variant="h5">Select Timeframe</Typography>
    <Posts posts = {posts}/>
  </Container>
  </Container>
)
}