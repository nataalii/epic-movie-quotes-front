import { Button, EyeClosed, EyeOpen, TextInput } from 'components';
import Google from 'components/icons/Google';
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
              Create an account
            </h1>
            <p className='text-gray'>Start your journey!</p>
          </div>
          <div>
            <TextInput
              name='name'
              placeholder='At least 3 & max.15 lower case characters'
              label={'Name'}
              isDirty={getFieldState('name').isDirty}
              register={register('name', {
                required: 'Field is required',
                minLength: {
                  value: 3,
                  message: 'Name should contain min 3 symbols',
                },
                maxLength: {
                  value: 15,
                  message: 'Name should contain max 15 symbols',
                },
                pattern: {
                  value: /^[a-z]*$/,
                  message: 'Name should contain only lowercase letters',
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
              placeholder='Enter your email'
              label={'Email'}
              isDirty={getFieldState('email').isDirty}
              register={register('email', {
                required: 'Email field is required',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email should be valid',
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
              placeholder='At least 8 & max.15 lower case characters'
              label={'Password'}
              type={passwordVisibility ? 'text' : 'password'}
              isDirty={getFieldState('password').isDirty}
              register={register('password', {
                required: 'password field is required',
                minLength: {
                  value: 8,
                  message: 'Password should contain min 8 symbols',
                },
                maxLength: {
                  value: 15,
                  message: 'Password should contain max 15 symbols',
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
              placeholder='Password'
              type={passConfVisbility ? 'text' : 'password'}
              label={'Confirm password'}
              isDirty={getFieldState('confirm_password').isDirty}
              register={register('confirm_password', {
                required: 'Password field is required',
                minLength: {
                  value: 8,
                  message: 'Password should contain min 8 symbols',
                },
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
              item={t('get_started')}
              color='red'
              size='sm:max-w-[22rem] w-[90%]'
            />

            <div className='sm:max-w-[22rem] w-[90%] flex justify-center gap-2 px-6 py-2 text-white rounded-md outline-1 outline-white outline -outline-offset-1'>
              <Google />
              {t('google_sign_up')}
            </div>
            <h1 className=' text-gray before:content-[url("../components/icons/Google.tsx")] before:w-10'>
              Already have an account?
              <a
                className='text-[#0D6EFD] underline ml-2 cursor-pointer '
                onClick={() => {
                  hideRegisterModalHandler();
                  showLoginModalHandler();
                }}
              >
                Log In
              </a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
