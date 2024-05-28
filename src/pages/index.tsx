import React, { DetailedHTMLProps, useEffect, useRef, useState } from 'react';
import Projects from '../components/Projects';
import OpenSource from '../components/Opensources';
import AboutMe from '@/components/AboutMe';
import Certificates from '@/components/Certificates';
import educations from '@/lib/contents/educations';
import openSources from '@/lib/contents/open-sources';
import aboutMe from '@/lib/contents/about-me';
import where2go from '@/lib/contents/where2go';
import Line from '@/components/Line';
import Educations from '@/components/Educations';
import transcendence from '@/lib/contents/transcendence';
import certificates from '@/lib/contents/certificates';
import Notice from '@/components/Notice';
import { useReactToPrint } from 'react-to-print';

export default function Home() {
  const [showNotice, setShowNotice] = useState(true);
  const pageRef = useRef<DetailedHTMLProps<any, any>>();

  const print = useReactToPrint({
    content: () => pageRef.current,
    documentTitle: `resume - ${new Date().toISOString().slice(0, 10)}`,
    onAfterPrint: () => console.log('print done!'),
  });
  const onPrintKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key == 'p') {
      e.preventDefault();
      print();
    }
  };

  const handleCloseNotice = () => {
    setShowNotice(false);
  };
  useEffect(() => {
    window.addEventListener('keydown', onPrintKeyDown, false);
    return () => window.removeEventListener('keydown', onPrintKeyDown, false);
  }, [onPrintKeyDown]);

  return (
    <div ref={pageRef}>
      {showNotice && (
        <Notice
          text="배포 상태에 따라 일부 링크가 동작하지 않을 수 있습니다."
          onClose={handleCloseNotice}
        />
      )}
      <AboutMe introduces={aboutMe.introduces} links={aboutMe.links} />
      <Line />
      <Projects infos={[where2go, transcendence]} />
      <Line />
      <OpenSource infos={openSources} />
      <Line />
      <Certificates certificates={certificates} />
      <Line />
      <Educations educations={educations} />
    </div>
  );
}
