import React from 'react';
import { IconProps } from '@/components/Icon/IconComponent';

export default function KibanaIcon({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="-43 0 342 342"
      width={width}
      height={height}
    >
      <path
        fill="#009B90"
        d="M0 306.93v34.012h15.986L156.32 172.718a265.907 265.907 0 0 0-30.34-17.006L0 306.929Z"
      />
      <path
        fill="#40BEB0"
        d="M156.324 172.718 15.922 341.01h239.65c0-68.569-38.91-129.519-99.248-168.292Z"
      />
      <path fill="#EF5098" d="M0 0v307.445L256 0z" />
      <path
        fill="#353535"
        d="m.068 307.34 126.175-151.495C86.693 137.372 43.651 127.805 0 128.003L.068 307.34Z"
      />
    </svg>
  );
}
