import React, { useState } from 'react';

import s from './Notice.module.scss';

interface NoticeProps {
  text: string;
  onClose?: ()=> void;
}

export default function Notice({ text, onClose }: NoticeProps) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };
  
  return (
    <div className={visible ? s.container : s.container__hidden}>
      <span className={s.content}>
        <div className={s.warning}>⚠</div>
        <div className={s.text}>{text}</div>
      </span>
      <button className={s.closeButton} onClick={handleClose}>✕</button>
    </div>
    );
}
