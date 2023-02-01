import { Photo } from 'components/icons';

const InputFile = ({ register, errors }: { register: Object; errors: any }) => {
  return (
    <>
      <div className='border flex-col md:flex-row gap-6 p-3 flex md:justify-between'>
        <div className='flex gap-6 items-center text-white'>
          <Photo />
          <p>Drag & drop your image here or</p>
        </div>
        <div>
          <label
            htmlFor='input'
            className='bg-[#462676]  text-white rounded-sm p-2 cursor-pointer'
          >
            Choose file
          </label>

          <input
            id='input'
            name='image'
            type='file'
            className='hidden'
            {...register}
          />
        </div>
      </div>
      <div className='relative'>
        <p className=' text-danger h-5 font-normal text-base my-1 '>
          {errors && errors.message}
        </p>
      </div>
    </>
  );
};

export default InputFile;
