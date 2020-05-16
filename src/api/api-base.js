import axios from 'axios';

const apiBase = axios.create({
  baseUrl: 'http://localhost:3000/api',
});

export default apiBase;