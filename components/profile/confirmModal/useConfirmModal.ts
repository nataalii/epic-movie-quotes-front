import { useMobileToast } from 'components';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { addEmail, updateUser } from 'services';
import { addNewEmail, confirmChanges, updateUsername } from 'stores/modalSlice';

const useConfirmModal = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate: submitForm } = useMutation(addEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('emails');
      setTimeout(() => {
        notification(t('check_email'));
      }, 3500);
      dispatch(addNewEmail());
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
  const { notification } = useMobileToast();
  const { t } = useTranslation('profile');
  const onSubmit = async (data: any) => {
    try {
      if (data?.name) {
        await updateUser(data);
        notification(t('username_changed'));
        dispatch(updateUsername());
      } else if (data?.email) {
        const resp = submitForm(data);
        console.log(resp);
      }
      dispatch(confirmChanges());
    } catch (error: any) {
      const errors = error.response.data.message;
      if (errors) {
        methods.setError('name', {
          type: 'alreadyExists',
          message: t('errors:name_exists') as string,
        });
      }
      dispatch(confirmChanges());
    }
  };
  return { dispatch, onSubmit, t };
};

export default useConfirmModal;
