import React from 'react';
import { CategorizedTask } from '@/types/Task';

import s from './TasksUnderCategory.module.scss';

interface TasksUnderCategoryProps {
  categorizedTask: CategorizedTask;
}

export default function TasksUnderCategory({
  categorizedTask,
}: TasksUnderCategoryProps) {
  const { category, tasks } = categorizedTask;
  return (
    <div className={s.categoryContainer}>
      <div className={s.categoryHeader}>{category}</div>
      {tasks?.map((task, i) => (
        <div className={s.taskContainer} key={`${category}-task-${i}`}>
          <div className={s.taskHeader}>{task.header}</div>
          <ul className={s.taskDetails}>
            {task.lines?.map((line, i) => (
              <li key={`${task.header}-line-${i}`} className={s.taskDetail}>
                <span className={s.taskDetail__content}>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
