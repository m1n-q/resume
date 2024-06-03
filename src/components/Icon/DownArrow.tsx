import * as React from 'react';
import { SVGProps } from 'react';

export default function DownArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
      strokeWidth={30}
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z" />
    </svg>
  );
}
