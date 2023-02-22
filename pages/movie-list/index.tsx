import { Layout } from 'components';
import { AddMovie } from 'components/movieList';
import Movies from 'components/movieList/movies/movies';
import useAuth from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from 'types/stateTypes';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MovieList = () => {
  useAuth();
  const { addMovieModal } = useSelector((store: RootState) => store.modal);
  return (
    <Layout>
      <div className=' lg:ml-80 my-8 flex justify-center items-center'>
        <Movies />
      </div>
      {addMovieModal && <AddMovie />}
    </Layout>
  );
};

export default MovieList;
export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'movies', 'errors'])),
    },
  };
};
