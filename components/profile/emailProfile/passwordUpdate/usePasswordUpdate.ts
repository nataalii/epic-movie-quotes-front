import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { confirmPassword } from 'stores/modalSlice';

const usePasswordUpdate = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('profile');
  const methods = useForm({ mode: 'all' });
  const [password, setPassword] = useState('');
  const { confirmPasswordModal } = useSelector((store: any) => store.modal);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passConfVisbility, setConfPassVisibility] = useState(false);
  const onSubmit = () => {
    setPassword(methods.getValues('newPassword'));
    dispatch(confirmPassword());
  };

  return {
    dispatch,
    password,
    methods,
    confirmPasswordModal,
    passwordVisibility,
    setPasswordVisibility,
    setConfPassVisibility,
    passConfVisbility,
    onSubmit,
    t,
  };
};

export default usePasswordUpdate;
