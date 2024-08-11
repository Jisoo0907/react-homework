import { useState } from 'react';
import {
  checkWinner,
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
} from './constants';
import History from './components/History/History';
import Board from './components/Board/Board';
import S from './Game.module.css';
import './styles/main.css';

function Game() {
  // [게임 상태] --------------------------------------------------------------

  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);

  // 게임 진행 순서
  const [gameIndex, setGameIndex] = useState(0);

  // [게임 상태 업데이트 기능] ----------------------------------------------------

  // 게임을 진행하는 함수
  const handlePlayGame = (index) => () => {
    if (winnerInfo) {
      alert('GAME OVER');
      return;
    }

    const nextGameIndex = gameIndex + 1;

    // 다음 게임 인덱스 상태 업데이트 요청
    setGameIndex(nextGameIndex);
    const nextSquares = currentSquares.map((square, idx) => {
      return idx === index ? nextPlayer : square;
    });

    // 게임의 히스토리(기억) 또한 되돌려야 함
    // 선택된 게임의 인덱스 정보를 사용해 게임 히스토리를 잘라야 한다.
    const nextGameHistory = [
      ...gameHistory.slice(0, nextGameIndex), // 기존의 gaemHistory배열에서
      // 현재 인덱스(nextGameIndex)까지의 기록 잘라내어 가져옴
      nextSquares, // 현재 턴 이후의 기록을 새로운 기록으로 대체함
    ];

    setGameHistory(nextGameHistory); // 업데이트된 게임 기록을 상태로 설정하여
    // 리액트가 다시 렌더링되도록

    // ---------------------------------------------------------------
  };

  // 시간 여행 기능(함수)
  const handleTimeTravel = (index) => {
    // 되돌리고 싶은 시간의 기억으로 게임 인덱스를 업데이트 요청
    setGameIndex(index);
  };

  // [게임 파생된 상태] ----------------------------------------------------------

  // 게임 히스토리에서 현재 게임판은?
  const currentSquares = gameHistory[gameIndex];

  const winnerInfo = checkWinner(currentSquares);
  const isPlayerOneTurn =
    currentSquares.filter(Boolean).length % PLAYER_COUNT === 0; // true
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  const isDraw = !winnerInfo && currentSquares.every(Boolean);

  return (
    <div className={S.component}>
      <Board
        squares={currentSquares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlayGame}
        isDraw={isDraw}
      />
      <History
        onTimeTravel={handleTimeTravel}
        gameHistory={gameHistory}
        gameIndex={gameIndex}
      />
    </div>
  );
}

export default Game;
