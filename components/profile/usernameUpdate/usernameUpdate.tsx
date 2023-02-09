import { Button } from 'components/button';
import { BackArrow } from 'components/icons';
import { FormProvider } from 'react-hook-form';
import { updateUsername } from 'stores/modalSlice';
import { ConfirmModal } from 'components';
import useUsernameUpdate from './useUsernameUpdate';
const UsernameUpdate = () => {
  const { dispatch, methods, name, confirmChangesModal, onSubmit } =
    useUsernameUpdate();
  return (
    <div className='flex flex-col inset-0  bg-[#181623] mt-20 z-50 fixed '>
      <div
        className=' m-6 cursor-pointer w-14'
        onClick={() => {
          dispatch(updateUsername());
        }}
      >
        <BackArrow />
      </div>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className=' bg-blue-500 flex flex-col gap-2 p-10 rounded-lg'>
              <label htmlFor='password'>Enter New Username</label>
              <input
                className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                {...methods.register('name', {
                  required: 'Username field is required',
                  minLength: {
                    value: 3,
                    message: 'Username should contain min 3 symbols',
                  },
                })}
              />
              <div className='relative'>
                <p className=' text-danger h-1 font-normal text-base '>
                  {(methods.formState.errors.name?.type === 'alreadyExists' &&
                    (methods.formState.errors.name?.message as string)) ||
                    (methods.formState.errors.name?.message as string)}
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between px-10 mt-24'>
              <h1
                onClick={() => {
                  dispatch(updateUsername());
                }}
                className=' cursor-pointer text-[#CED4DA]'
              >
                Cancel
              </h1>
              <Button item='Add' color='red' />
            </div>
          </form>
        </FormProvider>
      </div>
      {confirmChangesModal && <ConfirmModal name={name} />}
    </div>
  );
};
export default UsernameUpdate;
