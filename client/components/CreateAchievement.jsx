import React, { useState, useEffect } from 'react';
import { Link, withRouter, Navigate } from 'react-router-dom';
import { TextField, Card, Button, FormControl, InputLabel, Select, MenuItem, TextArea } from '@material-ui/core';
import axios from 'axios';
const serverUrl = 'http://localhost:3000/api';
import '../styles.scss';

const CreateAchievement =({posts, postData, setPostData}) => {

  const [submitted, setSubmitted] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const create = await axios.post(serverUrl, postData);
    setPostData({first_name: '', last_name: '', title: '', description: '', tag: ''});
    setSubmitted(true);

  };


  return (
    <div  >
      <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}} >
        <div className = "card" style={{display: 'flex',flexDirection: 'column', width:'50vw', alignItems: "flex-start", gap: '10px', backgroundColor: '#ffa', backgroundImage: "url(" + "http://res.cloudinary.com/cspaveljb/image/upload/v1499110956/note_font_pcdcst.png" + ")", backgroundSize: "cover"}} >
        <TextField style={{backgroundColor: 'white'}} label = "First name" value ={postData.first_name} onChange ={(e)=>setPostData({...postData, first_name: e.target.value})}></TextField>
        <TextField style={{backgroundColor: 'white'}} label = "Last Name" value ={postData.last_name} onChange ={(e)=>setPostData({...postData, last_name: e.target.value})}></TextField>
        <TextField style={{backgroundColor: 'white'}} label = "Title" value ={postData.title} onChange ={(e)=>setPostData({...postData, title: e.target.value})}></TextField>
        <TextField style={{backgroundColor: 'white'}} multiline rows ={3} maxRows={4} label = "Description" value ={postData.description} onChange ={(e)=>setPostData({...postData, description: e.target.value})}></TextField>

        <div className="newPost">
        <button type = "submit">Submit Achievement! Good Job</button>
        </div>
        </div>
        <div>
        {submitted && <Navigate to="/" />}
        <Link style={{color: 'black', fontSize: '18px'}} to ='/'> Go Back </Link>
      </div>
      </form>
    </div>
    
  )

}

export default CreateAchievement

