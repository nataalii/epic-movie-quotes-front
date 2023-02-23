import { useEffect } from 'react';
import { oauthLogin } from 'services';
import { useRouter } from 'next/router';

const OAuth = () => {
  const router = useRouter();

  const login = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const data = Object.fromEntries(params.entries());
      await oauthLogin(data);
      router.push('/news-feed');
    } catch (e) {
      router.push('/');
    }
  };

  useEffect(() => {
    login();
  }, []);

  return <div></div>;
};

export default OAuth;
