import React from 'react';

export default interface CertificateInfo {
  title: string;
  descriptions?: React.ReactNode[];
  badgeAsset?: string;
  link?: string;
}
