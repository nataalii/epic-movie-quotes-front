import { Photo } from 'components/icons';
import { useTranslation } from 'next-i18next';

const InputFile = ({ register, errors }: { register: Object; errors: any }) => {
  const { t } = useTranslation('movies');

  return (
    <>
      <div className='border md:gap-6 p-3 flex justify-between'>
        <div className='flex gap-3 md:gap-6 items-center text-white'>
          <Photo />
          <p className='hidden lg:block'>{t('drag_and_drop')}</p>
          <p className='lg:hidden'>{t('upload_image')}</p>
        </div>
        <div>
          <label
            htmlFor='input'
            className='bg-[#462676]  text-white rounded-sm p-2 cursor-pointer'
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
