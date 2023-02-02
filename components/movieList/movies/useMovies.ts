import { useQuery } from 'react-query';
import { getMovieList } from 'services';

const useMovies = () => {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery('movies', getMovieList, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { movies: response?.data, isLoading, isError, error };
};

export default useMovies;
