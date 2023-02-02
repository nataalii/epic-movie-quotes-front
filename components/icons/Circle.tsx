import React from 'react';

function Circle(props: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='4'
      height='5'
      fill='none'
      viewBox='0 0 4 5'
    >
      <circle cx='2' cy='2.5' r='2' fill={props.color}></circle>
    </svg>
  );
}

export default Circle;
