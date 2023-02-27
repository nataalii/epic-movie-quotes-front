import { BackArrow } from 'components/icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchQuotes } from 'services';
import { searchModal } from 'stores/modalSlice';
import { setSearchedQuote } from 'stores/quoteSlice';

const SearchMobile = () => {
  const { t } = useTranslation('news-feed');
  const dispatch = useDispatch();
  const { replace } = useRouter();
  const methods = useForm({ mode: 'all', defaultValues: { search: '' } });

  const handleSearch = async (data: { search: string }) => {
    try {
      const resp = await searchQuotes(data);
      dispatch(setSearchedQuote(resp.data));
    } catch {}
    replace({ query: data });
    dispatch(searchModal());
  };
  return (
    <div className=' h-full w-full bg-[#12101A] fixed inset-0 z-20'>
      <div className=' py-5'>
        <FormProvider {...methods}>
          <form
            className=' flex items-center gap-5 pb-4 pl-4'
            onSubmit={methods.handleSubmit(handleSearch)}
          >
            <span
              className=' cursor-pointer'
              onClick={() => {
                dispatch(searchModal());
              }}
            >
              <BackArrow />
            </span>
            <input
              type='text'
              className=' bg-transparent placeholder:text-white outline-none w-full'
              placeholder={t('Search') as string}
              {...methods.register('search')}
            />
          </form>
        </FormProvider>
        <hr className='h-px bg-gray border-0 ' />
        <div className=' flex flex-col p-10 gap-3 w-full text-light-gray opacity-70 font-thin'>
          <h1>{t('Enter @ to search movies')}</h1>
          <h1>{t('Enter # to search quotes')}</h1>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
