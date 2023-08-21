import { CategorizedTask, TaskCategory } from '@/types/Task';
import React from 'react';
import LinkWithIcon from '@/components/LinkWithIcon';
import IconComponent from '@/components/Icon/IconComponent';

function makeLink(icon: IconComponent, text: string, href?: string) {
  return <LinkWithIcon Icon={icon} text={text} href={href ? href : 'href'} />;
}

const transcendenceTasks: CategorizedTask[] = [
  {
    category: TaskCategory.BACKEND,
    tasks: [
      {
        header: <>Horizontal Scalable한 Websocket 채팅 서버 구축</>,
        lines: [
          '다른 인스턴스에 연결된 경우, 논리적으로 같은 채팅방에 있는 유저간 채팅이 불가',
          'RabbitMQ를 이용한 Pub/Sub 패턴 설계 및 적용으로 Scale Out 시의 문제 해결',
        ],
      },
      {
        header: <>실시간 푸시 알림 기능 구현</>,
        lines: [
          '게임 초대 등, 리얼타임 알림이 필요한 상황에서 FCM 의 등의 지연•유실 허용 불가',
          'Websocket 및 RabbitMQ를 이용한 자체 푸시 서버 구축으로, (최대 ?까지 걸리던) 푸시 알림을 실시간으로 개선',
        ],
      },
      {
        header: <>실시간 유저 접속 상태 기능 구현</>,
        lines: [
          '(1) HTTP API 기반, 마지막 접속 시간을 저장하는 방식이나 (2) 세션 기반의 방식이 접속 상태를 실시간으로 반영하지 못함',
          'Websocket 기반의 접속 상태 기능 설계 및 구현으로, 유저 접속 상태가 실시간으로 반영되도록 개선',
        ],
      },
    ],
  },
];

export default transcendenceTasks;
