import { Button } from 'components/button';
import { AddMovieIcon, Quotes, SearchIcon } from 'components/icons';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openAddMovieModal } from 'stores/modalSlice';
import useMovies from './useMovies';

const Movies = () => {
  const { movies } = useMovies();
  const dispatch = useDispatch();
  return (
    <div className=' flex flex-col justify-between lg:items-center max-w-[90rem] w-[90%]'>
      <div className='flex w-full justify-between '>
        <div className='flex lg:flex-row flex-col  gap-3'>
          <h1 className='lg:text-2xl text-xl'>My list of Movies</h1>
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
          <div>
            <Button
              item={<AddMovieIcon /> && <h1>Add Movie</h1>}
              color='red'
              onClick={() => dispatch(openAddMovieModal())}
            />
          </div>
        </div>
      </div>
      <div className=' flex flex-wrap gap-16  max-w-[90rem]  '>
        {movies?.map((movie: any) => (
          // eslint-disable-next-line react/jsx-key
          <div key={movie.id}>
            <div className='flex flex-col gap-3 w-96 h-[450px] mt-14'>
              <img
                src={`${movie.image}`}
                alt='movie image'
                className='w-96 h-[27rem] object-cover rounded-lg'
              />
              <Link className='' href={`/movie/${movie.id}`}>
                {`${movie.title.en} (${movie.year})`}
              </Link>
              <div className='flex items-center gap-3 '>
                <h1 className=' text-xl'>
                  {movie.quotes === null ? 0 : movie.quotes.length}
                </h1>
                <Quotes />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
