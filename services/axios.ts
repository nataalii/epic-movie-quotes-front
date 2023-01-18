import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
