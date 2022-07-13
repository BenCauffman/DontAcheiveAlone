import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/actions';
import Posts from './components/PostBody/Posts.jsx';
///Users/benjamincauffman/Desktop/Codesmith/Week_5/Solo_Project/client/components/PostBody/Posts


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);


return (
  <Container className = "main" maxWidth = 'lg'>
    <Container className = "header">
      <Typography className = "title" variant ="h2" align="center">This Time Last Year...</Typography>
    </Container>
    <Container className = "body">
      <Typography className = "posts" variant="h3">Body Goes Here</Typography>
      <Posts></Posts>
    </Container>
  </Container>

)
}



