import ProjectInfo from '@/types/ProjectInfo';
import LinkWithIcon from '@/components/LinkWithIcon';
import GithubIcon from '@/components/Icon/GithubIcon';
import transcendenceTasks from '@/lib/contents/transcendenceTasks';
import Link from 'next/link';

const stacks = {
  backend: [
    'NestJS',
    'Socket.io',
    'RabbitMQ',
    // 'Typescript', 'TypeORM', 'Redis',
  ],
  devOps: [
    // 'Jenkins', 'Docker Compose'
  ],
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
  role: [
    <>
      <Link target={'_blank'} href={'/assets/transcendence-erd.png'}>
        ERD
      </Link>{' '}
      설계
    </>,
    <>
      <Link
        target={'_blank'}
        href={'https://m1n-q.github.io/transcendence/transcendence.html'}
      >
        API
      </Link>{' '}
      설계 및 개발
    </>,
  ],
  description: '채팅•DM•푸시 등 간단한 소셜 기능을 제공하는 핑퐁 웹 게임',
  techStack: {
    backend: stacks['backend'],
    devOps: stacks['devOps'],
  },
  tasks: transcendenceTasks,
};

export default transcendence;
