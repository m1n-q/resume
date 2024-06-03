import s from '@/components/Projects/Tasks/TasksUnderCategory/TasksUnderCategory.module.scss';
import DownArrow from '@/components/Icon/DownArrow';
import RightArrow from '@/components/Icon/RightArrow';
import React, { useEffect, useRef, useState } from 'react';
import { Task } from '@/types/Task';
import cn from 'classnames';

interface TaskContentProps {
  task: Task;
}

export default function TaskContent({ task }: TaskContentProps) {
  const [showDetail, setShowDetail] = React.useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  // const fontSize = '0.8rem';
  const [fontSize, setFontSize] = useState('1rem');
  const isFoldable = task.lines && task.lines.length > 0;
  useEffect(() => {
    if (containerRef.current) {
      const computedFontSize = window.getComputedStyle(
        containerRef.current
      ).fontSize;
      setFontSize(computedFontSize);
    }
  }, []);
  return (
    <div className={s.taskContainer}>
      <span
        className={cn(s.taskHeaderContainer, isFoldable ? s.foldable : null)}
        ref={containerRef}
        onClick={() => setShowDetail(!showDetail)}
      >
        <span className={s.taskHeader}>{task.header}</span>
        {isFoldable ? (
          showDetail ? (
            <DownArrow
              className={s.foldingArrow}
              width={fontSize}
              height={fontSize}
              stroke={'#9b9898'}
              fill={'#9b9898'}
            />
          ) : (
            <RightArrow
              className={s.foldingArrow}
              width={fontSize}
              height={fontSize}
              stroke={'#9b9898'}
              fill={'#9b9898'}
            />
          )
        ) : null}
      </span>
      {showDetail && (
        <ul className={s.taskDetails}>
          {task.lines?.map((line, i) => (
            <li key={`${task.header}-line-${i}`} className={s.taskDetail}>
              <span className={s.taskDetail__content}>{line}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
