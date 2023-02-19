/* eslint-disable @next/next/no-img-element */
import { FormProvider } from 'react-hook-form';
import { QuoteId } from 'types';
import useAddComments from './useAddComment';

const AddComment: React.FC<QuoteId> = ({ quoteId }) => {
  const { image, t, methods, onSubmit } = useAddComments();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => onSubmit(data, quoteId))}
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
