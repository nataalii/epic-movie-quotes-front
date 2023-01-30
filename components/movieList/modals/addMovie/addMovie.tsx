import { Button } from 'components/button';
import { Exit } from 'components/icons';
import { InputFile, InputText } from 'components/movieList/form';
import { closeAddMovieModal } from 'stores/modalSlice';
import useAddMovie from './useAddMovie';

const AddMovie = () => {
  const { dispatch, errors, onSubmit, handleSubmit, register } = useAddMovie();
  return (
    <div
      className=' mt-20 flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={() => dispatch(closeAddMovieModal())}
    >
      <div
        className=' relative sm:w-[55rem] sm:h-auto sm:pb-14 w-screen h-screen  bg-blue-600 m-auto rounded-xl max-h-[90%] overflow-auto'
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
          <h2 className='text-white'>Add Movie</h2>
          <hr className='w-full border-[#efefef4d] ' />
        </div>

        <div className='flex justify-center'>
          <form
            className='mt-10 w-3/4'
            encType='multipart/form-data'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col gap-1'>
              <div className='relative'>
                <InputText
                  placeholder='Movie name'
                  name='title_en'
                  language='Eng'
                  errors={errors.title_en}
                  register={register('title_en', {
                    required: 'Field is required',
                  })}
                />
              </div>
              <div className='relative'>
                <InputText
                  placeholder='ფილმის სახელი'
                  language='ქარ'
                  name='title_ka'
                  register={register('title_ka', {
                    required: 'Field is required',
                  })}
                  errors={errors.title_ka}
                />
              </div>
              <div className='relative'>
                <InputText
                  placeholder='Genre'
                  name='genre'
                  errors={errors.genre}
                  register={register('genre', {
                    required: 'Field is required',
                  })}
                />
              </div>
              <div className='relative'>
                <InputText
                  placeholder='Director'
                  language='Eng'
                  name='director_en'
                  errors={errors.director_en}
                  register={register('director_en', {
                    required: 'Field is required',
                  })}
                />
              </div>
              <div className='relative'>
                <InputText
                  placeholder='რეჟისორი'
                  language='Ka'
                  name='director_ka'
                  errors={errors.director_ka}
                  register={register('director_ka', {
                    required: 'Field is required',
                  })}
                />
              </div>
              <div className='relative'>
                <InputText
                  placeholder='Movie description'
                  language='En'
                  name='description_en'
                  errors={errors.description_en}
                  register={register('description_en', {
                    required: 'Field is required',
                  })}
                />
              </div>
              <div className='relative'>
                <InputText
                  placeholder='ფილმის აღწერა'
                  language='ქარ'
                  name='description_ka'
                  errors={errors.description_ka}
                  register={register('description_ka', {
                    required: 'Field is required',
                  })}
                />
              </div>
              <div className='relative'>
                <InputText
                  placeholder='Year'
                  name='year'
                  type='number'
                  errors={errors.year}
                  register={register('year', {
                    required: 'Field is required',
                  })}
                />
              </div>
              <div className='relative'>
                <InputText
                  placeholder='Budget'
                  name='budget'
                  type='number'
                  errors={errors.budget}
                  register={register('budget', {
                    required: 'Field is required',
                  })}
                />
              </div>
              <div className='relative'>
                <InputFile />
              </div>

              <Button item='Add Movie' color='red' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
