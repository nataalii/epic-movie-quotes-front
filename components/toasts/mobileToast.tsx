import { Checked } from 'components/icons';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
const MobileMessage = (props: { text: string }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-2'>
        <Checked />
        <h1 className=' text-[#0F5132]'>{props.text}</h1>
      </div>
    </div>
  );
};
export default MobileMessage;
