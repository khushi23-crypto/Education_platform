import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const sizeClasses = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const fullWidthClass = fullWidth ? 'full-width' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${fullWidthClass} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
