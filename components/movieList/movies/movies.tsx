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
        <div className=' flex lg:items-center'>
          <div className=' lg:flex lg:gap-2 lg:items-center hidden' id='search'>
            <SearchIcon />
            <input
              type='text'
              placeholder={t('search') as string}
              className=' bg-transparent w-20 outline-none text-xl'
            />
          </div>
          <div>
            <Button
              item={
                <div className='flex items-center gap-2 text-sm sm:text-base'>
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
      <div className='grid grid-flow-row md:gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
        {movies?.map((movie: any) => (
          <div key={movie.id}>
            <Link href='/movie-list/[id]' as={`/movie-list/${movie.id}`}>
              <div className='flex flex-col gap-3 mt-14 md:max-w-[27rem] max-w-full'>
                <img
                  src={`${movie.image}`}
                  alt='movie image'
                  className='h-[19rem] md:h-[21rem] object-cover rounded-2xl'
                />

                <p className=' lg:text-2xl'>{`${movie.title[locale]} (${movie.year})`}</p>
                <div className='flex items-center gap-3 '>
                  <h1 className=' text-xl'>
                    {movie.quotes === null ? 0 : movie.quotes.length}
                  </h1>
                  <Quotes />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
