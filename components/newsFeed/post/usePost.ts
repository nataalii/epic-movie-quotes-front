import { useLike } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getAllQuotes } from 'services';
import { RootState } from 'types/stateTypes';

const usePost = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'quotes',
    async ({ pageParam = 0 }) => {
      const allQuote = await getAllQuotes({
        range: pageParam,
      });
      return allQuote.data;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        const totalQuotes = lastPage.quote_count;
        const nextPage = pages.length * 3;
        return nextPage < totalQuotes ? nextPage : undefined;
      },
      refetchOnWindowFocus: false,
    }
  );

  const quoteData = data?.pages.flatMap((page) => page.quotes);
  const { t } = useTranslation('news-feed');
  const locale = useRouter().locale as 'en' | 'ge';
  const { query } = useRouter();

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
    handleLike,
    userId,
    fetchNextPage,
    hasNextPage,
    quoteData,
    query,
  };
};

export default usePost;
