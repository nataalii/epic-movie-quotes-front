import { Home, Movie, Profile } from 'components';

const SideNavBar = () => {
  return (
    <div className='hidden lg:flex lg:flex-col h-20 fixed top-28 left-16 gap-8'>
      <div className='flex items-center gap-5'>
        <Profile />
        <div>
          <p className='text-2xl'>Natali CHarkviani</p>
          <p className='text-light-gray'>Edit your profile</p>
        </div>
      </div>
      <div className='flex items-center gap-10 text-lg ml-3'>
        <Home></Home>
        <p>News Feed</p>
      </div>
      <div className='flex items-center gap-10 text-lg ml-3'>
        <Movie></Movie>
        <p>List of movies</p>
      </div>
    </div>
  );
};

export default SideNavBar;
