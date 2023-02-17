/* eslint-disable @next/next/no-img-element */
import { CommentIcon, Like } from 'components/icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FieldValues } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getAllQuotes } from 'services';
import { AddComment } from '../addComment';
import { Comment } from '../comment';

const Post = () => {
  const { data: movieQuotes } = useQuery({
    queryKey: ['quotes'],
    queryFn: () => getAllQuotes(),
    // enabled: !!selectedQuoteId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });
  const { t } = useTranslation('news-feed');
  const quotes = movieQuotes?.data;
  const locale = useRouter().locale as 'en' | 'ge';

  return (
    <div className='flex flex-col items-center max-w-[60rem] xl:ml-[31rem] lg:ml-[25rem]  lg:mx-10 mx-5 mb-10 '>
      {quotes?.map((quote: any) => {
        return (
          <div
            className=' lg:bg-[#11101A] lg:rounded-xl lg:mb-4 mt-10'
            key={quote.id}
          >
            <div className='lg:mx-6'>
              <div className='flex items-center gap-4 lg:pt-6'>
                <img
                  src={`${quote.user.thumbnail}`}
                  alt='avatar'
                  className=' w-14 h-14 rounded-full object-cover'
                />
                <p>{quote.user?.name}</p>
              </div>
              <div className='mt-4'>
                <h4 className='text-sm sm:text-xl mb-4'>
                  &quot;{quote.quote[locale]}&quot;. {t('movie')} -
                  <span className='text-[#DDCCAA]'>
                    {quote.movie.title[locale]}.
                  </span>
                  <span className=' text-white'>({quote.movie.year})</span>
                </h4>

                <img
                  src={`${quote.image}`}
                  alt='Quote Image'
                  className=' w-[56rem] h-[30rem] object-cover'
                />
              </div>
              <section className='flex mt-5 text-xl items-center'>
                <div className='flex gap-4'>
                  <span>{quote.comments?.length}</span>
                  <CommentIcon />
                </div>
                <div className='flex gap-4 ml-5'>
                  <span className='ml-6'>10</span>
                  <Like />
                </div>
              </section>
              <hr className='h-px my-8 bg-gray border-0' />
              <section className='flex flex-col max-w-[60rem] w-full max-h-36 overflow-auto'>
                {quote.comments?.map((comment: FieldValues) => {
                  return (
                    <div key={comment.id}>
                      <Comment comment={comment} />
                    </div>
                  );
                })}
              </section>
              <section className='mt-4 flex  mb-4 lg:pb-6'>
                <AddComment quoteId={quote.id} />
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
