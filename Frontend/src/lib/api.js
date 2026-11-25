import axios from 'axios';

const api = axios.create({
  baseURL: "https://cloudstudio-bos8.onrender.com/api",
  withCredentials: true,
  timeout: 12000,
});

export default api;