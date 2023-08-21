import React from 'react';
import { CategorizedTask } from '@/types/Task';

export default interface ProjectInfo {
  name: string;
  description?: string;
  team?: string;
  period?: string;
  role: React.ReactNode[];
  links?: React.ReactNode[];
  techStack?: {
    backend?: string[];
    devOps?: string[];
  };
  tasks: CategorizedTask[];
}
