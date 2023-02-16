/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { Photo } from 'components/icons';
import { QuotesModalLayout } from 'components/layout';
import { Controller, FormProvider } from 'react-hook-form';
import Select from 'react-select';
import { editMovie } from 'stores/modalSlice';
import { InputText, InputTextArea } from '../form';
import useEditMovie from './useEditMovie';

const EditMovie = () => {
  const {
    onSubmit,
    t,
    dispatch,
    movie,
    methods,
    setImage,
    selectedImage,
    locale,
    genres,
    defaultGenres,
  } = useEditMovie();

  return (
    <QuotesModalLayout
      title={t('edit_movie')}
      onClose={() => dispatch(editMovie())}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-1'>
            <div className='relative'>
              <InputText
                placeholder='Movie name'
                defaultValue={movie.title.en}
                name='title_en'
                language={t('eng')}
                errors={methods.formState.errors.title_en}
              />
            </div>
            <div className='relative'>
              <InputText
                placeholder='ფილმის სახელი'
                defaultValue={movie.title.ge}
                language={t('ka')}
                name='title_ge'
                errors={methods.formState.errors.title_ge}
              />
            </div>
            <div>
              <Controller
                control={methods.control}
                name='genres'
                rules={{ required: 'Field is required' }}
                render={({ field: { onChange, ref } }) => (
                  <Select
                    options={genres(locale)}
                    defaultValue={defaultGenres(locale)}
                    placeholder={t('genres')}
                    onChange={onChange}
                    isMulti
                    ref={ref}
                    closeMenuOnSelect
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        borderColor: '#6C757D',
                        backgroundColor: '',
                        height: '48px',
                      }),
                      multiValue: (styles) => {
                        return {
                          ...styles,
                          backgroundColor: '#6C757D',
                          color: 'white',
                        };
                      },
                      multiValueLabel: (styles) => ({
                        ...styles,
                        color: 'white',
                      }),
                      option: (styles) => ({
                        ...styles,
                        backgroundColor: '#11101A',
                      }),
                    }}
                  />
                )}
              />
              <div className='relative'>
                <p className=' text-danger h-5 font-normal text-base my-1 '>
                  {methods.formState.errors?.genres?.message as string}
                </p>
              </div>
            </div>
            <div className='relative'>
              <InputText
                placeholder='Director'
                defaultValue={movie.director.en}
                language={t('eng')}
                name='director_en'
                errors={methods.formState.errors.director_en}
              />
            </div>
            <div className='relative'>
              <InputText
                placeholder='რეჟისორი'
                defaultValue={movie.director.ge}
                language={t('ka')}
                name='director_ge'
                errors={methods.formState.errors.director_ge}
              />
            </div>
            <div className='relative'>
              <InputTextArea
                placeholder='Movie description'
                defaultValue={movie.description.en}
                language={t('eng')}
                name='description_en'
                errors={methods.formState.errors.description_en}
              />
            </div>
            <div className='relative'>
              <InputTextArea
                placeholder='ფილმის აღწერა'
                defaultValue={movie.director.ge}
                language={t('ka')}
                name='description_ge'
                errors={methods.formState.errors.description_ge}
              />
            </div>
            <div className='relative'>
              <InputText
                placeholder='Year'
                defaultValue={movie.year}
                name='year'
                type='number'
                errors={methods.formState.errors.year}
              />
            </div>
            <div className='relative'>
              <InputText
                placeholder='Budget'
                defaultValue={movie.budget}
                name='budget'
                type='number'
                errors={methods.formState.errors.budget}
              />
            </div>
            <div className='relative flex justify-center items-center mb-5 '>
              <img
                src={selectedImage || movie.image}
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

            <Button item={t('edit_movie')} color='red' />
          </div>
        </form>
      </FormProvider>
    </QuotesModalLayout>
  );
};

export default EditMovie;
