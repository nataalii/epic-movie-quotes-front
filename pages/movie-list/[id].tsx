/* eslint-disable @next/next/no-img-element */
import {
  AddMovieIcon,
  Button,
  CommentIcon,
  Delete,
  Edit,
  Layout,
  Like,
  Eye,
  ThreeDots,
  ViewQuote,
  AddQuote,
} from 'components';
import { EditQuote } from 'components/movieList/editQuote';
import { useAuth, useMovieDetail } from 'hooks';
import { Key } from 'react';
import { addQoute, editQuote, viewQuote } from 'stores/modalSlice';
import { QuoteType } from 'types';

const Description = () => {
  useAuth();
  const {
    movie,
    t,
    removeMovie,
    router,
    dispatch,
    addQuoteModal,
    viewQuoteModal,
    editQuoteModal,
    quotes,
    removeQuote,
    handleThreeDotsClick,
    locale,
    selectedQuoteId,
    quote,
  } = useMovieDetail();
  return (
    <Layout>
      {addQuoteModal && <AddQuote />}
      {viewQuoteModal && <ViewQuote quote={quote?.[0]} />}
      {editQuoteModal && <EditQuote quote={quote?.[0]} />}
      <div className=' lg:ml-[27rem] my-10 lg:flex flex-col gap-7 '>
        <h1 className='hidden lg:block text-2xl'>{t('movie_description')}</h1>
        <div className='flex lg:flex-row lg:items-start flex-col items-center gap-7 '>
          <img
            src={movie?.image}
            alt='movie image'
            className=' max-w-[50rem] w-[80%] h-[25rem] object-cover rounded-lg'
          />
          <div className='flex flex-col lg:max-w-[35rem]  w-[80%] lg:mr-10 items-start gap-4'>
            <div className='flex w-full justify-between'>
              <h2 className=' text-2xl text-[#DDCCAA]'>
                {movie?.title[locale as string]} ({movie?.year})
              </h2>
              <div className='bg-blue-500 flex items-center justify-evenly w-28 cursor-pointer rounded-lg'>
                <Edit />
                <span className=' w-[0.3px] h-[60%] bg-gray' />
                <span
                  onClick={() => {
                    removeMovie(movie?.id);
                    router.replace('/movie-list');
                  }}
                >
                  <Delete />
                </span>
              </div>
            </div>
            <div className='flex gap-3 flex-wrap'>
              {movie?.genre.map(
                (
                  movieGenre: {
                    [x: string]: string;
                  },
                  index: Key
                ) => {
                  return (
                    <span
                      className=' bg-[#6C757D]  p-1 font-bold px-3 text-center rounded-md text-lg'
                      key={index}
                    >
                      {movieGenre[locale as string]}
                    </span>
                  );
                }
              )}
            </div>

            <h4 className=' text-light-gray font-bold text-lg'>
              {t('director')}
              <span className='text-white'>
                {movie?.director[locale as string]}
              </span>
            </h4>
            <h4 className=' text-light-gray font-bold text-lg'>
              {t('budget')}
              <span className='text-white'>{movie?.budget} $</span>
            </h4>
            <p className=' text-light-gray'>
              {movie?.description[locale as string]}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-5 w-[80%] m-auto lg:m-0 mt-5'>
          <div
            className='text-xl hidden lg:block'
            style={{ borderRight: '1px solid #ccc', paddingRight: '12px' }}
          >
            {t('quotes')} ({t('total')}
            {movie?.quotes === null ? 0 : movie?.quotes?.length})
          </div>
          <Button
            item={
              <div className='flex items-center gap-2'>
                <AddMovieIcon />
                {t('add_quote')}
              </div>
            }
            color='red'
            onClick={() => {
              dispatch(addQoute());
            }}
          />
        </div>
        <hr className='lg:hidden h-px  bg-gray border-0 w-[80%] m-auto my-10 ' />
        {quotes?.data.map((quote: QuoteType) => (
          <div
            key={quote.id}
            className='max-w-[50rem] w-[80%] h-[16rem] bg-blue-600 rounded-lg m-auto mb-5 lg:m-0 relative '
          >
            {selectedQuoteId === quote.id && (
              <div className='flex flex-col gap-7 p-8 pr-20 text-sm rounded-xl bg-blue-500 absolute -right-44 top-10'>
                <div
                  className='flex gap-4 cursor-pointer'
                  onClick={() => {
                    dispatch(viewQuote());
                  }}
                >
                  <Eye />
                  <h2>{t('view_quote')}</h2>
                </div>
                <div
                  className='flex gap-4 cursor-pointer'
                  onClick={() => dispatch(editQuote())}
                >
                  <Edit />
                  <h2>{t('edit')}</h2>
                </div>
                <div
                  className='flex gap-4 cursor-pointer'
                  onClick={() => removeQuote(quote.id)}
                >
                  <Delete />
                  <h2>{t('delete')}</h2>
                </div>
              </div>
            )}
            <div className='flex flex-col items-center gap-5 p-5 max-w-96'>
              <div
                className='absolute right-6 bottom-6 lg:top-6 cursor-pointer h-10'
                onClick={() => handleThreeDotsClick(quote.id)}
              >
                <ThreeDots />
              </div>
              <div className='flex items-center gap-5 w-[95%]'>
                <img
                  src={`${quote.image}`}
                  alt='movie image'
                  className=' w-56 h-[9rem]  object-cover rounded-lg'
                />
                <h1 className=' text-[#CED4DA] italic'>
                  &quot;{quote?.quote[locale]}&quot;
                </h1>
              </div>
              <hr className='h-px bg-gray border-0  w-[95%]' />
              <div className='flex gap-6 w-[95%] items-center'>
                <div className='flex gap-3 items-center'>
                  <h2>3</h2>
                  <CommentIcon />
                </div>
                <div className='flex gap-3 items-center'>
                  <h2>5</h2>
                  <Like />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Description;

// export async function getStaticPaths() {
// const data = await getMovieList();
// const movies = data.data;
// return {
// paths: movies.map((movie: { id: { toString: () => any } }) => {
//   return {
//     params: {
//       id: movie.id,
//     },
//   };
// }),
//   fallback: true,
// };
// }

// export async function getStaticProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'movies'])),
//     },
//   };
// }