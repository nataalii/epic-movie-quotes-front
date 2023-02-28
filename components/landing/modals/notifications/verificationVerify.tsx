import { Button, ModalLayout, Success } from 'components';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { closeVerificationVerify } from 'stores/modalSlice';

const VerificationVerify = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('authorization');
  const closeVerificationVerifyHandler = () => {
    dispatch(closeVerificationVerify());
  };
  return (
    <ModalLayout
      image={<Success />}
      title={t('thank_you')}
      text={t('activated')}
      button={
        <Button
          item={t('return_home')}
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
