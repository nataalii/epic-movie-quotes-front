import { Photo } from 'components/icons';

const InputFile = () => {
  return (
    <>
      <div className='border flex-col md:flex-row gap-6 p-3 flex md:justify-between'>
        <div className='flex gap-6 items-center text-white'>
          <Photo />
          <p className='self-center'>Drag & drop your image here or </p>
        </div>
        <div>
          <p className='bg-[#462676]  text-white rounded-sm p-2 cursor-pointer'>
            Choose file
          </p>

          <input id='input' type='file' className='hidden' />
        </div>
      </div>
    </>
  );
};

export default InputFile;
