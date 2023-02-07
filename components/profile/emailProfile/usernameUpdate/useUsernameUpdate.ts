import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { confirmUsername } from 'stores/modalSlice';

const useUsernameUpdate = () => {
  const dispatch = useDispatch();
  const methods = useForm({ mode: 'all' });
  const [name, setName] = useState('');
  const { confirmUsernameModal } = useSelector((store: any) => store.modal);
  const onSubmit = async () => {
    setName(methods.getValues('name'));
    dispatch(confirmUsername());
  };
  return { dispatch, methods, name, setName, confirmUsernameModal, onSubmit };
};

export default useUsernameUpdate;
