import ProjectInfo from '@/types/ProjectInfo';
import LinkWithIcon from '@/components/LinkWithIcon';
import GithubIcon from '@/components/Icon/GithubIcon';
import transcendenceTasks from '@/lib/contents/transcendenceTasks';

/* TODO
 * 1. 말 정리해놓기
 * 2. ERD, API 문서 넣기
 * 3. ‼️각 구현 내용 아키텍처 그리기
 * 4. 실행 방법 및 기능 상세 README
 * 5. 기타 API 구현한 것을 어떻게 어필할지?
 */

const stacks = {
  backend: [
    'Typescript',
    'NestJS',
    'TypeORM',
    'postgreSQL',
    'Redis',
    'RabbitMQ',
  ],
  devOps: ['Jenkins', 'Docker Compose'],
};

const transcendence: ProjectInfo = {
  name: 'transcendence',
  period: '2022.11 - 2022.12',
  team: 'Backend 2, Frontend 2',
  links: [
    <LinkWithIcon
      Icon={GithubIcon}
      text={'Source'}
      href={'https://github.com/over-the-inner-circle/transcendence'}
    />,
  ],
  role: ['ERD 설계', 'API 설계 및 개발'],
  description: '채팅•DM•푸시 등 간단한 소셜 기능을 제공하는 핑퐁 웹 게임',
  techStack: {
    backend: stacks['backend'],
    devOps: stacks['devOps'],
  },
  tasks: transcendenceTasks,
};

export default transcendence;
