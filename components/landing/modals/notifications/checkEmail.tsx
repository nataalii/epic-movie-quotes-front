import { Button, ModalLayout, EmailSent } from 'components';

const CheckEmail = () => {
  return (
    <ModalLayout
      image={<EmailSent />}
      title={'Check your email'}
      text={'We have sent a password recover instructions to your email'}
      button={
        <div className='flex flex-col gap-5 sm:max-w-[25rem] w-[90%] text-center '>
          <Button
            item='Return Home'
            color='red'
            size=' '
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              window.open('https://gmail.com');
            }}
          />
          <a className=' text-gray'>Skip, I&apos;ll confirm later </a>
        </div>
      }
      onClose={() => {
        // onClose();
      }}
    ></ModalLayout>
  );
};

export default CheckEmail;
