import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, fetchCSRFToken } from 'services';

const useAddMovie = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((store: any) => store.user);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const onSubmit = async (data: object) => {
    const updatedData = {
      ...data,
      image: data.image[0],
    };
    router.reload();
    try {
      await fetchCSRFToken();
      await addMovie(updatedData);
    } catch (errors: any) {
      console.log(errors);
    }
  };

  return { dispatch, errors, register, onSubmit, handleSubmit, name };
};

export default useAddMovie;
