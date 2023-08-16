import LinkWithIcon from '@/components/LinkWithIcon';
import GithubIcon from '@/components/Icon/GithubIcon';
import MailIcon from '@/components/Icon/MailIcon';

const aboutMe = {
  introduces: [
    '새로운 기술을 배우고 적용해나가는 과정을 좋아합니다.',
    '함께의 힘을 인지합니다.',
    '유지보수성과 확장성을 고민합니다.',
  ],
  links: [
    <LinkWithIcon
      Icon={GithubIcon}
      text={'m1n-q'}
      href={'https://github.com/m1n-q'}
    />,
    <LinkWithIcon
      Icon={MailIcon}
      text={'m1nq.dev@gmail.com'}
      href={'m1nq.dev@gmail.com'}
    />,
  ],
};

export default aboutMe;
