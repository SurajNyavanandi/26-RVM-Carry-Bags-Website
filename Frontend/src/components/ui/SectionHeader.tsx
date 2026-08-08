import React from 'react';
import { Badge, BadgeProps } from './Badge';

export interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: BadgeProps['variant'];
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = 'blue',
  badgeIcon,
  title,
  description,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badgeText && (
        <Badge variant={badgeVariant} icon={badgeIcon} showLinePrefix>
          {badgeText}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

