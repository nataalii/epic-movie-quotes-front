import { Button, ModalLayout, Success } from 'components';
import { useRouter } from 'next/router';

const PasswordChanged = () => {
  const router = useRouter();
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
          onClick={(e: { preventDefault: () => void }) => {
            e.preventDefault();
            router.push('/');
          }}
        />
      }
      onClose={() => {
        // onClose();
      }}
    ></ModalLayout>
  );
};

export default PasswordChanged;
