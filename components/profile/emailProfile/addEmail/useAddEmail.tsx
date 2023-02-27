import { Message } from 'components/toasts';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addEmail } from 'services';
import { closeAddEmailModal } from 'stores/modalSlice';

const useAddEmail = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { t } = useTranslation('profile');
  const methods = useForm({
    mode: 'all',
  });

  const { mutate: submitForm } = useMutation(addEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('emails');
      dispatch(closeAddEmailModal());
      setTimeout(() => {
        toast(<Message text={t('check_email')} />);
      }, 3500);
    },
    onError: (error: any) => {
      const errors = error.response.data.errors;
      if (errors) {
        methods.setError('email', {
          type: 'emailExists',
          message: t('errors:email_exists') as string,
        });
      }
    },
  });
  const onSubmit = async (data: any) => {
    submitForm(data);
  };

  return { methods, onSubmit, dispatch, submitForm, t };
};

export default useAddEmail;
