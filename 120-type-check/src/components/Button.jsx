import PropTypes from 'prop-types';

function Button({ text, disabled = true }) {
  const statusMessage = disabled
    ? '회원가입 버튼 비활성화'
    : '회원가입 버튼 활성화';

  return (
    <button
      className={`Button ${disabled ? 'Button-inactive' : 'Button-active'}`}
      aria-label={statusMessage}
      type="button"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

function ButtonListPage() {
  const buttonText = '동의하고 시작하기';
  return (
    <div role="group">
      <Button text={buttonText} disabled={false} />
      <Button text={buttonText} disabled={true} />
    </div>
  );
}

export default ButtonListPage;
