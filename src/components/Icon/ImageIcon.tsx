import React from 'react';
import { IconProps } from '@/components/Icon/IconComponent';

export default function ImageIcon({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      stroke="#000"
      strokeWidth={0.192}
      viewBox="0 0 64 64"
      width={width}
      height={height}
    >
      <path
        fill="#fff"
        d="M8 8h48v32.688l-9.113-9.113a4.005 4.005 0 0 0-5.656 0L16.805 56H8V8z"
      />
      <path d="m28.117 56 15.942-15.941L56 52v4z" />
      <path d="M60 0H4C1.789 0 0 1.789 0 4v56c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4zm-4 56H28.117l15.941-15.941L56 52v4zm0-15.312-9.113-9.113a4.005 4.005 0 0 0-5.656 0L16.805 56H8V8h48v32.688z" />
      <circle cx={24} cy={24} r={8} />
    </svg>
  );
}
