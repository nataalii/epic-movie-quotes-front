/* eslint-disable @next/next/no-img-element */
import { Exit } from 'components/icons';
import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'types/stateTypes';

const QuotesModalLayout = (props: {
  title: string;
  children: any;
  onClose: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const { name, image } = useSelector((store: RootState) => store.user);
  return (
    <div
      className=' lg:mt-20 flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={props.onClose}
    >
      <div
        className=' relative sm:w-[55rem] sm:h-auto pb-14 w-screen h-screen  bg-blue-600 m-auto rounded-xl lg:max-h-[90%] overflow-auto'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className=' absolute mt-7 right-10 cursor-pointer '
          onClick={props.onClose}
        >
          <Exit />
        </div>
        <div className='flex flex-col items-center gap-6 mt-6'>
          <h2 className='text-white'>{props.title}</h2>
          <hr className='w-full border-[#efefef4d] ' />
        </div>
        <div className=' w-[90%] m-auto'>
          <div className=' flex gap-3 items-center my-7'>
            <img
              src={`${image}`}
              alt='user avatar'
              className=' w-16 h-16 rounded-full object-cover'
            />
            <h1>{name}</h1>
          </div>
          <div className='flex flex-col gap-5'>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default QuotesModalLayout;
