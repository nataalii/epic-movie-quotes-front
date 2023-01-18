import { deleteCookie } from 'cookies-next';
import useAuth from 'hooks/useAuth';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { fetchCSRFToken, login } from 'services';
import { LoginModalTypes } from 'types';

const useLoginModal = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  useAuth();

  const {
    register,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginModalTypes>({ mode: 'all' });

  const onSubmit = async (data: LoginModalTypes) => {
    try {
      await fetchCSRFToken();
      await login(data);
      router.push('/admin');
    } catch (errors: any) {
      deleteCookie('XSRF_TOKEN');
    }
  };

  return { t, register, getValues, handleSubmit, control, errors, onSubmit };
};

export default useLoginModal;
