/* eslint-disable @next/next/no-img-element */
import { CommentIcon, Delete, Edit, Like } from 'components/icons';
import { QuotesModalLayout } from 'components/layout';
import { AddComment, Comment } from 'components/newsFeed';
import usePost from 'components/newsFeed/post/usePost';
import { useMovieDetail } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { editQuote, viewQuote } from 'stores/modalSlice';
import { QuoteType } from 'types';
import { RootState } from 'types/stateTypes';

const ViewQuote = (movieQuote: { quote: QuoteType }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  const quote = movieQuote.quote;
  const { removeQuote } = useMovieDetail();
  const { id: userId } = useSelector((store: RootState) => store.user);
  const { handleLike } = usePost();
  return (
    <QuotesModalLayout
      title={t('view_quote')}
      onClose={() => dispatch(viewQuote())}
    >
      <div className='flex items-center justify-evenly w-28 h-5 cursor-pointer rounded-lg absolute top-7'>
        <span
          onClick={() => {
            dispatch(viewQuote());
            dispatch(editQuote());
          }}
        >
          <Edit />
        </span>
        <div className=' w-[1px] h-[60%] bg-gray' />
        <span
          onClick={() => {
            removeQuote(quote.id);
            dispatch(viewQuote());
          }}
        >
          <Delete />
        </span>
      </div>
      <div className='flex items-center justify-between p-3 border border-gray rounded-sm'>
        <h1 className='italic'>{quote.quote.en}</h1>
        <h2 className=' text-gray'>{t('eng')}</h2>
      </div>
      <div className='flex items-center justify-between p-3 border border-gray rounded-sm'>
        <h1 className='italic'>{quote.quote.ge}</h1>
        <h2 className=' text-gray'>{t('ka')}</h2>
      </div>
      <img
        src={quote.image}
        alt='Quote Image'
        className=' h-[19rem] sm:h-[30rem] object-cover rounded-xl'
      />
      <div className='flex gap-6'>
        <div className='flex gap-3 items-center'>
          <h2>{quote.comments.length}</h2>
          <CommentIcon />
        </div>
        <div className='flex gap-3 items-center'>
          <h2>{quote.likes.length}</h2>
          <div
            className='cursor-pointer'
            onClick={() => handleLike(quote.id, quote.user_id)}
          >
            <Like
              color={`${
                quote.likes.some(
                  (like: { user_id: string }) => like.user_id === userId
                )
                  ? '#E31221'
                  : 'white'
              }`}
            />
          </div>
        </div>
      </div>
      <section className='flex flex-col max-w-[60rem] w-full max-h-[15rem] overflow-auto'>
        {quote.comments.map((comment: { id: string }) => {
          return (
            <div key={comment.id}>
              <Comment comment={comment} />
            </div>
          );
        })}
      </section>
      <section className=''>
        <AddComment quoteId={quote.id} quoteAuthorId={userId} />
      </section>
    </QuotesModalLayout>
  );
};

export default ViewQuote;
