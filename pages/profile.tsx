import { NavBar } from 'components/navBar';
import { MyProfile } from 'components';
import { SideNavBar } from 'components/sideNavBar';
import useAuth from 'hooks/useAuth';

export default function Profile() {
  useAuth();
  return (
    <div className='text-white'>
      <NavBar />
      <div className='flex'>
        <SideNavBar />
      </div>
      <div className=' lg:ml-[27rem] mt-10 flex justify-center items-center'>
        <MyProfile />
      </div>
    </div>
  );
}
