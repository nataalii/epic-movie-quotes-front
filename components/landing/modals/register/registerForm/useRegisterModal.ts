import useTranslation from 'next-translate/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterModalTypes } from 'types';
import axios from 'axios';

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
    axios
      .post('/api/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { t, register, getValues, handleSubmit, control, errors, onSubmit };
};

export default useRegisterModal;
