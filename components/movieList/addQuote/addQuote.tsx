/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { QuotesModalLayout } from 'components/layout';
import { useAddQuote } from 'hooks';
import { InputFile, InputTextArea } from '../form';
import { FormProvider } from 'react-hook-form';
import { addQoute } from 'stores/modalSlice';
import { Key } from 'react';
import { REGEX_ENG, REGEX_GEO } from 'config';

const AddQuote = () => {
  const {
    dispatch,
    t,
    methods,
    selectedImage,
    locale,
    onSubmit,
    setImage,
    movie,
  } = useAddQuote();
  return (
    <QuotesModalLayout
      title={t('add_quote')}
      onClose={() => dispatch(addQoute())}
    >
      <div className='flex bg-black p-5 sm:bg-transparent sm:p-0 gap-5'>
        <img
          src={movie?.image}
          alt='movie image'
          className=' max-w-[18rem] w-[60%] sm:w-[80%] sm:h-[10rem] h-[6rem] object-cover rounded-lg'
        />
        <div className='flex flex-col lg:max-w-[35rem]  w-[80%] lg:mr-10 items-start sm:gap-4 gap-1'>
          <div className='flex w-full justify-between'>
            <h2 className=' sm:text-2xl text-base text-[#DDCCAA]'>
              {movie?.title[locale as string]} ({movie?.year})
            </h2>
          </div>
          <h1 className=' sm:hidden'>
            {t('director')} <span>{movie?.director[locale as string]}</span>
          </h1>
          <div className='flex sm:gap-3 gap-2 flex-wrap'>
            {movie?.genre.map(
              (
                movieGenre: {
                  [x: string]: string;
                },
                index: Key
              ) => {
                return (
                  <span
                    className=' bg-[#6C757D] font-bold py-[2px] px-3 text-center rounded-[4px] sm:rounded-md sm:text-lg text-xs'
                    key={index}
                  >
                    {movieGenre[locale as string]}
                  </span>
                );
              }
            )}
          </div>
          <h1 className='hidden sm:block'>
            {t('director')} <span>{movie?.director[locale as string]}</span>
          </h1>
        </div>
      </div>
      <FormProvider {...methods}>
        <form
          encType='multipart/form-data'
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-1'>
            <div className='relative'>
              <InputTextArea
                placeholder={t('quote_in_english') as string}
                name='quote_en'
                language={t('eng')}
                errors={methods.formState.errors.quote_en}
                register={methods.register('quote_en', {
                  pattern: {
                    value: REGEX_ENG,
                    message: t('errors:fill_in_english'),
                  },
                })}
              />
            </div>
            <div className='relative'>
              <InputTextArea
                placeholder={t('quote_in_georgian') as string}
                name='quote_ge'
                language={t('ka')}
                errors={methods.formState.errors.quote_ge}
                register={methods.register('quote_ge', {
                  pattern: {
                    value: REGEX_GEO,
                    message: t('errors:fill_in_english'),
                  },
                })}
              />
            </div>
            <div className='relative '>
              <InputFile
                errors={methods.formState.errors.image}
                register={methods.register('image', {
                  required: 'Field is required',
                  onChange: (e) => {
                    setImage(e);
                  },
                })}
              />
              {selectedImage && (
                <img
                  src={selectedImage}
                  className='sm:h-96 h-72 w-full object-cover mb-5'
                  alt='movie image'
                />
              )}
            </div>
            <div className='relative hidden'>
              <select
                {...methods.register('movie_id')}
                className='bg-black text-white rounded-lg block w-full px-16 h-16'
                value={movie.id}
              >
                <option value={movie.id}>
                  {locale == 'en' ? movie?.title?.en : movie?.title?.ge}
                </option>
              </select>
            </div>

            <Button item={t('post')} color='red' size='w-full' />
          </div>
        </form>
      </FormProvider>
    </QuotesModalLayout>
  );
};
export default AddQuote;
