import React from 'react';

const Button: React.FC<{ item: string; color: string }> = (props) => {
  return (
    <button
      className={
        props.color === 'red'
          ? ' px-6 py-2 rounded-md bg-[#E31221] hidden md:block'
          : props.color === 'transparent'
          ? 'px-5 py-2 rounded-md outline-1 outline-white outline -outline-offset-1'
          : ''
      }
    >
      {props.item}
    </button>
  );
};

export default Button;
