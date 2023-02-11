import { useMobileToast } from 'components';
import useTranslation from 'next-translate/useTranslation';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUser } from 'services';
import { addNewEmail, confirmChanges, updateUsername } from 'stores/modalSlice';
import { useAddEmail } from '../emailProfile';

const useConfirmModal = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const { submitForm } = useAddEmail();
  const { notification } = useMobileToast();
  const { t } = useTranslation('profile');
  const onSubmit = async (data: any) => {
    try {
      if (data?.name) {
        await updateUser(data);
        notification(t('username_changed'));
        dispatch(updateUsername());
      } else if (data?.email) {
        submitForm(data);
        setTimeout(() => {
          notification(t('check_email'));
        }, 3500);
        dispatch(addNewEmail());
      }
      dispatch(confirmChanges());
    } catch (error: any) {
      const errors = error.response.data.message;
      if (errors) {
        methods.setError('name', {
          type: 'alreadyExists',
          message: error,
        });
      }
      dispatch(confirmChanges());
    }
  };
  return { dispatch, onSubmit, t };
};

export default useConfirmModal;
