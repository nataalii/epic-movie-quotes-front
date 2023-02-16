/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { AddMovieIcon, Quotes, SearchIcon } from 'components/icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { openAddMovieModal } from 'stores/modalSlice';
import useMovies from './useMovies';

const Movies = () => {
  const { movies } = useMovies();
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  const router = useRouter();
  const locale = router.locale as 'en' | 'ge';

  return (
    <div className=' flex flex-col justify-between lg:items-center max-w-[90rem] w-[90%]'>
      <div className='flex w-full justify-between '>
        <div className='flex lg:flex-row flex-col lg:items-center  lg:gap-3'>
          <h1 className='lg:text-2xl text-xl'>{t('my_list_of_movies')}</h1>
          <h1>
            ({t('total')} {movies?.length})
          </h1>
        </div>
        <div className=' flex gap-3 lg:items-center'>
          <div className=' lg:flex lg:gap-2 lg:items-center hidden'>
            <SearchIcon />
            <input
              type='text'
              // placeholder={t('search')}
              className=' bg-transparent w-20 outline-none text-xl'
            />
          </div>
          <div>
            <Button
              item={
                <div className='flex items-center gap-2'>
                  <AddMovieIcon />
                  {t('add_movie')}
                </div>
              }
              color='red'
              onClick={() => dispatch(openAddMovieModal())}
            />
          </div>
        </div>
      </div>
      <div className=' flex flex-wrap justify-around gap-x-10 max-w-[90rem] lg:w-full w-[90%] m-auto'>
        {movies?.map((movie: any) => (
          <div key={movie.id}>
            <div className='flex flex-col gap-3 max-w-96 h-[27rem] mt-14'>
              <img
                src={`${movie.image}`}
                alt='movie image'
                className='w-96 h-[20rem] object-cover rounded-lg'
              />
              <Link href='/movie-list/[id]' as={`/movie-list/${movie.id}`}>
                {`${movie.title[locale]} (${movie.year})`}
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
