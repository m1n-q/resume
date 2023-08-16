import React from 'react';

import s from './Line.module.scss';

interface LineProps {
  color?: string;
}

export default function Line({ color }: LineProps) {
  return <hr className={s.line} color={color ? color : '#e1e1e1'} />;
}
