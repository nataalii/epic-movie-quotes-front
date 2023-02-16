import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from 'services';
import { closeAddMovieModal } from 'stores/modalSlice';
import { RootState } from 'types/stateTypes';
const useAddMovie = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { name, image } = useSelector((store: RootState) => store.user);
  const router = useRouter();
  const { t } = useTranslation('movies');
  const [selectedImage, setSelectedImage] = useState('');
  const locale = router.locale as 'en' | 'ge';
  const movieGenres = [
    { en: 'Musical', ge: 'მიუზიკლი' },
    { en: 'Action', ge: 'ექშენი' },
    { en: 'Comedy', ge: 'კომედია' },
    { en: 'Western', ge: 'ვესტერნი' },
    { en: 'Thriller', ge: 'თრილერი' },
    { en: 'Sci-fi', ge: 'საი-ფაი' },
  ];
  const genres = (locale: 'en' | 'ge') => {
    return movieGenres.map((genre) => {
      return { value: genre, label: genre[locale] };
    });
  };
  const setImage = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setSelectedImage(e.target.result);
    };
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    }
  };
  const methods = useForm({ mode: 'all' });
  const { mutate: submitForm } = useMutation(addMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries('movies');
      dispatch(closeAddMovieModal());
    },
  });
  const onSubmit = async (data: any) => {
    console.log(data);

    const updatedData = {
      ...data,
      image: data.image[0],
      genre: data.genres.map((genre: any) => genre.value),
    };
    delete data.genres;
    submitForm(updatedData, {
      onError: () => {},
    });
  };

  return {
    dispatch,
    methods,
    onSubmit,
    name,
    image,
    t,
    selectedImage,
    setImage,
    genres,
    locale,
  };
};

export default useAddMovie;
