import { Home, Movie, Profile } from 'components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideNavBar = () => {
  const router = useRouter();
  return (
    <div className='hidden lg:flex lg:flex-col h-20 fixed top-28 left-16 gap-8'>
      <div className='flex items-center gap-5'>
        {router.asPath === '/profile' ? (
          <div className=' w-16 h-16 bg-red-600 rounded-full flex justify-center items-center'>
            <Profile />
          </div>
        ) : (
          <Profile />
        )}
        <div>
          <p className='text-2xl'>Natali CHarkviani</p>
          <Link href='/profile'>
            <p className='text-light-gray'>Edit your profile</p>
          </Link>
        </div>
      </div>
      <Link href='/news-feed'>
        <div className='flex items-center gap-10 text-lg ml-3'>
          <Home color={router.asPath === '/news-feed' ? '#E31221' : 'white'} />
          <p>News Feed</p>
        </div>
      </Link>
      <Link href='/movie-list'>
        <div className='flex items-center gap-10 text-lg ml-3'>
          <Movie
            color={router.asPath === '/movie-list' ? '#E31221' : 'white'}
          />
          <p>List of movies</p>
        </div>
      </Link>
    </div>
  );
};

export default SideNavBar;
