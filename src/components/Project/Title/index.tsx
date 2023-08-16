import React from 'react';

import s from './Title.module.scss';

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <div className={s.container}>
      <h2>
        <span className={s.title}>{text}</span>
        <span className={s.dot}>.</span>
      </h2>
    </div>
  );
}
