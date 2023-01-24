import { BackArrow, Button, TextInput } from 'components';
import { Fragment } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { fetchCSRFToken, forgotPassword } from 'services';

const ForgotPassword = () => {
  const {
    register,
    getFieldState,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const email = useWatch({
    control,
    name: 'email',
  });
  const onSubmit = async () => {
    try {
      await fetchCSRFToken();
      await forgotPassword({ email: email });
    } catch (error: any) {
      const emailError = error.response.data.errors.email;
      setError('email', {
        type: 'notExist',
        message: emailError,
      });
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
            <h1 className='text-3xl font-bold text-white '>Forgot password?</h1>
            <h2 className='text-gray text-center max-w-64 w-[80%]'>
              Enter the email and we’ll send an email with instructions to reset
              your password
            </h2>

            <form
              className='flex flex-col items-center gap-6 sm:max-w-[25rem] w-[90%]'
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextInput
                name='email'
                placeholder='Enter Your email'
                label={'Email'}
                register={register('email', {
                  required: 'Email field is required',
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Email should be valid',
                  },
                })}
                isDirty={getFieldState('email').isDirty}
                errors={errors.email}
                errorMessage={
                  errors.email?.message ||
                  (errors.email?.type === 'notExist' && errors.email.message)
                }
              />
              <Button item='Send Instructions' color='red' size='w-[89%]  ' />
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

export default ForgotPassword;
