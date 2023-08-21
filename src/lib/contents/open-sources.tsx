import RepoInfo from '@/types/RepoInfo';

const openSources: RepoInfo[] = [
  {
    user: 'golevelup',
    repo: 'nestjs',
    badgeProps: [
      {
        left: 'contributor',
        color: 'green',
      },
    ],
    links: [
      { text: 'PR', href: 'https://github.com/golevelup/nestjs/pull/535' },
      { text: 'Issue', href: 'https://github.com/golevelup/nestjs/issues/518' },
    ],
  },
  {
    user: 'kubernetes',
    repo: 'kops',
    links: [
      {
        text: 'Issue',
        href: 'https://github.com/kubernetes/kops/issues/15624',
      },
    ],
  },
  {
    user: 'tektoncd',
    repo: 'triggers',
    links: [
      {
        text: 'Issue',
        href: 'https://github.com/tektoncd/triggers/issues/1561',
      },
    ],
  },
];

export default openSources;
