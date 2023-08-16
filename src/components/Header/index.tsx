import React from 'react';

import s from './Header.module.scss';

interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return <h1 className={s.header}>{text}</h1>;
}
