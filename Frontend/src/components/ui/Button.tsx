import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'amber' | 'emerald' | 'slate' | 'outline' | 'ghost' | 'indigo';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'emerald',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-98";

  const sizeStyles = {
    sm: "py-2 px-3.5 text-xs gap-1.5",
    md: "py-2.5 px-5 text-sm gap-2",
    lg: "py-3.5 px-6 text-base gap-2.5 rounded-2xl",
  };

  const variantStyles = {
    amber: "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md hover:shadow-amber-500/20",
    emerald: "bg-emerald-700 hover:bg-emerald-600 text-white shadow-md hover:shadow-emerald-700/20",
    slate: "bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-sm",
    indigo: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md hover:shadow-indigo-600/20",
    outline: "border border-gray-300 hover:border-emerald-600 hover:bg-emerald-50 text-slate-800",
    ghost: "text-gray-700 hover:bg-gray-100 hover:text-slate-900",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
