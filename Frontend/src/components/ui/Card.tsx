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
      className={`bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-sm ${
        hoverable ? 'hover:shadow-md hover:border-emerald-300 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
