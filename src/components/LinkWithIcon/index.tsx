import React, { useEffect, useRef, useState } from 'react';
import IconComponent from '@/components/Icon/IconComponent';
import classnames from 'classnames';

import s from './LinkWithIcon.module.scss';

interface LinkWithIconProps {
  Icon: IconComponent;
  text: string;
  href: string;
  disabled?: boolean;
  className?: string;
}

export default function LinkWithIcon({
  Icon,
  text,
  href,
  disabled,
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
      <span>
        <Icon width={fontSize} height={fontSize} />
      </span>
      <span className={s.space}>&nbsp;</span>
      <a
        className={disabled ? s.disabled : s.link}
        href={href}
        target={'_blank'}
      >
        {text}
      </a>
    </span>
  );
}
