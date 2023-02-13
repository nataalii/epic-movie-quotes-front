import { Button, EmailSent, ModalLayout } from 'components';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { closeVerificationNotif } from 'stores/modalSlice';

const VerificationNotice = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('authorization');
  const hideVerificationNotiHandler = () => {
    dispatch(closeVerificationNotif());
  };
  return (
    <ModalLayout
      image={<EmailSent />}
      title={t('thank_you')}
      text={t('recover_instructions')}
      button={
        <Button
          item={t('go_to_my_email')}
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
