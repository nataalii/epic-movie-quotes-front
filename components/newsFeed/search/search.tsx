import { AddQuoteIcon, SearchIcon } from 'components/icons';
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { writeQuote } from 'stores/modalSlice';
import { RootState } from 'types/stateTypes';
import { WriteQuote } from '../writeQuote';

const Search = () => {
  const { t } = useTranslation('news-feed');
  const dispatch = useDispatch();
  const { writeQuoteModal } = useSelector((store: RootState) => store.modal);

  return (
    <div className='flex gap-5 items-center  xl:ml-[31.7rem] lg:ml-[25rem]  lg:mx-10  mx-5 mt-5'>
      {writeQuoteModal && <WriteQuote />}
      <div
        className=' lg:bg-blue-500 w-[14rem] h-14 rounded-lg flex justify-center items-center gap-3 cursor-pointer'
        onClick={() => dispatch(writeQuote())}
      >
        <AddQuoteIcon />
        <h3 className='sm:text-[18px]'>{t('write_quote')}</h3>
      </div>
      <div className='hidden lg:flex flex-col gap-3 max-w-[690px] w-full'>
        <div className='flex items-center gap-5'>
          <SearchIcon />
          <input
            type='text'
            placeholder='Enter @ to search movies, Enter # to search quotes '
            className=' w-full bg-transparent '
          />
        </div>
        <hr className='h-px bg-gray border-0' />
      </div>
    </div>
  );
};

export default Search;
