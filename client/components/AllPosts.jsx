import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Posts from './PostBody/Posts.jsx';
import { Routes, Route, Router, Link } from 'react-router-dom';
import '../styles.scss';

//making request in app.js




const AllPosts = ({posts, timeframe, setTimeframe}) => {



  const handleChange = (e) => {
    console.log('handling change', e.target.value)
    setTimeframe(e.target.value);
  }


return (  
  <Container className = "mainContainer" maxWidth = 'lg'>
  <Container className = "header">
    <Typography className = "title" variant ="h2" align="center">Within the Last
    <FormControl className = "datePicker">
  <InputLabel id="demo-simple-select-label"></InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={timeframe}
    label="TimeFrame"
    onClick={handleChange}
   >
    <MenuItem value={'Week'} onClick={handleChange}>Week</MenuItem>
    <MenuItem value={'Month'} onClick={handleChange}>Month</MenuItem>
    <MenuItem value={'Year'} onClick={handleChange}>Year</MenuItem>
  </Select>
</FormControl> You Have Done...
</Typography>
      </Container>
  <div className="newPost">
  <Link to ='/create'> Create New Post </Link>
  </div>
  <Container className = "body">
    <Typography className = "posts" variant="h5">Select Timeframe</Typography>
    <Posts posts = {posts}/>
  </Container>
  </Container>
)
}
export default AllPosts