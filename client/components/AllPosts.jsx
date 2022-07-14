import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Posts from './PostBody/Posts.jsx';
import { Routes, Route, Router, Link } from 'react-router-dom';
import '../styles.scss';




const AllPosts = ({posts, timeframe, setTimeframe}) => {



  const handleChange = (e) => {
    console.log('handling change', e.target.value)
    setTimeframe(e.target.value);
  }


return (  
  <div class="mainContainer">
  <div className = "header">
    <h1 className = "title" align="center">Within the Last &nbsp;
    <FormControl className = "datePicker">
  <InputLabel id="demo-simple-select-label"></InputLabel>
  <Select style={{fontFamily: ['Cinzel', 'serif']}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={timeframe}
    label="TimeFrame"
    onClick={handleChange}
   >
    <MenuItem style={{fontFamily:['Cinzel', 'serif'] }} value={'Week'} onClick={handleChange}>Week</MenuItem>
    <MenuItem style={{fontFamily:['Cinzel', 'serif'] }} value={'Month'} onClick={handleChange}>Month</MenuItem>
    <MenuItem style={{fontFamily:['Cinzel', 'serif'] }} value={'Year'} onClick={handleChange}>Year</MenuItem>
    <MenuItem style={{fontFamily:['Cinzel', 'serif'] }} value={'5 Years'} onClick={handleChange}>5 Years</MenuItem>
  </Select>
</FormControl> You Have Accomplished...
</h1>
      </div>
  <div className = "body">
    <Posts posts = {posts}/>
  </div>
  </div>
)
}
export default AllPosts