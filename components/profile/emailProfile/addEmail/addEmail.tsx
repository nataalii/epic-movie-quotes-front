import { Button } from 'components/button';
import ProfileInput from 'components/profile/profileInput/profileInput';
import { FormProvider } from 'react-hook-form';
import { closeAddEmailModal } from 'stores/modalSlice';
import useAddEmail from './useAddEmail';

const AddEmail = () => {
  const { onSubmit, dispatch, methods } = useAddEmail();

  return (
    <div
      className=' mt-20 flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={() => dispatch(closeAddEmailModal())}
    >
      <div
        className=' relative sm:w-[30rem] sm:h-auto sm:pb-14 w-screen h-screen  bg-[#181623] m-auto rounded-xl max-h-[90%] overflow-auto flex flex-col gap-5'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className='w-[90%] m-auto mt-5'>Add New Email</h1>
        <hr className='w-full border-[#efefef4d] ' />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ProfileInput
              label='New Email'
              name='email'
              placeholder='Enter new email'
              error={methods.formState.errors.email}
              serverError='emailExists'
            />

            <div className=' relative mt-5'>
              <div className='flex items-center gap-4 absolute right-6 -top-1 cursor-pointer'>
                <p onClick={() => dispatch(closeAddEmailModal())}>Cancel</p>
                <Button item='Add' color='red' size='w-18' />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddEmail;
