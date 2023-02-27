import { i18n, useTranslation } from 'next-i18next';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, registerRequest } from 'services';
import {
  closeRegisterModal,
  openLoginModal,
  openVerificationNotif,
} from 'stores/modalSlice';
import { RegisterModalTypes } from 'types';

const useRegisterModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passConfVisbility, setConfPassVisibility] = useState(false);

  const hideRegisterModalHandler = () => {
    dispatch(closeRegisterModal());
  };
  const showLoginModalHandler = () => {
    dispatch(openLoginModal());
  };
  const openVerificationNotifHandler = () => {
    dispatch(openVerificationNotif());
  };
  const onSubmit: SubmitHandler<RegisterModalTypes> = async (data) => {
    try {
      data['local'] = i18n?.language as string;
      await fetchCSRFToken();
      await registerRequest(data);
      hideRegisterModalHandler();
      openVerificationNotifHandler();
    } catch (error: any) {
      const errors = error.response.data.errors;
      if (errors?.name) {
        setError('name', {
          type: 'nameExists',
          message: t('errors:name_exists') as string,
        });
      }
      if (errors?.email) {
        setError('email', {
          type: 'emailExists',
          message: t('errors:email_exists') as string,
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
    hideRegisterModalHandler,
    showLoginModalHandler,
    passwordVisibility,
    setPasswordVisibility,
    passConfVisbility,
    setConfPassVisibility,
  };
};

export default useRegisterModal;
