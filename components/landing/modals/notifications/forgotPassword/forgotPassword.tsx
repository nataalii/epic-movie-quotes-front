import { BackArrow, Button, TextInput } from 'components';
import { REGEX_EMAIL } from 'config';
import { Fragment } from 'react';
import useForgotPassword from './useForgotPassword';

const ForgotPassword = () => {
  const {
    t,
    register,
    getFieldState,
    handleSubmit,
    errors,
    onSubmit,
    hideForgotPasswordHandler,
    showLoginModalHandler,
  } = useForgotPassword();
  return (
    <Fragment>
      <div
        className=' flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed'
        onClick={hideForgotPasswordHandler}
      >
        <div
          className='  sm:w-[35rem] sm:h-auto sm:pb-10 w-screen h-screen  bg-[#222030] m-auto rounded-xl'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='mt-28 sm:mt-10 flex flex-col justify-center items-center gap-5'>
            <h1 className='text-3xl font-bold text-white '>
              {t('forgot_password?')}
            </h1>
            <h2 className='text-gray text-center max-w-64 w-[80%]'>
              {t('enter_email')}
            </h2>

            <form
              className='flex flex-col items-center gap-6 sm:max-w-[25rem] w-[90%]'
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextInput
                name='email'
                placeholder={t('email_placeholder')}
                label={t('email')}
                register={register('email', {
                  required: t('required') as string,
                  pattern: {
                    value: REGEX_EMAIL,
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
              <Button
                item={t('send_instructions')}
                color='red'
                size='w-[89%]  '
              />
            </form>
            <div
              className='flex gap-4 justify-center items-center text-gray cursor-pointer '
              onClick={() => {
                hideForgotPasswordHandler();
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

export default ForgotPassword;
