import { BackArrow, Button, EyeClosed, EyeOpen, TextInput } from 'components';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchCSRFToken, resetPassword } from 'services';
import { ResetPasswordTypes } from 'types';

const ResetPassword = () => {
  const {
    register,
    getFieldState,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passConfVisbility, setConfPassVisibility] = useState(false);

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter();
  useEffect(() => {
    const { email, token } = router.query;
    setEmail(email as string);
    setToken(token as string);
  }, [router.query]);

  const onSubmit = async (data: ResetPasswordTypes) => {
    try {
      data['token'] = token;
      data['email'] = email;
      console.log(data);
      await fetchCSRFToken();
      await resetPassword(data);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <div className=' flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed'>
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
              <h1 className='text-3xl font-bold text-white '>
                Create new password
              </h1>
              <h2 className='text-gray text-center mt-3 max-w-64 w-[80%]'>
                Your new password must be different from previous used passwords
              </h2>
              <div className=' w-full'>
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
                  placeholder='Password'
                  type={passConfVisbility ? 'text' : 'password'}
                  label={'Confirm password'}
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
                item='Reset Password'
                color='red'
                size='sm:max-w-[23rem] w-[90%] mt-7 '
              />
            </form>

            <div className='flex gap-4 justify-center items-center text-gray'>
              <span className='cursor-pointer'>
                <BackArrow />
              </span>
              <p className='cursor-pointer '>Back to login</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
