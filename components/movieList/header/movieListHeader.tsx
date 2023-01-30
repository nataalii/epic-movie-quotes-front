import { AddMovieIcon, Button, SearchIcon } from 'components';
import { useDispatch } from 'react-redux';
import { openAddMovieModal } from 'stores/modalSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  return (
    <div className=' flex justify-between lg:items-center max-w-[90rem] w-[90%]'>
      <div className='flex lg:flex-row flex-col  gap-3'>
        <h1 className='lg:text-2xl text-xl'>My list of Movies</h1>
        <h1 className=' text-lg'>(Total 0)</h1>
      </div>
      <div className=' flex gap-3 lg:items-center'>
        <div className=' lg:flex lg:gap-2 lg:items-center hidden'>
          <SearchIcon />
          <input
            type='text'
            placeholder='Search'
            className=' bg-transparent w-20 outline-none text-xl'
          />
        </div>
        <div className='relative '>
          <Button
            item={<AddMovieIcon /> && <h1>Add Movie</h1>}
            color='red'
            onClick={() => dispatch(openAddMovieModal())}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
