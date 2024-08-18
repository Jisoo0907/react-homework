import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import S from './Doit.module.css';
import CheckboxArchived from '../CheckboxArchived/CheckboxArchived';

function Doit() {
  const [isChecked, setIsChecked] = useState(false);
  const [isArchived, setIsArchived] = useState(true);

  const handleArchivedClick = () => {
    setIsArchived((prevState) => !prevState);
  };

  const handleCheckedClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <li className={S.component}>
      <div className={S.todoTitle}>
        <h2>할 일</h2>
        <Checkbox isChecked={isChecked} onClick={handleCheckedClick} />
      </div>
      <label htmlFor="todo">
        <input type="text" id="todo" placeholder="할 일 내용을 작성합니다." />
      </label>

      <div className={S.archived}>
        <span>시간</span>
        <CheckboxArchived
          isArchived={isArchived}
          onClick={handleArchivedClick}
        />
      </div>
    </li>
  );
}
export default Doit;
