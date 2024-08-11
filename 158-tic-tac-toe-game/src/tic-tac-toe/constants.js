// 게임에서 사용될 플레이어를 상수로 정의
export const PLAYER = {
  ONE: '🍰',
  TWO: '☕',
};

export const PLAYER_COUNT = Object.keys(PLAYER).length;

// 스퀘어 집합 초기 상태 값
export const INITIAL_SQUARES = Array(9).fill(null);
