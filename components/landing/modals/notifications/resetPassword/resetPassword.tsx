import { BackArrow, Button, EyeClosed, EyeOpen, TextInput } from 'components';
import { Fragment } from 'react';

import useResetPassword from './useResetPassword';

const ResetPassword = () => {
  const {
    t,
    register,
    getFieldState,
    getValues,
    handleSubmit,
    errors,
    passwordVisibility,
    setPasswordVisibility,
    passConfVisbility,
    setConfPassVisibility,
    onSubmit,
    hideResetPasswordHandler,
    showLoginModalHandler,
  } = useResetPassword();
  return (
    <Fragment>
      <div
        className=' flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed'
        onClick={hideResetPasswordHandler}
      >
        <div
          className='  sm:w-[35rem] sm:h-auto sm:pb-10 w-screen h-screen  bg-[#222030] m-auto rounded-xl'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='mt-28 sm:mt-10 flex flex-col justify-center items-center gap-5'>
            <form
              className=' flex flex-col items-center sm:max-w-[23rem] w-[90%] '
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className='text-3xl font-bold text-white text-center '>
                {t('create_new_password')}
              </h1>
              <h2 className='text-gray text-center mt-3 max-w-64 w-[80%]'>
                {t('different_password')}
              </h2>
              <div className=' w-full'>
                <TextInput
                  name='password'
                  placeholder={t('password_placeholder')}
                  label={t('password')}
                  type={passwordVisibility ? 'text' : 'password'}
                  isDirty={getFieldState('password').isDirty}
                  register={register('password', {
                    required: t('required') as string,
                    minLength: {
                      value: 8,
                      message: 'Password should contain min 8 symbols',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Password should contain max 15 symbols',
                    },
                    pattern: {
                      value: /^[a-z0-9]*$/,
                      message: 'Enter only lowercase letters ans numbers ',
                    },
                  })}
                  errors={errors.password}
                  errorMessage={errors.password?.message}
                />
                <div className='relative'>
                  <div
                    className='absolute bottom-3 right-[6%] cursor-pointer'
                    onClick={() =>
                      setPasswordVisibility((visibility) => !visibility)
                    }
                  >
                    {passwordVisibility ? <EyeOpen /> : <EyeClosed />}
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <TextInput
                  name='confirm_password'
                  placeholder={t('password')}
                  type={passConfVisbility ? 'text' : 'password'}
                  label={t('confirm_password')}
                  isDirty={getFieldState('confirm_password').isDirty}
                  register={register('confirm_password', {
                    validate: (value) => {
                      const { password } = getValues();
                      return password === value || 'Passwords should match!';
                    },
                  })}
                  errors={errors.confirm_password}
                  errorMessage={errors.confirm_password?.message}
                />
                <div className='relative'>
                  <div
                    className='absolute bottom-3 right-[6%] cursor-pointer'
                    onClick={() =>
                      setConfPassVisibility((visibility) => !visibility)
                    }
                  >
                    {passConfVisbility ? <EyeOpen /> : <EyeClosed />}
                  </div>
                </div>
              </div>

              <Button
                item={t('reset_password')}
                color='red'
                size='sm:max-w-[23rem] w-[90%] mt-7 '
              />
            </form>

            <div
              className='flex gap-4 justify-center items-center text-gray cursor-pointer '
              onClick={() => {
                hideResetPasswordHandler();
                showLoginModalHandler();
              }}
            >
              <span>
                <BackArrow />
              </span>
              <p>{t('back_to_login')}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
