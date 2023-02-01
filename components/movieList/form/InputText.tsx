const InputText = ({
  language,
  placeholder,
  name,
  register,
  type,
  errors,
}: {
  language?: string;
  placeholder: string;
  name?: string;
  register: object;
  type?: string;
  errors?: any;
}) => {
  return (
    <div>
      <input
        className=' bg-transparent px-4 h-12 placeholder:text-white text-lg
        text-white relative w-full rounded-[4px] outline outline-1 outline-[#6C757D]'
        placeholder={placeholder}
        type={type}
        name={name}
        {...register}
      />
      <span className='absolute text-[#6C757D] top-3 right-5'>{language}</span>
      <div className='relative'>
        <p className=' text-danger h-5 font-normal text-base my-1 '>
          {errors && errors.message}
        </p>
      </div>
    </div>
  );
};

export default InputText;
