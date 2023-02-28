import { AddQuoteIcon, SearchIcon } from 'components/icons';
import { writeQuote } from 'stores/modalSlice';
import { WriteQuote } from '../writeQuote';
import useSearch from './useSearch';

const Search = () => {
  const {
    t,
    dispatch,
    writeQuoteModal,
    isActive,
    methods,
    handleSearch,
    searchRef,
    setIsActive,
  } = useSearch();

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
        onClick={() => setIsActive(true)}
      >
        <form action='' onSubmit={methods.handleSubmit(handleSearch)}>
          <div className='flex items-center gap-2 search-input' ref={searchRef}>
            <SearchIcon />
            <input
              type='text'
              {...methods.register('search')}
              placeholder={
                isActive
                  ? (t('search_placeholder') as string)
                  : (t('search_by') as string)
              }
              className=' w-full bg-transparent outline-none '
            />
          </div>
        </form>

        {isActive && <hr className='h-px bg-gray border-0 ' />}
      </div>
    </div>
  );
};

export default Search;
