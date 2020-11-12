import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT_URL : process.env.PRODUCTION_URL
});

export default instance;