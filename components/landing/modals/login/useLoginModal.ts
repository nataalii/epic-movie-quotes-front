import { deleteCookie } from 'cookies-next';
import useAuth from 'hooks/useAuth';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchCSRFToken, login } from 'services';
import { LoginModalTypes } from 'types';
import {
  closeLoginModal,
  openForgotPassword,
  openRegisterModal,
} from 'stores/modalSlice';
import { useDispatch } from 'react-redux';
const useLoginModal = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const dispatch = useDispatch();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const hideLoginModalHandler = () => {
    dispatch(closeLoginModal());
  };
  const showRegisterModalHandler = () => {
    dispatch(openRegisterModal());
  };
  const showForgotPasswordHandler = () => {
    dispatch(openForgotPassword());
  };
  useAuth();

  const {
    register,
    getValues,
    getFieldState,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<LoginModalTypes>({ mode: 'all' });

  const onSubmit = async (data: LoginModalTypes) => {
    try {
      await fetchCSRFToken();
      await login(data);
      router.push('/news-feed');
    } catch (errors: any) {
      const error = errors.response.data.message;
      if (error) {
        setError('email', {
          type: 'invalidCredentials',
          message: error,
        });
        setError('password', {
          type: 'invalidCredentials',
        });
      }
      deleteCookie('XSRF-TOKEN');
    }
  };

  return {
    t,
    register,
    getFieldState,
    getValues,
    handleSubmit,
    control,
    errors,
    onSubmit,
    passwordVisibility,
    setPasswordVisibility,
    hideLoginModalHandler,
    showRegisterModalHandler,
    showForgotPasswordHandler,
  };
};

export default useLoginModal;
