import { Button, ModalLayout, EmailSent } from 'components';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { closeCheckEmail } from 'stores/modalSlice';

const CheckEmail = () => {
  const dispatch = useDispatch();
  const hideCheckEmailVerification = () => {
    dispatch(closeCheckEmail());
  };
  const { t } = useTranslation('authorization');
  return (
    <ModalLayout
      image={<EmailSent />}
      title={t('check_email')}
      text={t('please_check_email')}
      button={
        <div className='flex flex-col gap-5 sm:max-w-[25rem] w-[90%] text-center '>
          <Button
            item={t('go_to_my_email')}
            color='red'
            size=' '
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              window.open('https://gmail.com');
            }}
          />
          <a className=' text-gray' onClick={hideCheckEmailVerification}>
            {t('skip')}
          </a>
        </div>
      }
      onClose={hideCheckEmailVerification}
    ></ModalLayout>
  );
};

export default CheckEmail;
