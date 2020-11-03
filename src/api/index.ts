import axios from 'axios';

const api = axios.create({
  baseURL: 'https://socialmedia-28mansion.herokuapp.com/',
});

export default api;
