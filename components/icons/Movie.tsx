import React from 'react';

function Movie(props: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
    >
      <path
        fill={props.color}
        d='M12 6A6 6 0 110 6a6 6 0 0112 0zM2 6a4 4 0 108 0 4 4 0 00-8 0z'
      ></path>
      <path
        fill={props.color}
        d='M18 12h1a4 4 0 013.966 3.476l6.22-2.764A1.999 1.999 0 0132 14.538v14.924a2 2 0 01-2.812 1.826l-6.222-2.764A4 4 0 0119 32H4a4 4 0 01-4-4V16a4 4 0 014-4h14zm12 2.54l-7 3.11v8.7l7 3.112V14.54zM2 16v12a2 2 0 002 2h15a2 2 0 002-2V16a2 2 0 00-2-2H4a2 2 0 00-2 2z'
      ></path>
      <path
        fill={props.color}
        d='M18 12a6 6 0 100-12 6 6 0 000 12zm-4-6a4 4 0 118 0 4 4 0 01-8 0z'
      ></path>
    </svg>
  );
}

export default Movie;
