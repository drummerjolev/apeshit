// HMJ
import React from 'react';

type ButtonPropsType = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonPropsType): React.ReactElement => (
  <button
    className="px-8 py-4 text-3xl text-white border-2 rounded-full active:white font-anton hover:bg-white hover:text-black"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
