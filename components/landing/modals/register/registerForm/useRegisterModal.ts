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
      const errors = error.response.data.errors;
      if (errors.name) {
        setError('name', {
          type: 'nameExists',
          message: errors.name[0],
        });
      }
      if (errors.email) {
        setError('email', {
          type: 'emailExists',
          message: errors.email[0],
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
