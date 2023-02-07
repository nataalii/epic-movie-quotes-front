import { Button } from 'components/button';
import { BackArrow, Circle, EyeClosed, EyeOpen } from 'components/icons';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { updatePassword } from 'stores/modalSlice';
import { PasswordConfirm } from '../passwordConfirm';
import usePasswordUpdate from './usePasswordUpdate';
const PasswordUpdate = () => {
  const {
    dispatch,
    password,
    methods,
    confirmPasswordModal,
    passwordVisibility,
    setPasswordVisibility,
    setConfPassVisibility,
    passConfVisbility,
    onSubmit,
  } = usePasswordUpdate();
  return (
    <div className='flex flex-col inset-0  bg-[#181623] mt-20 z-50 fixed '>
      <div
        className=' m-6 cursor-pointer w-14'
        onClick={() => {
          dispatch(updatePassword());
        }}
      >
        <BackArrow />
      </div>
      <div className='w-full'>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='w-full flex flex-col gap-5 items-center bg-blue-500 py-10'
          >
            <div className=' flex flex-col gap-3 w-[90%] bg-transparent border-[1px] border-gray border-opacity-70 rounded-md p-5 bg-blue-600'>
              <h1>Passwords should contain:</h1>
              <ul>
                <li
                  className={`flex items-center gap-2 text-sm ${
                    methods.getValues('newPassword')?.length >= 8
                      ? 'text-white'
                      : 'text-[#9C9A9A]'
                  }`}
                >
                  <Circle
                    color={`${
                      methods.getValues('newPassword')?.length >= 8
                        ? '#198754'
                        : 'gray'
                    }`}
                  />
                  8 or more characters
                </li>
                <li
                  className={`flex items-center gap-2 text-sm ${
                    methods.getValues('newPassword')?.length <= 15 &&
                    /^[a-z0-9]*$/.test(methods.getValues('newPassword'))
                      ? 'text-white'
                      : 'text-[#9C9A9A]'
                  }`}
                >
                  <Circle
                    color={`${
                      methods.getValues('newPassword')?.length <= 15 &&
                      /^[a-z0-9]*$/.test(methods.getValues('newPassword'))
                        ? '#198754'
                        : 'gray'
                    }`}
                  />
                  15 lowercase character
                </li>
              </ul>
            </div>
            <div className='flex flex-col w-[90%] '>
              <div className='flex flex-col gap-2 relative'>
                <label htmlFor='newPassword'>New Password</label>
                <input
                  type={passwordVisibility ? 'text' : 'password'}
                  className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                  {...methods.register('newPassword', {
                    required: 'password field is required',
                    minLength: {
                      value: 8,
                      message: 'password should contain min 8 symbols',
                    },
                    maxLength: {
                      value: 15,
                      message: 'password should contain max 15 symbols',
                    },
                  })}
                />
                <div
                  className='absolute right-4 top-[45px] cursor-pointer'
                  onClick={() =>
                    setPasswordVisibility((visibility) => !visibility)
                  }
                >
                  {passwordVisibility ? <EyeOpen /> : <EyeClosed />}
                </div>
                <div className='relative'>
                  <p className=' text-danger h-5 font-normal text-base mb-1 '>
                    {methods.formState.errors.newPassword?.message as string}
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-2 relative'>
                <label htmlFor='confNewPassword'>Confirm New Password</label>
                <input
                  type={passConfVisbility ? 'text' : 'password'}
                  className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                  {...methods.register('confNewPassword', {
                    required: 'Confirm password field is required',
                    validate: (value) => {
                      const { newPassword } = methods.getValues();
                      return newPassword === value || 'Passwords should match!';
                    },
                  })}
                />
                <div
                  className='absolute right-4 top-[45px] cursor-pointer'
                  onClick={() =>
                    setConfPassVisibility((visibility) => !visibility)
                  }
                >
                  {passConfVisbility ? <EyeOpen /> : <EyeClosed />}
                </div>
                <div className='relative'>
                  <p className=' text-danger h-5 font-normal text-base mb-1 '>
                    {
                      methods.formState.errors.confNewPassword
                        ?.message as string
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className='relative flex w-[90%]'>
              <div className='flex items-center w-full justify-between px-10 absolute mt-20 '>
                <h1
                  onClick={() => {
                    dispatch(updatePassword());
                  }}
                  className=' cursor-pointer text-[#CED4DA]'
                >
                  Cancel
                </h1>
                <Button item='Add' color='red' />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      {confirmPasswordModal && <PasswordConfirm password={password} />}
    </div>
  );
};
export default PasswordUpdate;
