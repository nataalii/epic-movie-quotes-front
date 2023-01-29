import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';

export default function MovieList() {
  return (
    <div className='text-white bg-[#181623]'>
      <NavBar></NavBar>
      <div className='flex'>
        <SideNavBar />
        <div className=' h-96 bg-slate-500'>Movie list</div>
      </div>
    </div>
  );
}
