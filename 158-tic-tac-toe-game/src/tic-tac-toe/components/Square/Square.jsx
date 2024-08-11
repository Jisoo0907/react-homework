import S from './Square.module.css';
import { node, func } from 'prop-types';

Square.propTypes = {
  children: node,
  onPlay: func,
};

function Square({ children, onPlay }) {
  const isDisabled = !!children; // 파생된 상태
  // children이 존재(버튼 내용 존재) => true
  // 빈 칸은 클릭 가능, 이미 표시된 칸은 클릭X

  return (
    <button className={S.component} onClick={onPlay} disabled={isDisabled}>
      {children}
    </button>
  );
}
export default Square;
