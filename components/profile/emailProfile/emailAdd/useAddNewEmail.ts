import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from 'types/stateTypes';
import { confirmChanges } from 'stores/modalSlice';
import useTranslation from 'next-translate/useTranslation';
const useAddNewEmail = () => {
  const dispatch = useDispatch();
  const methods = useForm({ mode: 'all' });
  const [email, setEmail] = useState('');
  const { t } = useTranslation('profile');
  const { confirmChangesModal } = useSelector(
    (store: RootState) => store.modal
  );
  const onSubmit = async () => {
    setEmail(methods.getValues('email'));
    dispatch(confirmChanges());
  };
  return {
    dispatch,
    methods,
    email,
    setEmail,
    confirmChangesModal,
    onSubmit,
    t,
  };
};

export default useAddNewEmail;
