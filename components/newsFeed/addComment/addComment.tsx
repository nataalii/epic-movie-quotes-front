/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { QuoteId } from 'types';
import useAddComments from './useAddComment';
import { useQueryClient } from 'react-query';
import usePusher from 'hooks/usePusher';
import { searchQuotes } from 'services';
import { useDispatch } from 'react-redux';
import { setSearchedQuote } from 'stores/quoteSlice';
import { useRouter } from 'next/router';

const AddComment: React.FC<QuoteId> = ({ quoteId, quoteAuthorId }) => {
  const { image, t, methods, onSubmit } = useAddComments();
  const queryClient = useQueryClient();
  const echo = usePusher();
  const { query } = useRouter();
  const search = query.search as string;
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.Echo) {
      window.Echo.channel('likes').listen('AddLikeEvent', async () => {
        queryClient.invalidateQueries('quotes');
        if (search) {
          await searchQuotes({ search }).then((res) => {
            dispatch(setSearchedQuote(res.data));
          });
        }
      });
      window.Echo.channel('comments').listen('AddComment', async () => {
        queryClient.invalidateQueries('quotes');
        if (search) {
          await searchQuotes({ search }).then((res) => {
            dispatch(setSearchedQuote(res.data));
          });
        }
      });
      return () => {
        window.Echo.leave('comments');
        window.Echo.leave('likes');
      };
    }
  }, [dispatch, echo, search]);

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
