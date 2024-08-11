import S from './Squares.module.css';
import { INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from '@/tic-tac-toe/constants';
import Square from '../Square/Square';
import { useState } from 'react';

function Squares() {
  /* Game State */
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  /*  update game state feature */
  const handlePlay = (index) => {
    console.log(`play game #${index}`);
  };

  /* Game Derived State */
  // game order
  const gameIndex = squares.filter(Boolean).length % PLAYER_COUNT;
  // current game player
  const currentPlayer = gameIndex === 0 ? PLAYER.ONE : PLAYER.TWO;
  // switching player 0 -> 1 -> 0 ...

  return (
    <div className={S.component}>
      {/* list rendering */}
      {squares.map((square, index) => {
        return <Square key={index} onPlay={handlePlay(index)}></Square>;
      })}
    </div>
  );
}
export default Squares;
