import useTranslation from 'next-translate/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { fetchCSRFToken, registerRequest } from 'services';
import { RegisterModalTypes } from 'types';

const useRegisterModal = () => {
  const { t } = useTranslation('common');
  const {
    register,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<RegisterModalTypes>({ mode: 'all' });

  const onSubmit: SubmitHandler<RegisterModalTypes> = async (data) => {
    try {
      await fetchCSRFToken();
      await registerRequest(data);
    } catch (error: any) {
      const nameError = error.response.data.errors.name;
      const emailError = error.response.data.errors.email;
      if (nameError) {
        setError('name', {
          type: 'nameExists',
          message: nameError[0],
        });
      }
      if (emailError) {
        setError('email', {
          type: 'emailExists',
          message: emailError[0],
        });
      }
    }
  };

  return {
    t,
    register,
    getValues,
    handleSubmit,
    control,
    errors,
    onSubmit,
  };
};

export default useRegisterModal;
