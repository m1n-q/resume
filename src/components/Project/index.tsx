import { Title } from './Title';
import ProjectInfo from '@/types/ProjectInfo';
import InfoTable from '@/components/Project/InfoTable';

import s from './Project.module.scss';
import Tasks from '@/components/Project/Tasks';
import { CategorizedTask } from '@/types/Task';
import Description from '@/components/Project/Description';
import Header from '@/components/Header';
import React from 'react';

interface ProjectProps {
  info: ProjectInfo;
  categorizedTasks: CategorizedTask[];
}

export default function Project({ info, categorizedTasks }: ProjectProps) {
  return (
    <div className={s.container}>
      <Header text={'Projects.'} />
      <div className={s.title}>
        <Title text={info.name} />
        <div className={s.additionalInfo}>
          <Description text={info.description ? info.description : ''} />
        </div>
      </div>
      <div className={s.tableWrapper}>
        <InfoTable info={info} />
      </div>
      <Tasks categorizedTasks={categorizedTasks} />
    </div>
  );
}
