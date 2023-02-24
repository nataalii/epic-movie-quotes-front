import { NavBar } from 'components/navBar';
import {
  GoogleDesktop,
  GoogleMobile,
  MobileDesign,
  MyProfile,
} from 'components';
import { SideNavBar } from 'components/sideNavBar';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from 'types/stateTypes';
import { useAuth } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Profile() {
  useAuth();
  const { google_id } = useSelector((store: RootState) => store.user);
  return (
    <div className='text-white'>
      <Head>
        <title>Profile</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <NavBar />
      <div className='flex'>
        <SideNavBar />
      </div>
      <div className='hidden lg:ml-[27rem] mt-10 lg:flex justify-center items-center'>
        {google_id !== null ? <GoogleDesktop /> : <MyProfile />}
      </div>
      <div className='lg:hidden'>
        {google_id !== null ? <GoogleMobile /> : <MobileDesign />}
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'profile',
        'errors',
        'notifications',
      ])),
    },
  };
}
