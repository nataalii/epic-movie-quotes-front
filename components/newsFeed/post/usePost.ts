import { useLike } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getAllQuotes } from 'services';
import { RootState } from 'types/stateTypes';

const usePost = () => {
  interface Quote {
    id: number;
  }
  const [quoteData, setQuoteData] = useState<Quote[]>([]);
  const [range, setRange] = useState(0);
  const { data: movieQuotes } = useQuery({
    queryKey: ['quotes', range],
    queryFn: async () => {
      const allQuote = await getAllQuotes({
        range: range,
      });
      setQuoteData([...quoteData, ...allQuote.data.quotes]);
      return allQuote;
    },
    refetchOnWindowFocus: false,
    retry: 0,
    keepPreviousData: true,
  });
  console.log(quoteData);

  const quotes = movieQuotes?.data.quotes;
  const { t } = useTranslation('news-feed');
  const locale = useRouter().locale as 'en' | 'ge';
  const { likeMutation } = useLike();
  const { id: userId } = useSelector((store: RootState) => store.user);
  const handleLike = async (id: string, likeReceiver: string) => {
    const data = {
      from: userId,
      to: likeReceiver,
    };
    likeMutation({ id, data });
  };
  return {
    locale,
    t,
    quotes,
    handleLike,
    userId,
    movieQuotes,
    setRange,
    quoteData,
  };
};

export default usePost;
