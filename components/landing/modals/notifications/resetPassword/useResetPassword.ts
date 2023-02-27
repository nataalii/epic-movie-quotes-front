/* eslint-disable react-hooks/exhaustive-deps */
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, resetPassword } from 'services';
import {
  closeResetPassword,
  openLoginModal,
  openPasswordChanged,
} from 'stores/modalSlice';
import { ResetPasswordTypes } from 'types';

const useResetPassword = () => {
  const {
    register,
    getFieldState,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passConfVisbility, setConfPassVisibility] = useState(false);

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter();
  const { t } = useTranslation('authorization');
  const dispatch = useDispatch();

  const hideResetPasswordHandler = () => {
    dispatch(closeResetPassword());
  };
  const showPasswordChangedHandler = () => {
    dispatch(openPasswordChanged());
  };
  const showLoginModalHandler = () => {
    dispatch(openLoginModal());
  };
  useEffect(() => {
    const { email, token } = router.query;
    setEmail(email as string);
    setToken(token as string);
    router.replace('/' + i18n?.language);
  }, []);
  const onSubmit = async (data: ResetPasswordTypes) => {
    try {
      data['token'] = token;
      data['email'] = email;
      await fetchCSRFToken();
      await resetPassword(data);
      hideResetPasswordHandler();
      showPasswordChangedHandler();
    } catch (error: any) {
      console.log(error);
    }
  };
  return {
    register,
    getFieldState,
    getValues,
    handleSubmit,
    errors,
    passwordVisibility,
    setPasswordVisibility,
    passConfVisbility,
    setConfPassVisibility,
    onSubmit,
    hideResetPasswordHandler,
    showPasswordChangedHandler,
    showLoginModalHandler,
    t,
  };
};

export default useResetPassword;
