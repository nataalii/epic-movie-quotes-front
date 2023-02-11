import { Button } from 'components/button';
import { confirmChanges } from 'stores/modalSlice';
import useConfirmModal from './useConfirmModal';

const ConfirmModal = (data: { name?: string; email?: string }) => {
  const { dispatch, onSubmit, t } = useConfirmModal();
  return (
    <div className=' flex bg-[#181623] h-screen w-screen  backdrop-blur-md z-50 items-start justify-center fixed '>
      <div className='flex flex-col gap-5 py-5 m-10 mt-16  bg-gradient-to-r from-[#1b1922] text-center  to-blue-500 items-center rounded-lg'>
        <div className=' m-8'>{t('are_you_sure')}</div>
        <hr className='w-full border-[#efefef4d] ' />
        <div className='flex items-center justify-between px-10 w-full'>
          <h1
            className='cursor-pointer'
            onClick={() => dispatch(confirmChanges())}
          >
            {t('cancel')}
          </h1>
          <Button
            item={t('confirm')}
            color='red'
            size=''
            onClick={() => onSubmit(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
