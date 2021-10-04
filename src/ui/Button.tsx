// HMJ
import React from 'react';

type ButtonPropsType = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonPropsType): React.ReactElement => (
  <button
    className="px-4 py-2 font-bold text-white rounded-lg colorful hover:bg-white"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
