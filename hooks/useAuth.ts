import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUser } from 'services';

const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await getUser();
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.log(error);
        if (router.pathname === '/news-feed') {
          router.push('/');
        }
      }
    };
    if (hasCookie('XSRF-TOKEN')) {
      checkAuth();
    }
  }, [router]);
  return user;
};

export default useAuth;
