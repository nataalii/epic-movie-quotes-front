import { useMobileToast } from 'components/toasts';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { updateUser } from 'services';
import { confirmPassword, updatePassword } from 'stores/modalSlice';

const usePassworConfirm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('profile');
  const { notification } = useMobileToast();
  const onSubmit = async (password: { password: string }) => {
    try {
      await updateUser(password);
      dispatch(confirmPassword());
      dispatch(updatePassword());
      notification(t('password_changed'));
    } catch (error: any) {
      console.log(error);
      dispatch(confirmPassword());
    }
  };

  return { dispatch, onSubmit, t };
};
export default usePassworConfirm;
