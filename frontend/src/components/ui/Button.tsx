// src/components/Button.tsx
import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

function Button({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}:ButtonProps){
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition duration-200';
  const variants = {
    primary: 'hover:bg-[#eeee] hover:text-black hover:underline-offset2 hover:underline bg-[#070758] text-white',
    secondary: 'bg-[#e60028] text-white hover:bg-[#a1001c] hover:text-white hover:hover:underline-offset2 hover:underline',
  };
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ''}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;