/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from './useAuth';

const useMovieList = () => {
  useAuth();
  const { replace } = useRouter();
  useEffect(() => {
    const searchQuery = window.location.search;
    if (searchQuery !== '') {
      replace('/movie-list');
    }
  }, []);
};

export default useMovieList;
