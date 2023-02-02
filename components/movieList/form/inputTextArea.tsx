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
        className=' bg-transparent pl-4 pt-2 placeholder:text-white relative w-full rounded-[4px] outline outline-1 outline-gray
      '
      />
      <span className='absolute text-gray top-2 right-2'>{language}</span>
      <div className='relative'>
        <p className=' text-danger h-5 font-normal text-base my-1 '>
          {errors && errors.message}
        </p>
      </div>
    </div>
  );
};

export default InputTextArea;
