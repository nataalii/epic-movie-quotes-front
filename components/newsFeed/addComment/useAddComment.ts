import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, searchQuotes } from 'services';
import { setSearchedQuote } from 'stores/quoteSlice';
import { RootState } from 'types/stateTypes';

const useAddComments = () => {
  const { image, id: userId } = useSelector((store: RootState) => store.user);
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('news-feed');
  const queryClient = useQueryClient();
  const { query } = useRouter();
  const search = query.search as string;
  const dispatch = useDispatch();
  const { mutate: addCommentMutation } = useMutation(addComment, {
    onSuccess: async () => {
      queryClient.invalidateQueries('quotes');
      queryClient.invalidateQueries('notifications');
      if (search) {
        await searchQuotes({ search }).then((res) => {
          dispatch(setSearchedQuote(res.data));
        });
      }
    },
  });
  const onSubmit = async (
    values: FieldValues,
    id: string,
    quoteAuthorId: string
  ) => {
    const data = {
      ...values,
      from: userId,
      to: quoteAuthorId,
    };
    addCommentMutation({ data, id });
    methods.setValue('body', '');
  };

  return { image, t, methods, onSubmit };
};
export default useAddComments;
