import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openResetPassword, openVerificationVerify } from 'stores/modalSlice';
import { RootState } from 'types/stateTypes';

const useLanding = () => {
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
  const router = useRouter();
  useEffect(() => {
    const { email, token, verification } = router.query;
    if (email && token) {
      dispatch(openResetPassword());
    }

    if (verification) {
      dispatch(openVerificationVerify());
      router.push('/');
    }
  }, [dispatch, router, router.query]);

  return {
    registerModal,
    loginModal,
    forgotPassword,
    checkEmail,
    resetPassword,
    passwordChanged,
    verificationNotif,
    verificationVerify,
    dispatch,
    t,
  };
};

export default useLanding;
