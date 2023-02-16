/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { Exit } from 'components/icons';
import { InputFile, InputText, InputTextArea } from 'components/movieList/form';
import { closeAddMovieModal } from 'stores/modalSlice';
import useAddMovie from './useAddMovie';
import Select from 'react-select';
import { Controller, FormProvider } from 'react-hook-form';
const AddMovie = () => {
  const {
    dispatch,
    onSubmit,
    name,
    image,
    t,
    setImage,
    selectedImage,
    genres,
    methods,
    locale,
  } = useAddMovie();
  return (
    <div
      className=' lg:mt-20 flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={() => dispatch(closeAddMovieModal())}
    >
      <div
        className=' relative sm:w-[55rem] sm:h-auto pb-14 w-screen h-screen  bg-blue-600 m-auto rounded-xl lg:max-h-[90%] overflow-auto'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className=' absolute mt-7 right-10 cursor-pointer '
          onClick={() => dispatch(closeAddMovieModal())}
        >
          <Exit />
        </div>
        <div className='flex flex-col items-center gap-6 mt-6'>
          <h2 className='text-white'>{t('add_movie')}</h2>
          <hr className='w-full border-[#efefef4d] ' />
        </div>
        <FormProvider {...methods}>
          <div className='flex justify-center'>
            <form
              className=' w-3/4'
              encType='multipart/form-data'
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className=' flex gap-3 items-center my-7'>
                <img
                  src={`${image}`}
                  alt='user avatar'
                  className=' w-20 h-20 rounded-full object-cover'
                />
                <h1>{name}</h1>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='relative'>
                  <InputText
                    placeholder='Movie name'
                    name='title_en'
                    language={t('eng')}
                    errors={methods.formState.errors.title_en}
                  />
                </div>
                <div className='relative'>
                  <InputText
                    placeholder='ფილმის სახელი'
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
                    language={t('eng')}
                    name='director_en'
                    errors={methods.formState.errors.director_en}
                  />
                </div>
                <div className='relative'>
                  <InputText
                    placeholder='რეჟისორი'
                    language={t('ka')}
                    name='director_ge'
                    errors={methods.formState.errors.director_ge}
                  />
                </div>
                <div className='relative'>
                  <InputTextArea
                    placeholder='Movie description'
                    language={t('eng')}
                    name='description_en'
                    errors={methods.formState.errors.description_en}
                  />
                </div>
                <div className='relative'>
                  <InputTextArea
                    placeholder='ფილმის აღწერა'
                    language={t('ka')}
                    name='description_ge'
                    errors={methods.formState.errors.description_ge}
                  />
                </div>
                <div className='relative'>
                  <InputText
                    placeholder='Year'
                    name='year'
                    type='number'
                    errors={methods.formState.errors.year}
                  />
                </div>
                <div className='relative'>
                  <InputText
                    placeholder='Budget'
                    name='budget'
                    type='number'
                    errors={methods.formState.errors.budget}
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

                <Button item={t('add_movie')} color='red' />
              </div>
            </form>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddMovie;
