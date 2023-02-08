import { Checked } from 'components/icons';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
const Message = (props: { text: string }) => {
  return (
    <div className='flex flex-col gap-5 pb-5'>
      <div className='flex items-center gap-2'>
        <Checked />
        <h1 className=' text-[#0F5132]'>A simple alert—check it out!</h1>
      </div>
      <p className='text-black text-base ml-5'>{props.text}</p>
    </div>
  );
};
export default Message;
