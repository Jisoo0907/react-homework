import { useState } from 'react';
import {
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
  WINNERS_COLOR,
  checkWinner,
} from '@/tic-tac-toe/constants';
import S from './Squares.module.css';
import Square from '../Square/Square';

/* stateful component */
function Squares() {
  /* 게임 상태 */

  const [squares, setSquares] = useState(INITIAL_SQUARES);

  /* 게임 상태 업데이트 기능 */
  // 게임을 진행하는 함수 (사용자가 특정 칸 클릭 시 실행)
  const handlePlayGame = (index) => () => {
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? currentPlayer : square;
      });
      return nextSquares;
    });
  };

  /* 게임 파생된 상태 */
  // 현재 세 개(파생 변수)
  // squares가 바뀌면 gameIndex 증가, gameIndex 증가되면 현재 player가 누군지 알 수 있음

  const winnerInfo = checkWinner(squares);
  console.log('승자는?', winnerInfo);

  // 게임 순서 (0, 1, 2, 3, ...)
  const gameIndex = squares.filter(Boolean).length;
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {/* 리액트 (JSX) 마크업 : 리스트 렌더링 */}
      {squares.map((square, index) => {
        const winnerStyles = {
          backgroundColor: null,
        };
        if (winnerInfo) {
          const [x, y, z] = winnerInfo.condition;
          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }
        return (
          <Square
            key={index}
            style={winnerStyles}
            onPlay={handlePlayGame(index)}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}
export default Squares;
