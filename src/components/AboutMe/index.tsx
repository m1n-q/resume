import React from 'react';

import s from './AboutMe.module.scss';
import Header from '@/components/Header';

interface AboutMeProps {
  introduces: string[];
  links: React.ReactNode[];
}

export default function AboutMe({ introduces, links }: AboutMeProps) {
  return (
    <>
      <Header text={'About.'} />
      <div className={s.subHeader}>신입 백엔드 개발자 신민규입니다.</div>
      <div className={s.container}>
        <ul className={s.introContainer}>
          {introduces?.map((introduce, i) => (
            <li key={`introduce-${i}`} className={s.intro}>
              {introduce}
            </li>
          ))}
        </ul>
        <ul className={s.linkContainer}>
          {links?.map((link, i) => (
            <li key={`link-${i}`} className={s.link}>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
