import { CategorizedTask, TaskCategory } from '@/types/Task';

const pushManagerTasks: CategorizedTask[] = [
  {
    category: TaskCategory.DEVOPS,
    tasks: [
      {
        header:
          '서버리스 아키텍쳐 구성으로 비용 효율적 시스템 구축 (월 $37.44 → $0.004)',
        lines: [
          'AWS EventBridge와 Lambda를 사용하여 서버리스 Job Scheduler 구성',
          'API Gateway와 Lambda를 활용하여 서버리스 API 서버 구축',
          // 'SSO 연동',
        ],
      },
      {
        header:
          '인프라 프로비저닝 자동화로, 효율적인 계정간 리소스 이전 (10분)',
      },
    ],
  },
];

export default pushManagerTasks;
