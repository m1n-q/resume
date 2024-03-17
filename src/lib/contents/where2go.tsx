import ProjectInfo from '@/types/ProjectInfo';
import Link from 'next/link';
import LinkWithIcon from '@/components/LinkWithIcon';
import GithubIcon from '@/components/Icon/GithubIcon';
import ExternalLinkIcon from '@/components/Icon/ExternalLinkIcon';
import where2goTasks from '@/lib/contents/where2goTasks';
import LinkWithPreview from '@/components/LinkWithPreview';

/* TODO
 * 1. ‼️postGIS => spatial index
 * 2. FCM - (참고: https://medium.com/daangn/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93%EC%9D%98-%ED%91%B8%EC%8B%9C%EC%95%8C%EB%A6%BC%EC%9D%84-%EC%A7%80%ED%83%B1%ED%95%98%EA%B3%A0-%EC%9E%88%EB%8A%94-node-js-%EC%84%9C%EB%B9%84%EC%8A%A4-19023ad86fc)
 */

const stacks = {
  backend: [
    'Spring Boot',
    'JPA',
    'QueryDSL',
    'Redis',
    // 'postgreSQL', 'hibernate--search',
  ],
  devOps: [
    'Kubernetes',
    'AWS',
    'Tekton',
    'ArgoCD',
    // 'Prometheus', 'ELK'
  ],
};

const where2go: ProjectInfo = {
  name: 'where2go',
  period: '2023.03 -',
  team: 'Backend 1, Frontend 2',
  links: [
    <LinkWithIcon
      Icon={ExternalLinkIcon}
      text={'배포 중단'}
      href={'https://2cha.place'}
      disabled={true}
    />,
    <LinkWithIcon
      Icon={GithubIcon}
      text={'Source'}
      href={'https://github.com/2-cha/2-cha'}
    />,
  ],
  role: [
    <>
      <LinkWithPreview text={'ERD'} href={'/assets/where2go-erd.png'} /> 설계
    </>,
    <>
      <Link target={'_blank'} href={'https://2-cha.github.io/openapi'}>
        API
      </Link>{' '}
      설계 및 구현
    </>,
    <>
      <LinkWithPreview
        text={'AWS 인프라'}
        href={'/assets/where2go-aws.png'}
        // enableIcon={true}
      />{' '}
      설계 및 구성
    </>,
  ],
  description:
    '2차로 갈 장소를 미리 찾아보지 못했다면?\n주변 장소를 살필 수 있는 술집 소셜 리뷰 플랫폼',
  techStack: {
    backend: stacks['backend'],
    devOps: stacks['devOps'],
  },
  tasks: where2goTasks,
};

export default where2go;
