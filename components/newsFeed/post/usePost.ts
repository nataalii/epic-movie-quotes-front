import { useLike } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { getAllQuotes } from 'services';
import { RootState } from 'types/stateTypes';

const usePost = () => {
  // const [page, setPage] = useState<number>(1);
  const { data: movieQuotes } = useQuery({
    queryKey: ['quotes'],
    queryFn: () => getAllQuotes({ range: 0 }),
    // queryFn: () => getAllQuotes(page),
    refetchOnWindowFocus: false,
    retry: 0,
  });

  // const { mutate: submit } = useMutation(
  //   (data) => {
  //     return getAllQuotes(data);
  //   },
  //   {
  //     onSuccess: (data) => {
  //       console.log(data);
  //     },
  //   }
  // );
  // const onSubmit = async (range: any) => {
  //   const resp = await getAllQuotes({ range: range });
  //   console.log(resp);
  //   return resp;
  // };
  // onSubmit();
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolledToBottom =
  //       window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.9;

  //     if (scrolledToBottom && !isFetching) {
  //       setPage(page + 1);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [isFetching, page]);

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
