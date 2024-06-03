import React from 'react';
import { CategorizedTask } from '@/types/Task';

import s from './TasksUnderCategory.module.scss';
import TaskContent from '@/components/Projects/Tasks/TasksUnderCategory/TaskContent';

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
        <TaskContent task={task} key={`${category}-task-${i}`} />
      ))}
    </div>
  );
}
