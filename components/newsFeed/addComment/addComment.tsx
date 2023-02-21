/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { QuoteId } from 'types';
import useAddComments from './useAddComment';
import { useQueryClient } from 'react-query';
import usePusher from 'hooks/usePusher';

const AddComment: React.FC<QuoteId> = ({ quoteId, quoteAuthorId }) => {
  const { image, t, methods, onSubmit } = useAddComments();
  const queryClient = useQueryClient();
  const echo = usePusher();
  useEffect(() => {
    if (window.Echo) {
      // console.log(window.Echo);
      window.Echo.channel('likes').listen('AddLike', (e: any) => {
        console.log('likes had been updated');
        console.log(e);
        queryClient.invalidateQueries('quotes');
      });
      window.Echo.channel('comments').listen('new-comment', (e: any) => {
        console.log('comments had been updated');
        console.log(e);
        queryClient.invalidateQueries('quotes');
      });
      return () => {
        // console.log('washa');
        window.Echo.leave('comments');
      };
    }
  }, [echo, queryClient]);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) =>
          onSubmit(data, quoteId, quoteAuthorId)
        )}
        className='flex items-center w-full sm:gap-5'
      >
        <img
          src={`${image}`}
          alt='user avatar'
          className='w-10 h-10 sm:w-[3.3rem] sm:h-[3.3rem] rounded-full object-cover'
        />
        <input
          placeholder={t('write') as string}
          className='outline-none block ml-3 pl-4 w-full bg-[#24222F] rounded-lg h-10 sm:h-[3.3rem]'
          {...methods.register('body', {
            required: ' Field is required',
          })}
        />
      </form>
    </FormProvider>
  );
};

export default AddComment;
