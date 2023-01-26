import { Button, ModalLayout, Success } from 'components';
import { useDispatch } from 'react-redux';
import { closeVerificationVerify } from 'stores/modalSlice';

const VerificationVerify = () => {
  const dispatch = useDispatch();
  const closeVerificationVerifyHandler = () => {
    dispatch(closeVerificationVerify());
  };
  return (
    <ModalLayout
      image={<Success />}
      title={'Thank you!'}
      text={'Your account has been activated.'}
      button={
        <Button
          item='Return Home'
          color='red'
          size='sm:max-w-[25rem] w-[90%]  '
          onClick={closeVerificationVerifyHandler}
        />
      }
      onClose={closeVerificationVerifyHandler}
    ></ModalLayout>
  );
};
export default VerificationVerify;
