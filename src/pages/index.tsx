import React from 'react';
import Projects from '../components/Projects';
import OpenSource from '../components/Opensources';
import AboutMe from '@/components/AboutMe';
import educations from '@/lib/contents/educations';
import openSources from '@/lib/contents/open-sources';
import aboutMe from '@/lib/contents/about-me';
import where2go from '@/lib/contents/where2go';
import Line from '@/components/Line';
import Educations from '@/components/Educations';
import transcendence from '@/lib/contents/transcendence';

export default function Home() {
  return (
    <>
      <AboutMe introduces={aboutMe.introduces} links={aboutMe.links} />
      <Line />
      <Projects infos={[where2go, transcendence]} />
      <Line />
      <OpenSource infos={openSources} />
      <Line />
      <Educations educations={educations} />
    </>
  );
}
