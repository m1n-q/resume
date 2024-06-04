import { CategorizedTask, TaskCategory } from '@/types/Task';
import React from 'react';
import LinkWithPreview from '@/components/LinkWithPreview';

const transcendenceTasks: CategorizedTask[] = [
  {
    category: TaskCategory.BACKEND,
    tasks: [
      {
        header: <>Pub/Sub 패턴 활용으로 Horizontal Scalable한 채팅 서버 구축</>,
        lines: [
          '다른 웹소켓 인스턴스에 연결된 경우, 논리적으로 같은 채팅방에 있는 유저간 채팅이 불가',
          <>
            RabbitMQ를 이용한&nbsp;
            <LinkWithPreview
              enableIcon={true}
              text={'Pub/Sub 패턴 설계'}
              href={'/assets/chat.png'}
            />
            &nbsp;및 적용으로 Scale Out 시의 문제 해결
          </>,
        ],
      },
      {
        header: (
          <>
            <LinkWithPreview
              enableIcon={true}
              text={'인앱 알림 설계'}
              href={'/assets/push.png'}
            />
            {' 및 구현'}
          </>
        ),
        lines: [
          // <>
          //   게임 초대 등, 리얼타임 알림이 필요한 상황에서&nbsp;
          //   <strong>Best Effort</strong>&nbsp;방식의 FCM 등의 사용이 부적절
          // </>,
        ],
      },
      {
        header: (
          <>
            <LinkWithPreview
              enableIcon={true}
              text={'유저 접속 상태 기능 설계'}
              href={'/assets/presence.png'}
            />
            &nbsp;및 구현
          </>
        ),
        lines: [
          // '(1) HTTP API 기반, 마지막 접속 시간을 저장하는 방식이나 (2) 세션 기반의 방식이 접속 상태를 실시간으로 반영하지 못함',
        ],
      },
    ],
  },
];

export default transcendenceTasks;
