import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    //set token to auth
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.replace(/['"]+/g, '')}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT_URL : process.env.PRODUCTION_URL,
  // headers: {
  //   'Access-Control-Allow-Origin':'*',
  //   'Accept': 'application/json',
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
  //   'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
    
  //   }   
});

export default instance;