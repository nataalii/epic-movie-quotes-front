import { Button, TextInput } from 'components';
import useLoginModal from './useLoginModal';

const LoginModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: any;
}) => {
  const { register, handleSubmit, errors, onSubmit } = useLoginModal();

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
            <p className='text-[#6C757D]'>
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
              errors={errors.email}
              errorMessage={errors.email?.message}
            />

            <TextInput
              name='password'
              placeholder='Password'
              label={'Password'}
              register={register('password', {
                required: 'Password field is required',
              })}
              errors={errors.password}
              errorMessage={errors.password?.message}
            />
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

            <a href='' className='text-[#0D6EFD] underline ml-2'>
              Forgot password?
            </a>
          </div>

          <div className=' flex flex-col gap-4 mt-4 items-center'>
            <Button
              item={'Sign in'}
              color='red'
              size='sm:max-w-[22rem] w-[90%]'
            />

            <Button
              item={'Sign in With google'}
              color='transparent'
              size='sm:max-w-[22rem] w-[90%] '
            />

            <h1 className=' text-[#6C757D] before:content-[url("../components/icons/Google.tsx")] before:w-10'>
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
