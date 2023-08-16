import React from 'react';

export interface BadgeProps {
  left: string;
  right?: string;
  color: string;
  className?: string;
}

export default function Badge({ left, right, color, className }: BadgeProps) {
  const text = `${left}${right ? `-${right}` : ''}`;

  return (
    <img
      src={`https://img.shields.io/badge/${text}-${color}`}
      alt={text + color}
      className={className}
    />
  );
}
