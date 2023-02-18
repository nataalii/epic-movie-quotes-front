import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getAllQuotes } from 'services';

const usePost = () => {
  const { data: movieQuotes } = useQuery({
    queryKey: ['quotes'],
    queryFn: () => getAllQuotes(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });
  const { t } = useTranslation('news-feed');
  const quotes = movieQuotes?.data;
  const locale = useRouter().locale as 'en' | 'ge';

  return { quotes, locale, t };
};

export default usePost;
