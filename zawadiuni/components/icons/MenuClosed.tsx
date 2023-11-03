import React from 'react';

function Icon(props: { className?: string; handleClick: () => void }) {
  const { className, handleClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      version="1"
      viewBox="0 0 512 512"
      className={className}
      onClick={handleClick}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
    >
      <path
        d="M560 3970v-200h4000v400H560v-200zM957 3002l-397-397 400-400c221-220 403-402 406-405 2-2 68 59 144 135l140 140-262 262-263 263 263 263 262 262-138 138c-75 75-142 137-147 137-6 0-189-179-408-398zM1840 2650v-200h2720v400H1840v-200zM560 1330v-200h4000v400H560v-200z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default Icon;
