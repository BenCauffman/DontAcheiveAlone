import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Posts from './PostBody/Posts.jsx';
import { Routes, Route, Router, Link } from 'react-router-dom';
import '../styles.scss';




const AllPosts = ({posts, timeframe, setTimeframe, setPostData, postData}) => {



  const handleChange = (e) => {
    console.log('handling change', e.target.value)
    setTimeframe(e.target.value);
  }


return (  
  <div class="mainContainer">
  <div className = "header">
    <h1 style={{backgroundColor: 'white', borderRadius: '10px', padding: '10px'}}className = "title" align="center">Within the Last &nbsp;
    <FormControl className = "datePicker">
  <InputLabel id="demo-simple-select-label"></InputLabel>
  <Select style={{fontFamily: ['Permanent Marker', 'serif']}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={timeframe}
    label="TimeFrame"
    onClick={handleChange}
   >
    <MenuItem style={{fontFamily:['Permanent Marker', 'serif'] }} value={'Week'} onClick={handleChange}>Week</MenuItem>
    <MenuItem style={{fontFamily:['Permanent Marker', 'serif'] }} value={'Month'} onClick={handleChange}>Month</MenuItem>
    <MenuItem style={{fontFamily:['Permanent Marker', 'serif'] }} value={'Year'} onClick={handleChange}>Year</MenuItem>
    <MenuItem style={{fontFamily:['Permanent Marker', 'serif'] }} value={'5 Years'} onClick={handleChange}>5 Years</MenuItem>
  </Select>
</FormControl> You Have Accomplished...
</h1>
      </div>
  <div style={{width: '75%'}}className = "body">
    <Posts posts = {posts} setPostData= {setPostData} postData = {postData}/>
  </div>
  <div className = "footer">
    <h1 style={{backgroundColor: 'white', borderRadius: '10px', padding: '10px'}}className = "title" align="center">So Much!</h1>
    </div>
  </div>
)
}
export default AllPosts