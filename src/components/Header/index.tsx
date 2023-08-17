import React from 'react';

import s from './Header.module.scss';
import classnames from 'classnames';

interface HeaderProps {
  text: string;
  className?: string;
}

export default function Header({ text, className }: HeaderProps) {
  return <h1 className={classnames(s.header, className)}>{text}</h1>;
}
