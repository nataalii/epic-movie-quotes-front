import useTranslation from 'next-translate/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
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

  console.log(control);

  const onSubmit: SubmitHandler<RegisterModalTypes> = (data) =>
    console.log(data);

  return { t, register, getValues, handleSubmit, control, errors, onSubmit };
};

export default useRegisterModal;
