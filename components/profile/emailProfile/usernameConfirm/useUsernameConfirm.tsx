import { MobileMessage } from 'components/toasts';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from 'services';
import { confirmUsername, updateUsername } from 'stores/modalSlice';

const useUsernameConfirm = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (name: object) => {
    try {
      await updateUser(name);
      dispatch(confirmUsername());
      dispatch(updateUsername());
      toast(<MobileMessage text='Username changed succsessfully' />);
    } catch (error: any) {
      const errors = error.response.data.message;
      if (errors) {
        methods.setError('name', {
          type: 'alreadyExists',
          message: error,
        });
      }
      dispatch(confirmUsername());
    }
  };
  return { dispatch, onSubmit };
};

export default useUsernameConfirm;
