import React from 'react';

const IconLogout = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 32 32">
      <title>exit</title>
      <path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>
    </svg>
  );
};

export default IconLogout;

