import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { addEmail } from 'services';
import { closeAddEmailModal } from 'stores/modalSlice';

const useAddEmail = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const { mutate: submitForm } = useMutation(addEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('emails');
      dispatch(closeAddEmailModal());
    },
    onError: (error: any) => {
      const errors = error.response.data.errors;
      setError('email', {
        type: 'emailExists',
        message: errors?.email[0],
      });
    },
  });
  const onSubmit = async (data: any) => {
    submitForm(data);
  };

  return { register, handleSubmit, onSubmit, errors, dispatch };
};

export default useAddEmail;
