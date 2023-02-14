import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovie } from 'services';
import { RootState } from 'types/stateTypes';

const useMovieDetail = () => {
  const router = useRouter();
  const { t } = useTranslation('movies');
  const { id } = router.query;
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { addQuoteModal } = useSelector((store: RootState) => store.modal);
  const {
    data: movie,
    isError,
    error,
  } = useQuery(['movies', id], () => getMovie(id), {
    onError: (error) => {
      console.log(error);
    },
  });
  // delete movie
  const { mutate: deleteMovieMutation } = useMutation(deleteMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries('delete movies');
    },
  });
  const removeMovie = async (id: string) => {
    deleteMovieMutation(id);
  };

  // get Quotes

  return {
    movie: movie?.data,
    isError,
    error,
    t,
    router,
    removeMovie,
    dispatch,
    addQuoteModal,
  };
};

export default useMovieDetail;
