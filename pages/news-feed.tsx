import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';
import { Post, Search } from 'components/';
import useAuth from 'hooks/useAuth';

const NewsFeed = () => {
  useAuth();

  return (
    <div className='text-white'>
      <NavBar />
      <SideNavBar />
      <Search />
      <Post />
    </div>
  );
};

export default NewsFeed;
