import axios from 'axios';

const serverUrl = 'http://localhost:3000/api';

export const getPosts = () => axios.get(serverUrl);