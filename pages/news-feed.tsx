import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';
import { Post, Search } from 'components/';
export default function NewsFeed() {
  return (
    <div className='text-white min-h-screen  bg-[#181623]'>
      <NavBar />
      <SideNavBar />
      <Search />
      <Post />
    </div>
  );
}
