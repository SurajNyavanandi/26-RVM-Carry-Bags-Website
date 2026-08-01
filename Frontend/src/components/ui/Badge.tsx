import React from 'react';

export interface BadgeProps {
  variant?: 'emerald' | 'amber' | 'indigo' | 'slate' | 'outline';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'emerald',
  icon,
  children,
  className = '',
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider";

  const variantStyles = {
    emerald: "bg-emerald-100 text-emerald-900 border border-emerald-200",
    amber: "bg-amber-100 text-amber-900 border border-amber-200",
    indigo: "bg-indigo-100 text-indigo-900 border border-indigo-200",
    slate: "bg-slate-100 text-slate-800 border border-slate-200",
    outline: "border border-gray-300 text-gray-700 bg-white",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
