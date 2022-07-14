import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { Routes, Route, Router, Link } from 'react-router-dom';
import AllPosts from './components/AllPosts.jsx';
import CreateAchievement from './components/CreateAchievement.jsx'

import './styles.scss';

//making request in app.js
import axios from 'axios';
const serverUrl = 'http://localhost:3000/api';



export const App = () => {

  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState({first_name: '', last_name: '', title: '', description: '', tag: ''});
  const [timeframe, setTimeframe] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await axios.get(serverUrl, {
        params: {
          timeframe: timeframe
        }
      });
      setPosts(data.data);
    };
    fetchPosts();
  }, [postData, timeframe]);



return (
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element ={<AllPosts posts = {posts} timeframe={timeframe} setTimeframe={setTimeframe} />}>
          </Route>
          <Route path="/create" element ={<CreateAchievement posts = {posts} postData = {postData} setPostData = {setPostData} />}>
          </Route>
        </Routes>
      </div>
  );
}




