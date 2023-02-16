/* eslint-disable @next/next/no-img-element */
import { CommentIcon, Delete, Edit, Like } from 'components/icons';
import { QuotesModalLayout } from 'components/layout';
import { useMovieDetail } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { editQuote, viewQuote } from 'stores/modalSlice';
import { QuoteType } from 'types';

const ViewQuote = (movieQuote: { quote: QuoteType }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  const quote = movieQuote.quote;
  const { removeQuote } = useMovieDetail();
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
          <h2>3</h2>
          <CommentIcon />
        </div>
        <div className='flex gap-3 items-center'>
          <h2>5</h2>
          <Like />
        </div>
      </div>
    </QuotesModalLayout>
  );
};

export default ViewQuote;
