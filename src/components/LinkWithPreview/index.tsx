import React, { useState } from 'react';
import classnames from 'classnames';

import s from './LinkWithPreview.module.scss';
import LinkWithIcon from '@/components/LinkWithIcon';
import ImageIcon from '@/components/Icon/ImageIcon';
import Link from 'next/link';

interface LinkWithPreviewProps {
  text: string;
  href: string;
  enableIcon?: boolean;
  className?: string;
}

export default function LinkWithPreview({
  text,
  href,
  className,
  enableIcon = false,
}: LinkWithPreviewProps) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <>
      <span
        className={classnames(s.container, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {enableIcon ? (
          <LinkWithIcon Icon={ImageIcon} text={text} href={href} />
        ) : (
          <Link href={href} target={'_blank'}>
            {text}
          </Link>
        )}
        {isHovering && (
          <div className={s.previewContainer}>
            <img className={s.preview} src={href} alt={text}></img>
          </div>
        )}
      </span>
    </>
  );
}
