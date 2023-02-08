import React from 'react';
import { ButtonProps } from 'types';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={
        (props.color === 'red'
          ? ' px-6 py-2 text-white rounded-md bg-[#E31221] md:block '
          : props.color === 'transparent'
          ? ' px-6 py-2 text-white rounded-md outline-1 outline-white outline -outline-offset-1'
          : '') + props.size
      }
      onClick={props.onClick}
    >
      {props.item}
    </button>
  );
};

export default Button;
