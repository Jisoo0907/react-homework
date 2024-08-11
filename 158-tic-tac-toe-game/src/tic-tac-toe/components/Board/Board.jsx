import { useState } from 'react';
import Squares from '../Squares/Squares';
import Status from '../Status/Status';
import S from './Board.module.css';
import {
  checkWinner,
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
} from '@/tic-tac-toe/constants';

function Board() {
  // 게임판 상태
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  // 게임을 진행하는 함수
  const handlePlayGame = (index) => () => {
    if (winnerInfo) {
      alert('GAME OVER');

      return;
    }

    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? currentPlayer : square;
      });

      return nextSquares;
    });
  };

  // [게임 파생된 상태] ----------------------------------------------------------
  const winnerInfo = checkWinner(squares);
  const gameIndex = squares.filter(Boolean).length; // 0
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0; // true
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      <Status />
      <Squares // Squares 컴포넌트에 필요한 props 전달
        squares={squares}
        winnerInfo={winnerInfo}
        onPlay={handlePlayGame}
      />
    </div>
  );
}

export default Board;
