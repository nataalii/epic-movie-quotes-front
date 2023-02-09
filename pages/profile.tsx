import { NavBar } from 'components/navBar';
import { GoogleMobile } from 'components';
import { SideNavBar } from 'components/sideNavBar';
import useAuth from 'hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import GoogleDektop from 'components/profile/googleProfile/googleDesktop';

export default function Profile() {
  useAuth();
  return (
    <div className='text-white'>
      <NavBar />
      <div className='flex'>
        <SideNavBar />
      </div>
      <div className='hidden lg:ml-[27rem] mt-10 lg:flex justify-center items-center'>
        {/* <MyProfile /> */}
        <GoogleDektop />
      </div>
      <div className='lg:hidden'>
        {/* <MobileDesign /> */}
        <GoogleMobile />
      </div>
      <ToastContainer
        toastStyle={{
          backgroundColor: '#D1E7DD',
          width: '380px',
        }}
        className='toast-position'
        position='top-right'
        autoClose={2000}
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
