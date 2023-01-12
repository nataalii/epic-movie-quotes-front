import useTranslation from 'next-translate/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginModalTypes } from 'types';

const useLoginModal = () => {
  const { t } = useTranslation('common');
  const {
    register,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginModalTypes>({ mode: 'all' });

  const onSubmit: SubmitHandler<LoginModalTypes> = (data) => console.log(data);

  return { t, register, getValues, handleSubmit, control, errors, onSubmit };
};

export default useLoginModal;
