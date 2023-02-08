import { MobileMessage } from 'components/toasts';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from 'services';
import { addNewEmail, confirmChanges, updateUsername } from 'stores/modalSlice';
import { useAddEmail } from '../addEmail';

const useConfirmModal = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const { submitForm } = useAddEmail();
  const onSubmit = async (data: any) => {
    try {
      if (data?.name) {
        await updateUser(data);
        toast(<MobileMessage text='Username changed succsessfully' />);
        dispatch(updateUsername());
      } else if (data?.email) {
        submitForm(data);
        setTimeout(() => {
          toast(
            <MobileMessage text='Please check email to verify new address' />
          );
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
