/* eslint-disable @next/next/no-img-element */
import { Photo } from 'components/icons';
import { useTranslation } from 'next-i18next';

const InputFile = ({ register, errors }: { register: Object; errors: any }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className=' bg-transparent px-4 text-lg relative w-full rounded-[4px] outline outline-1 outline-[#6C757D] md:gap-6 p-3 flex items-center justify-between drop-file-input cursor-pointer'>
        <div className='flex gap-3 md:gap-6 items-center text-white'>
          <Photo />
          <p className='hidden lg:block'>{t('drag_and_drop')}</p>
          <p className='lg:hidden w-14 sm:w-auto'>{t('upload_image')}</p>
        </div>
        <div>
          <label
            htmlFor='input'
            className='bg-[#462676] w-32  text-white rounded-sm p-2 cursor-pointer'
          >
            {t('choose_file')}
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
