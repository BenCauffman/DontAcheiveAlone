import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Posts from './PostBody/Posts.jsx';
import { Routes, Route, Router, Link } from 'react-router-dom';

//making request in app.js




const AllPosts = ({posts}) => {

  console.log(posts)

  // const handleChange = () => {


  // }


return (  
  <Container className = "main" maxWidth = 'lg'>
  <Container className = "header">
    <Typography className = "title" variant ="h2" align="center">This Time Last ...</Typography>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={10}
    label="TimeFrame"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Week</MenuItem>
    <MenuItem value={20}>Month</MenuItem>
    <MenuItem value={30}>Year</MenuItem>
  </Select>
</FormControl>
  </Container>
  <Link to ='/create'> Create New Post </Link>
  <Container className = "body">
    <Typography className = "posts" variant="h5">Select Timeframe</Typography>
    <Posts posts = {posts}/>
  </Container>
  </Container>
)
}
export default AllPosts