import axios from 'axios';
import useToasts from 'hooks/useToasts';
import { useRouter } from 'next/router';
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // referer: 'http://localhost:3000',
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
    } else if (status === 422) {
      useToasts(error.response.data.message);
    }

    return Promise.reject(error);
  }
);
export default instance;
