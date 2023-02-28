/* eslint-disable react-hooks/exhaustive-deps */
import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';
import { Post, Search } from 'components/';
import useAuth from 'hooks/useAuth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NewsFeed = () => {
  useAuth();
  const { replace } = useRouter();
  useEffect(() => {
    const searchQuery = window.location.search;
    if (searchQuery !== '') {
      replace('/news-feed');
    }
  }, []);

  return (
    <div className='text-white'>
      <Head>
        <title>News Feed</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <NavBar />
      <SideNavBar />
      <Search />
      <Post />
    </div>
  );
};

export default NewsFeed;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'news-feed',
        'notifications',
        'errors',
      ])),
    },
  };
}
