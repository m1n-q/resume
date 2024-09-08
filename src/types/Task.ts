import React from 'react';

export enum TaskCategory {
  // eslint-disable-next-line no-unused-vars
  BACKEND = 'Backend',
  // eslint-disable-next-line no-unused-vars
  DEVOPS = 'Devops',
}

export interface Task {
  header: React.ReactNode;
  headerDescription?: React.ReactNode;
  lines?: React.ReactNode[];
}

export interface CategorizedTask {
  category: TaskCategory;
  tasks: Task[];
}
