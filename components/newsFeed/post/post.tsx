/* eslint-disable @next/next/no-img-element */
import { CommentIcon, Like } from 'components/icons';
import useLike from 'hooks/useLike';
import { FieldValues } from 'react-hook-form';
import { AddComment } from '../addComment';
import { Comment } from '../comment';
import usePost from './usePost';

const Post = () => {
  const { likeMutation } = useLike();
  const { locale, t, quotes } = usePost();
  const handleLike = async (id: string) => {
    likeMutation(id);
  };
  return (
    <div className='flex flex-col items-center max-w-[60rem] xl:ml-[31rem] lg:ml-[25rem]  lg:mx-10 sm:mx-5 mb-10 -mt-4 '>
      {quotes?.map((quote: any) => {
        return (
          <div
            className=' bg-[#11101A] sm:rounded-xl sm:mb-4 sm:mt-10 mt-7'
            key={quote.id}
          >
            <div className=' my-6 lg:my-0 mx-6'>
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
                    &nbsp;{quote.movie.title[locale]}.
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
                  onClick={() => handleLike(quote.id)}
                >
                  <span className='ml-6'>{quote.likes.length}</span>
                  <Like color={'white'} />
                </div>
              </section>
              <hr className='h-px my-8 bg-gray border-0' />
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
