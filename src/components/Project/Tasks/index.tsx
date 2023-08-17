import React from 'react';
import { CategorizedTask } from '@/types/Task';

import s from './Tasks.module.scss';
import TasksUnderCategory from '@/components/Project/Tasks/TasksUnderCategory';

interface TasksProps {
  categorizedTasks: CategorizedTask[];
}

export default function Tasks({ categorizedTasks }: TasksProps) {
  return (
    <div className={s.container}>
      <h3 className={s.taskHeader}>Tasks.</h3>
      <ul className={s.taskBody}>
        {categorizedTasks?.map((categorizedTask) => (
          <li className={s.categorySection} key={`${categorizedTask.category}`}>
            <TasksUnderCategory categorizedTask={categorizedTask} />
          </li>
        ))}
      </ul>
    </div>
  );
}
