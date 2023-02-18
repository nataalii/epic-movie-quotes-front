import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAllQuotes } from 'services';

const usePost = () => {
  const [page, setPage] = useState<number>(1);
  const { data: movieQuotes, isFetching } = useQuery({
    queryKey: ['quotes', page],
    queryFn: () => getAllQuotes(page),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.9; // Check if user scrolled to 90% of the page

      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching, page]);

  const quotes = movieQuotes?.data;
  const { t } = useTranslation('news-feed');
  const locale = useRouter().locale as 'en' | 'ge';

  return { locale, t, quotes };
};

export default usePost;
