import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addMovie } from 'services';

const useAddMovie = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const onSubmit = async (data: object) => {
    console.log(data);
    try {
      await addMovie(data);
      router.reload();
    } catch (errors: any) {
      console.log(errors);
    }
  };

  return { dispatch, errors, register, onSubmit, handleSubmit };
};

export default useAddMovie;
