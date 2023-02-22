/* eslint-disable @next/next/no-img-element */
import { Exit } from 'components/icons';
import { useSelector } from 'react-redux';
import { ModalLayoutTypes } from 'types';
import { RootState } from 'types/stateTypes';

const QuotesModalLayout: React.FC<ModalLayoutTypes> = (props) => {
  const { name, image } = useSelector((store: RootState) => store.user);
  return (
    <div
      className=' flex inset-0 bg-[#181623] bg-opacity-60 z-50 items-center fixed '
      onClick={props.onClose}
    >
      <div
        className=' relative md:w-[55rem] md:h-auto pb-10 w-screen h-screen  bg-blue-600 m-auto rounded-xl lg:max-h-[90%] overflow-auto'
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
        <div
          className={`${
            props.title === 'view_quote'
              ? ' gap-10 mt-[4.5rem] sm:gap-6 sm:mt-6'
              : 'gap-6 mt-6'
          } flex flex-col items-center`}
        >
          <h2
            className={`${
              props.title === 'view_quote' ? 'sm:block hidden ' : ''
            }`}
          >
            {props.title}
          </h2>
          <hr className='w-full border-[#efefef4d] ' />
        </div>
        <div className=' w-[90%] m-auto'>
          <div className=' flex gap-3 items-center my-7'>
            <img
              src={`${image}`}
              alt='user avatar'
              className=' w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover'
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
