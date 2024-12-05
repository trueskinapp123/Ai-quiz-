import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out";
  const variants = {
    primary: "bg-[#C17F59] text-white hover:bg-[#A66D4B] active:bg-[#8B4513]",
    secondary: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-300"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};