import { useFormContext } from 'react-hook-form';
import { addMovieInputTypes } from 'types';

const InputText: React.FC<addMovieInputTypes> = (props) => {
  const form = useFormContext();
  return (
    <div>
      <input
        className=' bg-transparent px-4 h-12 placeholder:text-[#6C757D]  placeholder:italic text-lg
        text-white relative w-full rounded-[4px] outline outline-1 outline-[#6C757D]'
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        type={props.type}
        {...form.register(props.name as string, {
          required: 'Field is required',
        })}
      />
      <span className='absolute  text-white top-3 right-5'>
        {props.language}
      </span>
      <div className='relative'>
        <p className=' text-danger h-5 font-normal text-base my-1 '>
          {props.errors && props.errors.message}
        </p>
      </div>
    </div>
  );
};

export default InputText;
