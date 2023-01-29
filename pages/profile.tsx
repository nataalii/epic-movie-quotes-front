import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';

export default function Profile() {
  return (
    <div className='text-white bg-[#181623]'>
      <NavBar></NavBar>
      <div className='flex'>
        <SideNavBar />
        <div className=' w-[500px] h-96 bg-slate-500 left-[500px]'>Profile</div>
      </div>
    </div>
  );
}
