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
        setUser(response.data.user);
      } catch (error) {
        if (router.pathname === '/admin') {
          router.push('/login');
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
