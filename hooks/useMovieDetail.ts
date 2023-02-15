import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, getMovie, getUserQuotes } from 'services';
import { QuoteType } from 'types';
import { RootState } from 'types/stateTypes';

const useMovieDetail = () => {
  const router = useRouter();
  const { t } = useTranslation('movies');
  const { id } = router.query;
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [userQuotes, setUserQuotes] = useState([]);

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
      queryClient.invalidateQueries('movies');
    },
  });
  const removeMovie = async (id: string) => {
    deleteMovieMutation(id);
  };
  // get Quotes
  const { data: quotes } = useQuery('quotes', getUserQuotes, {
    onSuccess: () => {
      const userQuotes = quotes?.data.filter(
        (quote: QuoteType) => quote.movie_id === movie?.data.id
      );
      setUserQuotes(userQuotes);
    },
  });

  return {
    movie: movie?.data,
    isError,
    error,
    t,
    router,
    removeMovie,
    dispatch,
    addQuoteModal,
    userQuotes,
  };
};

export default useMovieDetail;
