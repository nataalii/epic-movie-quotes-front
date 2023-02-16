import { useFormContext } from 'react-hook-form';
import { TextAreaInput } from 'types';

const InputTextArea: React.FC<TextAreaInput> = (props) => {
  const form = useFormContext();
  return (
    <div>
      <textarea
        rows={3}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        {...form.register(props.name as string, {
          required: 'Field is required',
        })}
        className=' italic bg-transparent pl-4 pt-2 placeholder:text-[#6C757D] placeholder:italic relative w-full rounded-[4px] outline outline-1 outline-gray
      '
      />
      <span className='absolute text-white top-7 right-4'>
        {props.language}
      </span>
      <div className='relative'>
        <p className=' text-danger h-5 font-normal text-base my-1 mb-2 '>
          {props.errors?.message as string}
        </p>
      </div>
    </div>
  );
};

export default InputTextArea;
