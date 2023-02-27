/* eslint-disable @next/next/no-img-element */
import { CommentIcon, Like } from 'components/icons';
import { FieldValues } from 'react-hook-form';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux';
import { RootState } from 'types/stateTypes';
import { AddComment } from '../addComment';
import { Comment } from '../comment';
import usePost from './usePost';

const Post = () => {
  const {
    locale,
    t,
    handleLike,
    userId,
    quoteData,
    fetchNextPage,
    hasNextPage,
  } = usePost();
  const searchQuotes = useSelector(
    (state: RootState) => state.quotes.searchQuotes
  );
  const dataToSearch = searchQuotes?.length !== 0 ? searchQuotes : quoteData;

  return (
    <div className='flex flex-col items-center max-w-[60rem] xl:ml-[31rem] lg:ml-[25rem]  lg:mx-10 sm:mx-5 mb-10 -mt-4 '>
      {dataToSearch && (
        <InfiniteScroll
          dataLength={dataToSearch.length}
          next={() => {
            fetchNextPage();
          }}
          scrollThreshold={0.9}
          hasMore={hasNextPage as boolean}
          loader={<h4 className=' mt-10'>Loading...</h4>}
        >
          {dataToSearch?.map((quote: any) => {
            return (
              <div
                className=' bg-[#11101A] sm:rounded-xl sm:mb-4 sm:mt-10 mt-7'
                key={quote.id}
              >
                <div className=' my-0 lg:my-0 mx-6 py-4'>
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
                        &nbsp;{quote.title[locale]}.
                      </span>
                      <span className=' text-white'>
                        &nbsp;({quote.movie.year})
                      </span>
                    </h4>

                    <img
                      src={`${quote.image}`}
                      alt='Quote Image'
                      className=' w-[56rem] h-[13rem] rounded-md sm:h-[30rem] object-cover'
                    />
                  </div>
                  <section className='flex mt-5 text-xl items-center'>
                    <div className='flex gap-4'>
                      <span>{quote.comments?.length}</span>
                      <CommentIcon />
                    </div>
                    <div
                      className='flex gap-4 ml-5 cursor-pointer'
                      onClick={() => handleLike(quote.id, quote.user.id)}
                    >
                      <span className='ml-6'>{quote.likes?.length}</span>
                      <Like
                        color={`${
                          quote.likes?.some(
                            (like: { user_id: string }) =>
                              like.user_id === userId
                          )
                            ? '#E31221'
                            : 'white'
                        }`}
                      />
                    </div>
                  </section>
                  <hr className='h-px my-8 bg-gray border-0 bg-opacity-50' />
                  <section className='flex flex-col max-w-[60rem] w-full max-h-[15rem] overflow-auto'>
                    {quote.comments?.map((comment: FieldValues) => {
                      return (
                        <div key={comment.id}>
                          <Comment comment={comment} />
                        </div>
                      );
                    })}
                  </section>
                  <section className='mt-4 flex  mb-4 lg:pb-6'>
                    <AddComment
                      quoteId={quote.id}
                      quoteAuthorId={quote.user.id}
                    />
                  </section>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Post;
