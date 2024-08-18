import Button from '../Button/Button';

const buttonBlue = 'buttonBlue';
const buttonDodgerBlue = 'buttonDodgerBlue';
const buttonSkyBlue = 'buttonSkyBlue';

function ModalDialog() {
  return (
    <>
      <Button buttonColor={buttonBlue}>저장</Button>
      <Button buttonColor={buttonSkyBlue}>취소</Button>
    </>
  );
}
export default ModalDialog;
