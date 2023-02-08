import useEmails from 'hooks/useEmails';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/stateTypes';
const useEmailUpdate = () => {
  const dispatch = useDispatch();
  const { confirmPasswordModal, addNewEmailModal } = useSelector(
    (store: RootState) => store.modal
  );
  const { email } = useSelector((store: RootState) => store.user);
  const { emails } = useEmails();
  return { dispatch, confirmPasswordModal, email, emails, addNewEmailModal };
};

export default useEmailUpdate;
