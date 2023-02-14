import { yupResolver } from '@hookform/resolvers/yup';
import { Message } from 'components/toasts';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addEmail } from 'services';
import { closeAddEmailModal } from 'stores/modalSlice';
import { schema } from 'validations';

const useAddEmail = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { t } = useTranslation('profile');
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const { mutate: submitForm } = useMutation(addEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('emails');
      dispatch(closeAddEmailModal());
    },
    onError: (error: any) => {
      const errors = error.response.data.errors;
      methods.setError('email', {
        type: 'emailExists',
        message: errors?.email[0],
      });
    },
  });
  const onSubmit = async (data: any) => {
    submitForm(data);
    setTimeout(() => {
      toast(<Message text={t('check_email')} />);
    }, 3500);
  };

  return { methods, onSubmit, dispatch, submitForm, t };
};

export default useAddEmail;
