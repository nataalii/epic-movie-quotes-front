/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { Movie } from 'components/icons';
import { QuotesModalLayout } from 'components/layout';
import { InputFile, InputTextArea, useMovies } from 'components/movieList';
import { REGEX_ENG, REGEX_GEO } from 'config';
import { useAddQuote } from 'hooks';
import { FieldValues, FormProvider } from 'react-hook-form';
import { writeQuote } from 'stores/modalSlice';
import useWriteQuote from './useWriteQuote';

const WriteQuote = () => {
  const { movies } = useMovies();
  const { methods, selectedImage, locale, setImage } = useAddQuote();
  const { dispatch, t, onSubmit } = useWriteQuote();
  return (
    <QuotesModalLayout
      title={t('write_quote')}
      onClose={() => dispatch(writeQuote())}
    >
      <FormProvider {...methods}>
        <form
          encType='multipart/form-data'
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-1'>
            <div className='relative'>
              <InputTextArea
                placeholder='Start Creating New Quote'
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
                placeholder='ახალი ციტატა'
                name='quote_ge'
                language={t('ka')}
                errors={methods.formState.errors.quote_ge}
                register={methods.register('quote_ge', {
                  pattern: {
                    value: REGEX_GEO,
                    message: t('errors:fill_in_georgian'),
                  },
                })}
              />
            </div>
            <div className='relative '>
              <InputFile
                errors={methods.formState.errors.image}
                register={methods.register('image', {
                  required: t('required') as string,
                  onChange: (e) => {
                    setImage(e);
                  },
                })}
              />
              {selectedImage && (
                <img
                  src={selectedImage}
                  className='h-96 w-full object-cover mb-5'
                  alt='movie image'
                />
              )}
            </div>
            <div className='relative pb-6'>
              <div className='absolute top-3 left-5'>
                <Movie color='white' />
              </div>
              <select
                {...methods.register('movie_id', {
                  required: t('required') as string,
                })}
                className='bg-black text-white rounded-lg block w-full px-16 h-16 outline-none'
                defaultValue=''
              >
                <option disabled value=''>
                  {t('choose_movie')}
                </option>
                {movies?.map((movie: FieldValues) => {
                  return (
                    <option value={movie.id} key={movie.id}>
                      {locale === 'en' ? movie?.title?.en : movie?.title?.ge}
                    </option>
                  );
                })}
              </select>
              <div className='relative'>
                <p className=' text-danger h-5 font-normal text-base my-1 '>
                  {methods.formState.errors.movie_id?.message as string}
                </p>
              </div>
            </div>

            <Button item={t('post')} color='red' size='w-full' />
          </div>
        </form>
      </FormProvider>
    </QuotesModalLayout>
  );
};

export default WriteQuote;
