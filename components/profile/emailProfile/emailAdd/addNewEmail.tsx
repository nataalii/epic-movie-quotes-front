import { Button } from 'components/button';
import { BackArrow } from 'components/icons';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { addNewEmail } from 'stores/modalSlice';
import { ConfirmModal } from '../confirmModal';
import useAddNewEmail from './useAddNewEmail';
const AddNewEmail = () => {
  const { dispatch, methods, email, confirmChangesModal, onSubmit } =
    useAddNewEmail();
  return (
    <div className='flex flex-col inset-0  bg-[#181623] mt-20 z-50 fixed '>
      <div
        className=' m-6 cursor-pointer w-14'
        onClick={() => {
          dispatch(addNewEmail());
        }}
      >
        <BackArrow />
      </div>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className=' bg-blue-500 flex flex-col gap-2 p-10 rounded-lg'>
              <label htmlFor='email'>Add new Email</label>
              <input
                className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                {...methods.register('email', {
                  required: 'Email field is required',
                  minLength: {
                    value: 3,
                    message: 'Email should contain min 3 symbols',
                  },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'Email should be valid',
                  },
                })}
              />
              <div className='relative'>
                <p className=' text-danger h-1 font-normal text-base '>
                  {(methods.formState.errors.email?.type === 'alreadyExists' &&
                    (methods.formState.errors.email?.message as string)) ||
                    (methods.formState.errors.email?.message as string)}
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between px-10 mt-24'>
              <h1
                onClick={() => {
                  dispatch(addNewEmail());
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
      {confirmChangesModal && <ConfirmModal email={email} />}
    </div>
  );
};
export default AddNewEmail;
