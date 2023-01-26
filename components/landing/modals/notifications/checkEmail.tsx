import { Button, ModalLayout, EmailSent } from 'components';
import { useDispatch } from 'react-redux';
import { closeCheckEmail } from 'stores/modalSlice';

const CheckEmail = () => {
  const dispatch = useDispatch();
  const hideCheckEmailVerification = () => {
    dispatch(closeCheckEmail());
  };
  return (
    <ModalLayout
      image={<EmailSent />}
      title={'Check your email'}
      text={'We have sent a password recover instructions to your email'}
      button={
        <div className='flex flex-col gap-5 sm:max-w-[25rem] w-[90%] text-center '>
          <Button
            item='Go to my email'
            color='red'
            size=' '
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              window.open('https://gmail.com');
            }}
          />
          <a className=' text-gray' onClick={hideCheckEmailVerification}>
            Skip, I&apos;ll confirm later
          </a>
        </div>
      }
      onClose={hideCheckEmailVerification}
    ></ModalLayout>
  );
};

export default CheckEmail;
