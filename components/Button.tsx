import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white';
  fullWidth?: boolean;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  href,
  target,
  ...props 
}) => {
  const baseStyles = "px-8 py-3.5 rounded-full font-medium transition-transform active:scale-95 text-lg shadow-md inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-amazon text-black hover:bg-amazon-light",
    white: "bg-white text-amazon-dark hover:bg-gray-100"
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};