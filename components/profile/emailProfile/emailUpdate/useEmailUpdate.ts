import { useMobileToast } from 'components/toasts';
import useEmails from 'hooks/useEmails';
import useTranslation from 'next-translate/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/stateTypes';
const useEmailUpdate = () => {
  const dispatch = useDispatch();
  const { confirmPasswordModal, addNewEmailModal } = useSelector(
    (store: RootState) => store.modal
  );
  const { email } = useSelector((store: RootState) => store.user);
  const { emails } = useEmails();
  const { t } = useTranslation('profile');
  const { notification } = useMobileToast();
  return {
    dispatch,
    confirmPasswordModal,
    email,
    emails,
    addNewEmailModal,
    notification,
    t,
  };
};

export default useEmailUpdate;
