import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { confirmChanges } from 'stores/modalSlice';
import { RootState } from 'types/stateTypes';

const useUsernameUpdate = () => {
  const dispatch = useDispatch();
  const methods = useForm({ mode: 'all' });
  const [name, setName] = useState('');
  const { t } = useTranslation('profile');
  const { confirmChangesModal } = useSelector(
    (store: RootState) => store.modal
  );
  const onSubmit = async () => {
    setName(methods.getValues('name'));
    dispatch(confirmChanges());
  };
  return { dispatch, methods, name, setName, confirmChangesModal, onSubmit, t };
};

export default useUsernameUpdate;
