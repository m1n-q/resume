import React from 'react';

import s from './Layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={s.root}>{children}</div>;
}
