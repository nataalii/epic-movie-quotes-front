import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';
import { Post, Search } from 'components/';
export default function NewsFeed() {
  return (
    <div className='text-white bg-[#181623]'>
      <NavBar></NavBar>
      <SideNavBar />
      <Search />
      <Post />
    </div>
  );
}
