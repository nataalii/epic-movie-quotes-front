import { Button, EmailSent, ModalLayout } from 'components';
import { useDispatch } from 'react-redux';
import { closeVerificationNotif } from 'stores/modalSlice';

const VerificationNotice = () => {
  const dispatch = useDispatch();
  const hideVerificationNotiHandler = () => {
    dispatch(closeVerificationNotif());
  };
  return (
    <ModalLayout
      image={<EmailSent />}
      title={'Thank you!'}
      text={
        'Please check your email and follow the instructions to activate your account'
      }
      button={
        <Button
          item='Go to my email'
          color='red'
          size='sm:max-w-[25rem] w-[90%]  '
          onClick={(e: { preventDefault: () => void }) => {
            e.preventDefault();
            window.open('https://gmail.com');
          }}
        />
      }
      onClose={hideVerificationNotiHandler}
    ></ModalLayout>
  );
};
export default VerificationNotice;