import useTranslation from 'next-translate/useTranslation';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchCSRFToken, forgotPassword } from 'services';
import {
  closeForgotPassword,
  openCheckEmail,
  openLoginModal,
} from 'stores/modalSlice';

const useForgotPassword = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const { t } = useTranslation('authorization');
  const dispatch = useDispatch();
  const hideForgotPasswordHandler = () => {
    dispatch(closeForgotPassword());
  };
  const showLoginModalHandler = () => {
    dispatch(openLoginModal());
  };

  const showCheckEmailHandler = () => {
    dispatch(openCheckEmail());
  };

  const email = useWatch({
    control,
    name: 'email',
  });
  const onSubmit = async () => {
    try {
      await fetchCSRFToken();
      await forgotPassword({ email: email });
      hideForgotPasswordHandler();
      showCheckEmailHandler();
    } catch (error: any) {
      const emailError = error.response.data.errors?.email;
      setError('email', {
        type: 'notExist',
        message: emailError,
      });
    }
  };

  return {
    register,
    getFieldState,
    handleSubmit,
    errors,
    onSubmit,
    hideForgotPasswordHandler,
    showLoginModalHandler,
    t,
  };
};

export default useForgotPassword;
