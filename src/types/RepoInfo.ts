import { BadgeProps } from '@/components/Badge/Badge';

export default interface RepoInfo {
  user: string;
  repo: string;
  badgeProps?: BadgeProps[];
  links?: { text: string; href: string }[];
}
