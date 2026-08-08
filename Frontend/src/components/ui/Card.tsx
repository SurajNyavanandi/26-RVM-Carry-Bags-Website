import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs ${
        hoverable ? 'hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

