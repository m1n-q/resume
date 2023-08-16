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
      { text: 'PR', href: 'string' },
      { text: 'Issue', href: 'string' },
    ],
  },
  {
    user: 'kubernetes',
    repo: 'kops',
    links: [{ text: 'Issue', href: 'string' }],
  },
  {
    user: 'tektoncd',
    repo: 'triggers',
    links: [{ text: 'PR', href: 'string' }],
  },
];

export default openSources;
