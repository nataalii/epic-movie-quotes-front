import { Button } from 'components/button';
import { useDispatch } from 'react-redux';
import { closeAddEmailModal } from 'stores/modalSlice';

const AddEmail = () => {
  const dispatch = useDispatch();
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
        <div className='flex flex-col w-[90%] m-auto gap-2'>
          <label htmlFor='newEmail'> New Email</label>
          <input
            type='text'
            className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
            placeholder='Enter new email'
          />
        </div>
        <div className=' relative'>
          <div className='flex items-center gap-4 absolute right-6 -top-1'>
            <p onClick={() => dispatch(closeAddEmailModal())}>Cancel</p>
            <Button item='Add' color='red' size='w-18' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmail;
