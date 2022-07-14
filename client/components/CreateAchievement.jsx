import React, { useState, useEffect } from 'react';
import { Link, withRouter, Navigate } from 'react-router-dom';
import { TextField, Card, Button, FormControl, InputLabel, Select, MenuItem, TextArea } from '@material-ui/core';
import axios from 'axios';
const serverUrl = 'http://localhost:3000/api';
import '../styles.scss';

const CreateAchievement =({posts, postData, setPostData}) => {

  const [submitted, setSubmitted] = useState(false);

const handleClick = () => {
  setPostData({first_name: '', last_name: '', title: '', description: '', tag: ''});
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let data in postData) {
      if (postData[data] === '') return
    }
    const create = await axios.post(serverUrl, postData);
    setPostData({first_name: '', last_name: '', title: '', description: '', tag: ''});
    setSubmitted(true);

  };


  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '50px'}} >
      <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}} >
        <div className = "card" style={{border: '1px', display: 'flex',flexDirection: 'column', width:'25vw', alignItems: "center", gap: '10px', backgroundColor: '#ffa', backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")", backgroundSize: "contain"}} >
        <TextField label = "First name" value ={postData.first_name} onChange ={(e)=>setPostData({...postData, first_name: e.target.value})}></TextField>
        <TextField label = "Last Name" value ={postData.last_name} onChange ={(e)=>setPostData({...postData, last_name: e.target.value})}></TextField>
        <TextField label = "Title" value ={postData.title} onChange ={(e)=>setPostData({...postData, title: e.target.value})}></TextField>
        <TextField multiline rows ={3} maxRows={4} label = "Description" value ={postData.description} onChange ={(e)=>setPostData({...postData, description: e.target.value})}></TextField>

        <div >
        <button type = "submit">Submit Achievement! Good Job</button>
        </div>
        </div>

      </form>
      <div style={{display: 'flex',flexDirection: 'column', alignItems: "flex-start", backgroundColor: '#ffa', backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")", backgroundSize: "cover", padding:'50px'}}>
        {submitted && <Navigate to="/" />}
        <Link onClick ={handleClick} style={{color: 'black', fontSize: '32px'}} to ='/'> Go Back </Link>
      </div>
    </div>
    
  )

}

export default CreateAchievement

