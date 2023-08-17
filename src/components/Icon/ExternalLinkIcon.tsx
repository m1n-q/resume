import React from 'react';
import { IconProps } from '@/components/Icon/IconComponent';

export default function ExternalLinkIcon({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        clipPath="url(#a)"
      >
        <path d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15 20 4M15 4h5v5" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
