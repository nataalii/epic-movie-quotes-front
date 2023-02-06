import { AddMovie } from 'components/movieList';
import Movies from 'components/movieList/movies/movies';
import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';
import useAuth from 'hooks/useAuth';
import { useSelector } from 'react-redux';

export default function MovieList() {
  useAuth();
  const { addMovieModal } = useSelector((store: any) => store.modal);

  return (
    <div className='text-white h-full'>
      <NavBar />
      <SideNavBar />
      <div className=' lg:ml-96 mt-8 flex justify-center items-center'>
        <Movies />
      </div>
      {addMovieModal && <AddMovie />}
    </div>
  );
}
