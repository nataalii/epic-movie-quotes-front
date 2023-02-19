/* eslint-disable @next/next/no-img-element */
import { Home, Movie } from 'components';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const SideNavBar = () => {
  const router = useRouter();
  const { name, image } = useSelector((store: any) => store.user);
  const { t } = useTranslation('common');
  return (
    <div>
      <div className='hidden lg:flex lg:flex-col h-20 fixed top-28 left-16 gap-8'>
        <div className='flex items-center gap-5'>
          {router.asPath === '/profile' ? (
            <div className=' w-16 h-16 bg-red-600 rounded-full flex justify-center items-center'>
              <img
                src={`${image}`}
                alt='avatar'
                className=' w-[3.8rem] h-[3.8rem] rounded-full object-cover'
              />
            </div>
          ) : (
            <img
              src={`${image}`}
              alt='avatar'
              className=' w-[3.8rem] h-[3.8rem] rounded-full object-cover'
            />
          )}
          <div>
            <p className='text-2xl'>{name}</p>
            <Link href='/profile'>
              <p className='text-light-gray'>{t('edit_your_profile')}</p>
            </Link>
          </div>
        </div>
        <Link href='/news-feed'>
          <div className='flex items-center gap-10 text-lg ml-3'>
            <Home
              color={router.asPath === '/news-feed' ? '#E31221' : 'white'}
            />
            <p>{t('news_feed')}</p>
          </div>
        </Link>
        <Link href='/movie-list'>
          <div className='flex items-center gap-10 text-lg ml-3'>
            <Movie
              color={
                router.asPath.includes('/movie-list') ? '#E31221' : 'white'
              }
            />
            <p>{t('list_of_movies')}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNavBar;
