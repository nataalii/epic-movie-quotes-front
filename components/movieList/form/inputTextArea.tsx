import { TextAreaInput } from 'types';

const InputTextArea = ({
  language,
  placeholder,
  name,
  register,
  errors,
}: TextAreaInput) => {
  return (
    <div>
      <textarea
        rows={3}
        placeholder={placeholder}
        name={name}
        {...register}
        className=' bg-transparent pl-4 pt-2 placeholder:text-[#6C757D] placeholder:italic relative w-full rounded-[4px] outline outline-1 outline-gray
      '
      />
      <span className='absolute text-white top-7 right-4'>{language}</span>
      <div className='relative'>
        <p className=' text-danger h-5 font-normal text-base my-1 '>
          {errors && errors.message}
        </p>
      </div>
    </div>
  );
};

export default InputTextArea;
