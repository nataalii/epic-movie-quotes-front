import { AddQuoteIcon, SearchIcon } from 'components/icons';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writeQuote } from 'stores/modalSlice';
import { RootState } from 'types/stateTypes';
import { WriteQuote } from '../writeQuote';

const Search = () => {
  const { t } = useTranslation('news-feed');
  const dispatch = useDispatch();
  const { writeQuoteModal } = useSelector((store: RootState) => store.modal);
  const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <div className='flex gap-5 items-center  xl:ml-[31.7rem] lg:ml-[25rem]  lg:mx-10  mx-5 mt-5'>
      {writeQuoteModal && <WriteQuote />}
      <div
        className={`lg:bg-blue-500 w-[50rem] h-12 rounded-lg flex pl-4 items-center gap-3 cursor-pointer ${
          isActive ? 'w-full lg:w-[14rem]' : 'w-[50rem]'
        } `}
        onClick={() => dispatch(writeQuote())}
      >
        <AddQuoteIcon />
        <h3>{t('write_quote')}</h3>
      </div>
      <div
        className={` hidden lg:flex flex-col gap-3 ${
          isActive ? '  lg:w-[690px]' : ' max-w-[110px] w-full'
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className='flex items-center gap-2 search-input'>
          <SearchIcon />
          <input
            type='text'
            placeholder={
              isActive
                ? (t('search_placeholder') as string)
                : (t('search_by') as string)
            }
            className=' w-full bg-transparent outline-none '
          />
        </div>
        {isActive && <hr className='h-px bg-gray border-0 ' />}
      </div>
    </div>
  );
};

export default Search;
