import { MovieListHeader } from 'components';
import { AddMovie } from 'components/movieList';
import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';
import { useSelector } from 'react-redux';

export default function MovieList() {
  const { addMovieModal } = useSelector((store: any) => store.modal);
  return (
    <div className='text-white min-h-screen bg-[#181623]'>
      <NavBar />
      <SideNavBar />
      <div className=' lg:ml-96 mt-8 flex justify-center items-center'>
        <MovieListHeader />
      </div>
      {addMovieModal && <AddMovie />}
    </div>
  );
}
