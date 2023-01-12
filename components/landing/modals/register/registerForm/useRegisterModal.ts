import useTranslation from 'next-translate/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerRequest } from 'services';
import { RegisterModalTypes } from 'types';

const useRegisterModal = () => {
  const { t } = useTranslation('common');
  const {
    register,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterModalTypes>({ mode: 'all' });

  const onSubmit: SubmitHandler<RegisterModalTypes> = (data) => {
    registerRequest(data);
  };

  return { t, register, getValues, handleSubmit, control, errors, onSubmit };
};

export default useRegisterModal;
