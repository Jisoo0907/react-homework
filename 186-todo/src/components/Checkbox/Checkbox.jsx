function Checkbox({ isChecked, onClick }) {
  return (
    <>
      {isChecked ? (
        <img src="/icon/checkedTrue.svg" alt="Checked" onClick={onClick} />
      ) : (
        <img src="/icon/checkedFalse.svg" alt="Unchecked" onClick={onClick} />
      )}
    </>
  );
}
export default Checkbox;
