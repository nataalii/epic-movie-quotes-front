import {
  Button,
  BackgroundImage,
  Footer,
  Header,
  RegisterModal,
  LoginModal,
  ForgotPassword,
  CheckEmail,
  ResetPassword,
  PasswordChanged,
  VerificationVerify,
} from 'components';
import VerificationNotice from 'components/landing/modals/notifications/verificationNotice';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openRegisterModal } from 'stores/modalSlice';
import { RootState } from 'types/stateTypes';
export default function Home() {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const {
    registerModal,
    loginModal,
    forgotPassword,
    checkEmail,
    resetPassword,
    passwordChanged,
    verificationNotif,
    verificationVerify,
  } = useSelector((store: RootState) => store.modal);
  return (
    <Fragment>
      <div className='bg-[#11101A] text-[#DDCCAA] font-helvetica '>
        <Header />
        <div className='flex justify-center items-center gap-6 flex-col h-[42rem]  '>
          <h1 className='lg:max-w-[42rem] max-w-[20rem] w-[80%] text-2xl lg:text-[3.7rem] text-center font-semibold leading-normal whitespace-pre-wrap'>
            {t('welcome_text')}
          </h1>
          <Button
            item={t('get_started')}
            color='red'
            size='lg:text-2xl'
            onClick={() => dispatch(openRegisterModal())}
          />
        </div>
        <BackgroundImage
          img='bg-interstellar bg-linear-top-left  '
          quote={t('interstellar_quote')}
          movieName={t('interstellar_title')}
        />
        <BackgroundImage
          img='bg-tenebaums lg:bg-fixed'
          quote={t('tenenbaums_quote')}
          movieName={t('tenenbaums_title')}
        />
        <BackgroundImage
          img='bg-lord-of-rings  lg:bg-fixed'
          quote={t('lotr_quote')}
          movieName={t('lotr_title')}
        />
        <Footer />
        {registerModal && <RegisterModal />}
        {loginModal && <LoginModal />}
        {forgotPassword && <ForgotPassword />}
        {resetPassword && <ResetPassword />}
        {checkEmail && <CheckEmail />}
        {passwordChanged && <PasswordChanged />}
        {verificationNotif && <VerificationNotice />}
        {verificationVerify && <VerificationVerify />}
      </div>
    </Fragment>
  );
}
