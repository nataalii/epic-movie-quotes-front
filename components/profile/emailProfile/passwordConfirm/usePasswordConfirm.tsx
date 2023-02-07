import { MobileMessage } from 'components/toasts';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from 'services';
import { confirmPassword, updatePassword } from 'stores/modalSlice';

const usePassworConfirm = () => {
  const dispatch = useDispatch();
  const onSubmit = async (password: { password: string }) => {
    try {
      await updateUser(password);
      dispatch(confirmPassword());
      dispatch(updatePassword());
      toast(<MobileMessage text='Password changed succsessfully' />);
    } catch (error: any) {
      console.log(error);
      dispatch(confirmPassword());
    }
  };

  return { dispatch, onSubmit };
};
export default usePassworConfirm;
