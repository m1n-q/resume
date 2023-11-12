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
  // const [showNotice, setShowNotice] = useState(true);
  //
  // const handleCloseNotice = () => {
  //   setShowNotice(false);
  // };

  return (
    <>
      {/*{showNotice &&*/}
      {/* <Notice text="배포 상태에 따라 일부 링크가 동작하지 않을 수 있습니다." onClose={handleCloseNotice} />*/}
      {/*  }*/}
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
