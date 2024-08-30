import Header from '@/components/Header';
import CertificateInfo from '@/types/CertificateInfo';
import Image from 'next/image';
import React from 'react';

import s from './Certificates.module.scss';

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
              {cert.badgeAsset ? (
                <Image
                  className={s.badge}
                  src={cert.badgeAsset}
                  alt={cert.title}
                  width={128}
                  height={128}
                  onClick={() => window.open(cert.link, '_blank')}
                />
              ) : null}
              <span className={s.certTitle}>{cert.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
