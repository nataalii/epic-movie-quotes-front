import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getMovieList, searchMovie } from 'services';
import { setSearchedMovies } from 'stores/movieSlice';

const useMovies = () => {
  const {
    data: response,
    isLoading,
    isError,
  } = useQuery('movies', getMovieList, {
    onSuccess: () => {},
  });
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  const router = useRouter();
  const locale = router.locale as 'en' | 'ge';
  const methods = useForm({ mode: 'all', defaultValues: { search: '' } });

  const handleSearch = async (data: any) => {
    try {
      const resp = await searchMovie(data);
      const movies = resp.data;
      dispatch(setSearchedMovies(movies.data));
      router.replace({ query: data });
    } catch {}
  };

  return {
    movies: response?.data,
    isLoading,
    isError,
    t,
    locale,
    dispatch,
    methods,
    handleSearch,
  };
};

export default useMovies;
