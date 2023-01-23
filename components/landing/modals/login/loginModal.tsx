import { Button, EyeClosed, EyeOpen, TextInput, Google } from 'components';
import { useState } from 'react';
import useLoginModal from './useLoginModal';
import Link from 'next/link';
const LoginModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: any;
}) => {
  const { register, getFieldState, handleSubmit, errors, onSubmit } =
    useLoginModal();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  if (!isVisible) return null;
  return (
    <div
      className=' flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={() => {
        onClose();
      }}
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
              Log in to your account
            </h1>
            <p className='text-gray'>
              Welcome back! Please enter your details.
            </p>
          </div>
          <div>
            <TextInput
              name='email'
              placeholder='Enter Your email'
              label={'Email'}
              register={register('email', {
                required: 'Field is required',
                minLength: {
                  value: 3,
                  message: 'Email should contain min 3 symbols',
                },
              })}
              isDirty={getFieldState('email').isDirty}
              errors={errors.email}
              errorMessage={errors.email?.message}
            />

            <TextInput
              name='password'
              placeholder='Password'
              type={passwordVisibility ? 'text' : 'password'}
              label={'Password'}
              register={register('password', {
                required: 'Password field is required',
              })}
              isDirty={getFieldState('password').isDirty}
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
          </div>
          <div className=' flex justify-between sm:max-w-[22rem] w-[90%] m-auto text-white mt-6 '>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='remember'
                name='remember'
                className=' w-4 h-4 rounded-md cursor-pointer mr-2'
              />
              <label htmlFor='remember'> Remeber me</label>
            </div>

            <Link href='/forgot-password'>
              <p className='text-[#0D6EFD] underline ml-2'>Forgot password?</p>
            </Link>
          </div>

          <div className=' flex flex-col gap-4 mt-4 items-center relative'>
            <Button
              item={'Sign in'}
              color='red'
              size='sm:max-w-[22rem] w-[90%]'
            />
            <div className='sm:max-w-[22rem] w-[90%] flex justify-center gap-2 px-6 py-2 text-white rounded-md outline-1 outline-white outline -outline-offset-1'>
              <Google />
              Sign in With Google
            </div>

            <h1 className=' text-gray'>
              Dont have an account?
              <a href='' className='text-[#0D6EFD] underline ml-2'>
                Sign up
              </a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
