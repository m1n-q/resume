import GithubIcon from '@/components/Icon/GithubIcon';
import LinkWithIcon from '@/components/LinkWithIcon';
import LinkWithPreview from '@/components/LinkWithPreview';
import pongTasks from '@/lib/contents/pongTasks';
import ProjectInfo from '@/types/ProjectInfo';
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

const pong: ProjectInfo = {
  name: '42pong',
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
      <LinkWithPreview text={'ERD'} href={'/assets/transcendence-erd.png'} />{' '}
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
  description: '채팅•DM 등 간단한 소셜 기능을 제공하는 핑퐁 웹 게임',
  techStack: {
    backend: stacks['backend'],
    devOps: stacks['devOps'],
  },
  tasks: pongTasks,
};

export default pong;
