/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { Delete, Photo } from 'components/icons';
import { QuotesModalLayout } from 'components/layout';
import { FormProvider } from 'react-hook-form';
import { editQuote } from 'stores/modalSlice';
import { QuoteType } from 'types';
import { InputTextArea } from '../form';
import useEditQuotes from './useEditQuotes';

const EditQuote = (movieQuote: { quote: QuoteType }) => {
  const quote = movieQuote.quote;
  const {
    dispatch,
    t,
    removeQuote,
    methods,
    onSubmit,
    setImage,
    selectedImage,
  } = useEditQuotes(quote);
  return (
    <QuotesModalLayout
      title={t('edit_quote')}
      onClose={() => dispatch(editQuote())}
    >
      <span
        className='flex gap-2 absolute top-7'
        onClick={() => {
          removeQuote(quote.id);
          dispatch(editQuote());
        }}
      >
        <Delete />
        Delete
      </span>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='relative'>
            <InputTextArea
              defaultValue={quote.quote.en}
              errors={methods.formState.errors.quote_en}
              language={t('eng')}
              name='quote_en'
            />
          </div>
          <div className='relative'>
            <InputTextArea
              defaultValue={quote.quote.ge}
              errors={methods.formState.errors.quote_ge}
              language={t('ka')}
              name='quote_ge'
            />
          </div>

          <div className='relative flex justify-center items-center '>
            <img
              src={selectedImage || quote.image}
              alt='Quote Image'
              className=' w-full h-[30rem] object-cover'
            />
            <div className='bg-[#181623] opacity-70 rounded-lg p-3 absolute '>
              <label
                htmlFor='input'
                className='flex flex-col items-center cursor-pointer text-white'
              >
                <Photo />
                {t('change_photo')}
              </label>
              <input
                id='input'
                type='file'
                className='hidden'
                {...methods.register('image', {
                  onChange: (e) => {
                    setImage(e);
                  },
                })}
              />
            </div>
          </div>
          <div className='relative my-4'>
            <p className=' text-danger h-5 font-normal text-base my-1 '>
              {methods.formState.errors?.image?.message as string}
            </p>
          </div>
          <div className='flex flex-col'>
            <Button item={t('save_changes')} color='red' />
          </div>
        </form>
      </FormProvider>
    </QuotesModalLayout>
  );
};
export default EditQuote;
