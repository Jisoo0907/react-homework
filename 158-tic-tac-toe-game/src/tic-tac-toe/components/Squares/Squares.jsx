import { useState } from 'react';
import { INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from '@/tic-tac-toe/constants';
import S from './Squares.module.css';
import Square from '../Square/Square';

/* stateful component */
function Squares() {
  /* 게임 상태 */

  const [squares, setSquares] = useState(INITIAL_SQUARES);

  /* 게임 상태 업데이트 기능 */
  // 게임을 진행하는 함수 (사용자가 특정 칸 클릭 시 실행)
  const playGame = (index) => {
    setSquares((prevSquares) => {
      // 이전 상태 기반으로 새로운 배열 데이터 만듦
      // setSquares 호출하면서 이전 상태 기반으로 새 상태 계산하여 리턴
      // 다음 번 컴포넌트 렌더링 시, 전달(계산)된 현재 시점의 상태: 이전 스퀘어 집합을 순환해서
      const nextSquares = prevSquares.map((square, squareIndex) => {
        // 개별 스퀘어의 인덱스와 사용자 행동에 따라 선택된 인덱스를 비교한다.
        if (squareIndex === index) {
          // 클릭된 칸일 경우
          // squareIndex: 현재 순회 중인 요소의 인덱스
          // index: playGame(index) 함수 호출될 때 사용자가 클릭한 게임판의 인덱스
          return currentPlayer; // 현재 플레이어의 값을 그 칸에 채움
        }
        // 동일하지 않은 경우 그냥 이전 값을 반환한다.
        return square;
      });
      // 반환한 값이 다음 번 렌더링에서의 (스냅샷) 상태 값
      return nextSquares;
    });
  };

  /* 게임 파생된 상태 */
  // 현재 세 개(파생 변수)
  // squares가 바뀌면 gameIndex 증가, gameIndex 증가되면 현재 player가 누군지 알 수 있음

  // 게임 순서 (0, 1, 2, 3, ...)
  const gameIndex = squares.filter(Boolean).length;
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  console.log('렌더링\n\n', { squares, gameIndex, currentPlayer });

  return (
    <div className={S.component}>
      {/* 리액트 (JSX) 마크업 : 리스트 렌더링 */}
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={() => playGame(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}
export default Squares;
