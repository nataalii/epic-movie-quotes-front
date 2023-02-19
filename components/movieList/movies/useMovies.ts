import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getMovieList } from 'services';

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

  return { movies: response?.data, isLoading, isError, t, locale, dispatch };
};

export default useMovies;
