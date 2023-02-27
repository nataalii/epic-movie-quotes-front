import axios from 'axios';
import { useRouter } from 'next/router';
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  async (response) => {
    return response;
  },

  async (error) => {
    const status = error?.response?.status;
    if (status === 403) {
      const router = useRouter();
      router.push('/403');
    }

    return Promise.reject(error);
  }
);
export default instance;
