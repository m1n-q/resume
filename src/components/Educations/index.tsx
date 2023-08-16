import React from 'react';

import s from './Educations.module.scss';
import EducationInfo from '@/types/EducationInfo';
import Header from '@/components/Header';

interface EducationsProps {
  educations: EducationInfo[];
}

export default function Educations({ educations }: EducationsProps) {
  return (
    <>
      <Header text={'Educations.'} />
      <table className={s.container}>
        <tbody>
          {educations.map((edu) => (
            <tr className={s.row} key={`${edu.title}`}>
              <th className={s.period}>{edu.period}</th>
              <td>
                <div className={s.title}>{edu.title}</div>
                <ul>
                  {edu.descriptions?.map((description, i) => (
                    <li
                      key={`${edu.title}-description-${i}`}
                      className={s.description}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
