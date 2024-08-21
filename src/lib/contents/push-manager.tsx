import ExternalLinkIcon from '@/components/Icon/ExternalLinkIcon';
import GithubIcon from '@/components/Icon/GithubIcon';
import LinkWithIcon from '@/components/LinkWithIcon';
import pushManagerTasks from '@/lib/contents/push-manager-tasks';
import ProjectInfo from '@/types/ProjectInfo';

const stacks = {
  backend: ['Terraform', 'AWS Eventbridge', 'AWS Lambda'],
};

const pushManager: ProjectInfo = {
  name: 'push manager',
  period: '2024.08 -',
  team: '1인 개발',
  links: [
    <LinkWithIcon Icon={ExternalLinkIcon} text={'Demo'} href={'TODO'} />,
    <LinkWithIcon Icon={GithubIcon} text={'Source'} href={'TODO'} />,
  ],
  role: ['AWS 서버리스 인프라 구축', 'Terraform 코드 작성'],
  description: '설정한 루틴에 맞추어,\nOO 메신저에 메시지를 보내는 서버리스 앱',
  techStack: stacks,
  tasks: pushManagerTasks,
};

export default pushManager;
