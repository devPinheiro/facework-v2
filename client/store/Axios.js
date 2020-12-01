import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    //set token to auth
    axios.defaults.headers.common["x-access-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-access-token"];
  }
};

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT_URL : process.env.PRODUCTION_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'text/json',
    'Access-Control-Allow-Origin': ' http://localhost:4001',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
    },
});

export default instance;