import { useMovieDetail } from 'hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { addQuote } from 'services';
import { addQoute } from 'stores/modalSlice';
import { RootState } from 'types/stateTypes';

const useAddQuote = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  const methods = useForm({ mode: 'all' });
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState('');
  const locale = router.locale as 'en' | 'ge';
  const { name, image } = useSelector((store: RootState) => store.user);
  const queryClient = useQueryClient();
  const { mutate: addQuoteMutation } = useMutation(addQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('quotes');
      queryClient.invalidateQueries('movies');
    },
  });

  const onSubmit = async (data: any) => {
    const updatedData = {
      ...data,
      image: data.image[0],
    };
    console.log(updatedData);
    addQuoteMutation(updatedData, {
      onSuccess: () => {
        dispatch(addQoute());
      },
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
  const onDrop = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.dataTransfer.files[0];
    methods.setValue('image', e.dataTransfer.files);
    reader.onload = (e: any) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  const { movie } = useMovieDetail();
  return {
    dispatch,
    t,
    methods,
    selectedImage,
    setSelectedImage,
    locale,
    name,
    image,
    onSubmit,
    setImage,
    movie,
    addQuoteMutation,
    onDrop,
  };
};
export default useAddQuote;
