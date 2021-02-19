import axios from 'axios';

function createApi(token = null) {
  const api = axios.create({
    baseURL: 'https://socialmedia-28mansion.herokuapp.com/api/v1/',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return api;
}

export function getToken() {
  const persistedAuth = localStorage.getItem('persist:auth');

  let token = null;

  if (persistedAuth) {
    const persist = JSON.parse(persistedAuth);
    const signin = JSON.parse(persist.signin);
    if (signin.session.token) {
      token = signin.session.token;
    }
  }
  return token;
}

export default createApi;
