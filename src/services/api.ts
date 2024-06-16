import axios from 'axios';

const api = axios.create({
  headers: {
    getContentType: 'application/json'
  },
  baseURL: 'http://192.168.1.2:3000/'
});

export default api;