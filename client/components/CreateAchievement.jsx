import React, { useState, useEffect } from 'react';
import { Link, withRouter, Navigate } from 'react-router-dom';
import { TextField, Card, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';
const serverUrl = 'http://localhost:3000/api';

const CreateAchievement =({posts, postData, setPostData}) => {

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postData);

    const create = await axios.post(serverUrl, postData);
    setPostData({first_name: '', last_name: '', title: '', description: '', tag: ''});
    setSubmitted(true);

  };

  const handleChange = (e) => {
    setPostData({...postData, tag: e.target.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField label = "First name" value ={postData.first_name} onChange ={(e)=>setPostData({...postData, first_name: e.target.value})}></TextField>
        <TextField label = "Last Name" value ={postData.last_name} onChange ={(e)=>setPostData({...postData, last_name: e.target.value})}></TextField>
        <TextField label = "Achievement" value ={postData.title} onChange ={(e)=>setPostData({...postData, title: e.target.value})}></TextField>
        <TextField label = "Description" value ={postData.description} onChange ={(e)=>setPostData({...postData, description: e.target.value})}></TextField>

        <div>
        <InputLabel id="tagPicker">TimeFrame</InputLabel>
          <Select value={posts.tag} labelId = "tagPicker" defaultValue={'Other'} onChange={handleChange}>
            <MenuItem value={'Personal'} onChange={handleChange}>Personal</MenuItem>
            <MenuItem value={'Professional'} onChange={handleChange}>Professional</MenuItem>
            <MenuItem value={'Other'} onChange={handleChange}>Other</MenuItem>
          </Select>
      </div>
        <Button type = "submit">CLICK</Button>
        {submitted && <Navigate to="/" />}
        <div className="newPost">
  <Link to ='/'> Go Back </Link>
  </div>


      </form>
    </div>
    
  )

}

export default CreateAchievement

