// HMJ
import React from 'react';

type ButtonPropsType = {
  label: string;
  onClick?: () => void;
  large?: boolean;
};

const Button = ({ label, large, onClick }: ButtonPropsType): React.ReactElement => (
  <button
    className={`px-8 py-4 ${
      large ? 'text-3xl' : 'text-xl'
    } text-white uppercase border-2 rounded-full active:white font-anton hover:bg-white hover:text-black`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
