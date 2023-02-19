import { useTranslation } from 'next-i18next';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { addComment } from 'services';
import { RootState } from 'types/stateTypes';

const useAddComments = () => {
  const { image } = useSelector((store: RootState) => store.user);
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('news-feed');
  const queryClient = useQueryClient();

  const { mutate: addCommentMutation } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('quotes');
    },
  });
  const onSubmit = async (data: FieldValues, id: string) => {
    addCommentMutation({ data, id });
    methods.setValue('body', '');
  };

  return { image, t, methods, onSubmit };
};
export default useAddComments;
