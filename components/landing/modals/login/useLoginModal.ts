import { deleteCookie } from 'cookies-next';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchCSRFToken, login } from 'services';
import { LoginModalTypes } from 'types';
import {
  closeLoginModal,
  openVerificationNotif,
  openForgotPassword,
  openRegisterModal,
} from 'stores/modalSlice';
import { useDispatch } from 'react-redux';
import useAuth from 'hooks/useAuth';
const useLoginModal = () => {
  const { t } = useTranslation('authorization');
  const router = useRouter();
  const dispatch = useDispatch();
  useAuth();
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
      if (error === 'Not verified') {
        dispatch(closeLoginModal());
        dispatch(openVerificationNotif());
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
