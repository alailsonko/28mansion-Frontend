import axios from 'axios';

const api = axios.create({
  baseURL: 'https://socialmedia-28mansion.herokuapp.com/api/v1/',
});

export default api;
