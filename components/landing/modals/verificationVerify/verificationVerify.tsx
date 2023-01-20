import { Button, ModalLayout, Success } from 'components';
import { useRouter } from 'next/router';

const VerificationVerify = () => {
  const router = useRouter();
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
          onClick={(e: { preventDefault: () => void }) => {
            e.preventDefault();
            router.push('/');
          }}
        />
      }
    ></ModalLayout>
  );
};
export default VerificationVerify;
