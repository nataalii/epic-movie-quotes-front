import { Button } from 'components/button';
import { useMovieDetail } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { deleteQuoteConfirm } from 'stores/modalSlice';

const DeleteQuoteConfirm = ({ id }: { id: string }) => {
  const { removeQuote } = useMovieDetail();
  const { t } = useTranslation('movies');
  const dispatch = useDispatch();
  return (
    <div
      className=' flex justify-center inset-0 bg-[#181623]  sm:bg-opacity-30 backdrop-blur-sm z-50 items-center fixed  '
      onClick={() => dispatch(deleteQuoteConfirm())}
    >
      <div
        className=' max-w-[35rem] w-[85%] h-auto pb-20  bg-[#222030] mt-32 md:mt-auto m-auto rounded-xl '
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='flex flex-col justify-center items-center gap-8 pt-[4rem]'>
          <h2 className=' text-xl text-center px-10'>
            {t('delete_quote_confirmation')}
          </h2>
          <div className=' flex gap-5'>
            <button onClick={() => dispatch(deleteQuoteConfirm())}>
              {t('cancel')}
            </button>
            <Button
              color='red'
              item={t('delete')}
              onClick={() => {
                removeQuote(id);
                dispatch(deleteQuoteConfirm());
              }}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteQuoteConfirm;
