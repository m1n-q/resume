import ProjectInfo from '@/types/ProjectInfo';
import stacks from '@/lib/contents/stacks';
import Link from 'next/link';
import LinkWithIcon from '@/components/LinkWithIcon';
import GithubIcon from '@/components/Icon/GithubIcon';
import ExternalLinkIcon from '@/components/Icon/ExternalLinkIcon';

const where2go: ProjectInfo = {
  name: 'where2go',
  period: '2023.03 -',
  team: 'Backend 1, Frontend 2',
  links: [
    <LinkWithIcon
      Icon={ExternalLinkIcon}
      text={'Site'}
      href={'https://2cha.place'}
    />,
    <LinkWithIcon
      Icon={GithubIcon}
      text={'Source'}
      href={'https://github.com/2-cha/2-cha'}
    />,
  ],
  role: [
    <>
      <Link
        href={
          'https://file.notion.so/f/s/e9b79e90-893d-4b48-a109-08e08ea2f15a/Untitled.png?id=debc1a07-e882-4e71-958b-d466f78c7a9b&table=block&spaceId=624e0183-ccdc-41bf-a118-a1f3496c6086&expirationTimestamp=1692338400000&signature=9KR985Gv9OI92T57JQjWWgd_f7B29DXqopT7KhdN_I4&downloadName=Untitled.png'
        }
      >
        ERD
      </Link>{' '}
      설계
    </>,
    <>
      <Link href={'https://2-cha.github.io/openapi'}>API</Link> 설계 및 구현
    </>,
    <>
      <Link
        href={
          'https://viewer.diagrams.net/?border=0&tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=where2go-aws.drawio#Uhttps://drive.google.com/uc?id=1fpc_Ro9haMf97S7CP_ZK0JhkO8qq0ase&export=download'
        }
      >
        AWS 인프라
      </Link>{' '}
      설계 및 구성
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
