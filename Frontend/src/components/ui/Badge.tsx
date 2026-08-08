import React from 'react';

export interface BadgeProps {
  variant?: 'blue' | 'emerald' | 'amber' | 'indigo' | 'slate' | 'outline';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  showLinePrefix?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'blue',
  icon,
  children,
  className = '',
  showLinePrefix = false,
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide";

  const variantStyles = {
    blue: "bg-blue-50 text-blue-700 border border-blue-200/80 font-semibold",
    emerald: "bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-semibold",
    amber: "bg-amber-50 text-amber-900 border border-amber-200/80 font-semibold",
    indigo: "bg-indigo-50 text-indigo-800 border border-indigo-200/80 font-semibold",
    slate: "bg-slate-100 text-slate-800 border border-slate-200 font-semibold",
    outline: "border border-slate-200 text-slate-700 bg-white font-medium",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {showLinePrefix && <span className="w-0.5 h-3.5 bg-blue-600 rounded-full shrink-0 mr-1" />}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

