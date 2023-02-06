import { NavBar } from 'components/navBar';
import { MyProfile } from 'components';
import { SideNavBar } from 'components/sideNavBar';
import useAuth from 'hooks/useAuth';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
        toastStyle={{
          backgroundColor: '#D1E7DD',
          width: '380px',
          marginRight: '50px',
        }}
        className='toast-position'
        position='top-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
