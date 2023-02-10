import { Button, EyeClosed, EyeOpen, TextInput, Google } from 'components';
import useLoginModal from './useLoginModal';

const LoginModal = () => {
  const {
    t,
    register,
    getFieldState,
    handleSubmit,
    errors,
    onSubmit,
    passwordVisibility,
    setPasswordVisibility,
    hideLoginModalHandler,
    showRegisterModalHandler,
    showForgotPasswordHandler,
  } = useLoginModal();
  return (
    <div
      className=' flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={hideLoginModalHandler}
    >
      <div
        className=' sm:w-[35rem] sm:h-auto sm:pb-10 w-screen h-screen  bg-[#222030] m-auto rounded-xl'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='text-center p-1 '>
            <h1 className='text-white text-2xl sm:text-[2rem]  mb-3 mt-20 sm:mt-12 '>
              {t('log_in_your_account')}
            </h1>
            <p className='text-gray'>{t('welcome_back')}</p>
          </div>
          <div>
            <TextInput
              name='email'
              placeholder={t('email_placeholder')}
              label={t('email')}
              register={register('email', {
                required: 'Field is required',
                minLength: {
                  value: 3,
                  message: 'Email should contain min 3 symbols',
                },
              })}
              isDirty={getFieldState('email').isDirty}
              errors={errors.email}
              errorMessage={
                errors.email?.message ||
                (errors.email?.type === 'invalidCredentials' &&
                  errors.email.message)
              }
            />

            <TextInput
              name='password'
              placeholder={t('password')}
              type={passwordVisibility ? 'text' : 'password'}
              label={t('password')}
              register={register('password', {
                required: 'Password field is required',
              })}
              isDirty={getFieldState('password').isDirty}
              errors={errors.password}
              errorMessage={
                errors.password?.message ||
                (errors.password?.type === 'invalidCredentials' &&
                  errors.password.message)
              }
            />
            <div className='relative'>
              <div
                className='absolute bottom-3 right-[6%] sm:right-28 cursor-pointer'
                onClick={() =>
                  setPasswordVisibility((visibility) => !visibility)
                }
              >
                {passwordVisibility ? <EyeOpen /> : <EyeClosed />}
              </div>
            </div>
          </div>
          <div className=' flex justify-between sm:max-w-[22rem] w-[90%] m-auto text-white mt-6 '>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='remember_me'
                {...register('remember_me')}
                className=' w-4 h-4 rounded-md cursor-pointer mr-2'
              />
              <label htmlFor='remember_me'> {t('remember_me')}</label>
            </div>

            <p
              className='text-[#0D6EFD] underline ml-2 cursor-pointer'
              onClick={() => {
                hideLoginModalHandler();
                showForgotPasswordHandler();
              }}
            >
              {t('forgot_password?')}
            </p>
          </div>

          <div className=' flex flex-col gap-4 mt-4 items-center relative'>
            <Button
              item={t('sign_in')}
              color='red'
              size='sm:max-w-[22rem] w-[90%]'
            />
            <a
              className='sm:max-w-[22rem] w-[90%] cursor-pointer'
              href={`${process.env.NEXT_PUBLIC_API_GOOGLE_URL}/redirect`}
            >
              <div className='flex justify-center gap-2 px-6 py-2 text-white rounded-md outline-1 outline-white outline -outline-offset-1'>
                <Google />
                {t('google_sign_in')}
              </div>
            </a>

            <h1 className=' text-gray'>
              {t('dont_have_account')}
              <a
                className='text-[#0D6EFD] underline ml-2 cursor-pointer'
                onClick={() => {
                  hideLoginModalHandler();
                  showRegisterModalHandler();
                }}
              >
                {t('sign_up')}
              </a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
