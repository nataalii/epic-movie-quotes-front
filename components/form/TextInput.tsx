import { FieldError } from 'react-hook-form';

const TextInput = ({
  label,
  name,
  placeholder,
  register,
  errors,
  errorMessage,
}: {
  label: string;
  name: string;
  placeholder: string;
  register: Object;
  errors?: string | undefined | FieldError;
  errorMessage?: string;
}) => {
  return (
    <div className='flex flex-col mt-6 sm:max-w-[22rem] w-[90%] m-auto text-[#6C757D]'>
      <label htmlFor={name} className='mb-2 text-white text-4'>
        {label} <span className=' text-danger'>*</span>
      </label>
      <input
        {...register}
        placeholder={placeholder}
        className={
          'bg-[#CED4DA] pl-3 border-solid border-[0.12rem] p-[0.44rem] rounded-md ' +
          (errors
            ? 'border-danger'
            : name !== '' && !errors
            ? 'border-green-600'
            : '')
        }
      />
      {errors && (
        <div className=''>
          <p className=' text-danger fixed text-sm mt-[1px]'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
