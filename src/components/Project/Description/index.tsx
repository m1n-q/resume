import React from 'react';

import s from './Description.module.scss';

interface DescriptionProps {
  text: string;
}

export default function Description({ text }: DescriptionProps) {
  return (
    <div className={s.container}>
      <p className={s.content}>{text}</p>
    </div>
  );
}
