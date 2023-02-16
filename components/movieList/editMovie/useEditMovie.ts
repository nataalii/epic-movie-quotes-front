import { useAddQuote, useMovieDetail } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { updateMovie } from 'services';
import { editMovie } from 'stores/modalSlice';
import { useAddMovie } from '../addMovie';

const useEditMovie = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('movies');
  const dispatch = useDispatch();
  const { movie } = useMovieDetail();
  const methods = useForm({ mode: 'all' });
  const { setImage, selectedImage } = useAddQuote();
  const locale = useRouter().locale as 'en' | 'ge';
  const { genres } = useAddMovie();

  // update movie
  const { mutate: updateMovieMutation } = useMutation(updateMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries('movies');
    },
  });

  const onSubmit = (data: FieldValues) => {
    const updatedData = {
      ...data,
      image: data.image[0],
      id: movie.id,
      genre: data.genres.map((genre: any) => genre.value),
    };
    updateMovieMutation(updatedData);
    dispatch(editMovie());
  };
  const defaultGenres = (locale: 'en' | 'ge') => {
    return movie.genre.map((genre: { en: string; ge: string }) => {
      return { value: genre, label: genre[locale] };
    });
  };
  return {
    onSubmit,
    t,
    dispatch,
    movie,
    methods,
    setImage,
    selectedImage,
    locale,
    genres,
    defaultGenres,
  };
};

export default useEditMovie;
