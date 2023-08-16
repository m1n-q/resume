import React from 'react';
import Project from '@/components/Project';
import OpenSource from '../components/Opensources';
import AboutMe from '@/components/AboutMe';
import tasks from '@/lib/contents/tasks';
import educations from '@/lib/contents/educations';
import openSources from '@/lib/contents/open-sources';
import aboutMe from '@/lib/contents/about-me';
import where2go from '@/lib/contents/where2go';
import Line from '@/components/Line';
import Educations from '@/components/Educations';

export default function Home() {
  return (
    <>
      <AboutMe introduces={aboutMe.introduces} links={aboutMe.links} />
      <Line />
      <Project info={where2go} categorizedTasks={tasks} />
      <Line />
      <OpenSource infos={openSources} />
      <Line />
      <Educations educations={educations} />
    </>
  );
}
