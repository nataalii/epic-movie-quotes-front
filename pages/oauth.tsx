import { GetServerSideProps } from 'next';
import { oauthLogin } from 'services';

const OAuth = () => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const params = new URLSearchParams(context.req.url);
    const data = Object.fromEntries(params.entries());
    await oauthLogin(data);
    return {
      redirect: {
        destination: '/news-feed',
        permanent: false,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default OAuth;
