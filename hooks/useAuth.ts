import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, getUser } from 'services';
import { setUserData } from 'stores/userDataSlice';

const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await fetchCSRFToken();
        const { data } = await getUser();
        setUser(data);
        dispatch(setUserData(data.user));
      } catch (error) {
        if (router.pathname === '/news-feed') {
          router.push('/');
        }
      }
    };
    if (hasCookie('XSRF-TOKEN')) {
      checkAuth();
    }
  }, [router, dispatch]);
  return user;
};

export default useAuth;
