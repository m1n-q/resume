import { CategorizedTask, TaskCategory } from '@/types/Task';
import React from 'react';
import LinkWithIcon from '@/components/LinkWithIcon';
import PullRequestIcon from '@/components/Icon/PullRequestIcon';
import GithubIcon from '@/components/Icon/GithubIcon';
import IconComponent from '@/components/Icon/IconComponent';
import KibanaIcon from '@/components/Icon/KibanaIcon';
import LinkWithPreview from '@/components/LinkWithPreview';

function makeLink(
  icon: IconComponent,
  text: string,
  href?: string,
  disabled?: boolean
) {
  return (
    <LinkWithIcon
      Icon={icon}
      text={text}
      href={href ? href : 'href'}
      disabled={disabled}
    />
  );
}

const where2goTasks: CategorizedTask[] = [
  {
    category: TaskCategory.BACKEND,
    tasks: [
      {
        header: 'Spring Boot API 서버 구축',
        lines: ['주변 장소 쿼리', '리뷰 및 태그', '큐레이션 기능 등'],
      },
      {
        header: (
          <>
            {makeLink(
              PullRequestIcon,
              '병렬 처리',
              'https://github.com/2-cha/2-cha/pull/39'
            )}
            를 통해 API RT 평균 30% 개선
          </>
        ),
        lines: [
          <>
            {
              '업로드 된 사진의 메타데이터를 기반으로 장소를 제안하는 기능 - (1) '
            }
            <ins>사진 S3 업로드</ins>
            {' 및 (2) '}
            <ins>DB 쿼리</ins>
            {' 필요'}
          </>,
          '외부 API 콜과 DB 쿼리의 절차적 처리로 인해 느린 API 응답 속도를,\n두 작업을 completableFuture / thenCombine을 이용해 병렬적으로 처리하여 개선',
        ],
      },
      {
        header: 'Spatial Index 적용으로 장소 리스팅 쿼리 성능 2배 향상',
      },
      {
        header: (
          <>
            Collaborative Filtering 활용&nbsp;
            {makeLink(
              PullRequestIcon,
              '추천 시스템 구현',
              'https://github.com/2-cha/2-cha/pull/103'
            )}
          </>
        ),
        lines: [
          '유저의 활동을 기반으로 선호를 수치화하여, Collaborative Filtering을 적용',
          '위치•최신순 기반의 Hybrid 방식 적용으로 Cold Start Problem 및 추천 로직에 대한 Fallback 마련',
        ],
      },
      {
        header: (
          <>
            Okapi BM25 Rank 알고리즘을 사용한&nbsp;
            {makeLink(
              PullRequestIcon,
              '유사 게시글 추천 기능 구현',
              'https://github.com/2-cha/2-cha/pull/108'
            )}
          </>
        ),
        lines: [
          '다른 큐레이션으로의 자연스러운 탐색 유도를 위해,\n유저가 읽은 큐레이션의 타이틀•부제•태그를 활용한 유사 게시글 추천',
        ],
      },
      {
        header: '필터•정렬 기능을 추상화하여 동적 쿼리의 유지보수성 제고',
        lines: [
          '장소 나열 시 제공되는 필터 및 정렬에 대해, 모든 조합마다 각각의 쿼리를 짜는 것은 유지보수성을 저하시킨다고 판단',
          '필터에 해당하는 where절, 정렬에 해당하는 order by 절을 QueryDSL을 이용하여 동적으로 구성 및 전략으로 추상화',
        ],
      },
      // {
      //   header:
      //     '리뷰 작성 과정에서 태그 검색 시, 한글 초성•하이라이팅 지원으로 사용자 편의성 증대',
      //   lines: [
      //     '리뷰 작성 과정을 간소화하여 유저 이탈 요소를 최소화 하고자,',
      //     <>
      //       {makeLink(
      //         PullRequestIcon,
      //         '한글 초성 검색 및 매칭 문자 하이라이팅',
      //         'https://github.com/2-cha/2-cha/pull/86'
      //       )}
      //       이 가능한 검색 기능 구현
      //     </>,
      //   ],
      // },
      {
        header: 'OpenID 및 JWT를 이용한 인증 구현',
      },
    ],
  },
  {
    category: TaskCategory.DEVOPS,
    tasks: [
      {
        header: (
          <>
            <LinkWithPreview
              text={'AWS'}
              href={'/assets/where2go-aws.png'}
              // enableIcon={true}
            />
            {'•Kubernetes 기반 인프라 구축 및 운영'}
          </>
        ),
      },
      {
        header:
          '매뉴얼한 운영 작업 개선으로, 장애 시 클러스터 복구 시간 1/6로 단축',
        lines: [
          <>
            {'ArgoCD 사용 '}
            {makeLink(
              GithubIcon,
              'GitOps 레포지토리',
              'https://github.com/2-cha/gitops-config/tree/main'
            )}
            {' 구축'}
          </>,
          'kops 클러스터 템플릿 활용 IaC 도입',
        ],
      },
      {
        header: '비용 모니터링 및 관리 작업으로 CSP 리소스 비용 32% 절감',
      },
      {
        header: 'ArgoCD•Tekton CI/CD 파이프라인 구축',
        lines: [
          <>
            {makeLink(
              GithubIcon,
              '모듈(디렉토리) 기반의 Tekton 파이프라인 템플릿',
              'https://github.com/2-cha/gitops-config/blob/main/docs/README.md#cicd-with-tekton--argocd'
            )}
          </>,
        ],
      },
      // {
      //   header: 'Redis Auto Failover 구성',
      //   lines: [
      //     // '인증 로직과 연관된 Redis의 안정적인 운영 필요',
      //     'Refresh Token 중앙 저장소',
      //     'Redis sentinel + HAproxy를 이용한 HA 구성',
      //   ],
      // },
      {
        header: 'k8s HPA, CA 활용 Autoscaling 구축으로 리소스 Utilization 관리',
        lines: [
          // 'Prometheus + k8s HPA를 이용한 Autoscaling 구축으로 부하상황에서의 평균 RT 개선 및 TPS 유지',
        ],
      },
      {
        header: (
          <>
            로그 중앙집중화 및{' '}
            {makeLink(
              KibanaIcon,
              '대시보드',
              'https://api.2chaproj.com/kibana/app/dashboards#/view/4de3fae0-084b-11ee-b8f1-057c5d5c739d',
              true
            )}{' '}
            구축
          </>
        ),
        lines: [
          'Multi-instance로 배포중인 애플리케이션의 로그가 산발적이어서 확인이 어려움',
          'Logback + ELK Integration으로 로그의 중앙집중화 달성',
        ],
      },
    ],
  },
];

export default where2goTasks;
