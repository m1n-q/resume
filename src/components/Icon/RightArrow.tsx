import * as React from 'react';
import { SVGProps } from 'react';

export default function RightArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
      strokeWidth={30}
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z" />
    </svg>
  );
}
