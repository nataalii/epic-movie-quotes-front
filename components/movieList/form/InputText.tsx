import { useFormContext } from 'react-hook-form';
import { addMovieInputTypes } from 'types';

const InputText: React.FC<addMovieInputTypes> = ({
  language,
  placeholder,
  name,
  type,
  errors,
}) => {
  const form = useFormContext();
  return (
    <div>
      <input
        className=' bg-transparent px-4 h-12 placeholder:text-[#6C757D]  placeholder:italic text-lg
        text-white relative w-full rounded-[4px] outline outline-1 outline-[#6C757D]'
        placeholder={placeholder}
        type={type}
        {...form.register(name as string, {
          required: 'Field is required',
        })}
      />
      <span className='absolute  text-white top-3 right-5'>{language}</span>
      <div className='relative'>
        <p className=' text-danger h-5 font-normal text-base my-1 '>
          {errors && errors.message}
        </p>
      </div>
    </div>
  );
};

export default InputText;
