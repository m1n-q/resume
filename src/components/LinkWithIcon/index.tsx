import React, { useEffect, useRef, useState } from 'react';
import IconComponent from '@/components/Icon/IconComponent';
import classnames from 'classnames';

import s from './LinkWithIcon.module.scss';

interface LinkWithIconProps {
  Icon: IconComponent;
  text: string;
  href: string;
  className?: string;
}

export default function LinkWithIcon({
  Icon,
  text,
  href,
  className,
}: LinkWithIconProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [fontSize, setFontSize] = useState('1rem');
  useEffect(() => {
    if (containerRef.current) {
      const computedFontSize = window.getComputedStyle(
        containerRef.current
      ).fontSize;
      setFontSize(computedFontSize);
    }
  }, []);

  return (
    <span className={classnames(s.container, className)} ref={containerRef}>
      <Icon width={fontSize} height={fontSize} />
      <span className={s.space}>&nbsp;</span>
      <a className={s.link} href={href} target={'_blank'}>
        {text}
      </a>
    </span>
  );
}
