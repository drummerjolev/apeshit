// HMJ

import React from 'react';

type IconButtonPropsType = {
  active?: boolean;
  icon: React.ReactElement;
  onClick?: () => void;
};

const IconButton = ({ active, icon, onClick }: IconButtonPropsType): React.ReactElement => (
  <button
    className={`w-10 p-1 h-10 md:w-8 md:h-8 m-auto flex text-center items-center text-white uppercase rounded-xl font-anton border border-transparent ${
      active
        ? 'bg-blue-500 hover:bg-blue-800'
        : 'bg-gray-600 opacity-50 border border-gray-400 hover:bg-gray-700'
    }`}
    onClick={onClick}
  >
    {icon}
  </button>
);

export default IconButton;
