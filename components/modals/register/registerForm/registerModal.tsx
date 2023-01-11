import { Button } from 'components/button';
// import { ErrorMessage } from 'components/ErrorMessage';
import TextInput from 'components/form/TextInput';
import useTranslation from 'next-translate/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const RegisterFormModal = () => {
  const { t } = useTranslation('common');
  const {
    register,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'all', defaultValues: { name: '' } });

  console.log(control);

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className=' inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '>
      <div className=' sm:w-[35rem] sm:h-auto sm:pb-14 w-screen h-screen  bg-[#222030] m-auto rounded-xl'>
        <form className=' sm:mt-[6rem]' onSubmit={handleSubmit(onSubmit)}>
          <div className='text-center p-1 '>
            <h1 className='text-white text-2xl sm:text-[2rem]  mb-3 mt-20 sm:mt-8 '>
              Create an account
            </h1>
            <p className='text-[#6C757D]'>Start your journey!</p>
          </div>
          <div>
            <TextInput
              name='name'
              placeholder='At least 3 & max.15 lower case characters'
              label={'Name'}
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
              errorMessage={errors.name?.message}
            />

            <TextInput
              name='email'
              placeholder='Enter your email'
              label={'Email'}
              register={register('email', {
                required: 'Email field is required',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email should be valid',
                },
              })}
              errors={errors.email}
              errorMessage={errors.email?.message}
            />

            <TextInput
              name='password'
              placeholder='At least 8 & max.15 lower case characters'
              label={'Password'}
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

            <TextInput
              name='confirm_password'
              placeholder='Password'
              label={'Confirm password'}
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
          </div>

          <div className=' flex flex-col gap-4 mt-6 items-center'>
            <Button
              item={t('get_started')}
              color='red'
              size='sm:max-w-[22rem] w-[90%]'
            />

            <Button
              item={t('google_sign_up')}
              color='transparent'
              size='sm:max-w-[22rem] w-[90%] '
            />

            <h1 className=' text-[#6C757D] before:content-[url("../components/icons/Google.tsx")] before:w-10'>
              Already have an account?
              <a href='' className='text-[#0D6EFD] underline ml-2   '>
                Log In
              </a>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterFormModal;
