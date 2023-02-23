import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteMovie,
  deleteQuote,
  getMovie,
  getQuote,
  getUserQuotes,
} from 'services';
import { RootState } from 'types/stateTypes';

const useMovieDetail = () => {
  const router = useRouter();
  const { t } = useTranslation('movies');
  const { id } = router.query;
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const locale = router.locale as 'en' | 'ge';
  const [selectedQuoteId, setSelectedQuoteId] = useState<string | null>();
  const [quoteSelected, setQuoteSelected] = useState(false);
  const { addQuoteModal, viewQuoteModal, editQuoteModal, editMovieModal } =
    useSelector((store: RootState) => store.modal);
  const {
    data: movie,
    isError,
    error,
  } = useQuery({
    queryKey: ['movies', id],
    queryFn: () => getMovie(id as string),
    enabled: !!id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });
  // delete movie
  const { mutate: deleteMovieMutation } = useMutation(deleteMovie, {
    onSuccess: () => {
      console.log('dfs');
      queryClient.invalidateQueries('movies');
    },
  });
  const removeMovie = async (id: string) => {
    deleteMovieMutation(id);
  };

  // get Quotes
  const { data: quotes } = useQuery({
    queryKey: ['quotes', `movie id: ${movie?.data.id}`],
    queryFn: () => getUserQuotes(movie?.data.id as string),
    enabled: !!movie,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });
  // delete quote
  const { mutate: deleteQuoteMutation } = useMutation(deleteQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('quotes');
      queryClient.invalidateQueries('movies');
    },
  });

  const removeQuote = async (id: string) => {
    deleteQuoteMutation(id);
  };

  // get quote
  const { data: quote } = useQuery({
    queryKey: ['quotes', selectedQuoteId],
    queryFn: () => getQuote(selectedQuoteId as string),
    enabled: !!selectedQuoteId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });
  const handleThreeDotsClick = (quoteId: string) => {
    if (selectedQuoteId === quoteId) {
      setSelectedQuoteId(null);
      setQuoteSelected(false);
    } else {
      setSelectedQuoteId(quoteId);
      setQuoteSelected(true);
    }
  };

  const selectedQuoteRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedQuoteRef.current &&
        !selectedQuoteRef.current.contains(event.target as Node)
      ) {
        setQuoteSelected(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [selectedQuoteRef, setQuoteSelected]);
  return {
    movie: movie?.data,
    isError,
    error,
    t,
    router,
    removeMovie,
    dispatch,
    addQuoteModal,
    viewQuoteModal,
    editQuoteModal,
    quotes,
    removeQuote,
    quote: quote?.data,
    handleThreeDotsClick,
    locale,
    selectedQuoteId,
    quoteSelected,
    setQuoteSelected,
    editMovieModal,
    selectedQuoteRef,
  };
};

export default useMovieDetail;
