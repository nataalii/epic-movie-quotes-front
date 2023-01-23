import { Invalid, Valid } from 'components/icons';
import { TextInput } from 'types';

const TextInput = ({
  label,
  name,
  placeholder,
  register,
  type,
  isDirty,
  errors,
  errorMessage,
}: TextInput) => {
  return (
    <div className='flex flex-col mt-6 sm:max-w-[22rem] w-[90%] m-auto text-[#6C757D]'>
      <label htmlFor={name} className='mb-2 text-white text-4'>
        {label} <span className=' text-danger'>*</span>
      </label>
      <input
        {...register}
        placeholder={placeholder}
        type={type}
        className={
          'bg-[#CED4DA] pl-3 border-solid border-[0.15rem] p-[0.44rem] rounded-md placeholder:text-sm ' +
          (errors
            ? 'border-danger'
            : isDirty && !errors
            ? 'border-green-600'
            : '')
        }
      />
      {errors && (
        <div className='relative'>
          <p className=' text-danger fixed text-sm mt-[1px]'>{errorMessage}</p>
          {name !== 'password' && name !== 'confirm_password' && (
            <div className='absolute -top-8 right-2'>
              <Invalid />
            </div>
          )}
        </div>
      )}
      {isDirty && !errors && (
        <div className='relative'>
          {name !== 'password' && name !== 'confirm_password' && (
            <div className='absolute  -top-8 right-2'>
              <Valid />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TextInput;
