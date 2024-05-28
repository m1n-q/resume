import React from 'react';

import s from './Certificates.module.scss';
import CertificateInfo from '@/types/CertificateInfo';
import Header from '@/components/Header';

interface CertificateProps {
  certificates: CertificateInfo[];
}

export default function Certificates({ certificates }: CertificateProps) {
  return (
    <>
      <Header text={'Certificates.'} />

      <div className={s.content}>
        <ul className={s.certContainer}>
          {certificates?.map((cert, i) => (
            <li key={`cert-${i}`} className={s.certItem}>
              {/*{cert.badgeAsset ? (*/}
              {/*  <Image*/}
              {/*    className={s.badge}*/}
              {/*    src={cert.badgeAsset}*/}
              {/*    alt={cert.title}*/}
              {/*    width={64}*/}
              {/*    height={64}*/}
              {/*    onClick={() => window.open(cert.link, '_blank')}*/}
              {/*  />*/}
              {/*) : null}*/}
              {cert.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
