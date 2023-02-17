import { AddQuoteIcon, SearchIcon } from 'components/icons';

const Search = () => {
  return (
    <div className='flex gap-5  xl:ml-[31rem] lg:ml-[25rem]  lg:mx-10 mx-5 mt-5'>
      <div className=' bg-blue-500 w-[14rem] h-14 rounded-lg flex justify-center items-center gap-3'>
        <AddQuoteIcon />
        <h3 className='text-[18px]'>Write new Quote</h3>
      </div>

      <div className='flex items-center gap-5 w-[500px]'>
        <SearchIcon />
        <input
          type='text'
          placeholder='Enter @ to search movies, Enter # to search quotes '
          className=' w-full bg-transparent'
        />
      </div>
    </div>
  );
};

export default Search;
