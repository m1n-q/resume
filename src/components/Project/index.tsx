import { Title } from './Title';
import ProjectInfo from '@/types/ProjectInfo';
import InfoTable from '@/components/Project/InfoTable';

import s from './Project.module.scss';
import Tasks from '@/components/Project/Tasks';
import { CategorizedTask } from '@/types/Task';
import Description from '@/components/Project/Description';
import Header from '@/components/Header';
import React from 'react';
import LinkWithIcon from '@/components/LinkWithIcon';
import GithubIcon from '@/components/Icon/GithubIcon';

interface ProjectProps {
  info: ProjectInfo;
  categorizedTasks: CategorizedTask[];
}

export default function Project({ info, categorizedTasks }: ProjectProps) {
  return (
    <div className={s.container}>
      <Header text={'Projects.'} />
      <Title text={info.name} />
      <Description text={info.description ? info.description : ''} />
      <div className={s.linkContainer}>
        <LinkWithIcon Icon={GithubIcon} text={'Source'} href={'a'} />
      </div>
      <div className={s.tableWrapper}>
        <InfoTable info={info} />
      </div>
      <Tasks categorizedTasks={categorizedTasks} />
    </div>
  );
}
