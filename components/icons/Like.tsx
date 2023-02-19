import React from 'react';

interface LikeProps {
  color: string;
}

const Like: React.FC<LikeProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='30'
      fill='none'
      viewBox='0 0 32 30'
    >
      <path
        fill={props.color}
        d='M16 5.496l-1.434-1.474C11.2.562 5.028 1.756 2.8 6.106c-1.046 2.046-1.282 5 .628 8.77C5.268 18.506 9.096 22.854 16 27.59c6.904-4.736 10.73-9.084 12.572-12.714 1.91-3.772 1.676-6.724.628-8.77C26.972 1.756 20.8.56 17.434 4.02L16 5.496zM16 30C-14.666 9.736 6.558-6.08 15.648 2.286c.12.11.238.224.352.342.113-.118.23-.231.352-.34C25.44-6.084 46.666 9.734 16 30z'
      ></path>
    </svg>
  );
};

export default Like;
