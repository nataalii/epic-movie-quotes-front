/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from './useAuth';

const useNewsFeed = () => {
  useAuth();
  const { replace } = useRouter();
  useEffect(() => {
    const searchQuery = window.location.search;
    if (searchQuery !== '') {
      replace('/news-feed');
    }
  }, []);
};
export default useNewsFeed;
