import LinkWithIcon from '@/components/LinkWithIcon';
import GithubIcon from '@/components/Icon/GithubIcon';
import MailIcon from '@/components/Icon/MailIcon';

const aboutMe = {
  introduces: [
    '새로운 기술을 배우고 적용해나가는 과정을 좋아합니다.',
    // '좋은 코드를 작성하기 위해 노력합니다.', // 변수, 함수 추상화 수준, 의존성 걷어내기
    '활발한 피드백 문화 속에서 함께 성장하고 싶습니다.',
    // 'Spring Boot•JPA를 활용한 API 서버 개발 경험이 있으며, AWS•K8S 를 활용한 인프라 운영에 관심을 두고 학습하고 있습니다.',

    // '함께의 힘을 인지합니다.',
    // '유지보수성과 확장성을 고민합니다.',
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
      href={'mailto:m1nq.dev@gmail.com'}
    />,
  ],
};

export default aboutMe;
