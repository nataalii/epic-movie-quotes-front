/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { InputFile, InputText, InputTextArea } from 'components/movieList/form';
import { closeAddMovieModal } from 'stores/modalSlice';
import useAddMovie from './useAddMovie';
import Select from 'react-select';
import { Controller, FormProvider } from 'react-hook-form';
import { QuotesModalLayout } from 'components/layout';
const AddMovie = () => {
  const {
    dispatch,
    onSubmit,
    t,
    setImage,
    selectedImage,
    genres,
    methods,
    locale,
  } = useAddMovie();
  return (
    <QuotesModalLayout
      title={t('add_movie')}
      onClose={() => dispatch(closeAddMovieModal())}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                rules={{ required: t('errors:required') as string }}
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
                        padding: '5px',
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
                  required: t('errors:required') as string,
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
      </FormProvider>
    </QuotesModalLayout>
  );
};

export default AddMovie;
