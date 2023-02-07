import { Button } from 'components/button';
import React from 'react';
import { confirmPassword } from 'stores/modalSlice';
import usePassworConfirm from './usePasswordConfirm';

const PasswordConfirm = (password: { password: string }) => {
  const { dispatch, onSubmit } = usePassworConfirm();
  return (
    <div className=' flex bg-[#181623] h-screen w-screen  backdrop-blur-md z-50 items-start justify-center fixed '>
      <div className='flex flex-col gap-5 py-5 m-10 mt-16  bg-gradient-to-r from-[#1b1922]  to-blue-500 items-center rounded-lg'>
        <div className=' m-8'>Are you sure to make changes ?</div>
        <hr className='w-full border-[#efefef4d] ' />
        <div className='flex items-center justify-between px-10 w-full'>
          <h1
            className='cursor-pointer'
            onClick={() => dispatch(confirmPassword())}
          >
            Cancel
          </h1>
          <Button
            item='Confirm'
            color='red'
            size=''
            onClick={() => onSubmit(password)}
          />
        </div>
      </div>
    </div>
  );
};
export default PasswordConfirm;
