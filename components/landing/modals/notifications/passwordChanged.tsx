import { Button, ModalLayout, Success } from 'components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { closePasswordChanged } from 'stores/modalSlice';

const PasswordChanged = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('authorization');
  const router = useRouter();
  const closePasswordChangedHandler = () => {
    dispatch(closePasswordChanged());
    router.push('/');
  };
  return (
    <ModalLayout
      image={<Success />}
      title={t('success')}
      text={t('password_changed')}
      button={
        <Button
          item={t('return_home')}
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
