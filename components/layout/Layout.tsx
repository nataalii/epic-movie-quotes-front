import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }: { children: any }) => {
  return (
    <div className='text-white font-helvetica'>
      <NavBar />
      <SideNavBar />
      {children}
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
};

export default Layout;
