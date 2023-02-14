import { Checked } from 'components/icons';
import { useTranslation } from 'next-i18next';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
const Message = (props: { text: string }) => {
  const { t } = useTranslation('profile');
  return (
    <div className='flex flex-col gap-5 pb-5'>
      <div className='flex items-center gap-2'>
        <Checked />
        <h1 className=' text-[#0F5132]'>{t('alert')}</h1>
      </div>
      <p className='text-black text-base ml-5'>{props.text}</p>
    </div>
  );
};
export default Message;
