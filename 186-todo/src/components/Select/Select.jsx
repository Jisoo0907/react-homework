import S from './Select.module.css';

function Select() {
  return (
    <select name="time" id="time" className={S.component}>
      <option value="morning">오전</option>
      <option value="afternoon">오후</option>
    </select>
  );
}
export default Select;
