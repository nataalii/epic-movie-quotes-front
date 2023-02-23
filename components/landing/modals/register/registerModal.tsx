import { Button, EyeClosed, EyeOpen, TextInput } from 'components';
import Google from 'components/icons/Google';
import { REGEX_EMAIL } from 'config';
import useRegisterModal from './useRegisterModal';

const RegisterModal = () => {
  const {
    t,
    register,
    getValues,
    getFieldState,
    handleSubmit,
    errors,
    onSubmit,
    hideRegisterModalHandler,
    showLoginModalHandler,
    passwordVisibility,
    setPasswordVisibility,
    passConfVisbility,
    setConfPassVisibility,
  } = useRegisterModal();

  return (
    <div
      className=' flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={hideRegisterModalHandler}
    >
      <div
        className=' sm:w-[35rem] sm:h-auto sm:pb-14 w-screen h-screen  bg-[#222030] m-auto rounded-xl'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form className=' sm:mt-[1rem]' onSubmit={handleSubmit(onSubmit)}>
          <div className='text-center p-1 '>
            <h1 className='text-white text-2xl sm:text-[2rem]  mb-3 mt-20 sm:mt-8 '>
              {t('authorization:create_an_account')}
            </h1>
            <p className='text-gray'>{t('authorization:start_your_journey')}</p>
          </div>
          <div>
            <TextInput
              name='name'
              placeholder={t('authorization:name_placeholder')}
              label={t('authorization:name')}
              isDirty={getFieldState('name').isDirty}
              register={register('name', {
                required: t('errors:required') as string,
                minLength: {
                  value: 3,
                  message: t('errors:name_min_3'),
                },
                maxLength: {
                  value: 15,
                  message: t('errors:name_min_15'),
                },
                pattern: {
                  value: /^[a-z]*$/,
                  message: t('errors:lowercase_letters'),
                },
              })}
              errors={errors.name}
              errorMessage={
                errors.name?.message ||
                (errors.name?.type === 'nameExists' && errors.name.message)
              }
            />

            <TextInput
              name='email'
              placeholder={t('authorization:email_placeholder')}
              label={t('authorization:email')}
              isDirty={getFieldState('email').isDirty}
              register={register('email', {
                required: t('errors:required') as string,
                pattern: {
                  value: REGEX_EMAIL,
                  message: t('errors:email_valid'),
                },
              })}
              errors={errors.email}
              errorMessage={
                errors.email?.message ||
                (errors.email?.type === 'emailExists' && errors.email.message)
              }
            />

            <TextInput
              name='password'
              placeholder={t('authorization:password_placeholder')}
              label={t('authorization:password')}
              type={passwordVisibility ? 'text' : 'password'}
              isDirty={getFieldState('password').isDirty}
              register={register('password', {
                required: t('errors:required') as string,
                minLength: {
                  value: 8,
                  message: t('errors:password_min_8'),
                },
                maxLength: {
                  value: 15,
                  message: t('errors:password_max_15'),
                },
              })}
              errors={errors.password}
              errorMessage={errors.password?.message}
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

            <TextInput
              name='confirm_password'
              placeholder={t('authorization:password')}
              type={passConfVisbility ? 'text' : 'password'}
              label={t('authorization:confirm_password')}
              isDirty={getFieldState('confirm_password').isDirty}
              register={register('confirm_password', {
                required: t('errors:required') as string,
                minLength: {
                  value: 8,
                  message: t('errors:password_min_8'),
                },
                validate: (value) => {
                  const { password } = getValues();
                  return (
                    password === value ||
                    (t('errors:passwords_should_match') as string)
                  );
                },
              })}
              errors={errors.confirm_password}
              errorMessage={errors.confirm_password?.message}
            />
            <div className='relative'>
              <div
                className='absolute bottom-3 right-[6%] sm:right-28 cursor-pointer'
                onClick={() =>
                  setConfPassVisibility((visibility) => !visibility)
                }
              >
                {passConfVisbility ? <EyeOpen /> : <EyeClosed />}
              </div>
            </div>
          </div>

          <div className=' flex flex-col gap-4 mt-6 items-center'>
            <Button
              item={t('authorization:get_started')}
              color='red'
              size='sm:max-w-[22rem] w-[90%]'
            />
            <a
              href='http://localhost:8000/api/google/auth/redirect'
              className='sm:max-w-[22rem] w-[90%] '
            >
              <div className='flex justify-center gap-2 px-6 py-2 text-white rounded-md outline-1 outline-white outline -outline-offset-1'>
                <Google />
                {t('authorization:google_sign_up')}
              </div>
            </a>

            <h1 className=' text-gray before:content-[url("../components/icons/Google.tsx")] before:w-10'>
              {t('authorization:already_have_account')}
              <a
                className='text-[#0D6EFD] underline ml-2 cursor-pointer '
                onClick={() => {
                  hideRegisterModalHandler();
                  showLoginModalHandler();
                }}
              >
                {t('authorization:Login')}
              </a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
