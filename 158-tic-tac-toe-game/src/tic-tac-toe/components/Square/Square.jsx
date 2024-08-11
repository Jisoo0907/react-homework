import S from './Square.module.css';
import { node } from 'prop-types';

Square.propTypes = {
  children: node,
};

function Square({ children }) {
  const isDisabled = !!children;
  // children이 존재(버튼 내용 존재) => true
  // 빈 칸은 클릭 가능, 이미 표시된 칸은 클릭X

  return (
    <button className={S.component} disabled={isDisabled}>
      {children}
    </button>
  );
}
export default Square;
