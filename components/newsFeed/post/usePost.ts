import { useLike } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getAllQuotes } from 'services';
import { RootState } from 'types/stateTypes';

const usePost = () => {
  const { data: movieQuotes } = useQuery({
    queryKey: ['quotes'],
    queryFn: () => getAllQuotes({ range: 0 }),
    refetchOnWindowFocus: false,
    retry: 0,
  });

  const quotes = movieQuotes?.data;
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
  return { locale, t, quotes, handleLike, userId };
};

export default usePost;
