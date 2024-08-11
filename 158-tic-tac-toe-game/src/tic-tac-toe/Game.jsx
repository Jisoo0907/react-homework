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
  // 왜 배열로 초기 상태를 설정하나?
  // gameHistory가 게임의 진행 상태를 기록하는 역할이기 때문

  // 게임 진행 순서
  const [gameIndex, setGameIndex] = useState(0);

  // [게임 상태 업데이트 기능] ----------------------------------------------------

  // 게임을 진행하는 함수
  const handlePlayGame = (index) => () => {
    if (winnerInfo) {
      alert('GAME OVER');

      return;
    }

    // 다음 게임의 인덱스는? -----------------------------------------------
    const nextGameIndex = gameIndex + 1;
    // 다음 게임 인덱스 상태 업데이트 요청
    setGameIndex(nextGameIndex);

    // 게임 히스토리에 기록을 추가
    const nextSquares = currentSquares.map((square, idx) => {
      // currentSquares: 현재 보드의 상태
      // idx: 현재 요소의 인덱스
      // index: 함수 외부에서 전달된 값
      return idx === index ? nextPlayer : square;
      // 현재 요소의 인덱스(idx)가 사용자가 선택한 index와 같은지 확인
      // 같으면 nextPlayer 반환
      // 아니면 기존 값 유지
    });

    // [ [null, ..., null] ]
    // [ [null, ..., null], ['one', ..., null] ]
    const nextGameHistory = [...gameHistory, nextSquares];
    // nextSquares: 현재 턴에서 업데이트된 보드의 상태
    // 사용자가 이번 턴에 플레이한 결과
    // 새로운 게임 상태를 gameHistory에 추가, 그 결과를 업데이트된 상태로 설정

    setGameHistory(nextGameHistory);

    // ---------------------------------------------------------------
  };

  // [게임 파생된 상태] ----------------------------------------------------------

  // 게임 히스토리에서 현재 게임판은? 현재 게임 상태 가져오는 것
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
      <History gameHistory={gameHistory} />
    </div>
  );
}

export default Game;
