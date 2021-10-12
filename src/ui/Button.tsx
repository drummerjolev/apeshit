// HMJ
import React from 'react';

type ButtonPropsType = {
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  large?: boolean;
};

const Button = ({ disabled, label, large, onClick }: ButtonPropsType): React.ReactElement => (
  <button
    className={`px-8 py-4 ${large ? 'text-3xl' : 'text-xl'} ${
      disabled ? 'opacity-50' : 'hover:bg-white hover:text-black active:white'
    } text-white uppercase border-2 rounded-full font-anton`}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
