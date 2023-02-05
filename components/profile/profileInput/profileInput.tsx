import { profileInputTypes } from 'types';

const ProfileInput: React.FC<profileInputTypes> = ({
  label,
  name,
  placeholder,
  register,
  error,
  serverError,
}) => {
  return (
    <div className='flex flex-col w-[90%] m-auto  gap-4'>
      <label htmlFor={name}> {label}</label>
      <input
        type='text'
        className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
        placeholder={placeholder}
        {...register}
      />
      <div className='relative'>
        <p className=' text-danger h-1 font-normal text-base '>
          {(error?.type === serverError && (error?.message as string)) ||
            (error?.message as string)}
        </p>
      </div>
    </div>
  );
};

export default ProfileInput;
