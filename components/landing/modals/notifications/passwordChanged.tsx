import { Button, ModalLayout, Success } from 'components';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { closePasswordChanged } from 'stores/modalSlice';

const PasswordChanged = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const closePasswordChangedHandler = () => {
    dispatch(closePasswordChanged());
    router.push('/');
  };
  return (
    <ModalLayout
      image={<Success />}
      title={'Success!'}
      text={'Your password has changed successfuly'}
      button={
        <Button
          item='Return Home'
          color='red'
          size='sm:max-w-[22rem] w-[90%] '
          onClick={closePasswordChangedHandler}
        />
      }
      onClose={closePasswordChangedHandler}
    ></ModalLayout>
  );
};

export default PasswordChanged;
