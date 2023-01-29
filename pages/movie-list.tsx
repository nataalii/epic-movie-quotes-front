import { MovieListHeader } from 'components';
import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';

export default function MovieList() {
  return (
    <div className='text-white min-h-screen bg-[#181623]'>
      <NavBar />
      <SideNavBar />
      <div className=' lg:ml-96 mt-8 flex justify-center items-center'>
        <MovieListHeader />
      </div>
    </div>
  );
}
