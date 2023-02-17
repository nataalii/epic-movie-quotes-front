/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { addComment } from 'services';
import { RootState } from 'types/stateTypes';

const AddComment = ({ quoteId }: { quoteId: string }) => {
  const { image } = useSelector((store: RootState) => store.user);
  const methods = useForm({ mode: 'all' });
  const { t } = useTranslation('news-feed');
  const queryClient = useQueryClient();

  const { mutate: addCommentMutation } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });
  const onSubmit = async (data: FieldValues, id: string) => {
    addCommentMutation(id, data);
    methods.setValue('body', '');
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => onSubmit(data, quoteId))}
        className='flex w-full'
      >
        <img
          src={`${image}`}
          alt='user avatar'
          className='w-[3.5rem] h-[3.5rem] rounded-full object-cover'
        />
        <input
          placeholder={t('write_a_comment') as string}
          className='outline-none block ml-3 pl-4 w-full bg-[#24222F] rounded-lg'
          {...methods.register('body', {
            required: ' Field is required',
          })}
        />
      </form>
    </FormProvider>
  );
};

export default AddComment;
