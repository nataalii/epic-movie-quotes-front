/* eslint-disable @next/next/no-img-element */
import { InputFile, InputTextArea } from 'components/movieList/form';
import { Exit } from 'components/icons';
import { addQoute } from 'stores/modalSlice';
import { FormProvider } from 'react-hook-form';
import { Button } from 'components/button';
import useAddQuote from './useAddQuote';

const AddQuote = () => {
  const {
    dispatch,
    t,
    methods,
    selectedImage,
    locale,
    name,
    image,
    onSubmit,
    setImage,
    movie,
  } = useAddQuote();
  return (
    <>
      <div
        className=' lg:mt-20 flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
        onClick={() => dispatch(addQoute())}
      >
        <div
          className=' relative sm:w-[55rem] sm:h-auto pb-14 w-screen h-screen  bg-blue-600 m-auto rounded-xl lg:max-h-[90%] overflow-auto'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className=' absolute mt-7 right-10 cursor-pointer '
            onClick={() => dispatch(addQoute())}
          >
            <Exit />
          </div>
          <div className='flex flex-col items-center gap-6 mt-6'>
            <h2 className='text-white'>{t('write_new_quote')}</h2>
            <hr className='w-full border-[#efefef4d] ' />
          </div>
          <div className='flex justify-center'>
            <FormProvider {...methods}>
              <form
                className=' w-3/4'
                encType='multipart/form-data'
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <div className='flex flex-col gap-1'>
                  <div className=' flex gap-3 items-center my-7'>
                    <img
                      src={`${image}`}
                      alt='user avatar'
                      className=' w-20 h-20 rounded-full object-cover'
                    />
                    <h1>{name}</h1>
                  </div>
                  <div className='relative'>
                    <InputTextArea
                      placeholder='Start Creating New Quote'
                      name='quote_en'
                      language={t('eng')}
                      errors={methods.formState.errors.quote_en}
                      register={methods.register('quote_en', {
                        required: 'Field is required',
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
                        required: 'Field is required',
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
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        className='h-96 w-full object-cover mb-5'
                        alt='movie image'
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className='relative pb-6'>
                    <select
                      {...methods.register('movie_id')}
                      className='  bg-black text-white rounded-lgblock w-full px-16 h-16'
                    >
                      <option selected disabled value={movie.id}>
                        {locale == 'en' ? movie?.title?.en : movie?.title?.ge}
                      </option>
                    </select>
                  </div>

                  <Button item={t('post')} color='red' size='w-full' />
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddQuote;
