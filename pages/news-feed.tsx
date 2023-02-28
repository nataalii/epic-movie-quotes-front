/* eslint-disable react-hooks/exhaustive-deps */
import { NavBar } from 'components/navBar';
import { SideNavBar } from 'components/sideNavBar';
import { Post, Search } from 'components/';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useNewsFeed } from 'hooks';
const NewsFeed = () => {
  useNewsFeed();
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
        'movies',
      ])),
    },
  };
}
