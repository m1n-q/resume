import { Title } from './Title';
import ProjectInfo from '@/types/ProjectInfo';
import InfoTable from '@/components/Projects/InfoTable';

import s from './Projects.module.scss';
import Tasks from '@/components/Projects/Tasks';
import Description from '@/components/Projects/Description';
import Header from '@/components/Header';
import React from 'react';
import Line from '@/components/Line';

interface ProjectsProps {
  infos: ProjectInfo[];
}

export default function Projects({ infos }: ProjectsProps) {
  return (
    <div className={s.container}>
      <Header text={'Projects.'} />
      {infos.map((info, i) => (
        <div key={info.name}>
          <div className={s.title}>
            <Title text={info.name} />
            <div className={s.additionalInfo}>
              <Description text={info.description ? info.description : ''} />
            </div>
          </div>
          <div className={s.tableWrapper}>
            <InfoTable info={info} />
          </div>
          <Tasks categorizedTasks={info.tasks} />
          {i !== infos.length - 1 ? <Line /> : null}
        </div>
      ))}
    </div>
  );
}
