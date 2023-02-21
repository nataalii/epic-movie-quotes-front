import { useTranslation } from 'next-i18next';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { addComment } from 'services';
import { RootState } from 'types/stateTypes';

const useAddComments = () => {
  const { image, id: userId } = useSelector((store: RootState) => store.user);
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('news-feed');
  const queryClient = useQueryClient();

  const { mutate: addCommentMutation } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('quotes');
      queryClient.invalidateQueries('notifications');
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
    console.log(data);
    addCommentMutation({ data, id });
    methods.setValue('body', '');
  };

  return { image, t, methods, onSubmit };
};
export default useAddComments;
