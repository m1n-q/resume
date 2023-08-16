import React from 'react';

interface StarBadgeProps {
  user: string;
  repo: string;
  color?: string;
  height?: number | string;
}

export default function StarBadge({
  user,
  repo,
  color,
  height,
}: StarBadgeProps) {
  return (
    <img
      src={`https://img.shields.io/github/stars/${user}/${repo}${
        color ? `?color=${color}` : ''
      }`}
      alt={user + repo + color}
      height={height}
    />
  );
}
