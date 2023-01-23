import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { fetchCSRFToken, registerRequest } from 'services';
import { RegisterModalTypes } from 'types';

const useRegisterModal = () => {
  const { t } = useTranslation('common');
  const {
    register,
    getValues,
    getFieldState,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<RegisterModalTypes>({
    mode: 'all',
    defaultValues: { name: '', email: '', password: '', confirm_password: '' },
  });
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const onSubmit: SubmitHandler<RegisterModalTypes> = async (data) => {
    try {
      await fetchCSRFToken();
      const registered = await registerRequest(data);
      if (registered) {
        setShowNoticeModal(true);
      }
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
    getFieldState,
    handleSubmit,
    control,
    errors,
    onSubmit,
    showNoticeModal,
    setShowNoticeModal,
  };
};

export default useRegisterModal;
