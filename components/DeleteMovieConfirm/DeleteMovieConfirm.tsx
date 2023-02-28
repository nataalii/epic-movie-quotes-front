import { Button } from 'components/button';
import { useMovieDetail } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { deleteMovieConfirm } from 'stores/modalSlice';

const DeleteMovieConfirm = ({ id }: { id: string }) => {
  const { removeMovie } = useMovieDetail();
  const { t } = useTranslation('movies');
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div
      className=' flex justify-center inset-0 bg-[#181623]  sm:bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={() => dispatch(deleteMovieConfirm())}
    >
      <div
        className=' max-w-[35rem] w-[85%] h-auto pb-20  bg-[#222030] mt-32 md:mt-auto m-auto rounded-xl '
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='flex flex-col justify-center items-center gap-8 pt-[4rem]'>
          <h2 className=' text-xl text-center px-5'>
            {t('delete_movie_confirmation')}
          </h2>
          <div className=' flex gap-5'>
            <button onClick={() => dispatch(deleteMovieConfirm())}>
              {t('cancel')}
            </button>
            <Button
              color='red'
              item={t('delete')}
              onClick={() => {
                removeMovie(id);
                dispatch(deleteMovieConfirm());
                router.replace('/movie-list');
              }}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovieConfirm;
