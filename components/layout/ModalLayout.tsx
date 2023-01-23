import React from 'react';
import { Fragment } from 'react';
const ModalLayout = (props: {
  image: any;
  title: string;
  text: string;
  button: any;
  onClose: any;
}) => {
  return (
    <Fragment>
      <div className=' flex justify-center inset-0 bg-[#181623]  sm:bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '>
        <div
          className=' max-w-[35rem] w-[85%] h-auto pb-20  bg-[#222030] mt-32 md:mt-auto m-auto rounded-xl '
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='flex flex-col justify-center items-center gap-8 pt-[4rem]'>
            {props.image}
            <h1 className='text-2xl font-bold text-white'>{props.title}</h1>
            <h2 className='text-white text-center sm:max-w-[25rem] w-[90%] '>
              {props.text}
            </h2>
            {props.button}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalLayout;
