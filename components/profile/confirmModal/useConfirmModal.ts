import { useMobileToast } from 'components';
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
  const onSubmit = async (data: any) => {
    try {
      if (data?.name) {
        await updateUser(data);
        notification('Username changed succsessfully');
        dispatch(updateUsername());
      } else if (data?.email) {
        submitForm(data);
        setTimeout(() => {
          notification('Please check email to verify new address');
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
  return { dispatch, onSubmit };
};

export default useConfirmModal;
