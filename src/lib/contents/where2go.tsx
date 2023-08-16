import ProjectInfo from '@/types/ProjectInfo';
import stacks from '@/lib/contents/stacks';
import Link from 'next/link';

const where2go: ProjectInfo = {
  name: 'where2Go',
  period: '2023.03 -',
  team: 'Backend 1, Frontend 2',
  role: [
    <>
      <Link href={'abc'}>ERD</Link> 설계
    </>,
    <>
      <Link href={'abc'}>API</Link> 설계 및 구현
    </>,
    <>
      <Link href={'abc'}>AWS 인프라</Link> 설계 및 구성
    </>,
  ],
  description:
    '2차로 갈 장소를 미리 찾아보지 못했다면?\n주변 장소를 살필 수 있는 술집 소셜 리뷰 플랫폼',
  techStack: {
    backend: stacks['backend'],
    devOps: stacks['devOps'],
  },
};

export default where2go;
