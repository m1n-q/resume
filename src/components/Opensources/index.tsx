import React from 'react';
import Badge, { BadgeProps } from '@/components/Badge/Badge';

import s from './Opensources.module.scss';
import RepoInfo from '@/types/RepoInfo';
import { StarBadge } from '@/components/Badge';
import Header from '@/components/Header';

interface OpenSourcesProps {
  infos: RepoInfo[];
}

export default function OpenSource({ infos }: OpenSourcesProps) {
  return (
    <>
      <Header text={'Others.'} />
      <table className={s.container}>
        <tbody>
          {infos.map((info, i) => {
            const name = info.user + '/' + info.repo;
            return (
              <tr key={`${name}-row-${i}`} className={s.row}>
                <th className={s.repoInfo}>
                  <div>{name}</div>
                  <StarBadge user={info.user} repo={info.repo} />
                  {info.badgeProps?.map(
                    ({ left, right, color }: BadgeProps, i) => (
                      <Badge
                        key={`${name}-badge-${i}`}
                        left={left}
                        right={right}
                        color={color}
                      />
                    )
                  )}
                </th>
                <td className={s.content}>
                  {info.links?.map(({ href, text }, i) => (
                    <a key={`${name}-link-${i}`} href={href}>
                      {text}{' '}
                    </a>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
