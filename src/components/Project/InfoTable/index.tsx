import React from 'react';
import ProjectInfo from '@/types/ProjectInfo';

import s from './InfoTable.module.scss';
import Badge from '@/components/Badge/Badge';

interface InfoTableProps {
  info: ProjectInfo;
}

export default function InfoTable({ info }: InfoTableProps) {
  return (
    <table className={s.container}>
      <tbody>
        <tr className={s.row}>
          <th className={s.rowHeader}>Period.</th>
          <td>{info.period}</td>
        </tr>
        <tr className={s.row}>
          <th className={s.rowHeader}>Team.</th>
          <td>{info.team}</td>
        </tr>
        <tr className={s.row}>
          <th className={s.rowHeader}>Role.</th>
          <td>
            {info.role.map((r, i) => (
              <span key={`role-${i}`}>
                {r}
                {i !== info.role.length - 1 ? ', ' : ''}
              </span>
            ))}
          </td>
        </tr>
        <tr className={s.row}>
          <th className={s.rowHeader}>Tech Stack.</th>
          <td className={s.techStackCell}>
            {info.techStack?.backend?.map((stack) => (
              <div key={stack} className={s.badgeWrapper}>
                <Badge left={stack} color={'black'} className={s.stackBadge} />
              </div>
            ))}
            <br />
            {info.techStack?.devOps?.map((stack) => (
              <div key={stack} className={s.badgeWrapper}>
                <Badge left={stack} color={'grey'} className={s.stackBadge} />
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
